"use client";

import Image from "next/image";

const africanCountries = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "Uganda",
  "Tanzania",
  "Angola",
  "Namibia",
  "South Africa",
  "Mozambique",
  "Egypt",
];

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-fluid-xl md:px-12 lg:px-20">
        <p className="content-wide text-fluid-3xl leading-relaxed text-foreground text-pretty">
          Murban Engineering specializes in Asset Integrity, Inspection, and Non-Destructive Testing.
          We deliver safe, reliable inspection solutions for critical infrastructure across oil &amp; gas,
          energy, marine, and industrial operations.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png"
          alt="Murban Engineering inspection team onsite"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Company Profile + Where We Work */}
      <div className="px-6 py-fluid-lg md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Company Profile</p>
            <h3 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Murban Engineering
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Murban Engineering is a specialist firm in Asset Integrity, Inspection, and
              Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that
              support critical infrastructure in the oil &amp; gas, energy, marine, and industrial sectors.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              With over 20 years of experience, we operate across Africa. Our services help clients
              extend asset life, ensure regulatory compliance, and minimize downtime.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Where We Work</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/africa-map.svg"
                alt="Map of Africa with highlighted countries where Murban Engineering operates"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Countries shown on the map: {africanCountries.join(", ")}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
