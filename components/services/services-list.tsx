import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/lib/data/services";
import { Badge } from "@/components/ui/badge";

export function ServicesList() {
  return (
    <section className="py-20 sm:py-24 bg-card border-b border-border transition-colors duration-200">
      <Container>
        <div className="space-y-20 sm:space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Visual Area */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-border shadow-sm bg-muted group">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-103"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="primary"
                        className="bg-card/95 backdrop-blur-xs shadow-xs"
                      >
                        {service.eyebrow}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block mb-2">
                      Practice Pillar 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.fullDescription.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="pt-2 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Key Areas of Work:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      {service.areasOfWork.map((area) => (
                        <li key={area} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button href="/contact" variant="primary" size="md">
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
