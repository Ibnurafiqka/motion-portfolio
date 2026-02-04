"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import type { PointerEvent } from "react";

export default function SolarSystem() {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 220]), {
    stiffness: 60,
    damping: 20,
  });
  const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [18, -10]), {
    stiffness: 60,
    damping: 18,
  });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerTiltX = useTransform(pointerY, [-1, 1], [12, -12]);
  const pointerTiltY = useTransform(pointerX, [-1, 1], [-18, 18]);
  const pointerTiltXSmooth = useSpring(pointerTiltX, { stiffness: 120, damping: 20 });
  const pointerTiltYSmooth = useSpring(pointerTiltY, { stiffness: 120, damping: 20 });

  const combinedRotateX = useTransform<number, number>(
    [tilt, pointerTiltXSmooth],
    ([s, p]) => s + p,
  );
  const combinedRotateY = useTransform<number, number>(
    [pointerTiltYSmooth],
    ([p]) => p,
  );

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    pointerX.set((x - 0.5) * 2);
    pointerY.set((y - 0.5) * 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
    setHovered(false);
  };

  return (
    <div
      className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-80 md:w-80"
      style={{ perspective: "1200px" }}
      onPointerMove={prefersReducedMotion ? undefined : handlePointerMove}
      onPointerLeave={prefersReducedMotion ? undefined : handlePointerLeave}
      onPointerEnter={() => setHovered(true)}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-25 blur-3xl" />

      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                rotateZ: rotate,
                rotateX: combinedRotateX,
                rotateY: combinedRotateY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative h-full w-full"
      >
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#f0ffd8,transparent_65%)] shadow-soft" />
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffe58a,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fff4c2,transparent_60%)]" />

        <OrbitRing
          size={220}
          duration={hovered ? 16 : 24}
          planetSize={10}
          planetColor="bg-accent"
          animate={!prefersReducedMotion}
        />
        <OrbitRing
          size={260}
          duration={hovered ? 22 : 32}
          planetSize={12}
          planetColor="bg-emerald-200"
          animate={!prefersReducedMotion}
        />
        <OrbitRing
          size={310}
          duration={hovered ? 28 : 40}
          planetSize={14}
          planetColor="bg-teal-200"
          animate={!prefersReducedMotion}
        />
        <OrbitRing
          size={360}
          duration={hovered ? 38 : 54}
          planetSize={16}
          planetColor="bg-lime-200"
          animate={!prefersReducedMotion}
        />

        <motion.div
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 80, repeat: Infinity, ease: "linear" }
          }
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15"
          style={{ transformStyle: "preserve-3d", rotateX: 12 }}
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function OrbitRing({
  size,
  duration,
  planetSize,
  planetColor,
  animate,
}: {
  size: number;
  duration: number;
  planetSize: number;
  planetColor: string;
  animate: boolean;
}) {
  return (
    <motion.div
      animate={animate ? { rotate: 360 } : undefined}
      transition={animate ? { duration, repeat: Infinity, ease: "linear" } : undefined}
      className="absolute left-1/2 top-1/2 rounded-full border border-border/50"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        rotateX: 12,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`absolute -top-2 left-1/2 -translate-x-1/2 rounded-full ${planetColor}`}
        style={{ width: planetSize, height: planetSize }}
      />
      <div
        className="absolute right-6 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/30"
      />
    </motion.div>
  );
}
