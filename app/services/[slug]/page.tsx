import Link from "next/link";
import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <SiteShell>
      <PageIntro
        label="Service Detail (/services/:slug)"
        title={slug.replace(/-/g, " ")}
        description="Service badge, headline, and detailed description rendered dynamically by slug."
      />
      <Section title="Actions">
        <div className="flex flex-wrap gap-3">
          <Link href="/services" className="rounded-full border px-4 py-2 text-sm">Back to services</Link>
          <Link href="/contact" className="rounded-full border px-4 py-2 text-sm">Discuss your project</Link>
        </div>
      </Section>
      <Section title="Detailed Subsections" description="This area supports grouped item lists and related linked service items." />
    </SiteShell>
  );
}
