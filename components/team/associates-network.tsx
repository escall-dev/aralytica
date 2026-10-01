import { Globe, Users, ShieldCheck, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TEAM_PHILOSOPHY } from "@/lib/data/team";

const NETWORK_CAPABILITIES = [
  {
    icon: GraduationCap,
    title: "Econometric & Quantitative Rigor",
    description:
      "Advanced econometric modeling, counterfactual evaluations, and statistical survey sampling across development sectors.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Collaboration",
    description:
      "Bridging economics, institutional governance, education policy, and mixed-methods fieldwork.",
  },
  {
    icon: Globe,
    title: "Global Experience, Local Insight",
    description:
      "Collaborative working relationships across regional contexts, ensuring contextual relevance and grounded diagnostics.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Advisory Standards",
    description:
      "Translating complex empirical evidence into executive decision roadmaps for multilateral and government partners.",
  },
];

export function AssociatesNetwork() {
  return (
    <section className="py-20 sm:py-24 bg-[#fafafa] border-b border-[#e5e7eb]">
      <Container>
        <SectionHeading
          eyebrow="Associates & International Network"
          title={TEAM_PHILOSOPHY.headline}
          description="We are supported by a network of international associates who contribute specialized expertise and regional knowledge across diverse development contexts."
        />

        {/* Narrative Paragraphs */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4 text-base text-[#5f5f5f] leading-relaxed text-center sm:text-left">
          {TEAM_PHILOSOPHY.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Capability Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NETWORK_CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex flex-col p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5edff] text-[#650dd4] mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#191919] mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5f5f5f] leading-relaxed flex-1">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
