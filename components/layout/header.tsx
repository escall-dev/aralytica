"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/research", label: "Research" },
  { href: "/insights", label: "Insights" },
  { href: "/team", label: "Team" },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#e5e7eb] bg-white/95 backdrop-blur-md">
        <Container className="flex h-18 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group rounded-md focus-visible:outline-[#650dd4]"
            aria-label="ARALytica Home"
          >
            <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 p-1 group-hover:border-[#650dd4]/30 transition-colors">
              <Image
                src="/logo/Aralytica-Logo.png"
                alt="ARALytica"
                width={36}
                height={36}
                className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#191919] group-hover:text-[#650dd4] transition-colors leading-tight">
                ARALytica
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-[#5f5f5f] uppercase leading-none">
                Evidence • Insight • Impact
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 focus-visible:outline-[#650dd4]",
                    isActive
                      ? "text-[#650dd4] font-semibold bg-[#f5edff]"
                      : "text-[#5f5f5f] hover:text-[#191919] hover:bg-gray-100/70"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-[#191919] hover:bg-gray-100 focus-visible:outline-[#650dd4]"
              aria-expanded={mobileNavOpen}
              aria-label="Open main menu"
            >
              <Menu className="h-5 w-5 text-gray-700" />
              <span>Menu</span>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
