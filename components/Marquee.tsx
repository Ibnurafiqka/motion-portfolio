"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  trackClassName?: string;
}

export default function Marquee({
  children,
  reverse,
  pauseOnHover,
  className,
  trackClassName,
}: Props) {
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-4",
          reverse ? "marquee-track-reverse" : "marquee-track",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          trackClassName,
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
