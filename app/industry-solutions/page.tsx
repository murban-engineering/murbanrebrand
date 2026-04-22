import { Header } from "@/components/header";

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
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-16">
        <p className="text-sm uppercase text-muted-foreground">Industry Solutions</p>
        <h1 className="text-4xl font-bold mt-2">Industry Solutions</h1>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {industries.map((industry) => (
            <article className="border rounded-xl p-5" key={industry}>{industry}</article>
          ))}
        </div>
      </section>
    </main>
  );
}
