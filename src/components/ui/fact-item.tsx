import { cn } from "@/lib/cn";
import type { Fact } from "@/types/about";

interface FactItemProps {
  fact: Fact;
  className?: string;
}

export function FactItem({ fact, className }: FactItemProps) {
  return (
    <li
      className={cn(
        "flex justify-between gap-[16px] py-[14px] border-b border-border first:border-t",
        className
      )}
    >
      <span className="text-muted">{fact.label}</span>
      <span>{fact.value}</span>
    </li>
  );
}
