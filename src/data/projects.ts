import type { WorkData } from "@/types/project";

export const workData: WorkData = {
  title: "Selected work",
  subtitle: "Four projects from the last three years.",
  projects: [
    {
      year: "2026",
      title: "Pardis, a habit tracker",
      description:
        "Mobile app with 40k users. I designed it and shipped the React Native build.",
      href: "#",
    },
    {
      year: "2025",
      title: "Namak Coffee online shop",
      description:
        "Rebuilt checkout for a roastery. Orders went up 22% in two months.",
      href: "#",
    },
    {
      year: "2025",
      title: "Shahr Maps transit redesign",
      description:
        "Rethought route search for a city bus network, with user tests.",
      href: "#",
    },
    {
      year: "2024",
      title: "Type specimen generator",
      description:
        "A small open-source tool for previewing fonts. 1.3k stars on GitHub.",
      href: "#",
    },
  ],
};
