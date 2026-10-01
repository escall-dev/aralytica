import Link from "next/link";
import { Calendar, Download, FileText } from "lucide-react";
import { ResearchItem } from "@/lib/data/research";
import { Badge } from "@/components/ui/badge";

interface ResearchCardProps {
  item: ResearchItem;
}

export function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="flex flex-col p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 group">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <Badge variant="primary" className="text-xs">
          {item.category}
        </Badge>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
          <span>{item.date}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
        <FileText className="h-3.5 w-3.5 text-primary" />
        <span>{item.documentType}</span>
      </div>

      <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
        {item.slug ? (
          <Link
            href={`/research/${item.slug}`}
            className="hover:underline focus-visible:outline-primary"
          >
            {item.title}
          </Link>
        ) : (
          item.title
        )}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {item.abstract}
      </p>

      {item.authors && item.authors.length > 0 && (
        <div className="mt-4 text-xs text-muted-foreground font-medium">
          Authors: {item.authors.join(", ")}
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs font-medium text-primary bg-accent px-2.5 py-1 rounded">
          {item.status === "published" ? "Available" : "Forthcoming"}
        </span>

        <div className="flex items-center gap-3">
          {item.slug && (
            <Link
              href={`/research/${item.slug}`}
              className="text-xs font-semibold text-primary hover:underline"
            >
              View Document
            </Link>
          )}
          {item.downloadUrl ? (
            <a
              href={item.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <Download className="h-3.5 w-3.5" />
              <span>PDF</span>
            </a>
          ) : (
            <span className="text-xs text-muted-foreground font-mono">
              Catalog Ref
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
