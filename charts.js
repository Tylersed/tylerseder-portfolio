/*
  charts.js
  Generated: 2026-02-18T19:06:50.739377Z
*/
import { clamp, el } from "./utils.js";

export function renderImpactBars(target, impact){
  target.innerHTML = "";
  impact.forEach((m) => {
    const pct = clamp(m.value, 0, 100);
    const fill = el("div", { class: "bar-fill", style: { transform: `scaleX(${pct/100})` } });
    const track = el("div", { class: "bar-track" }, fill);

    target.appendChild(el("div", { class: "bar" },
      el("div", { class: "bar-label" }, m.label),
      el("div", { class: "bar-val" }, `${m.value}${m.unit}`),
      track,
      el("div", { class: "tiny-muted" }, m.note || "")
    ));
  });
}
