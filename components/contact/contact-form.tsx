"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    // Phase 2: Client-side validation & UI feedback only.
    // Server submission will be integrated with Resend in Phase 3+.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e5e7eb] shadow-sm text-center space-y-5 animate-in fade-in duration-300">
        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-[#191919]">
            Inquiry Received
          </h3>
          <p className="text-sm text-[#5f5f5f] max-w-md mx-auto leading-relaxed">
            Thank you for connecting with <strong>ARALytica</strong>,{" "}
            {formData.name}. Your message regarding &ldquo;
            {formData.subject || formData.serviceInterest}&rdquo; has been
            noted. A practice specialist will review your details.
          </p>
        </div>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSubmitted(false)}
          >
            Send Another Inquiry
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
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Full Name <span className="text-[#650dd4]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Maria Santos"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-1 focus:ring-[#650dd4] transition-colors outline-hidden"
          />
        </div>

        {/* Organization */}
        <div className="space-y-2">
          <label
            htmlFor="organization"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Organization / Agency <span className="text-[#650dd4]">*</span>
          </label>
          <input
            id="organization"
            type="text"
            required
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
            placeholder="e.g. Ministry of Education / Development Partner"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-1 focus:ring-[#650dd4] transition-colors outline-hidden"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Work Email Address <span className="text-[#650dd4]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="name@organization.org"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-1 focus:ring-[#650dd4] transition-colors outline-hidden"
          />
        </div>

        {/* Practice Area */}
        <div className="space-y-2">
          <label
            htmlFor="serviceInterest"
            className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
          >
            Practice Area of Interest
          </label>
          <select
            id="serviceInterest"
            value={formData.serviceInterest}
            onChange={(e) =>
              setFormData({ ...formData, serviceInterest: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] bg-white focus:border-[#650dd4] focus:ring-1 focus:ring-[#650dd4] transition-colors outline-hidden"
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
          htmlFor="subject"
          className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
        >
          Subject / Study Title <span className="text-[#650dd4]">*</span>
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="Brief summary of your research or evaluation need"
          className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-1 focus:ring-[#650dd4] transition-colors outline-hidden"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#191919]"
        >
          Detailed Inquiry <span className="text-[#650dd4]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Please share details on your study scope, target timeline, institutional context, or specific analytical objectives..."
          className="w-full px-4 py-2.5 rounded-lg border border-[#e5e7eb] text-sm text-[#191919] placeholder:text-gray-400 focus:border-[#650dd4] focus:ring-1 focus:ring-[#650dd4] transition-colors outline-hidden resize-y"
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
