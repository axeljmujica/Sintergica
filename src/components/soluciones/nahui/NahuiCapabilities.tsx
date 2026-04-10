"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Truck,
  PackageSearch,
  BarChart3,
  Route,
  Plug,
  Sparkles,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Truck,
    title: "Gestión de flotas",
    description:
      "Seguimiento GPS en tiempo real, asignación inteligente de unidades y optimización de rutas. El sistema sabe dónde está cada vehículo, qué lleva y cuándo llegará.",
  },
  {
    icon: PackageSearch,
    title: "Trazabilidad de envíos",
    description:
      "Visibilidad completa del ciclo de entrega: desde la orden hasta la prueba de entrega digital (foto, firma, geolocalización, timestamp). Cada paquete tiene historia.",
  },
  {
    icon: BarChart3,
    title: "Control operativo",
    description:
      "Dashboards de rendimiento, alertas de desviación, SLAs y métricas de cumplimiento. Detecta problemas antes de que escalen a incidentes.",
  },
  {
    icon: Route,
    title: "Despacho y planeación",
    description:
      "Planeación de rutas, despacho automático, gestión de capacidad y ventanas de entrega. Operación optimizada desde el primer kilómetro.",
  },
  {
    icon: Plug,
    title: "Integración con tu stack",
    description:
      "Conectores nativos a ERP, sistemas de almacén (WMS), plataformas de e-commerce y facturación. Nahui se adapta a tu infraestructura, no al revés.",
  },
  {
    icon: Sparkles,
    title: "IA privada integrada (Lattice)",
    description:
      "Copilotos de IA que analizan operaciones, detectan anomalías, predicen retrasos y optimizan rutas con el contexto real de tu operación. Sin enviar datos fuera.",
    featured: true,
  },
];

export function NahuiCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
    <section
      id="capacidades"
      className="bg-brand-surface dark:bg-brand-midnight py-24 px-6"
      aria-label="Capacidades de Nahui"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <m.div {...anim(0)}>
          <span className="inline-block rounded-full border border-brand-accent-light/20 bg-brand-accent-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-light">
            Capacidades
          </span>
          <h2 className="mt-5 max-w-2xl font-proxima font-bold text-3xl leading-tight text-brand-midnight dark:text-brand-white md:text-4xl">
            Control total de tu operación logística.
          </h2>
          <p className="mt-4 max-w-xl text-base text-brand-midnight/60 dark:text-brand-white/60">
            Desde la orden hasta la prueba de entrega. Visibilidad completa, en
            tiempo real, diseñada para la complejidad de México y LATAM.
          </p>
        </m.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <m.div
                key={cap.title}
                {...anim(0.1 + i * 0.1)}
                className={`relative rounded-xl border p-8 transition-all duration-300 hover:shadow-lg ${
                  cap.featured
                    ? "border-brand-accent/30 bg-brand-surface/50 dark:bg-brand-navy/50 hover:border-brand-accent/50"
                    : "border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/50 dark:bg-brand-navy/50 hover:border-brand-accent-light/20"
                }`}
              >
                {cap.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-brand-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
                    Diferenciador
                  </span>
                )}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent-light/10 text-brand-accent-light">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {cap.description}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
