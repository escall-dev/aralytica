import { InsightCategory } from "@/lib/data/insights";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: InsightCategory;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const categoryStyles: Record<InsightCategory, string> = {
    "Featured Articles": "bg-accent text-accent-foreground border-primary/30",
    "Research Briefs":
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50",
    "Data Insights":
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50",
    "Methodological Notes":
      "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border",
        categoryStyles[category] ||
          "bg-muted text-muted-foreground border-border",
        className
      )}
    >
      {category}
    </span>
  );
}
