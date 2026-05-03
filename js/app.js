// =============================================================================
// app.js — Bootstrap & tab routing
// =============================================================================

import { buildStrip } from "./day-strip.js";
import { renderTimeline } from "./program.js";
import { buildLegend, initMap, renderMapPins, invalidateMapSize } from "./map.js";
import { renderRezervari } from "./rezervari.js";
import { initSheet } from "./sheet.js";
import { startCountdown } from "./header.js";
import { prefetchDay } from "./photo.js";
import {
  todayDayId, savedDayId, persistDay,
  savedTab, persistTab,
} from "./state.js";

const state = {
  activeTab: "program",
  activeDay: 1,
};

// -- Tabs --------------------------------------------------------------------
const switchTab = (tab) => {
  document.querySelectorAll(".tab-content").forEach((e) => e.classList.remove("is-active"));
  document.querySelectorAll(".nav-tab").forEach((e) => e.classList.remove("is-active"));
  document.getElementById(`tab-${tab}`).classList.add("is-active");
  document.querySelector(`.nav-tab[data-tab="${tab}"]`).classList.add("is-active");
  state.activeTab = tab;
  persistTab(tab);

  if (tab === "harta") {
    initMap(state.activeDay);
    renderMapPins(state.activeDay);
    invalidateMapSize();
  }
};

// -- Day selection (synchronizes both day strips) ----------------------------
const selectDay = (dayId) => {
  state.activeDay = dayId;
  persistDay(dayId);
  buildStrip("prog-strip", dayId, selectDay);
  buildStrip("map-strip", dayId, selectDay);
  if (state.activeTab === "program") renderTimeline(dayId);
  if (state.activeTab === "harta") renderMapPins(dayId);
  prefetchDay(dayId);
};

// -- Boot --------------------------------------------------------------------
const boot = () => {
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  const startDay = savedDayId() || todayDayId();
  state.activeDay = startDay;

  startCountdown();
  initSheet();
  buildLegend();
  buildStrip("prog-strip", startDay, selectDay);
  buildStrip("map-strip", startDay, selectDay);
  renderTimeline(startDay);
  prefetchDay(startDay);
  renderRezervari();

  const initialTab = savedTab();
  if (initialTab && initialTab !== "program") switchTab(initialTab);
};

document.addEventListener("DOMContentLoaded", boot);
