/* JAC — „Dark Tactic": interacțiuni și coregrafie.
   Fără GSAP: IntersectionObserver + requestAnimationFrame, doar transform/opacity (60fps).
   Conținutul rămâne vizibil fără JS; animațiile sunt dezactivate pentru prefers-reduced-motion. */
(function () {
  "use strict";
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── anul curent ── */
  $$("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  /* ── antet: fundal la derulare ── */
  var masthead = $("#masthead");
  var onScroll = function () { masthead.classList.toggle("is-scrolled", window.scrollY > 24); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── meniu mobil ── */
  var toggle = $("#menuToggle"), menu = $("#menu");
  if (toggle && menu) {
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
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (e) { if (e.matches) setMenu(false); });
  }

  /* ── navigație: secțiunea curentă ── */
  var navLinks = $$(".nav a");
  if ("IntersectionObserver" in window) {
    var current = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + en.target.id));
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["legislatie", "ghid", "shiftr", "crew", "abonamente", "aplica"].forEach(function (id) {
      var s = document.getElementById(id);
      if (s) current.observe(s);
    });
  }

  /* ── bară CTA mobilă ── */
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
    [$("#aplica"), $(".colophon")].forEach(function (el) { if (el) endObs.observe(el); });
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

  /* ── Ghidul Operativ: tipizat / exemplu completat ── */
  var ghidPhone = $("#ghidPhone");
  if (ghidPhone) {
    var ghidBtns = $$("[data-ghid]");
    ghidBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-ghid");
        ghidBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        ghidPhone.classList.toggle("is-sablon", mode === "sablon");
      });
    });
  }

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
  if (reduced) {
    /* fără animații: cifrele se afișează direct */
    return;
  }

  /* ── apariții la intrarea în ecran ── */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$("[data-reveal]").forEach(function (el) { io.observe(el); });

    /* evidențierile de pe captura căutării */
    var hlObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); hlObs.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    $$("#annot .hl").forEach(function (el, i) {
      setTimeout(function () { hlObs.observe(el); }, i * 90);
    });
  }

  /* ── contor pentru registrul Shiftr ── */
  function easeOut(v) { return 1 - Math.pow(1 - v, 3); }
  function runCounters() {
    $$("#ledger [data-count]").forEach(function (el, idx) {
      var end = parseInt(el.getAttribute("data-count"), 10) || 0;
      var t0 = null, dur = 1300;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        el.textContent = Math.round(easeOut(p) * end);
        if (p < 1) requestAnimationFrame(step);
      }
      setTimeout(function () { requestAnimationFrame(step); }, idx * 140);
    });
  }
  var ledger = $("#ledger");
  if (ledger && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en, obs) {
      if (en[0].isIntersecting) { runCounters(); obs.disconnect(); }
    }, { threshold: 0.4 }).observe(ledger);
  }

  /* ── paralaxă discretă pe capturi (rAF, doar transform) ── */
  var parEls = $$("[data-parallax]").map(function (el) {
    return { el: el, d: parseFloat(el.getAttribute("data-parallax")) || 0 };
  });
  if (parEls.length) {
    var ticking = false;
    function par() {
      ticking = false;
      var vh = window.innerHeight;
      parEls.forEach(function (p) {
        var r = p.el.getBoundingClientRect();
        if (r.bottom < -240 || r.top > vh + 240) return;
        var c = (r.top + r.height / 2 - vh / 2) / vh; /* -0.5 … 0.5 */
        p.el.style.transform = "translateY(" + (-c * p.d * 2).toFixed(2) + "px)";
      });
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(par); }
    }, { passive: true });
    par();
  }

  /* ── hero: lumină + perspectivă care urmăresc cursorul (desktop) ── */
  var rig = $("#heroRig");
  if (rig && window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) {
    var hero = $(".hero"), light = $(".hero-light");
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      rig.style.transform = "rotateY(" + ((px - 0.5) * 8).toFixed(2) + "deg) rotateX(" + ((0.5 - py) * 5).toFixed(2) + "deg)";
      light.style.setProperty("--mx", (35 + px * 55).toFixed(1) + "%");
      light.style.setProperty("--my", (10 + py * 55).toFixed(1) + "%");
    });
    hero.addEventListener("pointerleave", function () {
      rig.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  }
})();
