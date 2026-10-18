(function () {
  'use strict';

  /* ── Mobile navigation ──────────────────────────────────────────────── */
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');

  if (btn && nav) {
    function openNav() {
      nav.classList.add('nav-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close navigation menu');
    }
    function closeNav() {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open navigation menu');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.contains('nav-open') ? closeNav() : openNav();
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target) && e.target !== btn) {
        closeNav();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
        closeNav();
        btn.focus();
      }
    });
  }

  /* ── Scroll reveal ──────────────────────────────────────────────────── */
  var revealEls = document.querySelectorAll('[data-reveal]');

  if (revealEls.length && 'IntersectionObserver' in window) {
    // Respect reduced-motion preference
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = parseInt(entry.target.dataset.delay || '0', 10);
            setTimeout(function () {
              entry.target.classList.add('is-visible');
            }, delay * 80);
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -55px 0px' });

      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  /* ── Active nav link on scroll ─────────────────────────────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.setAttribute('aria-current', 'true');
            }
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(function (s) { activeObserver.observe(s); });
  }

  /* ── Smooth anchor offset for fixed header ──────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = 76; // header height
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── Header shadow on scroll ────────────────────────────────────────── */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 20) {
        header.style.boxShadow = '0 2px 16px rgba(0,0,0,.07)';
        header.style.background = 'rgba(247,247,244,.96)';
        header.style.backdropFilter = 'blur(8px)';
      } else {
        header.style.boxShadow = '';
        header.style.background = '';
        header.style.backdropFilter = '';
      }
      lastScroll = y;
    }, { passive: true });
  }

})();
