"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const sideImages = [
  {
    src: "/new1.jpg",
    alt: "Industrial facility overview",
    position: "left",
    span: 1,
  },
  {
    src: "/new2.jpg",
    alt: "Industrial operations site",
    position: "left",
    span: 1,
  },
  {
    src: "/new3.JPG",
    alt: "Plant and pipeline infrastructure",
    position: "right",
    span: 1,
  },
  {
    src: "/new4.jpg",
    alt: "Industrial storage and processing",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));
  
  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  // Smooth interpolations
  const centerWidth = 100 - (imageProgress * 58); // 100% to 42%
  const centerHeight = 100 - (imageProgress * 30); // 100% to 70%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px
  
  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * 15); // Move up by 15% when fully expanded

  return (
    <section id="home" ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div 
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px`, paddingBottom: `${60 + (imageProgress * 40)}px` }}
          >
            
            {/* Left Column */}
            <div 
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div 
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/images/hero-industrial.jpg"
                alt="Industrial storage tanks with safety railings and piping"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay Text - Fades out first */}
              <div 
                className="absolute inset-0 flex items-end md:items-end overflow-hidden"
                style={{ opacity: textOpacity }}
              >
                <div className="w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent px-6 pb-20 pt-20 text-white md:px-12 md:pb-14 md:pt-24 lg:px-16">
                  <h1 className="murban-engineering-wordmark text-4xl leading-tight md:text-6xl">
                    <span className="block uppercase text-[#C82032]">MURBAN</span>
                    <span className="block uppercase text-[#213164] tracking-[0.2em] text-2xl md:text-4xl">ENGINEERING LTD</span>
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
                    A specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions for oil & gas, energy, marine, and industrial sectors across Africa.
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

            {/* Right Column */}
            <div 
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />

      {/* Tagline Section */}
      <div className="px-6 pt-32 pb-28 md:pt-48 md:px-12 md:pb-36 lg:px-20 lg:pt-56 lg:pb-44">
        <p className="mx-auto max-w-2xl text-center text-2xl leading-relaxed text-muted-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          ISO 9001:2015
          <br />
          Operating since 2007
          <br />
          Certified ASNT SNT-TC-1A
          <br />
          Level II Technicians
        </p>
      </div>
    </section>
  );
}
