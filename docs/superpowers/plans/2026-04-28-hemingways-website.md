# Hemingway's Bar & Kitchen - Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a cinematic single-page static website for Hemingway's Bar & Kitchen in Sarajevo.

**Architecture:** Pure HTML/CSS/JS, single `index.html` entry, styles in `css/style.css`, interactions in `js/main.js`. Sections scroll linearly. Animations use `IntersectionObserver` - no scroll hijacking, no external libraries.

**Tech Stack:** HTML5, CSS3 (Grid, Flexbox, custom properties, `clamp()`), vanilla JS, Google Fonts (Playfair Display + Inter)

---

## File Map

```
index.html              - full page HTML, all 7 sections
css/
  style.css             - all styles (reset, vars, sections, animations, responsive)
js/
  main.js               - nav scroll, mobile menu, menu tabs, gallery overlay, IntersectionObserver
images/
  hero-bg.jpg           - full-width atmospheric photo (hero background)
  interior.jpg          - interior shot (story section)
  gallery-1.jpg         - tall feature image (interior)
  gallery-2.jpg         - cocktail photo
  gallery-3.jpg         - food photo
  gallery-4.jpg         - bar counter photo
  gallery-5.jpg         - night vibe photo
```

---

## Task 1: Fetch Images

**Files:**
- Create: `images/` directory with all photo assets

- [ ] **Step 1: Create images directory**

```bash
mkdir -p images
```

- [ ] **Step 2: Try fetching from Google Business profile**

Use WebFetch on the Google Maps listing:
`https://www.google.com/maps/place/Hemingway%27s+Bar+%26+Kitchen/@43.8549453,18.3966404,17z/`

Scan the HTML source for `lh3.googleusercontent.com` image URLs. These are the Google Business photo CDN URLs. For each image URL found, download it with curl:

```bash
curl -L -o images/hero-bg.jpg "<IMAGE_URL>"
```

Download at minimum 7 images: atmospheric/wide interior (hero), interior detail, cocktail, food, bar counter, night vibe, exterior. Rename to match the file map above.

- [ ] **Step 3: If Google Maps returns no images (JS-rendered), use WebSearch**

Search: `hemingways bar kitchen sarajevo site:lh3.googleusercontent.com`

Or: `"hemingways bar" sarajevo photos`

Download any usable high-quality photos found.

- [ ] **Step 4: If no real photos found, use Unsplash placeholders**

```bash
curl -L -o images/hero-bg.jpg "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
curl -L -o images/interior.jpg "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=1200&q=80"
curl -L -o images/gallery-1.jpg "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80"
curl -L -o images/gallery-2.jpg "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80"
curl -L -o images/gallery-3.jpg "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80"
curl -L -o images/gallery-4.jpg "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
curl -L -o images/gallery-5.jpg "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800&q=80"
```

- [ ] **Step 5: Verify all images downloaded**

```bash
ls -lh images/
```

Expected: 7 files, each >50KB. If any are <10KB they likely failed - re-run that curl command.

- [ ] **Step 6: Commit**

```bash
git init
git add images/
git commit -m "feat: add image assets"
```

---

## Task 2: Project Scaffold + Base CSS

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p css js
```

- [ ] **Step 2: Create `css/style.css` with reset, custom properties, and typography**

```css
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--white);
  font-family: var(--font-sans);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img { display: block; width: 100%; height: 100%; object-fit: cover; }
a { text-decoration: none; color: inherit; }
ul, ol { list-style: none; }
button { background: none; border: none; cursor: pointer; color: inherit; font: inherit; }

