# Progress Log: Sable & Smoke

What was done, newest at the top. A running record of what was built for **this** project
(the Sable & Smoke bar & kitchen landing page). It documents the work on this site only.

- **Type:** single-page static marketing site
- **Stack:** vanilla HTML + CSS + JavaScript (no build, no dependencies)
- **Structure:** Hero → Story → Menu → Gallery → Events → Reviews → Contact + Footer
- **Source files:** `index.html`, `css/style.css`, `js/main.js`

---

## 2026-11-04: Old skill copies removed

- The owner's skill cleanup, from the tower: `.agents/` (git-ignored, 14 HyperFrames skills from May, never loaded here) and `skills-lock.json` are gone. The site does not use them.

---

## 2026-10-14: Unified with the Chata AI Tower standard

- `CLAUDE.md` no longer repeats rules that now load in every session from the global rules (`~/.claude/CLAUDE.md`) and the private root rules (`~/GitHub/CLAUDE.md`): the plain ASCII name rule, the em dash rule (which allowed a hyphen as a dash; the global rule bans that too), the browser check, and the `progress.md` half of the docs rule (the README half stays). Added the pointer line to those rules and a "Status" section with the current state, which moved there from this file.
- Fixed stale facts in `CLAUDE.md` and `README.md`: the Events section is at `index.html` lines 262-298, and six cocktails (not two) are hidden behind "View full menu".
- New `todo.md`, opening with a "Next session" section; the "Possible next steps" moved there from this file, plus one new item: the Google Fonts and Google Map requests.
- `progress.md` is newest first.
- Every spaced hyphen used as a dash rewritten in `CLAUDE.md`, `progress.md`, and `README.md` (42 in all, including one en dash and five the dash report does not flag: a dash at a line end and four in code comments, all in the README). The README project tree lists `todo.md`.
- A push to `main` redeploys production (GitHub Pages) with unchanged code.

## Build phases

Summary of the work from 2026-04-29 to 2026-07-18, grouped by what shipped, newest first.

### 9. Client-readiness polish
- Removed a dead footer link (the placeholder `sableandsmoke.example`, which would not resolve).
- Converted the hero and interior photos to WebP with JPEG fallbacks (`image-set()` for the CSS hero background, `<picture>` for the interior image), trimming ~200 KB of page weight. The `.jpg` originals are kept for the fallbacks and the social-preview (og:image) tag.
- Fixed all nine WCAG color-contrast failures (footer text and links, inactive menu tabs, and the decorative "02") by raising their opacity tokens to pass AA.
- Re-audited the live site with Lighthouse (desktop): **Accessibility 100, Best Practices 100, SEO 100**, plus Core Web Vitals LCP ~1.6 s, CLS 0.00, TTFB ~18 ms.
- Also captured mobile Core Web Vitals under throttled conditions (4x CPU, Slow 4G): LCP ~1.6 s, CLS 0.00, TTFB ~2 ms, all within Google's "Good" thresholds.

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

### 7. Project setup & housekeeping
- Added `CLAUDE.md` (guidance for AI-assisted edits), project docs, and an updated interior photo.
- Configured `.gitignore` to exclude `.vercel`, `.superpowers/`, `.DS_Store`, and `.agents/`.
- Relocated the project from an iCloud folder to `~/GitHub/sable-smoke-bar-and-kitchen` and cleaned up stale path references (source verified location-independent: uses relative paths only).
- Added `skills-lock.json` (Claude Code skill version lock).

### 6. Content & polish
- Expanded the cocktail menu (hidden items revealed by the expand button).
- Added the developer credit to the footer.
- Updated the hero CTA copy to "Call to reserve".
- Switched special characters to HTML entities throughout the HTML.

### 5. Accessibility & robustness
- Added a focus trap for the gallery overlay and focus restoration on close.
- Fixed a scroll-lock overflow race condition by making `lockScroll` / `unlockScroll` ref-counted (shared by the mobile menu and gallery overlay).
- Normalized the phone number to E.164 for `tel:` links.
- Added `prefers-reduced-motion` support.
- ARIA tabs pattern (roles, `aria-selected`, `aria-controls`) with arrow-key navigation.

### 4. Interactivity & motion
- Scroll animations via `IntersectionObserver` (fade-up, applied once per element at threshold 0.15).
- Mobile and tablet responsive passes.

### 3. Section styling
- **Hero**: full-screen layout, staggered headline reveal, background image that fades in only after load.
- **Story**: editorial two-column layout with a Google-rating stat.
- **Menu**: tabbed Cocktails / Food / Wine with tab switching and a "View full menu" expand interaction.
- **Gallery**: masonry grid plus a full-screen photo overlay.
- **Events & Reviews**: upcoming-nights list and review cards.
- **Contact & Footer**: address/hours/phone, embedded Google Map, footer nav.

### 2. Page structure
- Built the full HTML for all seven sections in order.
- Added the sticky navigation with scroll behavior and a full-screen mobile menu.
- Hardened nav accessibility, added `-webkit-backdrop-filter`, and `scroll-margin-top` for anchor offsets.

### 1. Foundation
- Added image assets (hero, interior, gallery photos).
- Scaffolded the base HTML, a CSS reset, and the design-token custom properties on `:root`.
- Fixed Firefox/macOS font smoothing (`-moz-osx-font-smoothing`).

---

*Built by Amrudin Catic: [amrudincatic.com](https://www.amrudincatic.com)*
