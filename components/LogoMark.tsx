"use client";

import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  className?: string;
}

export default function LogoMark({ label = "I", className }: Props) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-xs font-bold text-black shadow-soft",
        className,
      )}
    >
      {label}
    </div>
  );
}
