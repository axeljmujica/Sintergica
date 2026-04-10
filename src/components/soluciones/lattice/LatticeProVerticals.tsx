"use client";

import { useState, useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import { Scale, Building2, Truck, Landmark, HeartPulse, Zap } from "lucide-react";

const VERTICALS = [
  {
    id: "legal",
    label: "Legal",
    icon: Scale,
    activeClasses: "border-[#8B5CF6]/20 bg-[#8B5CF6]/10 text-[#8B5CF6]",
    description:
      "Revisa contratos en minutos, detecta cláusulas de riesgo, compara versiones y genera borradores fundamentados en legislación mexicana vigente. El modelo cita el artículo exacto — no inventa.",
    metrics: [
      { value: "−60%", label: "tiempo de revisión contractual" },
      { value: "−70%", label: "en comparación documental" },
    ],
    mockupLabel: "Chat analizando contrato con cláusulas resaltadas",
  },
  {
    id: "gobierno",
    label: "Gobierno",
    icon: Building2,
    activeClasses: "border-[#06B6D4]/20 bg-[#06B6D4]/10 text-[#06B6D4]",
    description:
      "Cumplimiento LGTAIP documentado. Despliegue en territorio nacional. Audit trail inmutable. Lattice es elegible para licitación pública — los modelos globales no lo son.",
    metrics: [
      { value: "−70%", label: "tiempo de detección de anomalías" },
      { value: "+15–30%", label: "mejora en recaudación de ingresos propios" },
    ],
    mockupLabel: "Dashboard de indicadores municipales con KPIs",
  },
  {
    id: "logistica",
    label: "Logística",
    icon: Truck,
    activeClasses: "border-[#F59E0B]/20 bg-[#F59E0B]/10 text-[#F59E0B]",
    description:
      "Clasifica aranceles, genera pedimentos, detecta errores documentales y monitorea cadenas de suministro — con conocimiento de las regulaciones aduaneras de México y LATAM.",
    metrics: [
      { value: "−40%", label: "tiempos de despacho" },
      { value: "−60%", label: "errores documentales" },
    ],
    mockupLabel: "Procesamiento de documentos aduaneros",
  },
  {
    id: "financiero",
    label: "Financiero",
    icon: Landmark,
    activeClasses: "border-[#3B82F6]/20 bg-[#3B82F6]/10 text-[#3B82F6]",
    description:
      "Detección de operaciones atípicas, aceleración de KYC/KYB, cumplimiento de circulares CNBV y análisis de riesgo — sin que los datos salgan de tu infraestructura.",
    metrics: [
      { value: "3×", label: "detección de transacciones atípicas" },
      { value: "−50%", label: "tiempo en procesos KYC" },
    ],
    mockupLabel: "Alertas de transacciones atípicas con score",
  },
  {
    id: "salud",
    label: "Salud",
    icon: HeartPulse,
    activeClasses: "border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981]",
    description:
      "Documentación clínica automatizada, codificación de diagnósticos, asistencia en notas de evolución y cumplimiento COFEPRIS — con trazabilidad completa de acceso a expedientes.",
    metrics: [
      { value: "−35%", label: "errores de documentación clínica" },
      { value: "−25%", label: "ausentismo con gestión predictiva" },
    ],
    mockupLabel: "Nota de evolución asistida con codificación",
  },
  {
    id: "energia",
    label: "Energía",
    icon: Zap,
    activeClasses: "border-[#EAB308]/20 bg-[#EAB308]/10 text-[#EAB308]",
    description:
      "Análisis de contratos de suministro, monitoreo regulatorio CRE, reporteo ESG automatizado y optimización operativa para generadores, distribuidores y comercializadores.",
    metrics: [
      { value: "24/7", label: "monitoreo regulatorio continuo" },
      { value: "Auto", label: "reporteo ESG automatizado" },
    ],
    mockupLabel: "Dashboard de monitoreo regulatorio CRE",
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
        className="relative bg-[#040615] py-24 lg:py-32"
        aria-label="Verticales de Lattice"
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
              Inteligencia que entiende tu industria
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Lattice incluye modelos Seeb — Small Language Models especializados por sector, entrenados en normativa, terminología y procesos reales de cada vertical. No es un modelo genérico intentando ser experto. Es un modelo que ya lo es.
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
                      : "border-white/[0.08] bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </m.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <m.div
              key={activeTab}
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%]"
            >
              {/* Left: text + metrics */}
              <div>
                <p className="text-base leading-relaxed text-white/65">
                  {active.description}
                </p>

                {/* Metrics block */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {active.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl bg-[#006EFA]/[0.06] px-5 py-4"
                    >
                      <span className="block text-[28px] font-bold leading-none text-[#006EFA]">
                        {metric.value}
                      </span>
                      <span className="mt-1.5 block text-sm text-white/60">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: mockup placeholder */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#111118] shadow-[0_16px_32px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/20">
                  <ActiveIcon className="h-12 w-12" />
                  <span className="max-w-[220px] text-center text-sm font-medium">
                    {active.mockupLabel}
                  </span>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </section>
    </LazyMotion>
  );
}
