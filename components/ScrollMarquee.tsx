"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode } from "react";
import React from "react";
import { useRef } from "react";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function MarqueeRow({
  items,
  baseVelocity = 8,
}: {
  items: ReactNode[];
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const lastScroll = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (prefersReducedMotion) return;
    const delta = latest - lastScroll.current;
    lastScroll.current = latest;
    if (Math.abs(delta) < 1) return;

    const direction = delta > 0 ? 1 : -1;
    const movement = Math.min(Math.abs(delta), 80) / 60;
    baseX.set(baseX.get() + direction * baseVelocity * movement);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <motion.div style={{ x }} className="flex w-max items-center gap-4 px-6">
      {items.concat(items).map((child, index) => (
        <div key={index} className="shrink-0">
          {child}
        </div>
      ))}
    </motion.div>
  );
}

export default function ScrollMarquee({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const items = React.Children.toArray(children);

  return (
    <div className={className}>
      <MarqueeRow baseVelocity={4} items={items} />
      <div className="mt-4">
        <MarqueeRow baseVelocity={2.5} items={items} />
      </div>
    </div>
  );
}
