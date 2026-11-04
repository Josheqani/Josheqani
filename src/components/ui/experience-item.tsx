import { cn } from "@/lib/cn";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  item: Experience;
  isLast?: boolean;
}

export function ExperienceItem({ item, isLast = false }: ExperienceItemProps) {
  const isActive = Boolean(item.active);

  return (
    <li
      className={cn(
        "group relative pl-[34px] min-[761px]:pl-[44px]",
        !isLast && "pb-[clamp(26px,4vw,40px)]"
      )}
    >
      {/* Timeline Dot */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-[8px] h-[16px] w-[16px] rounded-full border-2 transition-colors duration-200",
          isActive
            ? "bg-accent border-accent animate-status-pulse"
            : "bg-background border-border-dashed-subtle group-hover:border-accent"
        )}
      />

      {isActive ? (
        /* Active / Current Company Highlight Card */
        <div
          className={cn(
            "rounded-[8px] border border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] p-[18px] min-[761px]:p-[22px_24px]",
            "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_9%,var(--row-hover)),var(--row-hover)_55%)]",
            "shadow-[0_0_36px_-12px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
          )}
        >
          {item.activeLabel && (
            <span className="mb-[10px] inline-flex items-center gap-[8px] rounded-full border border-accent px-[12px] py-[3px] font-display text-[14px] font-medium text-accent">
              {item.activeLabel}
            </span>
          )}

          <div className="flex flex-wrap items-baseline justify-between gap-[2px_16px]">
            <h3 className="m-0 font-display text-[clamp(22px,3vw,30px)] font-medium leading-[1.15] tracking-[-0.015em] text-foreground transition-colors duration-200">
              {item.company}
            </h3>
            <span className="font-display text-accent [font-variant-numeric:oldstyle-nums]">
              {item.period}
            </span>
          </div>

          <p className="m-0 mt-[4px] text-soft">{item.role}</p>

          {item.highlights && item.highlights.length > 0 && (
            <ul className="m-0 mt-[16px] list-none p-0">
              {item.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="relative m-0 max-w-[58ch] pb-[8px] pl-[22px] text-soft last:pb-0 before:absolute before:left-0 before:text-accent before:content-['–']"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {item.contentHtml && (
            <div
              className="prose prose-invert mt-[14px] max-w-[58ch] text-[15px] leading-relaxed text-soft"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          )}
        </div>
      ) : (
        /* Standard Past Experience Item */
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-[2px_16px]">
            <h3 className="m-0 font-display text-[clamp(22px,3vw,30px)] font-medium leading-[1.15] tracking-[-0.015em] text-soft transition-colors duration-200 group-hover:text-foreground">
              {item.company}
            </h3>
            <span className="font-display text-muted [font-variant-numeric:oldstyle-nums]">
              {item.period}
            </span>
          </div>

          <p className="m-0 mt-[4px] text-muted">{item.role}</p>

          {item.description && (
            <p className="m-0 mt-[10px] max-w-[56ch] text-muted">
              {item.description}
            </p>
          )}

          {item.contentHtml && (
            <div
              className="prose prose-invert mt-[10px] max-w-[56ch] text-[15px] leading-relaxed text-muted"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          )}
        </div>
      )}
    </li>
  );
}
