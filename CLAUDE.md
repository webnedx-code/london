# CLAUDE.md — Holiday App routing map

This file tells the agent **which file to open** for any given request, so it doesn't have to grep the whole project.

---

## TL;DR

- **Trip content (days, stops, dates, bookings, prices, addresses, links):** → `data/trip.js`
- **Visual styling only:** → `css/<feature>.css` (one file per feature, see map below)
- **Behavior / interactivity:** → `js/<feature>.js` (one file per feature)
- **Adding a brand-new feature/tab:** → see "Adding a new tab" below

> If a request only changes **content**, you should only touch `data/trip.js`. Do not edit JS or CSS unless layout/behavior is actually changing.

---

## Project structure

```
index.html              ← shell only. <header>, tab containers, <script type="module" src="js/app.js">
data/
  trip.js               ← SINGLE SOURCE OF TRUTH for the holiday
css/
  tokens.css            ← design tokens: colors, type, spacing, radii, shadows
  base.css              ← reset + global app shell
  header.css            ← top countdown ribbon
  nav.css               ← bottom tab bar
  day-strip.css         ← horizontal day picker
  program.css           ← timeline + stop cards (the main "today" view)
  map.css               ← map tab
  sheet.css             ← bottom sheet / stop detail overlay
  rezervari.css         ← bookings/reservations tab
js/
  app.js                ← bootstrap + tab routing (ES module entry)
  helpers.js            ← el(), append(), ph(), clear(), stripEmoji(), daysUntil()
  state.js              ← localStorage: active day, active tab, done bookings
  photo.js              ← Wikipedia photo fetch + cache
  header.js             ← countdown ribbon render
  day-strip.js          ← day picker render + selection
  program.js            ← timeline render for selected day
  map.js                ← map tab render
  sheet.js              ← stop detail bottom sheet
  rezervari.js          ← bookings tab render
```

---

## Routing table — "if user asks X, open Y"

### Content edits (most common)

| Request | File(s) |
|---|---|
| "Change day 4" / "edit day N" | `data/trip.js` → `DAYS[3]` (zero-indexed) |
| "Add a new stop to day N" | `data/trip.js` → push into `DAYS[N-1].stops` |
| "Reorder stops on day N" | `data/trip.js` → reorder `DAYS[N-1].stops` array |
| "Change trip dates" / "trip title" | `data/trip.js` → `TRIP` object |
| "Add / edit / remove a reservation" | `data/trip.js` → `BOOKINGS` array |
| "Mark booking as done" (state, not data) | `js/state.js` (logic) — but the *list* itself is in `data/trip.js` |
| "Change a price / address / link" | `data/trip.js` (find the stop or booking) |
| "Add travel info between cities" | `data/trip.js` → `TRAVEL_DATA` |

### Visual / styling edits

| Request | File(s) |
|---|---|
| "Change the color scheme" / "fonts" / "spacing scale" | `css/tokens.css` |
| "Restyle the countdown ribbon" | `css/header.css` |
| "Restyle the bottom tab bar" | `css/nav.css` |
| "Restyle the day picker" | `css/day-strip.css` |
| "Restyle stop cards / timeline" | `css/program.css` |
| "Restyle the bottom sheet / stop detail" | `css/sheet.css` |
| "Restyle the map tab" | `css/map.css` |
| "Restyle the bookings tab" | `css/rezervari.css` |
| "Global layout / body bg / app frame" | `css/base.css` |

### Behavior edits

| Request | File(s) |
|---|---|
| "Tab switching feels off" / "default tab on load" | `js/app.js` + `js/state.js` |
| "Countdown logic / format" | `js/header.js` (+ `helpers.js` for `daysUntil`) |
| "Day picker scroll/selection behavior" | `js/day-strip.js` |
| "Timeline rendering / how stops display" | `js/program.js` |
| "Bottom sheet open/close animation" | `js/sheet.css` (transition) + `js/sheet.js` (logic) |
| "Map markers / map interactions" | `js/map.js` |
| "Booking checkbox / 'mark done' persistence" | `js/rezervari.js` + `js/state.js` |
| "Photo fetching / caching" | `js/photo.js` |