/* ── Custom properties ── */
:root {
  --bg:       #0a0a0a;
  --bg-alt:   #0d0d0d;
  --bg-deep:  #080808;
  --white:    #ffffff;
  --w66:      rgba(255,255,255,0.66);
  --w44:      rgba(255,255,255,0.44);
  --w22:      rgba(255,255,255,0.22);
  --w11:      rgba(255,255,255,0.11);
  --w06:      rgba(255,255,255,0.06);
  --border:   rgba(255,255,255,0.09);

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Inter', system-ui, sans-serif;

  --section-pad: clamp(80px, 10vw, 140px);
  --inner-max:   1200px;
  --inner-pad:   clamp(24px, 6vw, 80px);
}
```

- [ ] **Step 3: Create `js/main.js`**

```javascript
// Hemingway's Bar & Kitchen - main.js
```

- [ ] **Step 4: Create `index.html` with document shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hemingway's Bar &amp; Kitchen - Sarajevo</title>
  <meta name="description" content="Hemingway's Bar &amp; Kitchen. A cinematic bar and kitchen in Sarajevo. Open daily until midnight. Zmaja od Bosne 13.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- sections go here -->
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 5: Open `index.html` in browser and verify**

```bash
open index.html
```

Expected: blank black page, no console errors, Google Fonts loaded (check Network tab).

- [ ] **Step 6: Commit**

```bash
git add index.html css/style.css js/main.js
git commit -m "feat: scaffold - base HTML, CSS reset, custom properties"
```

---

## Task 3: Full HTML Structure

**Files:**
- Modify: `index.html` - replace `<!-- sections go here -->` with complete page HTML

- [ ] **Step 1: Replace body content in `index.html`**

Replace the line `  <!-- sections go here -->` with the full page HTML below. Keep the `<script src="js/main.js"></script>` line at the end of `<body>`.

```html
<!-- ── Navigation ── -->
<nav id="nav" aria-label="Main navigation">
  <a href="#hero" class="nav-logo">Hemingway's</a>
  <div class="nav-links">
    <a href="#menu">Menu</a>
    <a href="#events">Events</a>
    <a href="#contact">Contact</a>
  </div>
  <button id="hamburger" class="hamburger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<div id="mobile-menu" class="mobile-menu" aria-hidden="true">
  <button id="mobile-close" class="mobile-close" aria-label="Close menu">&#x2715;</button>
  <nav class="mobile-nav">
    <a href="#menu">Menu</a>
    <a href="#events">Events</a>
    <a href="#contact">Contact</a>
  </nav>
</div>

<!-- ── 01 Hero ── -->
<section id="hero" class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-content">
    <p class="hero-eyebrow animate">Sarajevo &middot; Zmaja od Bosne 13</p>
    <h1 class="hero-title">
      <span class="hero-word">Bar</span>
      <span class="hero-word hero-word--muted">&amp;</span>
      <span class="hero-word">Kitchen</span>
    </h1>
    <div class="hero-rule" aria-hidden="true"></div>
    <p class="hero-tagline animate">Open daily until midnight &middot; Dine in &middot; Delivery</p>
  </div>
  <div class="hero-footer">
    <a href="tel:062610097" class="hero-cta animate">Reserve a table &rarr;</a>
    <span class="hero-scroll animate" aria-hidden="true">Scroll to explore &darr;</span>
  </div>
</section>

<!-- ── 02 Story ── -->
<section id="story" class="story">
  <div class="story-inner">
    <div class="story-copy">
      <span class="story-ghost" aria-hidden="true">02</span>
      <h2 class="story-heading animate">More than a bar.<br>A feeling.</h2>
      <p class="story-text animate">A place where the city slows down. Hemingway's is Sarajevo's corner for cocktails crafted with care, food made to linger over, and nights that stretch past midnight.</p>
      <div class="story-stat animate">
        <span class="story-stat-num">4.3&#9733;</span>
        <span class="story-stat-label">103 reviews on Google</span>
      </div>
    </div>
    <div class="story-photo animate">
      <img src="images/interior.jpg" alt="Hemingway's interior" loading="lazy">
    </div>
  </div>
</section>

