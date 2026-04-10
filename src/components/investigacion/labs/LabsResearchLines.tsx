"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";
import type { ResearchLine } from "@/lib/labs-i18n";

const CATEGORY_STYLES: Record<ResearchLine["category"], { bg: string; border: string; badge: string; num: string; dot: string }> = {
  modelos: {
    bg: "bg-violet-500/[0.06]",
    border: "border-violet-500/25",
    badge: "bg-violet-500/10 text-violet-300",
    num: "text-violet-400",
    dot: "bg-violet-400",
  },
  datos: {
    bg: "bg-emerald-500/[0.06]",
    border: "border-emerald-500/25",
    badge: "bg-emerald-500/10 text-emerald-300",
    num: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  evaluacion: {
    bg: "bg-sky-500/[0.06]",
    border: "border-sky-500/25",
    badge: "bg-sky-500/10 text-sky-300",
    num: "text-sky-400",
    dot: "bg-sky-400",
  },
  razonamiento: {
    bg: "bg-amber-500/[0.06]",
    border: "border-amber-500/25",
    badge: "bg-amber-500/10 text-amber-300",
    num: "text-amber-400",
    dot: "bg-amber-400",
  },
};

export function LabsResearchLines() {
  const locale = useLocale();
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).researchLines;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="lineas"
        className="bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {c.badge}
            </span>
            <h2 className="mt-6 font-proxima font-bold text-brand-midnight dark:text-brand-white text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              {c.h2}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-brand-midnight/60 dark:text-brand-white/60 leading-relaxed font-medium">
              {c.subtitle}
            </p>
          </m.div>

          {/* Category legend */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {(Object.entries(c.categoryLabels) as [ResearchLine["category"], string][]).map(([key, label]) => {
              const s = CATEGORY_STYLES[key];
              return (
                <span key={key} className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${s.badge}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                  {label}
                </span>
              );
            })}
          </m.div>

          {/* Lines grid - Masonry/Cascading style */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {c.lines.map((line, i) => {
              const s = CATEGORY_STYLES[line.category];
              return (
                <m.div
                  key={line.num}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: 0.1 + i * 0.07 }}
                  className={`group rounded-3xl border bg-brand-surface dark:bg-brand-midnight/40 p-8 transition-all duration-300 hover:bg-brand-midnight/80 hover:-translate-y-1 ${s.border}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-8">
                    <span className={`font-mono text-sm font-bold ${s.num}`}>{line.num}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${s.badge}`}>
                      {c.categoryLabels[line.category]}
                    </span>
                  </div>
                  <h3 className="text-xl font-proxima font-semibold leading-tight text-brand-midnight dark:text-brand-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {line.title}
                  </h3>
                  <p className="text-base leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                    {line.desc}
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
