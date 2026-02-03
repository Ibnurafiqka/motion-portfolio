"use client";

import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "pill" | "inline";
  showHandle?: boolean;
}

export default function SocialLinks({
  className,
  variant = "pill",
  showHandle = true,
}: Props) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {socialLinks.map((social) => {
        const isExternal = social.href.startsWith("http");
        return (
          <a
            key={social.label}
            href={social.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              "group flex items-center gap-3 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-all",
              variant === "pill"
                ? "bg-surface-2 text-foreground hover:border-accent/40 hover:shadow-soft"
                : "border-transparent bg-transparent px-2 text-muted hover:text-foreground",
            )}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface">
              <img
                src={social.icon}
                alt={`${social.label} logo`}
                className="h-4 w-4 opacity-80 dark:invert"
                loading="lazy"
              />
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-2">
              {social.label}
            </span>
            {showHandle && <span className="text-foreground/80">{social.handle}</span>}
          </a>
        );
      })}
    </div>
  );
}
