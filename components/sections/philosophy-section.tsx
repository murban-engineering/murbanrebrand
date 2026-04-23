"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const OPERATING_COUNTRIES = [
  "Kenya (HQ)",
  "Uganda",
  "Tanzania",
  "Ethiopia",
  "Rwanda",
  "Burundi",
  "Zambia",
  "Eritrea",
  "Seychelles",
  "Madagascar",
  "Somalia",
  "Zimbabwe",
  "Djibouti",
  "Malawi",
  "DRC",
  "Ghana",
];

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [alpineTranslateX, setAlpineTranslateX] = useState(-100);
  const [forestTranslateX, setForestTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;

    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    setAlpineTranslateX((1 - progress) * -100);
    setForestTranslateX((1 - progress) * 100);
    setTitleOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="about" className="bg-background">
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="relative w-full">
            <div
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="px-6 text-center text-[12vw] font-medium leading-[0.95] tracking-tighter text-foreground md:text-[10vw] lg:text-[8vw]">
                Meet Alpine & Forest.
                <br />
                Murban Engineering.
              </h2>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="/images/hero-industrial.jpg"
                  alt="Murban Engineering specialist inspection services"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-[rgba(255,255,255,0.2)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    Specialist in Asset Integrity, Inspection, and NDT
                  </span>
                </div>
              </div>

              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#ececef]"
                style={{
                  transform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="/images/africa-operations-map.svg"
                  alt="Africa operations map with countries"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-fluid-lg md:px-12 lg:px-20">
        <div className="content-wide text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Company Profile</p>
          <p className="mt-8 text-center text-fluid-3xl leading-relaxed text-muted-foreground text-balance">
            Murban Engineering is a specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing
            (NDT). We deliver reliable and safe inspection solutions that support critical infrastructure in the
            oil &amp; gas, energy, marine, and industrial sectors.
          </p>
          <p className="mt-6 text-center text-fluid-xl leading-relaxed text-muted-foreground text-balance">
            With over 20 years of experience, we operate across Africa. Our services help clients extend asset
            life, ensure regulatory compliance, and minimize downtime.
          </p>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border/70 bg-muted/20 p-6 text-left md:p-8">
            <h3 className="text-center text-2xl font-semibold text-foreground">Where We Work</h3>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
              {OPERATING_COUNTRIES.map((country) => (
                <p key={country} className="text-sm font-medium uppercase tracking-wide text-foreground/85">
                  {country}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
