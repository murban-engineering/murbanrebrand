"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-fluid-xl md:px-12 lg:px-20">
        <p className="content-wide text-fluid-3xl leading-relaxed text-foreground text-pretty">
          Alpine & Forest accessories combine aerospace-grade materials with cutting-edge technology — 
          designed for explorers who refuse to compromise on quality or performance in the wild.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png"
          alt="Industrial workforce in protective gear"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
