import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { PageHero } from "@/components/sections/page-hero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        title="About"
        description="Murban Engineering is a specialist firm in Asset Integrity, Inspection, and NDT across Africa."
      />
      <FooterSection />
    </main>
  );
}
