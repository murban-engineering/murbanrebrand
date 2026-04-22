"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "API 653 — Storage Tank Inspection", image: "/images/bottle-water.png" },
  { title: "API 570 — Pipeline Assessment", image: "/images/bottle-stream.png" },
  { title: "Marine NDT — Offshore Inspection", image: "/images/bottle-lake.png" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background px-6 py-20 md:px-12 lg:px-20">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">Project Gallery</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Our Work in the Field</h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-border">
            <div className="relative h-56">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <p className="p-5 text-lg font-medium">{project.title}</p>
          </article>
        ))}
      </div>

      <Link href="/gallery" className="mt-8 inline-flex text-sm font-semibold underline underline-offset-4">
        View Full Gallery
      </Link>
    </section>
  );
}
