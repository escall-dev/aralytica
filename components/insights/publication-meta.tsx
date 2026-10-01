import { Calendar, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface PublicationMetaProps {
  publishedAt: string;
  readTimeMinutes?: number;
  author?: string;
  className?: string;
}

export function PublicationMeta({
  publishedAt,
  readTimeMinutes,
  author,
  className,
}: PublicationMetaProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 text-xs text-muted-foreground",
        className
      )}
    >
      <div className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
        <time dateTime={publishedAt}>{publishedAt}</time>
      </div>

      {readTimeMinutes && (
        <>
          <span className="text-muted-foreground/40">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{readTimeMinutes} min read</span>
          </div>
        </>
      )}

      {author && (
        <>
          <span className="text-muted-foreground/40">•</span>
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{author}</span>
          </div>
        </>
      )}
    </div>
  );
}
