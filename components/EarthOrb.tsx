"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export default function EarthOrb() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 260]), {
    stiffness: 70,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -180]), {
    stiffness: 60,
    damping: 18,
  });
  const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [12, -8]), {
    stiffness: 60,
    damping: 18,
  });

  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_68%)] opacity-30 blur-3xl" />
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                rotate,
                rotateX: tilt,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative h-full w-full rounded-full border border-border bg-[radial-gradient(circle_at_30%_30%,#7cf4b0,transparent_55%),radial-gradient(circle_at_70%_70%,#0e7c49,transparent_60%),linear-gradient(135deg,#0b1e16,#0f2a1f)] shadow-soft"
      >
        <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_6px)] opacity-25" />
        <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_10px)] opacity-20" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.6),transparent_45%)]" />
      </motion.div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-accent/30"
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-6 rounded-full border border-accent/20"
      />
    </div>
  );
}
