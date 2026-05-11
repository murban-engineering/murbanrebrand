"use client";

import { useEffect, useRef } from "react";

type AfricaGoogleMapProps = {
  className?: string;
};

export const whereWeWorkCountries = [
  { name: "Burundi", label: "Burundi" },
  { name: "Cameroon", label: "Cameroon" },
  { name: "Central African Republic", label: "Central African Republic" },
  { name: "Chad", label: "Chad" },
  { name: "Comoros", label: "Comoros" },
  { name: "Ivory Coast", label: "Côte d'Ivoire" },
  { name: "DR Congo", label: "Democratic Republic of Congo" },
  { name: "Eritrea", label: "Eritrea" },
  { name: "Ethiopia", label: "Ethiopia" },
  { name: "Ghana", label: "Ghana" },
  { name: "Kenya", label: "Kenya", isHQ: true },
  { name: "Madagascar", label: "Madagascar" },
  { name: "Malawi", label: "Malawi" },
  { name: "Mauritius", label: "Mauritius" },
  { name: "Mozambique", label: "Mozambique" },
  { name: "Rwanda", label: "Rwanda" },
  { name: "Seychelles", label: "Seychelles" },
  { name: "Somalia", label: "Somalia" },
  { name: "South Sudan", label: "South Sudan" },
  { name: "Sudan", label: "Sudan" },
  { name: "Tanzania", label: "Tanzania" },
  { name: "Uganda", label: "Uganda" },
  { name: "Zambia", label: "Zambia" },
  { name: "Zimbabwe", label: "Zimbabwe" },
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
      <div className="relative aspect-[10/11] w-full min-h-[360px] rounded-xl bg-transparent">
        <object
          ref={mapRef}
          type="image/svg+xml"
          data="/africamapsvg.svg"
          aria-label="Africa operations map"
          className="block h-full w-full"
        />
      </div>
    </div>
  );
}
