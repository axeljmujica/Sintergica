"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";
import type { RoadmapPhase } from "@/lib/labs-i18n";

const T = {
  es: {
    geoNote: "Sintérgica AI implementa IA privada para sectores regulados en México y Latinoamérica.",
    naatDetail: "Conocer Na\u2019at en detalle \u2192",
  },
  en: {
    geoNote: "Sintérgica AI implements private AI for regulated sectors in Mexico and Latin America.",
    naatDetail: "Learn about Na\u2019at in detail \u2192",
  },
  "pt-br": {
    geoNote: "Sintérgica AI implementa IA privada para setores regulados no México e na América Latina.",
    naatDetail: "Conhecer Na\u2019at em detalhe \u2192",
  },
} as const;

const PHASE_STYLES: Record<RoadmapPhase["statusVariant"], { card: string; border: string; statusBg: string; statusText: string; params: string; yearColor: string; glow: string }> = {
  active: {
    card: "bg-emerald-500/[0.07]",
    border: "border-emerald-500/40",
    statusBg: "bg-emerald-500/15 text-emerald-300",
    statusText: "text-emerald-400",
    params: "text-emerald-400",
    yearColor: "text-emerald-400/60",
    glow: "shadow-[0_0_32px_rgba(16,185,129,0.10)]",
  },
  dev: {
    card: "bg-violet-500/[0.07]",
    border: "border-violet-500/30",
    statusBg: "bg-violet-500/15 text-violet-300",
    statusText: "text-violet-400",
    params: "text-violet-400",
    yearColor: "text-violet-400/60",
    glow: "",
  },
  goal: {
    card: "bg-amber-500/[0.05]",
    border: "border-amber-500/20 border-dashed",
    statusBg: "bg-amber-500/10 text-amber-400",
    statusText: "text-amber-400",
    params: "text-amber-400",
    yearColor: "text-amber-400/60",
    glow: "",
  },
};

export function LabsNaatRoadmap() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).roadmap;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="roadmap"
        className="bg-brand-surface dark:bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {c.badge}
            </span>
            <h2 className="mt-6 font-proxima font-bold text-brand-midnight dark:text-brand-white text-4xl md:text-5xl lg:text-6xl">
              {c.h2}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-midnight/60 dark:text-brand-white/60 leading-relaxed font-medium">
              {c.subtitle}
            </p>
          </m.div>

          {/* Roadmap -- desktop: horizontal with connectors, mobile: vertical */}
          <div className="mt-8">
            {/* Connector bar -- desktop only */}
            <div className="relative mb-0 hidden items-center lg:flex" aria-hidden="true">
              <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/40 via-violet-500/30 to-amber-500/20" />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {c.phases.map((phase, i) => {
                const s = PHASE_STYLES[phase.statusVariant];
                return (
                  <m.div
                    key={phase.statusVariant}
                    initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.15 }}
                    className={`relative rounded-2xl border p-6 ${s.card} ${s.border} ${s.glow}`}
                  >
                    {/* Phase number connector dot -- desktop */}
                    <div
                      className={`absolute -top-3 left-6 hidden h-6 w-6 items-center justify-center rounded-full border-2 lg:flex ${
                        phase.statusVariant === "active"
                          ? "border-emerald-500 bg-emerald-500/20"
                          : phase.statusVariant === "dev"
                          ? "border-violet-500 bg-violet-500/20"
                          : "border-amber-500 bg-amber-500/10"
                      }`}
                      aria-hidden="true"
                    >
                      <span className={`text-[0.5rem] font-bold ${s.statusText}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Status chip */}
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.statusBg}`}>
                      {phase.status}
                    </span>

                    {/* Year */}
                    <p className={`mt-1 text-xs font-medium ${s.yearColor}`}>{phase.year}</p>

                    {/* Params -- big number */}
                    <p className={`mt-4 font-proxima text-4xl font-extrabold ${s.params}`}>
                      {phase.params}
                    </p>

                    {/* Label + arch */}
                    <p className="mt-1 text-base font-semibold text-brand-midnight dark:text-brand-white">
                      {phase.label}
                    </p>
                    {phase.arch && (
                      <p className="mt-0.5 text-xs text-brand-midnight/50 dark:text-brand-white/50">{phase.arch}</p>
                    )}

                    {/* Desc */}
                    <p className="mt-4 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                      {phase.desc}
                    </p>

                    {/* Arrow connector -- mobile only */}
                    {i < c.phases.length - 1 && (
                      <div className="mt-4 flex justify-center lg:hidden" aria-hidden="true">
                        <ArrowRight className="h-5 w-5 rotate-90 text-brand-midnight/15 dark:text-brand-white/15" />
                      </div>
                    )}
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* GEO citation */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <p className="text-center text-xs text-brand-midnight/40 dark:text-brand-white/40">
              {t.geoNote}
            </p>
            <Link
              href="/investigacion/lattice-naat"
              className="shrink-0 text-xs font-semibold text-emerald-400 transition-opacity hover:opacity-75"
            >
              {t.naatDetail}
            </Link>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
