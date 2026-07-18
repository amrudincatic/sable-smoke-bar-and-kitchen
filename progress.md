# Progress Log - Sable & Smoke

A running record of what was built for **this** project (the Sable & Smoke bar & kitchen
landing page). It documents the work on this site only.

- **Type:** single-page static marketing site
- **Stack:** vanilla HTML + CSS + JavaScript (no build, no dependencies)
- **Structure:** Hero → Story → Menu → Gallery → Events → Reviews → Contact + Footer
- **Source files:** `index.html`, `css/style.css`, `js/main.js`

---

## Build phases

Chronological summary of the work, grouped by what shipped.

### 1. Foundation
- Added image assets (hero, interior, gallery photos).
- Scaffolded the base HTML, a CSS reset, and the design-token custom properties on `:root`.
- Fixed Firefox/macOS font smoothing (`-moz-osx-font-smoothing`).

### 2. Page structure
- Built the full HTML for all seven sections in order.
- Added the sticky navigation with scroll behavior and a full-screen mobile menu.
- Hardened nav accessibility, added `-webkit-backdrop-filter`, and `scroll-margin-top` for anchor offsets.

### 3. Section styling
- **Hero** - full-screen layout, staggered headline reveal, background image that fades in only after load.
- **Story** - editorial two-column layout with a Google-rating stat.
- **Menu** - tabbed Cocktails / Food / Wine with tab switching and a "View full menu" expand interaction.
- **Gallery** - masonry grid plus a full-screen photo overlay.
- **Events & Reviews** - upcoming-nights list and review cards.
- **Contact & Footer** - address/hours/phone, embedded Google Map, footer nav.

### 4. Interactivity & motion
- Scroll animations via `IntersectionObserver` (fade-up, applied once per element at threshold 0.15).
- Mobile and tablet responsive passes.

### 5. Accessibility & robustness
- Added a focus trap for the gallery overlay and focus restoration on close.
- Fixed a scroll-lock overflow race condition by making `lockScroll` / `unlockScroll` ref-counted (shared by the mobile menu and gallery overlay).
- Normalized the phone number to E.164 for `tel:` links.
- Added `prefers-reduced-motion` support.
- ARIA tabs pattern (roles, `aria-selected`, `aria-controls`) with arrow-key navigation.

### 6. Content & polish
- Expanded the cocktail menu (hidden items revealed by the expand button).
- Added the developer credit to the footer.
- Updated the hero CTA copy to "Call to reserve".
- Switched special characters to HTML entities throughout the HTML.

### 7. Project setup & housekeeping
- Added `CLAUDE.md` (guidance for AI-assisted edits), project docs, and an updated interior photo.
- Configured `.gitignore` to exclude `.vercel`, `.superpowers/`, `.DS_Store`, and `.agents/`.
- Relocated the project from an iCloud folder to `~/GitHub/sable-smoke-bar-and-kitchen` and cleaned up stale path references (source verified location-independent - uses relative paths only).
- Added `skills-lock.json` (Claude Code skill version lock).

### 8. Documentation & publishing (this pass)
- Wrote this `progress.md` and a full `README.md`.
- Made the repository public as a portfolio example to share with clients.
- Enabled **GitHub Pages** (served from `main` / root) so the site is publicly visible.
  - Live URL: https://amrudincatic.github.io/sable-smoke-bar-and-kitchen/
- Standardized the developer credit to plain "Amrudin Catic" and replaced em dashes with hyphens across the project.
- Added an MIT `LICENSE` (Copyright 2026 Amrudin Catic).
- Removed old internal planning docs (`docs/superpowers/`) that referenced the project's previous name.
- Added Open Graph and Twitter Card meta tags for rich link previews when the URL is shared.
- Added a hero screenshot (`images/preview.jpg`) to the README.
- Set the GitHub repo description, homepage link, and topics for a polished public repo page.

---

## Current status

- ✅ Site complete - all seven sections built, styled, responsive, and accessible.
- ✅ Documentation added (`README.md`, `progress.md`).
- ✅ Repository public, GitHub Pages live.
- ✅ MIT licensed; repository cleaned up for public showcase.

## Possible next steps

- Replace sample content (menu, prices, reviews, phone, address) with real venue data before any production use.
- Add a custom domain to GitHub Pages if desired.
- Optimize/serve images as WebP for faster loads.

---

*Built by Amrudin Catic - [amrudincatic.com](https://www.amrudincatic.com)*
