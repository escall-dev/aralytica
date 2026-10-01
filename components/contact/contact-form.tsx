"use client";

import { useState } from "react";
import { CheckCircle2, Send, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PRACTICE_AREAS,
  ContactFormData,
  ContactApiResponse,
} from "@/lib/types/contact";
import { SITE_CONFIG } from "@/lib/data/site-config";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    organization: "",
    email: "",
    practiceArea: "Research & Policy Analysis",
    subject: "",
    message: "",
    botField: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json().catch(() => ({
        success: false,
        error:
          "Unable to parse server response. Please reach out to ARALytica directly.",
      }));

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            `We couldn't submit your inquiry right now. Please try again or contact ARALytica directly at ${SITE_CONFIG.contactEmail}.`
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        `A network connection issue prevented sending your inquiry. Please try again or contact ARALytica directly at ${SITE_CONFIG.contactEmail}.`
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      practiceArea: "Research & Policy Analysis",
      subject: "",
      message: "",
      botField: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-8 sm:p-10 rounded-2xl bg-card border border-border shadow-xs text-center space-y-5 animate-in fade-in duration-300"
      >
        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-serif font-bold text-foreground">
            Inquiry Received by ARALytica
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Your inquiry regarding{" "}
            &ldquo;<strong>{formData.subject}</strong>&rdquo; has been
            successfully received.
          </p>
          <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
            Technical leadership will evaluate your scope and respond directly
            to <strong className="text-foreground">{formData.email}</strong>,
            typically within two business days.
          </p>
        </div>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleReset}
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
      noValidate={false}
      className="p-8 sm:p-10 rounded-2xl bg-card border border-border shadow-xs space-y-6"
    >
      {/* Honeypot Anti-Spam Field - Hidden from legitimate users */}
      <div
        className="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="contact-bot-field">Do not fill this field</label>
        <input
          id="contact-bot-field"
          type="text"
          name="botField"
          tabIndex={-1}
          autoComplete="off"
          value={formData.botField}
          onChange={(e) =>
            setFormData({ ...formData, botField: e.target.value })
          }
        />
      </div>

      {/* Error Banner */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-sm text-red-900 dark:text-red-200 flex items-start gap-3 animate-in fade-in duration-200"
        >
          <AlertCircle
            className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="space-y-1">
            <p className="font-semibold text-xs uppercase tracking-wide text-red-700 dark:text-red-300">
              Inquiry Submission Notice
            </p>
            <p className="text-xs leading-relaxed text-red-800 dark:text-red-200">
              {errorMessage ||
                `We couldn't submit your inquiry right now. Please try again or contact ARALytica directly at ${SITE_CONFIG.contactEmail}.`}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Full Name{" "}
            <span className="text-primary" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            aria-required="true"
            disabled={status === "submitting"}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Maria Santos"
            className="w-full px-4 py-2.5 rounded-lg border border-input-border bg-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-hidden disabled:bg-surface-subtle disabled:text-muted-foreground/50"
          />
        </div>

        {/* Organization */}
        <div className="space-y-2">
          <label
            htmlFor="contact-organization"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Organization / Agency{" "}
            <span className="text-primary" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-organization"
            name="organization"
            type="text"
            required
            aria-required="true"
            disabled={status === "submitting"}
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
            placeholder="e.g. Ministry of Education / Development Partner"
            className="w-full px-4 py-2.5 rounded-lg border border-input-border bg-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-hidden disabled:bg-surface-subtle disabled:text-muted-foreground/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Work Email Address{" "}
            <span className="text-primary" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            disabled={status === "submitting"}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="name@organization.org"
            className="w-full px-4 py-2.5 rounded-lg border border-input-border bg-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-hidden disabled:bg-surface-subtle disabled:text-muted-foreground/50"
          />
        </div>

        {/* Practice Area */}
        <div className="space-y-2">
          <label
            htmlFor="contact-practice-area"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Practice Area of Interest{" "}
            <span className="text-primary" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="contact-practice-area"
            name="practiceArea"
            required
            aria-required="true"
            disabled={status === "submitting"}
            value={formData.practiceArea}
            onChange={(e) =>
              setFormData({
                ...formData,
                practiceArea: e.target.value as ContactFormData["practiceArea"],
              })
            }
            className="w-full px-4 py-2.5 rounded-lg border border-input-border bg-input text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-hidden disabled:bg-surface-subtle disabled:text-muted-foreground/50"
          >
            {PRACTICE_AREAS.map((area) => (
              <option
                key={area}
                value={area}
                className="bg-card text-foreground"
              >
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label
          htmlFor="contact-subject"
          className="block text-xs font-semibold uppercase tracking-wider text-foreground"
        >
          Subject / Study Title{" "}
          <span className="text-primary" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          aria-required="true"
          disabled={status === "submitting"}
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="Brief summary of your research or evaluation need"
          className="w-full px-4 py-2.5 rounded-lg border border-input-border bg-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-hidden disabled:bg-surface-subtle disabled:text-muted-foreground/50"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold uppercase tracking-wider text-foreground"
        >
          Detailed Inquiry{" "}
          <span className="text-primary" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-required="true"
          rows={5}
          disabled={status === "submitting"}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Please share details on your study scope, target timeline, institutional context, or specific analytical objectives..."
          className="w-full px-4 py-2.5 rounded-lg border border-input-border bg-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-hidden resize-y disabled:bg-surface-subtle disabled:text-muted-foreground/50"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
          className="min-w-[170px]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
        <span className="text-xs text-muted-foreground">
          Direct technical review • Formal correspondence
        </span>
      </div>
    </form>
  );
}
