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
