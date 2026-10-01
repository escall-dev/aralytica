import { InsightCategory } from "@/lib/data/insights";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: InsightCategory;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const categoryStyles: Record<InsightCategory, string> = {
    "Featured Articles": "bg-[#f5edff] text-[#650dd4] border-[#650dd4]/30",
    "Research Briefs": "bg-blue-50 text-blue-700 border-blue-200",
    "Data Insights": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Methodological Notes": "bg-amber-50 text-amber-800 border-amber-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border",
        categoryStyles[category] || "bg-gray-100 text-gray-700 border-gray-200",
        className
      )}
    >
      {category}
    </span>
  );
}
