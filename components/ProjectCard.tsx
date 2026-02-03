"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import LogoMark from "@/components/LogoMark";

interface Props {
  title: string;
  description: string;
  tech: string[];
  role?: string;
  year?: string;
  impact?: string;
  thumbnail?: string;
  logo?: string;
  demo?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  role,
  year,
  impact,
  thumbnail,
  logo,
  demo,
  link,
}: Props) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-soft"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-70" />
      <div className="relative space-y-4">
        <div className="relative h-40 overflow-hidden rounded-2xl border border-border bg-surface-2">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(140deg,var(--accent-soft),transparent)]" />
          )}
          <div className="absolute left-3 top-3">
            <LogoMark label={logo ?? title.slice(0, 2).toUpperCase()} className="h-9 w-9" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
          {role && <span>{role}</span>}
          {role && year && <span>•</span>}
          {year && <span>{year}</span>}
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold font-[var(--font-heading)]">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{description}</p>
        </div>

        {impact && (
          <p className="text-sm font-semibold text-foreground/80">{impact}</p>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t) => (
            <Badge key={t} className="border-accent/20 bg-accent-soft/60 text-foreground">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground transition group-hover:text-accent"
            >
              View case study
              <span className="text-lg">→</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition"
            >
              Live demo
              <span className="text-lg">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
