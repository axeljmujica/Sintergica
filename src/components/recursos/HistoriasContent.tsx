"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Scale, Landmark, ArrowRight, Info } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";

const CASOS_PLACEHOLDER = [
  {
    sector: "Legal",
    icon: Scale,
    problema: "Equipo legal dedicaba 15+ horas semanales a revisión contractual manual y monitoreo de cambios regulatorios.",
    implementacion: "Lattice Séeb Legal con agente Ana — Analista Legal. Revisión automatizada de contratos y alertas DOF.",
    resultados: "Capacidad demostrada de 47+ contratos revisados por semana. ROI proyectado del 425% en el primer trimestre.",
    siguiente: "Expansión a monitoreo regulatorio automatizado y generación de documentos legales.",
  },
  {
    sector: "Gobierno",
    icon: Landmark,
    problema: "Preparación de licitaciones consumía semanas de trabajo manual. Riesgo de incumplimiento normativo.",
    implementacion: "Lattice Séeb Gobierno con agente Carlos — Inteligencia Comercial. Análisis automatizado de requisitos.",
    resultados: "Reducción proyectada del 60% en tiempo de preparación de licitaciones.",
    siguiente: "Integración con plataforma CompraNet para monitoreo de oportunidades.",
  },
];

export function HistoriasContent() {
  const casosRef = useRef<HTMLDivElement>(null);
  const casosInView = useInView(casosRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <>
      <PageHero
        badge="HISTORIAS DE ÉXITO"
        title="Resultados reales con IA privada"
        subtitle="Casos de implementación con capacidad demostrada y resultados proyectados en sectores regulados de México."
      />

      {/* Notice */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-start gap-3 rounded-xl border border-brand-accent/20 bg-brand-accent/[0.05] p-5">
            <Info className="h-5 w-5 flex-shrink-0 text-brand-accent mt-0.5" />
            <p className="text-sm text-brand-midnight/60 dark:text-brand-white/60">
              Casos de éxito en proceso de documentación formal. Los resultados mostrados representan capacidad demostrada en pilotos internos y resultados proyectados. Agenda un diagnóstico para conocer proyecciones específicas para tu operación.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div ref={casosRef} className="space-y-8">
            {CASOS_PLACEHOLDER.map((caso, i) => {
              const Icon = caso.icon;
              return (
                <m.div
                  key={caso.sector}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={casosInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.15 }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        Sector
                      </p>
                      <h3 className="text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                        {caso.sector}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-warning-600 mb-1">
                        Problema
                      </p>
                      <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                        {caso.problema}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent mb-1">
                        Implementación
                      </p>
                      <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                        {caso.implementacion}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-success-600 mb-1">
                        Resultados
                      </p>
                      <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                        {caso.resultados}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent-light mb-1">
                        Siguiente fase
                      </p>
                      <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                        {caso.siguiente}
                      </p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres ver resultados proyectados para tu industria?"
        subtitle="Solicita un Diagnóstico Inteligente y te entregamos un mapa de implementación con ROI estimado en 1 semana."
        ctaLabel="Solicitar Diagnóstico Inteligente"
        ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
        trustSignals={["Demo con datos reales", "Sin permanencia", "ROI proyectado"]}
      />
    </>
    </LazyMotion>
  );
}
