import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — ARALytica",
};

export default function ResearchPage() {
  return (
    <div className="container-aralytica py-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Research
        </h1>
        <p className="text-sm font-medium uppercase tracking-wider text-[#650dd4]">
          Route: /research
        </p>
        <p className="text-gray-600">
          Temporary placeholder page for the Research section. Content and full
          design will be implemented in future phases.
        </p>
      </div>
    </div>
  );
}
