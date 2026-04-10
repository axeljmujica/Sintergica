"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { CheckCircle } from "lucide-react";

const BULLETS = [
  "45 minutos, sin costo, sin permanencia",
  "Demo con datos de tu industria",
  "Diagnóstico de automatización incluido",
];

export function LatticeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.55, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        id="contacto"
        className="relative overflow-hidden py-28 px-6 lg:py-36"
        aria-label="CTA final"
      >
        {/* Gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#040615] via-[#0d101e] to-[#040615]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#006EFA]/[0.08] blur-[140px]" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Title */}
          <m.h2
            {...anim(0)}
            className="font-gilroy text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Pasa de la conversación a la ejecución.
          </m.h2>

          <m.p
            {...anim(0.1)}
            className="mt-5 text-xl text-white/65"
          >
            Agenda un diagnóstico inteligente y descubre cómo integrar la IA en los procesos clave de tu empresa hoy mismo.
          </m.p>

          {/* CTA buttons */}
          <m.div {...anim(0.2)} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center rounded-xl bg-[#006EFA] px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0058CC]"
            >
              Agenda tu Diagnóstico Inteligente
            </a>
            <a
              href="mailto:hola@sintergica.ai"
              className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] px-8 py-4 text-base font-semibold text-white/80 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
            >
              Escríbenos →
            </a>
          </m.div>

          {/* Trust bullets */}
          <m.ul {...anim(0.35)} className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400/60" />
                {bullet}
              </li>
            ))}
          </m.ul>
        </div>
      </section>
    </LazyMotion>
  );
}
