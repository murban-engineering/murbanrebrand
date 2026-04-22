"use client";

const services = [
  { name: "3D Laser Scanning", detail: "High-accuracy spatial data capture", price: "$3,200" },
  { name: "UAV Inspection", detail: "Aerial inspection for hard-to-reach areas", price: "$2,800" },
  { name: "Tank Calibration", detail: "Precise volumetric measurement", price: "$1,500" },
  { name: "Coating Assessment", detail: "Paint thickness and quality testing", price: "$800" },
  { name: "PMI Testing", detail: "Positive material identification", price: "$1,200" },
  { name: "Pressure Testing", detail: "System integrity verification", price: "$2,000" },
];

export function CollectionSection() {
  return (
    <section className="bg-background px-6 py-20 md:px-12 lg:px-20">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">Essential Services</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Comprehensive inspection solutions for every need</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl border border-border p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-2 text-muted-foreground">{service.detail}</p>
              </div>
              <p className="text-lg font-semibold">{service.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
