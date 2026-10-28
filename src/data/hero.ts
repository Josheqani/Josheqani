import type { HeroData } from "@/types/hero";
import { siteConfig } from "@/data/site-config";

const firstName = process.env.NEXT_PUBLIC_HERO_FIRST_NAME || "Ali";
const lastName = process.env.NEXT_PUBLIC_HERO_LAST_NAME || "Josheqani";

const resolvedTitleLines: [string, string] =
  firstName && lastName
    ? [firstName, lastName]
    : (() => {
        const parts = siteConfig.name.trim().split(/\s+/).filter(Boolean);
        if (parts.length >= 2) {
          return [parts[0], parts.slice(1).join(" ")];
        }
        return [parts[0] || "Ali", parts[1] || "Josheqani"];
      })();

export const heroData: HeroData = {
  titleLines: resolvedTitleLines,
  lead: {
    prefix: "I’m a ",
    highlight: "front-end developer",
    suffix:
      " from Iran with 3+ years of professional experience, working mostly with React and Next.js. I care about performance, motion, and RTL-first interfaces.",
  },
  status:
    process.env.NEXT_PUBLIC_HERO_STATUS || "Currently at ShaliCompany",
};
