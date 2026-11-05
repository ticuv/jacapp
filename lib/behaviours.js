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
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const undo = [];
  const on = (t, type, fn, opts) => { t.addEventListener(type, fn, opts); undo.push(() => t.removeEventListener(type, fn, opts)); };
  const ctx = gsap.context(() => {});
  undo.push(() => ctx.revert());

  /* ---------- header firms up once the page scrolls under it ---------- */
  const setScrolled = () => document.documentElement.classList.toggle("is-scrolled", window.scrollY > 8);
  setScrolled();
  on(window, "scroll", setScrolled, { passive: true });

  /* ---------- phone menu: closes on a link, on Escape and on a tap outside ---------- */
  $$("[data-mnav]").forEach((d) => {
    $$("a", d).forEach((a) => on(a, "click", () => d.removeAttribute("open")));
    on(document, "keydown", (e) => { if (e.key === "Escape" && d.open) { d.removeAttribute("open"); $("summary", d).focus(); } });
    on(document, "click", (e) => { if (d.open && !d.contains(e.target)) d.removeAttribute("open"); });
  });

  /* ---------- reveal once, as each block scrolls in ---------- */
  const revealEls = $$("[data-r]");
  if (!motionOK || !("IntersectionObserver" in window)) revealEls.forEach((el) => el.classList.add("is-in"));
  else {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    revealEls.forEach((el) => io.observe(el));
    undo.push(() => io.disconnect());
  }

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

  /* ---------- mesh stages: a slow breath of light, and the phones drift a little against the scroll ---------- */
  if (motionOK) {
    $$(".stage__bg, .cta > .stage__bg").forEach((bg, i) => {
      // explicit start values: an unset custom property would otherwise tween up from 0 and shrink the gradient
      const tw = gsap.fromTo(bg, { "--bx": "0%", "--by": "0%", "--bs": 1 }, {
        "--bx": i % 2 ? "-4%" : "4%", "--by": "-3%", "--bs": 1.08,
        duration: 9 + (i % 3) * 2, ease: "sine.inOut", yoyo: true, repeat: -1, paused: true,
      });
      ctx.add(() => tw);
      ctx.add(() => ScrollTrigger.create({ trigger: bg.parentElement, start: "top bottom", end: "bottom top", onToggle: (s) => (s.isActive ? tw.play() : tw.pause()) }));
    });
    $$("[data-par]").forEach((el) => {
      ctx.add(() => gsap.fromTo(el, { y: 36 }, { y: -24, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: .6 } }));
    });
  }

  /* ---------- a stage leans toward a mouse pointer ---------- */
  if (motionOK && finePointer) {
    $$("[data-stage]").forEach((st) => {
      on(st, "pointermove", (e) => {
        const r = st.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        st.style.setProperty("--ry", `${(x * 5).toFixed(2)}deg`);
        st.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
      });
      on(st, "pointerleave", () => { st.style.removeProperty("--rx"); st.style.removeProperty("--ry"); });
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
