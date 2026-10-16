/* Inner pages: category pages (coffee, cold, sweets, new), menu, hours, address, about */
const page = document.body.dataset.page;
const main = document.getElementById("main");
const MAIN_TABS = ["coffee", "cold", "hot", "sweets", "food", "new"];
const MENU_ONLY_TABS = MENU_ONLY_CATEGORIES.map((c) => c.key);
const getCat = (k) => [...CATEGORIES, ...MENU_ONLY_CATEGORIES].find((c) => c.key === k);

const card = (it) => {
  const image = it.img
    ? `<div class="item-pic"><img alt="${it.name}" data-src="${it.img.replace("w=900&h=1440", "w=500&h=500")}">
      ${it.tag ? `<b class="tag">${it.tag}</b>` : ""}</div>`
    : "";
  const description = it.desc ? `<p>${t(it.desc)}</p>` : "";
  const price = it.price == null
    ? `<span class="price price-tbc">${ui("priceTbc")}</span>`
    : `<span class="price">${it.price}<small>${ui("tnd")}</small></span>`;
  return `<article class="item${image ? "" : " item-plain"}">${image}
    <div class="item-body"><h3>${it.name}</h3>${description}</div>${price}</article>`;
};

const group = (c, withTitle, withSupplements = false) => `<section class="group" id="${c.key}">
  ${withTitle ? `<h2>${t(c.title)}</h2>` : ""}<div class="items">${c.items.map(card).join("")}</div>
  ${withSupplements ? `<h2 class="supplements-title" id="supplements">${ui("supplements")}</h2><div class="items">${SUPPLEMENTS.map(card).join("")}</div>` : ""}
  </section>`;

function tabs() {
  const link = (href, label, on) => `<a class="tab${on ? " on" : ""}" href="${href}">${label}</a>`;
  return `<nav class="tabs" aria-label="${ui("categoriesLabel")}">` +
    link("menu.html", ui("all"), page === "menu" && !location.hash) +
    MAIN_TABS.map((k) => link(`${k}.html`, t(getCat(k).title), page === k)).join("") +
    MENU_ONLY_TABS.map((k) => link(`menu.html#${k}`, t(getCat(k).title), page === "menu" && location.hash === `#${k}`)).join("") +
    `</nav>`;
}

function render() {
  const key = { menu: null, coffee: "coffee", cold: "cold", hot: "hot", sweets: "sweets", food: "food", new: "new", hours: "hours", address: "find", about: "vibe" }[page];
  const cat = key ? getCat(key) : null;
  const menuCategory = page === "menu"
    ? MENU_ONLY_CATEGORIES.find((category) => `#${category.key}` === location.hash)
    : null;
  const title = menuCategory ? t(menuCategory.title) : cat ? t(cat.title) : ui("menuTitle");
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

  const isMenu = page === "menu" || MAIN_TABS.includes(page);
  if (isMenu) {
    html += tabs();
    html += page === "menu"
      ? (menuCategory
        ? group(menuCategory, true)
        : [...MAIN_TABS, ...MENU_ONLY_TABS].map((k) => group(getCat(k), true, k === "hot")).join(""))
      : group(cat, false, ["coffee", "cold", "hot"].includes(page));
    html += `<p class="note">${ui("prices")}</p>`;
  } else {
    html += `<h1 class="ptitle solo">${title}</h1>`;
  }
  
  main.innerHTML = html;
  main.querySelectorAll("img[data-src]").forEach((im) => safeImg(im, im.dataset.src.startsWith("assets") ? "../" + im.dataset.src : im.dataset.src));
  document.getElementById("langBtn").onclick = toggleLang;
}
document.addEventListener("langchange", render);
window.addEventListener("hashchange", render);
render();
