"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { CheckCircle, BrainCircuit, ChevronRight } from "lucide-react";
import Link from "next/link";

const TRUST_SIGNALS = [
  "Implementación en 3 semanas",
  "Compatible con Lattice",
  "Sin permanencia",
];

export function NahuiCTA() {
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
      className="bg-gradient-to-b from-brand-navy to-brand-deep py-24 px-6"
      aria-label="CTA Nahui"
    >
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <m.div {...anim(0)}>
          <span className="inline-block rounded-full border border-brand-accent-light/20 bg-brand-accent-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-light">
            Siguiente paso
          </span>
        </m.div>

        <m.h2
          {...anim(0.1)}
          className="mt-6 font-proxima font-bold text-3xl leading-tight text-brand-midnight dark:text-brand-white md:text-4xl"
        >
          Tu operación logística merece visibilidad total.
        </m.h2>

        <m.p
          {...anim(0.2)}
          className="mt-4 text-base text-brand-midnight/60 dark:text-brand-white/60"
        >
          Solicita una demo de Nahui. Te mostramos cómo funciona con un caso de
          uso de tu industria. Operativo en semanas, sin permanencia.
        </m.p>

        <m.div {...anim(0.3)}>
          <Link
            href="/soluciones/lattice"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 text-[1rem] font-semibold text-white shadow-lg shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:bg-brand-400 hover:shadow-brand-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            <BrainCircuit className="h-5 w-5" />
            Descubrir Lattice
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </m.div>

        {/* Trust signals */}
        <m.div
          {...anim(0.4)}
          className="mt-6 flex flex-wrap justify-center gap-6"
        >
          {TRUST_SIGNALS.map((signal) => (
            <span
              key={signal}
              className="flex items-center gap-1.5 text-sm text-brand-midnight/50 dark:text-brand-white/50"
            >
              <CheckCircle className="h-4 w-4" />
              {signal}
            </span>
          ))}
        </m.div>

        {/* Lattice cross-link */}
        <m.p {...anim(0.5)} className="mt-8">
          <Link
            href="/soluciones/lattice"
            className="text-sm text-brand-accent-light transition-colors hover:text-brand-accent-light/80"
          >
            ¿Ya usas Lattice? Nahui se integra directamente.
          </Link>
        </m.p>
      </div>
    </section>
    </LazyMotion>
  );
}
