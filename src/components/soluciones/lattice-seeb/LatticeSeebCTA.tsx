"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Calendar, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const c = SEEB_DEFAULT.cta;

export function LatticeSeebCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="contacto"
        className="relative overflow-hidden py-24 px-6"
        aria-label={c.h2}
      >
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.06] dark:opacity-[0.04]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-brand-surface/95 to-brand-surface dark:from-brand-midnight dark:via-brand-midnight/95 dark:to-brand-midnight" />
        </div>

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        </div>

        <div ref={ref} className="relative z-10 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
                <Sparkles className="h-3 w-3" />
                {c.badge}
              </span>
              <h2 className="mt-6 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
                {c.h2}
              </h2>
              <p className="mt-4 text-brand-midnight/60 dark:text-brand-white/60">
                {c.subtitle}
              </p>

              {/* Benefits list */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-brand-midnight/70 dark:text-brand-white/70">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10">
                    <Calendar className="h-3 w-3 text-violet-400" />
                  </div>
                  <span>45 minutos, sin costo, sin permanencia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-midnight/70 dark:text-brand-white/70">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10">
                    <MessageCircle className="h-3 w-3 text-violet-400" />
                  </div>
                  <span>Análisis personalizado de tu industria</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-midnight/70 dark:text-brand-white/70">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10">
                    <Sparkles className="h-3 w-3 text-violet-400" />
                  </div>
                  <span>Propuesta con ROI estimado</span>
                </div>
              </div>
            </m.div>

            {/* Right - CTA Card */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-brand-navy/40 p-8">
                {/* Decorative elements */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand-accent/10 blur-2xl" />
                
                <div className="relative">
                  <p className="text-sm font-medium text-violet-300 mb-2">¿Listo para empezar?</p>
                  <p className="text-2xl font-bold text-white mb-6">
                    Agenda tu diagnóstico gratuito
                  </p>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/25"
                    >
                      {c.ctaPrimary}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/soluciones/lattice#arquitectura"
                      className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      {c.ctaSecondary}
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-center text-white/50">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
