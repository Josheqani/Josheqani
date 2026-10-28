import { cn } from "@/lib/cn";
import type { Fact } from "@/types/about";
import { FactItem } from "@/components/ui/fact-item";

interface FactListProps {
  facts: Fact[];
  className?: string;
}

export function FactList({ facts, className }: FactListProps) {
  return (
    <ul className={cn("m-0 p-0 list-none", className)}>
      {facts.map((fact) => (
        <FactItem key={fact.label} fact={fact} />
      ))}
    </ul>
  );
}
