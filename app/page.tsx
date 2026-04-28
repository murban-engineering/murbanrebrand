import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TrustedLeadersSection } from "@/components/sections/trusted-leaders-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { FooterSection } from "@/components/sections/footer-section";
import { ResetHomeOnLoad } from "@/components/reset-home-on-load";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ResetHomeOnLoad />
      <Header />
      <HeroSection />
      <TrustedLeadersSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <FooterSection />
    </main>
  );
}
