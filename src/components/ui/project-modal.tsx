"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import type { Project } from "@/types/project";
import { TextLink } from "@/components/ui/text-link";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 32,
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const lenis = useLenis();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Stop Lenis and lock body scroll while modal is open
  useEffect(() => {
    lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [lenis]);

  // Trap focus and handle Escape key; restore focus on unmount
  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return;
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (
            document.activeElement === first ||
            !modalRef.current.contains(document.activeElement)
          ) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (
            document.activeElement === last ||
            !modalRef.current.contains(document.activeElement)
          ) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Dimmed backdrop */}
      <motion.div
        key="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm cursor-pointer -z-10"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.slug}`}
        tabIndex={-1}
        layoutId={shouldReduceMotion ? undefined : `project-${project.slug}`}
        initial={shouldReduceMotion ? { opacity: 0, scale: 0.96 } : false}
        animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : {}}
        exit={shouldReduceMotion ? { opacity: 0, scale: 0.96 } : undefined}
        transition={springTransition}
        data-lenis-prevent="true"
        className="relative z-10 w-full max-w-[720px] max-h-[85vh] overflow-y-auto rounded-xl border border-border bg-row-hover p-6 sm:p-8 shadow-2xl outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-muted hover:text-foreground transition-colors p-2 rounded-md hover:bg-border/40 cursor-pointer focus-visible:outline-accent"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Shared Layout Elements */}
        <div className="pr-10">
          <motion.span
            layoutId={shouldReduceMotion ? undefined : `project-year-${project.slug}`}
            layout="position"
            className="block text-muted [font-variant-numeric:oldstyle-nums] text-[15px] sm:text-[16px] mb-2"
          >
            {project.year}
          </motion.span>
          <motion.h2
            id={`project-title-${project.slug}`}
            layoutId={shouldReduceMotion ? undefined : `project-title-${project.slug}`}
            layout="position"
            className="m-0 font-display text-[clamp(24px,3.6vw,36px)] font-medium leading-[1.15] tracking-[-0.015em] text-foreground"
          >
            {project.title}
          </motion.h2>
          <motion.p
            layoutId={shouldReduceMotion ? undefined : `project-desc-${project.slug}`}
            layout="position"
            className="mt-3 text-soft max-w-[56ch] leading-relaxed text-[16px] sm:text-[18px]"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Extra Content (Faded in after expand) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: 0.25,
          }}
          className="mt-8 flex flex-col gap-6"
        >
          {/* Dashed Image Placeholder */}
          <div
            className="grid place-items-center rounded-lg border-[1.5px] border-dashed border-border-dashed-subtle font-display text-[15px] font-medium text-muted aspect-[16/9] w-full bg-background/40"
            aria-label={project.imagePlaceholderText || `${project.title} preview`}
          >
            {project.imagePlaceholderText || `${project.title} preview`}
          </div>

          {/* Role */}
          <div>
            <span className="block font-display text-[13px] uppercase tracking-wider text-muted mb-1 font-semibold">
              Role
            </span>
            <p className="text-foreground text-[16px] sm:text-[17px] font-medium m-0">
              {project.role}
            </p>
          </div>

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div>
              <span className="block font-display text-[13px] uppercase tracking-wider text-muted mb-2 font-semibold">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-[13px] font-display font-medium bg-background border border-border text-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Long Description */}
          <div>
            <span className="block font-display text-[13px] uppercase tracking-wider text-muted mb-1.5 font-semibold">
              About the project
            </span>
            <p className="text-soft text-[16px] sm:text-[18px] leading-relaxed m-0 font-serif">
              {project.longDescription}
            </p>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              {project.links.map((link) => (
                <TextLink
                  key={link.label}
                  href={link.href}
                  variant="bordered"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-1.5 text-[15px] sm:text-[16px]"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-accent text-[14px]">
                    ↗
                  </span>
                </TextLink>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
