"use client";

import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, FileCheck2, Clock, BellRing, TrendingUp, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { RESULTADOS, TESTIMONIALES } from "@/lib/data";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface StatDef {
  icon: LucideIcon;
  numericValue: number;
  suffix: string;
  label: string;
  color: string;
  bgColor: string;
}

const STATS: StatDef[] = [
  { 
    icon: FileCheck2, 
    numericValue: 47, 
    suffix: "+", 
    label: "Contratos revisados", 
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  { 
    icon: Clock, 
    numericValue: 63, 
    suffix: "", 
    label: "Horas ahorradas al mes", 
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10"
  },
  { 
    icon: BellRing, 
    numericValue: 12, 
    suffix: "", 
    label: "Alertas DOF automatizadas", 
    color: "text-amber-400",
    bgColor: "bg-amber-500/10"
  },
  { 
    icon: TrendingUp, 
    numericValue: 425, 
    suffix: "%", 
    label: "ROI promedio", 
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
];

function AnimatedStat({ stat, delay }: { stat: StatDef; delay: number }) {
  const Icon = stat.icon;

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
    >
      <div className={`absolute inset-0 rounded-2xl ${stat.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      <div className="relative z-10">
        <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${stat.bgColor} ${stat.color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <p className={`text-3xl font-bold tracking-tight text-white lg:text-4xl ${stat.color}`}>
          <NumberTicker value={stat.numericValue} suffix={stat.suffix} duration={2000} delay={delay} />
        </p>
        <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-white/50">
          {stat.label}
        </p>
      </div>
    </m.div>
  );
}

export function Resultados() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const dictionary = useDictionary();
  
  const current = TESTIMONIALES[activeTestimonial];

  // Map stats with dictionary
  const stats = [
    { icon: FileCheck2, numericValue: dictionary.resultados?.stats?.[0]?.value || 47, suffix: dictionary.resultados?.stats?.[0]?.suffix || "+", label: dictionary.resultados?.stats?.[0]?.label || "Contratos revisados", color: "text-blue-400", bgColor: "bg-blue-500/10" },
    { icon: Clock, numericValue: dictionary.resultados?.stats?.[1]?.value || 63, suffix: dictionary.resultados?.stats?.[1]?.suffix || "", label: dictionary.resultados?.stats?.[1]?.label || "Horas ahorradas al mes", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
    { icon: BellRing, numericValue: dictionary.resultados?.stats?.[2]?.value || 12, suffix: dictionary.resultados?.stats?.[2]?.suffix || "", label: dictionary.resultados?.stats?.[2]?.label || "Alertas DOF automatizadas", color: "text-amber-400", bgColor: "bg-amber-500/10" },
    { icon: TrendingUp, numericValue: dictionary.resultados?.stats?.[3]?.value || 425, suffix: dictionary.resultados?.stats?.[3]?.suffix || "%", label: dictionary.resultados?.stats?.[3]?.label || "ROI promedio", color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="resultados"
        className="relative overflow-hidden bg-brand-surface py-20 dark:bg-brand-deep md:py-28"
        aria-label="Resultados"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/[0.02] to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <m.div
            ref={ref}
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-1.5 dark:border-brand-accent/20 dark:bg-brand-accent/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {dictionary.resultados?.badge || RESULTADOS.badge}
              </span>
            </div>
            <h2 className="font-proxima max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl">
              {dictionary.resultados?.title || RESULTADOS.title}
            </h2>
          </m.div>

          {/* Main Card Container */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="group relative overflow-hidden rounded-3xl border border-brand-midnight/10 bg-brand-white shadow-xl dark:border-brand-white/10 dark:bg-brand-navy">
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Side: Testimonial */}
                <div className="relative z-10 flex w-full flex-col justify-between p-8 lg:w-[55%] lg:p-12">
                  {/* Company badge */}
                  <m.div 
                    key={`badge-${activeTestimonial}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center gap-3 rounded-xl border border-brand-midnight/10 bg-brand-surface px-4 py-3 dark:border-brand-white/10 dark:bg-brand-deep">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-midnight text-brand-white dark:bg-brand-white dark:text-brand-midnight">
                        <span className="font-bold text-sm">
                          {(dictionary.resultados?.testimonial?.companyName || current.companyName).charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-midnight dark:text-brand-white">
                          {dictionary.resultados?.testimonial?.companyName || current.companyName}
                        </p>
                        <p className="text-xs text-brand-midnight/50 dark:text-brand-white/50">
                          Caso de éxito verificado
                        </p>
                      </div>
                    </div>
                  </m.div>

                  {/* Quote */}
                  <m.div
                    key={`quote-${activeTestimonial}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6"
                  >
                    <p className="text-xl font-medium leading-relaxed text-brand-midnight/90 dark:text-brand-white/90 lg:text-2xl">
                      &ldquo;{dictionary.resultados?.testimonial?.quote || current.quote}&rdquo;
                    </p>
                  </m.div>

                  {/* Attribution */}
                  <m.div
                    key={`attr-${activeTestimonial}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-sm font-semibold text-brand-midnight dark:text-brand-white">
                      {dictionary.resultados?.testimonial?.name || current.name}
                    </p>
                    <p className="text-xs text-brand-midnight/50 dark:text-brand-white/50">
                      {dictionary.resultados?.testimonial?.role || current.role}
                    </p>
                  </m.div>

                  {/* Disclaimer */}
                  <div className="mt-6 rounded-xl bg-brand-surface px-4 py-3 dark:bg-brand-white/[0.03]">
                    <p className="text-xs leading-relaxed text-brand-midnight/40 dark:text-brand-white/40">
                      {dictionary.resultados?.disclaimer || "Resultados de pruebas internas y pilotos. Métricas reales de producción en proceso de documentación."}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-midnight transition-colors hover:text-brand-accent dark:text-brand-white dark:hover:text-brand-accent"
                  >
                    {dictionary.resultados?.cta || "Solicitar Diagnóstico Inteligente"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>

                {/* Right Side: Image + Stats Overlay */}
                <div className="relative w-full min-h-[420px] lg:min-h-0 lg:w-[45%]">
                  {/* Background Image */}
                  <Image
                    src={current.image}
                    alt={`Caso de éxito ${current.companyName}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/80 to-brand-midnight/60" />

                  {/* Stats Grid */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-8">
                    <div className="grid w-full max-w-sm grid-cols-2 gap-3">
                      {stats.map((s, i) => (
                        <AnimatedStat key={s.label} stat={s} delay={i * 150} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel dots */}
            {TESTIMONIALES.length > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {TESTIMONIALES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Ver caso ${i + 1}`}
                    className="group/btn relative flex h-8 w-10 items-center justify-center"
                  >
                    <span 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeTestimonial
                          ? "w-8 bg-brand-accent"
                          : "w-1.5 bg-brand-midnight/20 hover:bg-brand-midnight/40 dark:bg-brand-white/20 dark:hover:bg-brand-white/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
