"use client";

import Image from "next/image";

type AfricaGoogleMapProps = {
  className?: string;
};

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
      </div>
    </div>
  );
}
