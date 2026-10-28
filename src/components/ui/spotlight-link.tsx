"use client";

import { useRef, type ComponentPropsWithoutRef, type PointerEvent } from "react";
import { cn } from "@/lib/cn";

export interface SpotlightLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
}

export function SpotlightLink({
  href,
  className,
  children,
  onPointerMove,
  ...props
}: SpotlightLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty("--mx", `${x}px`);
      ref.current.style.setProperty("--my", `${y}px`);
    }
    onPointerMove?.(e);
  };

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={handlePointerMove}
      className={cn("spotlight", className)}
      {...props}
    >
      {children}
    </a>
  );
}
