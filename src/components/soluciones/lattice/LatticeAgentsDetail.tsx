"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";

export function LatticeAgentsDetail() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-[#040615] py-24 lg:py-32"
        aria-label="Testimonio de cliente"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          {/* Decorative opening quote */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 flex justify-center"
            aria-hidden="true"
          >
            <svg className="h-12 w-12 text-[#006EFA]/30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
          </m.div>

          {/* Quote */}
          <m.blockquote
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-mulish text-xl leading-relaxed text-white/80 md:text-2xl lg:text-[26px] lg:leading-[1.6]">
              &ldquo;Antes dedicábamos 15 horas a la semana a la revisión de contratos. Con Lattice, ese proceso toma 2 horas — y con mejor precisión. No es solo velocidad: es certeza regulatoria.&rdquo;
            </p>
          </m.blockquote>

          {/* Attribution */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            {/* Client logo placeholder */}
            <div className="flex h-10 w-32 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
              <span className="text-xs font-medium text-white/30">Logo del cliente</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/70">Director Jurídico</p>
              <p className="text-sm text-white/40">Despacho corporativo — Ciudad de México</p>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
