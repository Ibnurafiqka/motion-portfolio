"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const options = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" },
] as const;

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("h-10 w-[186px] rounded-full bg-surface-2", className)} />;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-border bg-surface-2 p-1 text-xs font-semibold",
        className,
      )}
    >
      {options.map((option) => {
        const isActive = theme === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => setTheme(option.id)}
            className={cn(
              "rounded-full px-3 py-1.5 transition-all",
              isActive
                ? "bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-black shadow-soft"
                : "text-muted hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
