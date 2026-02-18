/*
  cmdk.js
  Generated: 2026-02-18T19:06:50.739731Z
*/
import { qsa, el, debounce } from "./utils.js";

/**
 * Command Palette
 * - pure DOM
 * - keyboard navigation
 * - simple fuzzy-ish search scoring
 */

function score(query, text){
  const q = query.toLowerCase().trim();
  const t = text.toLowerCase();
  if (!q) return 0;
  if (t === q) return 100;
  if (t.startsWith(q)) return 70;
  if (t.includes(q)) return 55;

  let ti = 0, hits = 0;
  for (let qi=0; qi<q.length; qi++){
    const ch = q[qi];
    ti = t.indexOf(ch, ti);
    if (ti === -1) break;
    hits += 1;
    ti += 1;
  }
  return Math.floor((hits/q.length) * 40);
}

export function createCmdk({ modal, input, list, onClose }){
  let items = [];
  let filtered = [];
  let activeIdx = 0;

  const close = () => {
    modal.hidden = true;
    input.value = "";
    list.innerHTML = "";
    filtered = [];
    activeIdx = 0;
    onClose?.();
  };

  const open = () => {
    modal.hidden = false;
    render();
    setTimeout(() => input.focus(), 0);
  };

  function setItems(newItems){
    items = newItems.slice();
    render();
  }

  function render(){
    const q = input.value.trim();
    filtered = items
      .map(it => ({ ...it, _score: score(q, it.name + " " + it.desc + " " + (it.keywords||"")) }))
      .filter(it => q ? it._score > 0 : true)
      .sort((a,b) => (b._score - a._score) || (b.rank - a.rank));

    activeIdx = Math.min(activeIdx, Math.max(0, filtered.length-1));
    list.innerHTML = "";

    filtered.slice(0, 40).forEach((it, idx) => {
      const row = el("div", {
        class: "cmdk-item",
        role: "option",
        dataset: { active: idx === activeIdx ? "1" : "0", id: it.id }
      },
        el("div", { class: "cmdk-left" },
          el("div", { class: "cmdk-name" }, it.name),
          el("div", { class: "cmdk-desc" }, it.desc),
        ),
        el("div", { class: "cmdk-right" }, it.hint || "")
      );
      row.addEventListener("mouseenter", () => { activeIdx = idx; refreshActive(); });
      row.addEventListener("click", () => { it.action?.(); });
      list.appendChild(row);
    });

    if (!filtered.length){
      list.appendChild(el("div", { class:"cmdk-item", dataset:{ active:"0" } },
        el("div", { class:"cmdk-left" },
          el("div", { class:"cmdk-name" }, "No results"),
          el("div", { class:"cmdk-desc" }, "Try searching “projects”, “case”, “incident”, “vendor”, “zero trust”")
        ),
        el("div", { class:"cmdk-right" }, "")
      ));
    }
  }

  function refreshActive(){
    const rows = qsa(".cmdk-item", list);
    rows.forEach((r, idx) => r.dataset.active = (idx === activeIdx) ? "1" : "0");
    const active = rows[activeIdx];
    active?.scrollIntoView({ block: "nearest" });
  }

  input.addEventListener("input", debounce(render, 80));

  modal.addEventListener("click", (e) => {
    const closeable = e.target && e.target.getAttribute && e.target.getAttribute("data-close");
    if (closeable) close();
  });

  window.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowDown"){ e.preventDefault(); activeIdx = Math.min(activeIdx+1, filtered.length-1); refreshActive(); }
    if (e.key === "ArrowUp"){ e.preventDefault(); activeIdx = Math.max(activeIdx-1, 0); refreshActive(); }
    if (e.key === "Enter"){ e.preventDefault(); const it = filtered[activeIdx]; it?.action?.(); }
  });

  return { open, close, setItems };
}
