"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Check, X } from "lucide-react";

const ROWS: { label: string; lattice: string; generic: string }[] = [
  {
    label: "Privacidad de datos",
    lattice: "Cero retención — nunca salen de tu infraestructura",
    generic: "Almacenados en EE.UU. o Europa",
  },
  {
    label: "Contexto regulatorio",
    lattice: "Nativo mexicano y LATAM (SAT, CNBV, SCJN)",
    generic: "Genérico — alucina reglas foráneas",
  },
  {
    label: "Agentes autónomos",
    lattice: "Sí — 16 capas de seguridad, sandbox WASM",
    generic: "Limitado o inexistente",
  },
  {
    label: "Modelos especializados",
    lattice: "Modelos verticales (Legal, Gobierno, Financiero...)",
    generic: "Modelo único genérico",
  },
  {
    label: "Elegibilidad Gobierno MX",
    lattice: "CFDI 4.0 + RFC + LGTAIP documentado",
    generic: "No elegible",
  },
  {
    label: "Despliegue on-premise",
    lattice: "Disponible para todos los planes Enterprise",
    generic: "Solo nube pública",
  },
  {
    label: "Integración de sistemas",
    lattice: "Lattice Flows — 100+ conectores nativos",
    generic: "Requiere herramientas de terceros",
  },
  {
    label: "Soporte y SLA",
    lattice: "En español, local, con SLAs empresariales",
    generic: "Soporte estandarizado, foráneo",
  },
];

export function LatticeComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-[#040615] py-24 lg:py-32"
        aria-label="Comparativa Lattice vs. soluciones genéricas"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[640px] text-center"
          >
            <h2 className="font-gilroy text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Lattice vs. soluciones genéricas
            </h2>
            <p className="mt-5 text-lg text-white/65">
              La única plataforma diseñada para las exigencias de privacidad, seguridad y cumplimiento normativo en México y LATAM.
            </p>
          </m.div>

          {/* Desktop Table */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-14 hidden max-w-[1080px] lg:block"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/[0.03]">
                    <th className="w-[30%] px-6 py-5 text-sm font-semibold text-white/70">
                      Requisito de auditoría
                    </th>
                    <th className="w-[35%] px-6 py-5 text-sm font-semibold text-[#006EFA]">
                      Lattice
                    </th>
                    <th className="w-[35%] px-6 py-5 text-sm font-semibold text-white/50">
                      IA Genérica
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white/80">
                        {row.label}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span className="text-sm text-white/75">{row.lattice}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2.5">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                          <span className="text-sm text-white/50">{row.generic}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </m.div>

          {/* Mobile Card Stack */}
          <div className="mt-10 flex flex-col gap-4 lg:hidden">
            {ROWS.map((row, i) => (
              <m.div
                key={row.label}
                initial={shouldReduce ? false : { opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="rounded-xl border border-white/[0.06] bg-[#111118] p-5"
              >
                <p className="mb-3 text-sm font-semibold text-white">{row.label}</p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-sm text-white/75">{row.lattice}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                    <span className="text-sm text-white/50">{row.generic}</span>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
