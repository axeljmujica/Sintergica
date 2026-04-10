"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Globe, Sparkles, Zap } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Globe,
    title: "Diseñado para la complejidad de México y LATAM",
    description:
      "Rutas con casetas, aduanas internas, zonas de riesgo, normatividad SAT, reglas de comercio exterior. Nahui conoce el territorio porque se construyó aquí.",
  },
  {
    icon: Sparkles,
    title: "El único software logístico con IA privada",
    description:
      "Habilita copilotos de IA para analizar operaciones, detectar anomalías, predecir retrasos y optimizar rutas con el contexto de Lattice Na\u2019at. Logística + inteligencia artificial en un solo ecosistema.",
  },
  {
    icon: Zap,
    title: "Operativo en semanas, no meses",
    description:
      "Implementación guante blanco con equipo dedicado. Conectamos tus sistemas, configuramos flujos y capacitamos a tu equipo. En 3 semanas estás operando.",
  },
];

export function NahuiDifferentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
    <section
      className="bg-brand-surface dark:bg-brand-deep py-24 px-6"
      aria-label="Diferenciadores de Nahui"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <m.div {...anim(0)} className="text-center">
          <span className="inline-block rounded-full border border-brand-accent-light/20 bg-brand-accent-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-light">
            ¿Por qué Nahui?
          </span>
          <h2 className="mt-5 mx-auto max-w-3xl font-proxima font-bold text-3xl leading-tight text-brand-midnight dark:text-brand-white md:text-4xl">
            No es otro TMS. Es el único con IA privada integrada.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-brand-midnight/60 dark:text-brand-white/60">
            Nahui se diseñó desde cero para la complejidad operativa de México y
            Latinoamérica. Y es el único software logístico que se integra con
            un ecosistema de IA empresarial.
          </p>
        </m.div>

        {/* 3 cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {DIFFERENTIATORS.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <m.div
                key={diff.title}
                {...anim(0.1 + i * 0.15)}
                className="rounded-2xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/60 dark:bg-brand-navy/60 p-10 text-center transition-all duration-300 hover:border-brand-accent-light/20"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-accent-light/10 text-brand-accent-light">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                  {diff.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {diff.description}
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
