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
      <div className="flex items-center gap-3">
        <motion.h3
          layoutId={shouldReduceMotion ? undefined : `project-title-${project.slug}`}
          layout="position"
          className="m-0 font-display text-[clamp(24px,3.6vw,36px)] font-medium leading-[1.15] tracking-[-0.015em] transition-colors duration-200 group-hover:text-accent"
        >
          {project.title}
        </motion.h3>
        {project.private && (
          <span
            title="Private project"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-row-hover/60 px-2 py-0.5 font-display text-[11px] font-medium text-muted transition-colors duration-200 group-hover:border-border-dashed-subtle"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Private
          </span>
        )}
      </div>
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
