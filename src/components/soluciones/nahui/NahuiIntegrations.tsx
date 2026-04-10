"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Server,
  Warehouse,
  ShoppingCart,
  FileText,
  Mail,
  Plug,
  Smartphone,
  BarChart3,
} from "lucide-react";

const INTEGRATIONS = [
  { icon: Server, label: "ERP" },
  { icon: Warehouse, label: "WMS / Almacén" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: FileText, label: "Facturación" },
  { icon: Mail, label: "Email / Notificaciones" },
  { icon: Plug, label: "APIs / Webhooks" },
  { icon: Smartphone, label: "App móvil" },
  { icon: BarChart3, label: "BI / Analytics" },
];

export function NahuiIntegrations() {
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
      className="bg-brand-surface dark:bg-brand-midnight py-20 px-6"
      aria-label="Integraciones de Nahui"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <m.div {...anim(0)} className="text-center">
          <h3 className="text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">
            Se conecta con lo que ya usas.
          </h3>
          <p className="mt-3 text-base text-brand-midnight/60 dark:text-brand-white/60">
            Nahui se integra con tu ERP, almacén, e-commerce y facturación. Sin
            migración, sin fricción.
          </p>
        </m.div>

        <m.div
          {...anim(0.15)}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {INTEGRATIONS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 opacity-40 transition-opacity duration-300 hover:opacity-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/50 dark:bg-brand-navy/50 text-brand-midnight/40 dark:text-brand-white/40">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{label}</span>
            </div>
          ))}
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}
