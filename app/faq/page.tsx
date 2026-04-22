import { Header } from "@/components/header";

export default function FaqPage() {
  const faqItems = [
    "What services fall under Murban Inspection Services?",
    "How does Murban Engineering Services support projects?",
    "Do you offer on-site training?",
    "How can I request a proposal?",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-16">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="text-muted-foreground mt-2">Answers to common questions</p>
        <div className="mt-8 space-y-3">
          {faqItems.map((q) => (
            <article key={q} className="border rounded-xl p-5">{q}</article>
          ))}
        </div>
      </section>
    </main>
  );
}
