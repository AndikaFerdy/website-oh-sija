export function $(selector: string, parent = document) {
  return document.querySelector(selector);
}

export function $$(selector: string, parent = document) {
  const els = document.querySelectorAll(selector);
  return els.length ? Array.from(els) : null;
}
