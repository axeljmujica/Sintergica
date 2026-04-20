"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Languages, Scale, Shield, Users, Globe2, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.differentiators;

const ICONS: LucideIcon[] = [Languages, Scale, Shield, Users, Globe2, BrainCircuit];

export function LatticeNaatDifferentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="diferenciadores"
        className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-3xl" />
        </div>

        <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl text-balance">
              {c.h2}
            </h2>
          </m.div>

          {/* Items grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.items.map((item, i) => {
              const Icon = ICONS[i] ?? BrainCircuit;
              return (
                <m.div
                  key={item.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.08 }}
                  className="group rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-white dark:bg-brand-navy/50 p-6 transition-all hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20">
                    <Icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <h3 className="mt-5 font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {item.desc}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
