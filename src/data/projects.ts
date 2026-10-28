import type { WorkData } from "@/types/project";

export const workData: WorkData = {
  title: "Selected work",
  subtitle: "Four projects from the last three years.",
  projects: [
    {
      slug: "pardis",
      year: "2026",
      title: "Pardis, a habit tracker",
      description:
        "Mobile app with 40k users. I designed it and shipped the React Native build.",
      longDescription:
        "Pardis is a daily habit tracking app designed around calm micro-interactions and progressive streaks. I led the interface design from initial sketches to high-fidelity prototypes and developed the cross-platform React Native client with offline-first synchronization.",
      role: "Lead Product Designer & Mobile Engineer",
      tech: ["React Native", "TypeScript", "Tailwind CSS", "Expo", "Zustand"],
      links: [
        { label: "View Project", href: "#" },
        { label: "GitHub", href: "#" },
      ],
      imagePlaceholderText: "Pardis mobile app preview",
      href: "#",
    },
    {
      slug: "namak-coffee",
      year: "2025",
      title: "Namak Coffee online shop",
      description:
        "Rebuilt checkout for a roastery. Orders went up 22% in two months.",
      longDescription:
        "A streamlined e-commerce experience for an artisanal specialty coffee roastery. Focused on reducing checkout friction, improving mobile navigation, and optimizing subscription order workflows with sub-second page transitions.",
      role: "Front-end Developer & UX Designer",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
      links: [
        { label: "Live Store", href: "#" },
      ],
      imagePlaceholderText: "Namak Coffee store preview",
      href: "#",
    },
    {
      slug: "shahr-maps",
      year: "2025",
      title: "Shahr Maps transit redesign",
      description:
        "Rethought route search for a city bus network, with user tests.",
      longDescription:
        "Redesigned the multi-modal transit search experience for a metropolitan public transportation network. Conducted user interviews and usability tests to design intuitive timetable diagrams, transfer wayfinding, and live delay notifications.",
      role: "Product Designer",
      tech: ["Figma", "Design Systems", "Prototyping", "User Research"],
      links: [
        { label: "Case Study", href: "#" },
      ],
      imagePlaceholderText: "Shahr Maps transit interface preview",
      href: "#",
    },
    {
      slug: "type-specimen",
      year: "2024",
      title: "Type specimen generator",
      description:
        "A small open-source tool for previewing fonts. 1.3k stars on GitHub.",
      longDescription:
        "An interactive typography playground built for web designers to test variable font axes, OpenType features, glyph coverage, and font pairing combinations in real-time with zero latency.",
      role: "Creator & Developer",
      tech: ["TypeScript", "Canvas API", "Vite", "Tailwind CSS"],
      links: [
        { label: "GitHub", href: "#" },
        { label: "Live Demo", href: "#" },
      ],
      imagePlaceholderText: "Type specimen tool preview",
      href: "#",
    },
  ],
};