<!-- ── 03 Menu ── -->
<section id="menu" class="menu-section">
  <div class="menu-inner">
    <div class="menu-header">
      <h2 class="menu-title animate">What we serve</h2>
      <div class="menu-tabs" role="tablist" aria-label="Menu categories">
        <button class="menu-tab menu-tab--active" data-tab="cocktails" role="tab" aria-selected="true" aria-controls="panel-cocktails">Cocktails</button>
        <button class="menu-tab" data-tab="food" role="tab" aria-selected="false" aria-controls="panel-food">Food</button>
        <button class="menu-tab" data-tab="wine" role="tab" aria-selected="false" aria-controls="panel-wine">Wine</button>
      </div>
    </div>

    <div id="panel-cocktails" class="menu-panel menu-panel--active" role="tabpanel">
      <div class="menu-grid">
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Old Fashioned</span><span class="menu-item-desc">Bourbon &middot; bitters &middot; orange peel</span></div>
          <span class="menu-item-price">12 KM</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Hemingway Daiquiri</span><span class="menu-item-desc">White rum &middot; grapefruit &middot; maraschino</span></div>
          <span class="menu-item-price">13 KM</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Negroni</span><span class="menu-item-desc">Gin &middot; Campari &middot; sweet vermouth</span></div>
          <span class="menu-item-price">11 KM</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Aperol Spritz</span><span class="menu-item-desc">Aperol &middot; Prosecco &middot; soda &middot; orange</span></div>
          <span class="menu-item-price">10 KM</span>
        </div>
        <div class="menu-item menu-item--hidden animate">
          <div class="menu-item-info"><span class="menu-item-name">Espresso Martini</span><span class="menu-item-desc">Vodka &middot; coffee liqueur &middot; espresso</span></div>
          <span class="menu-item-price">12 KM</span>
        </div>
        <div class="menu-item menu-item--hidden animate">
          <div class="menu-item-info"><span class="menu-item-name">Mojito</span><span class="menu-item-desc">Rum &middot; lime &middot; mint &middot; soda</span></div>
          <span class="menu-item-price">10 KM</span>
        </div>
      </div>
    </div>

    <div id="panel-food" class="menu-panel" role="tabpanel" hidden>
      <div class="menu-grid">
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Burrata</span><span class="menu-item-desc">Cherry tomatoes &middot; basil oil &middot; sea salt</span></div>
          <span class="menu-item-price">14 KM</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Beef Sliders</span><span class="menu-item-desc">Angus beef &middot; caramelised onion &middot; aioli</span></div>
          <span class="menu-item-price">16 KM</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Truffle Fries</span><span class="menu-item-desc">Crispy fries &middot; truffle oil &middot; parmesan</span></div>
          <span class="menu-item-price">9 KM</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Charcuterie Board</span><span class="menu-item-desc">Cured meats &middot; cornichons &middot; sourdough</span></div>
          <span class="menu-item-price">22 KM</span>
        </div>
      </div>
    </div>

    <div id="panel-wine" class="menu-panel" role="tabpanel" hidden>
      <div class="menu-grid">
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Blatina</span><span class="menu-item-desc">Bosnian red &middot; full-bodied &middot; dry</span></div>
          <span class="menu-item-price">8 KM / glass</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">&#x17D;ilavka</span><span class="menu-item-desc">Bosnian white &middot; crisp &middot; mineral</span></div>
          <span class="menu-item-price">8 KM / glass</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">Prosecco</span><span class="menu-item-desc">Italian sparkling &middot; dry</span></div>
          <span class="menu-item-price">9 KM / glass</span>
        </div>
        <div class="menu-item animate">
          <div class="menu-item-info"><span class="menu-item-name">House Red</span><span class="menu-item-desc">Chef's selection &middot; changes weekly</span></div>
          <span class="menu-item-price">7 KM / glass</span>
        </div>
      </div>
    </div>

    <button id="menu-expand" class="menu-expand animate">View full menu &darr;</button>
  </div>
</section>

<!-- ── 04 Gallery ── -->
<section id="gallery" class="gallery-section">
  <div class="gallery-inner">
    <h2 class="gallery-title animate">The atmosphere</h2>
    <div class="gallery-grid">
      <div class="gallery-item gallery-item--tall animate" tabindex="0" role="button" aria-label="View interior photo">
        <img src="images/gallery-1.jpg" alt="Hemingway's interior" loading="lazy">
      </div>
      <div class="gallery-item animate" tabindex="0" role="button" aria-label="View cocktail photo">
        <img src="images/gallery-2.jpg" alt="Cocktail at Hemingway's" loading="lazy">
      </div>
      <div class="gallery-item animate" tabindex="0" role="button" aria-label="View food photo">
        <img src="images/gallery-3.jpg" alt="Food at Hemingway's" loading="lazy">
      </div>
      <div class="gallery-item animate" tabindex="0" role="button" aria-label="View bar photo">
        <img src="images/gallery-4.jpg" alt="The bar at Hemingway's" loading="lazy">
      </div>
      <div class="gallery-item animate" tabindex="0" role="button" aria-label="View night vibe photo">
        <img src="images/gallery-5.jpg" alt="Night at Hemingway's" loading="lazy">
      </div>
    </div>
  </div>
</section>

<div id="gallery-overlay" class="gallery-overlay" role="dialog" aria-modal="true" aria-label="Photo viewer" hidden>
  <button id="overlay-close" class="overlay-close" aria-label="Close photo">&#x2715;</button>
  <img id="overlay-img" src="" alt="" class="overlay-img">
</div>

