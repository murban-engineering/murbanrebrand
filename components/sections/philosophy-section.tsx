"use client";

import Image from "next/image";
import { getServiceImageForTitle } from "@/lib/service-images";
import { ServiceLink } from "@/components/service-navigation-state";
import { useEffect, useRef, useState, useCallback } from "react";
import { serviceCategories, services } from "@/lib/services";
import { TestimonialsSection } from "./testimonials-section";

const technologyTrainingPartnerLogos = [
  "/images/Screenshot 2026-04-27 203523.png",
  "/images/Screenshot 2026-04-27 203527.png",
  "/images/Screenshot 2026-04-27 203532.png",
  "/images/Screenshot 2026-04-27 203536.png",
  "/images/Screenshot 2026-04-27 203541.png",
  "/images/Screenshot 2026-04-27 203545.png",
  "/images/Screenshot 2026-04-27 203549.png",
  "/images/Screenshot 2026-04-27 203554.png",
];

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

  const categoryId = (value: string) =>
    `services-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")}`;

  return (
    <section id="company-profile" className="bg-background">
      {/* Scroll-Animated Product Grid */}
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <div className="px-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary sm:text-base">
                  Why choose us
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  What sets us apart
                </h2>
                <p className="mt-5 text-base font-medium text-foreground/90 sm:text-lg md:text-xl">
                  Signature Delivery Experience, Data-Driven Decisions, Sustainability by Design
                </p>
              </div>
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
                  src="/new5.jpg"
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
                  src="/new6.jpg"
                  alt="Technical field gear setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialsSection />

      {/* Description */}
      <div
        id="services"
        className="relative overflow-hidden px-6 py-fluid-lg md:px-12 lg:px-20"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(100deg, hsl(var(--foreground)/0.96) 0%, hsl(var(--foreground)/0.92) 58%, hsl(var(--background)) 58.4%, hsl(var(--background)) 100%)",
          }}
        />
        <div className="content-wide relative z-10 mx-auto text-foreground">
          <div className="text-center">
            <h3 className="murban-engineering-wordmark text-fluid-4xl font-medium !text-black text-balance">
              <span className="block lowercase">murban</span>
              <span className="block uppercase">engineering</span>
            </h3>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-medium tracking-wide text-foreground/75"
              >
                {category}
              </span>
            ))}
          </div>


          <div className="mt-14">
            <h4 className="text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              TECHNOLOGY AND TRAINING PARTNERS
            </h4>

            <div className="relative mt-8 overflow-hidden">
              <div className="trusted-marquee">
                {[...technologyTrainingPartnerLogos, ...technologyTrainingPartnerLogos].map((logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="flex h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6"
                  >
                    <Image
                      src={logo}
                      alt="Technology and training partner logo"
                      width={180}
                      height={70}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {serviceCategories.map((category) => (
            <div key={category} id={categoryId(category)} className="mt-12">
              <h4 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {category}
              </h4>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {services
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <ServiceLink
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      prefetch={true}
                      className="rounded-2xl border border-border bg-card p-4 md:p-5 transition-colors hover:border-primary/40 hover:bg-card/90"
                    >
                      <article>
                        <div className="mb-4 overflow-hidden rounded-xl border border-border bg-muted/20">
                          {getServiceImageForTitle(service.title) ? (
                            <Image
                              src={getServiceImageForTitle(service.title)!}
                              alt={`${service.title} service image`}
                              width={800}
                              height={420}
                              className="h-24 w-full object-cover" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="flex h-24 items-center justify-center border border-dashed border-border bg-muted/30 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                              Image Placeholder
                            </div>
                          )}
                        </div>
                        <h4 className="text-base font-medium text-foreground">{service.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {service.shortDescription}
                        </p>
                      </article>
                    </ServiceLink>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
