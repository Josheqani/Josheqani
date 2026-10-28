import type { AboutData } from "@/types/about";
import { aboutData as defaultAboutData } from "@/data/about";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { FactList } from "@/components/ui/fact-list";

interface AboutSectionProps {
  data?: AboutData;
}

export function AboutSection({ data = defaultAboutData }: AboutSectionProps) {
  return (
    <Section id="about">
      <SectionHeading title={data.title} subtitle={data.subtitle} />
      <div className="grid grid-cols-1 min-[761px]:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] gap-[clamp(32px,6vw,88px)] items-start">
        <div>
          {data.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 mb-[1.1em] max-w-[56ch] text-soft first:text-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <PhotoPlaceholder label={data.photoPlaceholderText} />
          <FactList facts={data.facts} />
        </div>
      </div>
    </Section>
  );
}
