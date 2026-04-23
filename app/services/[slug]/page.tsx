import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

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
            <p className="leading-relaxed text-muted-foreground">{service.overview}</p>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Key Benefits</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
