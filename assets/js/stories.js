/* Home page: highlight row, big covers, Instagram-style story viewer */
const $ = (id) => document.getElementById(id);
const viewer = $("viewer"), slideImg = $("slideImg"), slideBody = $("slideBody"),
      progress = $("progress"), vTitle = $("viewerTitle"), ctaBox = $("cta");

let cat = null, idx = 0, paused = false;

/* ---------- build home ---------- */
function buildHome() {
  const hl = $("highlights"), covers = $("covers");
  hl.innerHTML = ""; covers.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const b = document.createElement("button");
    b.className = "hl"; b.dataset.key = c.key;
    b.innerHTML = `<span class="hl-ring"><img alt=""></span><span class="hl-label"></span>`;
    const image = b.querySelector("img");
    image.alt = t(c.title);
    safeImg(image, c.cover.replace("w=700&h=700", "w=200&h=200"));
    b.querySelector(".hl-label").textContent = t(c.title);
    b.onclick = () => openCat(c);
    hl.appendChild(b);

    const a = document.createElement("a");
    a.className = "cover"; a.href = c.page;
    if (c.external) { a.target = "_blank"; a.rel = "noopener"; }
    a.innerHTML = `<span class="cover-pic"><img alt=""></span><span class="cover-label"></span>`;
    const coverImage = a.querySelector("img");
    coverImage.alt = t(c.title);
    safeImg(coverImage, c.cover);
    a.querySelector(".cover-label").textContent = t(c.title);
    covers.appendChild(a);
  });
  applyI18n();
}

function openCat(c) {
  if (c.external) { window.open(c.page, "_blank", "noopener"); return; }
  cat = c; idx = 0;
  viewer.hidden = false;
  document.body.style.overflow = "hidden";
  render();
}
function closeViewer() { viewer.hidden = true; document.body.style.overflow = ""; }

/* slides = items + one final Instagram call-to-action slide */
const total = () => cat.items.length + 1;
const isCta = () => idx === cat.items.length;

function render() {
  const cta = isCta();
  progress.innerHTML = "";
  for (let i = 0; i < total(); i++) {
    const bar = document.createElement("i");
    if (i < idx) bar.className = "done";
    if (i === idx) { bar.className = "active"; bar.onanimationend = next; }
    progress.appendChild(bar);
  }
  vTitle.textContent = t(cat.title);
  viewer.classList.toggle("is-cta", cta);
  ctaBox.hidden = !cta;
  slideBody.hidden = cta;

  if (cta) {
    slideImg.removeAttribute("src");
    $("ctaFollow").textContent = ui("follow");
    $("ctaFollow").href = SHOP.insta;
    $("ctaHandle").textContent = "@" + SHOP.handle;
    $("ctaSlogan").textContent = ui("ctaSlogan");
    const more = $("ctaMore");
    more.textContent = ui("fullMenu");
    more.href = cat.page.startsWith("http") ? cat.page : cat.page;
    return;
  }
  const it = cat.items[idx];
  safeImg(slideImg, it.img);
  slideImg.alt = it.name;
  $("slideName").textContent = it.name;
  $("slideDesc").textContent = t(it.desc);
  const price = $("slidePrice"), tag = $("slideTag");
  price.hidden = !it.price;
  if (it.price) price.innerHTML = `${it.price}<small>${ui("tnd")}</small>`;
  tag.hidden = !it.tag; tag.textContent = it.tag || "";
  [idx + 1].forEach((n) => { const nx = cat.items[n]; if (nx) new Image().src = nx.img; });
}

function next() { idx < total() - 1 ? (idx++, render()) : closeViewer(); }
function prev() { if (idx > 0) { idx--; render(); } }

function setPause(p) { paused = p; viewer.classList.toggle("paused", p); }

/* ---------- events ---------- */
$("tapNext").onclick = next;
$("tapPrev").onclick = prev;
$("closeBtn").onclick = closeViewer;
$("avatar").href = SHOP.insta;
$("avatar").querySelector("img").alt = SHOP.name;
document.querySelector(".handle").href = SHOP.insta;
document.querySelector(".handle").textContent = SHOP.handle;
viewer.addEventListener("click", (e) => { if (e.target === viewer) closeViewer(); });
$("langBtn").onclick = toggleLang;
document.addEventListener("langchange", () => { buildHome(); if (!viewer.hidden) render(); });

document.addEventListener("keydown", (e) => {
  if (viewer.hidden) return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "Escape") closeViewer();
});

/* hold to pause, swipe to navigate */
let sx = null, holdT = null;
viewer.addEventListener("pointerdown", (e) => { holdT = setTimeout(() => setPause(true), 220); });
["pointerup", "pointercancel", "pointerleave"].forEach((ev) =>
  viewer.addEventListener(ev, () => { clearTimeout(holdT); setPause(false); }));
viewer.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
viewer.addEventListener("touchend", (e) => {
  if (sx === null) return;
  const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
  sx = null;
});

buildHome();
