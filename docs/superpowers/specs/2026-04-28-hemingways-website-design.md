# Hemingway's Bar & Kitchen — Website Design Spec

**Date:** 2026-04-28
**Status:** Approved

---

## Overview

A single-page static website for Hemingway's Bar & Kitchen, a bar and restaurant located at Zmaja od Bosne 13, Sarajevo. The site serves two equal goals: cinematic brand showcase (make visitors want to come) and conversion (phone reservation CTA, menu visibility, location).

**Tech stack:** Pure HTML, CSS, JavaScript — no framework, no build step, deployable to any static host.

---

## Visual Direction

**Cinematic & Immersive.** All-black backgrounds, layered serif/italic typography, atmospheric photography. Design language borrowed from editorial fashion and film — not a typical restaurant template.

- **Palette:** Near-black (`#0a0a0a`–`#0d0d0d`) backgrounds, white text at varying opacities, no accent color
- **Typography:** Serif italic for headings and brand name; tight sans-serif in uppercase/tracked for labels and metadata
- **Motion:** Text reveals and fade-ins on scroll (Intersection Observer); no scroll hijacking
- **Images:** Sourced from Hemingway's Google Business profile (real photos of interior, food, cocktails, atmosphere)

---

## Page Structure

Single HTML file, linear scroll. Seven sections in order:

### 01 — Hero
- Full-screen section (`100vh`) with atmospheric photo as background
- Fixed top navigation: logo left, links right (Menu · Events · Contact)
- Large italic headline: *"Bar & Kitchen"* with city/address eyebrow text
- Horizontal rule divider + tagline
- Two footer elements: "Reserve a table →" CTA (links to `tel:` number) and "Scroll to explore ↓" hint
- **Animation:** Headline words stagger in on load; background image fades in

### 02 — Story
- Two-column layout: copy left, interior photo right
- Large ghost number "02" behind heading
- Heading: *"More than a bar. A feeling."*
- 2–3 sentences of brand copy capturing the atmosphere
- Stat callout: **4.3★** / 103 Google reviews
- **Animation:** Fade up on scroll entry

### 03 — Menu
- Tab switcher: Cocktails (default) · Food · Wine
- Grid of menu items (name, description, price in KM)
- Items populated from Google Business menu; prices are real values once confirmed
- "View full menu ↓" CTA at bottom — expands the section inline to reveal all items (no PDF, no separate page)
- **Interaction:** Tab click swaps visible item group with a brief fade

### 04 — Gallery
- Section heading: *"The atmosphere"*
- Masonry-style grid: one tall image spanning 2 rows + 4 smaller images
- Images from Google Business profile (interior, cocktails, food, bar, night ambiance)
- **Interaction:** Click opens fullscreen overlay with close button; hover shows a subtle brightness lift (desktop only)

### 05 — Events
- Section heading: *"Upcoming nights"*
- Vertical list of event rows: date number · divider · event name + metadata · genre tag
- Genre tags: EDM, Hip Hop, Mixed
- Content is hardcoded HTML — owner updates manually when events change
- Placeholder events seeded at build time; owner swaps in real upcoming dates

### 06 — Reviews
- Section heading: *"What people say"* + **4.3** score + "103 Google reviews" label
- 2×2 grid: 3 real review cards + 1 "Read all on Google →" link card
- Reviews sourced from top Google reviews:
  - Anđelka Z. — *"Definitely one of the best spots in Sarajevo..."*
  - Leo (Local Guide) — *"Nadar was truly a great host. Their DJ choices are all perfect..."*
  - Lejla C. — *"The atmosphere was warm and welcoming. The staff were incredibly friendly..."*
- Link card points to Google Maps listing

### 07 — Contact
- Two-column: info left, embedded Google Map right
- Info block: Address, Hours (open daily until midnight), Phone (062 610 097)
- Primary CTA: **"Call to reserve →"** — `<a href="tel:062610097">`
- Google Maps embed (iframe) of Zmaja od Bosne 13, Sarajevo
- **Footer strip:** Logo + nav links + hemingways.cc

---

## Navigation

- Sticky top nav, transparent over hero, transitions to solid dark background on scroll past hero
- Nav links are anchor links to section IDs (`#menu`, `#events`, `#contact`)
- Mobile: hamburger icon collapses links into a full-screen overlay menu

---

## Scroll Animations

Implemented with `IntersectionObserver` (no external library). Two animation types:
- **Fade up:** Default for section content blocks — opacity 0 → 1, translateY 24px → 0
- **Stagger:** Hero headline words animate in sequence with 100ms delay each

No scroll hijacking. Native browser scroll throughout.

---

## Responsiveness

- Mobile-first CSS with breakpoints at 640px and 1024px
- Story section stacks vertically on mobile (photo moves below copy)
- Menu grid collapses to single column on mobile
- Gallery grid: 2 columns on mobile, masonry on desktop
- Contact columns stack on mobile

---

## Images

All images sourced from Hemingway's Google Business profile. Downloaded and placed in `/images/` directory at build time. Categories needed:
- Hero background (wide atmospheric shot)
- Interior (story section)
- Gallery: interior, cocktail, food, bar counter, night vibe (5 images minimum)

---

## Files

```
index.html          — entire single-page site
css/
  style.css         — all styles
js/
  main.js           — scroll animations, menu tabs, gallery overlay, nav behavior
images/
  hero-bg.jpg
  interior.jpg
  gallery-*.jpg     (5–8 images)
```

---

## Out of Scope

- CMS or dynamic content management
- Online booking/reservation form (phone CTA only)
- Blog or news section
- Social media feed embeds
- Multi-language support
