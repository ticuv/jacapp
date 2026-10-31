"use client";
import { useEffect } from "react";
import { initBehaviours } from "@/lib/behaviours";

/* Wires one page: its behaviours (menu, counters, scroll scenes). Cleans up on navigation. */
export default function PageEffects({ page }) {
  useEffect(() => {
    const cleanup = initBehaviours();
    // only a link with #anchor needs a jump; never reset a page the visitor has already started to scroll
    if (window.location.hash) window.__lenis?.scrollTo(window.location.hash, { immediate: true, offset: -80 });
    return cleanup;
  }, [page]);
  return null;
}
