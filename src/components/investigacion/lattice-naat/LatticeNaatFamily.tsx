"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Cpu, Server, Cloud, Star, Zap, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.family;

const MODEL_ICONS: Record<string, LucideIcon> = {
  edge: Zap,
  compact: Cpu,
  standard: Layers,
  advanced: Server,
  full: Cloud,
};

export function LatticeNaatFamily() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="familia"
        className="bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl text-balance">
              {c.h2}
            </h2>
            <p className="mt-4 text-brand-midnight/60 dark:text-brand-white/60 text-balance">
              {c.subtitle}
            </p>
          </m.div>

          {/* Models grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.models.map((model, i) => {
              const Icon = MODEL_ICONS[model.id] ?? Layers;
              const borderCls = model.featured
                ? "border-brand-accent/40 shadow-lg shadow-brand-accent/5"
                : "border-brand-midnight/8 dark:border-brand-white/10";
              const barCls = model.featured ? "bg-brand-accent" : "bg-brand-midnight/20 dark:bg-brand-white/20";

              return (
                <m.div
                  key={model.id}
                  initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.08 }}
                  className={`relative flex flex-col overflow-hidden rounded-2xl border bg-brand-white dark:bg-brand-navy/60 ${borderCls}`}
                >
                  {/* Featured star */}
                  {model.featured && (
                    <span className="absolute top-4 right-4 flex items-center gap-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                      <Star className="h-3 w-3 fill-brand-accent" />
                      Principal
                    </span>
                  )}

                  {/* Top accent bar */}
                  <div className={`h-1 w-full ${barCls}`} />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Icon + name */}
                    <div className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${model.featured ? "bg-brand-accent/10" : "bg-brand-midnight/5 dark:bg-brand-white/5"}`}>
                        <Icon className={`h-5 w-5 ${model.featured ? "text-brand-accent" : "text-brand-midnight/60 dark:text-brand-white/60"}`} />
                      </div>
                      <div>
                        <p className="font-proxima text-lg font-bold leading-tight text-brand-midnight dark:text-brand-white">
                          {model.name}
                        </p>
                        <p className={`text-sm font-semibold ${model.featured ? "text-brand-accent" : "text-brand-midnight/55 dark:text-brand-white/55"}`}>
                          {model.params}
                        </p>
                      </div>
                    </div>

                    {/* Specs */}
                    <dl className="mt-5 space-y-3 border-t border-brand-midnight/5 dark:border-brand-white/10 pt-4 text-sm">
                      <div className="flex justify-between gap-4">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">Contexto</dt>
                        <dd className="text-brand-midnight/80 dark:text-brand-white/80 text-right">{model.context}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">Modalidad</dt>
                        <dd className="text-brand-midnight/80 dark:text-brand-white/80 text-right">{model.modality}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">Despliegue</dt>
                        <dd className="text-brand-midnight/80 dark:text-brand-white/80 text-right">{model.deployment}</dd>
                      </div>
                    </dl>

                    {/* Use case */}
                    <div className="mt-5 border-t border-brand-midnight/5 dark:border-brand-white/10 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40 mb-1.5">
                        Caso de uso
                      </p>
                      <p className="text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                        {model.useCase}
                      </p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>

          {/* Note */}
          <m.p
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.7 }}
            className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-brand-midnight/50 dark:text-brand-white/50"
          >
            {c.note}
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
}
