"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";

const LOGS = [
  "[2026-03-10 09:14:23] Ana revisó contrato-2025-0847.pdf — Resultado: 3 alertas de riesgo — Aprobado por: Carlos M. (Dir. Jurídico)",
  "[2026-03-10 09:15:01] Sofía generó reporte PLD mensual — Fuentes: 147 transacciones analizadas — Status: pendiente validación",
  "[2026-03-10 09:16:44] Marco actualizó dashboard KPI legal — Periodo: Feb 2026 — Cambios: 12 métricas recalculadas",
];

export function AuditTrail() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <m.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.3 }}
      className="mt-12 rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/50 dark:bg-brand-navy/50 p-6"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-midnight/40 dark:text-brand-white/40">
        Audit Trail — Ejemplo
      </p>
      <div className="space-y-2">
        {LOGS.map((log, i) => (
          <p key={i} className="font-mono text-xs leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">
            <span className="text-brand-accent-light">
              {log.slice(0, 21)}
            </span>
            {log.slice(21)}
          </p>
        ))}
      </div>
    </m.div>
    </LazyMotion>
  );
}