<!-- ── 05 Events ── -->
<section id="events" class="events-section">
  <div class="events-inner">
    <div class="events-header">
      <h2 class="events-title animate">Upcoming nights</h2>
      <p class="events-sub animate">EDM &middot; Hip Hop &middot; Live Sets</p>
    </div>
    <ul class="events-list">
      <li class="event-row animate">
        <span class="event-date">09</span>
        <div class="event-divider" aria-hidden="true"></div>
        <div class="event-info">
          <span class="event-name">Friday Night Sessions</span>
          <span class="event-meta">May 2026 &middot; Doors 9PM &middot; Free entry</span>
        </div>
        <span class="event-tag">EDM</span>
      </li>
      <li class="event-row animate">
        <span class="event-date">16</span>
        <div class="event-divider" aria-hidden="true"></div>
        <div class="event-info">
          <span class="event-name">Late Night with Nadar</span>
          <span class="event-meta">May 2026 &middot; Doors 10PM &middot; Free entry</span>
        </div>
        <span class="event-tag">Hip Hop</span>
      </li>
      <li class="event-row animate">
        <span class="event-date">23</span>
        <div class="event-divider" aria-hidden="true"></div>
        <div class="event-info">
          <span class="event-name">Pop Culture Mix</span>
          <span class="event-meta">May 2026 &middot; Doors 9PM &middot; Free entry</span>
        </div>
        <span class="event-tag">Mixed</span>
      </li>
    </ul>
  </div>
</section>

<!-- ── 06 Reviews ── -->
<section id="reviews" class="reviews-section">
  <div class="reviews-inner">
    <div class="reviews-header">
      <h2 class="reviews-title animate">What people say</h2>
      <div class="reviews-score animate" aria-label="4.3 out of 5, 103 Google reviews">
        <span class="reviews-score-num">4.3</span>
        <span class="reviews-score-label">103 Google reviews</span>
      </div>
    </div>
    <div class="reviews-grid">
      <div class="review-card animate">
        <p class="review-stars" aria-hidden="true">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <blockquote class="review-text">"Definitely one of the best spots in Sarajevo. The food is always delicious, the atmosphere cozy, and the location perfect."</blockquote>
        <cite class="review-author">An&#273;elka Z.</cite>
      </div>
      <div class="review-card animate">
        <p class="review-stars" aria-hidden="true">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <blockquote class="review-text">"Nadar was truly a great host. Their DJ choices are all perfect. It is a solid pop culture combination and not a place to be missed!"</blockquote>
        <cite class="review-author">Leo &middot; Local Guide</cite>
      </div>
      <div class="review-card animate">
        <p class="review-stars" aria-hidden="true">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <blockquote class="review-text">"The atmosphere was warm and welcoming. The staff were incredibly friendly, making sure we had everything we needed."</blockquote>
        <cite class="review-author">Lejla C.</cite>
      </div>
      <a href="https://www.google.com/maps/place/Hemingway%27s+Bar+%26+Kitchen/@43.8549453,18.3966404,17z/" target="_blank" rel="noopener noreferrer" class="review-card review-card--link animate" aria-label="Read all 103 reviews on Google">
        <span class="review-link-num">103</span>
        <span class="review-link-label">reviews on Google &rarr;</span>
      </a>
    </div>
  </div>
</section>

<!-- ── 07 Contact ── -->
<section id="contact" class="contact-section">
  <div class="contact-inner">
    <div class="contact-info">
      <h2 class="contact-title animate">Find us</h2>
      <dl class="contact-list">
        <div class="contact-item animate">
          <dt class="contact-label">Address</dt>
          <dd class="contact-value">Zmaja od Bosne 13,<br>Sarajevo 71000</dd>
        </div>
        <div class="contact-item animate">
          <dt class="contact-label">Hours</dt>
          <dd class="contact-value">Open daily<br>until midnight</dd>
        </div>
        <div class="contact-item animate">
          <dt class="contact-label">Phone</dt>
          <dd class="contact-value">062 610 097</dd>
        </div>
      </dl>
      <a href="tel:062610097" class="contact-cta animate">Call to reserve &rarr;</a>
    </div>
    <div class="contact-map animate">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6!2d18.3966404!3d43.8549453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c90bdd32c359%3A0xb4db349bbf31cdd!2sHemingway%27s%20Bar%20%26%20Kitchen!5e0!3m2!1sen!2sba!4v1"
        width="100%" height="100%" style="border:0;"
        allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Hemingway's Bar &amp; Kitchen on Google Maps"
      ></iframe>
    </div>
  </div>
</section>

