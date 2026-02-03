"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/animations/variants";

export default function FlowCore() {
  return (
    <motion.div
      variants={scaleIn}
      className="relative mx-auto flex h-20 w-56 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-soft transform-gpu [transform:perspective(800px)_rotateX(12deg)]"
    >
      <div className="absolute inset-0 opacity-40 flow-lines" />
      <div className="absolute inset-1 rounded-2xl border border-border/60 bg-surface-2/90" />
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-40 blur-2xl" />
      <span className="relative text-xs font-semibold uppercase tracking-[0.25em] text-gradient">
        Powered By
      </span>
    </motion.div>
  );
}
