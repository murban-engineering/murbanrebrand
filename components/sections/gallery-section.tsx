"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    { src: "/images/DSCF5799.JPG", alt: "Industrial plant view" },
    { src: "/images/Pipes.JPG", alt: "Industrial piping systems" },
    { src: "/images/DSCN4103.JPG", alt: "Refinery operations" },
    { src: "/images/DSCN4117.JPG", alt: "Industrial silos complex" },
    { src: "/images/DSCN4156.JPG", alt: "Modern industrial facility" },
    { src: "/images/0615281f-0698-4990-b2b8-72f600089fd6.jpg", alt: "Modern factory building" },
    { src: "/images/welder.jpg", alt: "Pipeline construction work" },
    { src: "/images/magnetic Flux Leakage 1.jpg", alt: "Storage tank farm" },
  ];

  const calculateHeight = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const totalScrollDistance = Math.max(0, containerWidth - viewportWidth);

    setSectionHeight(`${viewportHeight + totalScrollDistance}px`);
  }, []);

  const updateTransform = useCallback(() => {
    if (!galleryRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const totalScrollDistance = Math.max(0, containerWidth - viewportWidth);

    if (totalScrollDistance === 0) {
      setTranslateX(0);
      return;
    }

    const sectionTop = galleryRef.current.offsetTop;
    const scrolledInSection = window.scrollY - sectionTop;
    const clamped = Math.max(0, Math.min(scrolledInSection, totalScrollDistance));

    setTranslateX(-clamped);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateHeight();
      updateTransform();
    }, 50);

    const resizeObserver = new ResizeObserver(() => {
      calculateHeight();
      updateTransform();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", calculateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
      resizeObserver.disconnect();
    };
  }, [calculateHeight, updateTransform]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  return (
    <section
      id="our-projects"
      ref={galleryRef}
      className="relative bg-background"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          <div
            ref={containerRef}
            className="flex gap-6 px-6"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              perspective: 1000,
              WebkitPerspective: 1000,
              touchAction: "pan-y",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl border border-primary/20 bg-foreground/10 md:w-[60vw] lg:w-[45vw]"
                style={{
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index < 2}
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
