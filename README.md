# Vimal Raj S — Portfolio

[![Live site](https://img.shields.io/badge/Live-vimal33329.github.io%2Fvimalrsm-2e8555?style=for-the-badge&logo=githubpages&logoColor=white)](https://vimal33329.github.io/vimalrsm/)
[![Deploy](https://github.com/vimal33329/vimalrsm/actions/workflows/deploy.yml/badge.svg)](https://github.com/vimal33329/vimalrsm/actions/workflows/deploy.yml)

**Live:** https://vimal33329.github.io/vimalrsm/

Personal portfolio and resume of Vimal Raj S, Cloud Specialist and Full Stack Lead, built with [Docusaurus 2](https://docusaurus.io/).

## Local development

Requires Node.js 16.14 or newer.

```bash
npm ci
npm start
```

The dev server opens at http://localhost:3000/vimalrsm/ and reloads on change.

## Build

```bash
npm run build
npm run serve
```

The static site is written to `build/`.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). You can also start a deploy by hand from the **Actions** tab with **Run workflow**.

The repository's Pages source must be set to **GitHub Actions** (Settings → Pages).

## Project layout

| Path | Contents |
| --- | --- |
| `src/pages/index.js` | Animated home page |
| `src/components/` | Home page sections and inline SVG icons |
| `docs/intro.md` | Full resume |
| `docs/WorkExperience/` | One page per role |
| `docs/Achievements/` | Personal projects and YouTube |
| `static/` | Images and the CV PDF |
