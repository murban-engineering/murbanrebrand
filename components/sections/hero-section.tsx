"use client";

import Image from "next/image";
import Link from "next/link";

const sideImages = [
  {
    src: "/new1.jpg",
    alt: "Industrial facility overview",
    position: "left",
  },
  {
    src: "/new2.jpg",
    alt: "Industrial operations site",
    position: "left",
  },
  {
    src: "/new3.JPG",
    alt: "Plant and pipeline infrastructure",
    position: "right",
  },
  {
    src: "/new4.jpg",
    alt: "Industrial storage and processing",
    position: "right",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="bg-background">
      <div className="grid min-h-screen grid-cols-1 gap-4 p-4 pt-24 md:p-6 md:pt-28 lg:grid-cols-[1fr_2.1fr_1fr] lg:gap-5 lg:p-6 lg:pt-28">
        <div className="hidden flex-col gap-4 lg:flex">
          {sideImages
            .filter((img) => img.position === "left")
            .map((img) => (
              <div key={img.src} className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
        </div>

        <div className="relative min-h-[66vh] overflow-hidden rounded-2xl md:min-h-[70vh]">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Industrial storage tanks with safety railings and piping"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/40 to-black/10">
            <div className="w-full px-6 pb-10 pt-16 text-white md:px-10 md:pb-12 lg:px-12">
              <h1 className="murban-engineering-wordmark text-4xl leading-tight md:text-6xl">
                <span className="block uppercase text-[#C82032]">MURBAN</span>
                <span className="block uppercase tracking-[0.2em] text-[#213164] text-2xl md:text-4xl">ENGINEERING LTD</span>
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
                Asset Integrity, Inspection, and Non-Destructive Testing for oil &amp; gas, energy, marine, and industrial assets across Africa.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#services"
                  className="rounded-md bg-[#A60D0F] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#8f0b0d]"
                >
                  Explore Services
                </Link>
                <Link
                  href="#our-projects"
                  className="rounded-md border border-white/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden flex-col gap-4 lg:flex">
          {sideImages
            .filter((img) => img.position === "right")
            .map((img) => (
              <div key={img.src} className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
        </div>
      </div>

      <div className="border-y border-border/80 bg-muted/20 px-6 py-4 md:px-10">
        <p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs font-medium tracking-wide text-muted-foreground md:text-sm">
          <span>ISO 9001:2015 Certified</span>
          <span className="hidden md:inline" aria-hidden>
            •
          </span>
          <span>ASNT SNT-TC-1A Level II Technicians</span>
          <span className="hidden md:inline" aria-hidden>
            •
          </span>
          <span>Operating Since 2007</span>
        </p>
      </div>
    </section>
  );
}
