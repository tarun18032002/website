
// ===========================================
// ATSG - VERCEL FORM API
// ===========================================

// Supported website form fields
const FIELDS = {
  "client-enquiry": [
    "company",
    "contact_person",
    "email",
    "location",
    "riders_needed",
    "vehicle",
    "start_date",
    "notes"
  ],

  "rider-application": [
    "name",
    "email",
    "area",
    "age",
    "vehicle",
    "licence",
    "experience"
  ]
};

const REQUIRED = {
  "client-enquiry": [
    "company",
    "contact_person",
    "email",
    "location",
    "riders_needed"
  ],

  "rider-application": [
    "name",
    "email",
    "area",
    "age"
  ]
};

module.exports = async function handler(req, res) {

  res.setHeader("Cache-Control", "no-store");

  // Only POST is supported
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  // Validate the website origin.
  // This is not a substitute for rate limiting.
  if (!originAllowed(req.headers.origin)) {
    return res.status(403).json({
      success: false,
      message: "Origin not allowed"
    });
  }

  const contentType = String(
    req.headers["content-type"] || ""
  );

  if (!contentType.startsWith("application/json")) {
    return res.status(415).json({
      success: false,
      message: "JSON required"
    });
  }

  if (
    Number(req.headers["content-length"] || 0) > 10000
  ) {
    return res.status(413).json({
      success: false,
      message: "Submission too large"
    });
  }

  const data = req.body;

  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data) ||
    JSON.stringify(data).length > 10000
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid submission"
    });
  }

  // Honeypot field used to discourage basic bots
  if (data.botcheck) {
    return res.status(200).json({
      success: true
    });
  }

  const formType = data.form_type;

  if (
    !Object.prototype.hasOwnProperty.call(
      FIELDS,
      formType
    )
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid form type"
    });
  }

  // Keep only the expected fields
  const clean = {};

  for (const field of FIELDS[formType]) {

    const value = data[field] ?? "";

    const maxLength =
      field === "notes" ? 2000 : 250;

    if (
      typeof value !== "string" ||
      value.length > maxLength
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid field"
      });
    }

    clean[field] = value.trim();
  }

  // Validate mandatory fields
  if (
    REQUIRED[formType].some(
      field => !clean[field]
    )
  ) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields"
    });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(clean.email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email"
    });
  }

  // Validate client rider requirement
  if (formType === "client-enquiry") {

    const count = Number(clean.riders_needed);

    if (
      !Number.isInteger(count) ||
      count < 1
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid rider count"
      });
    }
  }

  // Validate rider applicant age
  if (formType === "rider-application") {

    const age = Number(clean.age);

    if (
      !Number.isInteger(age) ||
      age < 18 ||
      age > 65
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid age"
      });
    }
  }

  // Google Apps Script configuration
  const GOOGLE_SCRIPT_URL =
    process.env.GOOGLE_SCRIPT_URL;

  const GOOGLE_SCRIPT_SECRET =
    process.env.GOOGLE_SCRIPT_SECRET;

  const validScriptUrl =
    /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/;

  if (
    !GOOGLE_SCRIPT_URL ||
    !GOOGLE_SCRIPT_SECRET ||
    !validScriptUrl.test(GOOGLE_SCRIPT_URL)
  ) {
    return res.status(503).json({
      success: false,
      message: "Form service not configured"
    });
  }

  try {

    await postToGoogleSheet(GOOGLE_SCRIPT_URL, {
      secret: GOOGLE_SCRIPT_SECRET,
      form_type: formType,
      fields: clean
    });

    return res.status(200).json({
      success: true,
      message: "Submission saved successfully"
    });

  } catch (error) {

    // Do not log applicant details or secrets
    console.error(
      "Google Sheets submission failed:",
      error?.code || error?.name || "unknown"
    );

    const privateScript = error?.code === "SCRIPT_PRIVATE";

    return res.status(502).json({
      success: false,
      message: privateScript
        ? "Google Sheet is private. Redeploy the Apps Script web app and set access to Anyone."
        : "Could not save submission. Please try again."
    });
  }
};

function originAllowed(origin) {
  const normalized = normalizeOrigin(origin);

  if (!normalized) {
    return false;
  }

  const allowed = [
    process.env.SITE_ORIGIN,
    process.env.VERCEL_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_BRANCH_URL
  ]
    .map(normalizeOrigin)
    .filter(Boolean);

  if (allowed.includes(normalized)) {
    return true;
  }

  // Local `vercel dev` only. Production stays limited to the site URLs above.
  if (process.env.VERCEL_ENV !== "production") {
    return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(
      normalized
    );
  }

  return false;
}

function normalizeOrigin(value) {
  const trimmed = String(value || "")
    .trim()
    .replace(/\/$/, "");

  if (!trimmed) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

async function postToGoogleSheet(url, payload) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload),
    redirect: "manual",
    signal: AbortSignal.timeout(15000)
  });

  if (response.status >= 300 && response.status < 400) {
    const location = response.headers.get("location");

    if (!location) {
      throw new Error("Google Apps Script did not return a result");
    }

    if (new URL(location).host === "accounts.google.com") {
      const error = new Error("Google Apps Script requires sign-in");
      error.code = "SCRIPT_PRIVATE";
      throw error;
    }

    response = await fetch(location, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(15000)
    });
  }

  if (response.status === 401 || response.status === 403) {
    const error = new Error("Google Apps Script requires sign-in");
    error.code = "SCRIPT_PRIVATE";
    throw error;
  }

  const text = await response.text();
  let result;

  try {
    result = JSON.parse(text);
  } catch {
    const error = new Error("Google Apps Script returned a non-JSON response");
    error.code = "SCRIPT_BAD_RESPONSE";
    throw error;
  }

  if (!response.ok || result.success !== true) {
    const error = new Error("Google Sheets write unsuccessful");
    error.code = "SCRIPT_REJECTED";
    throw error;
  }
}
