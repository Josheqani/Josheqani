import { cn } from "@/lib/cn";

interface PhotoPlaceholderProps {
  label: string;
  className?: string;
}

export function PhotoPlaceholder({ label, className }: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-full border-[1.5px] border-dashed border-border-dashed-subtle font-display text-[15px] font-medium text-muted aspect-square w-[200px] sm:w-[240px] min-[761px]:w-[260px] mb-[28px]",
        className
      )}
    >
      {label}
    </div>
  );
}
