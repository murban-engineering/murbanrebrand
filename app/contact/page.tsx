import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { PageHero } from "@/components/sections/page-hero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        title="Contact"
        description="Reach Murban Engineering at info@murban-eng.com or +254 20 265 0618."
      />
      <FooterSection />
    </main>
  );
}
