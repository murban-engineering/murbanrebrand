export const serviceImageFiles = [
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
