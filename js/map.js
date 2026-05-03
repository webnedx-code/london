// =============================================================================
// map.js — Leaflet map + legend
// =============================================================================

import { DAYS, LEGEND_ITEMS, PIN_COLORS } from "../data/trip.js";
import { el, append, clear } from "./helpers.js";
import { openSheet } from "./sheet.js";

let leafMap = null;
let mapMarkers = [];

export const buildLegend = () => {
  const box = document.getElementById("legend");
  if (!box) return;
  clear(box);
  LEGEND_ITEMS.forEach((item) => {
    const wrap = el("div", "legend__item");
    const dot = el("div", "legend__dot");
    dot.style.background = item.color;
    const lbl = el("span");
    lbl.textContent = item.label;
    append(wrap, dot, lbl);
    box.appendChild(wrap);
  });
};

export const initMap = (initialDayId) => {
  if (leafMap) return leafMap;
  leafMap = L.map("map", { zoomControl: false }).setView([51.515, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
    maxZoom: 19,
  }).addTo(leafMap);
  L.control.zoom({ position: "bottomright" }).addTo(leafMap);
  renderMapPins(initialDayId);
  return leafMap;
};

export const renderMapPins = (dayId) => {
  if (!leafMap) return;
  mapMarkers.forEach((m) => m.remove());
  mapMarkers = [];
  const day = DAYS.find((d) => d.id === dayId);
  if (!day) return;
  const stops = day.stops.filter((s) => s.type !== "transport");
  const bounds = [];

  stops.forEach((stop, i) => {
    const c = PIN_COLORS[stop.type] || "#C8102E";
    const html = `
      <div style="background:${c};color:white;border-radius:50%;width:30px;height:30px;
        display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;
        border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.35)">${i + 1}</div>`;
    const icon = L.divIcon({ html, className: "", iconSize: [30, 30], iconAnchor: [15, 15] });
    const marker = L.marker([stop.lat, stop.lng], { icon })
      .addTo(leafMap)
      .on("click", () => openSheet(stop));
    mapMarkers.push(marker);
    bounds.push([stop.lat, stop.lng]);
  });

  if (bounds.length) leafMap.fitBounds(bounds, { padding: [52, 52] });
};

export const invalidateMapSize = () => {
  if (leafMap) setTimeout(() => leafMap.invalidateSize(), 120);
};
