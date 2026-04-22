"use client";

import Image from "next/image";
import Link from "next/link";

export function TechnologySection() {
  return (
    <section id="industries" className="bg-foreground text-background">
      <div className="grid grid-cols-1 gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:px-20">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Technology Meets Industry.</h2>
          <p className="mt-6 max-w-xl text-background/80">
            Experience industrial inspection reimagined with cutting-edge technology. Our NDT solutions combine
            ultra-precise instrumentation, intelligent analysis, and certified expertise to elevate every assessment.
            From storage tanks to pipelines, your assets are in expert hands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground">
              Explore Services
            </Link>
            <Link href="/gallery" className="rounded-full border border-background/60 px-5 py-3 text-sm font-semibold">
              Watch Demo
            </Link>
          </div>
          <p className="mt-10 text-5xl font-bold">98%</p>
          <p className="text-background/80">Client Satisfaction.</p>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
          <Image src="/images/car.jpg" alt="NDT professionals in field operations" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
