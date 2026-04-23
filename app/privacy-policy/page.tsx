import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageIntro label="Privacy Policy (/privacy-policy)" title="Privacy & Policy" description="Protecting your information and building trust" />
      <Section title="Information we collect" />
      <Section title="How we use your data" />
      <Section title="Your privacy choices" />
      <Section title="Staying informed" />
      <Section title="Need more details?" />
    </SiteShell>
  );
}
