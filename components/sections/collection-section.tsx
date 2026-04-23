"use client";

import { FadeImage } from "@/components/fade-image";

const services = [
  {
    id: 1,
    name: "3D Laser Scanning",
    description: "Precision dimensional analysis and modeling",
    price: "Request Quote",
    image: "/images/accessory-charger.png",
  },
  {
    id: 2,
    name: "UAV Inspection",
    description: "Aerial inspection for hard-to-reach areas",
    price: "Request Quote",
    image: "/images/accessory-sleeve.png",
  },
  {
    id: 3,
    name: "Tank Calibration",
    description: "Accurate volume measurement and certification",
    price: "Request Quote",
    image: "/images/accessory-bike-mount.png",
  },
  {
    id: 4,
    name: "Coating Assessment",
    description: "Surface condition evaluation and testing",
    price: "Request Quote",
    image: "/images/accessory-strap.png",
  },
  {
    id: 5,
    name: "PMI Testing",
    description: "Positive Material Identification services",
    price: "Request Quote",
    image: "/images/accessory-carabiner.png",
  },
  {
    id: 6,
    name: "Pressure Testing",
    description: "Hydrostatic and pneumatic testing services",
    price: "Request Quote",
    image: "/images/accessory-speaker-base.png",
  },
];

export function CollectionSection() {
  return (
    <section id="essential-services" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Essential Services
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {services.map((service) => (
            <div key={service.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {services.map((service) => (
            <div key={service.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <span className="font-medium text-primary text-sm">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
