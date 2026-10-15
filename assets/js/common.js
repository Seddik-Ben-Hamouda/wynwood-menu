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
    if (n < IMAGES.fallbacks.length) img.src = IMAGES.fallbacks[n++];
    else { img.onerror = null; img.removeAttribute("src"); img.style.background = "#1E45FB"; }
  };
  img.src = src;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = ui(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", ui(el.dataset.i18nAriaLabel));
  });
}

function applySiteContent() {
  if (!document.body.dataset.page) document.title = t(SITE.title);
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = t(SITE.description);
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = SITE.themeColor;

  document.querySelectorAll("[data-image]").forEach((img) => {
    const image = IMAGES[img.dataset.image];
    img.src = image.src;
    if (image.alt) img.alt = t(image.alt);
  });
  document.querySelectorAll("[data-shop-name]").forEach((el) => {
    el.textContent = SHOP.name;
  });
}

document.documentElement.lang = LANG;
applySiteContent();

const mobileNotice = document.createElement("div");
mobileNotice.className = "mobile-only-notice";
mobileNotice.setAttribute("role", "status");
mobileNotice.textContent = ui("mobileNotice");
document.body.append(mobileNotice);
document.addEventListener("langchange", () => {
  document.documentElement.lang = LANG;
  applySiteContent();
  applyI18n();
  mobileNotice.textContent = ui("mobileNotice");
});
