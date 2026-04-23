import Link from "next/link";
import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

const categories = ["General NDT", "Advanced NDT", "Engineering Assessments", "Engineering & Fabrication"];
const services = [
  "NDT Inspection Services",
  "Tank Calibration Services",
  "API 570",
  "API 653",
  "API 510",
  "Phased Array",
  "3D Laser Scanning",
  "RT Radiographic Testing",
  "Dye Penetrant",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        label="Services (/services)"
        title="Our Services Include"
        description="Grouped service coverage for inspection, advanced technologies, certification, and fabrication offerings."
      />
      <Section title="Service Categories">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span key={category} className="rounded-full border px-4 py-2 text-sm">{category}</span>
          ))}
        </div>
      </Section>
      <Section title="Service Cards">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service} href={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="rounded-xl border p-4 hover:bg-secondary/50 transition-colors">
              {service}
            </Link>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
