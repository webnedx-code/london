// =============================================================================
// program.js — Render the timeline of stops for one day
// =============================================================================

import { DAYS, TYPE_ICON, TRAVEL_DATA, TRAVEL_ICON, MODE_LABEL } from "../data/trip.js";
import { el, append, clear, ph, stripEmoji } from "./helpers.js";
import { openSheet } from "./sheet.js";

const TAG_CONFIG = {
  booking: { cls: "tag--booking", icon: "clipboard-text", label: "Rezervare" },
  ticket:  { cls: "tag--ticket",  icon: "ticket",         label: "Bilet" },
  free:    { cls: "tag--free",    icon: "check-circle",   label: "Gratuit" },
};

const modeLabel = (m) => MODE_LABEL[m] || m;

const renderStopCard = (stop, idx, dayId) => {
  const card = el("div", "stop-card");
  card.dataset.type = stop.type;

  const time = el("div", "stop-card__time");
  time.textContent = stop.time;

  const num = el("div", "stop-card__num");
  num.textContent = idx + 1;

  const icon = el("div", "stop-card__icon");
  icon.appendChild(ph(TYPE_ICON[stop.type] || "map-pin"));

  const body = el("div", "stop-card__body");
  const name = el("div", "stop-card__name");
  name.textContent = stripEmoji(stop.name);
  body.appendChild(name);

  const tagsList = stop.tags || [];
  const hasTip = !!stop.tip;
  const hasGuide = !!(stop.guide && stop.guide.length);

  if (tagsList.length || hasTip || hasGuide) {
    const tags = el("div", "tags");
    tagsList.forEach((t) => {
      const cfg = TAG_CONFIG[t];
      if (!cfg) return;
      const tag = el("span", `tag ${cfg.cls}`);
      tag.appendChild(ph(cfg.icon));
      tag.appendChild(document.createTextNode(cfg.label));
      tags.appendChild(tag);
    });
    if (hasTip) {
      const tipTag = el("span", "tag tag--tip");
      tipTag.appendChild(ph("lightbulb"));
      tipTag.appendChild(document.createTextNode("Sfat"));
      tags.appendChild(tipTag);
    }
    if (hasGuide) {
      const gTag = el("span", "tag tag--guide");
      gTag.appendChild(ph("list-checks"));
      gTag.appendChild(document.createTextNode("Ce să faci"));
      tags.appendChild(gTag);
    }
    body.appendChild(tags);
  }

  const arrow = el("div", "stop-card__arrow");
  arrow.appendChild(ph("caret-right"));

  append(card, time, num, icon, body, arrow);
  card.addEventListener("click", () => openSheet(stop));
  return card;
};

const renderTravelRow = (stop, next, dayId, idx) => {
  const sameSpot =
    Math.abs(stop.lat - next.lat) < 0.0005 &&
    Math.abs(stop.lng - next.lng) < 0.0005;
  if (sameSpot) return null;

  const t = TRAVEL_DATA[`${dayId}-${idx}`];
  const mode = (t && t.mode) || stop.travelMode || (next.type === "transport" ? "tube" : "walk");
  const min = t && t.min;

  const row = el("div", "travel-row");
  const line1 = el("div", "travel-row__line");
  const pill = el("div", "travel-pill");
  pill.appendChild(ph(TRAVEL_ICON[mode] || "person-simple-walk"));
  pill.appendChild(
    document.createTextNode(min ? `${min} min ${modeLabel(mode)}` : modeLabel(mode))
  );
  const line2 = el("div", "travel-row__line");
  append(row, line1, pill, line2);
  return row;
};

export const renderTimeline = (dayId) => {
  const day = DAYS.find((d) => d.id === dayId);
  const box = document.getElementById("timeline");
  if (!day || !box) return;
  clear(box);

  const heading = el("div", "day-heading");
  heading.textContent = `${day.short}, ${day.date}${dayId === 5 ? " — Solstițiu" : ""}`;
  box.appendChild(heading);

  day.stops.forEach((stop, idx) => {
    box.appendChild(renderStopCard(stop, idx, dayId));
    const next = day.stops[idx + 1];
    if (next) {
      const row = renderTravelRow(stop, next, dayId, idx);
      if (row) box.appendChild(row);
    }
  });
};
