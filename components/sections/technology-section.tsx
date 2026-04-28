"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Slower animation - more viewport range
      const startOffset = windowHeight * 0.9;
      const endOffset = windowHeight * 0.1;

      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;

      const newProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl lg:text-5xl"
    >
      {words.map((word, index) => {
        const wordProgress = index / words.length;
        const isRevealed = progress > wordProgress;

        return (
          <span
            key={index}
            className="transition-colors duration-150"
            style={{
              color: isRevealed ? "var(--foreground)" : "#e4e4e7",
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

const sideImages = [
  {
    src: "/images/magnetic Flux Leakage 1.jpg",
    alt: "Tank inspection platform",
    position: "left",
    span: 1,
  },
  {
    src: "/images/Pipes.JPG",
    alt: "Industrial fire line piping",
    position: "left",
    span: 1,
  },
  {
    src: "/images/DSCN4103.JPG",
    alt: "Horizontal vessel installation",
    position: "right",
    span: 1,
  },
  {
    src: "/images/DSCN4117.JPG",
    alt: "Storage vessels and access stairways",
    position: "right",
    span: 1,
  },
];

type Industry = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  assetsCovered: string;
  keyServices: string[];
  whyItMatters: string;
};


const createIndustryAnchor = (title: string) =>
  `industry-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")}`;

const industries: Industry[] = [
  {
    title: "Oil & Gas Industry",
    imageSrc: "/images/oiland gas.jpg",
    imageAlt: "Oil and gas processing plant at sunrise",
    assetsCovered: "Storage tanks, sphere tanks, pressure vessels, pipelines, marine terminals, FPSOs",
    keyServices: [
      "API 653 Storage Tank Inspection",
      "Sphere Tank Inspection",
      "API 510 Pressure Vessel Inspection",
      "API 570 Pipeline Inspection",
      "Tank Bottom MFL Corrosion Mapping",
      "Fitness for Service Analysis",
      "UAV & Thermal Surveys",
      "3D Laser Scanning & Tank Calibration",
      "Coating Inspection & Corrosion Assessment",
      "Risk-Based Inspection & RBI Plans",
      "Radiography & Ultrasonic Testing",
      "PMI Testing for imported fittings",
      "Post-fire and post-buckling assessments",
    ],
    whyItMatters:
      "At Murban Engineering, we offer industry-leading inspection and integrity solutions tailored to the critical demands of the oil and gas sector. Our services span upstream, midstream, and downstream operations—from pipeline and pressure vessel inspections to storage tank calibration and corrosion assessment. Using advanced techniques like Phased Array Ultrasonic Testing (PAUT), Magnetic Flux Leakage (MFL), and Risk-Based Inspection (RBI), we help oil and gas operators extend asset life, avoid unplanned outages, and meet the highest standards of safety and compliance.",
  },
  {
    title: "Power & Steam Generation",
    imageSrc: "/images/power and steam.jpg",
    imageAlt: "Power and steam facility with industrial stacks",
    assetsCovered: "Boilers, heat exchangers, pressure vessels, steam lines",
    keyServices: [
      "Boiler Internal & External Inspections",
      "Surface Hardness & Weld Flaw Detection",
      "Pressure Testing of High-Pressure Systems",
      "PMI & Material Traceability",
      "Thermal Surveys for Insulation Performance",
      "QA/QC during plant maintenance",
    ],
    whyItMatters:
      "The power industry relies on the continuous and safe operation of high-pressure systems. Our inspection and testing services are designed to support steam generation plants, turbines, and high-energy piping. We conduct in-depth assessments of boilers, heat exchangers, and pressure vessels using ultrasonic flaw detection, surface hardness testing, and pressure validation. These services ensure the structural integrity, operational efficiency, and safety of critical components under extreme conditions.",
  },
  {
    title: "Storage & Logistics Terminals",
    imageSrc: "/images/storage-tanks.jpg",
    imageAlt: "Storage and logistics terminal with bulk tanks",
    assetsCovered: "Bulk liquid tanks, LPG spheres, loading lines, depot infrastructure",
    keyServices: [
      "Storage Tank Calibration",
      "Volumetric Analysis with 3D Laser Scanning",
      "API 653 Inspections",
      "API 510 Inspections",
      "API 570 Inspections",
      "Paint and Coating Integrity Testing",
      "Third party verification and testing",
      "Engineering drawings – As built data",
      "Foundation and settlement monitoring",
      "NDT Testing",
    ],
    whyItMatters:
      "Bulk liquid and fuel terminals are complex facilities that demand accurate calibration, corrosion monitoring, and tank integrity assurance. Murban Engineering provides comprehensive solutions for tank farms, depots, and LPG storage facilities using technologies like 3D laser scanning, UAV-based inspections, and API 653-compliant tank assessments. Our goal is to help operators maintain regulatory compliance, safeguard stored products, and optimize infrastructure performance across the entire terminal lifecycle.",
  },
  {
    title: "Food Processing Industry",
    imageSrc: "/images/food industry.jpg",
    imageAlt: "Food processing production facility",
    assetsCovered: "Stainless tanks, pressure vessels, food-grade pipelines, steam boilers",
    keyServices: [
      "UT Thickness Surveys for Corrosion in Clean Systems",
      "Surface Hardness Testing for Safety Compliance",
      "3D Tank Calibration for Volume Control",
      "Radiographic Testing to check welds on hygiene-critical vessels",
      "QA/QC for stainless welding and fittings",
      "Non-contaminating NDT procedures (e.g., non-toxic DPI)",
    ],
    whyItMatters:
      "In food and beverage processing, cleanliness, accuracy, and structural integrity are non-negotiable. Murban supports this industry with non-contaminating inspection techniques, volumetric tank calibration, and material identification suited for food-grade environments. Whether it\'s ensuring weld quality in stainless vessels or verifying tank geometry for accurate mixing and batching, we bring precision, hygiene-compliant methods, and peace of mind to food manufacturers.",
  },
  {
    title: "Renewable Energy & Geothermal",
    imageSrc: "/images/renewable energy.jpg",
    imageAlt: "Renewable energy and geothermal infrastructure",
    assetsCovered: "Geothermal drilling rigs, solar plants, wind support structures",
    keyServices: [
      "NDT on Cementing and Casing Equipment",
      "QA/QC Inspections during rig fabrication and commissioning",
      "UT and MPI for welds and frames",
      "UAV Thermal Surveys for solar arrays",
      "Pressure Testing and PMI of drilling components",
      "Structural laser scanning for alignment and elevation",
    ],
    whyItMatters:
      "The renewable energy sector is expanding rapidly, and so is the need for safe, reliable, and long-lasting infrastructure. At Murban, we offer targeted inspection services for geothermal rigs, solar installations, and wind structures. From flaw detection in rig welds to thermal imaging of solar panels and structural surveys using UAVs and laser scanning, we ensure your green energy systems are safe, efficient, and compliant with modern engineering codes.",
  },
  {
    title: "Rail Industry",
    imageSrc: "/images/rail industry.jpg",
    imageAlt: "Rail industry yard and wagons",
    assetsCovered: "Rail wagons, bogies, bridges, storage depots, fuel tanks",
    keyServices: [
      "UT and RT for railcar tanks and weld seams",
      "ACFM Inspection for wheels and axles",
      "Surface Hardness for load-bearing components",
      "Paint, Coating & Corrosion Inspection for rolling stock",
      "Lifting Equipment Certification for maintenance depots",
      "Tank Calibration for fuel and chemical wagons",
      "3D Scanning of structural members in railway bridges",
    ],
    whyItMatters:
      "Railway infrastructure must meet the demands of heavy loads, constant vibration, and dynamic stresses. Murban provides specialized inspection and certification services for railcars, bridges, depots, and fuel wagons. Our techniques—ranging from ultrasonic and radiographic testing to tank calibration and corrosion inspection—help operators ensure safety, prevent failures, and maintain smooth operations across the rail network.",
  },
  {
    title: "Shipping & Marine Industry",
    imageSrc: "/images/shippingand marine.jpg",
    imageAlt: "Marine and shipping terminal with industrial piping",
    assetsCovered:
      "Cargo tanks, ballast tanks, marine pipelines, ship hulls, offshore loading arms, vessel pressure systems, tankers, offshore platforms",
    keyServices: [
      "Ultrasonic Thickness Measurement (UTM) of hull plating and tanks",
      "Visual Inspection of cargo tanks, hatches, and decks",
      "Magnetic Particle & Dye Penetrant Testing of weld seams and load points",
      "Phased Array Ultrasonic Testing (PAUT) for deck and hull integrity",
      "3D Laser Scanning for tank geometry and deck mapping",
      "Internal UAV Inspection for difficult-to-access compartments",
      "Surface Hardness Testing on load-bearing components",
      "PMI Testing on imported or unknown marine-grade alloys",
      "Thermal Imaging for hot spot detection in engines and exhausts",
      "Paint & Coating Assessment in ballast and cargo tanks",
      "Pressure Testing of marine pipelines and fluid systems",
      "Lifting Gear and Lifesaving Equipment Certification",
      "Compliance inspections under SOLAS, IMO, and Classification Society standards",
    ],
    whyItMatters:
      "Marine environments expose vessels and offshore structures to accelerated wear from corrosion, mechanical loading, and extreme conditions. At Murban Engineering, we provide specialized marine inspection services that enhance safety, ensure class compliance, and support the longevity of your marine assets. Whether for in-service vessels, dockside inspections, or offshore operations, our NDT and engineering capabilities help mitigate risk, reduce repair costs, and maintain operational readiness at sea.",
  },
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const descriptionText =
    "Tailored inspection and integrity solutions for diverse industries across Africa";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Image transforms start after title fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  const centerWidth = 100 - imageProgress * 58; // 100% to 42%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100; // -100% to 0%
  const sideTranslateRight = 100 - imageProgress * 100; // 100% to 0%
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px

  return (
    <section id="industries" ref={sectionRef} className="relative bg-foreground">
      {/* Sticky container for scroll animation (desktop/tablet) */}
      <div className="sticky top-0 hidden h-screen overflow-hidden md:block">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
          >
            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "left")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Main Center Image */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: "100%",
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/images/DSCN4156.JPG"
                alt="Murban industrial storage installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/40" />

              {/* Title Text - Fades out word by word with blur */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                  {["Inspection", "Across", "Industries."].map((word, index) => {
                    // Each word fades out sequentially based on scrollProgress
                    const wordFadeStart = index * 0.07; // Technology: 0, Meets: 0.07, Wilderness: 0.14
                    const wordFadeEnd = wordFadeStart + 0.07;
                    const wordProgress = Math.max(
                      0,
                      Math.min(
                        1,
                        (scrollProgress - wordFadeStart) / (wordFadeEnd - wordFadeStart),
                      ),
                    );
                    const wordOpacity = 1 - wordProgress;
                    const wordBlur = wordProgress * 10; // 0px to 10px blur

                    return (
                      <span
                        key={index}
                        className="inline-block"
                        style={{
                          opacity: wordOpacity,
                          filter: `blur(${wordBlur}px)`,
                          transition: "opacity 0.1s linear, filter 0.1s linear",
                          marginRight: index < 2 ? "0.3em" : "0",
                        }}
                      >
                        {word}
                        {index === 1 && <br />}
                      </span>
                    );
                  })}
                </h2>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="hidden h-[200vh] md:block" />

      {/* Mobile hero fallback */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden md:hidden">
        <Image
          src="/images/DSCN4156.JPG"
          alt="Murban industrial storage installation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-white">Inspection Across Industries.</h2>
        </div>
      </div>

      {/* Description Section with Background Image and Scroll Reveal */}
      <div
        ref={textSectionRef}
        className="relative overflow-hidden bg-background px-6 py-fluid-xl md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Industry Solutions
          </p>
          <ScrollRevealText text={descriptionText} />

          <div className="space-y-2 pt-6">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Industries We Serve
            </h3>
            <p className="text-base text-muted-foreground md:text-lg">
              Delivering specialized expertise across multiple sectors
            </p>
          </div>

          <div className="flex flex-col gap-8 pt-4">
            {industries.map((industry) => (
              <article
                id={createIndustryAnchor(industry.title)}
                key={industry.title}
                className="group scroll-mt-28 overflow-hidden rounded-2xl border border-[#0F3D76]/25 bg-gradient-to-br from-[#0F3D76]/5 via-card to-[#6D1F3A]/10 p-5 text-card-foreground shadow-[0_18px_45px_-30px_rgba(15,61,118,0.45)] transition-all duration-300 hover:border-[#6D1F3A]/45 hover:shadow-[0_24px_56px_-30px_rgba(109,31,58,0.5)] md:p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
                  <div className="relative h-52 overflow-hidden rounded-xl border border-[#0F3D76]/25 sm:h-64 lg:h-full lg:min-h-[280px]">
                    <Image
                      src={industry.imageSrc}
                      alt={industry.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1023px) 100vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6D1F3A]/45 via-transparent to-[#0F3D76]/25" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#0F3D76] md:text-2xl">{industry.title}</h4>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-[#6D1F3A]">
                        Assets Covered
                      </p>
                      <p className="text-sm leading-relaxed md:text-base">{industry.assetsCovered}</p>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-[#6D1F3A]">
                        Key Services
                      </p>
                      <ul className="space-y-1 text-sm leading-relaxed md:text-base">
                        {industry.keyServices.map((service) => (
                          <li key={service} className="flex gap-2">
                            <span aria-hidden="true" className="text-[#0F3D76]">•</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-[#6D1F3A]">
                        Why It Matters
                      </p>
                      <p className="text-sm leading-relaxed md:text-base">{industry.whyItMatters}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
