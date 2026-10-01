import { Clock, Mail, FileText, CheckCircle2 } from "lucide-react";
import { FacebookIcon } from "@/components/ui/icons";
import { SITE_CONFIG } from "@/lib/data/site-config";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Intro block */}
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#191919]">
          Let&apos;s Discuss Your Evidence Needs
        </h2>
        <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed">
          ARALytica collaborates with government ministries, multilateral
          agencies, donors, and non-governmental organizations to design
          rigorous studies, evaluate active programs, and provide data-driven
          advisory.
        </p>
      </div>

      {/* Engagement Channels */}
      <div className="space-y-4">
        {/* Direct Email Channel */}
        <div className="p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5edff] text-[#650dd4]">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 block">
                Direct Communications
              </span>
              <span className="text-base font-bold text-[#191919]">
                Official Inquiries
              </span>
            </div>
          </div>
          <p className="text-sm text-[#5f5f5f]">
            For formal RFPs, study terms of reference, and collaboration
            proposals:
          </p>
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="inline-block px-3.5 py-2 rounded-lg bg-[#fafafa] border border-[#e5e7eb] text-xs font-mono font-semibold text-[#650dd4] hover:bg-[#f5edff] transition-colors focus-visible:outline-[#650dd4]"
          >
            {SITE_CONFIG.contactEmail}
          </a>
        </div>

        {/* Official Facebook Channel */}
        <div className="p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5edff] text-[#650dd4]">
              <FacebookIcon className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 block">
                Social Channel
              </span>
              <span className="text-base font-bold text-[#191919]">
                Official Facebook Page
              </span>
            </div>
          </div>
          <p className="text-sm text-[#5f5f5f]">
            Connect with our research community and view public updates:
          </p>
          <a
            href={SITE_CONFIG.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ARALytica on Facebook"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#fafafa] border border-[#e5e7eb] text-xs font-semibold text-[#650dd4] hover:bg-[#f5edff] transition-colors focus-visible:outline-[#650dd4]"
          >
            <FacebookIcon className="h-3.5 w-3.5" />
            <span>Visit ARALytica on Facebook</span>
          </a>
        </div>

        {/* Turnaround Protocol */}
        <div className="p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5edff] text-[#650dd4]">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 block">
                Review Protocol
              </span>
              <span className="text-base font-bold text-[#191919]">
                Response Expectation
              </span>
            </div>
          </div>
          <p className="text-sm text-[#5f5f5f] leading-relaxed">
            All submitted inquiries are evaluated directly by technical
            leadership. We aim to provide an initial scoping response or
            consultation request within two business days.
          </p>
        </div>

        {/* Institutional Modes */}
        <div className="p-6 rounded-2xl bg-[#fafafa] border border-[#e5e7eb] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
            <FileText className="h-4 w-4 text-[#650dd4]" />
            <span>Engagement Modalities</span>
          </div>
          <ul className="space-y-2 text-xs text-[#5f5f5f]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#650dd4] shrink-0 mt-0.5" />
              <span>
                Independent evaluation commissions (Baseline / Midterm /
                Endline)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#650dd4] shrink-0 mt-0.5" />
              <span>
                Tailored econometric research and diagnostic policy studies
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#650dd4] shrink-0 mt-0.5" />
              <span>
                Institutional data capacity building and analytics advisory
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
