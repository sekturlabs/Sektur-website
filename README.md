# Sektur

**Balance the Chaos.**

The official website for [Sektur](https://sektur.com) — a unified ecosystem of applications designed to help you master time, energy, and focus.

## Overview

A snap-scrolling, single-page website showcasing the Sektur brand and its app ecosystem (Quota, Stasis, and upcoming titles). Built as a pure static site — no frameworks, no build step, no dependencies.

## Tech Stack

- **HTML5** — Semantic markup with accessibility attributes
- **CSS3** — Custom properties, snap scroll, glassmorphism, responsive design
- **Vanilla JavaScript** — Navigation, scroll handling, intersection observer animations
- **Google Fonts** — Exo 2
- **Hosting** — GitHub Pages with custom domain (`sektur.com`)

## Project Structure

```
├── index.html          # Main site (home, ecosystem, app pages)
├── privacy.html        # Privacy policy (required for App Store)
├── styles.css          # All styles including mobile responsive
├── script.js           # Navigation, scroll arrows, orb interactions
├── animations.js       # Intersection observer, parallax, smooth scroll
├── favicon.svg         # Rocket icon favicon
├── og-image.png        # Open Graph social preview image
├── CNAME               # Custom domain config for GitHub Pages
└── .gitignore          # Excludes dev tools, OS files, IDE config
```

## Local Development

No build step required. Open `index.html` in a browser:

```bash
# Option 1: Direct file
open index.html

# Option 2: Local server (for accurate path resolution)
npx serve .
```

## Deployment

Pushes to `main` auto-deploy via GitHub Pages. Changes are live within 1–2 minutes.

## Status

**Live** at [sektur.com](https://sektur.com)
