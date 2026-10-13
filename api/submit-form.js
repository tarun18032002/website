// Vercel serverless API: receives two existing HTML forms and securely forwards to Apps Script.
const FIELDS = {
  'client-enquiry': ['company', 'contact_person', 'email', 'location', 'riders_needed', 'vehicle', 'start_date', 'notes'],
  'rider-application': ['name', 'email', 'area', 'age', 'vehicle', 'licence', 'experience'],
};
const REQUIRED = {
  'client-enquiry': ['company', 'contact_person', 'email', 'location', 'riders_needed'],
  'rider-application': ['name', 'email', 'area', 'age'],
};
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });
  const origin = req.headers.origin;
  if (!process.env.SITE_ORIGIN || origin !== process.env.SITE_ORIGIN) {
    return res.status(403).json({ success: false, message: 'Origin not allowed' });
  }
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) {
    return res.status(415).json({ success: false, message: 'JSON required' });
  }
  if (Number(req.headers['content-length'] || 0) > 10000) {
    return res.status(413).json({ success: false, message: 'Submission too large' });
  }
  const data = req.body;
  if (!data || typeof data !== 'object' || Array.isArray(data) || JSON.stringify(data).length > 10000) {
    return res.status(400).json({ success: false, message: 'Invalid submission' });
  }
  if (data.botcheck) return res.status(200).json({ success: true });
  const type = data.form_type;
  if (!Object.hasOwn(FIELDS, type)) return res.status(400).json({ success: false, message: 'Invalid form type' });
  const clean = {};
  for (const field of FIELDS[type]) {
    const value = data[field] ?? '';
    if (typeof value !== 'string' || value.length > (field === 'notes' ? 2000 : 250)) {
      return res.status(400).json({ success: false, message: 'Invalid field' });
    }
    clean[field] = value.trim();
  }
  if (REQUIRED[type].some(field => !clean[field])) return res.status(400).json({ success: false, message: 'Missing required fields' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) return res.status(400).json({ success: false, message: 'Invalid email' });
  if (type === 'client-enquiry' && (!Number.isInteger(Number(clean.riders_needed)) || Number(clean.riders_needed) < 1)) {
    return res.status(400).json({ success: false, message: 'Invalid rider count' });
  }
  if (type === 'rider-application' && (!Number.isInteger(Number(clean.age)) || Number(clean.age) < 18 || Number(clean.age) > 65)) {
    return res.status(400).json({ success: false, message: 'Invalid age' });
  }
  const { GOOGLE_SCRIPT_URL, GOOGLE_SCRIPT_SECRET } = process.env;
  if (!GOOGLE_SCRIPT_URL || !GOOGLE_SCRIPT_SECRET || !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(GOOGLE_SCRIPT_URL)) {
    return res.status(503).json({ success: false, message: 'Form service not configured' });
  }
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ secret: GOOGLE_SCRIPT_SECRET, form_type: type, fields: clean }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json();
    if (!response.ok || result.success !== true) throw new Error('Sheet write unsuccessful');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Google Sheets form write failed:', error?.name || 'unknown');
    return res.status(502).json({ success: false, message: 'Could not save submission; please try again' });
  }
};
