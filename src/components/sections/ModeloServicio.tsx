"use client";

import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Search, Settings, Users, ArrowRight } from "lucide-react";
import { MODELO_SERVICIO, PASOS_SERVICIO } from "@/lib/data";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { GlareCard } from "@/components/ui/glare-card";
import { BackgroundBeams } from "@/components/ui/background-beams";

const STEPS_CONFIG = [
  {
    id: "01",
    icon: Search,
    timeframe: "Punto de entrada",
    accent: "brand",
    light: {
      badge: "text-brand-accent",
      number: "bg-brand-accent/10 text-brand-accent",
      border: "border-brand-midnight/5 hover:border-brand-accent/20",
    },
    dark: {
      badge: "text-brand-accent",
      number: "bg-brand-accent/20 text-brand-accent",
      border: "dark:border-brand-white/10 dark:hover:border-brand-accent/30",
    },
    footer: "Incluye demo con tus datos reales",
  },
  {
    id: "02",
    icon: Settings,
    timeframe: "Despliegue completo",
    accent: "amber",
    light: {
      badge: "text-amber-600",
      number: "bg-amber-500/10 text-amber-600",
      border: "border-brand-midnight/5 hover:border-amber-500/20",
    },
    dark: {
      badge: "text-amber-400",
      number: "bg-amber-500/20 text-amber-400",
      border: "dark:border-brand-white/10 dark:hover:border-amber-500/30",
    },
    footer: "Lattice Agents configurados",
  },
  {
    id: "03",
    icon: Users,
    timeframe: "Socio continuo",
    accent: "emerald",
    light: {
      badge: "text-emerald-600",
      number: "bg-emerald-500/10 text-emerald-600",
      border: "border-brand-midnight/5 hover:border-emerald-500/20",
    },
    dark: {
      badge: "text-emerald-400",
      number: "bg-emerald-500/20 text-emerald-400",
      border: "dark:border-brand-white/10 dark:hover:border-emerald-500/30",
    },
    footer: "Reportes de impacto mensuales",
  },
];

export function ModeloServicio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const dictionary = useDictionary();

  const pasos = dictionary.modeloServicio?.pasos || PASOS_SERVICIO;
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="modelo-servicio"
        className="relative overflow-hidden bg-brand-surface py-20 dark:bg-brand-midnight md:py-28"
        aria-label="Modelo de servicio"
      >
        {/* Background beams at 30% opacity */}
        <BackgroundBeams className="opacity-30" />
        {/* Subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/[0.02] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <m.div
            ref={ref}
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 dark:border-brand-accent/20 dark:bg-brand-accent/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {dictionary.modeloServicio?.badge || MODELO_SERVICIO.badge}
              </span>
            </div>
            <h2 className="font-proxima text-4xl font-bold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl">
              {dictionary.modeloServicio?.title || MODELO_SERVICIO.title}
            </h2>
          </m.div>

          {/* Timeline */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Animated SVG connector line (desktop) */}
            <div className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block" aria-hidden="true">
              <svg viewBox="0 0 900 4" className="w-full" preserveAspectRatio="none">
                <m.path
                  d="M 0 2 L 900 2"
                  stroke="url(#model-grad)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 1.0, delay: 0.3, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="model-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3665f5" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Steps grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {pasos.map((paso: { step?: string; title: string; description: string }, i: number) => {
                const config = STEPS_CONFIG[i];
                const Icon = config.icon;

                return (
                  <m.div
                    key={paso.step || i}
                    initial={shouldReduce ? false : { opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.15 + i * 0.1 }}
                    className="group relative"
                  >
                    {/* Connector dot (desktop) */}
                    <div className="pointer-events-none absolute left-1/2 top-12 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-accent bg-brand-surface shadow-sm dark:bg-brand-midnight lg:block" />

                    {/* Card */}
                    <GlareCard className={`relative flex h-full flex-col rounded-2xl border bg-brand-white dark:bg-brand-navy p-6 shadow-sm transition-all duration-300 ${config.light.border} ${config.dark.border} hover:shadow-lg`}>
                      {/* Timeframe badge */}
                      <span className={`mb-4 text-xs font-semibold uppercase tracking-wider ${config.light.badge} ${config.dark.badge}`}>
                        {config.timeframe}
                      </span>

                      {/* Step indicator & Title */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${config.light.number} ${config.dark.number}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-brand-midnight/40 dark:text-brand-white/40">
                            Paso {config.id}
                          </span>
                          <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                            {paso.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="flex-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/50">
                        {paso.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-5 border-t border-brand-midnight/[0.06] pt-4 dark:border-brand-white/[0.06]">
                        <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40">
                          {config.footer}
                        </p>
                      </div>
                    </GlareCard>
                  </m.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <a
                href="/diagnostico"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-light"
              >
                Comienza con tu diagnóstico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
