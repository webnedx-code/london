// =============================================================================
// sheet.js — Bottom-sheet detail view
// =============================================================================

import { TYPE_ICON } from "../data/trip.js";
import { el, append, clear, ph, stripEmoji } from "./helpers.js";
import { getPhoto } from "./photo.js";

let sheetToken = 0;

const $sheet    = () => document.getElementById("sheet");
const $overlay  = () => document.getElementById("overlay");
const $body     = () => document.getElementById("sheet-body");
const $footer   = () => document.getElementById("sheet-footer");

const buildPlaceholder = (stop) => {
  const ph_ = el("div", "sheet__placeholder is-loading");
  ph_.dataset.type = stop.type;
  ph_.appendChild(ph(TYPE_ICON[stop.type] || "map-pin"));
  return ph_;
};

const buildActions = (stop) => {
  const isTransport = stop.type === "transport";
  const url =
    `https://www.google.com/maps/dir/?api=1&destination=${stop.lat},${stop.lng}` +
    (isTransport ? "&travelmode=transit" : "");

  const link = document.createElement("a");
  link.className = "btn-go";
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.appendChild(ph(isTransport ? "train-simple" : "navigation-arrow"));
  link.appendChild(
    document.createTextNode(isTransport ? "Deschide ruta cu metroul" : "Du-te acolo")
  );

  const out = [link];
  if (isTransport) {
    const tfl = document.createElement("a");
    tfl.className = "btn-tfl";
    tfl.href = "https://tfl.gov.uk/tube-dlr-overground/status/";
    tfl.target = "_blank";
    tfl.rel = "noopener noreferrer";
    tfl.appendChild(ph("warning-circle"));
    tfl.appendChild(document.createTextNode("Status metrou TfL →"));
    out.push(tfl);
  }
  return out;
};

export const openSheet = async (stop) => {
  const token = ++sheetToken;
  const body = $body();
  const footer = $footer();
  clear(body);
  clear(footer);

  // Photo placeholder (replaced once Wikipedia responds)
  const loader = buildPlaceholder(stop);
  body.appendChild(loader);

  // Title + time
  const name = el("div", "sheet__name");
  name.textContent = stripEmoji(stop.name);
  body.appendChild(name);

  const meta = el("div", "sheet__meta");
  meta.appendChild(ph("clock"));
  meta.appendChild(document.createTextNode(stop.time));
  body.appendChild(meta);

  // Wikipedia link
  if (stop.wiki) {
    const wiki = document.createElement("a");
    wiki.className = "sheet__wiki";
    wiki.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(stop.wiki)}`;
    wiki.target = "_blank";
    wiki.rel = "noopener noreferrer";
    wiki.appendChild(ph("book-bookmark"));
    wiki.appendChild(document.createTextNode("Wikipedia"));
    body.appendChild(wiki);
  }

  // Tip
  if (stop.tip) {
    const tip = el("div", "sheet__tip");
    tip.appendChild(ph("lightbulb"));
    const t = el("span");
    t.textContent = stop.tip;
    tip.appendChild(t);
    body.appendChild(tip);
  }

  // Description
  if (stop.desc) {
    const lbl = el("div", "sheet__desc-label");
    lbl.appendChild(ph("book-open"));
    lbl.appendChild(document.createTextNode("Despre acest loc"));
    body.appendChild(lbl);
    const desc = el("div", "sheet__desc");
    desc.textContent = stop.desc;
    body.appendChild(desc);
  }

  // Guide
  if (stop.guide && stop.guide.length) {
    const lbl = el("div", "sheet__guide-label");
    lbl.appendChild(ph("list-checks"));
    lbl.appendChild(document.createTextNode("Ce să faci aici"));
    body.appendChild(lbl);
    stop.guide.forEach((item) => {
      const row = el("div", "sheet__guide-item");
      row.appendChild(ph("check-circle"));
      const t = el("span");
      t.textContent = item;
      row.appendChild(t);
      body.appendChild(row);
    });
  }

  // Footer actions
  buildActions(stop).forEach((node) => footer.appendChild(node));

  // Animate in
  $overlay().classList.add("is-open");
  requestAnimationFrame(() => $sheet().classList.add("is-open"));

  // Lazy photo
  if (stop.wiki || stop.photo) {
    const url = await getPhoto(stop.wiki, stop.photo);
    if (token !== sheetToken) return;
    if (url && loader.parentNode) {
      const img = document.createElement("img");
      img.className = "sheet__img";
      img.src = url;
      img.alt = "";
      img.loading = "lazy";
      img.addEventListener("error", () => {
        if (img.parentNode) img.parentNode.replaceChild(loader, img);
        loader.classList.remove("is-loading");
      });
      loader.parentNode.replaceChild(img, loader);
    } else if (loader.parentNode) {
      loader.classList.remove("is-loading");
    }
  } else if (loader.parentNode) {
    loader.classList.remove("is-loading");
  }
};

export const closeSheet = () => {
  const sheet = $sheet();
  sheet.classList.remove("is-open");
  $overlay().classList.remove("is-open");
  sheet.style.transform = "";
};

// Wire up overlay click + Esc + swipe-down
export const initSheet = () => {
  const sheet = $sheet();
  $overlay().addEventListener("click", closeSheet);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sheet.classList.contains("is-open")) closeSheet();
  });

  let startY = null, currentY = 0, dragging = false;
  const onStart = (e) => {
    if (!sheet.classList.contains("is-open")) return;
    const rect = sheet.getBoundingClientRect();
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    if (y - rect.top > 80) return;
    startY = y;
    dragging = true;
    sheet.style.transition = "none";
  };
  const onMove = (e) => {
    if (!dragging) return;
    currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const dy = Math.max(0, currentY - startY);
    sheet.style.transform = `translateY(${dy}px)`;
  };
  const onEnd = () => {
    if (!dragging) return;
    dragging = false;
    sheet.style.transition = "";
    const dy = Math.max(0, currentY - startY);
    if (dy > 100) closeSheet();
    else sheet.style.transform = "";
  };

  sheet.addEventListener("touchstart", onStart, { passive: true });
  sheet.addEventListener("touchmove", onMove, { passive: true });
  sheet.addEventListener("touchend", onEnd);
  sheet.addEventListener("mousedown", onStart);
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onEnd);
};
