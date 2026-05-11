"use client";

import { FadeImage } from "@/components/fade-image";

const activeProjects = [
  {
    id: 1,
    name: "Thika Power Plant Integrity Program",
    image: "/images/DSCN4117.JPG",
    summary:
      "Client: regional independent power producer. Scope: phased NDT and corrosion mapping across pressure systems and rotating auxiliaries during planned outages. Standards applied: ASME Section V, API 510, and site QA/QC procedures. Outcome: zero start-up delays and a risk-ranked repair plan that reduced unplanned downtime.",
  },
  {
    id: 2,
    name: "VTTI Mombasa Terminal Assessment",
    image: "/images/magnetic Flux Leakage 1.jpg",
    summary:
      "Client: bulk liquid storage terminal operator. Scope: aboveground tank floor scanning, shell UT, and fitness-for-service evaluations for continued operation. Standards applied: API 653, API 650, and RBI documentation requirements. Outcome: inspection evidence supported targeted maintenance and extended safe service intervals.",
  },
  {
    id: 3,
    name: "Rubis Djibouti Pipeline Verification",
    image: "/images/Pipes.JPG",
    summary:
      "Client: downstream fuel infrastructure company. Scope: weld quality verification, coating condition checks, and right-of-way integrity observations along transfer lines. Standards applied: ASME B31.4, ISO 9712 competency controls, and client HSE protocols. Outcome: commissioning handover was completed with all critical punch-list items closed.",
  },
  {
    id: 4,
    name: "Total Zimbabwe HAFS Reliability Works",
    image: "/images/DSCF5799.JPG",
    summary:
      "Client: aviation fueling systems operator. Scope: hydrant and dispenser line integrity checks, valve station NDT, and operational readiness validation. Standards applied: EI/JIG guidance, API 570 principles, and statutory compliance checklists. Outcome: the facility cleared audit requirements and resumed full-capacity service.",
  },
  {
    id: 5,
    name: "KR Tank Cleaning & Recommissioning",
    image: "/images/DSCN4156.JPG",
    summary:
      "Client: petroleum storage and distribution business. Scope: confined-space tank cleaning oversight, internal visual inspection, and wall-loss trending for recommissioning decisions. Standards applied: API 653, OSHA-aligned confined-space controls, and permit-to-work system rules. Outcome: tanks returned to service on schedule with documented integrity baselines.",
  },
  {
    id: 6,
    name: "OLA Energy Pipeline Condition Survey",
    image: "/images/welder.jpg",
    summary:
      "Client: regional fuel marketing company. Scope: selective radiography, UT thickness screening, and support-stress review on transfer and loading pipelines. Standards applied: ASME B31.3, API 570, and project-specific ITP checkpoints. Outcome: priority repairs were executed early, preventing leak-related shutdown risk.",
  },
];

export function CollectionSection() {
  return (
    <section className="bg-background pb-24">
      <div className="px-6 py-fluid-md md:px-12 lg:px-20">
        <h2 className="text-fluid-3xl font-medium tracking-tight text-foreground text-balance">Featured Project Case Studies</h2>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
          A selection of active project evidence across tank inspection, fabrication assurance, and pipeline integrity programs.
        </p>
      </div>

      <div className="grid gap-8 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-20">
        {activeProjects.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-2xl border border-primary/15 bg-card">
            <div className="relative aspect-[16/10] bg-secondary">
              <FadeImage src={project.image} alt={project.name} fill className="object-cover" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
