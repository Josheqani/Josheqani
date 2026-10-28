import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "main";
  id?: string;
}

export function Container({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto max-w-[var(--content-max-width)] px-[var(--page-padding)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
