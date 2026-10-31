/* JAC site. Everything here is an enhancement; without JS each page shows its final, static state. */
(function () {
  'use strict';

  var motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  /* ---------- reveal on scroll ---------- */
  var revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- hero carousel: arrows, swipe, tap a side phone ---------- */
  $$('[data-carousel]').forEach(function (root) {
    var phones = $$('.device', $('.carousel__phones', root));
    var nameEl = $('[data-caption-name]', root);
    var linkEl = $('[data-caption-link]', root);
    var dots = $$('.carousel__dots span', root);
    var picks = $$('[data-pick]', root);
    var stage = $('.carousel__stage', root);
    var n = phones.length;
    var current = phones.findIndex(function (p) { return p.getAttribute('data-pos') === 'center'; });

    function render() {
      phones.forEach(function (p, i) {
        var rel = (i - current + n) % n;
        p.setAttribute('data-pos', rel === 0 ? 'center' : rel === 1 ? 'right' : rel === n - 1 ? 'left' : 'back');
        p.setAttribute('aria-hidden', rel === 0 ? 'false' : 'true');
      });
      var c = phones[current];
      if (nameEl) nameEl.textContent = c.getAttribute('data-name');
      if (linkEl) linkEl.setAttribute('href', c.getAttribute('data-link'));
      picks.forEach(function (b) { b.setAttribute('aria-pressed', +b.getAttribute('data-pick') === current ? 'true' : 'false'); });
      dots.forEach(function (d, i) { d.classList.toggle('is-on', i === current); });
    }
    function go(dir) { current = (current + dir + n) % n; render(); }

    $$('[data-dir]', root).forEach(function (b) {
      b.addEventListener('click', function () { go(+b.getAttribute('data-dir')); });
    });
    picks.forEach(function (b) {
      b.addEventListener('click', function () { current = +b.getAttribute('data-pick'); render(); });
    });
    phones.forEach(function (p, i) {
      p.addEventListener('click', function () {
        if (i !== current) { current = i; render(); }
      });
    });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
    });

    // horizontal swipe; vertical movement keeps scrolling the page
    var sx = null, sy = null;
    stage.addEventListener('pointerdown', function (e) { sx = e.clientX; sy = e.clientY; });
    stage.addEventListener('pointerup', function (e) {
      if (sx === null) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      sx = sy = null;
    });
    stage.addEventListener('pointercancel', function () { sx = sy = null; });
    render();

    // showcase: the phones turn on their own every few seconds, only while the hero is on screen and the visitor is not
    // hovering or focusing it; after a swipe or a tap it waits a little longer, then carries on from the phone the visitor chose
    var timer = null, visible = false, held = false;
    function tick(wait) { stop(); if (visible && !held && !document.hidden) timer = setTimeout(function () { go(1); tick(); }, wait || 3800); }
    function stop() { if (timer) { clearTimeout(timer); timer = null; } }
    if (motionOK && n > 3) {
      var later = function () { tick(7000); };
      stage.addEventListener('pointerdown', stop);
      stage.addEventListener('pointerup', later);
      stage.addEventListener('pointercancel', later);
      root.addEventListener('keydown', later);
      // hover pauses with a real mouse only: a phone's tap would fire mouseenter and never leave
      root.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { held = true; stop(); } });
      root.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { held = false; tick(); } });
      root.addEventListener('focusin', function () { held = true; stop(); });
      root.addEventListener('focusout', function () { held = false; tick(7000); });
      document.addEventListener('visibilitychange', tick);
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) { visible = es[0].isIntersecting; tick(); }, { threshold: 0.4 }).observe(stage);
      } else { visible = true; tick(); }
    }
  });

  /* ---------- varied enter/exit effects: .in while visible, .out once scrolled past the top ---------- */
  var fxEls = $$('[data-fx]');
  fxEls.forEach(function (el) { $$('[data-fx-child]', el).forEach(function (c, i) { c.style.setProperty('--i', i); }); });
  if ('IntersectionObserver' in window && motionOK) {
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var el = e.target;
        if (e.isIntersecting) { el.classList.add('in'); el.classList.remove('out'); }
        else if (e.boundingClientRect.top < 0) { el.classList.add('out'); }
        else { el.classList.remove('in', 'out'); } // below the viewport again: replay next time
      });
    }, { threshold: 0.18 });
    fxEls.forEach(function (el) { fio.observe(el); });
  } else {
    fxEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Rutieră: one pinned phone, the screen changes with the step in the middle of the viewport ---------- */
  $$('[data-pin]').forEach(function (root) {
    var steps = $$('.pin__step', root);
    var screens = $$('.pin__screens img', root);
    var dots = $$('.pin__dots span', root);
    var factEl = $('[data-pin-fact]', root);
    var phone = $('.pin__phone', root);
    var tilt = [-7, 6, -5, 7, -6, 5, 0];
    var current = -1;
    function show(i) {
      if (i === current) return;
      current = i;
      screens.forEach(function (img, j) {
        img.classList.toggle('is-active', j === i);
        img.classList.toggle('is-before', j < i);
        if (Math.abs(j - i) <= 1) img.loading = 'eager'; // warm the neighbours
      });
      steps.forEach(function (s, j) { s.classList.toggle('is-active', j === i); });
      dots.forEach(function (d, j) { d.classList.toggle('is-on', j === i); });
      if (phone && motionOK) phone.style.setProperty('--ry', tilt[i % tilt.length] + 'deg');
      if (factEl) {
        factEl.textContent = steps[i].getAttribute('data-fact');
        factEl.classList.remove('bump'); void factEl.offsetWidth; factEl.classList.add('bump');
      }
    }
    if ('IntersectionObserver' in window) {
      var pio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) show(steps.indexOf(e.target)); });
      }, { rootMargin: '-50% 0px -50% 0px' });
      steps.forEach(function (s) { pio.observe(s); });
    }
    show(0);
  });

  /* ---------- Ghid: stacked sheets, the one underneath shrinks and darkens as the next covers it ---------- */
  $$('[data-sheets]').forEach(function (root) {
    var sheets = $$('.sheet', root);
    var inners = sheets.map(function (s) { return $('.sheet__inner', s); });
    var active = false, ticking = false;
    function update() {
      ticking = false;
      if (!active) return;
      var tops = sheets.map(function (s) { return s.getBoundingClientRect().top; }); // read everything first
      var h = sheets[0].offsetHeight;
      inners.forEach(function (inner, i) {                                         // then write
        var p = i < sheets.length - 1 ? clamp((h - (tops[i + 1] - tops[i])) / h, 0, 1) : 0;
        inner.style.setProperty('--p', p.toFixed(3));
      });
    }
    if (motionOK && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) { active = entries[0].isIntersecting; if (active) update(); }).observe(root);
      window.addEventListener('scroll', function () { if (active && !ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    }
  });

  /* ---------- Shiftr: tap a bento tile to see the real screen in a phone ---------- */
  var viewer = $('.viewer');
  if (viewer && typeof viewer.showModal === 'function') {
    var vImg = $('img', viewer), vCap = $('.viewer__cap', viewer), opener = null;
    function openShot(btn) {
      var shot = btn.getAttribute('data-shot');
      vImg.src = '../assets/img/screens/' + shot + '-800.webp';
      vImg.srcset = '../assets/img/screens/' + shot + '-800.webp 800w, ../assets/img/screens/' + shot + '-1175.webp 1175w';
      vImg.sizes = '(min-width: 1024px) 360px, 80vw';
      vImg.alt = btn.getAttribute('data-cap');
      vCap.textContent = btn.getAttribute('data-cap');
      opener = btn;
      viewer.showModal();
      $('.viewer__close', viewer).focus();
    }
    $$('[data-shot]').forEach(function (btn) { btn.addEventListener('click', function () { openShot(btn); }); });
    $('.viewer__close', viewer).addEventListener('click', function () { viewer.close(); });
    viewer.addEventListener('click', function (e) { if (e.target === viewer) viewer.close(); });
    viewer.addEventListener('close', function () { if (opener) opener.focus({ preventScroll: true }); });
  } else {
    $$('.bs__ico').forEach(function (b) { b.hidden = true; });
  }

  /* ---------- 3D tilt of the hero phones: pointer on desktop, scroll on phones ---------- */
  var tilt = $('[data-tilt]');
  if (tilt && motionOK) {
    var hero = tilt.closest('section');
    if (finePointer) {
      hero.addEventListener('pointermove', function (e) {
        var r = hero.getBoundingClientRect();
        tilt.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 14).toFixed(2) + 'deg');
        tilt.style.setProperty('--rx', (4 - ((e.clientY - r.top) / r.height - 0.5) * 8).toFixed(2) + 'deg');
      });
      hero.addEventListener('pointerleave', function () { tilt.style.setProperty('--ry', '0deg'); tilt.style.setProperty('--rx', '4deg'); });
    } else {
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var p = clamp(window.scrollY / 700, 0, 1);
          tilt.style.setProperty('--rx', (4 + p * 20).toFixed(2) + 'deg');
          ticking = false;
        });
      }, { passive: true });
    }
  }


  /* ---------- phone menu: close after a choice, on Escape, or on a tap outside ---------- */
  $$('.mnav').forEach(function (menu) {
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { menu.open = false; }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.open) { menu.open = false; $('summary', menu).focus(); } });
    document.addEventListener('click', function (e) { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  });

  /* ---------- numbers count up once visible ---------- */
  var counters = $$('[data-count]');
  var fmt = function (v, sep) { return sep ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.') : String(v); };
  if (counters.length && motionOK && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        var el = e.target, to = +el.getAttribute('data-count'), sep = el.hasAttribute('data-sep');
        var pre = el.getAttribute('data-prefix') || '', suf = el.getAttribute('data-suffix') || '';
        var t0 = performance.now(), dur = 1300;
        (function frame(now) {
          var p = Math.min(1, (now - t0) / dur), k = 1 - Math.pow(1 - p, 4);
          el.textContent = pre + fmt(Math.round(to * k), sep) + suf;
          if (p < 1) requestAnimationFrame(frame);
        })(t0);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ---------- PV compare: drag the line; above = completed, below = blank ---------- */
  $$('[data-compare]').forEach(function (cmp) {
    var screen = $('.compare__screen', cmp);
    var range = $('.compare__range', cmp);
    var grab = $$('.compare__knob, .compare__line', cmp);
    var demoDone = false, raf = null, dragging = false, tapStart = null;
    function setPos(p) {
      p = clamp(p, 0, 100);
      cmp.style.setProperty('--pos', p + '%');
      range.value = Math.round(p);
      range.setAttribute('aria-valuetext', Math.round(p) + '% completat afișat sus');
    }
    function posFrom(e) { var r = screen.getBoundingClientRect(); return (e.clientY - r.top) / r.height * 100; }
    function stopDemo() { if (raf) cancelAnimationFrame(raf); raf = null; demoDone = true; }
    function animateTo(target, dur, done) {
      var from = parseFloat(cmp.style.getPropertyValue('--pos')) || 50, t0 = performance.now();
      (function frame(now) {
        var p = Math.min(1, (now - t0) / dur), k = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        setPos(from + (target - from) * k);
        if (p < 1) raf = requestAnimationFrame(frame); else if (done) done();
      })(t0);
    }
    grab.forEach(function (g) {
      g.addEventListener('pointerdown', function (e) {
        stopDemo(); dragging = true; cmp.classList.add('is-dragging');
        g.setPointerCapture(e.pointerId); setPos(posFrom(e)); e.preventDefault();
      });
      g.addEventListener('pointermove', function (e) { if (dragging) setPos(posFrom(e)); });
      ['pointerup', 'pointercancel'].forEach(function (t) {
        g.addEventListener(t, function () { dragging = false; cmp.classList.remove('is-dragging'); });
      });
    });
    screen.addEventListener('pointerdown', function (e) { if (!dragging) tapStart = { x: e.clientX, y: e.clientY }; });
    screen.addEventListener('pointerup', function (e) {
      if (!tapStart || dragging) return;
      if (Math.abs(e.clientX - tapStart.x) < 8 && Math.abs(e.clientY - tapStart.y) < 8) {
        stopDemo();
        if (motionOK) animateTo(posFrom(e), 380); else setPos(posFrom(e));
      }
      tapStart = null;
    });
    screen.addEventListener('pointercancel', function () { tapStart = null; });
    range.addEventListener('input', function () { stopDemo(); setPos(+range.value); });
    range.addEventListener('focus', function () { cmp.classList.add('is-focus'); });
    range.addEventListener('blur', function () { cmp.classList.remove('is-focus'); });
    if (motionOK && 'IntersectionObserver' in window) {
      var dio = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting || demoDone) return;
        dio.disconnect();
        animateTo(18, 700, function () {
          if (demoDone) return;
          animateTo(82, 1100, function () { if (!demoDone) animateTo(50, 700); });
        });
      }, { threshold: 0.6 });
      dio.observe(screen);
    }
    setPos(50);
  });

  /* ---------- Plan billing switch (Individual + Echipaj): data-billing + live announcement ---------- */
  $$('.plan-card').forEach(function (card) {
    var radios = $$('input[type="radio"]', card);
    if (!radios.length) return;
    var live = $('[data-billing-live]', card);
    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        card.setAttribute('data-billing', r.value);
        var msg = card.getAttribute('data-msg-' + r.value);
        if (live && msg) live.textContent = msg;
      });
    });
  });

  /* ---------- Legi speciale: law marquee (clone for a seamless loop) ---------- */
  $$('[data-marquee]').forEach(function (root) {
    var track = $('.marquee__track', root);
    var group = $('.marquee__group', track);
    if (!track || !group) return;
    if (track.children.length === 1) {
      var clone = group.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    }
    root.classList.add('is-ready');
  });


  /* ---------- Legi speciale: horizontal deck (snap + progress + arrows) ---------- */
  $$('[data-deck]').forEach(function (root) {
    var track = $('.deck__track', root);
    var bar = $('.deck__progress', root);
    var cur = $('[data-deck-current]', root);
    var slides = $$('.deck__slide', root);
    if (!track || !slides.length) return;
    function stepWidth() { var s = slides[0]; return s ? s.getBoundingClientRect().width + 14 : 300; }
    function by(dir) { track.scrollBy({ left: dir * stepWidth(), behavior: 'smooth' }); }
    $$('[data-deck-prev]', root).forEach(function (b) { b.addEventListener('click', function () { by(-1); }); });
    $$('[data-deck-next]', root).forEach(function (b) { b.addEventListener('click', function () { by(1); }); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { by(1); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { by(-1); e.preventDefault(); }
    });
    var ticking = false;
    function update() {
      ticking = false;
      var max = track.scrollWidth - track.clientWidth;
      var p = max > 0 ? track.scrollLeft / max : 0;
      if (bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
      var idx = Math.min(slides.length - 1, Math.max(0, Math.round(track.scrollLeft / Math.max(1, stepWidth()))));
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
      if (cur) cur.textContent = String(idx + 1);
    }
    track.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  });

  /* ---------- Shared: run fn(i) when step i crosses the middle of the viewport ---------- */
  function onMiddle(steps, fn) {
    if (!('IntersectionObserver' in window)) { fn(0); return; }
    var mio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) fn(steps.indexOf(e.target)); });
    }, { rootMargin: '-50% 0px -50% 0px' });
    steps.forEach(function (s) { mio.observe(s); });
    fn(0);
  }
  /* Scroll progress (0..1) of a tall track past the viewport; reads once per frame, only while visible */
  function onProgress(track, fn) {
    var active = false, ticking = false;
    function update() {
      ticking = false;
      var r = track.getBoundingClientRect();
      var span = r.height - window.innerHeight;
      fn(span > 0 ? clamp(-r.top / span, 0, 1) : 1);
    }
    new IntersectionObserver(function (entries) { active = entries[0].isIntersecting; if (active) update(); }).observe(track);
    window.addEventListener('scroll', function () { if (active && !ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- Rutieră: dashboard — speedometer needle, suspension countdown, rolling amount ---------- */
  $$('[data-hud]').forEach(function (root) {
    var stage = $('.hud__stage', root);
    var needle = $('.gauge__needle', root);
    var speedEl = $('[data-hud-speed]', root);
    var daysEl = $('[data-hud-days]', root);
    var daysLabel = $('[data-hud-days-label]', root);
    var screens = $$('.hud__screens img', root);
    var steps = $$('.hud__step', root);
    var current = -1;
    onMiddle(steps, function (i) {
      if (i === current || i < 0) return;
      current = i;
      var s = steps[i];
      var mode = s.getAttribute('data-mode');
      stage.setAttribute('data-mode', mode);
      steps.forEach(function (x, j) { x.classList.toggle('is-active', j === i); });
      var scr = +s.getAttribute('data-screen');
      screens.forEach(function (img, j) {
        img.classList.toggle('is-active', j === scr);
        img.classList.toggle('is-before', j < scr);
        if (Math.abs(j - scr) <= 1) img.loading = 'eager';
      });
      if (mode === 'gauge') {
        var v = +s.getAttribute('data-speed') || 0;
        needle.style.setProperty('--a', (-120 + v * 6) + 'deg'); // 0..40 km/h over limit across 240°
        stage.setAttribute('data-zone', v > 20 ? '2' : v > 10 ? '1' : '0');
        speedEl.textContent = '+' + v;
      }
      if (mode === 'timer') {
        var extra = s.getAttribute('data-days') === '45';
        stage.setAttribute('data-days', extra ? '45' : '15');
        daysEl.textContent = extra ? '+30' : '15';
        daysLabel.textContent = extra ? 'zile în plus la nepredare' : 'zile cu dovada înlocuitoare';
      }
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) { root.classList.toggle('is-live', entries[0].isIntersecting && motionOK); }).observe(root);
    }
  });

  /* ---------- Penală: a spotlight that walks down the real card ---------- */
  $$('[data-lens]').forEach(function (root) {
    var screen = $('.lens__screen', root);
    var imgs = $$('.lens__screen img', root);
    var tag = $('[data-lens-tag]', root);
    var steps = $$('.lens__step', root);
    var current = -1;
    onMiddle(steps, function (i) {
      if (i === current || i < 0) return;
      current = i;
      var s = steps[i];
      var img = +s.getAttribute('data-img');
      imgs.forEach(function (el, j) { el.classList.toggle('is-active', j === img); if (j === img) el.loading = 'eager'; });
      screen.style.setProperty('--t', s.getAttribute('data-top'));
      screen.style.setProperty('--b', s.getAttribute('data-bot'));
      steps.forEach(function (x, j) { x.classList.toggle('is-active', j === i); });
      if (tag) {
        tag.textContent = s.getAttribute('data-tag');
        tag.classList.remove('bump'); void tag.offsetWidth; tag.classList.add('bump');
      }
    });
    if (imgs[1]) imgs[1].loading = 'eager';
  });

  /* ---------- Penală: the card comes apart into its layers as you scroll ---------- */
  $$('[data-explode]').forEach(function (root) {
    var track = $('.explode__track', root);
    var scene = $('.explode__scene', root);
    if (!motionOK || !('IntersectionObserver' in window)) { scene.style.setProperty('--p', 1); return; }
    onProgress(track, function (p) { scene.style.setProperty('--p', clamp((p - 0.12) / 0.6, 0, 1).toFixed(3)); });
  });

  /* ---------- Legi speciale: pull a law off the shelf ---------- */
  $$('[data-shelf]').forEach(function (root) {
    var books = $$('.book', root);
    var detail = $('.shelf__detail', root);
    var nameEl = $('[data-shelf-name]', root);
    var domEl = $('[data-shelf-domain]', root);
    var countEl = $('[data-shelf-count]', root);
    function pick(b, quiet) {
      books.forEach(function (x) { x.classList.toggle('is-out', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      nameEl.textContent = b.getAttribute('data-name');
      domEl.textContent = b.getAttribute('data-domain');
      var facts = b.getAttribute('data-facts');
      countEl.textContent = facts === 'PRO' ? 'Inclus în PRO' : facts;
      countEl.classList.toggle('is-pro', b.classList.contains('book--pro'));
      if (!quiet) { detail.classList.remove('bump'); void detail.offsetWidth; detail.classList.add('bump'); }
    }
    books.forEach(function (b, k) {
      b.style.setProperty('--k', k);
      b.addEventListener('click', function () { pick(b); });
    });
    if (books[0]) pick(books[0], true);
  });

  /* ---------- Legi speciale: a deep stack of phones. The section pins; scrolling sends the front phone up and away
     and brings the next one forward from the depth. Transform and opacity only, written once per frame. ---------- */
  $$('[data-stack]').forEach(function (root) {
    var track = $('.stack__track', root), phones = $$('.stack__phone', root), texts = $$('.stack__text', root);
    var imgs = phones.map(function (ph) { return $('img', ph); });
    var n = phones.length, shown = -1, ticking = false;
    root.classList.add('is-live');
    function place() {
      ticking = false;
      var r = track.getBoundingClientRect(), span = Math.max(1, r.height - window.innerHeight);
      var p = clamp(-r.top / span, 0, 1) * (n - 1);
      if (!motionOK) p = Math.round(p);
      phones.forEach(function (ph, i) {
        var d = i - p, t, o, dim;
        if (d < 0) {            // gone: the whole phone lifts out of the stage, fading only at the very end
          t = 'translate3d(0,' + (d * 118) + '%,' + (d * -60) + 'px) rotateX(' + (d * -14) + 'deg)';
          o = clamp(1 + (d + 0.55) * 2.4, 0, 1); dim = 1;
        } else {                // waiting: deeper, a little higher and to the side; depth darkens the screen, never see-through
          t = 'translate3d(' + (d * 9) + '%,' + (d * -7) + '%,' + (d * -170) + 'px) rotateY(' + (d * -6) + 'deg)';
          o = d > 3 ? clamp(4 - d, 0, 1) : 1; dim = clamp(1 - d * 0.3, 0.25, 1);
        }
        imgs[i].style.opacity = dim;
        ph.style.transform = t; ph.style.opacity = o; ph.style.zIndex = String(100 - Math.round(Math.abs(d) * 10));
      });
      var k = clamp(Math.round(p), 0, n - 1);
      if (k !== shown) { shown = k; texts.forEach(function (x, i) { x.classList.toggle('is-on', i === k); x.setAttribute('aria-hidden', i === k ? 'false' : 'true'); }); }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(place); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    place();
  });

  /* ---------- Home: Legislație integrală — category tabs (ARIA tabs with arrow keys) + proportional strip ---------- */
  $$('[data-acts]').forEach(function (root) {
    var tabs = $$('[role="tab"]', root);
    var panels = $$('[role="tabpanel"]', root);
    var segs = $$('.acts__strip i', root);
    function select(i, focus) {
      tabs.forEach(function (t, j) {
        t.setAttribute('aria-selected', j === i ? 'true' : 'false');
        t.tabIndex = j === i ? 0 : -1;
      });
      panels.forEach(function (p, j) { p.hidden = j !== i; });
      segs.forEach(function (s, j) { s.classList.toggle('is-on', j === i); });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i); });
      t.addEventListener('keydown', function (e) {
        var k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); select((i + k + tabs.length) % tabs.length, true); }
      });
    });
    select(0);
  });

})();
