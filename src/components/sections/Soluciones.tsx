"use client";

import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowRight, MessageSquare, Layers, Leaf } from "lucide-react";
import Image from "next/image";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";

const AGENTS = [
  { initials: "A", name: "Ana",    light: "bg-purple-100 text-purple-600", dark: "dark:bg-purple-600/20 dark:text-purple-300" },
  { initials: "C", name: "Carlos", light: "bg-sky-100 text-sky-600",       dark: "dark:bg-sky-600/20 dark:text-sky-300" },
  { initials: "S", name: "Sofía",  light: "bg-amber-100 text-amber-600",   dark: "dark:bg-amber-600/20 dark:text-amber-300" },
  { initials: "M", name: "Marco",  light: "bg-blue-100 text-blue-600",     dark: "dark:bg-brand-accent/20 dark:text-brand-accent" },
  { initials: "L", name: "Luna",   light: "bg-lime-100 text-lime-600",     dark: "dark:bg-lime-600/20 dark:text-lime-300" },
];

export function Soluciones() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const dictionary = useDictionary();
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <LazyMotion features={domAnimation}>
    <section
      id="soluciones"
      className="relative overflow-hidden bg-brand-surface py-20 dark:bg-brand-midnight md:py-28"
      aria-label="Nuestras soluciones"
    >
      {/* Decorative gradient — dark only */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[500px] w-[500px] rounded-full bg-brand-accent-light/5 blur-[120px] dark:block" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div {...fadeUp(0)}>
          <span className="inline-block rounded-full border border-brand-accent/25 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent dark:border-brand-accent/25 dark:bg-brand-accent/10">
            {dictionary.soluciones?.badge || "Soluciones"}
          </span>
          <h2 className="mt-5 max-w-2xl font-proxima text-4xl font-bold leading-[1.1] tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl">
            {dictionary.soluciones?.title || "Soluciones de IA empresarial, diseñadas para tu industria"}
          </h2>
          <p className="mt-4 max-w-xl text-base text-brand-midnight/50 dark:text-brand-white/60">
            {dictionary.soluciones?.subtitleLine1 || "Lattice, Nahui y SalesHub están diseñados para funcionar de forma independiente o integrada."}
            <br />
            {dictionary.soluciones?.subtitleLine2 || "Cada uno resuelve un problema distinto. Juntos, transforman cómo opera tu organización."}
          </p>
        </m.div>

        {/* Bento grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Lattice — full row */}
          <m.div
            {...fadeUp(0.12)}
            className="overflow-hidden rounded-2xl border border-brand-midnight/[0.06] bg-gradient-to-br from-brand-white to-brand-surface shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-white/[0.06] dark:from-brand-navy dark:to-brand-deep md:col-span-3"
          >
            <div className="h-0.5 w-full rounded-t-2xl bg-brand-accent opacity-80" />
            <div className="grid md:grid-cols-2">
              {/* Left */}
              <div className="flex flex-col p-8 lg:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700/30 relative overflow-hidden">
                  <Image src="/logo/lattice-chat.svg" alt="Lattice Logo" fill className="object-contain p-2 brightness-0 opacity-65 dark:invert dark:opacity-75" />
                </div>
                <span className="inline-block self-start rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                  {dictionary.soluciones?.lattice?.tag || "IA Privada Empresarial"}
                </span>
                <h3 className="mt-4 text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                  {dictionary.soluciones?.lattice?.title || "Lattice"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/65">
                  {dictionary.soluciones?.lattice?.description || "Modelos especializados por industria, agentes autónomos que trabajan 24/7 y gobernanza verificable. Tu información nunca sale de tu infraestructura."}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(dictionary.soluciones?.lattice?.chips || ["Contexto MX/LATAM", "Datos propietarios", "Soberanía total"]).map((chip: string) => (
                    <span
                      key={chip}
                      className="rounded-full border border-brand-accent/15 bg-brand-accent/[0.06] px-3 py-1 text-xs text-brand-accent dark:bg-brand-accent/[0.08] dark:text-brand-accent-light"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <Link
                  href="/soluciones/lattice"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/70 dark:hover:text-brand-white"
                >
                  {dictionary.soluciones?.lattice?.cta || "Conocer Lattice"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              {/* Right — 3-layer architecture visual */}
              <div className="flex flex-col items-center justify-center bg-brand-surface/50 relative overflow-hidden dark:bg-brand-deep/60 p-0">
                <div className="absolute inset-0 bg-brand-midnight/40 mix-blend-multiply z-10" />
                <Image 
                  src="/img/data-analytics.jpg" 
                  alt="Data Analytics Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="relative z-20 flex w-full max-w-xs flex-col items-stretch gap-3 p-8">
                  {/* Layer 3: Agents (top) */}
                  <m.div
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative z-30 rounded-xl border border-white/20 bg-white/90 backdrop-blur-md dark:bg-brand-navy/90 p-4 shadow-xl"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex -space-x-1.5">
                        {AGENTS.map((a) => (
                          <div key={a.name} className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-brand-midnight/20 dark:border-brand-navy text-[10px] font-bold ${a.light} ${a.dark}`}>
                            {a.initials}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-brand-midnight dark:text-brand-white">Empleados de IA 24/7</p>
                    <p className="text-[0.65rem] text-brand-midnight/45 dark:text-brand-white/45">Ana · Carlos · Sofía · Marco · Luna</p>
                  </m.div>

                  {/* Layer 2: Lattice Séeb (middle) */}
                  <m.div
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="relative z-20 rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-4 shadow-md dark:bg-brand-accent/10"
                  >
                    <Layers className="mb-2 h-5 w-5 text-brand-accent" />
                    <p className="text-xs font-semibold text-brand-midnight dark:text-brand-white">Modelos por industria</p>
                    <p className="text-[0.65rem] text-brand-midnight/45 dark:text-brand-white/45">Legal · Gobierno · Log. y Com. Ext. · Energía · Salud · Financiero</p>
                  </m.div>

                  {/* Layer 1: Platform (base) */}
                  <m.div
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10 rounded-xl border border-brand-midnight/10 bg-brand-surface p-4 shadow-md dark:border-brand-white/10 dark:bg-brand-deep"
                  >
                    <MessageSquare className="mb-2 h-5 w-5 text-brand-accent-light" />
                    <p className="text-xs font-semibold text-brand-midnight dark:text-brand-white">Interfaz conversacional</p>
                    <p className="text-[0.65rem] text-brand-midnight/45 dark:text-brand-white/45">Plataforma unificada · API · Gobernanza</p>
                  </m.div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Nahui */}
          <m.div {...fadeUp(0.24)}>
            <CardSpotlight className="flex h-full flex-col rounded-2xl border border-brand-midnight/[0.06] bg-brand-white dark:bg-brand-navy p-8 shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-white/[0.06]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10 relative overflow-hidden">
                <Image src="/logo/nahui.svg" alt="Nahui Logo" fill className="object-contain p-2 brightness-0 opacity-65 dark:invert dark:opacity-75" />
              </div>
              <span className="inline-block self-start rounded-full border border-sky-500/20 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                {dictionary.soluciones?.nahui?.tag || "Logística Inteligente"}
              </span>
              <h3 className="mt-4 text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{dictionary.soluciones?.nahui?.title || "Nahui"}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/65">
                {dictionary.soluciones?.nahui?.description || "Trazabilidad en tiempo real de tu operación logística. Compatible con Lattice para habilitar copilotos de IA en logística."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(dictionary.soluciones?.nahui?.chips || ["Rutas y geocercas", "Trazabilidad end-to-end", "Despacho ágil"]).map((chip: string) => (
                  <span key={chip} className="rounded-full border border-sky-500/15 bg-sky-50 px-3 py-1 text-xs text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                    {chip}
                  </span>
                ))}
              </div>
              <Link
                href="/soluciones/nahui"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-800 dark:text-sky-400 dark:hover:text-brand-white"
              >
                {dictionary.soluciones?.nahui?.cta || "Conocer Nahui"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardSpotlight>
          </m.div>

          {/* SalesHub */}
          <m.div {...fadeUp(0.36)}>
            <CardSpotlight className="flex h-full flex-col rounded-2xl border border-brand-midnight/[0.06] bg-brand-white dark:bg-brand-navy p-8 shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-white/[0.06]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-50 dark:bg-lime-500/10 relative overflow-hidden">
                <Image src="/logo/saleshub.svg" alt="SalesHub Logo" fill className="object-contain p-2 brightness-0 opacity-65 dark:invert dark:opacity-75" />
              </div>
              <span className="inline-block self-start rounded-full border border-lime-500/20 bg-lime-50 px-3 py-1 text-xs font-semibold text-lime-700 dark:bg-lime-500/10 dark:text-lime-400">
                {dictionary.soluciones?.saleshub?.tag || "Ventas y Marketing"}
              </span>
              <h3 className="mt-4 text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{dictionary.soluciones?.saleshub?.title || "SalesHub"}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/65">
                {dictionary.soluciones?.saleshub?.description || "CRM + Marketing + Funnels en una sola plataforma. Compatible con Lattice para inteligencia comercial con IA."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(dictionary.soluciones?.saleshub?.chips || ["CRM + Marketing + IA", "Todo en uno"]).map((chip: string) => (
                  <span key={chip} className="rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-xs text-lime-700 dark:border-lime-500/15 dark:bg-lime-500/[0.07] dark:text-lime-400">
                    {chip}
                  </span>
                ))}
              </div>
              <Link
                href="/soluciones/saleshub"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-800 dark:text-amber-400 dark:hover:text-brand-white"
              >
                {dictionary.soluciones?.saleshub?.cta || "Conocer SalesHub"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardSpotlight>
          </m.div>

          {/* Lattice Séeb */}
          <m.div {...fadeUp(0.48)}>
            <CardSpotlight className="flex h-full flex-col rounded-2xl border border-brand-midnight/[0.06] bg-brand-white dark:bg-brand-navy p-8 shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-white/[0.06]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-500/10">
                <Leaf className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="inline-block self-start rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                {dictionary.soluciones?.seeb?.tag || "Investigación IA (Labs)"}
              </span>
              <h3 className="mt-4 text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{dictionary.soluciones?.seeb?.title || "Sintérgica Labs A.C."}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/65">
                {dictionary.soluciones?.seeb?.description || "Laboratorio de investigación sin fines de lucro. Modelos liberados bajo licencia open source para MX y LATAM."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(dictionary.soluciones?.seeb?.chips || ["Open Source", "Lattice Na'at", "No-WEIRD"]).map((chip: string) => (
                  <span key={chip} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700 dark:border-emerald-500/15 dark:bg-emerald-500/[0.07] dark:text-emerald-400">
                    {chip}
                  </span>
                ))}
              </div>
              <Link
                href="/investigacion/labs"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-brand-white"
              >
                {dictionary.soluciones?.seeb?.cta || "Conocer Labs"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardSpotlight>
          </m.div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
