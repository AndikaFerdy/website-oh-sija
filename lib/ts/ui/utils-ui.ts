export function $(selector: string, parent = document) {
  return parent.querySelector(selector);
}

export function $$(selector: string, parent = document) {
  const els = parent.querySelectorAll(selector);
  return els.length ? Array.from(els) : null;
}
