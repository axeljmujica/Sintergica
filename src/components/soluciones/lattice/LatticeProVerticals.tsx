"use client";

import { useState, useRef } from "react";
import type { ComponentType } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Scale, Building2, Truck, Landmark, HeartPulse, Zap } from "lucide-react";
import {
  LegalVerticalMockup,
  GobiernoVerticalMockup,
  LogisticaVerticalMockup,
  FinancieroVerticalMockup,
  SaludVerticalMockup,
  EnergiaVerticalMockup,
} from "./ui/VerticalMockups";

type Vertical = {
  id: string;
  label: string;
  icon: typeof Scale;
  activeClasses: string;
  tint: string;
  accent: string;
  ring: string;
  description: string;
  metrics: Array<{ value: string; label: string }>;
  mockupLabel: string;
  Mockup?: ComponentType;
};

const VERTICALS: Vertical[] = [
  {
    id: "legal",
    label: "Legal",
    icon: Scale,
    activeClasses: "border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#8B5CF6]",
    tint: "from-[#F5F3FF] to-[#FAF5FF]",
    accent: "text-[#8B5CF6]",
    ring: "ring-[#8B5CF6]/20",
    description:
      "Revisa contratos en minutos, detecta cláusulas de riesgo, compara versiones y genera borradores fundamentados en legislación mexicana vigente. El modelo cita el artículo exacto — no inventa.",
    metrics: [
      { value: "−60%", label: "tiempo de revisión contractual" },
      { value: "−70%", label: "en comparación documental" },
    ],
    mockupLabel: "Chat analizando contrato con cláusulas resaltadas",
    Mockup: LegalVerticalMockup,
  },
  {
    id: "gobierno",
    label: "Gobierno",
    icon: Building2,
    activeClasses: "border-[#06B6D4]/40 bg-[#06B6D4]/10 text-[#06B6D4]",
    tint: "from-[#ECFEFF] to-[#F0F9FF]",
    accent: "text-[#06B6D4]",
    ring: "ring-[#06B6D4]/20",
    description:
      "Cumplimiento LGTAIP documentado. Despliegue en territorio nacional. Audit trail inmutable. Lattice es elegible para licitación pública — los modelos globales no lo son.",
    metrics: [
      { value: "−70%", label: "tiempo de detección de anomalías" },
      { value: "+15–30%", label: "mejora en recaudación de ingresos propios" },
    ],
    mockupLabel: "Dashboard de indicadores municipales con KPIs",
    Mockup: GobiernoVerticalMockup,
  },
  {
    id: "logistica",
    label: "Logística",
    icon: Truck,
    activeClasses: "border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#F59E0B]",
    tint: "from-[#FFFBEB] to-[#FEF3C7]",
    accent: "text-[#F59E0B]",
    ring: "ring-[#F59E0B]/20",
    description:
      "Clasifica aranceles, genera pedimentos, detecta errores documentales y monitorea cadenas de suministro — con conocimiento de las regulaciones aduaneras de México y LATAM.",
    metrics: [
      { value: "−40%", label: "tiempos de despacho" },
      { value: "−60%", label: "errores documentales" },
    ],
    mockupLabel: "Procesamiento de documentos aduaneros",
    Mockup: LogisticaVerticalMockup,
  },
  {
    id: "financiero",
    label: "Financiero",
    icon: Landmark,
    activeClasses: "border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#3B82F6]",
    tint: "from-[#EEF4FF] to-[#F0F9FF]",
    accent: "text-[#3B82F6]",
    ring: "ring-[#3B82F6]/20",
    description:
      "Detección de operaciones atípicas, aceleración de KYC/KYB, cumplimiento de circulares CNBV y análisis de riesgo — sin que los datos salgan de tu infraestructura.",
    metrics: [
      { value: "3×", label: "detección de transacciones atípicas" },
      { value: "−50%", label: "tiempo en procesos KYC" },
    ],
    mockupLabel: "Alertas de transacciones atípicas con score",
    Mockup: FinancieroVerticalMockup,
  },
  {
    id: "salud",
    label: "Salud",
    icon: HeartPulse,
    activeClasses: "border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981]",
    tint: "from-[#ECFDF5] to-[#F0FDF4]",
    accent: "text-[#10B981]",
    ring: "ring-[#10B981]/20",
    description:
      "Documentación clínica automatizada, codificación de diagnósticos, asistencia en notas de evolución y cumplimiento COFEPRIS — con trazabilidad completa de acceso a expedientes.",
    metrics: [
      { value: "−35%", label: "errores de documentación clínica" },
      { value: "−25%", label: "ausentismo con gestión predictiva" },
    ],
    mockupLabel: "Nota de evolución asistida con codificación",
    Mockup: SaludVerticalMockup,
  },
  {
    id: "energia",
    label: "Energía",
    icon: Zap,
    activeClasses: "border-[#EAB308]/40 bg-[#EAB308]/10 text-[#EAB308]",
    tint: "from-[#FEFCE8] to-[#FEF9C3]",
    accent: "text-[#EAB308]",
    ring: "ring-[#EAB308]/20",
    description:
      "Análisis de contratos de suministro, monitoreo regulatorio CRE, reporteo ESG automatizado y optimización operativa para generadores, distribuidores y comercializadores.",
    metrics: [
      { value: "24/7", label: "monitoreo regulatorio continuo" },
      { value: "Auto", label: "reporteo ESG automatizado" },
    ],
    mockupLabel: "Dashboard de monitoreo regulatorio CRE",
    Mockup: EnergiaVerticalMockup,
  },
];

