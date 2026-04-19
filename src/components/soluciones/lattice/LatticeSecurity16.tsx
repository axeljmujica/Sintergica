"use client";

import { useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  useReducedMotion,
} from "motion/react";
import { Lock, FileSearch, UserCheck, ShieldCheck, Eye } from "lucide-react";

const LAYERS = [
  {
    icon: Lock,
    title: "Sandbox WASM",
    description:
      "Todo el código de herramientas corre en un entorno aislado. Dos mecanismos independientes de interrupción aseguran que ninguna ejecución tome control del sistema.",
  },
  {
    icon: FileSearch,
    title: "Merkle Audit Trail",
    description:
      "Cada acción queda registrada en una cadena de hashes inmutable. Trazabilidad completa y documentada para cumplir con la LGTAIP e ISO 27001.",
  },
  {
    icon: UserCheck,
    title: "Mínimo Privilegio (RBAC)",
    description:
      "El agente de RRHH no puede ver los archivos del agente Legal. Permisos granulares y operaciones confinadas al workspace autorizado.",
  },
  {
    icon: ShieldCheck,
    title: "Firma Criptográfica",
    description:
      "Los manifiestos de los agentes están firmados mediante Ed25519. El sistema verifica la identidad antes de cualquier ejecución en segundo plano.",
  },
  {
    icon: Eye,
    title: "Escudo Anti-Inyección",
    description:
      "Análisis en tiempo real para bloquear intentos de manipulación maliciosa de prompts, previniendo fugas de datos y comportamientos erráticos.",
  },
];

const AUDIT_LOGS = [
  "[2026-03-10 09:14:23] Ana revisó contrato-2025-0847.pdf — Resultado: 3 alertas de riesgo — Aprobado por: Carlos M. (Dir. Jurídico)",
  "[2026-03-10 09:15:01] Sofía generó reporte PLD mensual — Fuentes: 147 transacciones analizadas — Status: pendiente validación",
  "[2026-03-10 09:16:44] Marco actualizó dashboard KPI legal — Periodo: Feb 2026 — Cambios: 12 métricas recalculadas",
];

export function LatticeSecurity16() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-slate-50 py-24 lg:py-32"
        aria-label="Seguridad de 16 capas"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-[800px]"
          >
            {/* Badge */}
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
              Seguridad de 16 Capas
            </span>

            <h2 className="mt-5 font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              La seguridad no es una configuración.{" "}
              <span className="block">Es la arquitectura.</span>
            </h2>

            <p className="mt-5 max-w-[620px] text-lg text-slate-600">
              Un agente autónomo en Lattice simplemente no puede hacer lo que no está autorizado.
              Construido en Rust con aislamiento de memoria desde el día uno.
            </p>
          </m.div>

          {/* 5 Feature Cards */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {LAYERS.map(({ icon: Icon, title, description }, i) => (
              <m.div
                key={title}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#006EFA]/30 hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#006EFA]/8 text-[#006EFA]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-proxima text-[15px] font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">
                  {description}
                </p>
              </m.div>
            ))}
          </div>

          {/* Audit Trail */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-6 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Audit Trail — Ejemplo
              </span>
            </div>

            <div className="px-6 py-5 font-mono">
              {AUDIT_LOGS.map((log, i) => {
                const match = log.match(/^(\[[\d\- :]+\])\s(.+)$/);
                return (
                  <m.p
                    key={i}
                    initial={shouldReduce ? false : { opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.1 }}
                    className="py-1.5 text-[13px] leading-relaxed text-slate-700"
                  >
                    {match ? (
                      <>
                        <span className="text-[#006EFA] font-medium">{match[1]}</span>
                        {" "}
                        <span>{match[2]}</span>
                      </>
                    ) : (
                      log
                    )}
                  </m.p>
                );
              })}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
