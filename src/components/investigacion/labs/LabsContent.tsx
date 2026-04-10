"use client";

import Link from "next/link";
import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight, FlaskConical, Github, ExternalLink,
  CheckCircle2, GraduationCap, Code2, Building2, Users,
  ChevronRight, Box, FileText, Database,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";
import type { ResearchLine, RoadmapPhase } from "@/lib/labs-i18n";

/* ── Inline translations for hardcoded strings ─────────────── */
const T = {
  es: {
    missionBadge: "Misión",
    viewOnHuggingFace: "Ver en HuggingFace",
    viewAllPublications: "Ver todas las publicaciones",
    featuredParamsLabel: "1T Parámetros · Activo",
    featuredDesc: "Primer modelo fundacional desarrollado en México. 120 mil millones de parámetros entrenados con corpus normativo, cultural y lingüístico de México y LATAM. Open source.",
    viewFullModel: "Ver modelo completo \u2192",
    moreLines: "líneas más...",
    terminalLabel: "Sintérgica Labs · Output abierto",
    geoNote: "Sintérgica AI implementa IA privada para sectores regulados en México y Latinoamérica.",
    naatDetail: "Conocer Na\u2019at en detalle \u2192",
  },
  en: {
    missionBadge: "Mission",
    viewOnHuggingFace: "View on HuggingFace",
    viewAllPublications: "View all publications",
    featuredParamsLabel: "1T Parameters · Active",
    featuredDesc: "First foundational model developed in Mexico. 120 billion parameters trained on a regulatory, cultural, and linguistic corpus from Mexico and LATAM. Open source.",
    viewFullModel: "View full model \u2192",
    moreLines: "more lines...",
    terminalLabel: "Sintérgica Labs · Open output",
    geoNote: "Sintérgica AI implements private AI for regulated sectors in Mexico and Latin America.",
    naatDetail: "Learn about Na\u2019at in detail \u2192",
  },
  "pt-br": {
    missionBadge: "Missão",
    viewOnHuggingFace: "Ver no HuggingFace",
    viewAllPublications: "Ver todas as publicações",
    featuredParamsLabel: "1T Parâmetros · Ativo",
    featuredDesc: "Primeiro modelo fundacional desenvolvido no México. 120 bilhões de parâmetros treinados com corpus regulatório, cultural e linguístico do México e LATAM. Open source.",
    viewFullModel: "Ver modelo completo \u2192",
    moreLines: "linhas a mais...",
    terminalLabel: "Sintérgica Labs · Output aberto",
    geoNote: "Sintérgica AI implementa IA privada para setores regulados no México e na América Latina.",
    naatDetail: "Conhecer Na\u2019at em detalhe \u2192",
  },
} as const;

const BOOKING_URL = "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4";

/* ── HuggingFace SVG icon ──────────────────────────────────── */
function HuggingFaceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" opacity="0.15" />
      <path d="M7.5 10.2 Q8.5 9 9.5 10.2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M14.5 10.2 Q15.5 9 16.5 10.2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M8.5 14 Q12 17.5 15.5 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M3 11 Q3.5 8.5 5.5 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M21 11 Q20.5 8.5 18.5 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── Category styles for research lines ───────────────────── */
