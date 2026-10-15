/* Inner pages: category pages (coffee, cold, sweets, new), menu, hours, address, about */
const page = document.body.dataset.page;
const main = document.getElementById("main");
const getCat = (k) => CATEGORIES.find((c) => c.key === k);
const TABS = ["coffee", "cold", "hot", "sweets", "food", "new"];

const card = (it) => `
  <article class="item">
    <div class="item-pic"><img alt="${it.name}" data-src="${it.img.replace("w=900&h=1440", "w=500&h=500")}">
      ${it.tag ? `<b class="tag">${it.tag}</b>` : ""}</div>
    <div class="item-body"><h3>${it.name}</h3><p>${t(it.desc)}</p></div>
    ${it.price ? `<span class="price">${it.price}<small>${ui("tnd")}</small></span>` : ""}
  </article>`;

const group = (c, withTitle) => `<section class="group" id="${c.key}">
  ${withTitle ? `<h2>${t(c.title)}</h2>` : ""}<div class="items">${c.items.map(card).join("")}</div></section>`;

function tabs() {
  const link = (href, label, on) => `<a class="tab${on ? " on" : ""}" href="${href}">${label}</a>`;
  return `<nav class="tabs" aria-label="${ui("categoriesLabel")}">` +
    link("menu.html", ui("all"), page === "menu") +
    TABS.map((k) => link(`${k}.html`, t(getCat(k).title), page === k)).join("") + `</nav>`;
}

function render() {
  const key = { menu: null, coffee: "coffee", cold: "cold", hot: "hot", sweets: "sweets", food: "food", new: "new", hours: "hours", address: "find", about: "vibe" }[page];
  const cat = key ? getCat(key) : null;
  const title = cat ? t(cat.title) : ui("menuTitle");
  document.title = `${title} | ${SHOP.name}`;

  /* ── Hours: full-screen image only ── */
  if (page === "hours") {
    document.body.classList.add("hours-fullscreen");
    main.innerHTML = `
      <header class="phead hours-phead">
        <a class="back" href="../index.html">${ui("back")}</a>
        <button id="langBtn" class="lang">${ui("lang")}</button>
      </header>
      <img src="../${IMAGES.hours.src}" alt="${t(IMAGES.hours.alt)}" class="hours-img">`;
    document.getElementById("langBtn").onclick = toggleLang;
    return;
  }

  /* ── Address: full-screen map layout ── */
  if (page === "address") {
    document.body.classList.add("addr-fullscreen");
    main.innerHTML = `
      <img src="../${IMAGES.address.src}" alt="" class="addr-bg">
      <header class="phead addr-phead">
        <a class="back" href="../index.html">${ui("back")}</a>
        <button id="langBtn" class="lang">${ui("lang")}</button>
      </header>
      <div class="addr-center">
        <div class="addr-map-wrap">
          <iframe class="addr-map"
            src="${PAGE_CONTENT.address.mapEmbed}"
            allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>`;
    document.getElementById("langBtn").onclick = toggleLang;
    return;
  }

  /* ── About / Vibe: full-screen photo ── */
  if (page === "about") {
    document.body.classList.add("vg-page");
    main.innerHTML = `
      <img class="vg-image" src="../${IMAGES.about.src}" alt="${t(IMAGES.about.alt)}">
      <header class="phead vg-head">
        <a class="back" href="../index.html">${ui("back")}</a>
        <button id="langBtn" class="lang">${ui("lang")}</button>
      </header>`;

    document.getElementById("langBtn").onclick = toggleLang;
    return;
  }

  let html = `<header class="phead"><a class="back" href="../index.html">${ui("back")}</a>
    <button id="langBtn" class="lang">${ui("lang")}</button></header>`;

  const isMenu = page === "menu" || TABS.includes(page);
  if (isMenu) {
    html += `<div class="hero">${cat ? `<span class="hero-pic"><img alt="" data-src="${cat.cover}"></span>` : `<span class="hero-pic"><img alt="" data-src="${IMAGES.logo.src}"></span>`}
      <h1 class="ptitle">${title}</h1></div>${tabs()}`;
    html += page === "menu" ? ["coffee", "cold", "hot", "sweets", "food"].map((k) => group(getCat(k), true)).join("") : group(cat, false);
    html += `<p class="note">${ui("prices")}</p>`;
  } else {
    html += `<h1 class="ptitle solo">${title}</h1>`;
  }
  
  main.innerHTML = html;
  main.querySelectorAll("img[data-src]").forEach((im) => safeImg(im, im.dataset.src.startsWith("assets") ? "../" + im.dataset.src : im.dataset.src));
  document.getElementById("langBtn").onclick = toggleLang;
}
document.addEventListener("langchange", render);
render();
