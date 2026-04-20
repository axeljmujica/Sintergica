"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        ref={ref}
        className="relative overflow-hidden bg-black py-28 sm:py-36"
        aria-label="CTA Nahui"
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
              Siguiente paso
            </span>
          </m.div>

          <m.h2
            {...anim(0.1)}
            className="font-proxima text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            Tu operación logística merece visibilidad total.
          </m.h2>

          <m.p
            {...anim(0.2)}
            className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-white/80 sm:text-lg"
          >
            Solicita una demo de Nahui. Te mostramos cómo funciona con un caso de
            uso de tu industria. Operativo en semanas, sin permanencia.
          </m.p>

          <m.div {...anim(0.3)} className="mt-10">
            <Link
              href="/soluciones/lattice"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-accent px-10 text-[1rem] font-bold text-white shadow-xl shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/40"
            >
              Descubrir Lattice
              <ArrowRight className="h-4 w-4" />
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

          <m.p {...anim(0.5)} className="mt-8">
            <Link
              href="/soluciones/lattice"
              className="text-sm text-brand-accent-light transition-colors hover:text-white"
            >
              ¿Ya usas Lattice? Nahui se integra directamente.
            </Link>
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
}