const CAT_STYLES: Record<ResearchLine["category"], { badge: string; num: string; border: string; dot: string }> = {
  modelos:     { badge: "bg-violet-500/10 text-violet-300",  num: "text-violet-400",  border: "border-violet-500/20",  dot: "bg-violet-400" },
  datos:       { badge: "bg-emerald-500/10 text-emerald-300",num: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-400" },
  evaluacion:  { badge: "bg-sky-500/10 text-sky-300",        num: "text-sky-400",     border: "border-sky-500/20",     dot: "bg-sky-400" },
  razonamiento:{ badge: "bg-amber-500/10 text-amber-300",    num: "text-amber-400",   border: "border-amber-500/20",   dot: "bg-amber-400" },
};

/* ── Phase styles for roadmap ──────────────────────────────── */
const PHASE_STYLES: Record<RoadmapPhase["statusVariant"], { card: string; border: string; chip: string; accent: string }> = {
  active: { card: "bg-emerald-500/[0.06]", border: "border-emerald-500/35", chip: "bg-emerald-500/15 text-emerald-300", accent: "text-emerald-400" },
  dev:    { card: "bg-violet-500/[0.06]",  border: "border-violet-500/25",  chip: "bg-violet-500/15 text-violet-300",  accent: "text-violet-400" },
  goal:   { card: "bg-amber-500/[0.04]",   border: "border-amber-500/20 border-dashed", chip: "bg-amber-500/10 text-amber-400", accent: "text-amber-400" },
};

/* ── Audience icons ────────────────────────────────────────── */
const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  investigadores: GraduationCap,
  universidades:  Building2,
  desarrolladores: Code2,
  organizaciones: Users,
};
const AUDIENCE_STYLES: Record<string, { border: string; bg: string; color: string; hover: string }> = {
  investigadores:  { border: "border-violet-500/20", bg: "bg-violet-500/10", color: "text-violet-400", hover: "hover:border-violet-500/40" },
  universidades:   { border: "border-sky-500/20",    bg: "bg-sky-500/10",    color: "text-sky-400",    hover: "hover:border-sky-500/40" },
  desarrolladores: { border: "border-emerald-500/20",bg: "bg-emerald-500/10",color: "text-emerald-400",hover: "hover:border-emerald-500/40" },
  organizaciones:  { border: "border-amber-500/20",  bg: "bg-amber-500/10",  color: "text-amber-400",  hover: "hover:border-amber-500/40" },
};

function getTagStyle(tag: string) {
  if (tag.includes("Modelo") || tag.includes("Model")) return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
  if (tag.includes("Dataset"))   return "text-violet-400 bg-violet-500/10 border-violet-500/20";
  if (tag.includes("Nuevo") || tag.includes("New") || tag.includes("Novo")) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
  return "text-sky-400 bg-sky-500/10 border-sky-500/20";
}
function getTagIcon(tag: string) {
  if (tag.includes("Modelo") || tag.includes("Model") || tag.includes("Nuevo") || tag.includes("New") || tag.includes("Novo")) return <Box className="h-3 w-3" />;
  if (tag.includes("Dataset")) return <Database className="h-3 w-3" />;
  return <FileText className="h-3 w-3" />;
}

