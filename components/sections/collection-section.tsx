"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Wireless Charging Stand",
    description: "Induction charging dock for effortless power",
    image: "/images/Pipes.JPG",
  },
  {
    id: 2,
    name: "Protective Silicone Sleeve",
    description: "Textured grip sleeve for enhanced durability",
    image: "/images/DSCN4117.JPG",
  },
  {
    id: 3,
    name: "Carbon Fiber Bike Mount",
    description: "Ultra-light mounting system for cycling",
    image: "/images/welder.jpg",
  },
  {
    id: 4,
    name: "Premium Carry Strap",
    description: "Adjustable strap with quick-release clips",
    image: "/images/DSCN4156.JPG",
  },
  {
    id: 5,
    name: "Carabiner Clip System",
    description: "Secure attachment for hands-free carrying",
    image: "/images/magnetic Flux Leakage 1.jpg",
  },
  {
    id: 6,
    name: "Bluetooth Speaker Base",
    description: "High-fidelity audio dock with grip stabilizers",
    image: "/images/0615281f-0698-4990-b2b8-72f600089fd6.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-fluid-md md:px-12 lg:px-20">
        <h2 className="text-fluid-3xl font-medium tracking-tight text-foreground text-balance">
          Essential Accessories
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-fluid-lg font-medium leading-snug text-foreground text-balance">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-fluid-sm text-muted-foreground text-pretty">
                      {accessory.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-fluid-lg font-medium leading-snug text-foreground text-balance">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-fluid-sm text-muted-foreground text-pretty">
                      {accessory.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
