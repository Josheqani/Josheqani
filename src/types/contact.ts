export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactData {
  title: string;
  email: string;
  socialLinks: SocialLink[];
}
