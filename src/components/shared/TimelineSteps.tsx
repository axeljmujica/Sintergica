"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";

export interface TimelineStep {
  label: string;
  title: string;
  description: string;
}

interface TimelineStepsProps {
  steps: TimelineStep[];
}

export function TimelineSteps({ steps }: TimelineStepsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* Vertical line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-px bg-brand-accent/20"
        aria-hidden="true"
      />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <m.div
            key={step.label}
            initial={shouldReduce ? false : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: shouldReduce ? 0 : 0.5,
              delay: 0.1 + i * 0.12,
            }}
            className="relative flex gap-6 pl-2"
          >
            {/* Dot */}
            <div className="relative z-10 mt-1.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-surface dark:bg-brand-midnight text-xs font-bold text-brand-accent">
              {i + 1}
            </div>

            <div className="flex-1 rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {step.label}
              </span>
              <h3 className="mt-1 text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                {step.description}
              </p>
            </div>
          </m.div>
        ))}
      </div>
    </div>
    </LazyMotion>
  );
}
