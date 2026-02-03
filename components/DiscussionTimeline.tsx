"use client";

import { motion } from "framer-motion";
import { fadeUp, slowStagger } from "@/animations/variants";
import { discussionTimeline } from "@/data/site";

export default function DiscussionTimeline() {
  return (
    <motion.div variants={slowStagger} className="relative space-y-6">
      <div className="absolute left-2 top-2 h-full w-px bg-border" />
      {discussionTimeline.map((item) => (
        <motion.div key={item.title} variants={fadeUp} className="relative pl-10">
          <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-surface">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-xs text-muted">{item.description}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
              {item.timing}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
