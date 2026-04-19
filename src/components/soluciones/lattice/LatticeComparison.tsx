"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Check, X, Minus } from "lucide-react";
import { SiAnthropic, SiGooglegemini, SiMistralai, SiPerplexity } from "@icons-pack/react-simple-icons";

/* ── Inline OpenAI SVG (not in simple-icons v13) ───────────────────── */
function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.1 14.03a4.5 4.5 0 0 1-1.76-6.134zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.724 2.727a4.5 4.5 0 0 1-.676 8.123v-5.678a.79.79 0 0 0-.396-.635zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.717-2.725a4.5 4.5 0 0 1 6.675 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" />
    </svg>
  );
}

type RowResult = "yes" | "no" | "partial";

const ROWS: {
  label: string;
  lattice: string;
  generic: string;
  genericResult: RowResult;
}[] = [
  {
    label: "Privacidad de Datos",
    lattice: "Cero retención, nunca salen de tu infraestructura",
    generic: "Almacenados en EE.UU. o Europa",
    genericResult: "no",
  },
  {
    label: "Contexto Regulatorio",
    lattice: "Nativo mexicano y LATAM (SAT, CNBV, SCJN)",
    generic: "Genérico, alucina reglas foráneas",
    genericResult: "no",
  },
  {
    label: "Agentes Autónomos",
    lattice: "Sí (16 capas de seguridad, sandbox WASM)",
    generic: "Limitado o inexistente",
    genericResult: "no",
  },
  {
    label: "Especialización de Modelos",
    lattice: "Modelos verticales (Legal, Gob, Financiero)",
    generic: "Modelo único genérico",
    genericResult: "no",
  },
  {
    label: "Elegibilidad Gobierno MX",
    lattice: "Sí — CFDI 4.0, RFC, LGTAIP documentado",
    generic: "No",
    genericResult: "no",
  },
  {
    label: "Despliegue On-Premise",
    lattice: "Disponible para todos los planes Enterprise",
    generic: "Solo nube pública",
    genericResult: "no",
  },
  {
    label: "Integración de Sistemas",
    lattice: "Lattice Flows (100+ conectores nativos)",
    generic: "Requiere herramientas de terceros (Zapier, etc.)",
    genericResult: "partial",
  },
  {
    label: "Soporte y SLA",
    lattice: "En español, local y con SLAs empresariales",
    generic: "Soporte estandarizado, foráneo",
    genericResult: "no",
  },
];

function GenericCell({ text, result }: { text: string; result: RowResult }) {
  if (result === "partial") {
    return (
      <div className="flex items-start gap-2.5">
        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        <span className="text-sm text-slate-500">{text}</span>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2.5">
      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
      <span className="text-sm text-slate-500">{text}</span>
    </div>
  );
}

export function LatticeComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-white py-24 lg:py-32"
        aria-label="Comparativa Lattice vs. soluciones del mercado"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[680px] text-center"
          >
            <h2 className="font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Lattice vs. soluciones del mercado
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Descubre por qué Lattice es la única plataforma diseñada específicamente para las
              exigencias de privacidad, seguridad y cumplimiento normativo en México y LATAM.
            </p>
          </m.div>

          {/* Desktop Table */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-14 hidden max-w-[1100px] lg:block"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {/* Característica */}
                    <th className="w-[28%] px-6 py-5 text-sm font-semibold text-slate-500">
                      Característica
                    </th>

                    {/* Lattice column */}
                    <th className="w-[36%] px-6 py-5">
                      <div className="flex items-center gap-2.5">
                        <Image
                          src="/logo/lattice-chat.svg"
                          alt="Lattice"
                          width={32}
                          height={32}
                          className="h-8 w-8"
                        />
                        <span className="text-base font-bold text-[#006EFA]">Lattice</span>
                      </div>
                      {/* Blue underline accent */}
                      <div className="mt-3 h-[2px] w-full max-w-[160px] rounded-full bg-[#006EFA]" />
                    </th>

                    {/* Competitors column */}
                    <th className="w-[36%] px-6 py-5">
                      <div className="flex items-center gap-3 text-slate-400">
                        <OpenAIIcon className="h-5 w-5" />
                        <SiAnthropic className="h-5 w-5" />
                        <SiGooglegemini className="h-5 w-5" />
                        <SiMistralai className="h-5 w-5" />
                        <SiPerplexity className="h-5 w-5" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-700">
                        {row.label}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span className="text-sm text-slate-700">{row.lattice}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <GenericCell text={row.generic} result={row.genericResult} />
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
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="mb-3 text-sm font-semibold text-slate-800">{row.label}</p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-sm text-slate-700">{row.lattice}</span>
                  </div>
                  <GenericCell text={row.generic} result={row.genericResult} />
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
