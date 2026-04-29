"use client";

import { useEffect } from "react";
import { restoreServiceScroll } from "@/components/service-navigation-state";

export function ResetHomeOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    restoreServiceScroll();
  }, []);

  return null;
}
