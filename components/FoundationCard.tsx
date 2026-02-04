"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function FoundationCard({ title, description, icon }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      className="h-full rounded-3xl border border-border bg-surface p-6 shadow-soft"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2">
          <img
            src={icon}
            alt={`${title} logo`}
            className="h-5 w-5 opacity-80 dark:invert"
            loading="lazy"
          />
        </div>
        <p className="text-base font-semibold text-foreground">{title}</p>
      </div>
      <p className="mt-4 text-sm text-muted">{description}</p>
    </motion.article>
  );
}
