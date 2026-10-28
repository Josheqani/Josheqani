import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-[40px]", className)}>
      <h2 className="mb-[12px] font-display text-[clamp(30px,4.6vw,48px)] font-extrabold leading-none tracking-[-0.025em]">
        {title}
      </h2>
      {subtitle && <p className="m-0 text-muted">{subtitle}</p>}
    </div>
  );
}
