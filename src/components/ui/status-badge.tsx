import { cn } from "@/lib/cn";

interface StatusBadgeProps {
  label: string;
  className?: string;
}

export function StatusBadge({ label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[12px] rounded-full border border-accent px-[18px] py-[10px] font-display text-[16px] font-medium text-accent",
        className
      )}
    >
      <i
        className="h-[9px] w-[9px] shrink-0 rounded-full bg-accent animate-status-pulse"
        aria-hidden="true"
      />
      <span>{label}</span>
    </span>
  );
}
