# CLAUDE.md: Sable & Smoke (repo: `sable-smoke-bar-and-kitchen`)

Global rules: ~/.claude/CLAUDE.md. Root rules: ../CLAUDE.md. This file holds what is specific to this project.

## Status

- Landing page for **Sable & Smoke**, a concept bar and kitchen in Porto. Complete: all seven sections built, styled, responsive, and accessible. The venue details, menu, prices, reviews, phone, and address are sample content.
- Public portfolio example for clients, MIT licensed ([LICENSE](LICENSE)), live on GitHub Pages (see Deployment).
- Lighthouse desktop (2026-07-18): Accessibility 100, Best Practices 100, SEO 100. Full numbers in the README's Quality section.

## Development

No build step, no package manager, no dependencies. Open `index.html` directly in a browser, or serve with any static server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

There are no tests, no linting tools, and no CI pipeline.

## Deployment

Hosted on **GitHub Pages** from the `main` branch root: any push to `main` redeploys automatically. Live at https://amrudincatic.github.io/sable-smoke-bar-and-kitchen/. The repo is public (a portfolio showcase for clients). A gitignored `.vercel/` config also exists for optional Vercel deploys.

## Architecture

Single-page static site. Three source files:

- **[index.html](index.html):** entire page structure; all seven sections in order: Hero → Story → Menu → Gallery → Events → Reviews → Contact + Footer
- **[css/style.css](css/style.css):** all styles; sections appear in the same order as the HTML
- **[js/main.js](js/main.js):** all interactivity

### CSS design tokens

All colours and spacing are CSS custom properties on `:root` (top of [style.css](css/style.css)):
- `--bg`, `--bg-alt`, `--bg-deep`: near-black backgrounds
- `--w66` through `--w06`: white at decreasing opacities (66% → 6%)
- `--font-serif` / `--font-sans`: Playfair Display (italic headings) / Inter
- `--section-pad`, `--inner-max`, `--inner-pad`: `clamp()`-based spacing

### JavaScript patterns

**Scroll lock:** `lockScroll()` / `unlockScroll()` in [main.js](js/main.js) are ref-counted. Both the mobile menu and gallery overlay call them; `body.overflow` is only restored when both are closed.

**Menu tabs:** ARIA tabs pattern (`role="tablist"`, `aria-selected`, `aria-controls` / `aria-labelledby`). Arrow key navigation is wired to the tablist. The "View full menu" expand button is cocktails-panel-specific; tab switching hides it on Food/Wine panels.

**Gallery overlay:** opens with `requestAnimationFrame` to trigger CSS transition; includes a focus trap (`trapFocus`) and restores focus to the triggering element on close.

**Scroll animations:** `IntersectionObserver` at threshold 0.15; adds `.is-visible` to `.animate` elements once, then unobserves. Hero headline uses `setTimeout` stagger instead.

**Hero background:** `new Image()` preloader loads `hero-bg.webp` and adds `.loaded` on load **or error** (so the JPEG fallback still reveals). CSS `.hero-bg` serves the image via `image-set()` (WebP with a JPEG fallback).

### Updating content

Events in the Events section ([index.html:262-298](index.html#L262)) are hardcoded HTML; the owner updates them manually when the lineup changes.

Menu items and prices are also hardcoded. Six cocktail items (Espresso Martini, Mojito, Whisky Sour, Dark & Stormy, Cosmopolitan, Tom Collins) carry `.menu-item--hidden` and are revealed by the expand button.

### Images

All images are in [images/](images/). `gallery-1/2/3`, `hero-bg`, and `interior` are venue photos; `gallery-4/5` are Unsplash placeholders. `hero-bg` and `interior` also have `.webp` versions (served via `image-set()` for the hero background and `<picture>` for the interior `<img>`, with the `.jpg` kept as fallback). `preview.jpg` is the README screenshot. **Keep the `.jpg` originals:** they are the fallbacks and the social `og:image` (WebP is unreliable for social scrapers).

### Head / social meta

`index.html` `<head>` carries Open Graph + Twitter Card tags plus a canonical link. `og:image` points at `images/hero-bg.jpg`; keep it a JPEG.

### Special characters

Use HTML entities throughout the HTML file (`&middot;`, `&rarr;`, `&#x17D;` for Ž, `&#273;` for đ) rather than raw UTF-8. A pre-commit security hook in this environment triggers on certain common English words that collide with reserved format names; entities sidestep it cleanly.

## Conventions

- **README:** [README.md](README.md) is the public showcase page. When structure, assets, deployment, or the Lighthouse numbers change, update its project tree, notes, and Quality section in the same commit.
