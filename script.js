(function () {
  'use strict';

  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');

  if (!btn || !nav) return;

  function openNav() {
    nav.classList.add('nav-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close navigation menu');
    btn.textContent = '✕';
  }

  function closeNav() {
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open navigation menu');
    btn.textContent = '☰';
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (nav.classList.contains('nav-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close when a nav link is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeNav();
    });
  });

  // Close when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('nav-open') && !nav.contains(e.target) && e.target !== btn) {
      closeNav();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      closeNav();
      btn.focus();
    }
  });
})();
