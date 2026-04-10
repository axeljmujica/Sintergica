"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    question: "¿Es válida la penalización por rescisión anticipada en este contrato?",
    genericLabel: "IA Genérica",
    genericResponse: "Based on common law principles, early termination penalties are generally enforceable if they represent a reasonable estimate of damages. Courts typically uphold such clauses unless they are deemed punitive rather than compensatory...",
    genericTag: "⚠ Derecho anglosajón · Sin contexto mexicano",
    latticeResponse: "De acuerdo con el Art. 2478 del Código Civil Federal y los criterios de la SCJN (Tesis 1a./J. 46/2014), las cláusulas penales por rescisión anticipada deben ser proporcionales al daño. Una penalización superior al 10% del valor total podría ser impugnada como lesiva.",
    latticeTag: "✓ Marco normativo mexicano · Jurisprudencia actualizada",
    closing: "Mismo prompt. Distinto contexto. Resultados incomparables.",
  },
  en: {
    question: "Is the early termination penalty in this contract valid?",
    genericLabel: "Generic AI",
    genericResponse: "Based on common law principles, early termination penalties are generally enforceable if they represent a reasonable estimate of damages. Courts typically uphold such clauses unless they are deemed punitive rather than compensatory...",
    genericTag: "⚠ Anglo-Saxon law · No Mexican context",
    latticeResponse: "According to Art. 2478 of the Federal Civil Code and SCJN criteria (Thesis 1a./J. 46/2014), penalty clauses for early termination must be proportional to the damage. A penalty exceeding 10% of the total value could be challenged as harmful.",
    latticeTag: "✓ Mexican regulatory framework · Updated case law",
    closing: "Same prompt. Different context. Incomparable results.",
  },
  "pt-br": {
    question: "A penalização por rescisão antecipada neste contrato é válida?",
    genericLabel: "IA Genérica",
    genericResponse: "Based on common law principles, early termination penalties are generally enforceable if they represent a reasonable estimate of damages. Courts typically uphold such clauses unless they are deemed punitive rather than compensatory...",
    genericTag: "⚠ Direito anglo-saxão · Sem contexto mexicano",
    latticeResponse: "De acordo com o Art. 2478 do Código Civil Federal e os critérios da SCJN (Tese 1a./J. 46/2014), as cláusulas penais por rescisão antecipada devem ser proporcionais ao dano. Uma penalização superior a 10% do valor total poderia ser impugnada como lesiva.",
    latticeTag: "✓ Marco normativo mexicano · Jurisprudência atualizada",
    closing: "Mesmo prompt. Contexto diferente. Resultados incomparáveis.",
  },
} as const;

export function ComparisonBlock() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <div ref={ref} className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* ── Card: IA Genérica ── */}
        <m.div
          initial={shouldReduce ? false : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0 }}
          className="rounded-xl border-2 border-red-500/30 bg-brand-surface p-6 dark:bg-brand-navy/60"
        >
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
              {t.genericLabel}
            </span>
          </div>
          <p className="mb-3 text-sm font-medium text-brand-midnight/80 dark:text-brand-white/80">
            {t.question}
          </p>
          <p className="text-sm italic leading-relaxed text-brand-midnight/55 dark:text-brand-white/50">
            &ldquo;{t.genericResponse}&rdquo;
          </p>
          <div className="mt-4 inline-block rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-600 dark:text-red-400">
            {t.genericTag}
          </div>
        </m.div>

        {/* ── Card: Lattice ── */}
        <m.div
          initial={shouldReduce ? false : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2 }}
          className="rounded-xl border-2 border-brand-accent/30 bg-brand-surface dark:bg-brand-navy p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-lime-500" />
            <span className="text-sm font-semibold text-brand-midnight dark:text-brand-white">
              Lattice Séeb Legal
            </span>
          </div>
          <p className="mb-3 text-sm font-medium text-brand-midnight/80 dark:text-brand-white/80">
            {t.question}
          </p>
          <p className="text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
            &ldquo;{t.latticeResponse}&rdquo;
          </p>
          <div className="mt-4 inline-block rounded-lg bg-lime-500/10 px-3 py-1.5 text-xs font-semibold text-lime-500">
            {t.latticeTag}
          </div>
        </m.div>
      </div>

      {/* Closing copy */}
      <m.p
        initial={shouldReduce ? false : { opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.4 }}
        className="mt-8 text-center text-lg font-semibold text-brand-midnight dark:text-brand-white"
      >
        {t.closing}
      </m.p>
    </div>
    </LazyMotion>
  );
}
