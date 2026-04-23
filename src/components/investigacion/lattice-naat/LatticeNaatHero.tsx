"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.hero;

const TRUST_SIGNALS = [
  "Corpus normativo mexicano",
  "5 variantes de modelo",
  "Despliegue on-premise o SaaS",
  "Open source con atribución",
];

export function LatticeNaatHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.55, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0F1C] px-6 pb-16 pt-28"
        aria-label="Lattice Na'at Hero"
      >
        {/* Video background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <video
            src="/images/naat/naat-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          />
          {/* Gradient overlay — dark blue from palette, heavier at edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/50 via-brand-midnight/15 to-[#0A0F1C]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 via-transparent to-brand-navy/30" />
        </div>

        {/* Blue glow hints */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/8 blur-[120px]" />
        </div>

        {/* Content */}
        <div ref={ref} className="relative z-10 mx-auto w-full max-w-4xl text-center">

          {/* Badge */}
          <m.div {...anim(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
              {c.badge}
            </span>
          </m.div>

          {/* H1 */}
          <m.h1
            {...anim(0.1)}
            className="mt-7 font-proxima text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl text-balance"
          >
            {c.title}
          </m.h1>

          {/* Subtitle */}
          <m.p
            {...anim(0.2)}
            className="mx-auto mt-6 max-w-3xl lg:max-w-4xl text-base leading-relaxed text-white/70 text-pretty md:text-lg"
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
              className="inline-flex h-14 items-center gap-2 rounded-full bg-brand-accent px-9 text-[1rem] font-bold text-white shadow-lg shadow-brand-accent/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-brand-accent/40"
            >
              {c.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#familia"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 text-[1rem] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
            >
              {c.ctaSecondary}
            </a>
          </m.div>

          {/* Trust signals */}
          <m.div
            {...anim(0.4)}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {TRUST_SIGNALS.map((s) => (
              <span key={s} className="flex items-center gap-1.5 text-sm text-white/60">
                <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light shrink-0" />
                {s}
              </span>
            ))}
          </m.div>

          {/* Version pill */}
          <m.div
            {...anim(0.5)}
            className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {c.versionState} · {c.version}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
