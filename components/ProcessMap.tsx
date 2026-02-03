"use client";

import { motion } from "framer-motion";
import { fadeUp, slowStagger } from "@/animations/variants";
import { processSteps } from "@/data/site";

export default function ProcessMap() {
  return (
    <motion.div variants={slowStagger} className="relative">
      <div className="absolute left-0 right-0 top-6 hidden h-px md:block flow-lines" />

      <ol className="hidden gap-6 md:grid md:grid-cols-7">
        {processSteps.map((step, index) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface shadow-soft">
              <span className="text-xs font-semibold text-muted-2">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 h-6 w-px bg-border/60" />
            <p className="mt-3 text-sm font-semibold text-foreground">{step.title}</p>
            <p className="mt-2 text-xs text-muted">{step.description}</p>
          </motion.li>
        ))}
      </ol>

      <ol className="space-y-6 md:hidden">
        {processSteps.map((step, index) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="flex items-start gap-4 border-b border-border/60 pb-4 last:border-none last:pb-0"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface shadow-soft">
              <span className="text-xs font-semibold text-muted-2">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{step.title}</p>
              <p className="mt-2 text-xs text-muted">{step.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