<!-- ── Footer ── -->
<footer class="footer">
  <span class="footer-logo">Hemingway's Bar &amp; Kitchen</span>
  <nav class="footer-nav" aria-label="Footer navigation">
    <a href="#menu">Menu</a>
    <a href="#events">Events</a>
    <a href="#contact">Contact</a>
    <a href="https://hemingways.cc" target="_blank" rel="noopener noreferrer">hemingways.cc</a>
  </nav>
</footer>
```

- [ ] **Step 2: Open `index.html` in browser and verify**

```bash
open index.html
```

Expected: unstyled but structured page, all sections visible as plain text, no JS errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: full HTML structure - all 7 sections"
```

---

## Task 4: Navigation CSS + JS

**Files:**
- Modify: `css/style.css` - append nav styles
- Modify: `js/main.js` - add nav scroll + mobile menu

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Navigation ── */
#nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px var(--inner-pad);
  transition: background 0.4s ease, padding 0.4s ease;
}
#nav.nav--solid {
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(12px);
  padding-top: 14px;
  padding-bottom: 14px;
}
.nav-logo {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
}
.nav-links { display: flex; gap: 2rem; }
.nav-links a {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w44);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--white); }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 1px;
  background: var(--white);
}
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.mobile-menu.is-open { opacity: 1; pointer-events: all; }
.mobile-close {
  position: absolute;
  top: 20px; right: var(--inner-pad);
  font-size: 1.2rem;
  color: var(--w44);
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}
.mobile-nav a {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 2.5rem;
  transition: color 0.2s;
}
.mobile-nav a:hover { color: var(--w66); }
```

- [ ] **Step 2: Replace `js/main.js` content**

```javascript
// Hemingway's Bar & Kitchen - main.js

/* ── Navigation scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--solid', window.scrollY > 80);
}, { passive: true });

/* ── Mobile nav ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  mobileMenu.removeAttribute('aria-hidden');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
```

- [ ] **Step 3: Open in browser and verify**

- Nav is transparent over hero
- Scroll down past hero → nav gets dark background + blur
- Desktop: nav links visible

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: navigation - sticky scroll behavior + mobile menu"
```

---

## Task 5: Hero Section CSS + Animations

**Files:**
- Modify: `css/style.css` - append hero styles
- Modify: `js/main.js` - append hero JS

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Hero ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 140px var(--inner-pad) 60px;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.2s ease;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10,10,10,0.5) 0%,
    rgba(10,10,10,0.2) 40%,
    rgba(10,10,10,0.8) 100%
  );
}
.hero-bg.loaded { opacity: 1; }
.hero-content { position: relative; z-index: 1; }
.hero-eyebrow {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--w44);
  margin-bottom: 1.2rem;
}
.hero-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(4rem, 10vw, 9rem);
  line-height: 0.9;
  margin-bottom: 1.5rem;
}
.hero-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero-word.is-visible { opacity: 1; transform: none; }
.hero-word--muted { color: var(--w22); }
.hero-rule {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, var(--w44), transparent);
  margin-bottom: 1rem;
}
.hero-tagline {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w44);
}
.hero-footer {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.hero-cta {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: 1px solid var(--w22);
  padding: 12px 22px;
  transition: border-color 0.2s, background 0.2s;
}
.hero-cta:hover { border-color: var(--white); background: rgba(255,255,255,0.05); }
.hero-scroll {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w22);
}
```

- [ ] **Step 2: Append to `js/main.js`**

```javascript

/* ── Hero stagger + background ── */
document.querySelectorAll('.hero-word').forEach((word, i) => {
  setTimeout(() => word.classList.add('is-visible'), 300 + i * 160);
});
const heroBg = document.querySelector('.hero-bg');
if (heroBg) heroBg.classList.add('loaded');
```

- [ ] **Step 3: Open in browser and verify**

- Hero fills full viewport height
- Background photo fades in over ~1 second
- "Bar & Kitchen" words stagger in word by word
- "&" is dimmer than main words
- "Reserve a table" button visible at bottom-left

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: hero section - full-screen, stagger animation, background fade"
```

---

## Task 6: Story Section CSS

**Files:**
- Modify: `css/style.css` - append story styles

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Story ── */
.story {
  background: var(--bg-alt);
  padding: var(--section-pad) var(--inner-pad);
}
.story-inner {
  max-width: var(--inner-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}
.story-copy { position: relative; }
.story-ghost {
  position: absolute;
  top: -2rem; left: -0.5rem;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 8rem;
  color: var(--w06);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}
.story-heading {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  position: relative;
}
.story-text {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--w66);
  margin-bottom: 2rem;
}
.story-stat {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.story-stat-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 2.5rem;
  line-height: 1;
}
.story-stat-label {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w44);
}
.story-photo { aspect-ratio: 3 / 4; overflow: hidden; }
.story-photo img { transition: transform 0.6s ease; }
.story-photo:hover img { transform: scale(1.03); }
```

- [ ] **Step 2: Open in browser and verify**

Story section: two-column layout, ghost "02" behind heading, portrait photo right, 4.3★ stat above a divider line.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: story section styles"
```

