export type Service = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
};

const createSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const serviceSeed = [
  {
    category: "General NDT",
    title: "NDT Inspection Services",
    shortDescription:
      "Full-scope Non-Destructive Testing coverage tailored to your assets and regulations.",
  },
  {
    category: "Advanced NDT",
    title: "Tank Calibration Services",
    shortDescription:
      "Accurate volume measurement and tank calibration across all storage configurations.",
  },
  {
    category: "Engineering Assessments",
    title: "API 570 Piping Inspection and Certification",
    shortDescription: "Piping system inspection for code compliance.",
  },
  {
    category: "Engineering Assessments",
    title: "API 653 Aboveground Storage Tank Inspection and Certification",
    shortDescription:
      "Tank integrity inspections that deliver official API 653 certification and reporting.",
  },
  {
    category: "Engineering Assessments",
    title: "API 510 Pressure Vessel Inspection",
    shortDescription:
      "Pressure vessel safety verification with detailed API 510 compliance documentation.",
  },
  {
    category: "General NDT",
    title: "Ultrasonic Flaw Testing C-Scan",
    shortDescription:
      "Detailed corrosion mapping and flaw visualization using advanced ultrasonic C-scan imaging.",
  },
  {
    category: "General NDT",
    title: "Ultrasonic Flaw Testing B-Scan",
    shortDescription:
      "Cross-sectional ultrasonic imaging for defect characterization, sizing, and localization.",
  },
  {
    category: "General NDT",
    title: "UTM Ultrasonic Thickness Measurement",
    shortDescription:
      "Accurate non-destructive thickness measurements to monitor structural integrity and corrosion.",
  },
  {
    category: "General NDT",
    title: "Visual Inspection",
    shortDescription:
      "Comprehensive visual assessments that identify visible defects, anomalies, and operational risks.",
  },
  {
    category: "General NDT",
    title: "Magnetic Particle Testing",
    shortDescription:
      "Surface flaw detection using powerful magnetic particle inspection methods.",
  },
  {
    category: "General NDT",
    title: "Fluorescent Magnet Particle Testing",
    shortDescription:
      "Crack detection enhanced with fluorescent indicators and ultraviolet inspection.",
  },
  {
    category: "General NDT",
    title: "Dye Penetrant Testing",
    shortDescription:
      "Critical PT inspections that reveal surface flaws and discontinuities for safer, more reliable asset performance.",
  },
  {
    category: "General NDT",
    title: "RT Radiographic Services",
    shortDescription:
      "High-resolution radiographic imaging that uncovers hidden discontinuities without interrupting service.",
  },
  {
    category: "General NDT",
    title: "Paint & Coating Inspection",
    shortDescription:
      "Checking protective coating thickness and quality to extend asset life.",
  },
  {
    category: "Engineering Assessments",
    title: "Positive Material Identification Testing",
    shortDescription:
      "Verify alloy composition quickly with positive material identification technology.",
  },
  {
    category: "Advanced NDT",
    title: "Murban Phased Array Testing",
    shortDescription:
      "Advanced phased array ultrasonics for complex geometry and high-resolution flaw detection.",
  },
  {
    category: "Advanced NDT",
    title: "3D Laser Scanning Services",
    shortDescription:
      "High-accuracy spatial data capture for asset management, design planning, and facility maintenance.",
  },
  {
    category: "Advanced NDT",
    title: "Thermal Camera Inspection",
    shortDescription:
      "Thermal imaging surveys that uncover temperature anomalies and emerging issues before they escalate.",
  },
  {
    category: "Advanced NDT",
    title: "Alternating Current Field Measurement",
    shortDescription:
      "Advanced electromagnetic inspection that detects and sizes surface cracks with exceptional accuracy.",
  },
  {
    category: "Engineering Assessments",
    title: "API 579 Murban Fitness for Service",
    shortDescription:
      "API 579-based integrity assessments that uncover defects, document risk, and guide repair or replacement decisions.",
  },
  {
    category: "Engineering Assessments",
    title: "API 580 Murban Risk Based Inspection",
    shortDescription:
      "Risk-based inspection strategies prioritizing safety-critical assets and intervals.",
  },
  {
    category: "Engineering Assessments",
    title: "Boiler Inspection Services",
    shortDescription:
      "Thorough inspections that keep boiler systems safe, efficient, and compliant.",
  },
  {
    category: "Engineering Assessments",
    title: "Lifting Equipment Thorough Examination and Certification",
    shortDescription:
      "Safe lifting equipment checks paired with formal certification packages.",
  },
  {
    category: "General NDT",
    title: "Murban Gas Detection",
    shortDescription:
      "Comprehensive monitoring solutions that detect hazardous gases early and keep worksites compliant.",
  },
  {
    category: "General NDT",
    title: "Murban Pressure Testing",
    shortDescription:
      "Verify system strength and tightness through controlled pressure testing.",
  },
  {
    category: "Advanced NDT",
    title: "Floormap 3D MFL Scanning",
    shortDescription:
      "3D magnetic flux leakage scanning that pinpoints tank floor defects with precision.",
  },
  {
    category: "Engineering Assessments",
    title: "Sphere Tank Inspections",
    shortDescription:
      "Inspection of spherical tanks with detailed structural and safety reporting.",
  },
  {
    category: "General NDT",
    title: "Surface Hardness Testing",
    shortDescription:
      "Measuring metal surface strength to validate fabrication quality and wear resistance.",
  },
  {
    category: "Advanced NDT",
    title: "Murban UAV Inspection",
    shortDescription:
      "Aerial inspection using drone-based technology to access challenging environments.",
  },
  {
    category: "Engineering & Fabrication",
    title: "Detailed Engineering",
    shortDescription: "Comprehensive technical plans and documentation.",
  },
  {
    category: "Engineering & Fabrication",
    title: "Procurement",
    shortDescription: "Sourcing materials for project execution.",
  },
  {
    category: "Engineering & Fabrication",
    title: "Fabrication",
    shortDescription: "Precision cutting, welding, and assembly services.",
  },
  {
    category: "Engineering & Fabrication",
    title: "Construction and Erection",
    shortDescription:
      "Safe, code-compliant erection of steel structures, pipelines, and storage tanks.",
  },
  {
    category: "Engineering & Fabrication",
    title: "Specialized Welding",
    shortDescription:
      "Certified TIG, MIG, SMAW, and SAW welding that safeguards structural integrity.",
  },
  {
    category: "Engineering & Fabrication",
    title: "Surface Preparation and Paint Works",
    shortDescription: "Surface cleaning and industrial paint coating.",
  },
] as const;

export const services: Service[] = serviceSeed.map((service) => ({
  ...service,
  slug: createSlug(service.title),
  overview: `${service.title} is delivered by Murban Engineering as a focused ${service.category.toLowerCase()} offering that combines qualified personnel, proven procedures, and practical field execution for industrial reliability.`,
  benefits: [
    `Improves safety and compliance outcomes for ${service.title.toLowerCase()} engagements.`,
    "Delivers clear reporting to support maintenance and operational decisions.",
    "Supports proactive planning to reduce downtime and unplanned risk.",
  ],
}));

export const serviceCategories = [
  "General NDT",
  "Advanced NDT",
  "Engineering Assessments",
  "Engineering & Fabrication",
] as const;

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
