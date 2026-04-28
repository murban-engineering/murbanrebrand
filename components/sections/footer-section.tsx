"use client";

import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Industry Solutions", href: "#" },
  { label: "Privacy & Policy", href: "#" },
  { label: "FAQ", href: "#" },
];

const serviceLinksColumnOne = [
  { label: "Alternating Current Field Measurement", href: "#" },
  { label: "API 570 Piping Inspection and Certification", href: "#" },
  { label: "Murban Fitness for Service", href: "#" },
  { label: "Murban Risk Based Inspection", href: "#" },
  { label: "Boiler Inspection", href: "#" },
  { label: "Lifting Equipment Thorough Examination and Certification", href: "#" },
];

const serviceLinksColumnTwo = [
  { label: "Murban Pressure Testing", href: "#" },
  { label: "Paint Inspection", href: "#" },
  { label: "PMI Testing", href: "#" },
  { label: "RT Service", href: "#" },
  { label: "Risk Based Inspection", href: "#" },
  { label: "Sphere Tank Inspection", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="bg-neutral-200">
      <div className="px-6 py-14 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground">Murban Engineering</h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our operations are split into two divisions, Murban Inspection Services and Murban
              Engineering Services. We pick the best talent from the industry and continually invest
              in their development through rigorous external and internal training so they stay
              ahead of industry trends.
            </p>

            <div className="mt-10 space-y-3 text-lg text-muted-foreground">
              <p>Off Airport Road, Mombasa Port Reitz</p>
              <p>+254 20 265 0618</p>
              <p>info@murban-eng.com</p>
            </div>

            <div className="mt-14">
              <h3 className="text-4xl font-semibold text-foreground">Follow Us</h3>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-rose-200 text-xl font-medium text-foreground transition-colors hover:bg-white"
              >
                in
              </Link>
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinksColumnOne} />
          <FooterColumn title="Services" links={serviceLinksColumnTwo} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-4xl font-semibold text-foreground">{title}</h4>
      <ul className="mt-8 space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-lg leading-snug text-foreground transition-colors hover:text-muted-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
