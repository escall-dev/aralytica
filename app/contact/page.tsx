import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — ARALytica",
};

export default function ContactPage() {
  return (
    <div className="container-aralytica py-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact
        </h1>
        <p className="text-sm font-medium uppercase tracking-wider text-[#650dd4]">
          Route: /contact
        </p>
        <p className="text-gray-600">
          Temporary placeholder page for the Contact section. Content, contact
          forms, and email integration will be implemented in future phases.
        </p>
      </div>
    </div>
  );
}
