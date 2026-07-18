# Sable & Smoke - Bar & Kitchen Landing Page

A cinematic, single-page website for **Sable & Smoke**, a concept bar and kitchen in Porto. Built as a fast, dependency-free static site: dark, editorial, and mobile-first.

**Live demo:** https://amrudincatic.github.io/sable-smoke-bar-and-kitchen/

> **About this project - read me first**
>
> This repository is published publicly as a **portfolio example**. It's here to
> show prospective clients the kind of modern, hand-built landing page I deliver -
> the structure, the design system, the accessibility work, and the code quality.
> The venue details, menu, prices, and reviews are **sample content** for a concept
> venue; swap them for real data before using this as a production site.

---

## What it is

A modern hospitality landing page that reads like a print editorial and behaves like an app:

- **One page, seven sections** - Hero → Story → Menu → Gallery → Events → Reviews → Contact + Footer.
- **No build step, no framework, no dependencies** - just HTML, CSS, and vanilla JavaScript.
- **Cinematic dark theme** - near-black backgrounds, layered white opacities, Playfair Display italics over Inter.
- **Fully responsive** - designed mobile-first, refined for tablet and desktop.
- **Accessible** - ARIA tabs, keyboard navigation, focus traps, and reduced-motion support.

## Features

| Area | Highlights |
|------|-----------|
| **Hero** | Full-screen, staggered headline reveal, background image that fades in only after it loads |
| **Menu** | Tabbed Cocktails / Food / Wine (ARIA tabs pattern with arrow-key nav) + "View full menu" expand |
| **Gallery** | Masonry grid with a full-screen photo overlay, focus trap, and focus restore on close |
| **Scroll animations** | `IntersectionObserver` fade-up, applied once per element, honoring `prefers-reduced-motion` |
| **Navigation** | Sticky nav with scroll behavior + a full-screen mobile menu |
| **Contact** | Embedded Google Map, tap-to-call phone (E.164), address and hours |
| **Reviews / Events** | Google-review card and a hand-maintained upcoming-events list |

## Tech stack

- **HTML5** - semantic markup, HTML entities for special characters
- **CSS3** - custom properties (design tokens), `clamp()` spacing, Grid + Flexbox
- **Vanilla JavaScript** - no libraries; `IntersectionObserver`, ref-counted scroll lock, focus trapping
- **Google Fonts** - Playfair Display + Inter
- **Hosting** - GitHub Pages (also configured for Vercel)

## Project structure

```
.
├── index.html        # Entire page - all seven sections, in order
├── css/
│   └── style.css     # All styles; sections in the same order as the HTML
├── js/
│   └── main.js       # All interactivity
├── images/           # Venue photos + gallery imagery
├── CLAUDE.md         # Guidance for AI-assisted edits
├── LICENSE           # MIT license
├── progress.md       # Development log / changelog for this project
└── README.md         # You are here
```

## Running locally

No install required. Either open the file directly, or serve it statically:

```bash
# Option 1 - open directly
open index.html

# Option 2 - Python
python3 -m http.server 8080

# Option 3 - Node
npx serve .
```

Then visit `http://localhost:8080`.

## Design tokens

All colours and spacing live as CSS custom properties on `:root` at the top of [css/style.css](css/style.css):

- `--bg`, `--bg-alt`, `--bg-deep` - near-black backgrounds
- `--w66` … `--w06` - white at decreasing opacities (66% → 6%)
- `--font-serif` / `--font-sans` - Playfair Display (italic headings) / Inter
- `--section-pad`, `--inner-max`, `--inner-pad` - `clamp()`-based responsive spacing

Change the theme by editing these values in one place.

## Updating content

- **Menu items & prices** are hardcoded in [index.html](index.html). Two cocktails carry `.menu-item--hidden` and are revealed by the "View full menu" button.
- **Events** are hand-maintained HTML in the Events section - edit them when the lineup changes.
- **Images** live in [images/](images/); replace files in place to swap photography.

## Accessibility & performance notes

- ARIA tabs with `role="tablist"`, `aria-selected`, and arrow-key navigation on the menu.
- Gallery overlay is a modal dialog with a focus trap and focus restoration.
- Scroll lock is **ref-counted** - the mobile menu and gallery overlay share it, and `body` overflow is only restored when both are closed.
- `prefers-reduced-motion` disables animations for users who ask for it.
- Hero background is preloaded and only shown once decoded, to avoid a flash of unstyled hero.
- Images use `loading="lazy"`; fonts and the hero image are preloaded.

## Deployment

The site is served from the repository root of the `main` branch via **GitHub Pages**. Any push to `main` redeploys automatically. A `.vercel` config is also present for deploying to Vercel as an alternative.

## License

Released under the [MIT License](LICENSE) - Copyright (c) 2026 Amrudin Catic.

## Credits

Designed and built by **Amrudin Catic** - [amrudincatic.com](https://www.amrudincatic.com)

---

*Sample/demo content. Not affiliated with any real venue - created as a design and front-end reference.*
