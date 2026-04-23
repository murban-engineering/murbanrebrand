import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        label="About (/about)"
        title="About Us"
        description="About Murban — serving critical infrastructure since 2007 through trusted inspection and engineering partnerships."
      />
      <Section title="Stats" description="20+ Years Experience • 35+ Countries • 500+ Projects Annually • 100% Safety Compliance" />
      <Section title="Company Profile" description="We operate through two divisions: Murban Inspection Services and Murban Engineering Services." />
      <Section title="Where We Work" description="Our teams support assets across Africa with localized execution and international standards." />
      <Section title="Purpose / Vision / Mission" />
    </SiteShell>
  );
}
