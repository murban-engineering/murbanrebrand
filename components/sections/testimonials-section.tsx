"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-fluid-xl md:px-12 lg:px-20">
        <p className="content-wide text-fluid-3xl leading-relaxed text-foreground text-pretty">
          About Murban Engineering
          <br />
          Specialist in Asset Integrity, Inspection, and Non-Destructive Testing.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/3d4046a0-b072-4b07-941f-9141ee3ed4a7.png"
          alt="Mountain peaks at sunrise"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="px-6 pb-fluid-xl md:px-12 lg:px-20">
        <div className="content-wide space-y-6 text-foreground">
          <h3 className="text-2xl font-semibold md:text-3xl">Company Profile</h3>
          <p className="text-base leading-relaxed text-pretty md:text-lg">
            Murban Engineering is a specialist firm in Asset Integrity, Inspection, and Non-Destructive
            Testing (NDT). We deliver reliable and safe inspection solutions that support critical
            infrastructure in the oil & gas, energy, marine, and industrial sectors.
          </p>
          <p className="text-base leading-relaxed text-pretty md:text-lg">
            With over 20 years of experience, we operate across Africa. Our services help clients extend
            asset life, ensure regulatory compliance, and minimize downtime.
          </p>
        </div>
      </div>
    </section>
  );
}
