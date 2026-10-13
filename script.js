// ===== EDIT YOUR BUSINESS DETAILS HERE =====
const CONFIG = {
  name: "APEX TALENT SOLUTIONS GROUP",
  shortName: "ATSG",
  email: "contact@apextalentsolutions.com", // personal email: receives rider applications
  enquiryEmail: "ravikumarsep20@gmail.com", // company enquiries: same personal email for now, update later
  address: "Your office address, Bengaluru, Karnataka",
  statRiders: "500+",
  statClients: "25+"
  // Old settings, hidden for now. Uncomment when a business phone / form key is ready:
  // phone: "+91 98765 43210",
  // whatsapp: "919876543210", // country code + number, digits only
  // web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // free key from https://web3forms.com
};
// ===========================================

const KN = {
  "nav.services":"ಸೇವೆಗಳು","nav.process":"ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ","nav.why":"ನಮ್ಮನ್ನೇ ಏಕೆ","nav.riders":"ರೈಡರ್ ಆಗಿ ಸೇರಿ","nav.contact":"ಸಂಪರ್ಕಿಸಿ","nav.cta":"ರೈಡರ್‌ಗಳನ್ನು ಪಡೆಯಿರಿ",
  "hero.eyebrow":"ಡೆಲಿವರಿ ಸಿಬ್ಬಂದಿ ಪಾಲುದಾರ","hero.title":"ಪರಿಶೀಲಿತ ಡೆಲಿವರಿ ರೈಡರ್‌ಗಳು, ನಿಮಗೆ ಬೇಕಾದಾಗ ಸಿದ್ಧ.","hero.lead":"ನಾವು ಡೆಲಿವರಿ ಸಿಬ್ಬಂದಿಯನ್ನು ನೇಮಕ ಮಾಡಿ, ದಾಖಲೆ ಪರಿಶೀಲಿಸಿ, ತರಬೇತಿ ನೀಡಿ ಇ-ಕಾಮರ್ಸ್, ಫುಡ್ ಡೆಲಿವರಿ ಮತ್ತು ಕ್ವಿಕ್-ಕಾಮರ್ಸ್ ಕಂಪನಿಗಳಿಗೆ ಒದಗಿಸುತ್ತೇವೆ — ನೇಮಕಾತಿಯ ತೊಂದರೆ ಇಲ್ಲದೆ ನಿಮ್ಮ ತಂಡವನ್ನು ಬೆಳೆಸಿ.","hero.cta1":"ರೈಡರ್‌ಗಳಿಗಾಗಿ ವಿನಂತಿಸಿ","hero.cta2":"ನನಗೆ ಡೆಲಿವರಿ ಕೆಲಸ ಬೇಕು",
  "stat.riders":"ಸೇರಿಸಿದ ರೈಡರ್‌ಗಳು","stat.clients":"ಸೇವೆ ನೀಡಿದ ಹಬ್‌ಗಳು","stat.hours":"48 ಗಂಟೆಗಳು","stat.time":"ಸಾಮಾನ್ಯ ನಿಯೋಜನೆ ಸಮಯ","stat.verified":"ದಾಖಲೆ ಪರಿಶೀಲಿತ",
  "services.title":"ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ","services.lead":"ಲಾಸ್ಟ್-ಮೈಲ್ ಡೆಲಿವರಿಗೆ ಸಂಪೂರ್ಣ ರೈಡರ್ ಪೂರೈಕೆ.","s1.t":"ರೈಡರ್ ನೇಮಕಾತಿ","s1.d":"ನಿಮ್ಮ ಹಬ್ ಪ್ರದೇಶಕ್ಕೆ ಸ್ಥಳೀಯ ದ್ವಿಚಕ್ರ ವಾಹನ ರೈಡರ್‌ಗಳ ದೊಡ್ಡ ತಂಡ.","s2.t":"ದಾಖಲೆ ಪರಿಶೀಲನೆ","s2.d":"ಆಧಾರ್, ಪ್ಯಾನ್, ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್, ಆರ್‌ಸಿ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳ ಪರಿಶೀಲನೆ.","s3.t":"ತರಬೇತಿ","s3.d":"ಆಪ್ ಬಳಕೆ, ಗ್ರಾಹಕ ಸೇವೆ, ಸುರಕ್ಷಿತ ಚಾಲನೆ ಮತ್ತು ಕ್ಯಾಶ್-ಆನ್-ಡೆಲಿವರಿ ತರಬೇತಿ.","s4.t":"ಬದಲಿ ಮತ್ತು ಬೆಂಬಲ","s4.d":"ರೈಡರ್ ಬಿಟ್ಟರೆ ತ್ವರಿತ ಬದಲಿ ಮತ್ತು ಹಬ್ ಮ್ಯಾನೇಜರ್‌ಗಳಿಗೆ ಒಬ್ಬರೇ ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ.",
  "ind.title":"ನಾವು ಸೇವೆ ನೀಡುವ ಕ್ಷೇತ್ರಗಳು","ind.1":"ಇ-ಕಾಮರ್ಸ್","ind.2":"ಫುಡ್ ಡೆಲಿವರಿ","ind.3":"ಕ್ವಿಕ್ ಕಾಮರ್ಸ್ / ದಿನಸಿ","ind.4":"ಕೊರಿಯರ್ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್","ind.5":"ಔಷಧಾಲಯ","ind.6":"ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳು",
  "process.title":"ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ","p1.t":"ನಿಮ್ಮ ಅವಶ್ಯಕತೆ ತಿಳಿಸಿ","p1.d":"ಹಬ್ ಸ್ಥಳ, ರೈಡರ್‌ಗಳ ಸಂಖ್ಯೆ, ಶಿಫ್ಟ್ ಸಮಯ ಮತ್ತು ಪ್ರಾರಂಭ ದಿನಾಂಕ ತಿಳಿಸಿ.","p2.t":"ಆಯ್ಕೆ ಮತ್ತು ಪರಿಶೀಲನೆ","p2.d":"ರೈಡರ್‌ಗಳ ಸಂದರ್ಶನ, ದಾಖಲೆ ಪರಿಶೀಲನೆ ಮತ್ತು ವಾಹನ ತಪಾಸಣೆ.","p3.t":"ತರಬೇತಿ ಮತ್ತು ಸೇರ್ಪಡೆ","p3.d":"ನಿಮ್ಮ ಪ್ರಕ್ರಿಯೆಗೆ ತಕ್ಕಂತೆ ತರಬೇತಿ ನೀಡಿ ನಿಮ್ಮ ಆಪ್‌ಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ.","p4.t":"ನಿಯೋಜನೆ ಮತ್ತು ಬೆಂಬಲ","p4.d":"ರೈಡರ್‌ಗಳು ನಿಮ್ಮ ಹಬ್‌ಗೆ ಬರುತ್ತಾರೆ. ಹಾಜರಾತಿ ಮತ್ತು ಬದಲಿ ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.",
  "why.title":"ಕಂಪನಿಗಳು ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸುತ್ತವೆ","why.lead":"ಪ್ರತಿ ರೈಡರ್ ಮತ್ತು ಪ್ರತಿ ಗ್ರಾಹಕರನ್ನು ವೈಯಕ್ತಿಕವಾಗಿ ನೋಡಿಕೊಳ್ಳುವ ಕುಟುಂಬ ವ್ಯವಹಾರ.","why.1":"ತ್ವರಿತ ನಿಯೋಜನೆ — 48 ಗಂಟೆಗಳಲ್ಲಿ ರೈಡರ್‌ಗಳು","why.2":"ನಗರದ ರಸ್ತೆಗಳನ್ನು ಬಲ್ಲ ಸ್ಥಳೀಯ ರೈಡರ್‌ಗಳು","why.3":"ಸೇರುವ ಮೊದಲು ಎಲ್ಲಾ ದಾಖಲೆಗಳ ಪರಿಶೀಲನೆ","why.4":"ಬೇಗ ಬಿಟ್ಟರೆ ಉಚಿತ ಬದಲಿ","why.5":"ದೈನಂದಿನ ಹಾಜರಾತಿ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ ವರದಿ","why.6":"ಪಾರದರ್ಶಕ, ಪ್ರತಿ-ರೈಡರ್ ದರ",
  "enq.title":"ಡೆಲಿವರಿ ರೈಡರ್‌ಗಳು ಬೇಕೇ?","enq.lead":"ನಿಮ್ಮ ಅಗತ್ಯಗಳನ್ನು ತುಂಬಿ ಇಮೇಲ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ. ಫೋನ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿಲ್ಲ.","f.company":"ಕಂಪನಿ ಹೆಸರು","f.contact":"ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ","f.email":"ಇಮೇಲ್","f.location":"ಹಬ್ ಸ್ಥಳ / ಪ್ರದೇಶ","f.count":"ಬೇಕಾದ ರೈಡರ್‌ಗಳು","f.vehicle":"ವಾಹನದ ಪ್ರಕಾರ","f.start":"ಪ್ರಾರಂಭ ದಿನಾಂಕ","f.notes":"ಶಿಫ್ಟ್ ಸಮಯ / ಇತರ ವಿವರಗಳು","f.submitClient":"ವಿಚಾರಣೆಯ ಇಮೇಲ್ ಸಿದ್ಧಪಡಿಸಿ","v.bike":"ಬೈಕ್ / ಸ್ಕೂಟರ್","v.ev":"ಎಲೆಕ್ಟ್ರಿಕ್ ವಾಹನ","v.cycle":"ಸೈಕಲ್","v.any":"ಯಾವುದಾದರೂ","v.none":"ವಾಹನ ಇಲ್ಲ",
  "rider.title":"ಡೆಲಿವರಿ ಕೆಲಸ ಹುಡುಕುತ್ತಿದ್ದೀರಾ?","rider.lead":"ನಮ್ಮ ಮೂಲಕ ಪ್ರಮುಖ ಡೆಲಿವರಿ ಕಂಪನಿಗಳಿಗೆ ಸೇರಿ. ಹೊಂದಿಕೊಳ್ಳುವ ಶಿಫ್ಟ್ ಮತ್ತು ಸೇರ್ಪಡೆ ಸಹಾಯ.","rider.r1":"18+ ವಯಸ್ಸು ಮತ್ತು ಮಾನ್ಯ ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್","rider.r2":"ಸ್ವಂತ ಬೈಕ್/ಸ್ಕೂಟರ್ (ಇವಿ ಆಯ್ಕೆಗಳೂ ಲಭ್ಯ)","rider.r3":"ಇಂಟರ್ನೆಟ್ ಇರುವ ಸ್ಮಾರ್ಟ್‌ಫೋನ್","rider.r4":"ಆಧಾರ್, ಪ್ಯಾನ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆ","f.name":"ಪೂರ್ಣ ಹೆಸರು","f.area":"ನೀವು ವಾಸಿಸುವ ಪ್ರದೇಶ","f.age":"ವಯಸ್ಸು","f.licence":"ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ ಇದೆಯೇ?","f.exp":"ಹಿಂದಿನ ಡೆಲಿವರಿ ಅನುಭವ (ಇದ್ದರೆ)","f.submitRider":"ಅರ್ಜಿಯ ಇಮೇಲ್ ಸಿದ್ಧಪಡಿಸಿ","yes":"ಹೌದು","no":"ಇಲ್ಲ",
  "faq.title":"ಪದೇ ಪದೇ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು","q1":"ಎಷ್ಟು ಬೇಗ ರೈಡರ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತೀರಿ?","a1":"ಹೆಚ್ಚಿನ ಅವಶ್ಯಕತೆಗಳಿಗೆ 48–72 ಗಂಟೆಗಳಲ್ಲಿ ಪರಿಶೀಲಿತ ರೈಡರ್‌ಗಳನ್ನು ನಿಯೋಜಿಸುತ್ತೇವೆ.","q2":"ರೈಡರ್ ಬೇಗ ಬಿಟ್ಟರೆ ಏನು?","a2":"ಒಪ್ಪಿದ ಅವಧಿಯೊಳಗೆ ಬಿಟ್ಟ ರೈಡರ್‌ಗಳಿಗೆ ಉಚಿತ ಬದಲಿ ನೀಡುತ್ತೇವೆ.","q3":"ರೈಡರ್‌ಗಳು ಸೇರಲು ಶುಲ್ಕ ಕೊಡಬೇಕೇ?","a3":"ಇಲ್ಲ. ನಮ್ಮ ಮೂಲಕ ಸೇರುವುದು ರೈಡರ್‌ಗಳಿಗೆ ಉಚಿತ.","q4":"ಯಾವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೇವೆ ನೀಡುತ್ತೀರಿ?","a4":"ಪ್ರಸ್ತುತ ನಗರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ. ಇತರ ಸ್ಥಳಗಳಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  "contact.title":"ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ","footer":"ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.","form.note":"ನಿಮ್ಮ ಇಮೇಲ್ ಆಪ್ ತೆರೆಯುತ್ತದೆ. ಕಳುಹಿಸಲು Send ಒತ್ತಿ.",
  "path.c.tag":"ಕಂಪನಿಗಳಿಗೆ","path.c.t":"ನನಗೆ ಡೆಲಿವರಿ ರೈಡರ್‌ಗಳು ಬೇಕು","path.c.go":"ಅವಶ್ಯಕತೆ ಕಳುಹಿಸಿ →",
  "path.r.tag":"ರೈಡರ್‌ಗಳಿಗೆ","path.r.t":"ನನಗೆ ಡೆಲಿವರಿ ಕೆಲಸ ಬೇಕು","path.r.go":"ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ →",
  "tag.company":"ಕಂಪನಿಗಳಿಗೆ","tag.rider":"ಡೆಲಿವರಿ ರೈಡರ್‌ಗಳಿಗೆ",
  "thanks.title":"ಧನ್ಯವಾದಗಳು!","thanks.body":"ನಿಮ್ಮ ವಿವರಗಳು ನಮಗೆ ತಲುಪಿವೆ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.","thanks.back":"ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ"
};

