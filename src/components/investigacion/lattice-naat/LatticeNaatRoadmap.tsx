"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { CheckCircle2, Circle } from "lucide-react";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.roadmap;

export function LatticeNaatRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hoja-de-ruta"
        className="bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-5xl">
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
            <h2 className="mt-4 font-proxima font-bold text-white text-3xl md:text-4xl text-balance">
              {c.h2}
            </h2>
            <p className="mt-4 text-white/60 text-balance">
              {c.subtitle}
            </p>
          </m.div>

          {/* Timeline */}
          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/40 via-brand-accent/20 to-brand-accent/5" aria-hidden />

            <div className="space-y-10">
              {c.milestones.map((ms, i) => {
                const isCurrent = ms.state === "actual";
                const isLeft = i % 2 === 0;
                return (
                  <m.div
                    key={ms.year}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.12 }}
                    className={`relative flex flex-col md:flex-row md:items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Dot on line */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center z-10">
                      {isCurrent ? (
                        <div className="relative flex h-8 w-8 items-center justify-center">
                          <span className="absolute inset-0 rounded-full bg-brand-accent/30 animate-pulse" />
                          <CheckCircle2 className="relative h-6 w-6 text-brand-accent fill-brand-accent/20" />
                        </div>
                      ) : (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-accent/40 bg-brand-midnight">
                          <Circle className="h-2 w-2 fill-brand-accent/40 text-brand-accent/40" />
                        </div>
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                      <div className={`inline-block rounded-2xl border p-6 ${
                        isCurrent
                          ? "border-brand-accent/40 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5"
                          : "border-white/10 bg-brand-navy/60"
                      }`}>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className={`font-proxima font-extrabold text-2xl ${isCurrent ? "text-brand-accent" : "text-white"}`}>
                            {ms.year}
                          </p>
                          {isCurrent && (
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                              Actual
                            </span>
                          )}
                        </div>
                        <p className="mt-2 font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                          {ms.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          {ms.desc}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for the other half */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
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
