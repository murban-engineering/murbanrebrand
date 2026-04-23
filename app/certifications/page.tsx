import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

export default function CertificationsPage() {
  return (
    <SiteShell>
      <PageIntro label="Certifications (/certifications)" title="Certifications & Compliance" description="Standards alignment and certification coverage maintained for regulated operations." />
      <Section title="Core Standards" description="API Q1 Specification • ISO 9001:2015 • ASME Certification" />
      <Section title="ISO and Additional Industry Certifications" />
    </SiteShell>
  );
}
