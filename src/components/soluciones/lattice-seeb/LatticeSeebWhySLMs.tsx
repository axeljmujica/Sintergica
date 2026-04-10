"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { BookOpen } from "lucide-react";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const c = SEEB_DEFAULT.whySLMs;

const CARD_COLORS = [
  {
    border: "border-violet-500/30",
    bg: "bg-violet-500/[0.06]",
    statColor: "text-violet-400",
    codeBg: "bg-violet-500/10 text-violet-400",
  },
  {
    border: "border-sky-500/30",
    bg: "bg-sky-500/[0.06]",
    statColor: "text-sky-400",
    codeBg: "bg-sky-500/10 text-sky-400",
  },
  {
    border: "border-brand-accent/30",
    bg: "bg-brand-accent/[0.06]",
    statColor: "text-brand-accent",
    codeBg: "bg-brand-accent/10 text-brand-accent",
  },
];

export function LatticeSeebWhySLMs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="por-que-slms"
        className="bg-brand-surface dark:bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
              {c.h2}
            </h2>
          </m.div>

          {/* Theses cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {c.theses.map((thesis, i) => {
              const colors = CARD_COLORS[i];
              return (
                <m.div
                  key={thesis.code}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.12 }}
                  className={`rounded-2xl border p-6 ${colors.border} ${colors.bg}`}
                >
                  {/* Code badge */}
                  <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${colors.codeBg}`}>
                    {thesis.code}
                  </span>

                  {/* Stat */}
                  <p className={`mt-4 font-proxima font-extrabold text-4xl ${colors.statColor}`}>
                    {thesis.stat}
                  </p>
                  <p className="text-xs font-medium text-brand-midnight/50 dark:text-brand-white/50 uppercase tracking-wider mt-0.5">
                    {thesis.statLabel}
                  </p>

                  {/* Title + desc */}
                  <p className="mt-4 text-base font-semibold text-brand-midnight dark:text-brand-white">
                    {thesis.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                    {thesis.desc}
                  </p>
                </m.div>
              );
            })}
          </div>

          {/* Citation */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.5 }}
            className="mt-8 flex items-start gap-3 rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/30 dark:bg-brand-navy/30 px-5 py-4"
          >
            <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-midnight/40 dark:text-brand-white/40" />
            <p className="text-xs leading-relaxed text-brand-midnight/45 dark:text-brand-white/45 italic">
              {c.citation}
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
