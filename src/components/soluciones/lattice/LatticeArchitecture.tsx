"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Zap, Workflow, Shield, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    title: "Productividad",
    description:
      "Respuestas instantáneas con contexto de tu organización. Genera reportes, analiza contratos y consulta bases de conocimiento — todo fundamentado en tus documentos internos.",
    href: "#capacidades",
    accent: "text-[#006EFA]",
    bg: "bg-[#006EFA]/8",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Despliega agentes que trabajan solos y flujos sin código que conectan tus sistemas. De la tarea repetitiva al proceso autónomo.",
    href: "#capacidades",
    accent: "text-[#9333EA]",
    bg: "bg-[#9333EA]/8",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Despliegue privado en AWS Querétaro, nube privada o on-premise. Arquitectura zero-trust con 16 capas de seguridad. Tus datos nunca salen de tu infraestructura.",
    href: "#seguridad",
    accent: "text-[#16A34A]",
    bg: "bg-[#16A34A]/8",
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
        className="relative bg-white py-24 lg:py-32"
        aria-label="Tres pilares de Lattice"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <h2 className="font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Menos fricción. Más impacto.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Lattice elimina la distancia entre tu equipo y la IA — con el contexto regulatorio
              que los modelos globales no tienen, la seguridad que el sector regulado exige, y la
              flexibilidad para escalar desde un piloto hasta toda la organización.
            </p>
          </m.div>

          {/* Central visual — gradient backdrop with mockup placeholder */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-14 mb-20 max-w-[980px]"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[24px] shadow-[0_24px_56px_-12px_rgba(0,106,250,0.15)] ring-1 ring-slate-200/80">
              <iframe
                src="https://www.youtube.com/embed/Xy0NsrMnP4A?rel=0&modestbranding=1"
                title="Lattice — Equipos trabajando con IA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </m.div>

          {/* Three pillars grid */}
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description, href, accent, bg }, i) => (
              <m.a
                key={title}
                href={href}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${bg} ${accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-proxima text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {description}
                </p>
                <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${accent} transition-all duration-200 group-hover:gap-2.5`}>
                  Conocer más <ArrowRight className="h-4 w-4" />
                </span>
              </m.a>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
