"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Cloud, Server, HardDrive, Layers, type LucideIcon } from "lucide-react";
import Image from "next/image";

type Mode = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
};

const MODES: Mode[] = [
  {
    icon: Cloud,
    title: "SaaS — Nube compartida gestionada",
    description:
      "Implementación rápida en infraestructura Sintérgica (AWS Querétaro). Todo el stack operado por nuestro equipo. Ideal para arrancar en semanas.",
    highlight: "Time-to-value más rápido",
  },
  {
    icon: Server,
    title: "VPC — Nube privada dedicada",
    description:
      "Tu propio ambiente aislado en la nube. Misma agilidad que SaaS, con control total de red, accesos y almacenamiento. Ideal para áreas reguladas.",
    highlight: "Aislamiento total",
  },
  {
    icon: HardDrive,
    title: "On-Premise — En servidores del cliente",
    description:
      "Instalación física en tu data center. Tus datos y tus modelos no salen. Ideal para gobierno, salud, defensa y operaciones con requisitos soberanos.",
    highlight: "Datos 100% soberanos",
  },
  {
    icon: Layers,
    title: "Híbrido — On-prem + IA en nube",
    description:
      "Datos operativos on-premise, capacidades de IA ejecutadas en nube privada. Lo mejor de cada mundo cuando el cómputo debe escalar pero los datos deben quedarse.",
    highlight: "Flexibilidad sin compromisos",
  },
];

export function NahuiSecurity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-black py-24 lg:py-32"
        aria-label="Modalidades de despliegue y precios"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/images/2152031809.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#006EFA]/[0.06] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <span className="inline-block rounded-full border border-[#006EFA]/30 bg-[#006EFA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#5DB0F5]">
              Despliegue y precios
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Tus datos viven donde tú decidas
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Cuatro modalidades de despliegue para que Nahui encaje con tu gobierno de
              datos, tus auditores y tu realidad de infraestructura — sin obligarte a
              mover nada que no quieras mover.
            </p>
          </m.div>

          <div className="mx-auto mt-14 grid max-w-[1160px] grid-cols-1 gap-5 md:grid-cols-2">
            {MODES.map(({ icon: Icon, title, description, highlight }, i) => (
              <m.div
                key={title}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#006EFA]/30 hover:shadow-[0_8px_32px_rgba(0,106,250,0.12)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#006EFA]/15 text-[#5DB0F5] ring-1 ring-[#006EFA]/25">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-proxima text-[20px] font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                  {description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#006EFA]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5DB0F5] ring-1 ring-[#006EFA]/20">
                  {highlight}
                </div>
              </m.div>
            ))}
          </div>

          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.6 }}
            className="mx-auto mt-12 max-w-[1160px] rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-proxima text-[20px] font-semibold text-white">
                  Precios de implementación — independientes de la licencia
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                  La licencia de Nahui y el proyecto de implementación se cotizan por
                  separado. Plan Starter operativo en 2–3 semanas; planes avanzados con
                  equipo dedicado y timeline personalizado. Agenda un diagnóstico de 45
                  minutos y te compartimos la cotización y el plan de arranque.
                </p>
              </div>
              <a
                href="/diagnostico"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#006EFA] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0058CC] hover:shadow-lg hover:shadow-[#006EFA]/25"
              >
                Cotizar mi despliegue →
              </a>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
