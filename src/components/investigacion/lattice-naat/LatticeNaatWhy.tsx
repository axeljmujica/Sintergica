"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.why;

export function LatticeNaatWhy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="por-que"
        className="bg-brand-surface dark:bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-6xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl text-balance">
              {c.h2}
            </h2>
          </m.div>

          {/* Stats grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {c.stats.map((stat, i) => {
              const colors = [
                { border: "border-rose-500/25", bg: "bg-rose-500/[0.06]", text: "text-rose-600 dark:text-rose-400" },
                { border: "border-amber-500/25", bg: "bg-amber-500/[0.06]", text: "text-amber-600 dark:text-amber-400" },
                { border: "border-brand-accent/25", bg: "bg-brand-accent/[0.06]", text: "text-brand-accent" },
              ][i] ?? { border: "border-brand-accent/25", bg: "bg-brand-accent/[0.06]", text: "text-brand-accent" };
              return (
              <m.div
                key={stat.label}
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-6`}
              >
                <p className={`font-proxima font-extrabold text-3xl md:text-4xl ${colors.text}`}>
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-semibold text-brand-midnight dark:text-brand-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-brand-midnight/50 dark:text-brand-white/50">
                  {stat.source}
                </p>
              </m.div>
            );})}
          </div>

          {/* Prose */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.3 }}
              className="space-y-4 text-base leading-relaxed text-brand-midnight/75 dark:text-brand-white/75"
            >
              <p>{c.p1}</p>
              <p>{c.p2}</p>
            </m.div>
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.4 }}
              className="space-y-4 text-base leading-relaxed text-brand-midnight/75 dark:text-brand-white/75"
            >
              <p>{c.p3}</p>
              <p>{c.p4}</p>
            </m.div>
          </div>

          {/* Conclusion */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.6 }}
            className="relative mt-10 overflow-hidden rounded-2xl border border-brand-accent/30 bg-gradient-to-br from-[#0A0F1C] via-brand-midnight to-brand-navy p-6 md:p-8"
          >
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-accent/20 blur-[100px]"
              aria-hidden
            />
            <p className="relative font-proxima font-bold text-2xl md:text-3xl text-white text-balance">
              {c.conclusion}
            </p>
            <Link
              href="/investigacion/sesgo-weird"
              className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-light hover:text-white transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              Leer la investigación sobre el sesgo WEIRD
              <ArrowRight className="h-4 w-4" />
            </Link>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