export function LatticeProVerticals() {
  const [activeTab, setActiveTab] = useState("legal");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const active = VERTICALS.find((v) => v.id === activeTab) || VERTICALS[0];
  const ActiveIcon = active.icon;

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-[#020c1b] py-24 lg:py-32"
        aria-label="Verticales de Lattice"
      >
        {/* Subtle blue glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#006EFA]/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-1/3 h-[400px] w-[400px] rounded-full bg-[#006EFA]/[0.05] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[680px] text-center"
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
              Verticales
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Inteligencia que entiende tu industria
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Lattice incluye modelos Seeb — Small Language Models especializados por sector,
              entrenados en normativa, terminología y procesos reales de cada vertical. No es un
              modelo genérico intentando ser experto. Es un modelo que ya lo es.
            </p>
          </m.div>

          {/* Tab bar / Pills */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3 px-2"
          >
            {VERTICALS.map(({ id, label, activeClasses }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`relative inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                    isActive
                      ? activeClasses
                      : "border-white/20 bg-white/10 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </m.div>

          {/* Tab content */}
          <div
            key={activeTab}
            className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] motion-safe:animate-[fadeIn_0.3s_ease-out]"
          >
              {/* Left: text + metrics */}
              <div>
                <p className="text-base leading-relaxed text-white/75">
                  {active.description}
                </p>

                {/* Metrics block */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {active.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm"
                    >
                      <span className={`block text-[28px] font-bold leading-none ${active.accent}`}>
                        {metric.value}
                      </span>
                      <span className="mt-1.5 block text-sm text-white/60">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: mockup */}
              {active.Mockup ? (
                <div
                  className={`relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br ${active.tint} p-4 ring-1 ${active.ring}`}
                >
                  <active.Mockup />
                </div>
              ) : (
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${active.tint} shadow-[0_20px_40px_-16px_rgba(15,23,42,0.15)] ring-1 ${active.ring}`}
                >
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full text-slate-900/[0.04]"
                  >
                    <defs>
                      <pattern
                        id={`verticals-grid-${active.id}`}
                        width="32"
                        height="32"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 32 0 L 0 0 0 32"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#verticals-grid-${active.id})`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
                      <ActiveIcon className={`h-7 w-7 ${active.accent}`} />
                    </div>
                    <span className="max-w-[240px] text-center text-sm font-medium text-slate-500">
                      {active.mockupLabel}
                    </span>
                  </div>
                </div>
              )}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
