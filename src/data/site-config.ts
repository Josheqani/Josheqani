import type { SiteConfig } from "@/types/site-config";

const name = process.env.NEXT_PUBLIC_SITE_NAME || "Ali Josheqani";

const title = process.env.NEXT_PUBLIC_SITE_TITLE || name;

const description =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Front-end developer from Iran with 3+ years of experience, building fast, accessible web apps.";

const url =
  process.env.NEXT_PUBLIC_SITE_URL || "https://josheqani.ir";

export const siteConfig: SiteConfig = {
  url,
  title,
  description,
  name,
  githubUsername: "Josheqani",
  githubBadgeLabel: "Synced from GitHub",
  keywords: [
    "Ali Josheqani",
    "Ali Josheghani",
    "علی جوشقانی",
    "Front-end Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Iran",
    "ShaliSystem",
    "Portfolio",
  ],
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
