"use client";

import { cn } from "@/lib/utils";

interface Props {
  name: string;
  icon: string;
  className?: string;
}

export default function TechLogo({ name, icon, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-soft",
        className,
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-5 w-5 opacity-80 dark:invert"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-semibold text-foreground">{name}</span>
    </div>
  );
}
