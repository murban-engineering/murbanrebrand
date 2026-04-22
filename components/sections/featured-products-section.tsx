"use client";

const features = [
  {
    title: "Precision — Ultrasonic Testing",
    description: "Advanced UT techniques for internal flaw detection",
  },
  {
    title: "Innovation — Phased Array UT",
    description: "Multi-element probes for complex geometry scanning",
  },
  {
    title: "Safety — Risk Assessment",
    description: "API 579/580 fitness-for-service evaluations",
  },
  {
    title: "Analysis — MFL Scanning",
    description: "Magnetic flux leakage for tank floor mapping",
  },
  {
    title: "Detection — Radiographic Testing",
    description: "X-ray and gamma imaging for weld inspection",
  },
  {
    title: "Monitoring — Thermal Imaging",
    description: "Infrared surveys for temperature anomalies",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="services" className="bg-background px-6 py-20 md:px-12 lg:px-20">
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
        Engineered for Excellence.
        <br />
        Designed for Industry.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-border p-6">
            <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
