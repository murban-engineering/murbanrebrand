"use client";

import Link from "next/link";

export function PhilosophySection() {
  return (
    <section className="bg-foreground px-6 py-20 text-background md:px-12 lg:px-20">
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Ready to Start Your Project?</h2>
      <p className="mt-5 max-w-3xl text-background/85">
        Let’s discuss how we can support your asset integrity and inspection needs across Africa.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/contact" className="rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground">
          Get in Touch
        </Link>
        <Link href="/services" className="rounded-full border border-background/60 px-5 py-3 text-sm font-semibold">
          View All Services
        </Link>
      </div>
    </section>
  );
}
