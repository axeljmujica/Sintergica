"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  ClipboardList,
  UserCheck,
  Navigation,
  PackageCheck,
  BarChart3,
} from "lucide-react";
import { FlowStep } from "./ui/FlowStep";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Orden recibida",
    description:
      "La orden entra al sistema desde tu ERP, e-commerce o captura manual.",
    dotColor: "bg-brand-accent-light",
  },
  {
    icon: UserCheck,
    title: "Asignación y despacho",
    description:
      "Asignación inteligente de unidad y conductor. Ruta optimizada automáticamente.",
    dotColor: "bg-brand-accent-light",
  },
  {
    icon: Navigation,
    title: "En ruta",
    description:
      "Seguimiento GPS en tiempo real. Alertas de desviación, retrasos y paradas no programadas.",
    dotColor: "bg-[#16A34A]",
    pulse: true,
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    description:
      "Prueba de entrega digital: foto, firma, geolocalización y timestamp.",
    dotColor: "bg-[#16A34A]",
  },
  {
    icon: BarChart3,
    title: "Análisis",
    description:
      "Dashboards de rendimiento, métricas de cumplimiento, KPIs operativos y predicciones con Lattice.",
    dotColor: "bg-brand-accent",
  },
];

export function NahuiFlow() {
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
      className="bg-brand-surface dark:bg-brand-midnight py-24 px-6"
      aria-label="Cómo funciona Nahui"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <m.div {...anim(0)} className="text-center">
          <span className="inline-block rounded-full border border-brand-accent-light/20 bg-brand-accent-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-light">
            Cómo funciona
          </span>
          <h2 className="mt-5 mx-auto max-w-2xl font-proxima font-bold text-3xl leading-tight text-brand-midnight dark:text-brand-white md:text-4xl">
            De la orden a la prueba de entrega. Sin puntos ciegos.
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-brand-midnight/60 dark:text-brand-white/60">
            Nahui controla cada paso de tu operación logística con visibilidad
            total.
          </p>
        </m.div>

        {/* Flow — horizontal on desktop, vertical on mobile */}
        <div className="relative mt-16">
          {/* Desktop: horizontal connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden="true">
            <m.div
              className="mx-auto h-0.5 bg-brand-accent-light/20"
              style={{ maxWidth: "calc(100% - 100px)" }}
              {...(shouldReduce
                ? {}
                : {
                    initial: { scaleX: 0 },
                    animate: isInView ? { scaleX: 1 } : {},
                    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
                  })}
            />
          </div>

          {/* Mobile: vertical connector line */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 -translate-x-1/2 lg:hidden" aria-hidden="true">
            <m.div
              className="h-full w-0.5 bg-brand-accent-light/20"
              {...(shouldReduce
                ? {}
                : {
                    initial: { scaleY: 0 },
                    animate: isInView ? { scaleY: 1 } : {},
                    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
                  })}
            />
          </div>

          {/* Steps grid */}
          <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            {STEPS.map((step, i) => (
              <m.div
                key={step.title}
                {...anim(0.15 + i * 0.15)}
                className="relative z-10 w-full lg:w-auto"
              >
                <FlowStep {...step} />
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