// Fill business details and email contact link.
document.querySelectorAll("[data-config]").forEach(el => {
  el.textContent = CONFIG[el.dataset.config] ?? "";
});
document.querySelectorAll('[data-config-href="mailto"]').forEach(el => {
  el.href = "mailto:" + CONFIG.email;
});
// Old phone / WhatsApp links, hidden for now:
// const hrefs = {
//   tel: "tel:" + CONFIG.phone.replace(/\s/g, ""),
//   whatsapp: "https://wa.me/" + CONFIG.whatsapp,
// };
// document.querySelectorAll('[data-config-href="tel"], [data-config-href="whatsapp"]').forEach(el => {
//   el.href = hrefs[el.dataset.configHref];
// });
if (document.getElementById("top")) document.title = CONFIG.shortName + " — " + CONFIG.name;
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Language toggle; source English text is in index.html.
const translatedElements = Array.from(document.querySelectorAll("[data-i18n]"));
translatedElements.forEach(el => { el.dataset.en = el.textContent; });
function setLang(lang) {
  lang = lang === "kn" ? "kn" : "en";
  document.documentElement.lang = lang;
  translatedElements.forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = lang === "kn" && KN[key] ? KN[key] : el.dataset.en;
  });
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "kn" ? "English" : "ಕನ್ನಡ";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}
let saved = "en";
try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
setLang(saved);
document.getElementById("langBtn")?.addEventListener("click", () => {
  setLang(document.documentElement.lang === "kn" ? "en" : "kn");
});

