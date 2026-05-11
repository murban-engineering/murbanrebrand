"use client";

import { useEffect } from "react";
import { clearServiceScrollRestore, restoreServiceScroll } from "@/components/service-navigation-state";

const HASH_SCROLL_RETRIES = 12;

function getHashTarget() {
  const hash = window.location.hash;
  if (!hash) return null;

  const targetId = decodeURIComponent(hash.replace(/^#/, ""));
  if (!targetId) return null;

  return document.getElementById(targetId);
}

function scrollToCurrentHash(attempt = 0) {
  const target = getHashTarget();

  if (target) {
    target.scrollIntoView({ block: "start", behavior: "auto" });
    return;
  }

  if (attempt >= HASH_SCROLL_RETRIES) return;

  window.setTimeout(() => scrollToCurrentHash(attempt + 1), 100);
}

export function ResetHomeOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = window.location.hash ? "manual" : "auto";
    }

    if (window.location.hash) {
      clearServiceScrollRestore();
      window.requestAnimationFrame(() => scrollToCurrentHash());
      return;
    }

    restoreServiceScroll();
  }, []);

  return null;
}
