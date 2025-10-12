# Satyobroto Portfolio (React + Vite)

This repository contains a Vite + React portfolio website. The production build is output to the `docs/` folder and published to GitHub Pages.

Live site
---------

https://satyobroto-portfolio.vercel.app/

Quick start (local)
-------------------

Prerequisites: Node.js (16+), npm, git

Install dependencies:

```bash
npm install
```

Run development server (hot reload):

```bash
npm run dev
```

Build and preview (production-like)
----------------------------------

Build for production (outputs to `docs/`):

```bash
npm run build
```

Build for local preview (relative asset paths):

```bash
npm run build:local
npm run preview
# then open http://127.0.0.1:4173
```

Deploy to GitHub Pages
----------------------

This project uses `gh-pages` to publish the `docs/` folder to the `gh-pages` branch.

Make sure your repository has an `origin` remote and you have push access. Then:

```bash
npm run deploy
```

Notes
-----

- The repository root `index.html` has been replaced with a small redirect to the live site to avoid accidental requests for development files (for example `/src/main.jsx`) which would return 404s when browsing the repo root.
- If you prefer the repo root to show a documentation page instead of redirecting, I can update it.
- If you want automated deploys on push, I can add a GitHub Actions workflow to build & deploy on `main`.

Troubleshooting
---------------

- If you get 404s for built assets after deploying, try:
	1. Waiting a minute for GitHub Pages to propagate the changes.
	2. Running `npm run build:local` and `npx gh-pages -d docs -t` to force-publish.
	3. Confirming the `gh-pages` branch contains the `docs/assets` files.
