"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    heading: "Sintérgica vs. la ruta tradicional",
    headers: { aspect: "Aspecto", traditional: "Consultora Tradicional", sintergica: "Sintérgica AI" },
    rows: [
      { aspect: "Tiempo de arranque", traditional: "Meses de planificación", sintergica: "Demo funcional rápida" },
      { aspect: "Primera entrega", traditional: "Documento PowerPoint", sintergica: "Demo funcional con tus datos" },
      { aspect: "Costo de entrada", traditional: "Inversión mayor requerida", sintergica: "Accesible desde el primer paso" },
      { aspect: "Resultado tangible", traditional: "Recomendaciones", sintergica: "Sistema operando" },
      { aspect: "Compromiso", traditional: "Proyecto de largo plazo", sintergica: "Sin permanencia" },
    ],
    cta: "Agenda tu Diagnóstico Inteligente",
    trustSignals: ["Sin permanencia", "Demo con tus datos reales", "ROI estimado incluido"],
  },
  en: {
    heading: "Sintérgica vs. the traditional route",
    headers: { aspect: "Aspect", traditional: "Traditional Consultancy", sintergica: "Sintérgica AI" },
    rows: [
      { aspect: "Time to start", traditional: "Months of planning", sintergica: "Quick functional demo" },
      { aspect: "First delivery", traditional: "PowerPoint document", sintergica: "Functional demo with your data" },
      { aspect: "Entry cost", traditional: "Major investment required", sintergica: "Accessible from day one" },
      { aspect: "Tangible result", traditional: "Recommendations", sintergica: "System operating" },
      { aspect: "Commitment", traditional: "Long-term project", sintergica: "No lock-in" },
    ],
    cta: "Book your Smart Diagnosis",
    trustSignals: ["No lock-in", "Demo with your real data", "Estimated ROI included"],
  },
  "pt-br": {
    heading: "Sintérgica vs. a rota tradicional",
    headers: { aspect: "Aspecto", traditional: "Consultoria Tradicional", sintergica: "Sintérgica AI" },
    rows: [
      { aspect: "Tempo de início", traditional: "Meses de planejamento", sintergica: "Demo funcional rápida" },
      { aspect: "Primeira entrega", traditional: "Documento PowerPoint", sintergica: "Demo funcional com seus dados" },
      { aspect: "Custo de entrada", traditional: "Investimento maior necessário", sintergica: "Acessível desde o primeiro passo" },
      { aspect: "Resultado tangível", traditional: "Recomendações", sintergica: "Sistema operando" },
      { aspect: "Compromisso", traditional: "Projeto de longo prazo", sintergica: "Sem permanência" },
    ],
    cta: "Agende seu Diagnóstico Inteligente",
    trustSignals: ["Sem permanência", "Demo com seus dados reais", "ROI estimado incluído"],
  },
} as const;

export function ServiceComparison() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <div ref={ref} className="mx-auto mt-16 max-w-4xl">
      <m.div
        initial={shouldReduce ? false : { opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: shouldReduce ? 0 : 0.6 }}
      >
        <h3 className="mb-8 text-center text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">
          {t.heading}
        </h3>

        {/* Comparison table as cards */}
        <div className="overflow-hidden rounded-2xl border border-brand-midnight/[0.06] dark:border-brand-white/10">
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-brand-midnight/[0.06] bg-brand-surface/50 dark:border-brand-white/[0.06] dark:bg-brand-deep/50">
            <div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">
              {t.headers.aspect}
            </div>
            <div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">
              {t.headers.traditional}
            </div>
            <div className="bg-brand-accent/5 p-4 text-xs font-semibold uppercase tracking-wider text-brand-accent">
              {t.headers.sintergica}
            </div>
          </div>

          {/* Data rows */}
          {t.rows.map((row, i) => (
            <m.div
              key={row.aspect}
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.4, delay: 0.1 + i * 0.08 }}
              className={`grid grid-cols-3 ${i < t.rows.length - 1 ? "border-b border-brand-midnight/[0.04] dark:border-brand-white/[0.04]" : ""}`}
            >
              <div className="p-4 text-sm font-medium text-brand-midnight/70 dark:text-brand-white/70">
                {row.aspect}
              </div>
              <div className="p-4 text-sm text-brand-midnight/40 dark:text-brand-white/40">
                {row.traditional}
              </div>
              <div className="bg-brand-accent/5 p-4 text-sm font-semibold text-brand-accent">
                {row.sintergica}
              </div>
            </m.div>
          ))}
        </div>
      </m.div>

      {/* CTA */}
      <m.div
        initial={shouldReduce ? false : { opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.5 }}
        className="mt-10 text-center"
      >
        <a
          href="/diagnostico"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 text-sm font-bold text-brand-midnight dark:text-brand-white shadow-lg shadow-brand-accent/25 transition-all hover:-translate-y-0.5 hover:bg-brand-accent/90 hover:shadow-brand-accent/40"
        >
          {t.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-4 flex items-center justify-center gap-6 flex-wrap">
          {t.trustSignals.map((text) => (
            <span key={text} className="flex items-center gap-1.5 text-xs text-brand-midnight/40 dark:text-brand-white/45">
              <CheckCircle className="h-3.5 w-3.5" />
              {text}
            </span>
          ))}
        </div>
      </m.div>
    </div>
    </LazyMotion>
  );
}
