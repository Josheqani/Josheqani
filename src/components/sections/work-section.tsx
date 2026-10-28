import type { WorkData } from "@/types/project";
import { workData as defaultWorkData } from "@/data/projects";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectRow } from "@/components/ui/project-row";

interface WorkSectionProps {
  data?: WorkData;
}

export function WorkSection({ data = defaultWorkData }: WorkSectionProps) {
  return (
    <Section id="work">
      <SectionHeading title={data.title} subtitle={data.subtitle} />
      <div>
        {data.projects.map((project) => (
          <ProjectRow
            key={`${project.year}-${project.title}`}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}
