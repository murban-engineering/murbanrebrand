import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

const technologyCards = [
  "Ultrasonic Testing",
  "Phased Array UT",
  "Risk Assessment",
  "MFL Scanning",
  "Radiographic Testing",
  "Thermal Imaging",
];

const essentialServices = [
  ["3D Laser Scanning", "$1,250+"],
  ["UAV Inspection", "$980+"],
  ["Tank Calibration", "$1,500+"],
  ["Coating Assessment", "$760+"],
  ["PMI Testing", "$640+"],
  ["Pressure Testing", "$1,100+"],
];

export default function HomePage() {
  return (
    <SiteShell>
      <PageIntro
        label="Home (/)"
        title="The Art of Precision"
        description="Engineering excellence crafted with precision for critical infrastructure, inspection programs, and industrial reliability goals."
      />

      <Section title="Hero" description="CTA: Discover Services" />

      <Section title="Engineered for Excellence. Designed for Industry.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCards.map((item) => (
            <article key={item} className="rounded-xl border border-border/70 p-5 text-fluid-base font-medium bg-card">
              {item}
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Technology Meets Industry."
        description="High-performance diagnostics and engineering insight integrated into one dependable delivery model."
      >
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border px-4 py-2">Explore Services</span>
          <span className="rounded-full border px-4 py-2">Watch Demo</span>
          <span className="ml-auto rounded-full bg-secondary px-4 py-2 font-semibold">98% Client Satisfaction</span>
        </div>
      </Section>

      <Section title="Essential Services">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {essentialServices.map(([name, price]) => (
            <div key={name} className="flex items-center justify-between rounded-xl border border-border/70 p-4">
              <span>{name}</span>
              <span className="text-muted-foreground">{price}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Performance Snapshot" description="20+ Years • 6,500+ Completed • 35+ Worldwide • 100% Compliance" />

      <Section title="Project Gallery" description="Storage Tank Inspection • Pipeline Assessment • Offshore Inspection • CTA: View Full Gallery" />

      <Section title="Trusted By" description="TotalEnergies • KenGen • Bolloré • KPC" />

      <Section
        title="Ready to Start Your Project?"
        description="Get in Touch • View All Services"
      />
    </SiteShell>
  );
}
