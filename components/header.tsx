"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md rounded-2xl" : "bg-transparent"
      }`}
      style={{
        boxShadow: isScrolled
          ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px"
          : "none",
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-3 py-3 md:px-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/murban-logo.ico"
            alt="Murban Engineering"
            width={38}
            height={38}
            className="object-contain"
          />
          <span className={`text-sm font-semibold ${isScrolled ? "text-foreground" : "text-white"}`}>
            MURBAN Engineering
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors ${
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/portal"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Portal
          </Link>
          <Link
            href="/quote"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-5">
            {[...navLinks, { label: "Client Portal", href: "/portal" }, { label: "Get a Quote", href: "/quote" }].map(
              (link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
