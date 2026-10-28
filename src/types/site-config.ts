export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  name: string;
  githubUsername: string;
  githubBadgeLabel: string;
  navItems: NavItem[];
}
