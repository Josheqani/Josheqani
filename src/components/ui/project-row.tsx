"use client";

import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import type { Project } from "@/types/project";

interface ProjectRowProps {
  project: Project;
  onClick?: () => void;
  className?: string;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 32,
};

export function ProjectRow({ project, onClick, className }: ProjectRowProps) {
  const shouldReduceMotion = useReducedMotion();

  const handlePointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onPointerMove={handlePointerMove}
      layoutId={shouldReduceMotion ? undefined : `project-${project.slug}`}
      transition={springTransition}
      className={cn(
        "spotlight group grid grid-cols-1 min-[761px]:grid-cols-[72px_1fr] gap-x-[20px] gap-y-[4px] py-[26px] px-0 min-[761px]:px-[16px] mx-0 min-[761px]:mx-[-16px] border-b border-border first:border-t text-left w-full cursor-pointer transition-colors duration-200 hover:bg-row-hover bg-transparent",
        className
      )}
    >
      <motion.span
        layoutId={shouldReduceMotion ? undefined : `project-year-${project.slug}`}
        layout="position"
        className="text-muted [font-variant-numeric:oldstyle-nums] pt-0 min-[761px]:pt-[6px] min-[761px]:row-span-2"
      >
        {project.year}
      </motion.span>
      <motion.h3
        layoutId={shouldReduceMotion ? undefined : `project-title-${project.slug}`}
        layout="position"
        className="m-0 font-display text-[clamp(24px,3.6vw,36px)] font-medium leading-[1.15] tracking-[-0.015em] transition-colors duration-200 group-hover:text-accent"
      >
        {project.title}
      </motion.h3>
      <motion.p
        layoutId={shouldReduceMotion ? undefined : `project-desc-${project.slug}`}
        layout="position"
        className="m-0 text-soft max-w-[52ch] text-left"
      >
        {project.summary}
      </motion.p>
    </motion.button>
  );
}
