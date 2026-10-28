import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-border py-[clamp(48px,8vw,96px)]",
        className
      )}
    >
      {children}
    </section>
  );
}
