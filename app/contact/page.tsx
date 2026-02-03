"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, slowStagger } from "@/animations/variants";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/SocialLinks";
import DiscussionTimeline from "@/components/DiscussionTimeline";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <section className="relative pb-12 pt-32">
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
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold md:text-6xl font-[var(--font-heading)]"
          >
            Mari bangun sesuatu yang membuat user betah.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-muted">
            Ceritakan kebutuhanmu. Aku akan bantu menyusun strategi, desain, dan
            implementasi agar hasilnya terasa premium dan scalable.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-surface-2/40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
            <SectionHeading
              eyebrow="Project Brief"
              title="Mulai dari sini"
              subtitle="Isi detail singkat. Form ini bisa dihubungkan ke Email, WhatsApp, atau Notion saat siap."
            />
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-border bg-surface-2 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-border bg-surface-2 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full rounded-2xl border border-border bg-surface-2 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <Button size="lg" type="submit">
                Send message
              </Button>
              {submitted && (
                <p className="text-sm text-muted">
                  Thanks! Kirimkan detail tambahan lewat email atau WhatsApp jika
                  perlu.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <SectionHeading
                eyebrow="Discussion Map"
                title="Ekspektasi timeline diskusi"
                subtitle="Client tahu kapan harus memberi feedback dan kapan update akan dikirim."
              />
              <div className="mt-6">
                <DiscussionTimeline />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft">
              <SectionHeading
                eyebrow="Direct Line"
                title="Butuh respon cepat?"
                subtitle="Pilih channel yang paling nyaman. Aku akan balas secepat mungkin."
              />
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={siteConfig.whatsapp} size="lg">
                  WhatsApp
                </Button>
                <Button href={`mailto:${siteConfig.email}`} variant="secondary" size="lg">
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
