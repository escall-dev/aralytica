import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-accent/25 transition-colors duration-200">
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#191919] dark:bg-card text-white dark:text-foreground border border-transparent dark:border-border p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl transition-colors duration-200">
          {/* Subtle Decorative Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5"
            style={{
              backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-accent text-[#f5edff] dark:text-accent-foreground border border-white/15 dark:border-primary/20 text-xs font-semibold uppercase tracking-wider">
              <Mail className="h-3.5 w-3.5 text-[#f5edff] dark:text-primary" />
              <span>Connect with ARALytica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white dark:text-foreground tracking-tight leading-[1.2]">
              Have a research or data question?
            </h2>

            <p className="text-base sm:text-lg text-gray-300 dark:text-muted-foreground leading-relaxed">
              Whether you are designing a new study, evaluating an ongoing
              program, or seeking strategic data advisory for your organization,
              our team is ready to assist.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 dark:border-border dark:bg-muted dark:text-foreground dark:hover:bg-muted/80"
              >
                Explore Our Services
              </Button>
            </div>

            <p className="pt-2 text-xs text-gray-400 dark:text-muted-foreground">
              Evidence • Insight • Impact
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
