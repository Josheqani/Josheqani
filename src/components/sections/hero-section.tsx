import type { HeroData } from "@/types/hero";
import { heroData as defaultHeroData } from "@/data/hero";
import { StatusBadge } from "@/components/ui/status-badge";

interface HeroSectionProps {
  data?: HeroData;
}

export function HeroSection({ data = defaultHeroData }: HeroSectionProps) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] pt-[clamp(48px,10vw,120px)] pb-[clamp(56px,9vw,110px)]">
      <h1 className="m-0 font-display text-[clamp(60px,14vw,176px)] font-extrabold leading-[0.86] tracking-[-0.045em]">
        {data.titleLines.filter(Boolean).map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p className="mt-[36px] mb-0 max-w-[40ch] text-[clamp(21px,2.6vw,28px)] leading-[1.4] text-soft">
        {data.lead.prefix}
        <b className="font-medium text-foreground">{data.lead.highlight}</b>
        {data.lead.suffix}
      </p>
      <div className="mt-[36px]">
        <StatusBadge label={data.status} />
      </div>
    </div>
  );
}
