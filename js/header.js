// =============================================================================
// header.js — Countdown ribbon
// =============================================================================

import { TRIP } from "../data/trip.js";

export const updateCountdown = () => {
  const node = document.querySelector("[data-countdown]");
  if (!node) return;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const start = new Date(TRIP.startIso);
  const end   = new Date(TRIP.endIso);
  const days = Math.ceil((start - today) / 86400000);

  if (days > 0) {
    node.textContent = `${days} ${days === 1 ? "zi" : "zile"}`;
  } else if (today <= end) {
    const dayN = Math.floor((today - start) / 86400000) + 1;
    node.textContent = `Ziua ${dayN} din ${TRIP.totalDays}`;
  } else {
    node.textContent = "17–22 Iun";
  }
};

export const startCountdown = () => {
  updateCountdown();
  setInterval(updateCountdown, 60_000);
};
