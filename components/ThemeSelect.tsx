"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const options = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export default function ThemeSelect({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("h-10 w-28 rounded-full bg-surface-2", className)} />;
  }

  return (
    <div className={cn("relative", className)}>
      <select
        value={theme ?? "system"}
        onChange={(event) => setTheme(event.target.value)}
        className="h-8 w-26 appearance-none rounded-full border border-border bg-surface-2 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-2">
        ▼
      </span>
    </div>
  );
}
