"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { GithubIcon } from "@/components/ui/github-icon";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

interface GithubAvatarCardProps {
  avatarUrl?: string | null;
  profileUrl?: string | null;
  name: string;
  label?: string;
  className?: string;
}

export function GithubAvatarCard({
  avatarUrl,
  profileUrl,
  name,
  label = "Synced from GitHub",
  className,
}: GithubAvatarCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!avatarUrl || hasError) {
    return <PhotoPlaceholder label={name} className={className} />;
  }

  return (
    <div className={cn("mb-[28px] flex flex-col items-center justify-center gap-3", className)}>
      <div className="relative aspect-square w-[180px] sm:w-[200px] min-[761px]:w-[220px] overflow-hidden rounded-full border border-border bg-row-hover shadow-md">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: isLoaded || shouldReduceMotion ? 1 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={avatarUrl}
            alt={`Portrait of ${name}`}
            fill
            sizes="(min-width: 761px) 220px, 180px"
            className="object-cover"
            priority
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        </motion.div>
      </div>

      {profileUrl && (
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name}'s GitHub profile`}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-row-hover/80 px-2.5 py-1 font-display text-[12px] font-medium text-soft backdrop-blur-md transition-colors duration-200 hover:border-accent hover:text-foreground cursor-pointer"
        >
          <GithubIcon
            size={13}
            className="text-foreground transition-colors duration-200 group-hover:text-accent"
          />
          <span>{label}</span>
        </a>
      )}
    </div>
  );
}
