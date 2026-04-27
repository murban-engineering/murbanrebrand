"use client";

import { useEffect } from "react";

export function ResetHomeOnLoad() {
  useEffect(() => {
    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }

    window.scrollTo({ top: 0, behavior: "auto" });

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