/* ═══════════════════════════════════════════════════════════ */
export function LabsContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = LABS_I18N[lang] ?? LABS_I18N.es;

  const shouldReduce = useReducedMotion();

  const impactRef    = useRef<HTMLDivElement>(null);
  const researchRef  = useRef<HTMLDivElement>(null);
  const linesRef     = useRef<HTMLDivElement>(null);
  const roadmapRef   = useRef<HTMLDivElement>(null);
  const collabRef    = useRef<HTMLDivElement>(null);
  const linksRef     = useRef<HTMLDivElement>(null);

  const impactInView   = useInView(impactRef,   { once: true, margin: "-80px" });
  const researchInView = useInView(researchRef, { once: true, margin: "-80px" });
  const linesInView    = useInView(linesRef,    { once: true, margin: "-80px" });
  const roadmapInView  = useInView(roadmapRef,  { once: true, margin: "-80px" });
  const collabInView   = useInView(collabRef,   { once: true, margin: "-80px" });
  const linksInView    = useInView(linksRef,    { once: true, margin: "-80px" });

  return (
    <LazyMotion features={domAnimation}>

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight px-4 pb-0 pt-28 sm:px-6 lg:px-8 md:pt-32">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 -top-20 h-[560px] w-[560px] rounded-full bg-emerald-600/6 blur-[100px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-accent/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid min-h-[84vh] items-center gap-12 pb-16 pt-8 lg:grid-cols-2 lg:gap-20 lg:pb-20 lg:pt-12">

            {/* Left: Text */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5">
                <FlaskConical className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-400">
                  {c.hero.badge}
                </span>
              </div>

              <h1 className="font-proxima text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl lg:text-[3.5rem]">
                {c.hero.h1}
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                {c.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-500"
                >
                  {c.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#lineas"
                  className="text-sm font-semibold text-brand-midnight/50 dark:text-brand-white/50 transition-colors hover:text-brand-accent dark:hover:text-brand-white"
                >
                  {c.hero.ctaSecondary} →
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                {c.hero.trustSignals.map((s) => (
                  <span key={s} className="flex items-center gap-1.5 text-xs text-brand-midnight/30 dark:text-brand-white/30">
                    <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
                    {s}
                  </span>
                ))}
              </div>
            </m.div>

            {/* Right: Research stats + lines preview */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.8, delay: shouldReduce ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div className="overflow-hidden rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/60 backdrop-blur-sm">
                {/* Header bar */}
                <div className="flex items-center gap-2 border-b border-brand-midnight/8 dark:border-brand-white/10 px-5 py-3.5">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <span className="mx-auto text-[0.65rem] text-brand-midnight/30 dark:text-brand-white/30">{t.terminalLabel}</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-brand-white/8 border-b border-brand-midnight/8 dark:border-brand-white/10">
                  {c.impact.stats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center py-5">
                      <span className="text-2xl font-extrabold text-brand-midnight dark:text-brand-white">{s.value}</span>
                      <span className="mt-0.5 text-[0.65rem] uppercase tracking-wider text-brand-midnight/35 dark:text-brand-white/35">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Research lines preview */}
                <div className="flex flex-col gap-2 p-4">
                  {c.researchLines.lines.slice(0, 5).map((line) => {
                    const s = CAT_STYLES[line.category];
                    return (
                      <div key={line.num} className="flex items-center gap-3 rounded-lg bg-brand-white dark:bg-brand-midnight/3 px-3 py-2.5">
                        <span className={`font-mono text-[0.65rem] font-bold ${s.num}`}>{line.num}</span>
                        <span className="flex-1 truncate text-xs text-brand-midnight/60 dark:text-brand-white/60">{line.title}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-medium ${s.badge}`}>
                          {c.researchLines.categoryLabels[line.category]}
                        </span>
                      </div>
                    );
                  })}
                  <div className="px-3 py-1 text-[0.65rem] text-brand-midnight/20 dark:text-brand-white/20">
                    + {c.researchLines.lines.length - 5} {t.moreLines}
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── 2. OPEN SCIENCE PILLARS ──────────────────────────── */}
      <section className="border-t border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
        <div ref={impactRef} className="mx-auto max-w-6xl">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-14"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-400">
              {t.missionBadge}
            </span>
            <h2 className="font-proxima mt-3 max-w-3xl text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {c.impact.title}
            </h2>
          </m.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {c.impact.features.map((feat, i) => (
              <m.div
                key={feat.title}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : 0.1 + i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 transition-all hover:border-emerald-500/25 hover:shadow-lg hover:shadow-emerald-600/5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <span className="text-[0.65rem] font-bold text-emerald-400">0{i + 1}</span>
                </div>
                <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">{feat.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">{feat.desc}</p>
                {feat.url && (
                  <Link
                    href={feat.url}
                    target={feat.url.startsWith("http") ? "_blank" : undefined}
                    rel={feat.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400/70 transition-colors group-hover:text-emerald-400"
                  >
                    {t.viewOnHuggingFace} <ChevronRight className="h-3 w-3" />
                  </Link>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PUBLICATIONS & MODELS ─────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-accent/5 blur-[100px]" />
        <div ref={researchRef} className="relative mx-auto max-w-7xl">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={researchInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-400">
                {c.featuredResearch.badge}
              </span>
              <h2 className="font-proxima mt-3 text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {c.featuredResearch.h2}
              </h2>
            </div>
            <Link
              href="/investigacion"
              className="inline-flex items-center gap-1 text-sm text-brand-midnight/40 dark:text-brand-white/40 transition-colors hover:text-brand-accent dark:hover:text-brand-white"
            >
              {t.viewAllPublications} <ArrowRight className="h-4 w-4" />
            </Link>
          </m.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.featuredResearch.papers.map((paper, i) => (
              <m.div
                key={paper.title}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={researchInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.08 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                  paper.featured
                    ? "md:col-span-2 lg:col-span-3 border-brand-accent/25 bg-gradient-to-br from-brand-deep to-brand-midnight hover:border-brand-accent/40"
                    : "border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep hover:border-brand-accent/20 hover:bg-brand-surface/80 dark:hover:border-brand-white/20 dark:hover:bg-brand-deep/80"
                }`}
              >
                {paper.url !== "#" && (
                  <Link href={paper.url} className="absolute inset-0 z-10" aria-label={`Ver ${paper.title}`} />
                )}

                {paper.featured ? (
                  <div className="grid lg:grid-cols-[1fr_2fr]">
                    {/* Visual panel */}
                    <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden border-b border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/50 lg:border-b-0 lg:border-r">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
                      <div className="relative flex flex-col items-center gap-3">
                        <Box className="h-16 w-16 text-emerald-400/70 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
                        <span className="font-proxima text-2xl font-bold text-brand-midnight/80 dark:text-brand-white/80">Lattice Na&apos;at</span>
                        <span className="rounded-full bg-emerald-500/15 px-3 py-0.5 text-xs font-semibold text-emerald-300">
                          {t.featuredParamsLabel}
                        </span>
                      </div>
                    </div>
                    {/* Content panel */}
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-medium ${getTagStyle(paper.tag)}`}>
                          {getTagIcon(paper.tag)}
                          {paper.tag}
                        </span>
                        {paper.url !== "#" && (
                          <ExternalLink className="h-4 w-4 text-brand-accent/40 transition-colors group-hover:text-brand-accent" />
                        )}
                      </div>
                      <h3 className="mt-5 text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white sm:text-3xl">{paper.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">
                        {t.featuredDesc}
                      </p>
                      <div className="mt-5 flex items-center gap-4">
                        {paper.date && <span className="text-xs text-brand-midnight/35 dark:text-brand-white/35">{paper.date}</span>}
                        <Link
                          href={paper.url}
                          className="text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                        >
                          {t.viewFullModel}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-medium ${getTagStyle(paper.tag)}`}>
                        {getTagIcon(paper.tag)}
                        {paper.tag}
                      </span>
                      {paper.url !== "#" && (
                        <ExternalLink className="h-4 w-4 text-brand-midnight/25 dark:text-brand-white/25 transition-colors group-hover:text-brand-accent/60 dark:group-hover:text-brand-white/60" />
                      )}
                    </div>
                    <h3 className="mt-4 flex-1 text-base font-proxima font-semibold leading-snug text-brand-midnight dark:text-brand-white">{paper.title}</h3>
                    {paper.date && (
                      <p className="mt-4 text-xs text-brand-midnight/30 dark:text-brand-white/30">{paper.date}</p>
                    )}
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. RESEARCH LINES ────────────────────────────────── */}
      <section id="lineas" className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
        <div ref={linesRef} className="mx-auto max-w-7xl">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={linesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-4"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-400">
              {c.researchLines.badge}
            </span>
            <h2 className="font-proxima mt-3 max-w-2xl text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl">
              {c.researchLines.h2}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-brand-midnight/50 dark:text-brand-white/50">{c.researchLines.subtitle}</p>
          </m.div>

          {/* Category legend */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={linesInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {(Object.entries(c.researchLines.categoryLabels) as [ResearchLine["category"], string][]).map(([key, label]) => {
              const s = CAT_STYLES[key];
              return (
                <span key={key} className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${s.badge}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                  {label}
                </span>
              );
            })}
          </m.div>

          {/* Lines grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.researchLines.lines.map((line, i) => {
              const s = CAT_STYLES[line.category];
              return (
                <m.div
                  key={line.num}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={linesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: shouldReduce ? 0 : 0.05 + i * 0.06 }}
                  className={`group rounded-2xl border bg-brand-surface dark:bg-brand-midnight p-7 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-midnight/80 ${s.border}`}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${s.num}`}>{line.num}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold ${s.badge}`}>
                      {c.researchLines.categoryLabels[line.category]}
                    </span>
                  </div>
                  <h3 className="text-base font-proxima font-semibold leading-snug text-brand-midnight dark:text-brand-white transition-colors group-hover:text-emerald-400">
                    {line.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-midnight/45 dark:text-brand-white/45">{line.desc}</p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. NA'AT ROADMAP ─────────────────────────────────── */}
      <section id="roadmap" className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
        <div ref={roadmapRef} className="mx-auto max-w-7xl">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-14 text-center"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-400">
              {c.roadmap.badge}
            </span>
            <h2 className="font-proxima mt-3 text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl">
              {c.roadmap.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-midnight/50 dark:text-brand-white/50">{c.roadmap.subtitle}</p>
          </m.div>

          {/* Connector bar (desktop) */}
          <div className="relative mb-0 hidden lg:flex" aria-hidden="true">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 via-violet-500/20 to-amber-500/15" />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {c.roadmap.phases.map((phase, i) => {
              const s = PHASE_STYLES[phase.statusVariant];
              return (
                <m.div
                  key={phase.statusVariant}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.12 }}
                  className={`relative rounded-2xl border p-6 ${s.card} ${s.border}`}
                >
                  {/* Phase dot (desktop connector) */}
                  <div
                    className={`absolute -top-3 left-6 hidden h-6 w-6 items-center justify-center rounded-full border-2 lg:flex ${
                      phase.statusVariant === "active" ? "border-emerald-500 bg-emerald-500/20"
                      : phase.statusVariant === "dev"  ? "border-violet-500 bg-violet-500/20"
                      : "border-amber-500 bg-amber-500/10"
                    }`}
                    aria-hidden="true"
                  >
                    <span className={`text-[0.5rem] font-bold ${s.accent}`}>{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.chip}`}>{phase.status}</span>
                    <span className={`text-xs font-medium ${s.accent} opacity-60`}>{phase.year}</span>
                  </div>
                  <p className={`mt-4 text-4xl font-extrabold ${s.accent}`}>{phase.params}</p>
                  <p className="mt-1 text-base font-bold text-brand-midnight dark:text-brand-white">{phase.label}</p>
                  {phase.arch && <p className="mt-0.5 text-xs text-brand-midnight/35 dark:text-brand-white/35">{phase.arch}</p>}
                  <p className="mt-4 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">{phase.desc}</p>

                  {i < c.roadmap.phases.length - 1 && (
                    <div className="mt-4 flex justify-center lg:hidden" aria-hidden="true">
                      <ArrowRight className="h-5 w-5 rotate-90 text-brand-midnight/15 dark:text-brand-white/15" />
                    </div>
                  )}
                </m.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <p className="text-xs text-brand-midnight/30 dark:text-brand-white/30">
              {t.geoNote}
            </p>
            <Link
              href="/investigacion/lattice-naat"
              className="text-xs font-semibold text-emerald-400 transition-opacity hover:opacity-75"
            >
              {t.naatDetail}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. COLLABORATE ───────────────────────────────────── */}
      <section id="colaborar" className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
        <div ref={collabRef} className="mx-auto max-w-7xl">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={collabInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-14 text-center"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-400">
              {c.collaborate.badge}
            </span>
            <h2 className="font-proxima mt-3 text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl">
              {c.collaborate.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-midnight/50 dark:text-brand-white/50">{c.collaborate.subtitle}</p>
          </m.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.collaborate.audiences.map((audience, i) => {
              const Icon = AUDIENCE_ICONS[audience.id] ?? Users;
              const st = AUDIENCE_STYLES[audience.id];
              return (
                <m.div
                  key={audience.id}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={collabInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: shouldReduce ? 0 : i * 0.1 }}
                  className={`flex flex-col rounded-2xl border bg-brand-surface dark:bg-brand-midnight p-6 transition-all duration-200 ${st.border} ${st.hover}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${st.bg}`}>
                    <Icon className={`h-5 w-5 ${st.color}`} />
                  </div>
                  <p className="mt-4 text-base font-bold text-brand-midnight dark:text-brand-white">{audience.title}</p>
                  <p className={`text-xs font-medium ${st.color}`}>{audience.subtitle}</p>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {audience.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${st.color} opacity-60`} />
                        <span className="text-sm text-brand-midnight/55 dark:text-brand-white/55">{item}</span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              );
            })}
          </div>

          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={collabInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              {c.collaborate.ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </m.div>
        </div>
      </section>

      {/* ── 7. OPEN LINKS ────────────────────────────────────── */}
      <section id="links" className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
        <div ref={linksRef} className="mx-auto max-w-4xl">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={linksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-12 text-center"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-400">
              {c.links.badge}
            </span>
            <h2 className="font-proxima mt-3 text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {c.links.h2}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-brand-midnight/50 dark:text-brand-white/50">{c.links.subtitle}</p>
          </m.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* GitHub */}
            <m.a
              href={`https://${c.links.github.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={linksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.45, delay: 0.1 }}
              className="group flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-7 transition-all duration-200 hover:border-brand-accent/20 hover:shadow-lg dark:hover:border-brand-white/25 dark:hover:bg-brand-deep/80"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-white dark:bg-brand-midnight/8">
                  <Github className="h-6 w-6 text-brand-midnight/70 dark:text-brand-white/70" />
                </div>
                <ExternalLink className="h-4 w-4 text-brand-midnight/25 dark:text-brand-white/25 transition-colors group-hover:text-brand-accent/60 dark:group-hover:text-brand-white/60" />
              </div>
              <p className="mt-5 text-xl font-bold text-brand-midnight dark:text-brand-white">{c.links.github.label}</p>
              <p className="mt-0.5 font-mono text-xs text-brand-midnight/30 dark:text-brand-white/30">{c.links.github.url}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">{c.links.github.desc}</p>
              <p className="mt-6 text-sm font-semibold text-brand-midnight/60 dark:text-brand-white/60 transition-colors group-hover:text-brand-accent dark:group-hover:text-brand-white">
                {c.links.github.cta}
              </p>
            </m.a>

            {/* HuggingFace */}
            <m.a
              href={`https://${c.links.huggingface.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={linksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.45, delay: 0.2 }}
              className="group flex flex-col rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-7 transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/[0.08] hover:shadow-lg hover:shadow-emerald-600/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/12">
                  <HuggingFaceIcon className="h-6 w-6 text-emerald-400" />
                </div>
                <ExternalLink className="h-4 w-4 text-brand-midnight/25 dark:text-brand-white/25 transition-colors group-hover:text-emerald-400/60" />
              </div>
              <p className="mt-5 text-xl font-bold text-brand-midnight dark:text-brand-white">{c.links.huggingface.label}</p>
              <p className="mt-0.5 font-mono text-xs text-brand-midnight/30 dark:text-brand-white/30">{c.links.huggingface.url}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">{c.links.huggingface.desc}</p>
              <p className="mt-6 text-sm font-semibold text-emerald-400 transition-colors group-hover:text-emerald-300">
                {c.links.huggingface.cta}
              </p>
            </m.a>
          </div>
        </div>
      </section>

    </LazyMotion>
  );
}