---

## Task 7: Menu Section CSS + JS

**Files:**
- Modify: `css/style.css` - append menu styles
- Modify: `js/main.js` - append menu tab and expand JS

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Menu ── */
.menu-section {
  background: var(--bg-deep);
  padding: var(--section-pad) var(--inner-pad);
}
.menu-inner { max-width: var(--inner-max); margin: 0 auto; }
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}
.menu-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3rem);
}
.menu-tabs { display: flex; gap: 1.5rem; }
.menu-tab {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w44);
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
.menu-tab:hover { color: var(--w66); }
.menu-tab--active { color: var(--white); border-bottom-color: var(--white); }
.menu-panel { display: none; }
.menu-panel--active { display: block; }
.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--w06);
}
.menu-item {
  background: var(--bg-deep);
  padding: 1.1rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  transition: background 0.2s;
}
.menu-item:hover { background: rgba(255,255,255,0.03); }
.menu-item--hidden { display: none; }
.menu-item-info { display: flex; flex-direction: column; gap: 0.25rem; }
.menu-item-name { font-family: var(--font-serif); font-style: italic; font-size: 1rem; }
.menu-item-desc {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: var(--w44);
}
.menu-item-price {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--w66);
  white-space: nowrap;
}
.menu-expand {
  width: 100%;
  margin-top: 1px;
  background: var(--w06);
  padding: 1rem;
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w44);
  text-align: center;
  transition: background 0.2s, color 0.2s;
}
.menu-expand:hover { background: var(--w11); color: var(--white); }
```

- [ ] **Step 2: Append to `js/main.js`**

```javascript

/* ── Menu tabs ── */
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.menu-tab').forEach(t => {
      t.classList.remove('menu-tab--active');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.menu-panel').forEach(p => {
      p.classList.remove('menu-panel--active');
      p.hidden = true;
    });
    tab.classList.add('menu-tab--active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(`panel-${target}`);
    panel.classList.add('menu-panel--active');
    panel.hidden = false;
  });
});

/* ── Menu expand ── */
const menuExpandBtn = document.getElementById('menu-expand');
if (menuExpandBtn) {
  menuExpandBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-item--hidden').forEach(item => {
      item.classList.remove('menu-item--hidden');
    });
    menuExpandBtn.style.display = 'none';
  });
}
```

- [ ] **Step 3: Open in browser and verify**

- "Cocktails" tab active by default
- Click "Food" → food items shown, cocktails hidden
- Click "Wine" → wine items shown
- Click "View full menu" → 2 hidden cocktails appear, button disappears

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: menu section - tab switching + expand interaction"
```

---

## Task 8: Gallery Section CSS + JS

**Files:**
- Modify: `css/style.css` - append gallery styles
- Modify: `js/main.js` - append gallery overlay JS

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Gallery ── */
.gallery-section {
  background: var(--bg);
  padding: var(--section-pad) var(--inner-pad);
}
.gallery-inner { max-width: var(--inner-max); margin: 0 auto; }
.gallery-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 2rem;
}
.gallery-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 280px 280px;
  gap: 4px;
}
.gallery-item { overflow: hidden; cursor: pointer; position: relative; }
.gallery-item--tall { grid-row: span 2; }
.gallery-item img {
  transition: transform 0.5s ease, filter 0.3s ease;
  filter: brightness(0.85);
}
@media (hover: hover) {
  .gallery-item:hover img { transform: scale(1.05); filter: brightness(1); }
}
.gallery-item:focus-visible { outline: 2px solid var(--white); outline-offset: 2px; }
.gallery-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0,0,0,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.gallery-overlay[hidden] { display: flex; }
.gallery-overlay.is-open { opacity: 1; pointer-events: all; }
.overlay-close {
  position: absolute;
  top: 20px; right: 24px;
  font-size: 1.4rem;
  color: var(--w66);
  padding: 8px;
  transition: color 0.2s;
}
.overlay-close:hover { color: var(--white); }
.overlay-img {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
}
```

- [ ] **Step 2: Append to `js/main.js`**

```javascript

