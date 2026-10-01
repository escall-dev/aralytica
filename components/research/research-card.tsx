import { Calendar, Download, FileText } from "lucide-react";
import { ResearchItem } from "@/lib/data/research";
import { Badge } from "@/components/ui/badge";

interface ResearchCardProps {
  item: ResearchItem;
}

export function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="flex flex-col p-6 sm:p-7 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs hover:border-[#650dd4]/30 hover:shadow-md transition-all duration-200 group">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <Badge variant="primary" className="text-xs">
          {item.category}
        </Badge>
        <div className="flex items-center gap-1.5 text-xs text-[#5f5f5f]">
          <Calendar className="h-3.5 w-3.5 text-gray-400" />
          <span>{item.date}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-mono text-[#5f5f5f] mb-3">
        <FileText className="h-3.5 w-3.5 text-[#650dd4]" />
        <span>{item.documentType}</span>
      </div>

      <h3 className="text-xl font-serif font-bold text-[#191919] group-hover:text-[#650dd4] transition-colors mb-3 leading-snug">
        {item.title}
      </h3>

      <p className="text-sm text-[#5f5f5f] leading-relaxed flex-1">
        {item.abstract}
      </p>

      {item.authors && item.authors.length > 0 && (
        <div className="mt-4 text-xs text-gray-600 font-medium">
          Authors: {item.authors.join(", ")}
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-medium text-[#650dd4] bg-[#f5edff] px-2.5 py-1 rounded">
          {item.status === "published" ? "Available" : "Forthcoming"}
        </span>

        {item.downloadUrl ? (
          <a
            href={item.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#650dd4] hover:underline"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </a>
        ) : (
          <span className="text-xs text-gray-400 font-mono">Catalog Ref</span>
        )}
      </div>
    </article>
  );
}
