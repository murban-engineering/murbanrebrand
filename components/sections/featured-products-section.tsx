"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    image: "/images/DSCF5799.JPG",
  },
  {
    image: "/images/DSCN4103.JPG",
  },
  {
    image: "/images/DSCN4156.JPG",
  },
  {
    image: "/images/DSCN4117.JPG",
  },
  {
    image: "/images/welder.jpg",
  },
  {
    image: "/images/DSCF5799.JPG",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-fluid-lg text-center md:px-12 lg:px-20">
        <h2 className="text-fluid-4xl font-medium tracking-tight text-foreground text-balance">
          Murban Engineering – NDT & Asset Integrity Services
        </h2>
        <p className="mx-auto mt-6 max-w-md text-fluid-sm text-muted-foreground">
          Technology
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature, index) => (
          <div key={index} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={`Service image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
