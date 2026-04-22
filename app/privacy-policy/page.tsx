import { Header } from "@/components/header";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-16">
        <h1 className="text-4xl font-bold">Privacy & Policy</h1>
        <p className="text-muted-foreground mt-2">Protecting your information and building trust</p>
        <div className="mt-8 space-y-5">
          {[
            "Information we collect",
            "How we use your data",
            "Your privacy choices",
            "Staying informed",
            "Need more details?",
          ].map((section) => (
            <article key={section} className="border rounded-xl p-5">
              <h2 className="font-semibold">{section}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
