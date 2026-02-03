"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  href?: string;
  className?: string;
}

export default function InteractiveButton({ text, href, className }: Props) {
  const classes = cn(
    "group relative w-44 overflow-hidden rounded-full border border-border bg-surface px-5 py-3 text-center text-sm font-semibold transition-all",
    className,
  );

  const content = (
    <>
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 10h10" />
          <path d="M11 6l4 4-4 4" />
        </svg>
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 rounded-lg bg-accent transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.6] group-hover:opacity-90" />
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
