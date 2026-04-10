"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface LayerCardProps {
  index: number;
  isInView: boolean;
  isActive: boolean;
  anyActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  className: string;
  children: ReactNode;
}

export function LayerCard({
  index,
  isInView,
  isActive,
  anyActive,
  onHover,
  onLeave,
  className,
  children,
}: LayerCardProps) {
  const shouldReduce = useReducedMotion();
  const dimmed = anyActive && !isActive;

  return (
    <LazyMotion features={domAnimation}>
    <m.div
      initial={shouldReduce ? false : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: dimmed ? 0.5 : 1, y: 0 } : {}}
      transition={{
        duration: shouldReduce ? 0 : 0.5,
        delay: index * 0.15,
        opacity: { duration: 0.3 },
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`cursor-pointer rounded-xl p-6 transition-opacity duration-300 ${index > 0 ? "-mt-2" : ""} ${className}`}
    >
      {children}
    </m.div>
    </LazyMotion>
  );
}
