export const serviceImageFiles = [
  "NDT Inspection Services.jpg",
  "Aboveground Storage Tank Inspection.jpg",
  "Pressure Vessel Inspection.jpg",
  "Ultrasonic Flaw Testing C-Scan.jpg",
  "Ultrasonic Flaw Testing B-Scan.jpg",
  "Visual Inspection.jpg",
  "Magnetic Particle Testing.jpg",
  "Fluorescent Magnet Particle Testing.jpg",
  "Positive Material Identification Testing.jpg",
  "3D Laser Scanning Services.jpg",
  "Fitness for Service.jpg",
  "Murban Gas Detection.jpg",
  "Murban Pressure Testing.jpg",
  "Floormap 3D MFL Scanning.jpg",
  "Surface Hardness Testing.jpg",
  "detailed engineering.jpg",
  "procurement.jpg",
  "alternating current.jpg",
  "Boiler Inspection Services.jpg",
  "construction and erection.jpg",
  "dye.jpg",
  "fabrication.jpg",
  "lifting.jpg",
  "painting.jpg",
  "piping inspection.jpg",
  "radiography.jpg",
  "specialized welding.jpg",
  "sphere tank inspections.jpg",
  "storage terminal.jpg",
  "tank calibration.jpg",
  "thermal camera.jpg",
  "uav.jpg",
  "UTM Ultrasonic Thickness Measurement.jpg",
  "welding 2.jpg",
] as const;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const explicitKeywordMap: Array<{ keyword: string; file: string }> = [
  { keyword: "ndt inspection services", file: "NDT Inspection Services.jpg" },
  {
    keyword: "api 653 aboveground storage tank inspection and certification",
    file: "Aboveground Storage Tank Inspection.jpg",
  },
  { keyword: "api 510 pressure vessel inspection", file: "Pressure Vessel Inspection.jpg" },
  { keyword: "ultrasonic flaw testing c scan", file: "Ultrasonic Flaw Testing C-Scan.jpg" },
  { keyword: "ultrasonic flaw testing b scan", file: "Ultrasonic Flaw Testing B-Scan.jpg" },
  { keyword: "visual inspection", file: "Visual Inspection.jpg" },
  { keyword: "magnetic particle testing", file: "Magnetic Particle Testing.jpg" },
  {
    keyword: "fluorescent magnet particle testing",
    file: "Fluorescent Magnet Particle Testing.jpg",
  },
  {
    keyword: "positive material identification testing",
    file: "Positive Material Identification Testing.jpg",
  },
  { keyword: "murban phased array testing", file: "Ultrasonic Flaw Testing C-Scan.jpg" },
  { keyword: "3d laser scanning services", file: "3D Laser Scanning Services.jpg" },
  { keyword: "api 579 murban fitness for service", file: "Fitness for Service.jpg" },
  { keyword: "api 580 murban risk based inspection", file: "NDT Inspection Services.jpg" },
  { keyword: "murban gas detection", file: "Murban Gas Detection.jpg" },
  { keyword: "murban pressure testing", file: "Murban Pressure Testing.jpg" },
  { keyword: "floormap 3d mfl scanning", file: "Floormap 3D MFL Scanning.jpg" },
  { keyword: "surface hardness testing", file: "Surface Hardness Testing.jpg" },
  { keyword: "detailed engineering", file: "detailed engineering.jpg" },
  { keyword: "procurement", file: "procurement.jpg" },
  { keyword: "lifting equipment", file: "lifting.jpg" },
  { keyword: "boiler inspection", file: "Boiler Inspection Services.jpg" },
  { keyword: "tank calibration", file: "tank calibration.jpg" },
  { keyword: "piping inspection", file: "piping inspection.jpg" },
  { keyword: "sphere tank", file: "sphere tank inspections.jpg" },
  { keyword: "thermal camera", file: "thermal camera.jpg" },
  { keyword: "alternating current", file: "alternating current.jpg" },
  { keyword: "dye penetrant", file: "dye.jpg" },
  { keyword: "radiographic", file: "radiography.jpg" },
  { keyword: "radiography", file: "radiography.jpg" },
  { keyword: "paint", file: "painting.jpg" },
  { keyword: "construction and erection", file: "construction and erection.jpg" },
  { keyword: "fabrication", file: "fabrication.jpg" },
  { keyword: "specialized welding", file: "specialized welding.jpg" },
  { keyword: "ultrasonic thickness measurement", file: "UTM Ultrasonic Thickness Measurement.jpg" },
  { keyword: "uav", file: "uav.jpg" },
];

export const getServiceImageForTitle = (title: string) => {
  const normalizedTitle = normalize(title);

  const explicitMatch = explicitKeywordMap.find(({ keyword }) =>
    normalizedTitle.includes(normalize(keyword)),
  );

  if (explicitMatch) {
    return `/images/${explicitMatch.file}`;
  }

  const looseMatch = serviceImageFiles.find((file) => {
    const normalizedFile = normalize(file);
    return normalizedTitle.includes(normalizedFile) || normalizedFile.includes(normalizedTitle);
  });

  return looseMatch ? `/images/${looseMatch}` : null;
};
