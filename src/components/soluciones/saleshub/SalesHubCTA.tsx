"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const TRUST_SIGNALS = [
  "Interfaz en español",
  "Compatible con Lattice",
  "Sin permanencia",
];

export function SalesHubCTA() {
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
      id="contacto"
      className="relative bg-brand-surface dark:bg-brand-navy py-24 px-6"
      aria-label="CTA SalesHub"
    >
      {/* Subtle green gradient at bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, rgba(22,163,74,0.05) 0%, transparent 50%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-3xl text-center">
        <m.div {...anim(0)}>
          <span className="inline-block rounded-full border border-success-600/20 bg-success-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-success-600">
            Siguiente paso
          </span>
        </m.div>

        <m.h2
          {...anim(0.1)}
          className="mt-6 font-proxima text-3xl font-bold leading-tight text-brand-midnight dark:text-brand-white md:text-4xl"
        >
          Tu equipo comercial merece una mejor herramienta.
        </m.h2>

        <m.p
          {...anim(0.2)}
          className="mt-4 text-base text-brand-midnight/60 dark:text-brand-white/60"
        >
          Solicita una demo de SalesHub. Te mostramos cómo se ve tu operación
          comercial con captación, nurturing, pipeline y reportes en un solo
          lugar. Sin permanencia.
        </m.p>

        <m.div {...anim(0.3)}>
          <Link
            href="/soluciones/lattice"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 text-[1rem] font-semibold text-brand-midnight dark:text-brand-white shadow-lg shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:bg-brand-400 hover:shadow-brand-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            Descubrir el ecosistema Lattice
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

          {/* Cross-link to Lattice */}
          <m.p {...anim(0.5)} className="mt-8">
            <Link
              href="/soluciones/lattice"
              className="text-sm text-brand-accent transition-colors hover:text-brand-accent/80"
            >
              ¿Necesitas también IA para tu operación legal, compliance o
              análisis? Conoce Lattice →
            </Link>
          </m.p>
      </div>
    </section>
    </LazyMotion>
  );
}
