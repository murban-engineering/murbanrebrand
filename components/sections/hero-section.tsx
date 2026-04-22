"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-background pt-32">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt="Industrial inspection environment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 px-6 pb-24 md:px-12 lg:px-20">
        <div className="mb-8 flex flex-wrap gap-4 text-sm text-white/80">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-white/80">Inspection / Engineering 2026</p>
        <p className="mt-6 text-2xl font-medium text-white md:text-3xl">MURBAN</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">The Art of Precision</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
          Engineering excellence crafted with precision. Where expertise meets modern industrial refinement.
        </p>
        <Link
          href="/services"
          className="mt-10 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Discover Services
        </Link>
      </div>
    </section>
  );
}
