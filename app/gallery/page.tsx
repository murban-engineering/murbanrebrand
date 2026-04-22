import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { PageHero } from "@/components/sections/page-hero";
import { GallerySection } from "@/components/sections/gallery-section";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero title="Gallery" description="Browse recent API, pipeline, marine, and tank inspection projects in the field." />
      <GallerySection />
      <FooterSection />
    </main>
  );
}
