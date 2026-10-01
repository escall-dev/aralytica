import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    title: "Research & Policy Analysis",
    description:
      "We design and deliver rigorous, policy-relevant research that informs strategy, strengthens decision-making, and supports evidence-based development across complex public sectors.",
    image: "/images/research-policy-analysis.png",
    alt: "Research and policy analysis methodology",
    tag: "Core Research",
  },
  {
    title: "Evaluation Support",
    description:
      "We conduct independent and learning-focused evaluations to assess program effectiveness, examine causal mechanisms, improve performance, and generate actionable insights for partners.",
    image: "/images/evaluation-support.png",
    alt: "Independent evaluation support framework",
    tag: "Diagnostics & Review",
  },
  {
    title: "Capacity Building & Advisory",
    description:
      "We support organizations in strengthening systems, enhancing institutional data capability, and translating evidence into daily practice through tailored learning and advisory partnerships.",
    image: "/images/capacity-building-advisory.png",
    alt: "Capacity building and technical advisory",
    tag: "Advisory & Systems",
  },
];

export function ServicesPreview() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-[#fafafa] border-b border-[#e5e7eb]"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Practice"
          title="Turning Data into Decisions"
          description="We help organizations design, evaluate, and strengthen programs through rigorous research and data-driven insights. From strategy to implementation, our work is grounded in evidence and focused on real-world impact."
        />

        {/* 3 Distinct Service Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow-md hover:border-[#650dd4]/30 transition-all duration-200 group"
            >
              {/* Visual Presentation */}
              <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden border-b border-gray-100">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/90 backdrop-blur-xs text-[#650dd4] shadow-xs">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Text & Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-[#191919] group-hover:text-[#650dd4] transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5f5f5f] leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#650dd4] hover:text-[#520ab0] transition-colors focus-visible:outline-[#650dd4]"
                  >
                    <span>Learn more about this practice</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Full Services */}
        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="md">
            <span>Explore All Practice Areas & Methodologies</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
