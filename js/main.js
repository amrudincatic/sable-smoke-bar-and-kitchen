// Sable & Smoke - main.js

/* ── Navigation scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--solid', window.scrollY > 80);
}, { passive: true });

/* ── Body scroll lock (ref-counted) ── */
let scrollLockCount = 0;
function lockScroll() {
  scrollLockCount++;
  document.body.style.overflow = 'hidden';
}
function unlockScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) document.body.style.overflow = '';
}

/* ── Mobile nav ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  mobileMenu.removeAttribute('aria-hidden');
  hamburger.setAttribute('aria-expanded', 'true');
  lockScroll();
  mobileClose.focus();
}
function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  unlockScroll();
  hamburger.focus();
}

hamburger.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMobileMenu();
});

/* ── Hero stagger + background ── */
document.querySelectorAll('.hero-word').forEach((word, i) => {
  setTimeout(() => word.classList.add('is-visible'), 300 + i * 160);
});
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  const img = new Image();
  img.onload = () => heroBg.classList.add('loaded');
  img.src = 'images/hero-bg.jpg';
}

/* ── Menu expand button ── */
const menuExpandBtn = document.getElementById('menu-expand');

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
    menuExpandBtn.style.display = target === 'cocktails' ? '' : 'none';
  });
});

document.querySelector('[role="tablist"]').addEventListener('keydown', e => {
  const tabs = Array.from(document.querySelectorAll('.menu-tab'));
  const idx = tabs.indexOf(document.activeElement);
  if (idx === -1) return;
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    tabs[(idx + 1) % tabs.length].focus();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    tabs[(idx - 1 + tabs.length) % tabs.length].focus();
  }
});

/* ── Menu expand ── */
if (menuExpandBtn) {
  menuExpandBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-item--hidden').forEach(item => {
      item.classList.remove('menu-item--hidden');
    });
    menuExpandBtn.style.display = 'none';
  });
}

/* ── Gallery overlay ── */
const overlay = document.getElementById('gallery-overlay');
const overlayImg = document.getElementById('overlay-img');
const overlayClose = document.getElementById('overlay-close');
let overlayPreviousFocus = null;

function getFocusable(el) {
  return Array.from(el.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])'));
}
function trapFocus(e) {
  const focusable = getFocusable(overlay);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

function openOverlay(src, alt) {
  overlayPreviousFocus = document.activeElement;
  overlayImg.src = src;
  overlayImg.alt = alt;
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add('is-open'));
  lockScroll();
  overlay.addEventListener('keydown', trapFocus);
  overlayClose.focus();
}
function closeOverlay() {
  overlay.classList.remove('is-open');
  overlay.removeEventListener('keydown', trapFocus);
  unlockScroll();
  setTimeout(() => {
    overlay.hidden = true;
    if (overlayPreviousFocus) overlayPreviousFocus.focus();
  }, 300);
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

overlayClose.addEventListener('click', closeOverlay);
overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeOverlay();
});

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
