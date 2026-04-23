import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

const industries = [
  "Oil & Gas Industry",
  "Power & Steam Generation",
  "Storage & Logistics Terminals",
  "Food Processing Industry",
  "Renewable Energy & Geothermal",
  "Rail Industry",
  "Shipping & Marine Industry",
];

export default function IndustrySolutionsPage() {
  return (
    <SiteShell>
      <PageIntro label="Industry Solutions (/industry-solutions)" title="Industry Solutions" description="Targeted programs engineered around the operational realities of each sector." />
      <Section title="Covered Industries">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="rounded-xl border p-4">{industry}</div>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
