"use client";

import { motion } from "framer-motion";
import { fadeUp, slowStagger } from "@/animations/variants";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative pb-16 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
        variants={slowStagger}
          className="mx-auto max-w-6xl space-y-6 px-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-2"
          >
            Projects
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold md:text-6xl font-[var(--font-heading)]"
          >
            Case study yang menunjukkan skala, dampak, dan kualitas eksekusi.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-muted">
            Setiap project disusun seperti portfolio produk tech, lengkap dengan konteks
            bisnis, peran, dan hasil yang nyata.
          </motion.p>
        </motion.div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Selected"
          title="Project yang paling mencerminkan style dan pendekatan kerja."
          subtitle="Pilihannya fokus pada kombinasi arsitektur kuat dan motion yang elegan."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/40">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionHeading
            eyebrow="Next Step"
            title="Ingin lihat project versi live atau prototype?"
            subtitle="Aku bisa kirimkan detail tambahan, design preview, atau akses demo."
          />
          <Button href="/contact" size="lg">
            Request access
          </Button>
        </div>
      </Section>
    </main>
  );
}
