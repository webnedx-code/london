// =============================================================================
// helpers.js — Generic DOM utilities
// =============================================================================

/** Create an element with optional class. */
export const el = (tag, cls) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  return node;
};

/** Append children, ignoring null/undefined. */
export const append = (parent, ...kids) => {
  kids.forEach((k) => k && parent.appendChild(k));
  return parent;
};

/** Phosphor duotone icon. */
export const ph = (name, extraCls) => {
  const i = document.createElement("i");
  i.className = `ph-duotone ph-${name}${extraCls ? " " + extraCls : ""}`;
  return i;
};

/** Empty a node, fast. */
export const clear = (node) => {
  while (node.firstChild) node.removeChild(node.firstChild);
};

/** Strip emoji and collapse whitespace. */
export const stripEmoji = (str) =>
  str
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, "")
    .replace(/[\u{2600}-\u{2BFF}]/gu, "")
    .replace(/\u{FE0F}/gu, "")
    .replace(/\s+/g, " ")
    .trim();

/** Days between today and an ISO date (rounded up). */
export const daysUntil = (iso) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((new Date(iso) - today) / 86400000);
};
