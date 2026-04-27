"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Smart Temperature Control",
    description: "Innovation",
    image: "/images/DSCF5799.JPG",
  },
  {
    title: "Ultra-Light Carbon Frame",
    description: "Performance",
    image: "/images/DSCN4103.JPG",
  },
  {
    title: "Weather-Resistant Design",
    description: "Durability",
    image: "/images/DSCN4156.JPG",
  },
  {
    title: "Integrated GPS Tracking",
    description: "Navigation",
    image: "/images/DSCN4117.JPG",
  },
  {
    title: "Built-In LED Flashlight",
    description: "Visibility",
    image: "/images/welder.jpg",
  },
  {
    title: "Self-Heating Technology",
    description: "Comfort",
    image: "/images/DSCF5799.JPG",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-fluid-lg text-center md:px-12 lg:px-20">
        <h2 className="text-fluid-4xl font-medium tracking-tight text-foreground text-balance">
          Engineered for Excellence.
          <br />
          Designed for Adventure.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-fluid-sm text-muted-foreground">
          Technology
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
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
