"use client";

const specs = [
  { label: "Experience", value: "20+ Years" },
  { label: "Completed Projects", value: "6,500+" },
  { label: "Worldwide Countries", value: "35+" },
  { label: "Compliance Certifications", value: "100%" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-2 border-y border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div key={spec.label} className="border-r border-border p-6 text-center last:border-r-0 md:p-10">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">{spec.label}</p>
            <p className="mt-3 text-3xl font-semibold md:text-4xl">{spec.value}</p>
          </div>
        ))}
      </div>

      <div className="px-6 py-14 md:px-12 lg:px-20">
        <p className="max-w-5xl text-2xl leading-relaxed md:text-3xl">
          Murban Engineering combines aerospace-grade precision with cutting-edge NDT technology — designed for
          operators who refuse to compromise on safety or performance in critical infrastructure.
        </p>
      </div>
    </section>
  );
}
