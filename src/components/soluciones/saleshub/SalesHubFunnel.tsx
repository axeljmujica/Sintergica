"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Megaphone,
  Filter,
  Mail,
  FileText,
  Trophy,
} from "lucide-react";

const STEPS = [
  {
    icon: Megaphone,
    title: "Captación",
    description:
      "El prospecto llega desde ads, redes sociales, landing page o formulario. Se registra automáticamente como lead.",
    count: "1,200",
    barWidth: "100%",
    barBg: "bg-success-600/20",
  },
  {
    icon: Filter,
    title: "Calificación",
    description:
      "Scoring automático basado en comportamiento: aperturas de email, visitas, interacciones. Los leads calientes suben al pipeline.",
    count: "840",
    barWidth: "80%",
    barBg: "bg-success-600/30",
  },
  {
    icon: Mail,
    title: "Nurturing",
    description:
      "Secuencias automatizadas: emails, WhatsApp, recordatorios. El prospecto avanza sin que tu equipo pierda tiempo.",
    count: "380",
    barWidth: "60%",
    barBg: "bg-success-600/50",
  },
  {
    icon: FileText,
    title: "Propuesta",
    description:
      "Tu vendedor recibe la alerta: este lead está listo. Agenda automática, propuesta personalizada, seguimiento estructurado.",
    count: "95",
    barWidth: "40%",
    barBg: "bg-success-600/70",
  },
  {
    icon: Trophy,
    title: "Cierre",
    description:
      "Deal cerrado. El sistema registra el revenue, actualiza métricas y mide ROI por canal de origen.",
    count: "28",
    barWidth: "25%",
    barBg: "bg-success-600",
  },
];

export function SalesHubFunnel() {
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
      aria-label="Flujo comercial SalesHub"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <m.div {...anim(0)} className="text-center">
          <span className="inline-block rounded-full border border-success-600/20 bg-success-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-success-600">
            Cómo funciona
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-proxima text-3xl font-bold leading-tight text-brand-midnight dark:text-brand-white md:text-4xl">
            Del primer clic al cierre. Sin puntos ciegos.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-midnight/60 dark:text-brand-white/60">
            SalesHub controla cada etapa del journey de tu cliente con
            automatización inteligente.
          </p>
        </m.div>

        {/* Funnel steps — horizontal on desktop, vertical on mobile */}
        <div className="relative mt-16">
          {/* Desktop connector line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block"
            aria-hidden="true"
          >
            <m.div
              className="mx-auto h-0.5 bg-success-600/20"
              style={{ maxWidth: "calc(100% - 100px)" }}
              {...(shouldReduce
                ? {}
                : {
                    initial: { scaleX: 0 },
                    animate: isInView ? { scaleX: 1 } : {},
                    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
                  })}
            />
          </div>

          {/* Mobile connector line */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 -translate-x-1/2 lg:hidden"
            aria-hidden="true"
          >
            <m.div
              className="h-full w-0.5 bg-success-600/20"
              {...(shouldReduce
                ? {}
                : {
                    initial: { scaleY: 0 },
                    animate: isInView ? { scaleY: 1 } : {},
                    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
                  })}
            />
          </div>

          {/* Steps */}
          <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <m.div
                  key={step.title}
                  {...anim(0.15 + i * 0.15)}
                  className="relative z-10 w-full lg:w-auto lg:flex-1"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex w-full flex-col items-center rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/30 dark:bg-brand-navy/30 p-6 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success-600/10 text-success-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs text-brand-midnight/50 dark:text-brand-white/50">
                        {step.description}
                      </p>
                      <span className="mt-3 text-lg font-bold text-success-600">
                        {step.count}
                      </span>
                    </div>
                    {/* Volume bar — decorative width animation */}
                    <m.div
                      className={`mt-2 h-2 rounded-full ${step.barBg}`}
                      {...(shouldReduce
                        ? { style: { width: step.barWidth } }
                        : {
                            initial: { width: 0 },
                            animate: isInView ? { width: step.barWidth } : {},
                            transition: {
                              duration: 0.8,
                              delay: 0.6 + i * 0.15,
                              ease: "easeOut",
                            },
                          })}
                    />
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
