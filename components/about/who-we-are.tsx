import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhoWeAre() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Institutional Identity"
              title="Evidence that Informs. Insights that Improve."
              className="mx-0"
            />
            <div className="space-y-4 text-base text-[#5f5f5f] leading-relaxed">
              <p>
                <strong>ARALytica</strong> is a research, monitoring,
                evaluation, and data analytics firm that helps organizations
                turn evidence into practical action.
              </p>
              <p>
                We work with government agencies, development partners, civil
                society organizations, and education institutions to design
                studies, evaluate programs, analyze complex data, and generate
                insights that support better policies, stronger programs, and
                more informed decisions.
              </p>
              <p>
                Our foundation is rooted in the Filipino word{" "}
                <strong className="text-[#191919]">“Aral,”</strong> meaning
                study, disciplined learning, and thoughtful reflection. It
                embodies our conviction that durable public institutions,
                resilient social systems, and effective development outcomes are
                achieved through rigorous, unbiased inquiry.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-2xl bg-[#fafafa] border border-[#e5e7eb] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e5e7eb]">
                <div className="p-2 rounded-lg bg-[#f5edff]">
                  <Image
                    src="/logo/Aralytica-Logo.png"
                    alt="ARALytica Emblem"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#191919]">
                    ARALytica
                  </h3>
                  <p className="text-xs text-[#5f5f5f]">Core Mandate</p>
                </div>
              </div>

              <blockquote className="text-sm italic font-serif text-[#191919] leading-relaxed border-l-2 border-[#650dd4] pl-4">
                &ldquo;Our approach combines methodological rigor, contextual
                understanding, and clear communication to make evidence useful
                and actionable.&rdquo;
              </blockquote>

              <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white border border-[#e5e7eb]">
                  <span className="font-bold text-[#191919] block mb-1">
                    Sectors
                  </span>
                  <span className="text-[#5f5f5f]">
                    Education, Governance, Public Programs
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#e5e7eb]">
                  <span className="font-bold text-[#191919] block mb-1">
                    Partners
                  </span>
                  <span className="text-[#5f5f5f]">
                    Government, Multilaterals, Civil Society
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
