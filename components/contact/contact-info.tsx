import { Clock, Mail, ShieldAlert, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/site-config";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Intro block */}
      <div className="space-y-3">
        <h2 className="text-2xl font-serif font-bold text-[#191919]">
          Let&apos;s Discuss Your Evidence Needs
        </h2>
        <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed">
          ARALytica partners with government ministries, multilateral
          institutions, donors, and non-governmental organizations to design
          rigorous studies, evaluate active programs, and provide data advisory.
        </p>
      </div>

      {/* Engagement Channels */}
      <div className="space-y-4">
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
                Inquiry Channel
              </span>
            </div>
          </div>
          <p className="text-sm text-[#5f5f5f]">
            For RFPs, evaluation proposals, and research collaboration:
          </p>
          <div className="inline-block px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono font-semibold text-[#650dd4]">
            {SITE_CONFIG.contactEmailPlaceholder}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5edff] text-[#650dd4]">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 block">
                Standard Turnaround
              </span>
              <span className="text-base font-bold text-[#191919]">
                Response Protocol
              </span>
            </div>
          </div>
          <p className="text-sm text-[#5f5f5f] leading-relaxed">
            All submitted inquiries are reviewed by technical leadership. You
            can expect an initial scoping response within two business days.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#fafafa] border border-[#e5e7eb] space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <ShieldAlert className="h-4 w-4 text-[#650dd4]" />
            <span>Development Preview Notice</span>
          </div>
          <p className="text-xs text-[#5f5f5f] leading-relaxed">
            This contact portal is currently running in development mode (Phase
            2). Production email routing via Resend will be connected in Phase
            3+.
          </p>
        </div>
      </div>

      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-gray-400">
        <Sparkles className="h-3.5 w-3.5 text-[#650dd4]" />
        <span>Evidence. Insight. Impact.</span>
      </div>
    </div>
  );
}
