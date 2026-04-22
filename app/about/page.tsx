import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-16">
        <p className="text-sm uppercase text-muted-foreground">About Us</p>
        <h1 className="text-4xl font-bold mt-2">About Murban</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Since 2007, Murban has supported critical infrastructure with inspection, integrity, and engineering services focused on safety, reliability, and compliance.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12 grid md:grid-cols-4 gap-4">
        {[
          "20+ Years Experience",
          "35+ Countries",
          "500+ Projects Annually",
          "100% Safety Compliance",
        ].map((item) => (
          <div key={item} className="border rounded-xl p-5 font-medium">{item}</div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold">Company Profile</h2>
          <p className="mt-3 text-muted-foreground">We operate through two divisions:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
            <li>Murban Inspection Services</li>
            <li>Murban Engineering Services</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold">Where We Work</h2>
          <p className="mt-3 text-muted-foreground">
            We serve projects across Africa with regional response capability for inspections, audits, and integrity support.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-4">
        {[
          ["Purpose", "Deliver trusted engineering assurance for high-value assets."],
          ["Vision", "Be Africa's most dependable industrial integrity partner."],
          ["Mission", "Protect people, environment, and operations through precision work."],
        ].map(([title, body]) => (
          <article key={title} className="border rounded-xl p-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-muted-foreground mt-2">{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
