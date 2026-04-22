import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { PageHero } from "@/components/sections/page-hero";
import { TechnologySection } from "@/components/sections/technology-section";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero title="Industries" description="Inspection and integrity programs for energy, marine, pipeline, and industrial sectors." />
      <TechnologySection />
      <FooterSection />
    </main>
  );
}
