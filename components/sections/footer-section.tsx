"use client";

import Link from "next/link";

const companyLinks = ["About Us", "Industry Solutions", "Project Gallery", "Certifications", "FAQ"];
const serviceLinks = [
  "NDT Inspection",
  "Phased Array Testing",
  "API 653 Tank Inspection",
  "API 570 Piping",
  "3D Laser Scanning",
  "Tank Calibration",
  "View all services",
];

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="grid gap-10 px-6 py-16 md:px-12 lg:grid-cols-4 lg:px-20">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold">MURBAN Engineering</h3>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and
            safe inspection solutions for critical infrastructure across Africa.
          </p>
          <div className="mt-6 space-y-1 text-sm text-muted-foreground">
            <p>info@murban-eng.com</p>
            <p>+254 20 265 0618</p>
            <p>Mombasa, Kenya</p>
          </div>
          <Link href="#" className="mt-5 inline-flex text-sm font-medium underline underline-offset-4">
            Connect on LinkedIn
          </Link>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link} className="text-sm text-muted-foreground">
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((link) => (
              <li key={link} className="text-sm text-muted-foreground">
                <Link href="/services">{link}</Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-border p-4">
            <h5 className="font-medium">Start a Project</h5>
            <p className="mt-2 text-sm text-muted-foreground">Ready to discuss your inspection needs? Our team is here to help.</p>
            <div className="mt-4 space-y-2 text-sm">
              <Link href="/contact" className="block underline underline-offset-4">
                Get in Touch
              </Link>
              <Link href="/portal" className="block underline underline-offset-4">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5 md:px-12 lg:px-20">
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {year} Murban Engineering Services. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
