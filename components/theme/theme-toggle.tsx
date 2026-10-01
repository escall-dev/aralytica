"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function ThemeToggle({
  className,
  variant = "desktop",
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Prevent hydration mismatch by rendering a stable placeholder until mounted
  if (!mounted) {
    if (variant === "mobile") {
      return (
        <div
          className={cn(
            "flex items-center justify-between w-full px-3.5 py-3 rounded-xl border border-border bg-card text-muted-foreground opacity-70",
            className
          )}
          aria-hidden="true"
        >
          <span className="flex items-center gap-2.5">
            <Moon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Theme</span>
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono">
            ...
          </span>
        </div>
      );
    }

    return (
      <div
        className={cn(
          "inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card text-muted-foreground opacity-70",
          className
        )}
        aria-hidden="true"
      >
        <Moon className="h-4 w-4" />
      </div>
    );
  }

  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          "flex items-center justify-between w-full px-3.5 py-3 rounded-xl text-sm font-medium border border-border bg-card text-foreground hover:bg-muted/70 transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer",
          className
        )}
        aria-label={label}
        aria-pressed={isDark}
      >
        <span className="flex items-center gap-2.5">
          {isDark ? (
            <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4 text-primary" aria-hidden="true" />
          )}
          <span>{isDark ? "Dark theme active" : "Light theme active"}</span>
        </span>
        <span className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono font-medium">
          {isDark ? "Dark" : "Light"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card text-foreground hover:bg-muted hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer",
        className
      )}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      {isDark ? (
        <Sun
          className="h-4 w-4 text-amber-400 transition-transform duration-200 rotate-0 hover:rotate-45"
          aria-hidden="true"
        />
      ) : (
        <Moon
          className="h-4 w-4 text-muted-foreground hover:text-primary transition-transform duration-200"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
}
