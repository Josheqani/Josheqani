import type { Experience } from "@/types/experience";
import { experienceSectionMeta } from "@/data/experience";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceItem } from "@/components/ui/experience-item";

interface ExperienceSectionProps {
  experiences: Experience[];
  title?: string;
  subtitle?: string;
}

export function ExperienceSection({
  experiences,
  title = experienceSectionMeta.title,
  subtitle = experienceSectionMeta.subtitle,
}: ExperienceSectionProps) {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <Section id="experience">
      <SectionHeading title={title} subtitle={subtitle} />
      <ol className="relative m-0 list-none p-0 before:absolute before:bottom-[10px] before:left-[7px] before:top-[14px] before:w-[2px] before:rounded-[2px] before:bg-[linear-gradient(var(--accent),var(--border)_38%,var(--border))]">
        {experiences.map((item, index) => (
          <ExperienceItem
            key={item.slug}
            item={item}
            isLast={index === experiences.length - 1}
          />
        ))}
      </ol>
    </Section>
  );
}
