import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageIntro label="Contact (/contact)" title="Contact" description="Mombasa HQ and Nairobi Office support with rapid response field coordination." />
      <Section title="Office Locations" description="Mombasa HQ • Nairobi Office" />
      <Section title="Contact Highlights" description="24hr Response • Free Consultation • On-Site Service" />
      <Section title="Send Message" description="CTA states: Send Message / Sending…" />
    </SiteShell>
  );
}
