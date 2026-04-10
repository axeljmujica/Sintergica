"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Zap, Workflow, Shield } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    title: "Productividad",
    description:
      "Respuestas instantáneas con contexto de tu organización. Genera reportes, analiza contratos y consulta bases de conocimiento — todo fundamentado en tus documentos internos.",
    href: "#capacidades",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Despliega agentes que trabajan solos y flujos sin código que conectan tus sistemas. De la tarea repetitiva al proceso autónomo.",
    href: "#capacidades",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Despliegue privado en AWS Querétaro, nube privada o on-premise. Arquitectura zero-trust con 16 capas de seguridad. Tus datos nunca salen de tu infraestructura.",
    href: "#seguridad",
  },
];

export function LatticeArchitecture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-[#040615] py-24 lg:py-32"
        aria-label="Tres pilares de Lattice"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[680px] text-center"
          >
            <h2 className="font-gilroy text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Menos fricción. Más impacto.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Lattice elimina la distancia entre tu equipo y la IA — con el contexto regulatorio que los modelos globales no tienen, la seguridad que el sector regulado exige, y la flexibilidad para escalar desde un piloto hasta toda la organización.
            </p>
          </m.div>

          {/* Central image placeholder */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-14 mb-16 max-w-[960px] overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#111118] to-[#0d101e] shadow-[0_24px_48px_rgba(0,106,250,0.08)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-white/20">
                  <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">Imagen del equipo trabajando con Lattice</span>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/[0.06] rounded-2xl pointer-events-none" />
            </div>
          </m.div>

          {/* Three pillars grid */}
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-8 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description, href }, i) => (
              <m.a
                key={title}
                href={href}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-200 hover:border-white/[0.12]"
              >
                <Icon className="mb-5 h-6 w-6 text-[#006EFA]" />
                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  {description}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-[#006EFA] transition-all duration-200 group-hover:underline">
                  Conocer más →
                </span>
              </m.a>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
