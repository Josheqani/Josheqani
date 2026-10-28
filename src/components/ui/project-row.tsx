import { cn } from "@/lib/cn";
import type { Project } from "@/types/project";
import { SpotlightLink } from "@/components/ui/spotlight-link";

interface ProjectRowProps {
  project: Project;
  className?: string;
}

export function ProjectRow({ project, className }: ProjectRowProps) {
  return (
    <SpotlightLink
      href={project.href}
      className={cn(
        "group grid grid-cols-1 min-[761px]:grid-cols-[72px_1fr] gap-x-[20px] gap-y-[4px] py-[26px] px-0 min-[761px]:px-[16px] mx-0 min-[761px]:mx-[-16px] border-b border-border first:border-t no-underline transition-colors duration-200 hover:bg-row-hover",
        className
      )}
    >
      <span className="text-muted [font-variant-numeric:oldstyle-nums] pt-0 min-[761px]:pt-[6px] min-[761px]:row-span-2">
        {project.year}
      </span>
      <h3 className="m-0 font-display text-[clamp(24px,3.6vw,36px)] font-medium leading-[1.15] tracking-[-0.015em] transition-colors duration-200 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="m-0 text-soft max-w-[52ch]">
        {project.description}
      </p>
    </SpotlightLink>
  );
}
