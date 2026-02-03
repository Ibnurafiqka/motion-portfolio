"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  index?: string;
  className?: string;
}

export default function FeatureCard({ title, description, index, className }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-soft transition-transform hover:-translate-y-2",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-30" />
      </div>
      <div className="relative space-y-3">
        {index && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
            {index}
          </span>
        )}
        <h3 className="text-xl font-semibold font-[var(--font-heading)]">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </motion.article>
  );
}
