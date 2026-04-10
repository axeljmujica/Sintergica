"use client";

import { useRef, useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Target, TrendingUp, Repeat } from "lucide-react";
import { SalesHubDashboardMockup } from "./ui/SalesHubDashboardMockup";
import { VideoBackground } from "@/components/ui/VideoBackground";

const MICRO_FEATURES = [
  { icon: Target, label: "Captación de leads" },
  { icon: TrendingUp, label: "Pipeline inteligente" },
  { icon: Repeat, label: "Seguimiento automatizado" },
];

export function SalesHubHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();
  const [mockupVisible, setMockupVisible] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const id = setTimeout(() => setMockupVisible(true), 800);
    return () => clearTimeout(id);
  }, [isInView]);

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
      className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight"
      aria-label="SalesHub Hero"
    >
      {/* Video atmospheric background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/80 via-brand-surface/40 to-brand-surface dark:from-brand-midnight/90 dark:via-brand-midnight/60 dark:to-brand-midnight" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-7xl px-6 py-24 pt-32 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Copy */}
        <div className="max-w-4xl flex flex-col items-center">
          <m.span
            {...anim(0)}
            className="inline-flex items-center rounded-full border border-success-600/20 bg-success-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-success-600 dark:text-success-500"
          >
            Ventas y Marketing
          </m.span>

          <m.h1
            {...anim(0.1)}
            className="mt-6 font-proxima text-4xl font-extrabold leading-tight text-brand-midnight dark:text-brand-white md:text-5xl lg:text-6xl text-balance"
          >
            Motor Comercial Completo con IA.
          </m.h1>

          <m.p
            {...anim(0.2)}
            className="mt-6 max-w-2xl text-lg text-brand-midnight/70 dark:text-brand-white/70 text-balance"
          >
            Convierte leads en clientes. CRM, email marketing, funnels, agenda, reportes e IA en una sola plataforma, en español, con soporte local.
          </m.p>

          <m.div {...anim(0.3)} className="mt-8 flex flex-wrap justify-center gap-3">
            {MICRO_FEATURES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border border-brand-midnight/10 dark:border-brand-white/5 bg-brand-white dark:bg-brand-navy/50 px-3 py-1.5 text-sm text-brand-midnight/70 dark:text-brand-white/60"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </m.div>

          <m.div
            {...anim(0.4)}
            className="mt-10 flex flex-col gap-4 sm:flex-row justify-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/25"
            >
              Solicitar demo de SalesHub →
            </a>
            <a
              href="#capacidades"
              className="inline-flex items-center justify-center rounded-full border border-brand-midnight/15 dark:border-brand-white/15 px-8 py-3.5 font-semibold text-brand-midnight dark:text-brand-white transition-colors hover:bg-brand-midnight/[0.03] dark:hover:bg-brand-white/[0.05]"
            >
              Ver capacidades →
            </a>
          </m.div>
        </div>

        {/* Mockup — below copy */}
        <m.div
          className="mt-16 w-full max-w-[1100px] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          {...(shouldReduce
            ? {}
            : {
                initial: { opacity: 0, y: 32 },
                animate: isInView ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.7, delay: 0.5 },
              })}
        >
          <SalesHubDashboardMockup startAnimation={mockupVisible} />
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}
