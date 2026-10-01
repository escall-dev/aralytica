import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "neutral" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#f5edff] text-[#650dd4] border border-[#650dd4]/20",
    neutral: "bg-gray-100 text-gray-700 border border-gray-200",
    outline: "bg-transparent text-[#650dd4] border border-[#650dd4]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
