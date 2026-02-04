"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import Button from "@/components/ui/Button";
import LogoCloud from "@/components/LogoCloud";
import ExperiencePath from "@/components/ExperiencePath";
import ProcessMap from "@/components/ProcessMap";
import FoundationSection from "@/components/FoundationSection";
import { highlights, projects, services } from "@/data/site";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="highlights">
        <SectionHeading
          eyebrow="Why Ibnu.dev"
          title="Web experience yang terasa premium sejak detik pertama."
          subtitle="Saya menyusun setiap section seperti arsitektur produk tech: jelas, elegan, dan terasa mahal."
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

      <Section id="logos" className="bg-surface-2/40">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Logo dan tool yang jadi fondasi arsitektur."
          subtitle="Setiap teknologi dipilih untuk menjaga performa, skalabilitas, dan motion yang terasa natural."
          align="center"
        />
        <motion.div variants={fadeUp} className="mt-10">
          <LogoCloud />
        </motion.div>
      </Section>

      <Section id="foundation">
        <SectionHeading
          eyebrow="Foundation"
          title="Built on a foundation of fast, production-grade tooling."
          subtitle="Konsep clean dengan objek 3D dan aliran visual yang memberi kesan advanced."
          align="center"
        />
        <FoundationSection />
      </Section>

      <Section id="services">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Services"
              title="Strategi, design, dan build dalam satu alur yang solid."
              subtitle="Bukan sekadar visual bagus, tapi juga memastikan struktur siap berkembang."
            />
            <p className="text-muted">
              Aku menangani kebutuhan mulai dari discovery hingga eksekusi. Setiap fase
              dijaga agar tetap fokus ke value bisnis dan pengalaman user.
            </p>
          </div>
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="flex gap-4 border-b border-border/60 pb-6 last:border-none last:pb-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface shadow-soft text-xs font-semibold text-muted-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {service.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="projects">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Work"
            title="Project dengan impact nyata dan visual yang tajam."
            subtitle="Setiap project dikemas dengan storytelling dan detail yang relevan untuk recruiter maupun client."
          />
          <Button href="/projects" variant="ghost">
            View all projects
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="experience" className="bg-surface-2/40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Experience Path"
            title="Jejak karier yang membentuk gaya engineering hari ini."
            subtitle="Bukan sekadar daftar, tapi perjalanan yang menunjukkan kedalaman pengalaman."
          />
          <ExperiencePath />
        </div>
      </Section>

      <Section id="process">
        <SectionHeading
          eyebrow="7 Stages"
          title="Proses kerja dari ide sampai launching."
          subtitle="Alur yang jelas membuat timeline transparan dan memudahkan kolaborasi."
        />
        <div className="mt-12">
          <ProcessMap />
        </div>
      </Section>

      <Section id="cta">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[linear-gradient(120deg,var(--accent-soft),transparent)] p-10 shadow-soft">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-30 blur-2xl" />
          <div className="relative space-y-6">
            <h3 className="text-3xl font-semibold font-[var(--font-heading)]">
              Siap bikin portfolio atau product page yang terasa kelas atas?
            </h3>
            <p className="max-w-2xl text-muted">
              Mari rancang pengalaman yang membuat user betah dan recruiter yakin. Semua
              touchpoint sudah disiapkan agar mudah dihubungi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Book a call
              </Button>
              <Button href="/projects" variant="secondary" size="lg">
                Explore projects
              </Button>
            </div>
            <div className="pt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
