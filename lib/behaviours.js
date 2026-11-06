/* JAC page behaviours (v4). Everything is an enhancement: without script every page shows its final, static state.
   initBehaviours() wires one page and returns a cleanup, so client-side navigation never stacks listeners or tweens.
   Nothing runs continuously: the mesh "breathing" tweens only play while their card is on screen, and nothing at all
   moves for visitors who asked their system for reduced motion. */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const ro = new Intl.NumberFormat("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const lei = (v) => `${ro.format(v)} lei`;

export function initBehaviours() {
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  const undo = [];
  const on = (t, type, fn, opts) => { t.addEventListener(type, fn, opts); undo.push(() => t.removeEventListener(type, fn, opts)); };
  const ctx = gsap.context(() => {});
  undo.push(() => ctx.revert());

  /* ---------- header firms up once the page scrolls under it ---------- */
  const setScrolled = () => document.documentElement.classList.toggle("is-scrolled", window.scrollY > 8);
  setScrolled();
  on(window, "scroll", setScrolled, { passive: true });

  /* ---------- phone menu: a full-screen panel; closes on a link, on Escape and on the button ---------- */
  $$("[data-mnav]").forEach((root) => {
    const btn = $(".mnav__btn", root), panel = $(".mnav__panel", root);
    $$("li", panel).forEach((li, i) => li.style.setProperty("--i", i));
    const set = (open) => {
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Închide" : "Meniu";
      panel.hidden = !open;
      panel.classList.toggle("is-open", open);
      document.documentElement.style.overflow = open ? "hidden" : "";
    };
    on(btn, "click", () => set(btn.getAttribute("aria-expanded") !== "true"));
    $$("a", panel).forEach((a) => on(a, "click", () => set(false)));
    on(document, "keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { set(false); btn.focus(); } });
    undo.push(() => { document.documentElement.style.overflow = ""; });
  });

  /* ---------- hero entrance: once, after the phone's screenshot has loaded (so the screen never "turns on" empty) ---------- */
  $$("[data-hero]").forEach((hero) => {
    const img = $(".hero__phone img", hero);
    const light = () => requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("is-lit")));
    if (!motionOK || !img || img.complete) light();
    else { on(img, "load", light); on(img, "error", light); setTimeout(light, 1500); }
    // on a phone the phone itself waits a moment: the title shows first, then it rises on its own after 0.5s,
    // or straight away if the visitor starts scrolling (CSS only moves it under 1024px)
    let risen = false;
    const rise = () => { if (risen) return; risen = true; hero.classList.add("is-risen"); };
    if (!motionOK) rise();
    else {
      const t = setTimeout(rise, 500);
      undo.push(() => clearTimeout(t));
      on(window, "scroll", rise, { passive: true, once: true });
      on(window, "touchstart", rise, { passive: true, once: true });
    }
  });

  /* ---------- reveal once, as each block scrolls in ([data-in] only carries masked lines for its children) ---------- */
  const revealEls = $$("[data-r], [data-in]");
  if (!motionOK || !("IntersectionObserver" in window)) revealEls.forEach((el) => el.classList.add("is-in"));
  else {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    revealEls.forEach((el) => io.observe(el));
    undo.push(() => io.disconnect());
  }

  /* ---------- desktop: the page goes into the phone, then the phone walks through the chapters ---------- */
  if (motionOK) {
    const mm = gsap.matchMedia();
    undo.push(() => mm.revert());
    mm.add("(min-width: 1024px)", () => {
      // 1. the hero holds while the phone grows until its screen is the whole viewport; the screen goes black
      const hero = $("[data-hero]");
      if (hero) {
        const stage = $(".hero__stage", hero), device = $(".hero__phone", hero);
        const PHONE = 2.2;   // the phone itself grows only this far (a bigger raster layer stalls the GPU)
        const fit = () => {  // how much more the plain black screen must grow to cover the whole view
          const w = device.offsetWidth * .948 * PHONE, h = device.offsetHeight * .948 * PHONE;
          return Math.max(innerWidth / w, innerHeight / h) * 1.08;
        };
        const centre = () => {
          // where the phone's centre sits inside the stage (offsets ignore transforms; the CSS nudge is 6svh down)
          const x = device.offsetLeft + device.offsetWidth / 2;
          const y = device.offsetTop + device.offsetHeight / 2 + innerHeight * .06;
          return { x, y };
        };
        gsap.set(stage, { transformOrigin: () => `${centre().x}px ${centre().y}px` });
        const shot = $(".hero__phone .phone img", hero), black = $(".hero__blackout", hero), halo = $(".hero__halo-wrap", hero);
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: hero, start: "top top", end: "+=110%", pin: true, scrub: .6, invalidateOnRefresh: true, anticipatePin: 1 },
        });
        // these are not the elements the entrance animates, so the two never fight over a value
        tl.fromTo([$(".hero__head", hero), ...$$(".hero__foot > *", hero)], { opacity: 1 }, { opacity: 0, duration: .25 }, 0)
          .fromTo(stage, { y: 0, scale: 1 }, { y: () => innerHeight / 2 - centre().y, scale: PHONE, ease: "power2.in", duration: .6 }, 0)
          .fromTo(halo, { opacity: 1 }, { opacity: 0, duration: .25 }, .1)
          .set(halo, { visibility: "hidden" }, .36)
          .fromTo(black, { opacity: 0 }, { opacity: 1, duration: .22 }, .38)
          .set(shot, { visibility: "hidden" }, .61)
          .fromTo(black, { scale: 1 }, { scale: fit, ease: "power2.in", duration: .39 }, .61);
      }

      // 2. chapters: pinned; each step swaps the big figure (masked) and crossfades the screen
      const chap = $("[data-chapters]");
      if (chap) {
        const items = $$(".chap__item", chap), shots = $$(".chap__screens > *", chap);
        chap.classList.add("is-pinned");
        let cur = 0;
        const show = (i) => {
          if (i === cur) return;
          items.forEach((it, k) => { it.classList.toggle("is-on", k === i); it.classList.toggle("is-out", k < i); });
          shots.forEach((im, k) => im.classList.toggle("is-on", k === i));
          // a second phone that belongs to one chapter only (the fine sheet behind the road list)
          $$("[data-for]", chap).forEach((el) => el.classList.toggle("is-on", +el.getAttribute("data-for") === i));
          cur = i;
        };
        ScrollTrigger.create({
          trigger: chap, start: "top top", end: () => `+=${Math.max(1, items.length) * innerHeight}`, pin: $(".chap__inner", chap),
          onEnter: () => chap.classList.add("is-arrived"),
          onLeaveBack: () => chap.classList.remove("is-arrived"),
          onUpdate: (st) => show(Math.min(items.length - 1, Math.floor(st.progress * items.length * .9999))),
        });
      }

      return () => chap?.classList.remove("is-pinned", "is-arrived");
    });
  }

  /* ---------- the guides' photographs, at every width: the section holds while the vertical scroll
     carries the strip sideways, to the last photograph; then the page goes on down ---------- */
  if (motionOK) {
    const gal = $("[data-gallery]");
    if (gal) {
      const track = $(".gal2__track", gal);
      gal.classList.add("is-pinned");
      undo.push(() => gal.classList.remove("is-pinned"));
      // travel until the last photograph rests on the page's right margin, like the first on the left
      const gut = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
      const dist = () => Math.max(0, track.scrollWidth - innerWidth + gut());
      ctx.add(() => gsap.fromTo(track, { x: 0 }, {
        x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: gal, start: "top top", end: () => `+=${dist()}`, pin: $(".gal2__pin", gal), scrub: .5, invalidateOnRefresh: true, anticipatePin: 1 },
      }));
    }
  }

  /* ---------- phones: the chapters as a carousel of the app's screens (swipe, tap a side phone, or a tab) ---------- */
  if (motionOK) {
    const mmPhone = gsap.matchMedia();
    undo.push(() => mmPhone.revert());
    mmPhone.add("(max-width: 1023px)", () => {
      const chap = $("[data-chapters]");
      if (!chap) return;
      const items = $$(".chap__item", chap), phones = $$(".chap__car .phone", chap), tabs = $$(".chap__tabs button", chap);
      const car = $(".chap__car", chap), n = items.length;
      chap.classList.add("is-carousel");
      let cur = 0;
      const render = () => {
        items.forEach((it, k) => { it.classList.toggle("is-on", k === cur); it.classList.toggle("is-out", k < cur); });
        phones.forEach((ph, k) => ph.setAttribute("data-pos", k === cur ? "center" : k === cur - 1 ? "left" : k === cur + 1 ? "right" : "back"));
        tabs.forEach((t, k) => t.setAttribute("aria-pressed", String(k === cur)));
      };
      const go = (i) => { cur = Math.max(0, Math.min(n - 1, i)); render(); };
      const offs = [];
      const add = (t, ty, fn) => { t.addEventListener(ty, fn); offs.push(() => t.removeEventListener(ty, fn)); };
      tabs.forEach((t) => add(t, "click", () => go(+t.getAttribute("data-go"))));
      phones.forEach((ph, k) => add(ph, "click", () => { if (k !== cur) go(k); }));
      let sx = null, sy = null;
      add(car, "pointerdown", (e) => { sx = e.clientX; sy = e.clientY; });
      add(car, "pointerup", (e) => {
        if (sx === null) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
        sx = sy = null;
      });
      add(car, "pointercancel", () => { sx = sy = null; });
      render();
      return () => { offs.forEach((f) => f()); chap.classList.remove("is-carousel"); items.forEach((it, k) => it.classList.toggle("is-on", k === 0)); };
    });
  }

  /* ---------- Shiftr chapter: two real changes to November 2026, each with the app's own screen ----------
     norm 160h · worked 172h → +12h; an extra night (+12h) and/or the 17th's day shift turned into an 8h recovery */
  $$("[data-shiftr2]").forEach((root) => {
    const norm = parseFloat(root.getAttribute("data-norm")) || 160;
    const balEl = $('[data-o="bal"]', root), workEl = $('[data-o="lucrate"]', root);
    const extra = $("[data-extra]", root), rec = $("[data-rec]", root);
    const sign = (v) => (v > 0 ? `+${v}h` : `${v}h`);
    const render = (roll) => {
      // the recovery turns the 12h day shift of the 17th into an 8h recovery: it counts 8h worked and takes 8h off
      const worked = 172 + (extra.checked ? 12 : 0) - (rec.checked ? 4 : 0);
      const bal = worked - norm - (rec.checked ? 8 : 0);
      workEl.textContent = `${worked}h`;
      balEl.textContent = sign(bal);
      const st = extra.checked ? (rec.checked ? "d" : "c") : (rec.checked ? "b" : "a");
      $$(".shiftr-stack img").forEach((im) => im.classList.toggle("is-on", im.getAttribute("data-st") === st));
      if (roll && motionOK) { balEl.classList.remove("is-roll"); void balEl.offsetWidth; balEl.classList.add("is-roll"); }
    };
    [extra, rec].forEach((i) => on(i, "change", () => render(true)));
    render(false);
  });

  /* ---------- prices: pick a plan by its name; the crew plan switches between yearly and monthly ---------- */
  $$("[data-plans]").forEach((root) => {
    const names = $$("[data-plan]", root), plans = $$("[data-for-plan]", root);
    const bills = $$("[data-bill]", root), radios = $$('input[name="bill"]', root);
    root.classList.add("is-live");
    undo.push(() => root.classList.remove("is-live"));
    const pick = (key) => {
      names.forEach((b) => b.setAttribute("aria-pressed", String(b.getAttribute("data-plan") === key)));
      plans.forEach((pl) => pl.classList.toggle("is-on", pl.getAttribute("data-for-plan") === key));
    };
    const bill = () => {
      const v = (radios.find((r) => r.checked) || {}).value || "an";
      bills.forEach((b) => b.classList.toggle("is-on", b.getAttribute("data-bill") === v));
    };
    names.forEach((b) => on(b, "click", () => pick(b.getAttribute("data-plan"))));
    radios.forEach((r) => on(r, "change", bill));
    pick((names.find((b) => b.getAttribute("aria-pressed") === "true") || names[0]).getAttribute("data-plan"));
    bill();
  });

  /* ---------- compare the plans: a modal window (Esc, the close link or a click outside closes it) ---------- */
  $$("[data-open-compare]").forEach((btn) => {
    const dlg = document.getElementById(btn.getAttribute("href").slice(1));
    if (!dlg || typeof dlg.showModal !== "function") return;
    on(btn, "click", (e) => { e.preventDefault(); dlg.showModal(); document.documentElement.style.overflow = "hidden"; });
    on(dlg, "close", () => { document.documentElement.style.overflow = ""; btn.focus(); });
    $$("[data-close-compare]", dlg).forEach((c) => on(c, "click", (e) => { e.preventDefault(); dlg.close(); }));
    on(dlg, "click", (e) => { if (e.target === dlg) dlg.close(); });
    undo.push(() => { if (dlg.open) dlg.close(); });
  });

  /* ---------- count-up numbers ---------- */
  $$("[data-count]").forEach((el) => {
    const end = parseFloat(el.getAttribute("data-count"));
    const sep = el.hasAttribute("data-sep");
    const fmt = (v) => { const r = Math.round(v); return sep ? r.toLocaleString("ro-RO") : String(r); };
    if (!motionOK) return;
    // the final number stays on screen until the counter actually starts, so nothing ever reads "0"
    const o = { v: 0 };
    ctx.add(() => gsap.to(o, {
      v: end, duration: 1.6, ease: "power3.out", immediateRender: false,
      scrollTrigger: { trigger: el, start: "top bottom", once: true },
      onUpdate: () => { el.textContent = fmt(o.v); },
      onComplete: () => { el.textContent = el.getAttribute("data-final") || fmt(end); },
    }));
  });

  /* ---------- the main phone of each stage drifts a little against the scroll ---------- */
  if (motionOK) {
    $$("[data-par]").forEach((el) => {
      ctx.add(() => gsap.fromTo(el, { y: 24 }, { y: -24, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: .6 } }));
    });
  }

  /* ---------- road calculator: sanction class → fine points → fine (OUG 195/2002, art. 98) ---------- */
  $$("[data-rcalc]").forEach((root) => {
    const point = parseFloat(root.getAttribute("data-point")) || 216.25;
    const CLS = { I: [2, 3], II: [4, 5], III: [6, 8], IV: [9, 20], V: [21, 100] };
    const out = (k) => $(`[data-o="${k}"]`, root);
    const render = () => {
      const c = ($("input:checked", root) || {}).value || "I";
      const [a, b] = CLS[c];
      out("pts").textContent = `${a}–${b}`;
      out("fine").textContent = `${lei(a * point)} – ${lei(b * point)}`;
      out("half").textContent = lei((a * point) / 2);
    };
    $$("input", root).forEach((i) => on(i, "change", render));
    render();
  });

  /* ---------- Shiftr example: worked hours against the norm, then recovered hours off the balance ---------- */
  $$("[data-shiftr]").forEach((root) => {
    const norm = parseFloat(root.getAttribute("data-norm")) || 160;
    const worked = $('[name="lucrate"]', root), rec = $('[name="recuperari"]', root);
    const o = (k) => $(`[data-o="${k}"]`, root);
    const fill = (inp) => inp.style.setProperty("--p", `${((inp.value - inp.min) / (inp.max - inp.min)) * 100}%`);
    const sign = (v) => (v > 0 ? `+${v}h` : `${v}h`);
    const render = () => {
      const w = +worked.value, extra = w - norm;
      rec.max = String(Math.max(0, extra));
      if (+rec.value > +rec.max) rec.value = rec.max;
      const r = +rec.value, bal = extra - r;
      o("lucrate").textContent = `${w}h`;
      o("rec").textContent = `${r}h`;
      o("extra").textContent = sign(extra);
      o("bal").textContent = sign(bal);
      o("balbox").classList.toggle("is-teal", bal <= 0);
      o("balbox").classList.toggle("is-red", bal > 0);
      fill(worked); fill(rec);
    };
    [worked, rec].forEach((i) => on(i, "input", render));
    render();
  });

  /* ---------- PV compare: drag the line; above = completed, below = blank ---------- */
  $$("[data-compare]").forEach((cmp) => {
    const screen = $(".compare__screen", cmp), range = $(".compare__range", cmp);
    const set = (p) => { const v = Math.max(0, Math.min(100, p)); cmp.style.setProperty("--pos", `${v}%`); range.value = String(Math.round(v)); };
    on(range, "input", () => set(+range.value));
    let drag = false;
    const at = (e) => { const r = screen.getBoundingClientRect(); set(((e.clientY - r.top) / r.height) * 100); };
    on(screen, "pointerdown", (e) => { drag = true; screen.setPointerCapture(e.pointerId); at(e); });
    on(screen, "pointermove", (e) => { if (drag) at(e); });
    on(screen, "pointerup", () => { drag = false; });
    on(screen, "pointercancel", () => { drag = false; });
  });

  /* ---------- tabs (accessible, arrow keys) ---------- */
  $$("[data-tabs]").forEach((root) => {
    const tabs = $$('[role="tab"]', root);
    const pick = (t, focus) => {
      tabs.forEach((x) => {
        const sel = x === t;
        x.setAttribute("aria-selected", String(sel));
        x.tabIndex = sel ? 0 : -1;
        const p = document.getElementById(x.getAttribute("aria-controls"));
        if (p) p.hidden = !sel;
      });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      on(t, "click", () => pick(t));
      on(t, "keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          pick(tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length], true);
        }
      });
    });
  });

  requestAnimationFrame(() => ScrollTrigger.refresh());
  return () => undo.forEach((f) => f());
}
