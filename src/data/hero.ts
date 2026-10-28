import type { HeroData } from "@/types/hero";
import { siteConfig } from "@/data/site-config";

const firstName = process.env.NEXT_PUBLIC_HERO_FIRST_NAME || "Ali";
const lastName = process.env.NEXT_PUBLIC_HERO_LAST_NAME || "Josheghani";

const resolvedTitleLines: [string, string] =
  firstName && lastName
    ? [firstName, lastName]
    : (() => {
        const parts = siteConfig.name.trim().split(/\s+/).filter(Boolean);
        if (parts.length >= 2) {
          return [parts[0], parts.slice(1).join(" ")];
        }
        return [parts[0] || "Ali", parts[1] || "Josheghani"];
      })();

export const heroData: HeroData = {
  titleLines: resolvedTitleLines,
  lead: {
    prefix: "I’m a ",
    highlight: "product designer and front-end developer",
    suffix:
      ". I design interfaces and build them myself, so nothing gets lost between the mockup and the browser.",
  },
  status:
    process.env.NEXT_PUBLIC_HERO_STATUS ||
    "Building a budgeting app for freelancers",
};
