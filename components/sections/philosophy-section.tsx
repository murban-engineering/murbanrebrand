"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const serviceCategories = [
  "General NDT",
  "Advanced NDT",
  "Engineering Assessments",
  "Engineering & Fabrication",
];

const serviceItems = [
  "NDT Inspection Services — Full-scope Non-Destructive Testing coverage tailored to your assets and regulations.",
  "Tank Calibration Services — Accurate volume measurement and tank calibration across all storage configurations.",
  "API 570 Piping Inspection and Certification — Piping system inspection for code compliance.",
  "API 653 Aboveground Storage Tank Inspection and Certification — Tank integrity inspections that deliver official API 653 certification and reporting.",
  "API 510 Pressure Vessel Inspection — Pressure vessel safety verification with detailed API 510 compliance documentation.",
  "Ultrasonic Flaw Testing C-Scan — Detailed flaw mapping using advanced ultrasonic C-scan imaging techniques.",
  "Ultrasonic Flaw Testing B-Scan — Internal defect detection and profiling delivered through precision B-scan testing.",
  "Magnetic Particle Testing — Surface flaw detection using powerful magnetic particle inspection methods.",
  "Fluorescent Magnet Particle Testing — Crack detection enhanced with fluorescent indicators and ultraviolet inspection.",
  "Dye Penetrant Testing — Critical PT inspections that reveal surface flaws and discontinuities for safer, more reliable asset performance.",
  "RT Radiographic Services — High-resolution radiographic imaging that uncovers hidden discontinuities without interrupting service.",
  "Paint & Coating Inspection — Checking protective coating thickness and quality to extend asset life.",
  "Positive Material Identification Testing — Verify alloy composition quickly with positive material identification technology.",
  "Murban Phased Array Testing — Advanced phased array ultrasonics for complex geometry and high-resolution flaw detection.",
  "3D Laser Scanning Services — High-accuracy spatial data capture for asset management, design planning, and facility maintenance.",
  "Thermal Camera Inspection — Thermal imaging surveys that uncover temperature anomalies and emerging issues before they escalate.",
  "Alternating Current Field Measurement — Advanced electromagnetic inspection that detects and sizes surface cracks with exceptional accuracy.",
  "API 579 Murban Fitness for Service — API 579-based integrity assessments that uncover defects, document risk, and guide repair or replacement decisions.",
  "API 580 Murban Risk Based Inspection — Risk-based inspection strategies prioritizing safety-critical assets and intervals.",
  "Boiler Inspection Services — Thorough inspections that keep boiler systems safe, efficient, and compliant.",
  "Lifting Equipment Thorough Examination and Certification — Safe lifting equipment checks paired with formal certification packages.",
  "Murban Gas Detection — Comprehensive monitoring solutions that detect hazardous gases early and keep worksites compliant.",
  "Murban Pressure Testing — Verify system strength and tightness through controlled pressure testing.",
  "Floormap 3D MFL Scanning — 3D magnetic flux leakage scanning that pinpoints tank floor defects with precision.",
  "Sphere Tank Inspections — Inspection of spherical tanks with detailed structural and safety reporting.",
  "Surface Hardness Testing — Measuring metal surface strength to validate fabrication quality and wear resistance.",
  "Murban UAV Inspection — Aerial inspection using drone-based technology to access challenging environments.",
  "Detailed Engineering — Comprehensive technical plans and documentation.",
  "Procurement — Sourcing materials for project execution.",
  "Fabrication — Precision cutting, welding, and assembly services.",
  "Construction and Erection — Safe, code-compliant erection of steel structures, pipelines, and storage tanks.",
  "Specialized Welding — Certified TIG, MIG, SMAW, and SAW welding that safeguards structural integrity.",
  "Surface Preparation and Paint Works — Surface cleaning and industrial paint coating.",
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
    
    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    // Alpine comes from left (-100% to 0%)
    setAlpineTranslateX((1 - progress) * -100);
    
    // Forest comes from right (100% to 0%)
    setForestTranslateX((1 - progress) * 100);
    
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
    <section id="products" className="bg-background">
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
                Meet Alpine & Forest.
              </h2>
            </div>

            {/* Product Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Alpine Image - comes from left */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/product-backpack.png"
                  alt="Field technician backpack kit"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Alpine $299
                  </span>
                </div>
              </div>

              {/* Forest Image - comes from right */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/product-forest.png"
                  alt="Technical field gear setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Forest $199
                  </span>
                </div>
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
              General NDT • Advanced NDT • Engineering Assessments • Engineering & Fabrication
            </p>
            <h3 className="mt-4 text-fluid-4xl font-medium text-foreground text-balance">
              Precision Inspection & Engineering Services
            </h3>
            <p className="mt-6 leading-relaxed text-muted-foreground text-fluid-xl text-balance">
              Comprehensive Non-Destructive Testing and Advanced NDT support to keep critical infrastructure running at peak performance.
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
            {serviceItems.map((service) => {
              const [title, description] = service.split(" — ");

              return (
                <article
                  key={title}
                  className="rounded-2xl border border-border/70 bg-card/40 p-4 md:p-5"
                >
                  <div className="mb-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Image Placeholder
                  </div>
                  <h4 className="text-base font-medium text-foreground">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