// Email-only form submission (no Web3Forms and no phone number).
// A mailto: URL opens a draft in the visitor's email app;
// the visitor must click Send. This does NOT verify delivery.
document.querySelectorAll("#clientForm, #riderForm").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const rider = form.id === "riderForm";
    const subject = (rider ? "New Rider Application" : "New Client Enquiry") + " - " + CONFIG.name;
    const data = new FormData(form);
    const fields = Array.from(data.entries())
      .filter(([, value]) => typeof value === "string")
      .map(([key, value]) => key.replaceAll("_", " ").toUpperCase() + ": " + value);
    const body = [rider ? "NEW RIDER APPLICATION" : "NEW CLIENT ENQUIRY", "", ...fields,
      "", "Submitted via " + CONFIG.name + " website"].join("\n");
    const to = rider ? CONFIG.email : CONFIG.enquiryEmail;
    const url = "mailto:" + to + "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    const kn = document.documentElement.lang === "kn";
    alert(kn ? "ಇಮೇಲ್ ಆಪ್ ತೆರೆಯುತ್ತದೆ. ದಯವಿಟ್ಟು Send ಒತ್ತಿ." :
      "Your email app will open. Click Send to finish your submission.");
    window.location.href = url;
  });
});

// Old Web3Forms submission (sends without opening an email app), hidden for now.
// To re-enable: set web3formsKey in CONFIG, add
// action="https://api.web3forms.com/submit" to both forms, and remove the mailto handler above.
// document.querySelectorAll('form[action*="web3forms"]').forEach(form => {
//   form.addEventListener("submit", async e => {
//     e.preventDefault();
//     const kn = document.documentElement.lang === "kn";
//     const btn = form.querySelector('button[type="submit"]');
//     const label = btn.textContent;
//     btn.disabled = true;
//     btn.textContent = kn ? "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ..." : "Sending...";
//     const data = new FormData(form);
//     data.append("access_key", CONFIG.web3formsKey);
//     data.append("from_name", CONFIG.name + " website");
//     try {
//       const res = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
//       const json = await res.json();
//       if (!json.success) throw new Error(json.message);
//       window.location.href = "thanks.html";
//     } catch (err) {
//       alert(kn ? "ಕಳುಹಿಸಲು ವಿಫಲವಾಗಿದೆ." : "Could not send. Please email us.");
//       btn.disabled = false;
//       btn.textContent = label;
//     }
//   });
// });

// Mobile menu
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtn?.setAttribute("aria-expanded", "false");
}));
