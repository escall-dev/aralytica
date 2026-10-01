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
    <article className="flex flex-col p-6 sm:p-7 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs hover:border-[#650dd4]/30 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-center justify-between gap-2 mb-4">
        <CategoryBadge category={item.category} />
      </div>

      <h3 className="text-xl font-serif font-bold text-[#191919] group-hover:text-[#650dd4] transition-colors mb-3 leading-snug">
        <Link
          href={`/insights/${item.slug}`}
          className="focus-visible:outline-[#650dd4]"
        >
          {item.title}
        </Link>
      </h3>

      <p className="text-sm text-[#5f5f5f] leading-relaxed mb-6 flex-1">
        {item.excerpt}
      </p>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <PublicationMeta
          publishedAt={item.publishedAt}
          readTimeMinutes={item.readTimeMinutes}
          author={item.author}
        />
        <Link
          href={`/insights/${item.slug}`}
          className="text-xs font-semibold text-[#650dd4] hover:text-[#520ab0] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          aria-label={`Read article: ${item.title}`}
        >
          <span>Read</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
