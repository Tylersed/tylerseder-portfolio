/*
  diagram.js
  Generated: 2026-02-18T19:06:50.738885Z
*/
/**
 * systems diagram
 * -----------------------------------------------------------------------------
 * Lightweight interactive SVG map with zones + edges + nodes.
 */

export function buildDiagram({ nodes, edges, zones }){
  const width = 920;
  const height = 520;
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const defs = document.createElementNS(svgNS, "defs");
  const grad = document.createElementNS(svgNS, "linearGradient");
  grad.setAttribute("id", "edgeGrad");
  grad.setAttribute("x1", "0"); grad.setAttribute("y1", "0");
  grad.setAttribute("x2", "1"); grad.setAttribute("y2", "0");
  grad.innerHTML = `
    <stop offset="0%" stop-color="rgba(200,162,70,.85)" />
    <stop offset="100%" stop-color="rgba(110,231,255,.70)" />
  `;
  defs.appendChild(grad);
  svg.appendChild(defs);

  const gZones = document.createElementNS(svgNS, "g");
  gZones.setAttribute("data-layer", "zones");
  zones.forEach(z => {
    const r = document.createElementNS(svgNS, "rect");
    r.setAttribute("x", z.x);
    r.setAttribute("y", z.y);
    r.setAttribute("width", z.w);
    r.setAttribute("height", z.h);
    r.setAttribute("rx", 18);
    r.setAttribute("fill", z.fill);
    r.setAttribute("stroke", z.stroke);
    r.setAttribute("stroke-width", 1.5);
    r.setAttribute("class", "zone");
    gZones.appendChild(r);

    const t = document.createElementNS(svgNS, "text");
    t.setAttribute("x", z.x + 16);
    t.setAttribute("y", z.y + 28);
    t.setAttribute("fill", "rgba(255,255,255,.72)");
    t.setAttribute("font-size", "12");
    t.setAttribute("font-family", "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace");
    t.textContent = z.label;
    gZones.appendChild(t);
  });
  svg.appendChild(gZones);

  const gEdges = document.createElementNS(svgNS, "g");
  gEdges.setAttribute("data-layer", "edges");
  edges.forEach(e => {
    const a = nodes.find(n => n.id === e.from);
    const b = nodes.find(n => n.id === e.to);
    if (!a || !b) return;

    const x1 = a.x + a.w/2, y1 = a.y + a.h/2;
    const x2 = b.x + b.w/2, y2 = b.y + b.h/2;

    const path = document.createElementNS(svgNS, "path");
    const dx = Math.abs(x2-x1);
    const c1x = x1 + (x2 > x1 ? 1 : -1) * Math.min(120, dx/2);
    const c1y = y1;
    const c2x = x2 + (x1 > x2 ? 1 : -1) * Math.min(120, dx/2);
    const c2y = y2;

    path.setAttribute("d", `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "url(#edgeGrad)");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("opacity", ".85");
    path.setAttribute("class", "edge");
    gEdges.appendChild(path);
  });
  svg.appendChild(gEdges);

  const gNodes = document.createElementNS(svgNS, "g");
  gNodes.setAttribute("data-layer", "nodes");

  nodes.forEach(n => {
    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("class", "node");
    g.setAttribute("data-id", n.id);
    g.setAttribute("tabindex", "0");

    const r = document.createElementNS(svgNS, "rect");
    r.setAttribute("x", n.x);
    r.setAttribute("y", n.y);
    r.setAttribute("width", n.w);
    r.setAttribute("height", n.h);
    r.setAttribute("rx", 16);
    r.setAttribute("fill", n.fill);
    r.setAttribute("stroke", "rgba(255,255,255,.16)");
    r.setAttribute("stroke-width", "1.5");
    r.setAttribute("class", "node-rect");
    g.appendChild(r);

    const title = document.createElementNS(svgNS, "text");
    title.setAttribute("x", n.x + 14);
    title.setAttribute("y", n.y + 26);
    title.setAttribute("fill", "rgba(255,255,255,.92)");
    title.setAttribute("font-size", "13");
    title.setAttribute("font-weight", "700");
    title.textContent = n.label;
    g.appendChild(title);

    const sub = document.createElementNS(svgNS, "text");
    sub.setAttribute("x", n.x + 14);
    sub.setAttribute("y", n.y + 46);
    sub.setAttribute("fill", "rgba(255,255,255,.62)");
    sub.setAttribute("font-size", "11");
    sub.textContent = n.sub;
    g.appendChild(sub);

    gNodes.appendChild(g);
  });
  svg.appendChild(gNodes);

  return svg;
}

export function setDiagramFocus(svg, id){
  const nodes = svg.querySelectorAll(".node");
  nodes.forEach(n => n.dataset.focus = (n.dataset.id === id) ? "1" : "0");
}

export function exportSvg(svg){
  const clone = svg.cloneNode(true);
  const xml = new XMLSerializer().serializeToString(clone);
  return `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
}
