/* Shared helpers: language (FR/EN) + image fallback */
let LANG = "fr";
try { LANG = localStorage.getItem("wyn-lang") || "fr"; } catch (e) {}

const t = (o) => (o && typeof o === "object" ? o[LANG] || o.fr : o);
const ui = (k) => UI[LANG][k];

function setLang(l) {
  LANG = l;
  try { localStorage.setItem("wyn-lang", l); } catch (e) {}
  document.documentElement.lang = l;
  document.dispatchEvent(new Event("langchange"));
}
function toggleLang() { setLang(LANG === "fr" ? "en" : "fr"); }

/* If a photo fails to load, try the safe fallbacks, then show a color block */
function safeImg(img, src) {
  let n = 0;
  img.onerror = () => {
    if (n < FALLBACKS.length) img.src = FALLBACKS[n++];
    else { img.onerror = null; img.removeAttribute("src"); img.style.background = "#1E45FB"; }
  };
  img.src = src;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = ui(el.dataset.i18n); });
}
document.documentElement.lang = LANG;
