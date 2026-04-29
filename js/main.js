// Hemingway's Bar & Kitchen — main.js

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
  mobileClose.focus();
}
function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
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
if (heroBg) heroBg.classList.add('loaded');

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
