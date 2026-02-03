"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const springConfig = {
  damping: 24,
  stiffness: 260,
  mass: 0.25,
};

export default function SmoothCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const rawX = useMotionValue(-1000);
  const rawY = useMotionValue(-1000);
  const rotation = useMotionValue(0);
  const scale = useMotionValue(1);

  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  const rot = useSpring(rotation, { damping: 30, stiffness: 200 });
  const scl = useSpring(scale, { damping: 28, stiffness: 220 });

  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafId = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const mediaPointer = window.matchMedia?.("(pointer: fine)");
    const mediaHover = window.matchMedia?.("(hover: hover)");
    const supportsPointer = mediaPointer ? mediaPointer.matches : true;
    const supportsHover = mediaHover ? mediaHover.matches : true;
    if (!supportsPointer && !supportsHover) return;

    setEnabled(true);
    document.body.style.cursor = "none";

    const updateVelocity = (currentPos: { x: number; y: number }) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current || 1;
      const velocity = {
        x: (currentPos.x - lastPos.current.x) / deltaTime,
        y: (currentPos.y - lastPos.current.y) / deltaTime,
      };

      lastTime.current = currentTime;
      lastPos.current = currentPos;
      return velocity;
    };

    const smoothPointerMove = (event: { clientX: number; clientY: number }) => {
      const currentPos = { x: event.clientX, y: event.clientY };
      const velocity = updateVelocity(currentPos);
      const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);

      rawX.set(currentPos.x);
      rawY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle = (Math.atan2(velocity.y, velocity.x) * 190) / Math.PI + 90;
        let angleDiff = currentAngle - previousAngle.current;

        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;

        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.92);

        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => {
          scale.set(1);
        }, 180);
      }
    };

    const throttledPointerMove = (event: { clientX: number; clientY: number }) => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        smoothPointerMove(event);
        rafId.current = 0;
      });
    };

    const handlePointerLeave = () => {
      rawX.set(-1000);
      rawY.set(-1000);
      rotation.set(0);
      scale.set(1);
    };

    window.addEventListener("pointermove", throttledPointerMove as EventListener, {
      passive: true,
    });
    window.addEventListener("mousemove", throttledPointerMove as EventListener, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("pointermove", throttledPointerMove as EventListener);
      window.removeEventListener("mousemove", throttledPointerMove as EventListener);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("mouseleave", handlePointerLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [prefersReducedMotion, rawX, rawY, rotation, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x, y, rotate: rot, scale: scl }}
      transformTemplate={(transform) => `translate(-50%, -50%) ${transform}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="54"
        viewBox="0 0 50 54"
        fill="none"
        style={{ scale: 0.6 }}
      >
        <g filter="url(#filter0_d_91_7928)">
          <path
            d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
            fill="var(--foreground)"
          />
          <path
            d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
            stroke="var(--background)"
            strokeWidth="2.25825"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_91_7928"
            x="0.602397"
            y="0.952444"
            width="49.0584"
            height="52.428"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.25825" />
            <feGaussianBlur stdDeviation="2.25825" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_91_7928"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_91_7928"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
}
