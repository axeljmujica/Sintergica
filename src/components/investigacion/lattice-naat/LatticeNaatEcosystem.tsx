"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { BrainCircuit, Layers, Workflow, LayoutDashboard, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.ecosystem;

const NODE_ICONS: Record<string, LucideIcon> = {
  naat: BrainCircuit,
  seeb: Layers,
  agents: Workflow,
  platform: LayoutDashboard,
};

export function LatticeNaatEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="ecosistema"
        className="relative overflow-hidden bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="relative z-10 mx-auto max-w-4xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl text-balance">
              {c.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-midnight/60 dark:text-brand-white/60">
              {c.subtitle}
            </p>
          </m.div>

          {/* Flow diagram */}
          <div className="mt-14 flex flex-col items-center gap-3">
            {c.nodes.map((node, i) => {
              const Icon = NODE_ICONS[node.key] ?? Layers;
              const isFirst = i === 0;
              return (
                <div key={node.key} className="w-full max-w-lg flex flex-col items-center">
                  <m.div
                    initial={shouldReduce ? false : { opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.4, delay: 0.2 + i * 0.12 }}
                    className={`w-full rounded-2xl border p-5 ${
                      isFirst
                        ? "border-brand-accent/40 bg-gradient-to-br from-brand-accent/15 to-brand-accent/5 shadow-[0_0_40px_rgba(0,110,250,0.15)]"
                        : "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-navy/60"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${isFirst ? "bg-brand-accent/20" : "bg-brand-accent/10"}`}>
                        <Icon className={`h-5 w-5 ${isFirst ? "text-brand-accent-light" : "text-brand-accent"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white">
                            {node.label}
                          </p>
                          <span className="text-xs font-semibold text-brand-accent">
                            {node.sub}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                          {node.desc}
                        </p>
                      </div>
                    </div>
                  </m.div>

                  {/* Connector */}
                  {i < c.nodes.length - 1 && (
                    <m.div
                      initial={shouldReduce ? false : { opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: shouldReduce ? 0 : 0.4, delay: 0.3 + i * 0.12 }}
                      className="flex flex-col items-center py-2"
                      aria-hidden
                    >
                      <div className="h-4 w-px bg-gradient-to-b from-brand-accent/40 to-brand-accent/10" />
                      <ArrowDown className="h-4 w-4 text-brand-accent/50" />
                    </m.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
