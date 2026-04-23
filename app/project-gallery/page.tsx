import { PageIntro, Section, SiteShell } from "@/components/site/content-page";

const projects = [
  "TotalEnergies Pipeline Integrity Assessment",
  "KPC Storage Tank Calibration & Inspection",
  "KenGen Geothermal Rig Inspection",
  "Railway Fuel Tank Wagon Certification",
  "Bolloré Marine Terminal Expansion",
];

export default function ProjectGalleryPage() {
  return (
    <SiteShell>
      <PageIntro label="Project Gallery (/project-gallery)" title="Project Gallery" description="Highlighted project delivery across strategic industrial assets." />
      <Section title="Highlighted Projects">
        <ul className="grid gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project} className="rounded-xl border p-4">{project}</li>
          ))}
        </ul>
      </Section>
      <Section title="150+ Projects Completed" />
    </SiteShell>
  );
}
