"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Lenis smooths wheel and trackpad scrolling on desktop; touch keeps the phone's own native scroll (no lag).
   GSAP's ticker drives Lenis, and every Lenis frame updates ScrollTrigger, so pinned and scrubbed scenes stay in step.
   Off for anyone who asked their system for reduced motion. */
export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.05, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: { offset: -80 }, autoRaf: false });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    document.documentElement.classList.add("lenis-on");
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete window.__lenis;
      document.documentElement.classList.remove("lenis-on");
    };
  }, []);
  return null;
}
