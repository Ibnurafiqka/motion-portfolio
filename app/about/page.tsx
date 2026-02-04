"use client";

import { motion } from "framer-motion";
import { fadeUp, slowStagger } from "@/animations/variants";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/SocialLinks";
import LogoCloud from "@/components/LogoCloud";
import ExperiencePath from "@/components/ExperiencePath";
import { highlights, stack } from "@/data/site";

export default function AboutPage() {
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
            About
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold md:text-6xl font-[var(--font-heading)]"
          >
            Motion-first engineer yang fokus pada arsitektur rapi dan storytelling
            visual.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-muted">
            Aku percaya website tidak hanya harus cepat, tapi juga punya ritme yang
            membuat user betah. Kombinasi animasi halus dan struktur komponen yang
            kuat adalah fokus utamaku.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Let’s collaborate
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              See projects
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Section id="principles">
        <SectionHeading
          eyebrow="Principles"
          title="Cara kerja yang membuat produk terasa matang."
          subtitle="Setiap keputusan selalu kembali ke tiga hal ini: impact, clarity, dan experience."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <FeatureCard
              key={item.title}
              index={`0${index + 1}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section id="timeline" className="bg-surface-2/40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Timeline"
            title="Perjalanan yang membentuk gaya kerja hari ini."
            subtitle="Dari produk digital kecil sampai sistem skala kampus dan motion-first experience."
          />
          <ExperiencePath />
        </div>
      </Section>

      <Section id="toolbox">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Toolbox"
            title="Stack yang membentuk arsitektur teknis portofolio ini."
            subtitle="Semua dipilih untuk memastikan performa, konsistensi, dan kualitas motion."
          />
          <div className="space-y-6">
            {stack.map((group) => (
              <div key={group.category} className="border-b border-border/60 pb-4 last:border-none last:pb-0">
                <p className="text-sm font-semibold text-foreground">{group.category}</p>
                <p className="mt-2 text-sm text-muted">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div variants={fadeUp} className="mt-10">
          <LogoCloud />
        </motion.div>
      </Section>
    </main>
  );
}
