// =============================================================================
// rezervari.js — Bookings tab
// =============================================================================

import { BOOKINGS } from "../data/trip.js";
import { el, append, clear, ph, daysUntil } from "./helpers.js";
import { getRezDone, setRezDone } from "./state.js";

const liveUrgency = (b) => {
  const d = daysUntil(b.deadlineIso);
  if (d <= 7) return "urgent";
  if (d <= 21) return "soon";
  return "ok";
};

const liveDaysLabel = (b) => {
  const d = daysUntil(b.deadlineIso);
  if (d < 0) return "Termen depășit!";
  if (d === 0) return "Rezervă AZI!";
  if (d === 1) return "Mâine e termenul!";
  return `${d} zile rămase`;
};

const BADGE_ICON = {
  urgent: "warning-circle",
  soon:   "clock-countdown",
  ok:     "check-circle",
};

const renderCard = (b) => {
  const done = getRezDone();
  const isDone = !!done[b.id];
  const urgency = isDone ? "ok" : liveUrgency(b);

  const card = el("div", "rez-card" + (isDone ? " is-done" : ""));
  card.dataset.urgency = urgency;

  const badge = el("div", "rez-card__badge");
  badge.appendChild(ph(isDone ? "check-circle" : BADGE_ICON[urgency]));
  badge.appendChild(document.createTextNode(isDone ? "Rezervat" : b.badge));

  const name = el("div", "rez-card__name");
  name.textContent = b.name;

  const when = el("div", "rez-card__when");
  when.appendChild(ph("calendar-blank"));
  when.appendChild(document.createTextNode(b.when));

  const note = el("div", "rez-card__note");
  note.textContent = b.note;

  const deadline = el("div", "rez-card__deadline");
  deadline.appendChild(ph("timer"));
  deadline.appendChild(document.createTextNode(b.deadline));
  if (!isDone) {
    const pill = el("span", "rez-days-pill");
    pill.dataset.urgency = urgency;
    pill.textContent = liveDaysLabel(b);
    deadline.appendChild(pill);
  }

  const link = document.createElement("a");
  link.className = "btn-book";
  link.href = b.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.appendChild(ph("arrow-square-out"));
  link.appendChild(document.createTextNode(b.btn));

  const toggle = el("button", "btn-done-toggle" + (isDone ? " is-done" : ""));
  toggle.appendChild(ph(isDone ? "check-square" : "square"));
  toggle.appendChild(
    document.createTextNode(
      isDone ? "Rezervat — apasă pentru a anula" : "Marchează ca rezervat"
    )
  );
  toggle.addEventListener("click", () => {
    setRezDone(b.id, !isDone);
    renderRezervari();
  });

  return append(card, badge, name, when, note, deadline, link, toggle);
};

export const renderRezervari = () => {
  const box = document.getElementById("rez-list");
  if (!box) return;
  clear(box);
  const heading = el("div", "rez-heading");
  heading.textContent = "Rezervări & Bilete";
  box.appendChild(heading);
  BOOKINGS.forEach((b) => box.appendChild(renderCard(b)));
};
