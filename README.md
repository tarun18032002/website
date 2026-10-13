# Delivery Staffing Website

Static site (HTML/CSS/JS). English + Kannada. No build step.

## Files
- `index.html` — main page (services, process, client enquiry form, rider application form, FAQ, contact)
- `thanks.html` — shown after a form is submitted
- `styles.css` — styling
- `script.js` — business details (`CONFIG` at top) + Kannada translations (`KN`)

## Edit business details
Open `script.js`, change `CONFIG` (name, phone, WhatsApp number, email, address, stats).
English text is in `index.html`; matching Kannada text is in `KN` in `script.js` (same key as `data-i18n`).

## Run locally
```
python -m http.server 5500
```
Open http://localhost:5500.

## Forms (Google Sheet + email alert, free)
Flow: website form -> `/api/submit-form` (Vercel) -> Google Apps Script -> new row in Google Sheet + email to you.

1. Open your Google Sheet -> Extensions -> Apps Script. Paste `google-apps-script/Code.gs`. Save.
2. Project Settings (gear) -> Script properties -> add `SECRET` (any long random text). Optional: `NOTIFY_EMAIL`.
3. Deploy -> Manage deployments -> edit (pencil) -> Version: New version -> Execute as: Me -> **Who has access: Anyone** -> Deploy. Approve the permission prompt (Sheets + send email).
   Editing the existing deployment keeps the same URL. "New deployment" gives a new URL that must be copied to Vercel.
4. Vercel -> project -> Settings -> Environment Variables:
   - `GOOGLE_SCRIPT_URL` = the web app URL ending in `/exec`
   - `GOOGLE_SCRIPT_SECRET` = same text as `SECRET` above
   - `SITE_ORIGIN` = your live site, e.g. `https://website-xxx.vercel.app`
   Then redeploy.
5. Check: open the `/exec` URL in a private browser window. It should show `{"success":true,"message":"ATSG form service is running"}`, not a Google sign-in page.

Tabs "Company Enquiries" and "Rider Applications" are created automatically on first submission.

## Deploy free on Vercel
Option A — CLI (from this folder):
```
npx vercel login
npx vercel --prod
```
Answer prompts: set up and deploy = yes, link to existing project = no, project name = anything, directory = `./`, no build settings to change.

Option B — GitHub: push this folder to a GitHub repo, then vercel.com → Add New → Project → import repo → Deploy (framework preset: Other).

Custom domain: Vercel project → Settings → Domains → add yourbusiness.in, then set the DNS records Vercel shows at your domain registrar.
