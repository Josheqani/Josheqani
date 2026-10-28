import type { SiteConfig } from "@/types/site-config";
import { siteConfig as defaultSiteConfig } from "@/data/site-config";

interface SiteHeaderProps {
  config?: SiteConfig;
}

export function SiteHeader({ config = defaultSiteConfig }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between py-[26px] font-display text-[17px] font-medium">
      <a
        href="#top"
        className="text-foreground no-underline transition-colors duration-200 hover:text-accent"
      >
        {config.name}
      </a>
      <nav className="flex gap-[26px]">
        {config.navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-soft no-underline transition-colors duration-200 hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
