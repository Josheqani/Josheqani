import type { ContactData } from "@/types/contact";

export const contactData: ContactData = {
  title: "Got a project? Tell me about it.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "josheqani@gmail.com",
  socialLinks: [
    {
      label: "GitHub",
      href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Josheqani",
    },
    {
      label: "Telegram",
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/josheqani",
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/josheqani",
    },
  ],
};
