// =============================================================================
// state.js — Persistent UI state (localStorage)
// =============================================================================

import { DAYS } from "../data/trip.js";

const TABS = ["program", "harta", "rezervari"];

export const todayDayId = () => {
  const today = new Date().toISOString().slice(0, 10);
  const found = DAYS.find((d) => d.iso === today);
  return found ? found.id : 1;
};

// -- Active day --------------------------------------------------------------
export const savedDayId = () => {
  try {
    const s = parseInt(localStorage.getItem("active-day"), 10);
    if (s >= 1 && s <= DAYS.length) return s;
  } catch {}
  return null;
};

export const persistDay = (id) => {
  try { localStorage.setItem("active-day", String(id)); } catch {}
};

// -- Active tab --------------------------------------------------------------
export const savedTab = () => {
  try {
    const t = localStorage.getItem("active-tab");
    if (TABS.includes(t)) return t;
  } catch {}
  return null;
};

export const persistTab = (t) => {
  try { localStorage.setItem("active-tab", t); } catch {}
};

// -- Booking done state ------------------------------------------------------
export const getRezDone = () => {
  try { return JSON.parse(localStorage.getItem("rez-done") || "{}"); }
  catch { return {}; }
};

export const setRezDone = (id, val) => {
  const d = getRezDone();
  if (val) d[id] = true;
  else delete d[id];
  localStorage.setItem("rez-done", JSON.stringify(d));
};
