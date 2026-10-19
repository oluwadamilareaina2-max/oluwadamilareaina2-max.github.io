(function () {
  'use strict';

  /* ── Mobile nav ──────────────────────────────────────────────────────── */
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (btn && nav) {
    function openNav()  { nav.classList.add('nav-open'); btn.setAttribute('aria-expanded','true');  btn.setAttribute('aria-label','Close menu'); }
    function closeNav() { nav.classList.remove('nav-open'); btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-label','Open menu'); }
    btn.addEventListener('click', function(e){ e.stopPropagation(); nav.classList.contains('nav-open') ? closeNav() : openNav(); });
    nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeNav); });
    document.addEventListener('click', function(e){ if (nav.classList.contains('nav-open') && !nav.contains(e.target) && e.target !== btn) closeNav(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && nav.classList.contains('nav-open')){ closeNav(); btn.focus(); } });
  }

  /* ── Scroll reveal ───────────────────────────────────────────────────── */
  var els = document.querySelectorAll('[data-reveal]');
  if (els.length && 'IntersectionObserver' in window) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting){
            var d = parseInt(e.target.dataset.delay || '0', 10);
            setTimeout(function(){ e.target.classList.add('is-visible'); }, d * 80);
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -55px 0px' });
      els.forEach(function(el){ obs.observe(el); });
    }
  }

  /* ── Header scroll effect ────────────────────────────────────────────── */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function(){
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ── Smooth anchor offset ────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    });
  });

  /* ── Active nav link ─────────────────────────────────────────────────── */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function(a){
    var href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === '/') || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

})();
