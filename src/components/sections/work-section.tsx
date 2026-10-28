"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import type { Project } from "@/types/project";
import { workSectionMeta } from "@/data/projects";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectRow } from "@/components/ui/project-row";
import { ProjectModal } from "@/components/ui/project-modal";

interface WorkSectionProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

export function WorkSection({
  projects,
  title = workSectionMeta.title,
  subtitle = workSectionMeta.subtitle,
}: WorkSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="work">
      <SectionHeading title={title} subtitle={subtitle} />
      <div>
        {projects.map((project) => (
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
