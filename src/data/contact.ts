import type { ContactData } from "@/types/contact";

export const contactData: ContactData = {
  title: "Got a project? Tell me about it.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  socialLinks: [
    {
      label: "GitHub",
      href: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
    },
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    },
  ],
};
