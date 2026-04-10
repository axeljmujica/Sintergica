"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Target,
  Users,
  Mail,
  Handshake,
  BarChart3,
  Sparkles,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Target,
    title: "Captación de leads",
    description:
      "Landing pages, formularios inteligentes y funnels de conversión. Integración directa con Meta Ads y Google Ads. Cada lead entra al sistema automáticamente, sin trabajo manual.",
  },
  {
    icon: Users,
    title: "CRM integrado",
    description:
      "Gestión de contactos, historial completo de interacciones, pipeline visual y scoring de leads. El sistema sabe quién es tu prospecto, qué ha hecho y cuándo darle seguimiento.",
  },
  {
    icon: Mail,
    title: "Automatización de marketing",
    description:
      "Email marketing, workflows automatizados, secuencias de nurturing y segmentación avanzada. El prospecto recibe el mensaje correcto en el momento correcto, sin intervención manual.",
  },
  {
    icon: Handshake,
    title: "Gestión de ventas",
    description:
      "Seguimiento de oportunidades, tareas automatizadas, alertas de inactividad y reportes de rendimiento. Tu equipo nunca pierde un deal por falta de seguimiento.",
  },
  {
    icon: BarChart3,
    title: "Analytics y reportes",
    description:
      "Dashboards de conversión, ROI por canal, métricas de equipo y predicciones. Visibilidad total para tomar decisiones basadas en datos reales.",
  },
  {
    icon: Sparkles,
    title: "IA integrada (Lattice)",
    description:
      "Activa copilotos de IA para calificar leads automáticamente, generar contenido personalizado, analizar oportunidades y detectar patrones de compra. Inteligencia comercial con contexto mexicano.",
    highlight: true,
  },
];

export function SalesHubCapabilities() {
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
      id="capacidades"
      className="bg-brand-surface dark:bg-brand-midnight py-24 px-6"
      aria-label="Capacidades de SalesHub"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <m.div {...anim(0)} className="text-center">
          <span className="inline-block rounded-full border border-success-600/20 bg-success-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-success-600">
            Capacidades
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-proxima text-3xl font-bold leading-tight text-brand-midnight dark:text-brand-white md:text-4xl">
            Todo tu motor comercial. Un solo sistema.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-midnight/60 dark:text-brand-white/60">
            Captación, nurturing, pipeline, automatización, reportes y ahora
            inteligencia artificial — sin salir de SalesHub.
          </p>
        </m.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <m.div
                key={cap.title}
                {...anim(0.1 + i * 0.1)}
                className={`relative rounded-xl border p-8 transition-all duration-300 hover:shadow-lg ${
                  cap.highlight
                    ? "border-brand-accent/30 bg-brand-surface/50 dark:bg-brand-navy/50 hover:border-brand-accent/50"
                    : "border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/50 dark:bg-brand-navy/50 hover:border-success-600/20"
                }`}
              >
                {cap.highlight && (
                  <span className="absolute right-4 top-4 rounded bg-brand-accent/10 px-2 py-0.5 text-[10px] text-brand-accent">
                    IA INTEGRADA
                  </span>
                )}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-success-600/10 text-success-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {cap.description}
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
