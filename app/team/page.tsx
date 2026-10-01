import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TEAM_DATA } from "@/lib/data/team";
import { TeamMemberCard } from "@/components/team/team-member-card";
import { AssociatesNetwork } from "@/components/team/associates-network";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet ARALytica's leadership and technical team. Led by founder Joel Paulin Mendoza, our specialists combine expertise in evaluation, econometrics, and policy analysis.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Leadership & Practitioners"
        title="Our Team"
        description="A multidisciplinary team of researchers, evaluation specialists, and development analysts committed to producing rigorous evidence that informs policy and improves outcomes."
      />

      {/* Leadership Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
        <Container>
          <SectionHeading
            eyebrow="Technical Leadership"
            title="Principal Leadership"
            description="Our leadership team drives methodological rigor and strategic advisory across all evaluation and research engagements."
          />

          <div className="mt-14 max-w-4xl mx-auto space-y-8">
            {TEAM_DATA.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Associates & Network Section */}
      <AssociatesNetwork />

      {/* Contact CTA */}
      <ContactCta />
    </div>
  );
}
