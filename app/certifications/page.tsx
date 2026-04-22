import { Header } from "@/components/header";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-16">
        <h1 className="text-4xl font-bold">Certifications & Compliance</h1>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {["API Q1 Specification", "ISO 9001:2015", "ASME Certification", "ISO and additional industry certifications"].map((item) => (
            <article key={item} className="border rounded-xl p-5">{item}</article>
          ))}
        </div>
      </section>
    </main>
  );
}
