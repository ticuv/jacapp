"use client";
import { useEffect } from "react";
import { initBehaviours } from "@/lib/behaviours";

/* Wires one page: its behaviours (menu, counters, scroll scenes). Cleans up on navigation. */
export default function PageEffects({ page }) {
  useEffect(() => {
    const cleanup = initBehaviours();
    window.__lenis?.scrollTo(window.location.hash || 0, { immediate: true, offset: -80 });
    return cleanup;
  }, [page]);
  return null;
}
