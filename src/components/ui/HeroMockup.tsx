"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import Image from "next/image";

export function HeroMockup() {
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={shouldReduce ? false : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: shouldReduce ? 0 : 0.8, delay: 0.3 }}
        className="w-full"
      >
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-brand-accent/20 shadow-2xl shadow-brand-accent/10">
          <Image
            src="/images/lattice-ui/turing-dark.jpg"
            alt="Lattice Interface"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </m.div>
    </LazyMotion>
  );
}
