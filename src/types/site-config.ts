export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  url: string;
  title: string;
  description: string;
  name: string;
  githubUsername: string;
  githubBadgeLabel: string;
  keywords: string[];
  navItems: NavItem[];
}