/* ── Gallery overlay ── */
const overlay = document.getElementById('gallery-overlay');
const overlayImg = document.getElementById('overlay-img');

function openOverlay(src, alt) {
  overlayImg.src = src;
  overlayImg.alt = alt;
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add('is-open'));
  document.body.style.overflow = 'hidden';
}
function closeOverlay() {
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
  setTimeout(() => { overlay.hidden = true; }, 300);
}

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    openOverlay(img.src, img.alt);
  });
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const img = item.querySelector('img');
      openOverlay(img.src, img.alt);
    }
  });
});

document.getElementById('overlay-close').addEventListener('click', closeOverlay);
overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeOverlay();
});
```

- [ ] **Step 3: Open in browser and verify**

- Masonry grid: 1 tall image left, 4 smaller right
- Hover image → brightens + scales (desktop)
- Click image → fullscreen overlay fades in
- Click background or X → overlay fades out
- Escape key → overlay closes

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: gallery section - masonry grid + fullscreen overlay"
```

---

## Task 9: Events + Reviews CSS

**Files:**
- Modify: `css/style.css` - append events and reviews styles

- [ ] **Step 1: Append events styles to `css/style.css`**

```css
/* ── Events ── */
.events-section {
  background: var(--bg-alt);
  padding: var(--section-pad) var(--inner-pad);
}
.events-inner { max-width: var(--inner-max); margin: 0 auto; }
.events-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}
.events-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3rem);
}
.events-sub {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w44);
}
.events-list { display: flex; flex-direction: column; gap: 1px; background: var(--w06); }
.event-row {
  background: var(--bg-alt);
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: background 0.2s;
}
.event-row:hover { background: rgba(255,255,255,0.03); }
.event-date {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 2rem;
  color: var(--w44);
  min-width: 2.5rem;
  line-height: 1;
}
.event-divider { width: 1px; height: 40px; background: var(--border); flex-shrink: 0; }
.event-info { flex: 1; display: flex; flex-direction: column; gap: 0.3rem; }
.event-name { font-family: var(--font-serif); font-style: italic; font-size: 1.1rem; }
.event-meta {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--w44);
}
.event-tag {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid var(--w22);
  padding: 4px 8px;
  color: var(--w66);
}
```

- [ ] **Step 2: Append reviews styles to `css/style.css`**

```css
/* ── Reviews ── */
.reviews-section {
  background: var(--bg-deep);
  padding: var(--section-pad) var(--inner-pad);
}
.reviews-inner { max-width: var(--inner-max); margin: 0 auto; }
.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}
.reviews-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3rem);
}
.reviews-score { text-align: right; }
.reviews-score-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 3rem;
  line-height: 1;
  display: block;
}
.reviews-score-label {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--w44);
  display: block;
  margin-top: 0.2rem;
}
.reviews-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: var(--w06);
}
.review-card {
  background: var(--bg-deep);
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.review-card--link {
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(255,255,255,0.02);
  transition: background 0.2s;
  gap: 0.4rem;
}
.review-card--link:hover { background: rgba(255,255,255,0.05); }
.review-stars { font-size: 0.7rem; color: var(--w44); letter-spacing: 0.2em; }
.review-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--w66);
}
.review-author {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--w44);
  font-style: normal;
}
.review-link-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 2rem;
  color: var(--w44);
  display: block;
}
.review-link-label {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--w44);
  display: block;
}
```

- [ ] **Step 3: Open in browser and verify**

Events: 3 rows with date · divider · name + meta · genre tag, subtle row hover.
Reviews: 2x2 grid, 3 quote cards + "103 reviews on Google" link card.

- [ ] **Step 4: Commit**

```bash
git add css/style.css
git commit -m "feat: events and reviews section styles"
```

---

## Task 10: Contact + Footer CSS

**Files:**
- Modify: `css/style.css` - append contact and footer styles

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Contact ── */
.contact-section {
  background: var(--bg);
  padding: var(--section-pad) var(--inner-pad);
}
.contact-inner {
  max-width: var(--inner-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  min-height: 440px;
}
.contact-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 2rem;
}
.contact-list { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem; }
.contact-item { display: flex; flex-direction: column; gap: 0.3rem; }
.contact-label {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--w44);
}
.contact-value {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--w66);
  line-height: 1.5;
}
.contact-cta {
  display: inline-block;
  background: var(--white);
  color: var(--bg);
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 14px 24px;
  transition: opacity 0.2s;
}
.contact-cta:hover { opacity: 0.9; }
.contact-map { overflow: hidden; }
.contact-map iframe {
  width: 100%;
  height: 100%;
  min-height: 320px;
  border: 0;
  filter: grayscale(100%) invert(90%) contrast(0.8);
  opacity: 0.6;
  transition: opacity 0.3s;
}
.contact-map:hover iframe { opacity: 0.85; }