---

## Adding a new tab (e.g. "Weather")

When the user asks for a new tab, do all of the following — don't skip steps:

1. **`data/trip.js`** — add the tab's data (e.g. `WEATHER` array of `{ day, temp, conditions, icon }`). Keep it in this file even for new features; this is the single source of truth.
2. **`index.html`** —
   - Add a tab button in the bottom nav (`<nav>`), matching the pattern of existing tabs.
   - Add a tab section container (`<section data-tab="weather">…</section>`) where the content will render.
3. **`css/weather.css`** — new file. Style scoped to `[data-tab="weather"]`. Link it in `index.html` after the other feature CSS files.
4. **`js/weather.js`** — new file. Export a `renderWeather()` function (mirror `renderProgram`, `renderMap`, etc.).
5. **`js/app.js`** — import `renderWeather`, add `'weather'` to the tab routing switch so it renders when the tab is activated.
6. **`js/state.js`** — if the tab name is part of the persisted active-tab list, add it there too.
7. **`CLAUDE.md`** — add the new files to the structure tree and the routing table so future requests route correctly.

---

## Conventions

- **ES Modules.** Every JS file uses `import`/`export`. Entry is `js/app.js` loaded via `<script type="module">`.
- **No `var`.** Use `const` (default) or `let`. Arrow functions for callbacks; named functions are fine for top-level exports.
- **Class-based styling.** IDs are reserved for JS hooks (`#header`, `#program`, etc.). State is expressed as `is-active`, `is-open`, `is-done`, plus `data-*` attributes on the element.
- **Design tokens.** Don't hardcode colors / radii / shadows in feature CSS — reference CSS custom properties from `css/tokens.css`.
- **Helpers.** Prefer `el()`, `append()`, `clear()` from `js/helpers.js` over hand-rolled DOM building.
- **Data shape.** `DAYS[i].stops[j]` is the canonical stop object. If you add a field, update every renderer that consumes stops (`program.js`, `sheet.js`, `map.js`).

---

## Evening-slot research methodology (last run: 2026-05-03)

When overhauling `dinner` and `evening` stops (19–23h), follow this protocol:

1. **Read `data/trip.js` first** — extract the afternoon anchor location for each day to enforce the ≤15-min transit radius rule before searching.
2. **Parallel web searches** — run at minimum: V&A/National Gallery lates schedule, target restaurant current status (Yelp/TripAdvisor updated date), market opening hours, and any special summer/solstice events.
3. **Verify institutional age** — only include venues open 5+ years. Check founding date via Wikipedia or official site.
4. **Check for conflicts** — borough/Maltby markets close at 17:00 (Thu) and 17:00 (Sat). V&A Friday Lates = last Friday of month (NOT every Friday). National Gallery Lates = Fridays only, seasonal programme (1 May–19 Jun in 2026).
5. **Every updated stop gets metadata** — `status`, `lastChecked`, `verifyBefore` (specific URL + action item).
6. **Camden Market = hard avoid** — per resident feedback, tourist trap. Use The Hawley Arms (2 Castlehaven Rd) as the specific Camden pub recommendation instead.
7. **Gabriel's Wharf tenant list changes** — Gourmet Goat replaced by Limin Southbank (Apr 2026). Re-verify tenant list before each trip update.

---

## What NOT to do

- ❌ Don't put trip content (dates, names, prices) in any file other than `data/trip.js`.
- ❌ Don't inline `<style>` or `<script>` blocks back into `index.html`.
- ❌ Don't add a new top-level CSS or JS file without also wiring it into `index.html` / `app.js` and updating this map.
- ❌ Don't grep the whole project to find where something lives — consult this file first.
