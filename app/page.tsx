import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container-aralytica py-16">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-[#650dd4]">
          Phase 0: Safe Development Setup
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          ARALytica
        </h1>
        <p className="text-xl font-medium text-[#650dd4]">
          Evidence. Insight. Impact.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          Welcome to the Next.js development version of ARALytica. This is a
          clean development environment ready for phased reconstruction. The
          production WordPress site at{" "}
          <a
            href="https://aralytica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#650dd4] underline"
          >
            aralytica.com
          </a>{" "}
          remains untouched and operational.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-md bg-[#650dd4] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#520ab0] transition-colors"
          >
            Explore Routes
          </Link>
          <a
            href="https://aralytica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Live Production
          </a>
        </div>
      </div>
    </div>
  );
}
