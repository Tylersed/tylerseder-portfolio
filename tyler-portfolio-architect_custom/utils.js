/**
 * Utilities used across modules.
 */
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
export function qs(sel, root=document){ return root.querySelector(sel); }
export function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

export function el(tag, attrs={}, ...children){
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})){
    if (k === "class") node.className = v;
    else if (k === "dataset") Object.assign(node.dataset, v);
    else if (k === "style") Object.assign(node.style, v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v === true) node.setAttribute(k, "");
    else if (v !== false && v != null) node.setAttribute(k, String(v));
  }
  for (const ch of children.flat()){
    if (ch == null) continue;
    node.appendChild(typeof ch === "string" ? document.createTextNode(ch) : ch);
  }
  return node;
}

export function nowISO(){
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
}

export function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

export function debounce(fn, wait=140){
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

export function isReducedMotion(){
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function copyToClipboard(text){
  if (navigator.clipboard && window.isSecureContext){
    return navigator.clipboard.writeText(text);
  }
  const ta = el("textarea", { style: { position:"fixed", left:"-9999px", top:"0" } }, text);
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try { document.execCommand("copy"); }
  finally { ta.remove(); }
  return Promise.resolve();
}

/**
 * Simple in-memory store. For bigger apps, use a full state container.
 */
export function createStore(initial){
  let state = structuredClone(initial);
  const listeners = new Set();
  return {
    get: () => state,
    set: (patch) => {
      state = { ...state, ...(typeof patch === "function" ? patch(state) : patch) };
      listeners.forEach(fn => fn(state));
    },
    subscribe: (fn) => { listeners.add(fn); return () => listeners.delete(fn); }
  };
}
