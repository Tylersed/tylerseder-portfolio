/*
  data.js
  Generated: 2026-02-18T19:06:50.732781Z
*/

/**
 * data.js
 * -----------------------------------------------------------------------------
 * Single-source-of-truth for content.
 * In a larger system you'd back this with a CMS. For GitHub Pages, keep it static.
 */

export const DATA = Object.freeze(
{
  "heroMetrics": [
    {
      "label": "Identity",
      "value": "Entra ID + Google SSO"
    },
    {
      "label": "Security",
      "value": "Zero Trust posture"
    },
    {
      "label": "Automation",
      "value": "Graph + PowerShell"
    },
    {
      "label": "Operations",
      "value": "Calm, documented"
    }
  ],
  "stack": [
    "Microsoft 365",
    "Entra ID",
    "Exchange Online",
    "SharePoint / OneDrive",
    "Google Workspace",
    "PowerShell",
    "Microsoft Graph",
    "DNS / DMARC / SPF",
    "Proofpoint",
    "GitHub",
    "Azure (static web)",
    "Modern Web UI"
  ],
  "links": [
    {
      "label": "GitHub",
      "href": "https://github.com/tylersed",
      "note": "Projects, tooling, internal apps"
    },
    {
      "label": "Portfolio domain",
      "href": "https://tylerseder.com",
      "note": "Replace with your real site"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/tyler-seder-99096a292",
      "note": "Experience + recommendations"
    },
    {
      "label": "Resume (PDF)",
      "href": "#",
      "note": "Upload resume.pdf and link it here"
    }
  ],
  "experience": [
    {
      "company": "Peachtree Town & Country Real Estate",
      "title": "Technology Experience Architect",
      "location": "Alpharetta, GA (On-site)",
      "period": "Jan 2026 — Present",
      "highlights": [
        "Own end-to-end identity strategy across Microsoft 365 + Entra ID plus Google Workspace federation (SSO).",
        "Lead security posture uplift: MFA hardening, Conditional Access guardrails, least-privilege administration.",
        "Build internal automation + tooling (Graph, PowerShell, lightweight web apps) to streamline onboarding/offboarding and reduce operational friction.",
        "Manage DNS / deliverability (SPF/DMARC/DKIM), Proofpoint routing, and vendor escalations with audit-ready timelines.",
        "Translate technical risk into executive language: blast radius, timelines, Q4–Q1 roadmap framing, measurable outcomes."
      ],
      "tags": [
        "Identity",
        "Security",
        "Automation",
        "Ops",
        "Stakeholders"
      ]
    },
    {
      "company": "Peachtree Town & Country Real Estate",
      "title": "Technology Experience Specialist",
      "location": "Alpharetta, GA (On-site)",
      "period": "Sep 2025 — Jan 2026",
      "highlights": [
        "Standardized user experience across advisors + staff: account provisioning, email flows, and app access patterns.",
        "Supported Microsoft 365 operations (Exchange, SharePoint/OneDrive, Teams) and documented runbooks for repeatability.",
        "Improved incident response workflow: clear escalation emails, artifact collection, and vendor follow-through.",
        "Began building a central internal hub experience for tools, links, documentation, and quick actions."
      ],
      "tags": [
        "M365",
        "Support",
        "Documentation",
        "Experience"
      ]
    }
  ],
  "principles": [
    {
      "title": "Make the safe path the easy path",
      "desc": "Security succeeds when it feels effortless: policy, defaults, and automation."
    },
    {
      "title": "Reduce blast radius by design",
      "desc": "Segment access, enforce MFA, monitor sign-ins, and treat identity as the perimeter."
    },
    {
      "title": "Document like you’ll be audited tomorrow",
      "desc": "Timelines, decisions, and evidence should be easy to find."
    },
    {
      "title": "Build tools that remove friction",
      "desc": "The fastest support ticket is the one that never needs to exist."
    },
    {
      "title": "Ship, measure, iterate",
      "desc": "Prefer small increments and measurable outcomes over “perfect” plans."
    },
    {
      "title": "Executive clarity",
      "desc": "Translate risk into decisions: cost, impact, and next actions."
    }
  ],
  "writing": [
    {
      "title": "Security Incident Escalation Template",
      "meta": "Email template · Audit-ready · Vendor escalation",
      "summary": "A structured incident note: what happened, evidence, mitigations, and what you need from the vendor.",
      "content": [
        "Subject line patterns for urgency and clarity.",
        "Artifact checklist: headers, sign-in logs, message trace, screenshots.",
        "Timeline format: T-0, T+15, T+60, next steps.",
        "Questions for vendor: validation, root cause, preventive actions."
      ]
    },
    {
      "title": "Zero Trust Starter Roadmap",
      "meta": "Strategy doc · Q4–Q1 framing · Stakeholder-ready",
      "summary": "A practical roadmap: identity hardening, device posture, app access, and monitoring.",
      "content": [
        "Phase 1: MFA/CA baselines + break-glass controls",
        "Phase 2: least privilege + role governance",
        "Phase 3: device compliance + conditional access enforcement",
        "Phase 4: monitoring, alerts, and tabletop exercises"
      ]
    },
    {
      "title": "Vendor Comparison Rubric",
      "meta": "Procurement · MSP evaluation · Apples-to-apples",
      "summary": "A scoring model to compare MSPs: scope, SLAs, security depth, and operational maturity.",
      "content": [
        "What’s included vs. add-ons (after-hours, onsite, projects).",
        "Security posture expectations: identity governance, telemetry, logging.",
        "Escalation model and incident ownership.",
        "Pricing clarity + change control."
      ]
    }
  ],
  "incidentTimeline": [
    {
      "title": "Detection & triage",
      "date": "T+0",
      "desc": "Identify anomaly (sign-in risk, deliverability failure, MFA recovery change). Gather evidence and confirm scope."
    },
    {
      "title": "Containment",
      "date": "T+30m",
      "desc": "Reset credentials, revoke sessions/tokens, validate MFA methods, review admin roles, block risky sign-ins."
    },
    {
      "title": "Remediation",
      "date": "T+2h",
      "desc": "Fix policy gaps: Conditional Access, least privilege, email routing/DNS alignment, vendor escalations."
    },
    {
      "title": "Post-incident",
      "date": "T+24h",
      "desc": "Write timeline, document evidence, update runbooks, and confirm preventive controls."
    }
  ],
  "impact": [
    {
      "label": "Onboarding time saved",
      "value": 72,
      "unit": "%",
      "note": "From manual steps to automated flows"
    },
    {
      "label": "Risk reduction",
      "value": 58,
      "unit": "%",
      "note": "From identity hardening and policy enforcement"
    },
    {
      "label": "Ticket volume reduced",
      "value": 41,
      "unit": "%",
      "note": "From clearer docs + self-serve tooling"
    },
    {
      "label": "Mean time to clarity",
      "value": 63,
      "unit": "%",
      "note": "From better dashboards + timelines"
    }
  ],
  "projectTags": [
    "Identity",
    "Security",
    "Automation",
    "Email/DNS",
    "Dashboards",
    "Operations",
    "Architecture",
    "Documentation"
  ],
  "projects": [
    {
      "id": "ptc-links-hub",
      "name": "PTC Links Hub",
      "when": "2026",
      "featured": true,
      "impact": 9,
      "complexity": 8,
      "tags": [
        "Architecture",
        "Dashboards",
        "Operations"
      ],
      "summary": "A central intranet doorway: links, status boards, quick actions, and role-based navigation.",
      "bullets": [
        "Designed information architecture and navigation for ~40+ advisors + staff.",
        "Shipped fast with SharePoint as a short-term landing page; planned long-term GitHub → Azure Static Web App secured by Entra ID.",
        "Integrated “ops dashboard” patterns: health tiles, key metrics, and onboarding quick actions."
      ],
      "actions": [
        {
          "label": "Case study",
          "href": "#",
          "kind": "case"
        },
        {
          "label": "Architecture notes",
          "href": "#systems",
          "kind": "jump"
        }
      ]
    },
    {
      "id": "identity-federation",
      "name": "Google Workspace ↔ Microsoft 365 Federation",
      "when": "2026",
      "featured": true,
      "impact": 10,
      "complexity": 10,
      "tags": [
        "Identity",
        "Security",
        "Architecture"
      ],
      "summary": "Consolidated identity strategy using Entra ID as control-plane while preserving necessary Google workflows.",
      "bullets": [
        "Designed SSO flows, account lifecycle guardrails, and admin boundaries.",
        "Implemented MFA / Conditional Access baselines with executive-friendly risk narratives.",
        "Built a migration plan with staged cutovers, rollback considerations, and communication templates."
      ],
      "actions": [
        {
          "label": "View systems map",
          "href": "#systems",
          "kind": "jump"
        },
        {
          "label": "Zero Trust roadmap",
          "href": "#writing",
          "kind": "jump"
        }
      ]
    },
    {
      "id": "csv-automation",
      "name": "Graph Automation: Contact Lifecycle at Scale",
      "when": "2026",
      "featured": true,
      "impact": 8,
      "complexity": 9,
      "tags": [
        "Automation",
        "Operations",
        "Identity"
      ],
      "summary": "Automated high-volume contact management via Microsoft Graph and operational safety rails.",
      "bullets": [
        "Built scripts with login flows, pagination handling, retries/backoff, and robust logging.",
        "Designed “show me what will change first” safety mode to prevent accidental mass changes.",
        "Aligned output formats (CSV schemas) for consistency across tooling and stakeholders."
      ],
      "actions": [
        {
          "label": "Playbook",
          "href": "#writing",
          "kind": "jump"
        },
        {
          "label": "Command: incident",
          "href": "#",
          "kind": "cmd"
        }
      ]
    },
    {
      "id": "deliverability",
      "name": "Deliverability Hardening: SPF/DMARC/DKIM + Proofpoint",
      "when": "2026",
      "featured": false,
      "impact": 8,
      "complexity": 8,
      "tags": [
        "Email/DNS",
        "Security",
        "Operations"
      ],
      "summary": "Reduced spoofing risk and improved inbox placement by aligning DNS, routing, and policy.",
      "bullets": [
        "Consolidated SPF includes to a single record; enforced DMARC alignment with staged policy tightening.",
        "Validated DKIM signing and message trace evidence across providers.",
        "Created a vendor escalation template with artifacts and concrete questions."
      ],
      "actions": [
        {
          "label": "Incident template",
          "href": "#writing",
          "kind": "jump"
        }
      ]
    },
    {
      "id": "soc-sim",
      "name": "SOC Ops Simulator (Portfolio Lab)",
      "when": "2025–2026",
      "featured": false,
      "impact": 7,
      "complexity": 7,
      "tags": [
        "Security",
        "Dashboards",
        "Documentation"
      ],
      "summary": "A portfolio-grade lab environment to practice detection, triage, and incident communication.",
      "bullets": [
        "Modeled real-world workflows: alert intake → evidence → containment → postmortem.",
        "Built interactive dashboards and scenario prompts to demonstrate thinking, not just tools.",
        "Emphasized executive communication and audit-ready timelines."
      ],
      "actions": [
        {
          "label": "Systems mindset",
          "href": "#systems",
          "kind": "jump"
        }
      ]
    },
    {
      "id": "notes-vault",
      "name": "PTC Notes Vault",
      "when": "2026",
      "featured": false,
      "impact": 6,
      "complexity": 6,
      "tags": [
        "Operations",
        "Documentation",
        "Dashboards"
      ],
      "summary": "A fast internal notes system built as a lightweight web app with a clean UX.",
      "bullets": [
        "Designed for speed: command palette, search, and categorized notes.",
        "Focused on clarity: consistent templates for incidents, vendors, and onboarding.",
        "Built in a way that works as static hosting (GitHub Pages) with local persistence."
      ],
      "actions": [
        {
          "label": "Open writing",
          "href": "#writing",
          "kind": "jump"
        }
      ]
    }
  ]
}
);

