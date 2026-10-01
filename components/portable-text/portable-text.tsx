import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { getSanityImageUrl } from "@/lib/sanity/image";

interface CustomPortableTextProps {
  value?: PortableTextBlock[];
  className?: string;
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 font-sans">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-10 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-serif font-bold text-foreground mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-5 sm:pl-6 my-8 italic text-lg sm:text-xl text-foreground bg-accent/40 py-3.5 pr-4 rounded-r-xl font-serif">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2.5 text-foreground/90 text-base sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2.5 text-foreground/90 text-base sm:text-lg">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline underline-offset-2">{children}</span>
    ),
    code: ({ children }) => (
      <code className="font-mono text-xs sm:text-sm bg-muted text-primary px-1.5 py-0.5 rounded font-medium border border-border">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isInternal = href.startsWith("/") || href.startsWith("#");

      if (isInternal) {
        return (
          <Link
            href={href}
            className="text-primary font-medium underline underline-offset-4 hover:text-primary-hover transition-colors"
          >
            {children}
          </Link>
        );
      }

      // Safe external link rendering
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium underline underline-offset-4 hover:text-primary-hover transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = getSanityImageUrl(value, 1000);
      if (!imageUrl) return null;

      return (
        <figure className="my-8 rounded-2xl overflow-hidden border border-border bg-muted/30">
          <div className="relative aspect-video w-full">
            <Image
              src={imageUrl}
              alt={value.alt || "ARALytica visual"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-muted-foreground font-mono border-t border-border bg-card">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function CustomPortableText({
  value,
  className = "",
}: CustomPortableTextProps) {
  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div className={`prose-aralytica ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}
