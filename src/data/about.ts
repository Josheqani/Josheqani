import type { AboutData } from "@/types/about";

export const aboutData: AboutData = {
  title: "About",
  subtitle: "A bit of background.",
  paragraphs: [
    "I’m a front-end developer from Iran with 3+ years of professional experience, working mostly with React and Next.js. I care about performance, motion, and RTL-first interfaces.",
    "Currently at ShaliCompany, focusing on fast, accessible interfaces, fluid micro-interactions, and the small details that make web applications feel great to use.",
  ],
  photoPlaceholderText: "Ali Josheqani",
  facts: [
    { label: "Role", value: "Front-end Developer" },
    { label: "Current", value: "ShaliCompany" },
    { label: "Daily Stack", value: "TypeScript, React, Next.js, Tailwind" },
    { label: "Also Use", value: "Motion, Drizzle, Cloudflare" },
    { label: "Based in", value: "Iran" },
  ],
};
