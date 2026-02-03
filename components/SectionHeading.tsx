"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/animations/variants";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}>
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-2"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-3xl md:text-4xl font-semibold font-[var(--font-heading)]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className={cn(
          "h-px w-20 bg-gradient-to-r from-accent to-transparent",
          align === "center" && "mx-auto",
        )}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn("text-base md:text-lg text-muted max-w-2xl", align === "center" && "mx-auto")}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
