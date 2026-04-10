"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { AlertTriangle, CheckCircle } from "lucide-react";

const FRAGMENTED_TOOLS = [
  { label: "CRM", rotate: "rotate-[-2deg]" },
  { label: "Email Marketing", rotate: "rotate-[1deg]" },
  { label: "Landing Pages", rotate: "rotate-[-1deg]" },
  { label: "Agenda / Citas", rotate: "rotate-[2deg]" },
  { label: "Reportes", rotate: "rotate-[-1.5deg]" },
];

const UNIFIED_TOOLS = [
  "CRM",
  "Email",
  "Funnels",
  "Citas",
  "Reportes",
];

export function SalesHubProblem() {
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
      className="bg-brand-surface dark:bg-brand-deep py-20 px-6"
      aria-label="Problema que resuelve SalesHub"
    >
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <m.h2
          {...anim(0)}
          className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white md:text-4xl"
        >
          ¿Cuántas herramientas usas para vender?
        </m.h2>

        <m.p {...anim(0.1)} className="mt-4 text-brand-midnight/60 dark:text-brand-white/60">
          La mayoría de los equipos comerciales en México operan con un CRM, una
          herramienta de email marketing, otra de landing pages, otra de agendar
          citas y otra de reportes. Cinco plataformas, cinco logins, cero
          visibilidad unificada.
        </m.p>

        {/* Comparison cards */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Problem card */}
          <m.div
            {...anim(0.2)}
            className="rounded-xl border border-danger-600/20 bg-brand-surface/50 dark:bg-brand-navy/50 p-8"
          >
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle className="h-5 w-5 text-danger-600" />
              <span className="font-semibold text-brand-midnight dark:text-brand-white">
                Así opera la mayoría
              </span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {FRAGMENTED_TOOLS.map((tool) => (
                <span
                  key={tool.label}
                  className={`rounded-lg border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/50 px-3 py-2 text-sm text-brand-midnight/50 dark:text-brand-white/50 ${tool.rotate}`}
                >
                  {tool.label}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-danger-600">
              5 herramientas · 5 logins · 0 visibilidad
            </p>
          </m.div>

          {/* Solution card */}
          <m.div
            {...anim(0.3)}
            className="rounded-xl border border-success-600/20 bg-brand-surface/50 dark:bg-brand-navy/50 p-8"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-success-600" />
              <span className="font-semibold text-brand-midnight dark:text-brand-white">
                Así opera con SalesHub
              </span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {UNIFIED_TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-success-600/20 bg-success-600/10 px-3 py-2 text-sm text-success-600"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-success-600">
              1 plataforma · 1 login · Visibilidad total
            </p>
          </m.div>
        </div>

        <m.p
          {...anim(0.4)}
          className="mt-8 text-brand-midnight/60 dark:text-brand-white/60"
        >
          SalesHub reúne todo lo que necesitas para captar, nutrir y cerrar
          clientes — en un solo lugar, en español, con soporte local.
        </m.p>
      </div>
    </section>
    </LazyMotion>
  );
}
