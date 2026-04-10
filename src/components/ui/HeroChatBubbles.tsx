"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { Bot, User } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    messages: [
      { role: "user" as const, text: "¿Puedes analizar el cumplimiento fiscal de mi empresa para Q1 2025?" },
      { role: "agent" as const, text: "He consultado 3 bases de conocimiento: LISR 2025, Resolución Miscelánea Fiscal y tus declaraciones previas." },
      { role: "agent" as const, text: "Detecté 2 deducciones no aplicadas y un crédito fiscal disponible por $148,500 MXN." },
      { role: "user" as const, text: "¿Puedes generar el reporte para mi contador?" },
      { role: "agent" as const, text: "Listo. Reporte generado con referencias normativas del DOF y formato compatible con tu ERP." },
    ],
  },
  en: {
    messages: [
      { role: "user" as const, text: "Can you analyze my company's tax compliance for Q1 2025?" },
      { role: "agent" as const, text: "I've consulted 3 knowledge bases: LISR 2025, Miscellaneous Tax Resolution, and your previous filings." },
      { role: "agent" as const, text: "I detected 2 unapplied deductions and an available tax credit of $148,500 MXN." },
      { role: "user" as const, text: "Can you generate the report for my accountant?" },
      { role: "agent" as const, text: "Done. Report generated with DOF regulatory references and a format compatible with your ERP." },
    ],
  },
  "pt-br": {
    messages: [
      { role: "user" as const, text: "Pode analisar o cumprimento fiscal da minha empresa para Q1 2025?" },
      { role: "agent" as const, text: "Consultei 3 bases de conhecimento: LISR 2025, Resolução Fiscal Miscelânea e suas declarações anteriores." },
      { role: "agent" as const, text: "Detectei 2 deduções não aplicadas e um crédito fiscal disponível de $148.500 MXN." },
      { role: "user" as const, text: "Pode gerar o relatório para meu contador?" },
      { role: "agent" as const, text: "Pronto. Relatório gerado com referências normativas do DOF e formato compatível com seu ERP." },
    ],
  },
} as const;

export function HeroChatBubbles() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const MESSAGES = t.messages;
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <div className="flex flex-col gap-3 py-4">
      {MESSAGES.map((msg, i) => {
        const isAgent = msg.role === "agent";
        return (
          <m.div
            key={i}
            initial={shouldReduce ? false : { opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: shouldReduce ? 0 : 0.5,
              delay: shouldReduce ? 0 : 0.6 + i * 0.35,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`flex items-end gap-2 ${isAgent ? "justify-start" : "justify-end"}`}
          >
            {isAgent && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent/30 backdrop-blur-sm">
                <Bot className="h-3.5 w-3.5 text-brand-accent-light" />
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.8rem] leading-relaxed backdrop-blur-md ${
                isAgent
                  ? "rounded-bl-md border border-brand-accent/20 bg-brand-white dark:bg-brand-midnight/[0.08] text-brand-midnight/90 dark:text-brand-white/90"
                  : "rounded-br-md border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight/[0.12] text-brand-midnight/80 dark:text-brand-white/80"
              }`}
            >
              {isAgent && (
                <span className="mb-1 block text-[0.65rem] font-semibold tracking-wide text-brand-accent-light">
                  Lattice
                </span>
              )}
              {msg.text}
            </div>
            {!isAgent && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-white dark:bg-brand-midnight/10 backdrop-blur-sm">
                <User className="h-3.5 w-3.5 text-brand-midnight/60 dark:text-brand-white/60" />
              </div>
            )}
          </m.div>
        );
      })}

      {/* Typing indicator */}
      <m.div
        initial={shouldReduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduce ? 0 : 0.6 + MESSAGES.length * 0.35, duration: 0.4 }}
        className="flex items-end gap-2"
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent/30 backdrop-blur-sm">
          <Bot className="h-3.5 w-3.5 text-brand-accent-light" />
        </div>
        <div className="rounded-2xl rounded-bl-md border border-brand-accent/20 bg-brand-white dark:bg-brand-midnight/[0.08] px-4 py-3 backdrop-blur-md">
          <div className="flex gap-1">
            {[0, 1, 2].map((dot) => (
              <m.span
                key={dot}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: dot * 0.2,
                  ease: "easeInOut",
                }}
                className="inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-light"
              />
            ))}
          </div>
        </div>
      </m.div>
    </div>
    </LazyMotion>
  );
}
