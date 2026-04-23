"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { CheckCircle2, Sparkles, Rocket, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.roadmap;

const MILESTONE_ICONS: LucideIcon[] = [CheckCircle2, Sparkles, Rocket, Target];

export function LatticeNaatRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hoja-de-ruta"
        className="relative overflow-hidden bg-[#0A0F1C] py-24 lg:py-28 px-6"
        aria-label={c.h2}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-accent/12 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />
          <div className="absolute top-1/2 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-500/8 blur-[140px]" />
        </div>

        <div ref={ref} className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-14 md:mb-16 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
              {c.badge}
            </span>
            <h2 className="mt-5 font-proxima text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-[1.1]">
              La ruta hacia{" "}
              <span className="text-brand-accent">un modelo de frontera propio.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
              {c.subtitle}
            </p>
          </m.div>

          {/* Timeline — horizontal cards with connecting spine */}
          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
              aria-hidden
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
              {c.milestones.map((ms, i) => {
                const isCurrent = ms.state === "actual";
                const isCompleted = (ms.state as string) === "completado";
                const Icon = MILESTONE_ICONS[i] ?? MILESTONE_ICONS[0];

                return (
                  <m.div
                    key={ms.year}
                    initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.55, delay: i * 0.1 }}
                    className="relative flex flex-col"
                  >
                    {/* Node marker on spine */}
                    <div className="relative z-10 mb-6 flex items-center lg:justify-start">
                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-full ring-1 transition-transform duration-500 ${
                          isCurrent
                            ? "bg-brand-accent/20 ring-brand-accent/50"
                            : isCompleted
                            ? "bg-emerald-500/15 ring-emerald-400/40"
                            : "bg-white/5 ring-white/15"
                        }`}
                      >
                        {isCurrent && (
                          <span className="absolute inset-0 rounded-full bg-brand-accent/30 animate-ping" />
                        )}
                        <Icon
                          className={`relative h-5 w-5 ${
                            isCurrent
                              ? "text-brand-accent-light"
                              : isCompleted
                              ? "text-emerald-300"
                              : "text-white/50"
                          }`}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] border p-6 lg:p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 h-full ${
                        isCurrent
                          ? "border-brand-accent bg-gradient-to-br from-brand-accent/15 via-white/[0.05] to-white/[0.02] shadow-[0_0_0_1px_rgba(0,110,250,0.5),0_0_40px_-4px_rgba(0,110,250,0.6),0_0_80px_-8px_rgba(33,173,235,0.4)] hover:border-brand-accent-light hover:shadow-[0_0_0_1px_rgba(33,173,235,0.6),0_0_60px_-4px_rgba(0,110,250,0.7),0_0_100px_-8px_rgba(33,173,235,0.5)]"
                          : "border-white/10 bg-white/[0.035] hover:bg-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      {/* Inner glow for current */}
                      {isCurrent && (
                        <div
                          className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-radial from-brand-accent/30 to-transparent opacity-60 blur-2xl"
                          aria-hidden
                        />
                      )}
                      {/* Top highlight line */}
                      <div
                        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        aria-hidden
                      />

                      {/* Year + status */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <p
                          className={`font-proxima font-extrabold text-3xl ${
                            isCurrent ? "text-brand-accent-light" : "text-white"
                          }`}
                        >
                          {ms.year}
                        </p>
                        {isCurrent && (
                          <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                            Actual
                          </span>
                        )}
                        {isCompleted && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/50">
                            Completado
                          </span>
                        )}
                      </div>

                      {/* Phase label */}
                      <p className="mt-4 font-proxima text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                        Fase {String(i + 1).padStart(2, "0")}
                      </p>

                      {/* Title */}
                      <p
                        className={`mt-2 font-proxima text-xl font-bold leading-tight ${
                          isCurrent ? "text-white" : "text-white/90"
                        }`}
                      >
                        {ms.title}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/65">
                        {ms.desc}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
