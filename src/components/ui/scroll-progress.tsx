"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/cn";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const springScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleX = shouldReduceMotion ? scrollYProgress : springScaleX;

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "fixed top-0 left-0 right-0 h-[3px] origin-left z-50 bg-accent",
        className
      )}
      style={{ scaleX }}
    />
  );
}
