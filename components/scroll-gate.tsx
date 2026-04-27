"use client";

import { useEffect, useState } from "react";

const LOCK_TARGET_ID = "industries";

export function ScrollGate() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const getBoundary = () => {
      const lockTarget = document.getElementById(LOCK_TARGET_ID);
      if (!lockTarget) return null;
      const rect = lockTarget.getBoundingClientRect();
      return Math.max(0, rect.top + window.scrollY - 1);
    };

    let touchStartY = 0;

    const handleScroll = () => {
      const boundary = getBoundary();
      if (boundary === null) return;

      if (!isUnlocked && window.scrollY > boundary) {
        window.scrollTo({ top: boundary, behavior: "auto" });
      }

      if (isUnlocked && window.scrollY < boundary - 80) {
        setIsUnlocked(false);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isUnlocked) return;
      const boundary = getBoundary();
      if (boundary === null) return;

      if (window.scrollY >= boundary - 1 && event.deltaY > 0) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isUnlocked) return;
      const boundary = getBoundary();
      if (boundary === null) return;

      const scrollingDownKeys = ["ArrowDown", "PageDown", " ", "End"];
      if (window.scrollY >= boundary - 1 && scrollingDownKeys.includes(event.key)) {
        event.preventDefault();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isUnlocked) return;
      const boundary = getBoundary();
      if (boundary === null) return;

      const currentY = event.touches[0]?.clientY ?? 0;
      const deltaY = touchStartY - currentY;

      if (window.scrollY >= boundary - 1 && deltaY > 0) {
        event.preventDefault();
      }
    };

    const maybeUnlockForHash = (hashValue: string) => {
      if (!hashValue) return;
      const targetId = decodeURIComponent(hashValue.replace(/^#/, ""));
      if (!targetId) return;

      const target = document.getElementById(targetId);
      const boundary = getBoundary();
      if (!target || boundary === null) return;

      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      if (targetTop > boundary + 1) {
        setIsUnlocked(true);
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      maybeUnlockForHash(anchor.getAttribute("href") ?? "");
    };

    const handleHashChange = () => {
      maybeUnlockForHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isUnlocked]);

  return null;
}
