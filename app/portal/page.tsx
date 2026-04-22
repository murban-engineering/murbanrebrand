import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { PageHero } from "@/components/sections/page-hero";

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero title="Client Portal" description="Secure portal for project updates, reports, and compliance records." />
      <FooterSection />
    </main>
  );
}
