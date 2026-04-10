"use client";

import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PRE_FOOTER_CTA } from "@/lib/data";
import { useDictionary, useLocale } from "@/i18n/DictionaryProvider";
import { LampContainer } from "@/components/ui/lamp-container";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { VideoBackground } from "@/components/ui/VideoBackground";
import Image from "next/image";

const T = {
  es: {
    ariaLabel: "Llamada a la acción",
    trust1: "Sin permanencia",
    trust2: "Demo con tus datos reales",
    trust3: "ROI estimado incluido",
  },
  en: {
    ariaLabel: "Call to action",
    trust1: "No lock-in",
    trust2: "Demo with your real data",
    trust3: "Estimated ROI included",
  },
  "pt-br": {
    ariaLabel: "Chamada para ação",
    trust1: "Sem permanência",
    trust2: "Demo com seus dados reais",
    trust3: "ROI estimado incluído",
  },
} as const;

export function PreFooterCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const dictionary = useDictionary();
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <LazyMotion features={domAnimation}>
    <section
      id="cta"
      className="relative overflow-hidden bg-black py-28 sm:py-36"
      aria-label={t.ariaLabel}
    >
      {/* Video background */}

      {/* Conceptual Background Image per User Request */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/121725.jpg"
          alt="Conceptual background"
          fill
          className="object-cover opacity-80"
        />
        {/* Dark overlay for professional look and text readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </div>

      {/* Sparkles */}
      <SparklesCore
        particleDensity={20}
        particleColor="#3665f5"
        className="opacity-15 dark:opacity-25"
      />

      {/* LampContainer beam effect */}
      <LampContainer className="absolute inset-0" beamColor="#3665f5">{null}</LampContainer>



      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <m.div
          ref={ref}
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.7 }}
        >
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-white">
            {dictionary.preFooterCta?.badge || PRE_FOOTER_CTA.badge}
          </span>
          <h2 className="font-proxima text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.75rem]">
            {dictionary.preFooterCta?.title || PRE_FOOTER_CTA.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-white/80 sm:text-lg">
            {dictionary.preFooterCta?.subtitle || PRE_FOOTER_CTA.subtitle}
          </p>
        </m.div>

        <m.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href={PRE_FOOTER_CTA.ctaHref}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-accent px-10 text-[1rem] font-bold text-white shadow-xl shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/40"
          >
            {dictionary.preFooterCta?.cta || PRE_FOOTER_CTA.cta}
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-6 flex items-center justify-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light" />
              {t.trust1}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light" />
              {t.trust2}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light" />
              {t.trust3}
            </span>
          </div>
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}
