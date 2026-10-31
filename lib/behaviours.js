/* JAC page behaviours. Everything here is an enhancement: without script each page shows its final, static state.
   initBehaviours() wires one page and returns a cleanup, so client-side navigation never stacks listeners or triggers.
   Scroll-linked work runs on GSAP ScrollTrigger (kept in step with Lenis by components/SmoothScroll.jsx). */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger jumps to the top while it measures a refresh; if the visitor had already scrolled (a slow phone,
// a back-navigation), put them back exactly where they were instead of leaving the page at the top.
if (typeof window !== "undefined" && !window.__stKeepScroll) {
  window.__stKeepScroll = true;
  let kept = 0;
  ScrollTrigger.addEventListener("refreshInit", () => { kept = window.scrollY; });
  ScrollTrigger.addEventListener("refresh", () => {
    if (Math.abs(window.scrollY - kept) > 1) {
      window.scrollTo(0, kept);
      window.__lenis?.scrollTo(kept, { immediate: true, force: true });
    }
  });
}

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function initBehaviours() {
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const undo = [];
  const on = (target, type, fn, opts) => { target.addEventListener(type, fn, opts); undo.push(() => target.removeEventListener(type, fn, opts)); };
  const observe = (cb, opts) => { const o = new IntersectionObserver(cb, opts); undo.push(() => o.disconnect()); return o; };
  const timers = new Set();
  const later = (fn, ms) => { const t = setTimeout(() => { timers.delete(t); fn(); }, ms); timers.add(t); return t; };
  undo.push(() => timers.forEach(clearTimeout));
  const ctx = gsap.context(() => {});
  undo.push(() => ctx.revert());
  const st = (vars) => ctx.add(() => ScrollTrigger.create(vars));

  /* ---------- reveal once ---------- */
  ctx.add(() => {
    $$("[data-reveal]").forEach((el) => ScrollTrigger.create({ trigger: el, start: "top 85%", once: true, onEnter: () => el.classList.add("in") }));
  });

  /* ---------- hero carousel: swipe, tap a side phone, showcase ---------- */
  $$("[data-carousel]").forEach((root) => {
    const phones = $$(".device", $(".carousel__phones", root));
    const stage = $(".carousel__stage", root);
    const n = phones.length;
    let current = Math.max(0, phones.findIndex((p) => p.getAttribute("data-pos") === "center"));
    const render = () => phones.forEach((p, i) => {
      const rel = (i - current + n) % n;
      p.setAttribute("data-pos", rel === 0 ? "center" : rel === 1 ? "right" : rel === n - 1 ? "left" : "back");
      p.setAttribute("aria-hidden", rel === 0 ? "false" : "true");
    });
    const go = (dir) => { current = (current + dir + n) % n; render(); };
    phones.forEach((p, i) => on(p, "click", () => { if (i !== current) { current = i; render(); } }));
    on(root, "keydown", (e) => { if (e.key === "ArrowLeft") { go(-1); e.preventDefault(); } if (e.key === "ArrowRight") { go(1); e.preventDefault(); } });
    let sx = null, sy = null;
    on(stage, "pointerdown", (e) => { sx = e.clientX; sy = e.clientY; });
    on(stage, "pointerup", (e) => {
      if (sx === null) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      sx = sy = null;
    });
    on(stage, "pointercancel", () => { sx = sy = null; });
    render();
    // showcase: turns on its own while on screen; pauses under a mouse or focus; after a tap waits, then carries on
    let timer = null, visible = false, held = false;
    const stop = () => { if (timer) { clearTimeout(timer); timers.delete(timer); timer = null; } };
    const tick = (wait) => { stop(); if (visible && !held && !document.hidden) timer = later(() => { go(1); tick(); }, wait || 3800); };
    if (motionOK && n > 3) {
      const resume = () => tick(7000);
      on(stage, "pointerdown", stop); on(stage, "pointerup", resume); on(stage, "pointercancel", resume); on(root, "keydown", resume);
      on(root, "pointerenter", (e) => { if (e.pointerType === "mouse") { held = true; stop(); } });
      on(root, "pointerleave", (e) => { if (e.pointerType === "mouse") { held = false; tick(); } });
      on(root, "focusin", () => { held = true; stop(); });
      on(root, "focusout", () => { held = false; resume(); });
      on(document, "visibilitychange", () => tick());
      observe((es) => { visible = es[0].isIntersecting; tick(); }, { threshold: 0.4 }).observe(stage);
    }
  });

  /* ---------- enter / leave effects: .in while on screen, .out once scrolled past the top ---------- */
  const fxEls = $$("[data-fx]");
  fxEls.forEach((el) => $$("[data-fx-child]", el).forEach((c, i) => c.style.setProperty("--i", i)));
  if (motionOK) {
    fxEls.forEach((el) => st({
      trigger: el, start: "top 88%", end: "bottom 8%",
      onEnter: () => { el.classList.add("in"); el.classList.remove("out"); },
      onEnterBack: () => { el.classList.add("in"); el.classList.remove("out"); },
      onLeave: () => el.classList.add("out"),
      onLeaveBack: () => el.classList.remove("in", "out"),
    }));
  } else fxEls.forEach((el) => el.classList.add("in"));

  /* ---------- shared: run fn(i) when step i crosses the middle of the viewport ---------- */
  const onMiddle = (steps, fn) => {
    steps.forEach((s, i) => st({ trigger: s, start: "top center", end: "bottom center", onToggle: (self) => { if (self.isActive) fn(i); } }));
    fn(0);
  };

  /* ---------- Rutieră (older pin layout, kept for any page that still uses it) ---------- */
  $$("[data-pin]").forEach((root) => {
    const steps = $$(".pin__step", root), screens = $$(".pin__screens img", root), dots = $$(".pin__dots span", root);
    const factEl = $("[data-pin-fact]", root), phone = $(".pin__phone", root), tilt = [-7, 6, -5, 7, -6, 5, 0];
    let current = -1;
    onMiddle(steps, (i) => {
      if (i === current) return; current = i;
      screens.forEach((img, j) => { img.classList.toggle("is-active", j === i); img.classList.toggle("is-before", j < i); if (Math.abs(j - i) <= 1) img.loading = "eager"; });
      steps.forEach((s, j) => s.classList.toggle("is-active", j === i));
      dots.forEach((d, j) => d.classList.toggle("is-on", j === i));
      if (phone && motionOK) phone.style.setProperty("--ry", tilt[i % tilt.length] + "deg");
      if (factEl) { factEl.textContent = steps[i].getAttribute("data-fact"); factEl.classList.remove("bump"); void factEl.offsetWidth; factEl.classList.add("bump"); }
    });
  });

  /* ---------- Ghid: stacked sheets; the one underneath shrinks and darkens as the next covers it ---------- */
  $$("[data-sheets]").forEach((root) => {
    const sheets = $$(".sheet", root), inners = sheets.map((s) => $(".sheet__inner", s));
    if (!motionOK) return;
    const update = () => {
      const tops = sheets.map((s) => s.getBoundingClientRect().top), h = sheets[0].offsetHeight;
      inners.forEach((inner, i) => inner.style.setProperty("--p", (i < sheets.length - 1 ? clamp((h - (tops[i + 1] - tops[i])) / h, 0, 1) : 0).toFixed(3)));
    };
    st({ trigger: root, start: "top bottom", end: "bottom top", onUpdate: update });
  });

  /* ---------- Shiftr: tap a bento tile to see the real screen in a phone ---------- */
  const viewer = $(".viewer");
  if (viewer && typeof viewer.showModal === "function") {
    const vImg = $("img", viewer), vCap = $(".viewer__cap", viewer);
    let opener = null;
    $$("[data-shot]").forEach((btn) => on(btn, "click", () => {
      const shot = btn.getAttribute("data-shot");
      vImg.src = `/assets/img/screens/${shot}-800.webp`;
      vImg.srcset = `/assets/img/screens/${shot}-800.webp 800w, /assets/img/screens/${shot}-1175.webp 1175w`;
      vImg.sizes = "(min-width: 1024px) 360px, 80vw";
      vImg.alt = btn.getAttribute("data-cap"); vCap.textContent = btn.getAttribute("data-cap");
      opener = btn; viewer.showModal(); $(".viewer__close", viewer).focus();
    }));
    on($(".viewer__close", viewer), "click", () => viewer.close());
    on(viewer, "click", (e) => { if (e.target === viewer) viewer.close(); });
    on(viewer, "close", () => { if (opener) opener.focus({ preventScroll: true }); });
  } else $$(".bs__ico").forEach((b) => { b.hidden = true; });

  /* ---------- 3D tilt of the hero phones: pointer on desktop, scroll on phones ---------- */
  const tiltEl = $("[data-tilt]");
  if (tiltEl && motionOK) {
    const hero = tiltEl.closest("section");
    if (finePointer) {
      on(hero, "pointermove", (e) => {
        const r = hero.getBoundingClientRect();
        tiltEl.style.setProperty("--ry", (((e.clientX - r.left) / r.width - 0.5) * 14).toFixed(2) + "deg");
        tiltEl.style.setProperty("--rx", (4 - ((e.clientY - r.top) / r.height - 0.5) * 8).toFixed(2) + "deg");
      });
      on(hero, "pointerleave", () => { tiltEl.style.setProperty("--ry", "0deg"); tiltEl.style.setProperty("--rx", "4deg"); });
    } else {
      st({ trigger: hero, start: "top top", end: "+=700", onUpdate: (self) => tiltEl.style.setProperty("--rx", (4 + self.progress * 20).toFixed(2) + "deg") });
    }
  }

  /* ---------- phone menu: close after a choice, on Escape, or on a tap outside ---------- */
  $$(".mnav").forEach((menu) => {
    $$("a", menu).forEach((a) => on(a, "click", () => { menu.open = false; }));
    on(document, "keydown", (e) => { if (e.key === "Escape" && menu.open) { menu.open = false; $("summary", menu).focus(); } });
    on(document, "click", (e) => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  });

  /* ---------- numbers count up once visible ---------- */
  const fmt = (v, sep) => (sep ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : String(v));
  if (motionOK) {
    $$("[data-count]").forEach((el) => {
      const to = +el.getAttribute("data-count"), sep = el.hasAttribute("data-sep");
      const pre = el.getAttribute("data-prefix") || "", suf = el.getAttribute("data-suffix") || "";
      const box = { v: 0 };
      st({ trigger: el, start: "top 80%", once: true, onEnter: () => {
        el.textContent = pre + fmt(0, sep) + suf;
        ctx.add(() => gsap.to(box, { v: to, duration: 1.3, ease: "power4.out", onUpdate: () => { el.textContent = pre + fmt(Math.round(box.v), sep) + suf; } }));
      } });
    });
  }

  /* ---------- PV compare: drag the line; above = completed, below = blank ---------- */
  $$("[data-compare]").forEach((cmp) => {
    const screen = $(".compare__screen", cmp), range = $(".compare__range", cmp), grab = $$(".compare__knob, .compare__line", cmp);
    const pos = { p: 50 };
    let demoDone = false, tween = null, dragging = false, tapStart = null;
    const setPos = (p) => {
      p = clamp(p, 0, 100); pos.p = p;
      cmp.style.setProperty("--pos", p + "%"); range.value = Math.round(p);
      range.setAttribute("aria-valuetext", Math.round(p) + "% completat afișat sus");
    };
    const posFrom = (e) => { const r = screen.getBoundingClientRect(); return ((e.clientY - r.top) / r.height) * 100; };
    const stopDemo = () => { if (tween) tween.kill(); tween = null; demoDone = true; };
    const animateTo = (target, dur) => { tween = gsap.to(pos, { p: target, duration: dur, ease: "power2.inOut", onUpdate: () => setPos(pos.p) }); return tween; };
    grab.forEach((g) => {
      on(g, "pointerdown", (e) => { stopDemo(); dragging = true; cmp.classList.add("is-dragging"); g.setPointerCapture(e.pointerId); setPos(posFrom(e)); e.preventDefault(); });
      on(g, "pointermove", (e) => { if (dragging) setPos(posFrom(e)); });
      ["pointerup", "pointercancel"].forEach((t) => on(g, t, () => { dragging = false; cmp.classList.remove("is-dragging"); }));
    });
    on(screen, "pointerdown", (e) => { if (!dragging) tapStart = { x: e.clientX, y: e.clientY }; });
    on(screen, "pointerup", (e) => {
      if (!tapStart || dragging) return;
      if (Math.abs(e.clientX - tapStart.x) < 8 && Math.abs(e.clientY - tapStart.y) < 8) { stopDemo(); if (motionOK) animateTo(posFrom(e), 0.38); else setPos(posFrom(e)); }
      tapStart = null;
    });
    on(screen, "pointercancel", () => { tapStart = null; });
    on(range, "input", () => { stopDemo(); setPos(+range.value); });
    on(range, "focus", () => cmp.classList.add("is-focus"));
    on(range, "blur", () => cmp.classList.remove("is-focus"));
    if (motionOK) {
      st({ trigger: screen, start: "top 65%", once: true, onEnter: () => {
        if (demoDone) return;
        tween = gsap.timeline({ onUpdate: () => setPos(pos.p) })
          .to(pos, { p: 18, duration: 0.7, ease: "power2.inOut" })
          .to(pos, { p: 82, duration: 1.1, ease: "power2.inOut" })
          .to(pos, { p: 50, duration: 0.7, ease: "power2.inOut" });
        ctx.add(() => tween);
      } });
    }
    setPos(50);
  });

  /* ---------- plan billing switch: data-billing + a live announcement ---------- */
  $$(".plan-card").forEach((card) => {
    const radios = $$('input[type="radio"]', card);
    if (!radios.length) return;
    const live = $("[data-billing-live]", card);
    radios.forEach((r) => on(r, "change", () => {
      card.setAttribute("data-billing", r.value);
      const msg = card.getAttribute("data-msg-" + r.value);
      if (live && msg) live.textContent = msg;
    }));
  });

  /* ---------- Legi speciale: law marquee (clone once for a seamless loop) ---------- */
  $$("[data-marquee]").forEach((root) => {
    const track = $(".marquee__track", root), group = track && $(".marquee__group", track);
    if (!group) return;
    if (track.children.length === 1) { const c = group.cloneNode(true); c.setAttribute("aria-hidden", "true"); track.appendChild(c); undo.push(() => c.remove()); }
    root.classList.add("is-ready");
  });

  /* ---------- Rutieră: dashboard (speedometer needle, suspension countdown, rolling amount) ---------- */
  $$("[data-hud]").forEach((root) => {
    const stage = $(".hud__stage", root), needle = $(".gauge__needle", root), speedEl = $("[data-hud-speed]", root);
    const daysEl = $("[data-hud-days]", root), daysLabel = $("[data-hud-days-label]", root);
    const screens = $$(".hud__screens img", root), steps = $$(".hud__step", root);
    let current = -1;
    onMiddle(steps, (i) => {
      if (i === current || i < 0) return; current = i;
      const s = steps[i], mode = s.getAttribute("data-mode");
      stage.setAttribute("data-mode", mode);
      steps.forEach((x, j) => x.classList.toggle("is-active", j === i));
      const scr = +s.getAttribute("data-screen");
      screens.forEach((img, j) => { img.classList.toggle("is-active", j === scr); img.classList.toggle("is-before", j < scr); if (Math.abs(j - scr) <= 1) img.loading = "eager"; });
      if (mode === "gauge") {
        const v = +s.getAttribute("data-speed") || 0;
        needle.style.setProperty("--a", -120 + v * 6 + "deg");
        stage.setAttribute("data-zone", v > 20 ? "2" : v > 10 ? "1" : "0");
        speedEl.textContent = "+" + v;
      }
      if (mode === "timer") {
        const extra = s.getAttribute("data-days") === "45";
        stage.setAttribute("data-days", extra ? "45" : "15");
        daysEl.textContent = extra ? "+30" : "15";
        daysLabel.textContent = extra ? "zile în plus la nepredare" : "zile cu dovada înlocuitoare";
      }
    });
    st({ trigger: root, start: "top bottom", end: "bottom top", onToggle: (self) => root.classList.toggle("is-live", self.isActive && motionOK) });
  });

  /* ---------- Penală: a spotlight that walks down the real card ---------- */
  $$("[data-lens]").forEach((root) => {
    const screen = $(".lens__screen", root), imgs = $$(".lens__screen img", root), tag = $("[data-lens-tag]", root), steps = $$(".lens__step", root);
    let current = -1;
    onMiddle(steps, (i) => {
      if (i === current || i < 0) return; current = i;
      const s = steps[i], img = +s.getAttribute("data-img");
      imgs.forEach((el, j) => { el.classList.toggle("is-active", j === img); if (j === img) el.loading = "eager"; });
      screen.style.setProperty("--t", s.getAttribute("data-top"));
      screen.style.setProperty("--b", s.getAttribute("data-bot"));
      steps.forEach((x, j) => x.classList.toggle("is-active", j === i));
      if (tag) { tag.textContent = s.getAttribute("data-tag"); tag.classList.remove("bump"); void tag.offsetWidth; tag.classList.add("bump"); }
    });
    if (imgs[1]) imgs[1].loading = "eager";
  });

  /* ---------- Penală: the card comes apart into its layers, scrubbed by the scroll ---------- */
  $$("[data-explode]").forEach((root) => {
    const track = $(".explode__track", root), scene = $(".explode__scene", root);
    if (!motionOK) { scene.style.setProperty("--p", 1); return; }
    st({ trigger: track, start: "top top", end: "bottom bottom", scrub: 0.6,
      onUpdate: (self) => scene.style.setProperty("--p", clamp((self.progress - 0.12) / 0.6, 0, 1).toFixed(3)) });
  });

  /* ---------- Legi speciale: pull a law off the shelf ---------- */
  $$("[data-shelf]").forEach((root) => {
    const books = $$(".book", root), detail = $(".shelf__detail", root);
    const nameEl = $("[data-shelf-name]", root), domEl = $("[data-shelf-domain]", root), countEl = $("[data-shelf-count]", root);
    const pick = (b, quiet) => {
      books.forEach((x) => { x.classList.toggle("is-out", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      nameEl.textContent = b.getAttribute("data-name"); domEl.textContent = b.getAttribute("data-domain");
      const facts = b.getAttribute("data-facts");
      countEl.textContent = facts === "PRO" ? "Inclus în PRO" : facts;
      countEl.classList.toggle("is-pro", b.classList.contains("book--pro"));
      if (!quiet) { detail.classList.remove("bump"); void detail.offsetWidth; detail.classList.add("bump"); }
    };
    books.forEach((b, k) => { b.style.setProperty("--k", k); on(b, "click", () => pick(b)); });
    if (books[0]) pick(books[0], true);
  });

  /* ---------- Legi speciale: the deep stack of phones, scrubbed by the scroll ---------- */
  $$("[data-stack]").forEach((root) => {
    const track = $(".stack__track", root), phones = $$(".stack__phone", root), texts = $$(".stack__text", root);
    const imgs = phones.map((ph) => $("img", ph));
    const n = phones.length;
    let shown = -1;
    root.classList.add("is-live");
    undo.push(() => root.classList.remove("is-live"));
    const place = (progress) => {
      let p = clamp(progress, 0, 1) * (n - 1);
      if (!motionOK) p = Math.round(p);
      phones.forEach((ph, i) => {
        const d = i - p;
        let t, o, dim;
        if (d < 0) { t = `translate3d(0,${d * 118}%,${d * -60}px) rotateX(${d * -14}deg)`; o = clamp(1 + (d + 0.55) * 2.4, 0, 1); dim = 1; }
        else { t = `translate3d(${d * 9}%,${d * -7}%,${d * -170}px) rotateY(${d * -6}deg)`; o = d > 3 ? clamp(4 - d, 0, 1) : 1; dim = clamp(1 - d * 0.3, 0.25, 1); }
        imgs[i].style.opacity = dim;
        ph.style.transform = t; ph.style.opacity = o; ph.style.zIndex = String(100 - Math.round(Math.abs(d) * 10));
      });
      const k = clamp(Math.round(p), 0, n - 1);
      if (k !== shown) { shown = k; texts.forEach((x, i) => { x.classList.toggle("is-on", i === k); x.setAttribute("aria-hidden", i === k ? "false" : "true"); }); }
    };
    st({ trigger: track, start: "top top", end: "bottom bottom", scrub: motionOK ? 0.5 : false, onUpdate: (self) => place(self.progress) });
    place(0);
  });

  /* ---------- Home: Legislație integrală (ARIA tabs with arrow keys) + proportional strip ---------- */
  $$("[data-acts]").forEach((root) => {
    const tabs = $$('[role="tab"]', root), panels = $$('[role="tabpanel"]', root), segs = $$(".acts__strip i", root);
    const select = (i, focus) => {
      tabs.forEach((t, j) => { t.setAttribute("aria-selected", j === i ? "true" : "false"); t.tabIndex = j === i ? 0 : -1; });
      panels.forEach((p, j) => { p.hidden = j !== i; });
      segs.forEach((s, j) => s.classList.toggle("is-on", j === i));
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      on(t, "click", () => select(i));
      on(t, "keydown", (e) => { const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (k) { e.preventDefault(); select((i + k + tabs.length) % tabs.length, true); } });
    });
    select(0);
  });

  ScrollTrigger.refresh();
  return () => { while (undo.length) { try { undo.pop()(); } catch (e) { /* element already gone */ } } };
}
