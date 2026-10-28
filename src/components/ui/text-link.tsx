import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TextLinkVariant = "bordered" | "email" | "nav" | "default";

interface TextLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  variant?: TextLinkVariant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function TextLink({
  href,
  variant = "default",
  className,
  children,
  ariaLabel,
  ...props
}: TextLinkProps) {
  const variantStyles: Record<TextLinkVariant, string> = {
    email:
      "inline-block font-display text-[clamp(22px,4.2vw,44px)] font-medium leading-[1.2] text-accent underline decoration-2 underline-offset-8 [overflow-wrap:anywhere] hover:decoration-transparent",
    bordered:
      "text-soft no-underline border-b border-border-dashed-subtle pb-[2px] transition-colors duration-200 hover:text-foreground hover:border-accent font-display text-[17px] font-medium",
    nav: "text-soft no-underline transition-colors duration-200 hover:text-accent font-display text-[17px] font-medium",
    default:
      "text-soft no-underline transition-colors duration-200 hover:text-accent",
  };

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}
