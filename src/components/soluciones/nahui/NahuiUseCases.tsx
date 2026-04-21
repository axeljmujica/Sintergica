"use client";

import { useState, useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Truck, Warehouse, ShoppingCart, Boxes, PackageOpen, Factory } from "lucide-react";

type UseCase = {
  id: string;
  label: string;
  icon: typeof Truck;
  activeClasses: string;
  tint: string;
  accent: string;
  ring: string;
  description: string;
  metrics: Array<{ value: string; label: string }>;
  mockupLabel: string;
};

const USE_CASES: UseCase[] = [
  {
    id: "ultima-milla",
    label: "Última milla",
    icon: Truck,
    activeClasses: "border-[#006EFA]/40 bg-[#006EFA]/10 text-[#006EFA]",
    tint: "from-[#EEF4FF] to-[#F0F9FF]",
    accent: "text-[#006EFA]",
    ring: "ring-[#006EFA]/20",
    description:
      "Optimiza la etapa más costosa del viaje. Ventanas de entrega por cliente, reoptimización en vivo y notificaciones automáticas al destinatario por WhatsApp. El conductor opera desde una app sin fricción — aunque pierda señal.",
    metrics: [
      { value: "−40%", label: "tiempos de despacho" },
      { value: "+22%", label: "entregas al primer intento" },
    ],
    mockupLabel: "Panel de última milla con ETAs y estado por parada",
  },
  {
    id: "3pl",
    label: "3PL",
    icon: Warehouse,
    activeClasses: "border-[#9333EA]/40 bg-[#9333EA]/10 text-[#9333EA]",
    tint: "from-[#F5F0FF] to-[#FAF5FF]",
    accent: "text-[#9333EA]",
    ring: "ring-[#9333EA]/20",
    description:
      "Multi-cliente, multi-tarifa, multi-SLA. Cobra por kilómetro, por parada, por peso o por nivel de servicio. Portal de visibilidad para cada cliente con acceso solo a sus operaciones y evidencias.",
    metrics: [
      { value: "−35%", label: "tiempo en facturación de servicios" },
      { value: "100%", label: "visibilidad auditada por cliente" },
    ],
    mockupLabel: "Portal 3PL con vista segmentada por cliente",
  },
  {
    id: "retail",
    label: "Retail",
    icon: ShoppingCart,
    activeClasses: "border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#F59E0B]",
    tint: "from-[#FFFBEB] to-[#FEF3C7]",
    accent: "text-[#F59E0B]",
    ring: "ring-[#F59E0B]/20",
    description:
      "Reabasto a tiendas con ventanas críticas de recepción, manejo de devoluciones en el mismo viaje y visibilidad por tienda y por SKU. Integración nativa con tu ERP y tu ejecución en piso.",
    metrics: [
      { value: "−60%", label: "errores de recepción en tienda" },
      { value: "+18%", label: "nivel de servicio (OTIF)" },
    ],
    mockupLabel: "Dashboard de reabasto con OTIF por tienda",
  },
  {
    id: "distribucion",
    label: "Distribución",
    icon: Boxes,
    activeClasses: "border-[#0EA5E9]/40 bg-[#0EA5E9]/10 text-[#0EA5E9]",
    tint: "from-[#ECFEFF] to-[#F0F9FF]",
    accent: "text-[#0EA5E9]",
    ring: "ring-[#0EA5E9]/20",
    description:
      "Distribuidoras mayoristas con miles de puntos de venta, rutas fijas y cobranza en ruta. Nahui maneja preventa, venta en ruta, devoluciones, mermas y liquidación de efectivo con conciliación automática.",
    metrics: [
      { value: "−50%", label: "tiempo de liquidación de ruta" },
      { value: "3×", label: "velocidad de conciliación" },
    ],
    mockupLabel: "Ruta de distribución con preventa y cobranza",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: PackageOpen,
    activeClasses: "border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981]",
    tint: "from-[#ECFDF5] to-[#F0FDF4]",
    accent: "text-[#10B981]",
    ring: "ring-[#10B981]/20",
    description:
      "Desde el checkout hasta el tracking público. Conecta Shopify, VTEX o Mercado Libre, despacha con flota propia o paqueterías, y dale a tu cliente final un rastreo con tu marca — no con la del cargador.",
    metrics: [
      { value: "−45%", label: "consultas de '¿dónde está mi pedido?'" },
      { value: "+4.6 ⭐", label: "NPS de entrega promedio" },
    ],
    mockupLabel: "Experiencia de tracking white-label",
  },
  {
    id: "manufactura",
    label: "Manufactura",
    icon: Factory,
    activeClasses: "border-[#EAB308]/40 bg-[#EAB308]/10 text-[#EAB308]",
    tint: "from-[#FEFCE8] to-[#FEF9C3]",
    accent: "text-[#EAB308]",
    ring: "ring-[#EAB308]/20",
    description:
      "Logística inbound y outbound con ventanas de planta, flota dedicada, patios y citas de andén. Visibilidad desde el proveedor hasta el cliente, con alertas tempranas de retraso y coordinación con el MRP.",
    metrics: [
      { value: "−30%", label: "tiempos en patio" },
      { value: "−25%", label: "paros por falta de insumo" },
    ],
    mockupLabel: "Gestión de citas de andén y patios",
  },
];

export function NahuiUseCases() {
  const [activeTab, setActiveTab] = useState("ultima-milla");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const active = USE_CASES.find((v) => v.id === activeTab) || USE_CASES[0];
  const ActiveIcon = active.icon;

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-[#020c1b] py-24 lg:py-32"
        aria-label="Casos de uso de Nahui"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#006EFA]/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-1/3 h-[400px] w-[400px] rounded-full bg-[#006EFA]/[0.05] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[680px] text-center"
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
              Industrias
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Una plataforma, distintas industrias
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Nahui se configura a la medida del negocio que ya tienes. Flota propia,
              tercerizada o mixta. Un cliente o cien. Rutas fijas o dinámicas. Elige tu
              industria y ve cómo se comporta la plataforma.
            </p>
          </m.div>

          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3 px-2"
          >
            {USE_CASES.map(({ id, label, activeClasses }) => {
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

          <div
            key={activeTab}
            className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] motion-safe:animate-[fadeIn_0.3s_ease-out]"
          >
            <div>
              <p className="text-base leading-relaxed text-white/75">
                {active.description}
              </p>

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

            <div
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${active.tint} shadow-[0_20px_40px_-16px_rgba(15,23,42,0.15)] ring-1 ${active.ring}`}
            >
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full text-slate-900/[0.04]"
              >
                <defs>
                  <pattern
                    id={`usecases-grid-${active.id}`}
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
                <rect width="100%" height="100%" fill={`url(#usecases-grid-${active.id})`} />
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
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
