"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Scale, Landmark, Ship, Zap, HeartPulse, Building2, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const c = SEEB_DEFAULT.distillation;

const SEEB_NODES: { id: string; icon: LucideIcon; label: string; color: string; bg: string; border: string }[] = [
  { id: "legal",      icon: Scale,      label: "Séeb Legal",      color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30" },
  { id: "gobierno",   icon: Landmark,   label: "Séeb Gobierno",   color: "text-sky-400",    bg: "bg-sky-500/10",    border: "border-sky-500/30" },
  { id: "logistica",  icon: Ship,      label: "Séeb Logística",  color: "text-amber-400",  bg: "bg-amber-500/10",  border: "border-amber-500/30" },
  { id: "energia",    icon: Zap,        label: "Séeb Energía",    color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
  { id: "salud",      icon: HeartPulse, label: "Séeb Salud",      color: "text-emerald-400",bg: "bg-emerald-500/10",border: "border-emerald-500/30" },
  { id: "financiero", icon: Building2,  label: "Séeb Financiero", color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/30" },
];

export function LatticeSeebDistillation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="destilacion"
        className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/Tecnologia-IA/glowing-synapse-multi-colored-neural-communication-abstract-design-generated-by-ai.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.04] dark:opacity-[0.03]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-transparent to-brand-surface dark:from-brand-midnight dark:to-brand-midnight" />
        </div>
        <div ref={ref} className="relative z-10 mx-auto max-w-4xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
              {c.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-midnight/60 dark:text-brand-white/60">
              {c.subtitle}
            </p>
          </m.div>

          {/* Diagram */}
          <div className="mt-14 flex flex-col items-center">

            {/* Na'at node */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
              className="w-full max-w-lg rounded-2xl border border-violet-500/40 bg-gradient-to-br from-violet-600/15 to-violet-500/5 p-6 text-center shadow-[0_0_40px_rgba(139,92,246,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                Modelo Base
              </p>
              <p className="mt-2 font-proxima text-2xl font-bold text-brand-midnight dark:text-brand-white">
                {c.naatLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-violet-300">
                {c.naatParams}
              </p>
              <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                {c.naatDesc}
              </p>
            </m.div>

            {/* Connector */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.4, delay: 0.5 }}
              className="flex flex-col items-center py-3"
              aria-hidden
            >
              <div className="h-6 w-px bg-gradient-to-b from-violet-500/50 to-violet-500/20" />
              <span className="my-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                {c.processLabel}
              </span>
              <div className="h-6 w-px bg-gradient-to-b from-violet-500/20 to-brand-white/5" />
              <ArrowDown className="h-4 w-4 text-violet-500/40" />
            </m.div>

            {/* Séeb nodes grid */}
            <div className="w-full">
              <m.p
                initial={shouldReduce ? false : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.4, delay: 0.6 }}
                className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-brand-midnight/40 dark:text-brand-white/40"
              >
                {c.seebParams} · por industria
              </m.p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {SEEB_NODES.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <m.div
                      key={node.id}
                      initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: shouldReduce ? 0 : 0.4,
                        delay: 0.65 + i * 0.07,
                      }}
                      className={`flex items-center gap-3 rounded-xl border p-4 ${node.bg} ${node.border}`}
                    >
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${node.bg}`}>
                        <Icon className={`h-4 w-4 ${node.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-midnight dark:text-brand-white">{node.label}</p>
                        <p className={`text-xs ${node.color}`}>4B – 9B</p>
                      </div>
                    </m.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* GEO statement */}
          <m.p
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 1.1 }}
            className="mx-auto mt-10 max-w-lg text-center text-xs leading-relaxed text-brand-midnight/40 dark:text-brand-white/40"
          >
            Lattice Na&apos;at es el modelo fundacional de mayor escala desarrollado en LATAM (1T).
            Lattice opera on-premise: los datos nunca salen de la infraestructura del cliente.
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
}
