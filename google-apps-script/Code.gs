// ===========================================
// ATSG - GOOGLE SHEET + EMAIL ALERT (free)
// ===========================================
// Paste this into Extensions > Apps Script of your Google Sheet.
// Project Settings > Script properties:
//   SECRET       = same value as GOOGLE_SCRIPT_SECRET in Vercel (required)
//   NOTIFY_EMAIL = where alerts go (optional, defaults to the sheet owner's Gmail)
// Deploy > Manage deployments > Edit > Version: New version,
//   Execute as: Me, Who has access: Anyone  (must be "Anyone", or the website gets a sign-in page)

const FORMS = {
  "client-enquiry": {
    sheet: "Company Enquiries",
    subject: "New company enquiry",
    fields: [
      ["company", "Company"],
      ["contact_person", "Contact person"],
      ["email", "Email"],
      ["location", "Hub location"],
      ["riders_needed", "Riders needed"],
      ["vehicle", "Vehicle"],
      ["start_date", "Start date"],
      ["notes", "Notes"]
    ]
  },
  "rider-application": {
    sheet: "Rider Applications",
    subject: "New rider application",
    fields: [
      ["name", "Name"],
      ["email", "Email"],
      ["area", "Area"],
      ["age", "Age"],
      ["vehicle", "Vehicle"],
      ["licence", "Driving licence"],
      ["experience", "Experience"]
    ]
  }
};

function doGet() {
  return json({ success: true, message: "ATSG form service is running" });
}

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ success: false, message: "Invalid JSON" });
  }

  const props = PropertiesService.getScriptProperties();
  const secret = props.getProperty("SECRET");
  if (!secret || data.secret !== secret) {
    return json({ success: false, message: "Unauthorized" });
  }

  const form = FORMS[data.form_type];
  if (!form) {
    return json({ success: false, message: "Unknown form" });
  }

  const fields = data.fields || {};
  const values = form.fields.map(([key]) => clean(fields[key]));

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(form.sheet);
    if (!sheet) {
      sheet = ss.insertSheet(form.sheet);
      const headers = ["Submitted at"].concat(form.fields.map(([, label]) => label));
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date()].concat(values));
  } finally {
    lock.releaseLock();
  }

  // Email alert. Failure here must not lose the saved row.
  try {
    const to = props.getProperty("NOTIFY_EMAIL") || Session.getEffectiveUser().getEmail();
    const body = form.fields
      .map(([, label], i) => label + ": " + (values[i] || "-"))
      .join("\n");
    const first = clean(fields.company || fields.name);
    MailApp.sendEmail({
      to: to,
      subject: form.subject + (first ? " - " + first : ""),
      body: body + "\n\nOpen the sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      replyTo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ? fields.email : undefined
    });
  } catch (err) {
    console.error("Email alert failed: " + err);
  }

  return json({ success: true });
}

// Stop values like "=HYPERLINK(...)" from running as formulas in the sheet.
function clean(value) {
  const text = String(value == null ? "" : value).trim().slice(0, 2000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
