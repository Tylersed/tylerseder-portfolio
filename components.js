/*
  components.js
  Generated: 2026-02-18T19:06:50.738657Z
*/
import { el } from "./utils.js";

/**
 * Framework-free “components”: functions that return DOM nodes.
 * Keeps boundaries clean while staying GitHub Pages friendly.
 */

export function MetricCard({ label, value }){
  return el("div", { class: "metric" },
    el("div", { class: "metric-label" }, label),
    el("div", { class: "metric-value" }, value),
  );
}

export function OpsTile({ keyLabel, value, status, meta }){
  const dotClass = status === "good" ? "ops-dot" : status === "warn" ? "ops-dot warn" : "ops-dot bad";
  return el("div", { class: "ops-tile" },
    el("div", { class: "ops-k" }, keyLabel),
    el("div", { class: "ops-v" },
      el("span", { class: dotClass, "aria-hidden": "true" }),
      value
    ),
    el("div", { class: "ops-s" }, meta)
  );
}

export function RoleCard(role){
  return el("div", { class: "card" },
    el("div", { class: "role" },
      el("div", { class: "role-top" },
        el("div", {},
          el("div", { class: "role-company" }, role.company),
          el("div", { class: "role-title" }, role.title),
        ),
        el("div", { class: "role-meta" }, `${role.location} · ${role.period}`)
      ),
      el("div", { class: "badge-row" }, role.tags.map(t => el("span", { class: "badge" }, t))),
      el("ul", {}, role.highlights.map(h => el("li", {}, h)))
    )
  );
}

export function ProjectCard(p){
  const scoreTag = (label, value) => el("span", { class: "tag gold" }, `${label}: ${value}/10`);
  const tagPill = (t) => {
    const cls = t === "Security" ? "tag good" :
                t === "Email/DNS" ? "tag warn" :
                t === "Identity" ? "tag gold" :
                t === "Automation" ? "tag good" :
                "tag";
    return el("span", { class: cls }, t);
  };

  return el("div", { class: "card", dataset: { id: p.id, tags: p.tags.join("|") } },
    el("div", { class: "project" },
      el("div", { class: "project-top" },
        el("div", {},
          el("div", { class: "project-name" }, p.name),
          el("div", { class: "project-meta" }, `${p.when} · ${p.tags.join(" · ")}`)
        ),
        el("div", { class: "project-meta" }, p.featured ? "★ Featured" : "")
      ),
      el("p", {}, p.summary),
      el("ul", {}, p.bullets.map(b => el("li", {}, b))),
      el("div", { class: "project-tags" },
        ...p.tags.map(tagPill),
        scoreTag("Impact", p.impact),
        scoreTag("Complexity", p.complexity),
      ),
      el("div", { class: "project-actions" },
        ...p.actions.map(a => el("a", { class: a.kind === "case" ? "btn tiny primary" : "btn tiny ghost", href: a.href }, a.label))
      )
    )
  );
}

export function FilterChip({ label, active }){
  return el("button", { class: "filter-chip", type:"button", dataset: { active: active ? "1" : "0", label } }, label);
}

export function PrincipleCard({ title, desc }){
  return el("div", { class: "card" },
    el("div", { class: "project" },
      el("div", { class: "project-name" }, title),
      el("p", {}, desc)
    )
  );
}

export function TimelineEvent({ title, date, desc }){
  return el("div", { class: "t-event" },
    el("div", { class: "t-top" },
      el("div", { class: "t-title" }, title),
      el("div", { class: "t-date" }, date),
    ),
    el("p", { class: "t-desc" }, desc)
  );
}

export function WritingCard(item){
  return el("div", { class: "card" },
    el("div", { class: "w-item" },
      el("h3", {}, item.title),
      el("div", { class: "w-meta" }, item.meta),
      el("p", {}, item.summary),
      el("div", { class: "badge-row" }, item.content.slice(0,4).map(t => el("span", { class: "badge" }, t)))
    )
  );
}

export function LinkRow({ label, href, note }){
  return el("div", { class: "link-row" },
    el("a", { href, target: href.startsWith("http") ? "_blank" : null, rel: href.startsWith("http") ? "noopener" : null }, label),
    el("div", { class: "link-note" }, note || "")
  );
}
