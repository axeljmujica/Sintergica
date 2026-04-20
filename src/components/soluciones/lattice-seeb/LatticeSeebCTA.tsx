"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const c = SEEB_DEFAULT.cta;

const TRUST_SIGNALS = [
  "45 minutos, sin costo, sin permanencia",
  "Análisis personalizado de tu industria",
  "Propuesta con ROI estimado",
];

export function LatticeSeebCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        id="contacto"
        className="relative overflow-hidden bg-black py-28 sm:py-36"
        aria-label={c.h2}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/121725.jpg"
            alt=""
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <m.div {...anim(0)}>
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-white">
              {c.badge}
            </span>
          </m.div>

          <m.h2
            {...anim(0.1)}
            className="font-proxima text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            {c.h2}
          </m.h2>

          <m.p
            {...anim(0.2)}
            className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-white/80 sm:text-lg"
          >
            {c.subtitle}
          </m.p>

          <m.div
            {...anim(0.3)}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-accent px-10 text-[1rem] font-bold text-white shadow-xl shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/40"
            >
              {c.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/soluciones/lattice#arquitectura"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-[1rem] font-semibold text-white transition-colors hover:bg-white/10"
            >
              {c.ctaSecondary}
            </Link>
          </m.div>

          <m.div
            {...anim(0.4)}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {TRUST_SIGNALS.map((signal) => (
              <span
                key={signal}
                className="flex items-center gap-1.5 text-xs text-white/70"
              >
                <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light" />
                {signal}
              </span>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
