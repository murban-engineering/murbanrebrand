"use client";

import Image from "next/image";

type AfricaGoogleMapProps = {
  className?: string;
};

const MURBAN_RED = "#C62828";

export const whereWeWorkCountries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Ethiopia",
  "Rwanda",
  "Burundi",
  "Zambia",
  "DRC",
  "Somalia",
  "Seychelles",
  "Madagascar",
  "Ghana",
  "Eritrea",
  "Djibouti",
  "Zimbabwe",
  "Malawi",
] as const;

const countryMarkers = [
  { name: "Ghana", top: "49%", left: "41%" },
  { name: "DRC", top: "61%", left: "53%" },
  { name: "Ethiopia", top: "46%", left: "66%" },
  { name: "Eritrea", top: "42%", left: "68%" },
  { name: "Djibouti", top: "46%", left: "70%" },
  { name: "Somalia", top: "52%", left: "74%" },
  { name: "Uganda", top: "58%", left: "61%" },
  { name: "Kenya", top: "63%", left: "63%" },
  { name: "Rwanda", top: "63%", left: "58.5%" },
  { name: "Burundi", top: "65%", left: "59%" },
  { name: "Tanzania", top: "69%", left: "62%" },
  { name: "Zambia", top: "73%", left: "56%" },
  { name: "Malawi", top: "75%", left: "62%" },
  { name: "Zimbabwe", top: "80%", left: "60%" },
  { name: "Madagascar", top: "79%", left: "75%" },
  { name: "Seychelles", top: "58%", left: "71%" },
] as const;

export function AfricaGoogleMap({ className }: AfricaGoogleMapProps) {
  return (
    <div className={`${className ?? ""} relative`} aria-label="Africa map showing Murban operations" role="img">
      <div className="relative aspect-[16/10] w-full min-h-[280px] overflow-hidden">
        <Image
          src="/images/africa-map.jpg"
          alt="Africa map with highlighted Murban Engineering operation countries"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
        {countryMarkers.map((country) => (
          <span
            key={country.name}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: country.top, left: country.left }}
            aria-label={country.name}
            title={country.name}
          >
            <span
              className="block h-3.5 w-3.5 rounded-full border border-white shadow-[0_0_0_2px_rgba(255,255,255,0.35)] animate-pulse"
              style={{ backgroundColor: MURBAN_RED }}
            />
            <span
              className="pointer-events-none absolute left-1/2 top-[130%] -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            >
              {country.name}
            </span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
