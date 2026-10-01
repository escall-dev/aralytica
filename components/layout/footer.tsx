import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FacebookIcon } from "@/components/ui/icons";
import { SITE_CONFIG } from "@/lib/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e5e7eb] bg-white text-[#191919]">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#e5e7eb]">
          {/* Brand & Mission column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-[#650dd4]"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 p-1">
                <Image
                  src="/logo/Aralytica-Logo.png"
                  alt="ARALytica Logo"
                  width={36}
                  height={36}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#191919] block leading-tight">
                  ARALytica
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#650dd4] uppercase">
                  Evidence. Insight. Impact.
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#5f5f5f] leading-relaxed max-w-md">
              A research, monitoring, evaluation, and data analytics firm
              helping organizations turn evidence into practical action. We work
              with governments, development partners, and institutions to
              strengthen policies, programs, and decisions.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#5f5f5f]">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-2 hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4] w-fit"
              >
                <Mail
                  className="h-4 w-4 text-[#650dd4] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-mono">{SITE_CONFIG.contactEmail}</span>
              </a>
              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit ARALytica on Facebook"
                className="inline-flex items-center gap-2 hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4] w-fit"
              >
                <FacebookIcon className="h-4 w-4 text-[#650dd4] shrink-0" />
                <span>Visit ARALytica on Facebook</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column: Practice */}
          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#191919]">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm text-[#5f5f5f]">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4]"
                >
                  Services Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4]"
                >
                  Research & Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4]"
                >
                  Insights & Notes
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column: Organization */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#191919]">
              Organization
            </h3>
            <ul className="space-y-2.5 text-sm text-[#5f5f5f]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4]"
                >
                  About ARALytica
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4]"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#650dd4] transition-colors focus-visible:outline-[#650dd4]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5f5f5f]">
          <p>© {currentYear} ARALytica. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#650dd4] font-medium tracking-wide">
              Evidence. Insight. Impact.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
