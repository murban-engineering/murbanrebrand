export type ServiceItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  related: { name: string; slug: string }[];
};

export const technologyFeatures = [
  "Ultrasonic Testing",
  "Phased Array UT",
  "Risk Assessment",
  "MFL Scanning",
  "Radiographic Testing",
  "Thermal Imaging",
];

export const essentialServices = [
  { name: "3D Laser Scanning", price: "From $650/day" },
  { name: "UAV Inspection", price: "From $900/day" },
  { name: "Tank Calibration", price: "From $1,200/project" },
  { name: "Coating Assessment", price: "From $550/day" },
  { name: "PMI Testing", price: "From $500/day" },
  { name: "Pressure Testing", price: "From $800/day" },
];

export const serviceCategories = [
  "General NDT",
  "Advanced NDT",
  "Engineering Assessments",
  "Engineering & Fabrication",
];

export const services: ServiceItem[] = [
  {
    slug: "ndt-inspection-services",
    title: "NDT Inspection Services",
    category: "General NDT",
    description: "Conventional NDT solutions for integrity verification and defect detection.",
    details: [
      "Visual inspection and reporting",
      "UT, MT, PT, and RT execution",
      "Code-compliant documentation support",
    ],
    related: [
      { name: "Dye Penetrant Testing", slug: "dye-penetrant-testing" },
      { name: "Radiographic Testing", slug: "radiographic-testing" },
    ],
  },
  {
    slug: "tank-calibration-services",
    title: "Tank Calibration Services",
    category: "Engineering Assessments",
    description: "Accurate volumetric calibration and certification for storage assets.",
    details: [
      "Strapping table generation",
      "Capacity and tolerance validation",
      "Certification dossier preparation",
    ],
    related: [
      { name: "API 653", slug: "api-653" },
      { name: "3D Laser Scanning", slug: "3d-laser-scanning" },
    ],
  },
  {
    slug: "api-570",
    title: "API 570",
    category: "Certification",
    description: "Piping inspection code implementation and lifecycle integrity management.",
    details: ["Baseline assessment", "RBI planning", "Inspection interval optimization"],
    related: [
      { name: "API 510", slug: "api-510" },
      { name: "API 653", slug: "api-653" },
    ],
  },
  {
    slug: "api-653",
    title: "API 653",
    category: "Certification",
    description: "Aboveground storage tank inspection and repair certification support.",
    details: ["Fitness-for-service review", "Repair plans", "Regulatory dossier"],
    related: [
      { name: "Tank Calibration Services", slug: "tank-calibration-services" },
      { name: "API 510", slug: "api-510" },
    ],
  },
  {
    slug: "api-510",
    title: "API 510",
    category: "Certification",
    description: "Pressure vessel in-service inspection programs and statutory compliance.",
    details: ["Inspection planning", "Remaining life calculations", "Code alignment"],
    related: [
      { name: "API 570", slug: "api-570" },
      { name: "Pressure Testing", slug: "pressure-testing" },
    ],
  },
  {
    slug: "phased-array",
    title: "Phased Array",
    category: "Advanced NDT",
    description: "High-resolution flaw characterization for critical welds and materials.",
    details: ["Encoded scans", "Corrosion mapping", "Digital deliverables"],
    related: [
      { name: "Ultrasonic Testing", slug: "ultrasonic-testing" },
      { name: "Radiographic Testing", slug: "radiographic-testing" },
    ],
  },
  {
    slug: "3d-laser-scanning",
    title: "3D Laser Scanning",
    category: "Engineering Assessments",
    description: "Reality capture and digital twin development for brownfield assets.",
    details: ["Point cloud acquisition", "As-built modeling", "Deviation analysis"],
    related: [
      { name: "Tank Calibration Services", slug: "tank-calibration-services" },
      { name: "UAV Inspection", slug: "uav-inspection" },
    ],
  },
  {
    slug: "radiographic-testing",
    title: "RT",
    category: "General NDT",
    description: "Radiographic examination for weld quality and volumetric discontinuities.",
    details: ["Film and digital RT", "Exposure plans", "Interpretation reports"],
    related: [
      { name: "NDT Inspection Services", slug: "ndt-inspection-services" },
      { name: "Phased Array", slug: "phased-array" },
    ],
  },
  {
    slug: "dye-penetrant-testing",
    title: "Dye Penetrant",
    category: "General NDT",
    description: "Surface-breaking crack detection for metallic and non-porous components.",
    details: ["Visible and fluorescent PT", "Procedure qualification", "Acceptance reporting"],
    related: [
      { name: "NDT Inspection Services", slug: "ndt-inspection-services" },
      { name: "API 510", slug: "api-510" },
    ],
  },
];
