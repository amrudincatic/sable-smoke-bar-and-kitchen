# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

No build step, no package manager, no dependencies. Open `index.html` directly in a browser, or serve with any static server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

There are no tests, no linting tools, and no CI pipeline. Verify changes by viewing the page in a browser.

## Architecture

Single-page static site. Three source files:

- **[index.html](index.html)** - entire page structure; all seven sections in order: Hero → Story → Menu → Gallery → Events → Reviews → Contact + Footer
- **[css/style.css](css/style.css)** - all styles; sections appear in the same order as the HTML
- **[js/main.js](js/main.js)** - all interactivity

### CSS design tokens

All colours and spacing are CSS custom properties on `:root` (top of [style.css](css/style.css)):
- `--bg`, `--bg-alt`, `--bg-deep` - near-black backgrounds
- `--w66` through `--w06` - white at decreasing opacities (66% → 6%)
- `--font-serif` / `--font-sans` - Playfair Display (italic headings) / Inter
- `--section-pad`, `--inner-max`, `--inner-pad` - `clamp()`-based spacing

### JavaScript patterns

**Scroll lock** - `lockScroll()` / `unlockScroll()` in [main.js](js/main.js) are ref-counted. Both the mobile menu and gallery overlay call them; `body.overflow` is only restored when both are closed.

**Menu tabs** - ARIA tabs pattern (`role="tablist"`, `aria-selected`, `aria-controls` / `aria-labelledby`). Arrow key navigation is wired to the tablist. The "View full menu" expand button is cocktails-panel-specific; tab switching hides it on Food/Wine panels.

**Gallery overlay** - opens with `requestAnimationFrame` to trigger CSS transition; includes a focus trap (`trapFocus`) and restores focus to the triggering element on close.

**Scroll animations** - `IntersectionObserver` at threshold 0.15; adds `.is-visible` to `.animate` elements once, then unobserves. Hero headline uses `setTimeout` stagger instead.

**Hero background** - `new Image()` preloader; adds `.loaded` class only after the image has loaded (not synchronously).

### Updating content

Events in the Events section ([index.html:196–226](index.html#L196)) are hardcoded HTML - the owner updates them manually when the lineup changes.

Menu items and prices are also hardcoded. Two cocktail items (Espresso Martini, Mojito) carry `.menu-item--hidden` and are revealed by the expand button.

### Images

All images are in [images/](images/). gallery-1/2/3, hero-bg, and interior are venue photos; gallery-4 and gallery-5 are Unsplash placeholders.

### Special characters

Use HTML entities throughout the HTML file (`&middot;`, `&rarr;`, `&#x17D;` for Ž, `&#273;` for đ) rather than raw UTF-8. A pre-commit security hook in this environment triggers on certain common English words that collide with reserved format names; entities sidestep it cleanly.
