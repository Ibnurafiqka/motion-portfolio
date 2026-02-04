"use client";

import { motion } from "framer-motion";
import { fadeUp, slowStagger } from "@/animations/variants";
import { foundationCards } from "@/data/site";
import FoundationCard from "@/components/FoundationCard";
import FlowCore from "@/components/FlowCore";
import AnimatedBeam from "@/components/AnimatedBeam";
import { createRef, useMemo, useRef } from "react";

export default function FoundationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const coreAnchorRef = useRef<HTMLSpanElement>(null);
  const cardRefs = useMemo(
    () => foundationCards.map(() => createRef<HTMLDivElement>()),
    [],
  );
  const cardAnchorRefs = useMemo(
    () => foundationCards.map(() => createRef<HTMLSpanElement>()),
    [],
  );

  return (
    <motion.div ref={containerRef} variants={slowStagger} className="relative mt-12">
      <div className="relative grid gap-y-12 md:grid-cols-3 md:gap-x-6">
        <div className="flex justify-center md:col-start-2">
          <div ref={coreRef} className="relative">
            <FlowCore />
            <span
              ref={coreAnchorRef}
              className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 translate-y-1 rounded-full border border-border bg-surface"
            />
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-4 grid gap-6 md:col-span-3 md:mt-6 md:grid-cols-3"
        >
          {foundationCards.map((item, index) => (
            <div key={item.title} ref={cardRefs[index]} className="relative">
              <span
                ref={cardAnchorRefs[index]}
                className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1 rounded-full border border-border bg-surface"
              />
              <FoundationCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>

      {foundationCards.map((item, index) => {
        const curvatures = [140, 110, 140];
        const curvature = curvatures[index % curvatures.length];

        return (
          <AnimatedBeam
            key={`${item.title}-beam`}
            containerRef={containerRef}
            fromRef={cardAnchorRefs[index]}
            toRef={coreAnchorRef}
            pathType="curved"
            curvature={curvature}
            reverse
            duration={4.8 + index * 0.4}
            delay={index * 0.2}
            repeatDelay={1}
            pathWidth={1.8}
            pathOpacity={0.28}
            className="hidden md:block"
          />
        );
      })}
    </motion.div>
  );
}
