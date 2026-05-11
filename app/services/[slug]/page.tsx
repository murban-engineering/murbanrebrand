import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import { ServiceWordReveal } from "@/components/service-word-reveal";
import { getServiceImageForTitle } from "@/lib/service-images";
import { ServiceDetailBackButton } from "@/components/service-navigation-state";

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
      "MURBAN ENGINEERING LTD offers UAV inspection services, providing efficient and cost-effective aerial assessments of assets. Our UAVs are equipped with high-resolution cameras and sensors, allowing us to capture valuable data from hard-to-reach areas.",
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
      "MURBAN ENGINEERING LTD's expertise in corrosion mapping ensures precise assessments, enabling targeted maintenance and corrosion mitigation strategies to extend the lifespan and safety of your assets.",
    ],
    advantages: [
      "Provides detailed cross-sectional imaging of materials for defect characterisation.",
      "Detects internal defects such as cracks, voids, and inclusions accurately.",
      "Enables precise defect sizing and localisation for informed decision-making.",
      "Supports quality control and assurance in manufacturing and maintenance.",
    ],
  },
  "ultrasonic-flaw-testing-c-scan": {
    paragraphs: [
      "Our C-scan ultrasonic flaw testing services go beyond traditional methods, allowing us to create detailed corrosion maps of materials and structures.",
      "MURBAN ENGINEERING LTD's expertise in corrosion mapping ensures precise assessments, enabling targeted maintenance and corrosion mitigation strategies to extend the lifespan and safety of your assets.",
    ],
    advantages: [
      "Provides detailed corrosion mapping for accurate assessment of asset condition.",
      "Helps prioritise maintenance and repair activities based on severity.",
      "Enables proactive corrosion management to extend asset lifespan.",
      "Supports compliance with regulatory requirements and industry standards.",
    ],
  },
  "utm-ultrasonic-thickness-measurement": {
    paragraphs: [
      "MURBAN ENGINEERING LTD offers ultrasonic thickness measurement services to assess material thickness and identify thinning in critical components. Our precise measurements help you monitor the integrity of materials and structures, ensuring they meet safety and compliance requirements.",
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
      "Visual inspection is a versatile and essential service offered by MURBAN ENGINEERING LTD, encompassing a wide range of inspection techniques. Our skilled inspectors conduct thorough visual assessments of equipment, structures, and components to identify defects, wear and tear, or irregularities.",
      "We provide detailed reports and recommendations, enabling you to address issues promptly and maintain the safety and reliability of your assets.",
      "MURBAN ENGINEERING LTD is committed to delivering comprehensive asset integrity services across a diverse spectrum of industries, ensuring safety, compliance, and operational excellence.",
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
  const serviceImage = getServiceImageForTitle(service.title);


  return (
    <main className="min-h-screen bg-[linear-gradient(125deg,_#213164_0%,_#213164_58%,_#A60D0F_58%,_#A60D0F_100%)] px-6 pb-20 pt-24 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-5xl">
        <ServiceDetailBackButton className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white hover:underline" />

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/20 bg-black/25 shadow-2xl backdrop-blur-sm">
          {serviceImage ? (
            <Image
              src={serviceImage}
              alt={`${service.title} service image`}
              width={1600}
              height={500}
              className="h-56 w-full object-cover md:h-72"
              priority
              fetchPriority="high"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 1200px"
              quality={70}
            />
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-white/10 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 md:h-72">
              Service Image
            </div>
          )}
          <div className="grid gap-8 p-6 md:grid-cols-[1.25fr_0.75fr] md:p-10">
            <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
            {service.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            {service.shortDescription}
          </p>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-white">Service Overview</h2>
            {customContent ? (
              <div className="space-y-4">
                {customContent.paragraphs.map((paragraph, index) => (
                  <ServiceWordReveal
                    key={paragraph}
                    text={paragraph}
                    className="leading-relaxed text-white/85"
                    startDelayMs={index * 280}
                  />
                ))}
              </div>
            ) : (
              <p className="leading-relaxed text-white/85">{service.overview}</p>
            )}
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-white">
              {customContent ? "Advantages" : "Key Benefits"}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-white/90">
              {(customContent?.advantages ?? service.benefits).map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>
            </div>
            <aside className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white/90">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Service Category</p>
              <p className="mt-2 text-lg font-semibold text-white">{service.category}</p>
              <p className="mt-5 text-sm leading-relaxed text-white/85">{service.shortDescription}</p>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
