"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import type { Project, WorkData } from "@/types/project";
import { workData as defaultWorkData } from "@/data/projects";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectRow } from "@/components/ui/project-row";
import { ProjectModal } from "@/components/ui/project-modal";

interface WorkSectionProps {
  data?: WorkData;
}

export function WorkSection({ data = defaultWorkData }: WorkSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="work">
      <SectionHeading title={data.title} subtitle={data.subtitle} />
      <div>
        {data.projects.map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
