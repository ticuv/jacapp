/* JAC — comportament și coregrafie de mișcare.
   Tot conținutul este vizibil fără acest fișier; animațiile rulează doar cu clasa .motion (fără prefers-reduced-motion). */
(function () {
  "use strict";
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ── anul curent ── */
  $$("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  /* ── antet: fundal la derulare ── */
  var masthead = $("#masthead");
  var onScroll = function () { masthead.classList.toggle("is-scrolled", window.scrollY > 24); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── meniu mobil ── */
  var toggle = $("#menuToggle"), menu = $("#menu");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Închide meniul" : "Deschide meniul");
    menu.hidden = !open;
    masthead.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    updateDock();
  }
  toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", function (e) { if (e.matches) setMenu(false); });

  /* ── navigație: secțiunea curentă ── */
  var navLinks = $$(".nav a");
  if ("IntersectionObserver" in window) {
    var current = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + en.target.id)); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["legislatie", "shiftr", "crew", "abonamente", "aplica"].forEach(function (id) { var s = document.getElementById(id); if (s) current.observe(s); });
  }

  /* ── bară CTA mobilă: apare după CTA-ul din hero, dispare la formular și în subsol ── */
  var dock = $("#dock"), heroCta = $("#heroCta");
  var heroVisible = true, endVisible = false;
  function updateDock() {
    if (!dock) return;
    var on = !heroVisible && !endVisible && !document.body.classList.contains("menu-open");
    dock.classList.toggle("is-on", on);
    dock.setAttribute("aria-hidden", String(!on));
    $$("a", dock).forEach(function (a) { a.tabIndex = on ? 0 : -1; });
  }
  if (dock && heroCta && "IntersectionObserver" in window) {
    dock.hidden = false;
    new IntersectionObserver(function (en) { heroVisible = en[0].isIntersecting; updateDock(); }).observe(heroCta);
    var ends = new Map();
    var endObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { ends.set(en.target, en.isIntersecting); });
      endVisible = Array.from(ends.values()).some(Boolean); updateDock();
    });
    [$("#aplica") || $("#descarca"), $(".colophon")].forEach(function (el) { if (el) endObs.observe(el); });
  }

  /* ── PRO Echipaj: anual / lunar ── */
  $$(".billing").forEach(function (group) {
    var plan = group.closest(".plan");
    $$("button", group).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-mode");
        $$("button", group).forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        $$("[data-show]", plan).forEach(function (el) { el.hidden = el.getAttribute("data-show") !== mode; });
      });
    });
  });

  /* ── formular Closed Beta → e-mail (fără server) ── */
  var form = $("#applyForm");
  if (form) {
    var err = $("#applyError");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements, missing = [];
      var check = function (el, ok) { el.setAttribute("aria-invalid", String(!ok)); if (!ok) missing.push(el); };
      check(f.nume, f.nume.value.trim().length > 1);
      check(f.email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim()));
      check(f.structura, !!f.structura.value);
      if (missing.length) {
        err.textContent = "Completează numele, o adresă de e-mail validă și structura.";
        err.hidden = false; missing[0].focus(); return;
      }
      err.hidden = true;
      var body = [
        "Nume: " + f.nume.value.trim(),
        "E-mail: " + f.email.value.trim(),
        "Structură: " + f.structura.value,
        "Funcție: " + (f.functie.value.trim() || "-"),
        "",
        "Mesaj:",
        f.mesaj.value.trim() || "-"
      ].join("\n");
      window.location.href = "mailto:vladticu100@gmail.com?subject=" +
        encodeURIComponent("Solicitare acces JAC - Closed Beta") + "&body=" + encodeURIComponent(body);
    });
    $$("input, select", form).forEach(function (el) {
      el.addEventListener("input", function () { if (el.getAttribute("aria-invalid") === "true") el.removeAttribute("aria-invalid"); });
    });
  }

  /* ════════ MIȘCARE ════════ */
  if (!root.classList.contains("motion")) return;

  var started = false;
  function tryStart() {
    if (started) return true;
    if (!window.gsap || !window.ScrollTrigger) return false;
    started = true; initMotion(window.gsap, window.ScrollTrigger); return true;
  }
  function giveUp() { if (!tryStart()) root.classList.remove("motion"); }
  if (!tryStart()) {
    window.addEventListener("load", giveUp, { once: true });
    setTimeout(giveUp, 4000);
  }

  function initMotion(gsap, ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    root.classList.add("is-ready");
    var ease = "expo.out";

    /* hero: intrare */
    var rig = $("#heroRig"), stage = $("#heroStage");
    var wide = window.innerWidth >= 1024;
    gsap.set(rig, { rotationY: wide ? -14 : -8, rotationX: wide ? 5 : 4 });
    gsap.set("[data-hero-line]", { y: 0, yPercent: 105 });
    var intro = gsap.timeline({ defaults: { ease: ease } });
    intro
      .to("[data-hero-line]", { yPercent: 0, duration: 1.4, stagger: .12 }, .1)
      .fromTo(stage, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.8 }, .25)
      .from(rig, { rotationY: -38, rotationX: 14, z: -160, duration: 2.2 }, .25)
      .to("[data-hero]", { opacity: 1, y: 0, duration: 1.1, stagger: .09 }, .55);

    var mm = gsap.matchMedia();

    /* hero: lumină și perspectivă care urmăresc cursorul (desktop) */
    mm.add("(min-width: 1024px) and (pointer: fine)", function () {
      var hero = $(".hero"), light = $(".hero-light");
      var ry = gsap.quickTo(rig, "rotationY", { duration: 1.2, ease: "power3" });
      var rx = gsap.quickTo(rig, "rotationX", { duration: 1.2, ease: "power3" });
      var move = function (e) {
        var r = hero.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        ry(-14 + (px - .5) * 14); rx(5 - (py - .5) * 8);
        light.style.setProperty("--mx", (40 + px * 50).toFixed(1) + "%");
        light.style.setProperty("--my", (10 + py * 50).toFixed(1) + "%");
      };
      hero.addEventListener("pointermove", move);
      return function () { hero.removeEventListener("pointermove", move); };
    });

    /* hero: ieșire la derulare */
    gsap.to(".hero-rig .device-front", { yPercent: -10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-rig .device-back", { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

    /* bandă de acte normative, legată de derulare */
    var track = $("#bandTrack");
    gsap.fromTo(track, { x: 0 }, {
      x: function () { return -(track.scrollWidth - window.innerWidth) * .55; }, ease: "none",
      scrollTrigger: { trigger: ".band", start: "top bottom", end: "bottom top", scrub: .6, invalidateOnRefresh: true }
    });

    /* apariții la intrarea în ecran */
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 88%", once: true,
      // la salturi lungi (ancore) intră multe elemente deodată: decalajul total rămâne sub 0,4 s
      onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: ease, stagger: Math.min(.08, .4 / els.length), overwrite: true }); }
    });

    /* paralaxă discretă pe capturi */
    $$("[data-parallax]").forEach(function (el) {
      var d = parseFloat(el.getAttribute("data-parallax")) || 0;
      gsap.fromTo(el, { yPercent: d * -1 }, { yPercent: d, ease: "none", scrollTrigger: { trigger: el.parentNode, start: "top bottom", end: "bottom top", scrub: true } });
    });

    /* JAC Crew: locurile din echipaj */
    gsap.from(".seats span", { scaleX: 0, duration: .9, ease: ease, stagger: .12, scrollTrigger: { trigger: ".seats", start: "top 85%", once: true } });

    /* contor pentru registrul Shiftr */
    function counters(tl, at, dur) {
      $$("#ledger [data-count]").forEach(function (el) {
        var o = { v: 0 }, end = +el.getAttribute("data-count");
        tl.fromTo(o, { v: 0 }, { v: end, duration: dur, ease: "power2.out", onUpdate: function () { el.textContent = Math.round(o.v); } }, at);
      });
    }

    /* ─ desktop: scene fixate (sticky nativ, fără deturnarea derulării) ─ */
    mm.add("(min-width: 1024px)", function () {
      root.classList.add("is-scene");

      /* scena adnotărilor */
      var hls = $$("#annot .hl"), notes = $$("#annot .an");
      gsap.set(hls, { opacity: 0, scale: 1.08 });
      gsap.set(notes.map(function (n) { return $(".an-line", n); }), { scaleX: 0, transformOrigin: function (i, t) { return t.parentNode.classList.contains("an-l") ? "100% 50%" : "0% 50%"; } });
      gsap.set(notes.map(function (n) { return $("p", n); }), { opacity: 0, x: function (i, t) { return t.parentNode.classList.contains("an-l") ? -20 : 20; } });
      var at = gsap.timeline({ scrollTrigger: { trigger: "#annotScene", start: "top top", end: "bottom bottom", scrub: .5 } });
      at.fromTo(".annot-phone", { rotationX: 18, scale: .9, transformPerspective: 1400 }, { rotationX: 0, scale: 1, duration: 1, ease: "power2.out" });
      hls.forEach(function (hl, i) {
        var t = 1 + i * 1;
        at.to(hl, { opacity: 1, scale: 1, duration: .5, ease: "power2.out" }, t)
          .to($(".an-line", notes[i]), { scaleX: 1, duration: .45, ease: "power2.out" }, t + .15)
          .to($("p", notes[i]), { opacity: 1, x: 0, duration: .5, ease: "power2.out" }, t + .3);
      });
      at.to({}, { duration: .8 });

      /* scena Shiftr: calendarul se ridică de pe masă */
      var st = gsap.timeline({ scrollTrigger: { trigger: "#shiftrScene", start: "top top", end: "bottom bottom", scrub: .6 } });
      st.fromTo("#shiftrCal", { rotationX: 62, y: 120, scale: .9 }, { rotationX: 0, y: 0, scale: 1, duration: 1.2, ease: "power2.out" }, 0)
        .fromTo("#shiftrSum", { opacity: 0, xPercent: 40, rotationY: -28, z: -120 }, { opacity: 1, xPercent: 0, rotationY: 0, z: 0, duration: 1, ease: "power2.out" }, .7)
        .to("#shiftrCal", { filter: "brightness(.72)", duration: .6 }, 1.1)
        .fromTo("#ledger > div", { opacity: .15 }, { opacity: 1, duration: .5, stagger: .15 }, .8)
        .to({}, { duration: .4 });
      counters(st, .8, 1);

      return function () { root.classList.remove("is-scene"); };
    });

    /* ─ mobil/tabletă: variante ușoare ─ */
    mm.add("(max-width: 1023px)", function () {
      gsap.fromTo("#shiftrCal", { rotationX: 40, transformPerspective: 1200, y: 40 }, {
        rotationX: 0, y: 0, ease: "none", scrollTrigger: { trigger: "#shiftrArt", start: "top 95%", end: "center 55%", scrub: true }
      });
      gsap.fromTo("#shiftrSum", { xPercent: 22, opacity: .3 }, {
        xPercent: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: "#shiftrArt", start: "top 85%", end: "center 55%", scrub: true }
      });
      var ct = gsap.timeline({ scrollTrigger: { trigger: "#ledger", start: "top 85%", once: true } });
      counters(ct, 0, 1.4);
    });

    /* recalculare după încărcarea fonturilor și a imaginilor */
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    window.addEventListener("load", function () { ScrollTrigger.refresh(); }, { once: true });
  }
})();
