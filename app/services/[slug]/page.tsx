import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import { ServiceWordReveal } from "@/components/service-word-reveal";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const animatedServiceContent: Record<
  string,
  {
    heading?: string;
    paragraphs: string[];
    advantages: string[];
  }
> = {
  "murban-uav-inspection": {
    paragraphs: [
      "Murban Engineering offers UAV inspection services, providing efficient and cost-effective aerial assessments of assets. Our UAVs are equipped with high-resolution cameras and sensors, allowing us to capture valuable data from hard-to-reach areas.",
      "With our UAV inspection services, you can access comprehensive visual data and reports, enabling informed decision-making for maintenance and asset management.",
    ],
    advantages: [
      "Provides access to hard-to-reach areas, enhancing safety.",
      "Enables quick and efficient inspection, reducing downtime.",
      "Offers high-resolution imaging for detailed analysis.",
      "Allows for comprehensive inspections without disrupting operations.",
    ],
  },
  "ultrasonic-flaw-testing-b-scan": {
    paragraphs: [
      "Our B-scan ultrasonic flaw testing services go beyond traditional methods, allowing us to create detailed corrosion maps of materials and structures.",
      "Murban Engineering's expertise in corrosion mapping ensures precise assessments, enabling targeted maintenance and corrosion mitigation strategies to extend the lifespan and safety of your assets.",
    ],
    advantages: [
      "Provides detailed cross-sectional imaging of materials for defect characterization.",
      "Detects internal defects such as cracks, voids, and inclusions accurately.",
      "Enables precise defect sizing and localization for informed decision-making.",
      "Supports quality control and assurance in manufacturing and maintenance.",
    ],
  },
  "ultrasonic-flaw-testing-c-scan": {
    paragraphs: [
      "Our C-scan ultrasonic flaw testing services go beyond traditional methods, allowing us to create detailed corrosion maps of materials and structures.",
      "Murban Engineering's expertise in corrosion mapping ensures precise assessments, enabling targeted maintenance and corrosion mitigation strategies to extend the lifespan and safety of your assets.",
    ],
    advantages: [
      "Provides detailed corrosion mapping for accurate assessment of asset condition.",
      "Helps prioritize maintenance and repair activities based on severity.",
      "Enables proactive corrosion management to extend asset lifespan.",
      "Supports compliance with regulatory requirements and industry standards.",
    ],
  },
  "utm-ultrasonic-thickness-measurement": {
    paragraphs: [
      "Murban Engineering offers ultrasonic thickness measurement services to assess material thickness and identify thinning in critical components. Our precise measurements help you monitor the integrity of materials and structures, ensuring they meet safety and compliance requirements.",
      "With our expertise, you can address potential thickness-related issues promptly and prevent structural failures.",
    ],
    advantages: [
      "Provides accurate and non-destructive measurement of material thickness.",
      "Helps assess material integrity and identify thinning due to corrosion or erosion.",
      "Enables proactive maintenance planning to prevent structural failures.",
      "Supports compliance with regulatory requirements and industry standards.",
    ],
  },
  "visual-inspection": {
    paragraphs: [
      "Visual inspection is a versatile and essential service offered by Murban Engineering, encompassing a wide range of inspection techniques. Our skilled inspectors conduct thorough visual assessments of equipment, structures, and components to identify defects, wear and tear, or irregularities.",
      "We provide detailed reports and recommendations, enabling you to address issues promptly and maintain the safety and reliability of your assets.",
      "Murban Engineering is committed to delivering comprehensive asset integrity services across a diverse spectrum of industries, ensuring safety, compliance, and operational excellence.",
    ],
    advantages: [
      "Provides a cost-effective method for detecting surface defects and anomalies.",
      "Supports quick and easy identification of visible flaws and irregularities.",
      "Enhances safety by identifying potential hazards such as cracks or leaks.",
      "Supports preventive maintenance and ensures equipment reliability.",
    ],
  },
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const customContent = animatedServiceContent[service.slug];

  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-24 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/#services"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          ← Back to services
        </Link>

        <div className="mt-6 rounded-3xl border border-border/70 bg-card/40 p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {service.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.shortDescription}
          </p>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Service Overview</h2>
            {customContent ? (
              <div className="space-y-4">
                {customContent.paragraphs.map((paragraph, index) => (
                  <ServiceWordReveal
                    key={paragraph}
                    text={paragraph}
                    className="leading-relaxed text-muted-foreground"
                    startDelayMs={index * 280}
                  />
                ))}
              </div>
            ) : (
              <p className="leading-relaxed text-muted-foreground">{service.overview}</p>
            )}
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {customContent ? "Advantages" : "Key Benefits"}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {(customContent?.advantages ?? service.benefits).map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
