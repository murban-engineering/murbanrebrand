import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { PageHero } from "@/components/sections/page-hero";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero title="Get a Quote" description="Tell us your scope and receive a tailored inspection proposal." />
      <FooterSection />
    </main>
  );
}
