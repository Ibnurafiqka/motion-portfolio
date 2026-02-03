"use client";

import { useEffect, useMemo, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Globe({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useMotionValue(0);
  const pointerSpring = useSpring(pointerInteractionMovement, {
    stiffness: 40,
    damping: 20,
    mass: 0.6,
  });
  const phiRef = useRef(0);
  const sizeRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const isDark = resolvedTheme !== "light";

    const onResize = () => {
      if (!canvasRef.current) return;
      sizeRef.current = canvasRef.current.offsetWidth;
    };

    onResize();
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: sizeRef.current * 2,
      height: sizeRef.current * 2,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 0.4 : 0.8,
      mapSamples: 16000,
      mapBrightness: isDark ? 1.2 : 2.2,
      baseColor: isDark ? [0.2, 0.2, 0.2] : [0.86, 0.88, 0.9],
      markerColor: isDark ? [251 / 255, 100 / 255, 21 / 255] : [14 / 255, 116 / 255, 144 / 255],
      glowColor: isDark ? [0.2, 0.95, 0.55] : [0.16, 0.6, 0.4],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.03 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.05 },
        { location: [19.4326, -99.1332], size: 0.04 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.005;
        }
        state.phi = phiRef.current + pointerSpring.get();
        state.width = sizeRef.current * 2;
        state.height = sizeRef.current * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [pointerSpring, resolvedTheme]);

  const events = useMemo(
    () => ({
      onPointerDown: (event: ReactPointerEvent<HTMLCanvasElement>) => {
        pointerInteracting.current = event.clientX - pointerInteractionMovement.get();
        event.currentTarget.style.cursor = "grabbing";
      },
      onPointerUp: (event: ReactPointerEvent<HTMLCanvasElement>) => {
        pointerInteracting.current = null;
        event.currentTarget.style.cursor = "grab";
      },
      onPointerOut: (event: ReactPointerEvent<HTMLCanvasElement>) => {
        pointerInteracting.current = null;
        event.currentTarget.style.cursor = "grab";
      },
      onPointerMove: (event: ReactPointerEvent<HTMLCanvasElement>) => {
        if (pointerInteracting.current !== null) {
          const delta = event.clientX - pointerInteracting.current;
          pointerInteractionMovement.set(delta / 200);
        }
      },
    }),
    [pointerInteractionMovement],
  );

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-square w-full max-w-[600px]", className)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full [contain:layout_paint_size] cursor-grab"
        {...events}
      />
    </div>
  );
}
