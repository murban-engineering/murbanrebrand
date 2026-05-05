"use client";

import { useEffect, useRef } from "react";

type AfricaGoogleMapProps = {
  className?: string;
};

export const whereWeWorkCountries = [
  { name: "Kenya", label: "Kenya", isHQ: true },
  { name: "Uganda", label: "Uganda" },
  { name: "Tanzania", label: "Tanzania" },
  { name: "Ethiopia", label: "Ethiopia" },
  { name: "Rwanda", label: "Rwanda" },
  { name: "Burundi", label: "Burundi" },
  { name: "Zambia", label: "Zambia" },
  { name: "DR Congo", label: "DRC" },
  { name: "Somalia", label: "Somalia" },
  { name: "Seychelles", label: "Seychelles" },
  { name: "Madagascar", label: "Madagascar" },
  { name: "Ghana", label: "Ghana" },
  { name: "Eritrea", label: "Eritrea" },
  { name: "Djibouti", label: "Djibouti" },
  { name: "Zimbabwe", label: "Zimbabwe" },
  { name: "Malawi", label: "Malawi" },
  { name: "Sudan", label: "Sudan" },
  { name: "South Sudan", label: "South Sudan" },
  { name: "Chad", label: "Chad" },
] as const;

const activeCountrySet: Set<string> = new Set(whereWeWorkCountries.map((country) => country.name));

export function AfricaGoogleMap({ className }: AfricaGoogleMapProps) {
  const mapRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const mapObject = mapRef.current;
    if (!mapObject) return;

    const colorizeMap = () => {
      const svgDocument = mapObject.contentDocument;
      if (!svgDocument) return;

      const svgRoot = svgDocument.querySelector("svg");
      if (!svgRoot) return;

      const background = svgDocument.querySelector("rect");
      if (background) {
        background.setAttribute("fill", "transparent");
      }

      const countryPaths = Array.from(svgDocument.querySelectorAll("path"));

      countryPaths.forEach((path) => {
        const countryName = path.querySelector("title")?.textContent?.trim() ?? "";
        const isActive = activeCountrySet.has(countryName);

        path.setAttribute("fill", isActive ? "#A60D0F" : "#d8dde8");
        path.setAttribute("stroke", "#213164");
        path.setAttribute("stroke-width", "1");
        path.style.transition = "fill 0.2s ease";

        if (isActive) {
          path.addEventListener("mouseenter", () => {
            path.setAttribute("fill", "#c41f22");
          });
          path.addEventListener("mouseleave", () => {
            path.setAttribute("fill", "#A60D0F");
          });
        }
      });

      const labels = svgDocument.querySelectorAll("g:last-of-type text");
      labels.forEach((label) => label.setAttribute("fill", "#ffffff"));
    };

    colorizeMap();
    mapObject.addEventListener("load", colorizeMap);

    return () => {
      mapObject.removeEventListener("load", colorizeMap);
    };
  }, []);

  return (
    <div
      className={`${className ?? ""} relative bg-white`}
      aria-label="Africa map showing Murban operations"
      role="img"
    >
      <div className="relative aspect-[14/9] w-full min-h-[360px] overflow-hidden rounded-xl bg-transparent">
        <object
          ref={mapRef}
          type="image/svg+xml"
          data="/africamapsvg.svg"
          aria-label="Africa operations map"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
