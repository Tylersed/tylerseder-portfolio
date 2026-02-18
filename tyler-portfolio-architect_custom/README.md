# Tyler Seder — Senior Architect Portfolio (Static)

This repo is a **static, framework-free portfolio** designed to look and feel like a product:
- Design tokens + component system
- Command palette (Ctrl/Cmd + K)
- Projects: filtering + search + sorting
- Interactive systems diagram (SVG)
- Offline caching (service worker) for GitHub Pages
- Accessible defaults (keyboard nav, skip link, focus rings, reduced motion)

## Quick start (local)
Open `index.html` in a browser.

If you want a local server (recommended for ES modules):
```bash
python -m http.server 5173
# open http://localhost:5173
```

## Deploy on GitHub Pages
1. Create a new repo
2. Upload all files in this folder to the repo root
3. Settings → Pages → Deploy from a branch → `main` + `/ (root)`
4. Save

## Customize

- Live domain: https://tylerseder.com
- LinkedIn: https://www.linkedin.com/in/tyler-seder-99096a292

- Update contact info in `config.js`
- Update content (projects/experience/metrics) in `data.js`
- Optional: remove the “Component Cookbook” from `styles.css` if you want a smaller repo

## Architecture
See `docs/ARCHITECTURE.md` and `docs/RUNBOOK.md`.
