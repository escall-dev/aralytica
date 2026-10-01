import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesList } from "@/components/services/services-list";
import { HowWeEngage } from "@/components/services/how-we-engage";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ARALytica's core practice areas: Research & Policy Analysis, Evaluation Support, and Capacity Building & Advisory for government agencies and development organizations.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Our Practice"
        title="Turning Data into Decisions"
        description="We help organizations design, evaluate, and strengthen programs through rigorous research and data-driven insights. From strategy to implementation, our work is grounded in evidence and focused on real-world impact."
      />
      <ServicesList />
      <HowWeEngage />
      <ContactCta />
    </div>
  );
}
