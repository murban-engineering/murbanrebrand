import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

export default function FaqPage() {
  return (
    <SiteShell>
      <PageIntro label="FAQ (/faq)" title="FAQ" description="Answers to common questions" />
      <Section title="Common Questions" description="What services fall under Murban Inspection Services? • How does Murban Engineering Services support projects? • Do you offer on-site training? • How can I request a proposal?" />
    </SiteShell>
  );
}
