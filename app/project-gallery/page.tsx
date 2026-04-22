import { Header } from "@/components/header";

export default function ProjectGalleryPage() {
  const projects = [
    "TotalEnergies Pipeline Integrity Assessment",
    "KPC Storage Tank Calibration & Inspection",
    "KenGen Geothermal Rig Inspection",
    "Railway Fuel Tank Wagon Certification",
    "Bolloré Marine Terminal Expansion",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-16">
        <h1 className="text-4xl font-bold">Project Gallery</h1>
        <p className="mt-3 text-muted-foreground">150+ Projects Completed</p>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {projects.map((project) => (
            <article key={project} className="border rounded-xl p-5">{project}</article>
          ))}
        </div>
      </section>
    </main>
  );
}
