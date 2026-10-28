import type { SiteConfig } from "@/types/site-config";

const name = process.env.NEXT_PUBLIC_SITE_NAME || "Ali Josheqani";

const title = process.env.NEXT_PUBLIC_SITE_TITLE || name;

const description =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Front-end developer from Iran with 3+ years of experience, building fast, accessible web apps.";

export const siteConfig: SiteConfig = {
  title,
  description,
  name,
  githubUsername: "Josheqani",
  githubBadgeLabel: "Synced from GitHub",
  navItems: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
