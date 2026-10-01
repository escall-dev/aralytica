"use client";

import { useState } from "react";
import { CheckCircle2, Send, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/data/site-config";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    serviceInterest: "Research & Policy Analysis",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only validation & UI demonstration
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e5e7eb] shadow-sm text-center space-y-5 animate-in fade-in duration-300">
        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-serif font-bold text-[#191919]">
            Inquiry Submission Simulated
          </h3>
          <p className="text-sm text-[#5f5f5f] max-w-md mx-auto leading-relaxed">
            Thank you for connecting with <strong>ARALytica</strong>,{" "}
            {formData.name}. In this preview build, your inquiry regarding
            &ldquo;
            {formData.subject || formData.serviceInterest}&rdquo; has been
            validated client-side.
          </p>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 max-w-md mx-auto text-left flex items-start gap-2.5">
            <Info className="h-4 w-4 text-[#650dd4] shrink-0 mt-0.5" />
            <span>
              Note: This is a frontend demonstration. No email was dispatched to
              an external server. For active inquiries, contact us directly at{" "}
              <a
                href={`mailto:${SITE_CONFIG.contactEmailPlaceholder}`}
                className="font-semibold text-[#650dd4] hover:underline"
              >
                {SITE_CONFIG.contactEmailPlaceholder}
              </a>
              .
            </span>
          </div>
        </div>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e5e7eb] shadow-sm space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Full Name{" "}
            <span className="text-[#650dd4]" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            aria-required="true"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Maria Santos"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-2 focus:ring-[#650dd4]/20 transition-all outline-hidden"
          />
        </div>

        {/* Organization */}
        <div className="space-y-2">
          <label
            htmlFor="contact-organization"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Organization / Agency{" "}
            <span className="text-[#650dd4]" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-organization"
            name="organization"
            type="text"
            required
            aria-required="true"
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
            placeholder="e.g. Ministry of Education / Development Partner"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-2 focus:ring-[#650dd4]/20 transition-all outline-hidden"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Work Email Address{" "}
            <span className="text-[#650dd4]" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="name@organization.org"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-2 focus:ring-[#650dd4]/20 transition-all outline-hidden"
          />
        </div>

        {/* Practice Area */}
        <div className="space-y-2">
          <label
            htmlFor="contact-practice-area"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Practice Area of Interest
          </label>
          <select
            id="contact-practice-area"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={(e) =>
              setFormData({ ...formData, serviceInterest: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] bg-white focus:border-[#650dd4] focus:ring-2 focus:ring-[#650dd4]/20 transition-all outline-hidden"
          >
            <option value="Research & Policy Analysis">
              Research &amp; Policy Analysis
            </option>
            <option value="Evaluation Support">
              Evaluation Support (Baseline, Midterm, Impact)
            </option>
            <option value="Capacity Building & Advisory">
              Capacity Building &amp; Technical Advisory
            </option>
            <option value="General Institutional Inquiry">
              General Institutional Inquiry
            </option>
          </select>
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label
          htmlFor="contact-subject"
          className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
        >
          Subject / Study Title{" "}
          <span className="text-[#650dd4]" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          aria-required="true"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="Brief summary of your research or evaluation need"
          className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-2 focus:ring-[#650dd4]/20 transition-all outline-hidden"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
        >
          Detailed Inquiry{" "}
          <span className="text-[#650dd4]" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-required="true"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Please share details on your study scope, target timeline, institutional context, or specific analytical objectives..."
          className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-2 focus:ring-[#650dd4]/20 transition-all outline-hidden resize-y"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Button type="submit" variant="primary" size="lg">
          <span>Submit Inquiry</span>
          <Send className="h-4 w-4" />
        </Button>
        <span className="text-xs text-[#5f5f5f]">
          Confidentiality assured • Direct practice review
        </span>
      </div>
    </form>
  );
}
