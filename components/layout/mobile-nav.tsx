"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const pathname = usePathname();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl flex flex-col z-10 animate-in slide-in-from-right duration-250 ease-out border-l border-gray-100">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-sm font-semibold tracking-wider uppercase text-[#650dd4]">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus-visible:outline-[#650dd4]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive
                    ? "bg-[#f5edff] text-[#650dd4] font-semibold"
                    : "text-[#191919] hover:bg-gray-50 hover:text-[#650dd4]"
                )}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#650dd4]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-100 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#650dd4] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#520ab0] transition-colors focus-visible:outline-[#650dd4]"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-center text-xs text-gray-400">
            Evidence. Insight. Impact.
          </p>
        </div>
      </div>
    </div>
  );
}
