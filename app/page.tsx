import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { essentialServices, technologyFeatures } from "@/lib/site-data";

const stats = [
  { label: "20+ Years", value: "Industry Experience" },
  { label: "6,500+ Completed", value: "Assignments Delivered" },
  { label: "35+ Worldwide", value: "Countries Served" },
  { label: "100% Compliance", value: "Safety and Standards" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="relative min-h-[80vh] flex items-center px-6 pt-36 pb-16">
        <Image src="/images/hero-industrial.jpg" alt="Industrial site" fill className="object-cover -z-10" />
        <div className="absolute inset-0 bg-black/55 -z-10" />
        <div className="mx-auto max-w-6xl w-full">
          <p className="text-white/80 mb-3">Murban Engineering</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">The Art of Precision</h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Engineering excellence crafted with precision for mission-critical assets across the energy and industrial sectors.
          </p>
          <Link href="/services" className="inline-block mt-8 rounded-full bg-white text-black px-6 py-3 font-medium">
            Discover Services
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Engineered for Excellence. Designed for Industry.</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {technologyFeatures.map((feature) => (
            <article key={feature} className="border rounded-2xl p-5 bg-card">
              <h3 className="font-semibold">{feature}</h3>
              <p className="text-sm text-muted-foreground mt-2">Advanced field-ready execution with traceable reporting.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">Technology Meets Industry.</h2>
          <p className="text-muted-foreground mt-4">
            We combine high-accuracy diagnostics with practical engineering workflows to keep your operations safe, compliant, and efficient.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/services" className="rounded-full bg-primary text-primary-foreground px-5 py-2.5">Explore Services</Link>
            <button className="rounded-full border px-5 py-2.5">Watch Demo</button>
          </div>
          <p className="mt-6 text-xl font-semibold">98% Client Satisfaction</p>
        </div>
        <div className="relative h-72 rounded-2xl overflow-hidden border">
          <Image src="/images/hero-main.png" alt="Technology visualization" fill className="object-cover" />
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Essential Services</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {essentialServices.map((service) => (
            <div key={service.name} className="border rounded-xl px-4 py-3 flex items-center justify-between">
              <span>{service.name}</span>
              <span className="text-sm text-muted-foreground">{service.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <article key={stat.label} className="border rounded-xl p-5 bg-background">
                <h3 className="text-2xl font-bold">{stat.label}</h3>
                <p className="text-muted-foreground mt-2">{stat.value}</p>
              </article>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 max-w-3xl">
            Our team delivers dependable inspection and engineering programs with strong quality systems that protect people, infrastructure, and production uptime.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Project Gallery</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {["Storage Tank Inspection", "Pipeline Assessment", "Offshore Inspection"].map((item) => (
            <article key={item} className="rounded-xl border p-5">
              <h3 className="font-semibold">{item}</h3>
            </article>
          ))}
        </div>
        <Link href="/project-gallery" className="inline-block mt-6 underline">View Full Gallery</Link>
      </section>

      <section className="px-6 py-10 max-w-6xl mx-auto">
        <p className="text-sm uppercase text-muted-foreground">Trusted by</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {["TotalEnergies", "KenGen", "Bolloré", "KPC"].map((logo) => (
            <div key={logo} className="border rounded-xl p-4 text-center font-medium">{logo}</div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <blockquote className="border rounded-xl p-5">“Consistent technical quality and responsive reporting.”</blockquote>
          <blockquote className="border rounded-xl p-5">“Murban helped us deliver inspections safely and on time.”</blockquote>
        </div>
        <div className="rounded-2xl border mt-10 p-8 bg-muted/20">
          <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link href="/contact" className="rounded-full bg-primary text-primary-foreground px-5 py-2.5">Get in Touch</Link>
            <Link href="/services" className="rounded-full border px-5 py-2.5">View All Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
