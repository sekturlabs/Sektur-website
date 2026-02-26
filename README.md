# Sektur

**Balance the Chaos.**

The official website for [Sektur](https://sektur.com) — a unified ecosystem of applications designed to help you master time, energy, and focus.

## Overview

A multi-page website showcasing the Sektur brand and its app ecosystem. Built as a pure static site — no frameworks, no build step, no dependencies. Features snap-scrolling, glassmorphic orb animations, and a dark "Void" aesthetic.

## Live Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero orb, app cards, coming soon section, footer |
| `/quota/` | Quota app landing — features, App Store links, store icon buttons |
| `/quota/privacy/` | Quota privacy policy — zero data collection, CCPA, GDPR |
| `/quota/terms/` | Quota terms of service — Quota Pro IAP, Apple StoreKit |
| `/stasis/` | Stasis app landing — coming soon placeholder |
| `/stasis/privacy/` | Stasis privacy placeholder — links to main policy |
| `/stasis/terms/` | Stasis terms placeholder — links to main terms |
| `/contact/` | Contact form — Formspree integration |
| `/privacy/` | Main SEKTUR privacy policy — umbrella, CCPA, GDPR |
| `/terms/` | Main SEKTUR terms of service — covers all apps |

## Tech Stack

- **HTML5** — Semantic markup with accessibility attributes
- **CSS3** — Custom properties, snap scroll, glassmorphism, responsive design
- **Vanilla JavaScript** — Navigation, scroll handling, intersection observer animations
- **Formspree** — Contact form processing (no backend required)
- **Hosting** — GitHub Pages with custom domain (`sektur.com`)

## Security

All pages include hardened security headers via `<meta>` tags:

- **Content Security Policy** — `default-src 'self'`, restricts scripts/styles/fonts/images to same origin, blocks framing (`frame-ancestors 'none'`)
- **Referrer Policy** — `strict-origin-when-cross-origin`
- **Permissions Policy** — Camera, microphone, and geolocation disabled

## Project Structure

```
├── index.html              # Homepage
├── styles.css              # All styles (~46KB) — Void design system
├── script.js               # Scroll arrows, orb interactions
├── animations.js           # Intersection observers, parallax
├── contact.js              # Formspree form handler
│
├── contact/index.html      # Contact page
├── privacy/index.html      # Main SEKTUR privacy policy
├── terms/index.html        # Main SEKTUR terms of service
│
├── quota/
│   ├── index.html          # Quota landing page
│   ├── privacy/index.html  # Quota privacy policy
│   └── terms/index.html    # Quota terms of service
│
├── stasis/
│   ├── index.html          # Stasis landing page
│   ├── privacy/index.html  # Stasis privacy placeholder
│   └── terms/index.html    # Stasis terms placeholder
│
├── favicon.svg             # Rocket icon favicon
├── rocket-icon.svg         # Nav bar rocket logo
├── og-image.png            # Open Graph social preview
├── orb-*.webp              # Glassmorphic orb assets (7 colors)
├── fonts/                  # Custom fonts
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Crawler directives
├── 404.html                # Custom 404 page
├── CNAME                   # GitHub Pages custom domain
└── .gitignore              # Excludes dev tools, OS files, IDE config
```

## Legal Structure

The legal documents follow an **umbrella + app-specific** model:

- **Main policies** (`/privacy/`, `/terms/`) cover all of SEKTUR and defer to app-specific policies where applicable
- **App-specific policies** (e.g., `/quota/privacy/`) contain the authoritative details for each app
- If there is a conflict, app-specific policies govern

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
