"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlareCard } from "@/components/ui/glare-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useDictionary } from "@/i18n/DictionaryProvider";

const STATS = [
  {
    prefix: null,
    number: "+16%",
    description: "de ingresos reportan empresas mexicanas que adoptaron IA",
    source: "Meta / Linux Foundation 2025",
  },
  {
    prefix: null,
    number: "350%",
    description: "de ROI en proyectos de IA bien implementados",
    source: "Microsoft / IDC",
  },
  {
    prefix: null,
    number: "67%",
    description: "de empresas usa IA pero no sale del piloto sin resultados",
    source: "McKinsey State of AI 2025",
  },
] as const;

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function StatsBar() {
  const shouldReduce = useReducedMotion();
  const dictionary = useDictionary();

  const stats = dictionary.statsBar?.stats || STATS;

  return (
    <LazyMotion features={domAnimation}>
    <div className="relative w-full z-10">
      <section className="relative bg-brand-white dark:bg-brand-midnight pb-20 md:pb-28 overflow-hidden" aria-label="Estadísticas">
        {/* Wavy texture at low opacity */}
        <WavyBackground
          className="absolute inset-0 w-full h-full"
          colors={["#3665f5", "#53abe6"]}
          backgroundFill="transparent"
          blur={60}
          speed="slow"
          waveOpacity={0.02}
        />
        <div className="mx-auto max-w-5xl px-6">
          {/* Stats grid */}
          <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-3 md:gap-0">
            {stats.map((stat: { prefix?: string | null, number: string, description: string, source: string }, i: number) => (
              <m.div
                key={stat.number}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: shouldReduce ? 0 : 0.55,
                  delay: i * 0.15,
                  ease: EASE,
                }}
                className={`flex flex-col items-center px-10 text-center ${
                  i < STATS.length - 1
                    ? "md:border-r md:border-brand-midnight/10 dark:md:border-brand-white/10"
                    : ""
                }`}
              >
                <GlareCard className="hidden lg:flex flex-col items-center px-8 py-6 text-center bg-transparent border-0 shadow-none rounded-2xl">
                  {stat.prefix && (
                    <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-accent/70">
                      {stat.prefix}
                    </span>
                  )}
                  <EncryptedText
                    text={stat.number}
                    className="text-5xl font-extrabold tracking-tight text-brand-midnight dark:text-brand-white md:text-6xl"
                    revealDelayMs={80}
                    flipDelayMs={40}
                    charset="0123456789+%."
                  />
                  <p className="mt-3 max-w-[200px] text-sm leading-snug text-brand-midnight/70 dark:text-brand-white/70 md:text-base">
                    {stat.description}
                  </p>
                  <p className="mt-2 text-xs font-normal uppercase tracking-[0.08em] text-brand-midnight/50 dark:text-brand-white/40">
                    {stat.source}
                  </p>
                </GlareCard>
                {/* Mobile fallback (no GlareCard) */}
                <div className="lg:hidden flex flex-col items-center">
                  {stat.prefix && (
                    <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-accent/70">
                      {stat.prefix}
                    </span>
                  )}
                  <EncryptedText
                    text={stat.number}
                    className="text-5xl font-extrabold tracking-tight text-brand-midnight dark:text-brand-white"
                    revealDelayMs={80}
                    flipDelayMs={40}
                    charset="0123456789+%."
                  />
                  <p className="mt-3 max-w-[200px] text-sm leading-snug text-brand-midnight/70 dark:text-brand-white/70">
                    {stat.description}
                  </p>
                  <p className="mt-2 text-xs font-normal uppercase tracking-[0.08em] text-brand-midnight/50 dark:text-brand-white/40">
                    {stat.source}
                  </p>
                </div>
              </m.div>
            ))}
          </div>

          {/* Closing line */}
          <div className="mt-14 border-t border-brand-midnight/10 dark:border-brand-white/10 pt-10">
            <TextGenerateEffect
              words={dictionary.statsBar?.closingLine || "La diferencia no está en la tecnología. Está en quién la implementa con el contexto correcto."}
              className="mx-auto max-w-[520px] text-center text-sm font-medium leading-relaxed text-brand-midnight/70 dark:text-brand-white/60 md:text-base"
              filter={true}
              duration={0.4}
              triggerOnView
            />
          </div>
        </div>
      </section>
    </div>
    </LazyMotion>
  );
}
