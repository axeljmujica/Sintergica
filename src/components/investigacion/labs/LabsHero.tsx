"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, FlaskConical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";

export function LabsHero() {
  const locale = useLocale();
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).hero;

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
        className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-32 pb-24 px-6"
        aria-label="Sintérgica Labs Hero"
      >
        {/* Decorative background image */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/Catedral Metropolitana Ciudad de México.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/80 via-brand-surface/60 to-brand-surface dark:from-brand-midnight/80 dark:via-brand-midnight/60 dark:to-brand-midnight" />
        </div>

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-600/7 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/4 blur-3xl" />
        </div>

        <div ref={ref} className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <m.div
            {...anim(0)}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-midnight/80 dark:text-brand-white/80 backdrop-blur-md">
              <FlaskConical className="h-3.5 w-3.5 text-emerald-400" />
              {c.badge}
            </span>
          </m.div>

          {/* h1 */}
          <m.h1
            {...anim(0.1)}
            className="mt-4 font-proxima font-extrabold leading-[1.05] tracking-tight text-brand-midnight dark:text-brand-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {c.h1}
          </m.h1>

          {/* Subtitle */}
          <m.p
            {...anim(0.2)}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed font-medium"
          >
            {c.subtitle}
          </m.p>

          {/* CTAs */}
          <m.div
            {...anim(0.3)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-brand-midnight dark:text-brand-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/25"
            >
              {c.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#lineas"
              className="inline-flex items-center justify-center rounded-lg border border-brand-midnight/20 dark:border-brand-white/10 px-6 py-3 font-semibold text-brand-midnight dark:text-brand-white transition-colors hover:bg-brand-white/5"
            >
              {c.ctaSecondary}
            </a>
          </m.div>

          {/* Trust signals */}
          <m.div
            {...anim(0.4)}
            className="mt-8 flex flex-wrap justify-center gap-5"
          >
            {c.trustSignals.map((s) => (
              <span
                key={s}
                className="flex items-center gap-1.5 text-xs text-brand-midnight/40 dark:text-brand-white/40"
              >
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                {s}
              </span>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
