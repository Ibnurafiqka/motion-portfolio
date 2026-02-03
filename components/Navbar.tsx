"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import ThemeSelect from "@/components/ThemeSelect";
import Button from "@/components/ui/Button";
import LogoMark from "@/components/LogoMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="text-lg font-semibold font-[var(--font-heading)] text-foreground">
            {siteConfig.brand}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-6 text-sm font-semibold text-muted">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeSelect />
          <Button href="/contact" size="sm">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-muted"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeSelect className="w-full" />
              <Button href="/contact" className="w-full justify-center">
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
