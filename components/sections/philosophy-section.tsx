"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { serviceCategories, services } from "@/lib/services";

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [leftImageTranslateX, setLeftImageTranslateX] = useState(-100);
  const [rightImageTranslateX, setRightImageTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    // Left image comes from left (-100% to 0%)
    setLeftImageTranslateX((1 - progress) * -100);
    
    // Right image comes from right (100% to 0%)
    setRightImageTranslateX((1 - progress) * 100);
    
    // Title fades out as blocks come together
    setTitleOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
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
      {/* Scroll-Animated Product Grid */}
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[12vw] font-medium leading-[0.95] tracking-tighter text-foreground md:text-[10vw] lg:text-[8vw] text-center px-6">
                Company Profile
                Engineered Field Solutions.
              </h2>
            </div>

            {/* Product Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Left image - comes from left */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${leftImageTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${leftImageTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/e2c9980a37088c7b40c2e03e40fbd666_f250.jpg"
                  alt="Field technician backpack kit"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right image - comes from right */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${rightImageTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${rightImageTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/WhatsApp Image 2019-02-22 at 18.08.49 (1).jpeg"
                  alt="Technical field gear setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div id="services" className="px-6 py-fluid-lg md:px-12 lg:px-20">
        <div className="content-wide mx-auto">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Company Profile
            </p>
            <h3 className="mt-4 text-fluid-4xl font-medium text-foreground text-balance">
              Murban Engineering
            </h3>
            <p className="mt-6 leading-relaxed text-muted-foreground text-fluid-xl text-balance">
              Murban Engineering is a specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that support critical infrastructure in the oil & gas, energy, marine, and industrial sectors.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-border/70 bg-card/40 p-4 md:p-5 transition-colors hover:border-primary/40 hover:bg-card/70"
              >
                <article>
                  <div className="mb-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Image Placeholder
                  </div>
                  <h4 className="text-base font-medium text-foreground">{service.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
