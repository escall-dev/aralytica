"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/research", label: "Research" },
  { href: "/insights", label: "Insights" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container-aralytica flex h-20 items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo/Aralytica-Logo.png"
            alt="ARALytica Logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              ARALytica
            </span>
            <span className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">
              Evidence. Insight. Impact.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#650dd4]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-[#650dd4] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#520ab0]"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-6 py-4">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-[#650dd4] py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
