import type { FooterData } from "@/types/footer";
import { siteConfig } from "@/data/site-config";

export const footerData: FooterData = {
  copyright:
    process.env.NEXT_PUBLIC_FOOTER_COPYRIGHT ||
    (siteConfig.name ? `© 2026 ${siteConfig.name}` : "© 2026"),
};
