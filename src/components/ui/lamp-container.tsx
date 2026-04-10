"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
  beamColor?: string;
}

export function LampContainer({
  children,
  className,
  beamColor = "#3665f5",
}: LampContainerProps) {
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          "relative flex min-h-0 w-full flex-col items-center justify-center overflow-hidden",
          className
        )}
      >
        {/* Lamp beam — SVG conic gradient */}
        <div
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
          aria-hidden="true"
        >
          {/* Cone of light from top center */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              height: "100%",
              background: `conic-gradient(from 270deg at 50% 0%, transparent 0deg, ${beamColor}22 45deg, ${beamColor}18 90deg, ${beamColor}22 135deg, transparent 180deg)`,
              pointerEvents: "none",
            }}
          />

          {/* Horizontal beam source at top */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, width: "20%" }}
            animate={{ opacity: 1, width: "60%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "3px",
              background: `linear-gradient(90deg, transparent, ${beamColor}80, ${beamColor}cc, ${beamColor}80, transparent)`,
              borderRadius: "0 0 50% 50%",
            }}
          />

          {/* Glow halo at source */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{
              position: "absolute",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${beamColor}50 0%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />

          {/* Floor glow reflection */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "50%",
              height: "40%",
              background: `radial-gradient(ellipse at 50% 100%, ${beamColor}20 0%, transparent 70%)`,
              filter: "blur(30px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </LazyMotion>
  );
}
