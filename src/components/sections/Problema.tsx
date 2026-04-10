"use client";

import { LazyMotion, domAnimation, m, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, AlertTriangle, Scale, Landmark, Receipt } from "lucide-react";
import { PROBLEMA } from "@/lib/data";
import { ComparisonBlock } from "./ComparisonBlock";
import { useDictionary, useLocale } from "@/i18n/DictionaryProvider";

/* ── Datos de las tarjetas de error ─────────────────────── */
const ICONOS = [
  { Icon: Scale, color: "text-red-500 dark:text-red-400", bg: "bg-red-500/10 dark:bg-red-500/15", border: "#ef4444" },
  { Icon: Landmark, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10 dark:bg-amber-500/15", border: "#f59e0b" },
  { Icon: Receipt, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-500/10 dark:bg-orange-500/15", border: "#f97316" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getEjemplos = (dictionary: any) => {
  const dictEjemplos = dictionary.problema?.ejemplos || [];
  return [
    {
      sector: dictEjemplos[0]?.sector || "Despachos legales",
      texto: dictEjemplos[0]?.texto || "Sugiere cláusulas de Common Law anglosajón, no de derecho civil mexicano.",
    },
    {
      sector: dictEjemplos[1]?.sector || "Gobierno y licitaciones",
      texto: dictEjemplos[1]?.texto || "Ignora la Ley de Adquisiciones. Opera como normativa federal de EE.\u00a0UU.",
    },
    {
      sector: dictEjemplos[2]?.sector || "Fiscal y contabilidad",
      texto: dictEjemplos[2]?.texto || "Confunde CFDI 4.0 con reglas del IRS. Resultado: exposición ante el SAT.",
    },
  ];
};

const PROBLEMA_T = {
  es: {
    bodyText: "Los modelos de IA globales fueron entrenados principalmente con contexto occidental y anglosajón. Para México y LATAM esto tiene consecuencias reales: un modelo genérico que revisa un contrato mexicano puede citar derecho anglosajón en lugar del Código Civil Federal. Además, ningún proveedor global puede ganar una licitación pública en México porque sus datos viajan a servidores extranjeros.",
    alertText: "Cuando la IA alucina en un contrato o una licitación, el costo no lo paga el modelo.",
    alertHighlight: "Lo pagas tú.",
    exampleLabel: "Ver ejemplo",
  },
  en: {
    bodyText: "Global AI models were primarily trained with Western and Anglo-Saxon context. For Mexico and LATAM, this has real consequences: a generic model reviewing a Mexican contract may cite Anglo-Saxon law instead of the Federal Civil Code. Moreover, no global provider can win a public tender in Mexico because their data travels to foreign servers.",
    alertText: "When AI hallucinates on a contract or a tender, the cost isn't paid by the model.",
    alertHighlight: "You pay for it.",
    exampleLabel: "View example",
  },
  "pt-br": {
    bodyText: "Os modelos de IA globais foram treinados principalmente com contexto ocidental e anglo-saxão. Para o México e LATAM, isso tem consequências reais: um modelo genérico que revisa um contrato mexicano pode citar direito anglo-saxão em vez do Código Civil Federal. Além disso, nenhum provedor global pode ganhar uma licitação pública no México porque seus dados viajam para servidores estrangeiros.",
    alertText: "Quando a IA alucina em um contrato ou uma licitação, o custo não é pago pelo modelo.",
    alertHighlight: "Você paga.",
    exampleLabel: "Ver exemplo",
  },
} as const;

/* ── Problema (sección principal) ─────────────────────── */
export function Problema() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(1);
  const dictionary = useDictionary();
  const locale = useLocale();
  const pt = PROBLEMA_T[locale] ?? PROBLEMA_T.es;
  const EJEMPLOS = getEjemplos(dictionary);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setActiveCard((i) => (i + 1) % EJEMPLOS.length);
    }, 4500);
    return () => clearInterval(t);
  }, [EJEMPLOS.length]);

  return (
    <LazyMotion features={domAnimation}>
    <section
      id="problema"
      className="relative overflow-hidden bg-brand-white dark:bg-brand-deep py-28 sm:py-36"
      aria-label="El problema"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* ── Left Column: Text ── */}
          <div ref={ref} className="flex flex-col justify-center">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
            >
              <span className="mb-4 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
                {PROBLEMA.badge}
              </span>
              <h2 className="font-proxima text-balance text-[2rem] font-bold leading-[1.1] tracking-tight text-brand-midnight dark:text-brand-white sm:text-[2.5rem] lg:text-[3rem]">
                {PROBLEMA.title}
              </h2>

              <p className="mt-8 text-[1.05rem] leading-[1.8] text-brand-navy/60 dark:text-brand-white/55 sm:text-[1.125rem]">
                {pt.bodyText}
              </p>
            </m.div>

            {/* CTA */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <a
                href={PROBLEMA.ctaHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-midnight transition-colors hover:text-brand-accent dark:text-brand-white dark:hover:text-brand-accent-light"
              >
                {dictionary.problema?.ctaLabel || PROBLEMA.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </m.div>
          </div>

          {/* ── Right Column: Error Cards + Alert ── */}
          <div className="flex flex-col justify-center">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.4 }}
            >
              <div className="relative min-h-[140px]">
                <AnimatePresence custom={direction} mode="wait">
                  <m.div
                    key={activeCard}
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ x: d > 0 ? 20 : -20, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: d < 0 ? 20 : -20, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-start gap-5 rounded-2xl border border-brand-midnight/[0.06] bg-brand-surface dark:bg-brand-navy/50 p-6 shadow-sm dark:border-white/[0.06] border-l-4"
                    style={{ borderLeftColor: ICONOS[activeCard].border }}
                  >
                    {(() => {
                      const { Icon, color, bg } = ICONOS[activeCard];
                      return (
                        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg} shadow-sm`}>
                          <Icon className={`h-6 w-6 ${color}`} strokeWidth={1.8} />
                        </span>
                      );
                    })()}
                    <div>
                      <h3 className="text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                        {EJEMPLOS[activeCard].sector}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-brand-midnight/70 dark:text-brand-white/75">
                        {EJEMPLOS[activeCard].texto}
                      </p>
                    </div>
                  </m.div>
                </AnimatePresence>
              </div>
              {/* Navigation dots */}
              <div className="mt-6 flex gap-2">
                {EJEMPLOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCard(i)}
                    className="group relative flex h-4 w-10 items-center justify-center outline-none"
                    aria-label={`${pt.exampleLabel} ${i + 1}`}
                    title={`${pt.exampleLabel} ${i + 1}`}
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeCard
                          ? "w-10 bg-brand-accent"
                          : "w-3 bg-brand-midnight/10 group-hover:bg-brand-midnight/30 dark:bg-brand-white/15 dark:group-hover:bg-brand-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </m.div>

            {/* Alert */}
            <m.div 
              initial={shouldReduce ? false : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.6 }}
              className="mt-8 flex items-start gap-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.07] p-5 backdrop-blur-sm"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500 dark:text-amber-400" />
              <p className="text-[0.95rem] leading-relaxed text-brand-midnight/80 dark:text-brand-white/80">
                {pt.alertText}{" "}
                <span className="font-semibold text-amber-700 dark:text-amber-400">
                  {pt.alertHighlight}
                </span>
              </p>
            </m.div>
          </div>
        </div>

        {/* ── Comparison: IA Genérica vs Lattice ── */}
        <ComparisonBlock />
      </div>
    </section>
    </LazyMotion>
  );
}
