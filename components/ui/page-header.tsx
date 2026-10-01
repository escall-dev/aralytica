import { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-card via-background to-accent/25 py-16 sm:py-20 lg:py-24 border-b border-border transition-colors duration-200",
        className
      )}
    >
      {/* Subtle analytical grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-3xl space-y-4">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent border border-primary/20 text-xs font-semibold tracking-wider uppercase text-accent-foreground">
              <span>{eyebrow}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight leading-[1.15]">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="pt-2">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
