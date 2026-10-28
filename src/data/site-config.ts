import type { SiteConfig } from "@/types/site-config";

const name = process.env.NEXT_PUBLIC_SITE_NAME || "Ali Josheghani";

const title = process.env.NEXT_PUBLIC_SITE_TITLE || name;

const description =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Product designer and front-end developer portfolio.";

export const siteConfig: SiteConfig = {
  title,
  description,
  name,
  navItems: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
