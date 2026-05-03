// =============================================================================
// photo.js — Wikipedia photo lookup with cache + prefetch
// =============================================================================

import { DAYS } from "../data/trip.js";

const cache = {};

export const getPhoto = async (wiki, directUrl) => {
  if (directUrl) {
    const url = `https://wsrv.nl/?url=${encodeURIComponent(directUrl)}&w=800&h=800&fit=cover&output=jpg`;
    cache[wiki || directUrl] = url;
    return url;
  }
  if (!wiki) return null;
  if (wiki in cache) return cache[wiki];
  try {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`
    );
    if (!r.ok) { cache[wiki] = null; return null; }
    const d = await r.json();
    const thumb = (d.thumbnail || {}).source;
    const orig  = (d.originalimage || {}).source;
    const base  = thumb || orig;
    if (!base) { cache[wiki] = null; return null; }
    const src = base.includes("/thumb/")
      ? base.replace(/\/\d+px-[^/]+$/, "/800px-" + base.split("/").pop().replace(/^\d+px-/, ""))
      : base;
    const url = `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=800&h=800&fit=cover&output=jpg`;
    cache[wiki] = url;
    return url;
  } catch {
    cache[wiki] = null;
    return null;
  }
};

export const prefetchDay = (dayId) => {
  const day = DAYS.find((d) => d.id === dayId);
  if (!day) return;
  day.stops.forEach((s) => {
    if (s.photo) getPhoto(s.wiki, s.photo);
    else if (s.wiki && !(s.wiki in cache)) getPhoto(s.wiki);
  });
};
