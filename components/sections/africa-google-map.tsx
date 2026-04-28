"use client";

import { useEffect, useRef } from "react";

type AfricaGoogleMapProps = {
  className?: string;
};

export function AfricaGoogleMap({ className }: AfricaGoogleMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadSvg = async () => {
      if (!containerRef.current) {
        return;
      }

      try {
        const response = await fetch("/africa.svg");

        if (!response.ok) {
          throw new Error(`Unable to load africa.svg: ${response.status}`);
        }

        const svgMarkup = await response.text();

        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = svgMarkup;
        }
      } catch (error) {
        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML =
            '<p class="text-sm text-destructive">Unable to load the Africa map right now.</p>';
        }
        console.error(error);
      }
    };

    loadSvg();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="africa-map-container h-full w-full"
        aria-label="Africa map"
        role="img"
      />

      <style jsx>{`
        .africa-map-container {
          width: 100%;
          min-height: 280px;
        }

        .africa-map-container :global(svg) {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
        }

        .africa-map-container :global(path) {
          transition: fill 0.25s ease, transform 0.25s ease;
        }

        .africa-map-container :global(path:hover) {
          fill: #0ea5e9 !important;
        }
      `}</style>
    </div>
  );
}