/* ── Footer ── */
.footer {
  background: var(--bg-deep);
  border-top: 1px solid var(--border);
  padding: 1.5rem var(--inner-pad);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-logo {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.9rem;
  color: var(--w44);
}
.footer-nav { display: flex; gap: 1.5rem; }
.footer-nav a {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--w22);
  transition: color 0.2s;
}
.footer-nav a:hover { color: var(--w66); }
```

- [ ] **Step 2: Open in browser and verify**

Contact: info left (address/hours/phone + white CTA button), inverted grayscale map right.
Footer: logo left, nav links right, top border.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: contact and footer styles"
```

---

## Task 11: Scroll Animations

**Files:**
- Modify: `css/style.css` - append animation CSS
- Modify: `js/main.js` - append IntersectionObserver

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Scroll animations ── */
.animate {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate.is-visible {
  opacity: 1;
  transform: none;
}
```

- [ ] **Step 2: Append to `js/main.js`**

```javascript

/* ── Scroll animations ── */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => animObserver.observe(el));
```

- [ ] **Step 3: Open in browser and verify**

Scroll slowly through the full page. Each section's content should fade up as it enters the viewport. Elements don't re-animate on scroll back up (unobserve fires after first entry).

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: scroll animations - IntersectionObserver fade-up"
```

---

## Task 12: Mobile Responsiveness

**Files:**
- Modify: `css/style.css` - append media queries

- [ ] **Step 1: Append to `css/style.css`**

```css
/* ── Mobile (max 640px) ── */
@media (max-width: 640px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }

  .hero { padding-top: 100px; padding-bottom: 40px; }
  .hero-footer { flex-direction: column; align-items: flex-start; gap: 1rem; }

  .story-inner { grid-template-columns: 1fr; gap: 2rem; }
  .story-photo { order: -1; aspect-ratio: 4 / 3; }
  .story-ghost { font-size: 5rem; }

  .menu-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .menu-grid { grid-template-columns: 1fr; }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  .gallery-item--tall { grid-row: span 1; }
  .gallery-item { aspect-ratio: 1 / 1; }

  .events-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  .event-row { padding: 1rem; gap: 1rem; }

  .reviews-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .reviews-score { text-align: left; }
  .reviews-grid { grid-template-columns: 1fr; }

  .contact-inner { grid-template-columns: 1fr; gap: 2rem; min-height: unset; }
  .contact-map { min-height: 260px; }
  .contact-map iframe { min-height: 260px; }

  .footer { flex-direction: column; gap: 1rem; text-align: center; }
}

/* ── Tablet (641px–1024px) ── */
@media (min-width: 641px) and (max-width: 1024px) {
  .story-inner { gap: 2.5rem; }
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 220px 220px;
  }
  .contact-inner { gap: 2.5rem; }
}
```

- [ ] **Step 2: Open in browser at 375px width and verify**

In DevTools set width to 375px:
- Hamburger visible, nav links hidden
- Hero text fills width
- Story stacks (photo on top)
- Menu shows single-column items
- Gallery shows 2-column square grid
- Reviews stack to single column
- Contact stacks: info above map
- Footer stacks: logo above links

- [ ] **Step 3: Open browser at 768px and verify**

- Desktop nav links visible (no hamburger)
- Gallery is 2-column
- Story and Contact remain two-column

- [ ] **Step 4: Commit**

```bash
git add css/style.css
git commit -m "feat: mobile and tablet responsive styles"
```

---

## Final Verification

- [ ] Full scroll in Chrome, Firefox, Safari - all sections render and animate correctly
- [ ] No horizontal scroll at any viewport width (add `overflow-x: hidden` to `body` if needed)
- [ ] All nav anchor links scroll to correct section
- [ ] "Reserve a table" and "Call to reserve" CTA links are `tel:062610097`
- [ ] Menu tabs switch correctly; "View full menu" expand works
- [ ] Gallery overlay opens, closes on click, X button, and Escape
- [ ] Google Map loads in Contact section
- [ ] "103 reviews on Google" link opens Google Maps in new tab

```bash
git add .
git commit -m "feat: Hemingway's website - complete"
```
