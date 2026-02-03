"use client";

import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import SocialLinks from "@/components/SocialLinks";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-2/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <p className="text-lg font-semibold font-[var(--font-heading)]">
              {siteConfig.brand}
            </p>
          </div>
          <p className="text-sm text-muted">{siteConfig.tagline}</p>
          <p className="text-sm text-muted-2">Based in {siteConfig.location}</p>
        </div>

        <div className="space-y-3 text-sm font-semibold text-muted">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-2">Navigation</p>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-2">Let’s connect</p>
          <SocialLinks variant="inline" showHandle={false} />
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-2">
        © {new Date().getFullYear()} {siteConfig.brand}. Crafted with Next.js + Framer
        Motion.
      </div>
    </footer>
  );
}
