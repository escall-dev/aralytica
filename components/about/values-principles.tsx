import { Shield, Sparkles, Scale, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const VALUES = [
  {
    icon: Shield,
    title: "Empirical Integrity",
    description:
      "We let evidence guide conclusions rather than predetermined narratives. Independence, neutrality, and objectivity govern every study we execute.",
  },
  {
    icon: Scale,
    title: "Methodological Discipline",
    description:
      "We choose tools tailored to research questions—deploying experimental, econometric, or mixed-methods approaches that are methodologically justified.",
  },
  {
    icon: Compass,
    title: "Practical Actionability",
    description:
      "Evidence should never remain shelfware. Our recommendations are grounded in institutional realities, budget constraints, and operational feasibility.",
  },
  {
    icon: Sparkles,
    title: "Disciplined Learning",
    description:
      "Embodying 'Aral', we treat every engagement as a continuous learning cycle, equipping partner teams with enduring analytical capacity.",
  },
];

export function ValuesPrinciples() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
      <Container>
        <SectionHeading
          eyebrow="Core Values"
          title="Principles that Guide Our Work"
          description="In an era of information overload, we champion clarity, methodological transparency, and ethical responsibility in the collection and interpretation of data."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="flex flex-col p-6 rounded-xl bg-[#fafafa] border border-[#e5e7eb] hover:bg-white hover:border-[#650dd4]/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5edff] text-[#650dd4] mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#191919] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5f5f5f] leading-relaxed flex-1">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
