import type { Metadata } from "next";
import { Inter, Vollkorn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aralytica.com"),
  title: {
    default: "ARALytica — Evidence. Insight. Impact.",
    template: "%s | ARALytica",
  },
  description:
    "ARALytica is a research, monitoring, evaluation, and data analytics firm helping organizations turn evidence into practical action.",
  keywords: [
    "ARALytica",
    "research firm",
    "policy evaluation",
    "impact evaluation",
    "econometrics",
    "data analytics",
    "governance diagnostics",
    "education policy",
    "monitoring and evaluation",
  ],
  authors: [{ name: "ARALytica" }],
  creator: "ARALytica",
  publisher: "ARALytica",
  icons: {
    icon: "/logo/Aralytica-Logo.png",
    apple: "/logo/Aralytica-Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aralytica.com",
    siteName: "ARALytica",
    title: "ARALytica — Evidence. Insight. Impact.",
    description:
      "ARALytica is a research, monitoring, evaluation, and data analytics firm helping organizations turn evidence into practical action.",
    images: [
      {
        url: "/logo/Aralytica-Logo.png",
        width: 512,
        height: 512,
        alt: "ARALytica Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ARALytica — Evidence. Insight. Impact.",
    description:
      "ARALytica is a research, monitoring, evaluation, and data analytics firm helping organizations turn evidence into practical action.",
    images: ["/logo/Aralytica-Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARALytica",
  url: "https://aralytica.com",
  logo: "https://aralytica.com/logo/Aralytica-Logo.png",
  slogan: "Evidence. Insight. Impact.",
  description:
    "ARALytica is a research, monitoring, evaluation, and data analytics firm helping organizations turn evidence into practical action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${vollkorn.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fafafa] text-[#191919]">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#650dd4] focus:text-white focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 focus:outline-none"
        >
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
