import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { PageHero } from "@/components/sections/page-hero";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { CollectionSection } from "@/components/sections/collection-section";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero title="Services" description="Comprehensive NDT and engineering solutions designed for critical infrastructure." />
      <FeaturedProductsSection />
      <CollectionSection />
      <FooterSection />
    </main>
  );
}
