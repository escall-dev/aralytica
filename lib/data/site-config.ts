export interface NavItem {
  href: string;
  label: string;
}

export const SITE_CONFIG = {
  name: "ARALytica",
  tagline: "Evidence. Insight. Impact.",
  description:
    "ARALytica is a research, monitoring, evaluation, and data analytics firm that helps organizations turn evidence into practical action.",
  contactEmail: "aralytica@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61584477189118",
  navLinks: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/research", label: "Research" },
    { href: "/insights", label: "Insights" },
    { href: "/team", label: "Team" },
  ] as NavItem[],
  footerLinks: {
    practice: [
      { href: "/services", label: "Services Overview" },
      { href: "/research", label: "Research & Studies" },
      { href: "/insights", label: "Insights & Briefs" },
    ],
    organization: [
      { href: "/about", label: "About ARALytica" },
      { href: "/team", label: "Our Team" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
};
