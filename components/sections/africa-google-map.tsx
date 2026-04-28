"use client";

import Image from "next/image";

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
  { name: "Democratic Republic of the Congo", label: "DRC" },
  { name: "Somalia", label: "Somalia" },
  { name: "Seychelles", label: "Seychelles" },
  { name: "Madagascar", label: "Madagascar" },
  { name: "Ghana", label: "Ghana" },
  { name: "Eritrea", label: "Eritrea" },
  { name: "Djibouti", label: "Djibouti" },
  { name: "Zimbabwe", label: "Zimbabwe" },
  { name: "Malawi", label: "Malawi" },
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
