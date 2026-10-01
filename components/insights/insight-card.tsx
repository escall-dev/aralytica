import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InsightItem } from "@/lib/data/insights";
import { CategoryBadge } from "@/components/insights/category-badge";
import { PublicationMeta } from "@/components/insights/publication-meta";

interface InsightCardProps {
  item: InsightItem;
}

export function InsightCard({ item }: InsightCardProps) {
  return (
    <article className="flex flex-col p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-center justify-between gap-2 mb-4">
        <CategoryBadge category={item.category} />
      </div>

      <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
        <Link
          href={`/insights/${item.slug}`}
          className="focus-visible:outline-primary"
        >
          {item.title}
        </Link>
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {item.excerpt}
      </p>

      <div className="pt-4 border-t border-border flex items-center justify-between">
        <PublicationMeta
          publishedAt={item.publishedAt}
          readTimeMinutes={item.readTimeMinutes}
          author={item.author}
        />
        <Link
          href={`/insights/${item.slug}`}
          className="text-xs font-semibold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          aria-label={`Read article: ${item.title}`}
        >
          <span>Read</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