export const EXTRA_PROJECTS = Object.freeze(
[
  {
    "id": "aux-001",
    "name": "Auxiliary Initiative #001",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 5,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-002",
    "name": "Auxiliary Initiative #002",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 6,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-003",
    "name": "Auxiliary Initiative #003",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 7,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-004",
    "name": "Auxiliary Initiative #004",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 8,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-005",
    "name": "Auxiliary Initiative #005",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 9,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-006",
    "name": "Auxiliary Initiative #006",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 10,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-007",
    "name": "Auxiliary Initiative #007",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 4,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-008",
    "name": "Auxiliary Initiative #008",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 5,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-009",
    "name": "Auxiliary Initiative #009",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 6,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-010",
    "name": "Auxiliary Initiative #010",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 7,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-011",
    "name": "Auxiliary Initiative #011",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 8,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-012",
    "name": "Auxiliary Initiative #012",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 9,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-013",
    "name": "Auxiliary Initiative #013",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 10,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-014",
    "name": "Auxiliary Initiative #014",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 4,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-015",
    "name": "Auxiliary Initiative #015",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 5,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-016",
    "name": "Auxiliary Initiative #016",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 6,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-017",
    "name": "Auxiliary Initiative #017",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 7,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-018",
    "name": "Auxiliary Initiative #018",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 8,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-019",
    "name": "Auxiliary Initiative #019",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 9,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-020",
    "name": "Auxiliary Initiative #020",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 10,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-021",
    "name": "Auxiliary Initiative #021",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 4,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-022",
    "name": "Auxiliary Initiative #022",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 5,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-023",
    "name": "Auxiliary Initiative #023",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 6,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-024",
    "name": "Auxiliary Initiative #024",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 7,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-025",
    "name": "Auxiliary Initiative #025",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 8,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-026",
    "name": "Auxiliary Initiative #026",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 9,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-027",
    "name": "Auxiliary Initiative #027",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 10,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-028",
    "name": "Auxiliary Initiative #028",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 4,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-029",
    "name": "Auxiliary Initiative #029",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 5,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-030",
    "name": "Auxiliary Initiative #030",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 6,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-031",
    "name": "Auxiliary Initiative #031",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 7,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-032",
    "name": "Auxiliary Initiative #032",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 8,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-033",
    "name": "Auxiliary Initiative #033",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 9,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-034",
    "name": "Auxiliary Initiative #034",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 10,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-035",
    "name": "Auxiliary Initiative #035",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 4,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-036",
    "name": "Auxiliary Initiative #036",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 5,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-037",
    "name": "Auxiliary Initiative #037",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 6,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-038",
    "name": "Auxiliary Initiative #038",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 7,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-039",
    "name": "Auxiliary Initiative #039",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 8,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-040",
    "name": "Auxiliary Initiative #040",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 9,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-041",
    "name": "Auxiliary Initiative #041",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 10,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-042",
    "name": "Auxiliary Initiative #042",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 4,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-043",
    "name": "Auxiliary Initiative #043",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 5,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-044",
    "name": "Auxiliary Initiative #044",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 6,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-045",
    "name": "Auxiliary Initiative #045",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 7,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-046",
    "name": "Auxiliary Initiative #046",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 8,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-047",
    "name": "Auxiliary Initiative #047",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 9,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-048",
    "name": "Auxiliary Initiative #048",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 10,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-049",
    "name": "Auxiliary Initiative #049",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 4,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-050",
    "name": "Auxiliary Initiative #050",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 5,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-051",
    "name": "Auxiliary Initiative #051",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 6,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-052",
    "name": "Auxiliary Initiative #052",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 7,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-053",
    "name": "Auxiliary Initiative #053",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 8,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-054",
    "name": "Auxiliary Initiative #054",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 9,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-055",
    "name": "Auxiliary Initiative #055",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 10,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-056",
    "name": "Auxiliary Initiative #056",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 4,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-057",
    "name": "Auxiliary Initiative #057",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 5,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-058",
    "name": "Auxiliary Initiative #058",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 6,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-059",
    "name": "Auxiliary Initiative #059",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 7,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-060",
    "name": "Auxiliary Initiative #060",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 8,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-061",
    "name": "Auxiliary Initiative #061",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 9,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-062",
    "name": "Auxiliary Initiative #062",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 10,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-063",
    "name": "Auxiliary Initiative #063",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 4,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-064",
    "name": "Auxiliary Initiative #064",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 5,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-065",
    "name": "Auxiliary Initiative #065",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 6,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-066",
    "name": "Auxiliary Initiative #066",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 7,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-067",
    "name": "Auxiliary Initiative #067",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 8,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-068",
    "name": "Auxiliary Initiative #068",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 9,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-069",
    "name": "Auxiliary Initiative #069",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 10,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-070",
    "name": "Auxiliary Initiative #070",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 4,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-071",
    "name": "Auxiliary Initiative #071",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 5,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-072",
    "name": "Auxiliary Initiative #072",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 6,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-073",
    "name": "Auxiliary Initiative #073",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 7,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-074",
    "name": "Auxiliary Initiative #074",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 8,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-075",
    "name": "Auxiliary Initiative #075",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 9,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-076",
    "name": "Auxiliary Initiative #076",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 10,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-077",
    "name": "Auxiliary Initiative #077",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 4,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-078",
    "name": "Auxiliary Initiative #078",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 5,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-079",
    "name": "Auxiliary Initiative #079",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 6,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-080",
    "name": "Auxiliary Initiative #080",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 7,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-081",
    "name": "Auxiliary Initiative #081",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 8,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-082",
    "name": "Auxiliary Initiative #082",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 9,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-083",
    "name": "Auxiliary Initiative #083",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 10,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-084",
    "name": "Auxiliary Initiative #084",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 4,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-085",
    "name": "Auxiliary Initiative #085",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 5,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-086",
    "name": "Auxiliary Initiative #086",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 6,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-087",
    "name": "Auxiliary Initiative #087",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 7,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-088",
    "name": "Auxiliary Initiative #088",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 8,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-089",
    "name": "Auxiliary Initiative #089",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 9,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-090",
    "name": "Auxiliary Initiative #090",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 10,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-091",
    "name": "Auxiliary Initiative #091",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 4,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-092",
    "name": "Auxiliary Initiative #092",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 5,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-093",
    "name": "Auxiliary Initiative #093",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 6,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-094",
    "name": "Auxiliary Initiative #094",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 7,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-095",
    "name": "Auxiliary Initiative #095",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 8,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-096",
    "name": "Auxiliary Initiative #096",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 9,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-097",
    "name": "Auxiliary Initiative #097",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 10,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-098",
    "name": "Auxiliary Initiative #098",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 4,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-099",
    "name": "Auxiliary Initiative #099",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 5,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-100",
    "name": "Auxiliary Initiative #100",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 6,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-101",
    "name": "Auxiliary Initiative #101",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 7,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-102",
    "name": "Auxiliary Initiative #102",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 8,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-103",
    "name": "Auxiliary Initiative #103",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 9,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-104",
    "name": "Auxiliary Initiative #104",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 10,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-105",
    "name": "Auxiliary Initiative #105",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 4,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-106",
    "name": "Auxiliary Initiative #106",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 5,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-107",
    "name": "Auxiliary Initiative #107",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 6,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-108",
    "name": "Auxiliary Initiative #108",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 7,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-109",
    "name": "Auxiliary Initiative #109",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 8,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-110",
    "name": "Auxiliary Initiative #110",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 9,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-111",
    "name": "Auxiliary Initiative #111",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 10,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-112",
    "name": "Auxiliary Initiative #112",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 4,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-113",
    "name": "Auxiliary Initiative #113",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 5,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-114",
    "name": "Auxiliary Initiative #114",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 6,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-115",
    "name": "Auxiliary Initiative #115",
    "when": "2025–2025",
    "featured": false,
    "impact": 6,
    "complexity": 7,
    "tags": [
      "Identity",
      "Security"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-116",
    "name": "Auxiliary Initiative #116",
    "when": "2026–2026",
    "featured": false,
    "impact": 7,
    "complexity": 8,
    "tags": [
      "Email/DNS",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-117",
    "name": "Auxiliary Initiative #117",
    "when": "2024–2025",
    "featured": false,
    "impact": 8,
    "complexity": 9,
    "tags": [
      "Dashboards",
      "Architecture"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-118",
    "name": "Auxiliary Initiative #118",
    "when": "2025–2026",
    "featured": false,
    "impact": 9,
    "complexity": 10,
    "tags": [
      "Documentation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-119",
    "name": "Auxiliary Initiative #119",
    "when": "2026–2025",
    "featured": false,
    "impact": 10,
    "complexity": 4,
    "tags": [
      "Security",
      "Automation"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  },
  {
    "id": "aux-120",
    "name": "Auxiliary Initiative #120",
    "when": "2024–2026",
    "featured": false,
    "impact": 5,
    "complexity": 5,
    "tags": [
      "Automation",
      "Operations"
    ],
    "summary": "A structured initiative that demonstrates operational maturity: scopes, stakeholders, artifacts, and outcomes.",
    "bullets": [
      "Defined scope and success criteria; documented constraints and assumptions.",
      "Implemented repeatable workflow with guardrails and rollback plan.",
      "Captured evidence and timelines to support auditability and vendor escalations."
    ],
    "actions": [
      {
        "label": "Notes",
        "href": "#writing",
        "kind": "jump"
      }
    ]
  }
]
);


export const FULL_DATA = Object.freeze({
  ...DATA,
  projects: [...DATA.projects, ...EXTRA_PROJECTS]
});
