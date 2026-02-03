"use client";

import { motion } from "framer-motion";
import { fadeUp, slowStagger } from "@/animations/variants";
import { experiencePath } from "@/data/site";
import { cn } from "@/lib/utils";

export default function ExperiencePath() {
  return (
    <motion.div variants={slowStagger} className="relative">
      <div className="absolute left-3 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-12">
        {experiencePath.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div key={item.title} variants={fadeUp} className="relative">
              <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface shadow-soft md:left-1/2 md:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-12">
                <div
                  className={cn(
                    "border-b border-border/60 pb-6 pl-12 md:pl-0",
                    isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3 md:justify-between">
                    <h3 className="text-lg font-semibold font-[var(--font-heading)]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{item.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
