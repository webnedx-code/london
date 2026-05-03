// =============================================================================
// day-strip.js — Render the horizontal day chip strip
// =============================================================================

import { DAYS } from "../data/trip.js";
import { el, append, clear } from "./helpers.js";
import { todayDayId } from "./state.js";

export const buildStrip = (containerId, activeId, onSelect) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  const todayId = todayDayId();
  clear(container);

  DAYS.forEach((d) => {
    const isToday = d.id === todayId;
    const isActive = d.id === activeId;
    let cls = "day-chip";
    if (isActive) cls += " is-active";
    if (isToday) cls += " is-today";

    const btn = el("button", cls);
    const lbl = el("span", "day-chip__label");
    lbl.textContent = d.label;
    const sub = el("span", "day-chip__sub");
    sub.textContent = `${d.short} · ${d.date}${isToday ? " · AZI" : ""}`;
    append(btn, lbl, sub);

    btn.addEventListener("click", () => onSelect(d.id));
    container.appendChild(btn);

    if (isActive) {
      setTimeout(
        () => btn.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" }),
        50
      );
    }
  });
};
