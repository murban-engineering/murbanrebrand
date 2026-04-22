import Link from "next/link";
import { Header } from "@/components/header";
import { serviceCategories, services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-10">
        <p className="text-sm uppercase text-muted-foreground">Our Services Include</p>
        <h1 className="text-4xl font-bold mt-2">Inspection, Engineering, and Certification Solutions</h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8 flex flex-wrap gap-2">
        {serviceCategories.map((category) => (
          <span key={category} className="px-3 py-1 rounded-full border text-sm">{category}</span>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <article key={service.slug} className="border rounded-xl p-5">
            <p className="text-xs uppercase text-muted-foreground">{service.category}</p>
            <h2 className="text-xl font-semibold mt-1">{service.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
            <Link href={`/services/${service.slug}`} className="inline-block mt-4 underline">
              View details
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
