import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { services } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-10">
        <span className="inline-flex px-3 py-1 rounded-full border text-sm">{service.category}</span>
        <h1 className="text-4xl font-bold mt-4">{service.title}</h1>
        <p className="mt-4 text-muted-foreground">{service.description}</p>
        <div className="flex gap-3 mt-6">
          <Link href="/services" className="rounded-full border px-5 py-2.5">Back to services</Link>
          <Link href="/contact" className="rounded-full bg-primary text-primary-foreground px-5 py-2.5">Discuss your project</Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6">
        <article className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Detailed Scope</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
            {service.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
        <article className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Related Services</h2>
          <ul className="mt-4 space-y-2">
            {service.related.map((item) => (
              <li key={item.slug}>
                <Link className="underline" href={`/services/${item.slug}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
