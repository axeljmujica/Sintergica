"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

export function NahuiStats() {
  return (
    <section
      className="border-y border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy py-12 px-6"
      aria-label="Métricas Nahui"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div className="text-center">
          <span className="text-4xl font-extrabold md:text-5xl text-brand-accent-light">
            <NumberTicker value={100} suffix="%" duration={2000} />
          </span>
          <p className="mt-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">Visibilidad de tu operación</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-extrabold md:text-5xl text-[#16A34A]">
            <NumberTicker value={40} suffix="%" duration={2000} delay={200} />
          </span>
          <p className="mt-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">Reducción en tiempos de despacho</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-extrabold md:text-5xl text-brand-midnight dark:text-brand-white">
            &lt;3
          </span>
          <p className="mt-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">Semanas de implementación</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-extrabold md:text-5xl text-brand-accent-light">
            24/7
          </span>
          <p className="mt-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">Monitoreo en tiempo real</p>
        </div>
      </div>
    </section>
  );
}
