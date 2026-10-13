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

## Forms (Web3Forms)
1. Go to https://web3forms.com, enter your business email, get the free access key by mail.
2. Paste it into `web3formsKey` in `script.js`.
3. Every submission is emailed to you (subject "New client enquiry" / "New rider application"). Free: 250/month.

## Deploy free on Vercel
Option A — CLI (from this folder):
```
npx vercel login
npx vercel --prod
```
Answer prompts: set up and deploy = yes, link to existing project = no, project name = anything, directory = `./`, no build settings to change.

Option B — GitHub: push this folder to a GitHub repo, then vercel.com → Add New → Project → import repo → Deploy (framework preset: Other).

Custom domain: Vercel project → Settings → Domains → add yourbusiness.in, then set the DNS records Vercel shows at your domain registrar.
