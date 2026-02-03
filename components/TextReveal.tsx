"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
  range?: [number, number];
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative mx-1 inline-flex">
      <span className="absolute opacity-25">{children}</span>
      <motion.span style={{ opacity }} className="relative">
        {children}
      </motion.span>
    </span>
  );
}

export default function TextReveal({ text, className, range = [0, 0.25] }: Props) {
  const words = useMemo(() => text.split(" "), [text]);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, range, [0, 1]);

  return (
    <p className={cn("flex flex-wrap text-muted", className)}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        return (
          <Word key={`${word}-${index}`} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
