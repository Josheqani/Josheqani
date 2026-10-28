import type { AboutData } from "@/types/about";
import { aboutData as defaultAboutData } from "@/data/about";
import { siteConfig } from "@/data/site-config";
import { getGithubAvatar } from "@/lib/github";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubAvatarCard } from "@/components/ui/github-avatar-card";
import { FactList } from "@/components/ui/fact-list";

interface AboutSectionProps {
  data?: AboutData;
  githubUsername?: string;
}

export async function AboutSection({
  data = defaultAboutData,
  githubUsername = siteConfig.githubUsername,
}: AboutSectionProps) {
  const githubProfile = await getGithubAvatar(githubUsername);

  return (
    <Section id="about">
      <SectionHeading title={data.title} subtitle={data.subtitle} />
      <div className="grid grid-cols-1 min-[761px]:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] gap-[clamp(32px,6vw,88px)] items-start">
        <div>
          {data.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 mb-[1.1em] max-w-[56ch] text-soft first:text-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <GithubAvatarCard
            avatarUrl={githubProfile?.avatarUrl}
            profileUrl={githubProfile?.profileUrl}
            name={githubProfile?.name || siteConfig.name}
            label={siteConfig.githubBadgeLabel}
          />
          <FactList facts={data.facts} />
        </div>
      </div>
    </Section>
  );
}
