import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-aralytica py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/Aralytica-Logo.png"
              alt="ARALytica"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div>
              <span className="text-lg font-bold text-gray-900 block leading-tight">
                ARALytica
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#650dd4] uppercase">
                Evidence. Insight. Impact.
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
            <Link
              href="/about"
              className="hover:text-[#650dd4] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-[#650dd4] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/research"
              className="hover:text-[#650dd4] transition-colors"
            >
              Research
            </Link>
            <Link
              href="/insights"
              className="hover:text-[#650dd4] transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/team"
              className="hover:text-[#650dd4] transition-colors"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#650dd4] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} ARALytica. All rights reserved.</p>
          <p className="italic">Development preview — Safe Phase 0 setup</p>
        </div>
      </div>
    </footer>
  );
}
