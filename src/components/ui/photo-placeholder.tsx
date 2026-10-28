import { cn } from "@/lib/cn";

interface PhotoPlaceholderProps {
  label: string;
  className?: string;
}

export function PhotoPlaceholder({ label, className }: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-[6px] border-[1.5px] border-dashed border-border-dashed-subtle font-display text-[15px] font-medium text-muted aspect-[16/10] min-[761px]:aspect-[4/5] mb-[28px]",
        className
      )}
    >
      {label}
    </div>
  );
}
