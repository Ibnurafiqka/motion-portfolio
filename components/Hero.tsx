"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, slowStagger } from "@/animations/variants";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Globe from "@/components/Globe";
import TextReveal from "@/components/TextReveal";
import InteractiveButton from "@/components/ui/InteractiveButton";
import { siteConfig, stats } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-40 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,var(--accent-strong),transparent_70%)] opacity-30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slowStagger}
        className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-24 pt-36 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-6">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-full border border-border bg-surface-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-2"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for new collaborations
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-tight md:text-6xl font-[var(--font-heading)]"
          >
            Hi, I’m {siteConfig.name}. I build{" "}
            <span className="text-gradient">motion-first</span> digital products
            that feel premium and perform fast.
          </motion.h1>

          <motion.div variants={fadeUp} className="max-w-2xl">
            <TextReveal
              text="Fullstack developer yang menggabungkan arsitektur rapi, UI yang elegan, dan animasi halus untuk membuat user betah."
              className="text-lg md:text-xl"
              range={[0, 0.22]}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <InteractiveButton text="Start a project" href="/contact" />
            <Button href="/projects" variant="secondary" size="lg">
              See case studies
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-4 pt-6 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface px-4 py-4 text-center"
              >
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={scaleIn} className="relative flex justify-center">
          <div className="relative h-72 w-72 md:h-80 md:w-80">
            <Globe className="absolute inset-0" />
          </div>
          <div className="pointer-events-none absolute -left-4 top-10 hidden flex-col gap-3 lg:flex">
            <Badge className="bg-surface-2 text-foreground/80 animate-float">
              Motion UX
            </Badge>
            <Badge className="bg-surface-2 text-foreground/80 animate-float-slow">
              Scalable UI
            </Badge>
          </div>
          <div className="pointer-events-none absolute -right-6 bottom-12 hidden flex-col gap-3 lg:flex">
            <Badge className="bg-surface-2 text-foreground/80 animate-float-slow">
              System Design
            </Badge>
            <Badge className="bg-surface-2 text-foreground/80 animate-float">
              Fast Performance
            </Badge>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
