"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Truck,
  PackageCheck,
  Gauge,
  ClipboardList,
  Plug,
  Brain,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  tint: string;
  ring: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: Truck,
    title: "Gestión de flotas",
    description:
      "Seguimiento GPS en vivo para cada vehículo. Asignación inteligente de unidades. Optimización de rutas que considera casetas, zonas de riesgo y ventanas de entrega reales.",
    accent: "text-[#006EFA]",
    tint: "bg-[#006EFA]/10",
    ring: "ring-[#006EFA]/20",
  },
  {
    icon: PackageCheck,
    title: "Trazabilidad de envíos",
    description:
      "Visibilidad del ciclo completo, desde la orden hasta la prueba de entrega digital — con foto, firma, geolocalización y timestamp. Cada paquete tiene evidencia.",
    accent: "text-[#9333EA]",
    tint: "bg-[#9333EA]/10",
    ring: "ring-[#9333EA]/20",
  },
  {
    icon: Gauge,
    title: "Control operativo",
    description:
      "Dashboards de rendimiento, alertas de desviación, métricas de cumplimiento y SLAs. El sistema detecta problemas antes de que escalen — no espera a que alguien los reporte.",
    accent: "text-[#16A34A]",
    tint: "bg-[#16A34A]/10",
    ring: "ring-[#16A34A]/20",
  },
  {
    icon: ClipboardList,
    title: "Despacho y planeación",
    description:
      "Planeación de rutas, despacho automático, gestión de capacidad y ventanas de entrega. Operación optimizada desde el primer kilómetro.",
    accent: "text-[#F59E0B]",
    tint: "bg-[#F59E0B]/10",
    ring: "ring-[#F59E0B]/20",
  },
  {
    icon: Plug,
    title: "Integración con tu stack",
    description:
      "Conectores nativos a ERP, sistemas de almacén (WMS), plataformas de e-commerce y facturación. Nahui se adapta a tu infraestructura, no al revés.",
    accent: "text-[#0EA5E9]",
    tint: "bg-[#0EA5E9]/10",
    ring: "ring-[#0EA5E9]/20",
  },
  {
    icon: Brain,
    title: "IA privada integrada (Lattice)",
    description:
      "Predice retrasos, detecta ineficiencias y optimiza rutas con el contexto real de tu territorio. A diferencia de otros sistemas que envían datos a APIs genéricas, Lattice procesa todo dentro de tu infraestructura. Tu información operativa nunca sale.",
    accent: "text-[#DF4288]",
    tint: "bg-[#DF4288]/10",
    ring: "ring-[#DF4288]/20",
  },
];

export function NahuiCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-slate-50 py-24 lg:py-32"
        aria-label="Capacidades de Nahui"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[680px] text-center"
          >
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600">
              Capacidades
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Todo lo que tu operación necesita — en una sola plataforma
            </h2>
          </m.div>

          <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, description, accent, tint, ring }, i) => (
              <m.div
                key={title}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tint} ${accent} ring-1 ${ring}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-proxima text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
