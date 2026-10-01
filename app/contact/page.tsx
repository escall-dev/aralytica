import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with ARALytica to discuss study designs, independent program evaluations, econometric analytics, and institutional capacity advisory.",
  alternates: {
    canonical: "https://aralytica.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Get in Touch"
        title="Connect with Our Practice"
        description="Have a research, evaluation, or data question? Connect with our technical team to discuss study designs, institutional evaluations, or capacity advisory."
      />

      <section className="py-20 sm:py-24 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Information Column */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
