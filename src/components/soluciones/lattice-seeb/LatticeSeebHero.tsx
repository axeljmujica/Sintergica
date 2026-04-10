"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Brain, Shield, Cpu, Scale, Landmark, Ship, Zap, HeartPulse, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const MICRO_FEATURES = [
  { icon: Brain, label: "Destilado desde Na'at (1T)" },
  { icon: Shield, label: "On-premise · datos" },
  { icon: Cpu, label: "4B–9B parámetros" },
];

const SEEB_MODELS = [
  { id: "legal", name: "Legal", icon: Scale, bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400", bar: "bg-violet-500" },
  { id: "gobierno", name: "Gobierno", icon: Landmark, bg: "bg-sky-500/10", border: "border-sky-500/30", text: "text-sky-400", bar: "bg-sky-500" },
  { id: "logistica", name: "Logística", icon: Ship, bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", bar: "bg-amber-500" },
  { id: "energia", name: "Energía", icon: Zap, bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-400", bar: "bg-yellow-500" },
  { id: "salud", name: "Salud", icon: HeartPulse, bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", bar: "bg-emerald-500" },
  { id: "financiero", name: "Financiero", icon: Building2, bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", bar: "bg-blue-500" },
];

const c = SEEB_DEFAULT.hero;

export function LatticeSeebHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
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
        className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-32 pb-20 px-6"
        aria-label="Lattice Séeb Hero"
      >
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/ai-cloud-concept-with-lit-brain.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.15]"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/80 via-brand-surface/70 to-brand-surface dark:from-brand-midnight/80 dark:via-brand-midnight/70 dark:to-brand-midnight" />
        </div>

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-violet-600/8 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/6 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand-accent/4 blur-3xl" />
        </div>

        <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
          {/* Top content - centered */}
          <div className="text-center max-w-2xl mx-auto">
            {/* Badge */}
            <m.span
              {...anim(0)}
              className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400"
            >
              {c.badge}
            </m.span>

            {/* h1 */}
            <m.h1
              {...anim(0.1)}
              className="mt-6 font-proxima text-4xl font-extrabold leading-tight text-brand-midnight dark:text-brand-white md:text-5xl lg:text-6xl text-balance"
            >
              Modelos de IA especializados para sectores regulados.
            </m.h1>

            {/* Subtitle */}
            <m.p
              {...anim(0.2)}
              className="mx-auto mt-6 max-w-2xl text-lg text-brand-midnight/70 dark:text-brand-white/70 text-balance"
            >
              {c.subtitle}
            </m.p>

            {/* Micro-features */}
            <m.div
              {...anim(0.3)}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {MICRO_FEATURES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-brand-midnight/10 dark:border-brand-white/5 bg-brand-white dark:bg-brand-navy/50 px-3 py-1.5 text-sm text-brand-midnight/70 dark:text-brand-white/60"
                >
                  <Icon className="h-4 w-4 text-violet-400" />
                  {label}
                </span>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div
              {...anim(0.4)}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/25"
              >
                {c.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#modelos"
                className="inline-flex items-center justify-center rounded-lg border border-brand-midnight/20 dark:border-brand-white/10 bg-white dark:bg-transparent px-6 py-3 font-semibold text-brand-midnight dark:text-brand-white transition-colors hover:bg-brand-midnight/5 dark:hover:bg-brand-white/5"
              >
                {c.ctaSecondary}
              </a>
            </m.div>
          </div>

          {/* Model Cards Grid - Below the fold */}
          <m.div
            {...anim(0.5)}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {SEEB_MODELS.map((model, i) => {
              const Icon = model.icon;
              return (
                <m.div
                  key={model.id}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className={`group relative overflow-hidden rounded-xl border ${model.border} bg-brand-white dark:bg-brand-navy/50 p-4 transition-all hover:-translate-y-1 hover:shadow-lg`}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${model.bar}`} />
                  
                  <div className="flex flex-col items-center text-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${model.bg} mb-3`}>
                      <Icon className={`h-5 w-5 ${model.text}`} />
                    </div>
                    <p className="text-sm font-semibold text-brand-midnight dark:text-brand-white">
                      Séeb {model.name}
                    </p>
                    <p className="text-xs text-brand-midnight/50 dark:text-brand-white/50 mt-1">
                      4B – 9B
                    </p>
                  </div>
                </m.div>
              );
            })}
          </m.div>

          {/* Key Stats Row */}
          <m.div
            {...anim(0.7)}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <div className="text-center">
              <p className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white">6</p>
              <p className="text-sm text-brand-midnight/60 dark:text-brand-white/60">Verticales especializadas</p>
            </div>
            <div className="hidden md:block h-10 w-px bg-brand-midnight/10 dark:bg-brand-white/10" />
            <div className="text-center">
              <p className="font-proxima text-3xl font-bold text-violet-500">4B–9B</p>
              <p className="text-sm text-brand-midnight/60 dark:text-brand-white/60">Parámetros por modelo</p>
            </div>
            <div className="hidden md:block h-10 w-px bg-brand-midnight/10 dark:bg-brand-white/10" />
            <div className="text-center">
              <p className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white">&lt;300ms</p>
              <p className="text-sm text-brand-midnight/60 dark:text-brand-white/60">Tiempo de respuesta</p>
            </div>
            <div className="hidden md:block h-10 w-px bg-brand-midnight/10 dark:bg-brand-white/10" />
            <div className="text-center">
              <p className="font-proxima text-3xl font-bold text-emerald-500">94%+</p>
              <p className="text-sm text-brand-midnight/60 dark:text-brand-white/60">Precisión sectorial</p>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
