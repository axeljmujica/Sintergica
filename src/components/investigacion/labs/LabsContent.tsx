"use client";

import Link from "next/link";
import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, FlaskConical, Github, ExternalLink,
  CheckCircle2, GraduationCap, Code2, Building2, Users,
  Box, FileText, Database, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";
import { PageHero } from "@/components/shared/PageHero";
import { LABS_I18N } from "@/lib/labs-i18n";
import type { ResearchLine, RoadmapPhase } from "@/lib/labs-i18n";

/* ── Inline translations ───────────────────────────────────── */
const T = {
  es: {
    missionBadge: "Ciencia abierta",
    viewOnHuggingFace: "Ver en HuggingFace",
    viewAllPublications: "Ver todas las publicaciones",
    featuredParamsLabel: "1T Parámetros · Activo",
    featuredDesc: "Modelo fundacional de mayor escala desarrollado en LATAM. 1 billón (1T) de parámetros entrenados con corpus normativo, cultural y lingüístico de México y América Latina.",
    viewFullModel: "Ver modelo completo",
    moreLines: "líneas más",
    terminalLabel: "Sintérgica Labs · Output abierto",
    geoNote: "Sintérgica AI implementa IA privada para sectores regulados en México y Latinoamérica.",
    naatDetail: "Conocer Na\u2019at en detalle",
    chapter: "Capítulo",
    anchor: "Proyecto ancla",
  },
  en: {
    missionBadge: "Open science",
    viewOnHuggingFace: "View on HuggingFace",
    viewAllPublications: "View all publications",
    featuredParamsLabel: "1T Parameters · Active",
    featuredDesc: "Largest foundational model built in LATAM. 1 trillion (1T) parameters trained on a regulatory, cultural, and linguistic corpus from Mexico and Latin America.",
    viewFullModel: "View full model",
    moreLines: "more lines",
    terminalLabel: "Sintérgica Labs · Open output",
    geoNote: "Sintérgica AI implements private AI for regulated sectors in Mexico and Latin America.",
    naatDetail: "Explore Na\u2019at in detail",
    chapter: "Chapter",
    anchor: "Anchor project",
  },
  "pt-br": {
    missionBadge: "Ciência aberta",
    viewOnHuggingFace: "Ver no HuggingFace",
    viewAllPublications: "Ver todas as publicações",
    featuredParamsLabel: "1T Parâmetros · Ativo",
    featuredDesc: "Modelo fundacional de maior escala desenvolvido na LATAM. 1 trilhão (1T) de parâmetros treinados com corpus regulatório, cultural e linguístico do México e da América Latina.",
    viewFullModel: "Ver modelo completo",
    moreLines: "linhas a mais",
    terminalLabel: "Sintérgica Labs · Output aberto",
    geoNote: "Sintérgica AI implementa IA privada para setores regulados no México e na América Latina.",
    naatDetail: "Conhecer Na\u2019at em detalhe",
    chapter: "Capítulo",
    anchor: "Projeto âncora",
  },
} as const;

const BOOKING_URL = "/diagnostico";

/* ── HuggingFace icon ──────────────────────────────────────── */
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

/* ── Unified accent system (4 tones aligned to brand) ─────── */
type Tone = "accent" | "emerald" | "amber" | "violet";
const TONE: Record<Tone, { text: string; bg: string; border: string; dot: string; ring: string }> = {
  accent:  { text: "text-brand-accent",  bg: "bg-brand-accent/10",  border: "border-brand-accent/25",  dot: "bg-brand-accent",  ring: "ring-brand-accent/30" },
  emerald: { text: "text-emerald-500 dark:text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/25", dot: "bg-emerald-500", ring: "ring-emerald-500/30" },
  amber:   { text: "text-amber-600 dark:text-amber-400",     bg: "bg-amber-500/10",   border: "border-amber-500/25",   dot: "bg-amber-500",   ring: "ring-amber-500/30" },
  violet:  { text: "text-violet-600 dark:text-violet-400",   bg: "bg-violet-500/10",  border: "border-violet-500/25",  dot: "bg-violet-500",  ring: "ring-violet-500/30" },
};

const CAT_TONE: Record<ResearchLine["category"], Tone> = {
  modelos: "accent",
  datos: "emerald",
  evaluacion: "amber",
  razonamiento: "violet",
};

const PHASE_TONE: Record<RoadmapPhase["statusVariant"], Tone> = {
  active: "emerald",
  dev: "accent",
  goal: "amber",
};

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  investigadores: GraduationCap,
  universidades: Building2,
  desarrolladores: Code2,
  organizaciones: Users,
};
const AUDIENCE_TONE: Record<string, Tone> = {
  investigadores: "violet",
  universidades: "accent",
  desarrolladores: "emerald",
  organizaciones: "amber",
};

function getTagTone(tag: string): Tone {
  if (tag.includes("Modelo") || tag.includes("Model") || tag.includes("Nuevo") || tag.includes("New") || tag.includes("Novo")) return "emerald";
  if (tag.includes("Dataset")) return "violet";
  if (tag.includes("Paper") || tag.includes("Artigo") || tag.includes("Artículo")) return "accent";
  return "amber";
}
function getTagIcon(tag: string) {
  if (tag.includes("Modelo") || tag.includes("Model")) return <Box className="h-3 w-3" aria-hidden />;
  if (tag.includes("Dataset")) return <Database className="h-3 w-3" aria-hidden />;
  return <FileText className="h-3 w-3" aria-hidden />;
}

/* ═══════════════════════════════════════════════════════════ */
export function LabsContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = LABS_I18N[lang] ?? LABS_I18N.es;

  const shouldReduce = useReducedMotion();

  const impactRef = useRef<HTMLDivElement>(null);
  const naatRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const pubsRef = useRef<HTMLDivElement>(null);
  const collabRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const impactInView = useInView(impactRef, { once: true, margin: "-80px" });
  const naatInView = useInView(naatRef, { once: true, margin: "-80px" });
  const linesInView = useInView(linesRef, { once: true, margin: "-80px" });
  const pubsInView = useInView(pubsRef, { once: true, margin: "-80px" });
  const collabInView = useInView(collabRef, { once: true, margin: "-80px" });
  const linksInView = useInView(linksRef, { once: true, margin: "-80px" });

  const fade = (delay = 0) =>
    shouldReduce
      ? { initial: false, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        };

  // Non-featured papers only (Na'at is its own anchor section now)
  const papers = c.featuredResearch.papers.filter((p) => !p.featured);

  return (
    <LazyMotion features={domAnimation}>

      {/* ══════════════ 1. HERO — PageHero unificado ══════════════ */}
      <PageHero
        badge={c.hero.badge}
        badgeColor="success-600"
        title={c.hero.h1}
        subtitle={c.hero.subtitle}
        ctaLabel={c.hero.ctaPrimary}
        ctaHref={BOOKING_URL}
        ctaSecondaryLabel={c.hero.ctaSecondary}
        ctaSecondaryHref="#lineas"
        bgImage="/images/Catedral Metropolitana Ciudad de México.jpg"
        bgImageAlt="Sintérgica Labs"
        trustSignals={[...c.hero.trustSignals]}
      />

      {/* Impact stats strip */}
      <section className="relative bg-brand-surface dark:bg-brand-midnight">
        <div className="mx-auto max-w-6xl border-t border-brand-midnight/8 dark:border-brand-white/10">
          <dl className="grid grid-cols-3 divide-x divide-brand-midnight/8 dark:divide-brand-white/10">
            {c.impact.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-6 sm:py-8">
                <dt className="order-2 mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-brand-midnight/45 dark:text-brand-white/45 sm:text-xs">
                  {s.label}
                </dt>
                <dd className="order-1 font-proxima text-3xl font-extrabold text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══════════════ 2. MISSION — Open science pillars ══════════════ */}
      <section
        ref={impactRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="labs-mission-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={impactInView ? { opacity: 1, y: 0 } : {}} className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                <span className="h-px w-8 bg-emerald-500/60" />
                {t.missionBadge}
              </span>
            </div>
            <h2
              id="labs-mission-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.impact.title}
            </h2>
          </m.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-brand-midnight/10 bg-brand-midnight/10 dark:border-brand-white/10 dark:bg-brand-white/10 sm:grid-cols-3">
            {c.impact.features.map((feat, i) => (
              <m.div
                key={feat.title}
                {...fade(0.08 * i)}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                className="group relative flex flex-col bg-white p-8 transition-colors hover:bg-brand-surface dark:bg-brand-midnight dark:hover:bg-brand-deep/60 lg:p-10"
              >
                <span className="font-mono text-xs font-semibold text-brand-accent/70 dark:text-brand-accent-light/70">
                  0{i + 1}
                </span>
                <h3 className="font-proxima mt-4 text-lg font-semibold leading-snug text-brand-midnight dark:text-brand-white">
                  {feat.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {feat.desc}
                </p>
                {feat.url && (
                  <Link
                    href={feat.url}
                    target={feat.url.startsWith("http") ? "_blank" : undefined}
                    rel={feat.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    {t.viewOnHuggingFace}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 3. NA'AT — Anchor project + Roadmap ══════════════ */}
      <section
        ref={naatRef}
        className="relative overflow-hidden border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="labs-naat-h2"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-brand-accent/6 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={naatInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent/60" />
                {t.anchor}
              </span>
            </div>
            <div>
              <h2
                id="labs-naat-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.roadmap.h2}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60 lg:text-lg">
                {c.roadmap.subtitle}
              </p>
            </div>
          </m.div>

          {/* Na'at featured card */}
          <m.div
            {...fade(0.08)}
            animate={naatInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12 overflow-hidden rounded-3xl border border-brand-midnight/10 bg-white shadow-sm dark:border-brand-white/10 dark:bg-brand-deep"
          >
            <div className="grid lg:grid-cols-[5fr_7fr]">
              {/* Visual panel */}
              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-brand-midnight/10 bg-gradient-to-br from-brand-accent/8 via-brand-surface to-emerald-500/5 dark:border-brand-white/10 dark:from-brand-accent/15 dark:via-brand-midnight dark:to-emerald-500/10 lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(54,101,245,0.15)_0%,transparent_65%)]" />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse-glow rounded-full bg-brand-accent/30 blur-2xl" />
                    <Box className="relative h-20 w-20 text-brand-accent drop-shadow-[0_0_20px_rgba(54,101,245,0.5)]" strokeWidth={1.2} />
                  </div>
                  <span className="font-proxima text-3xl font-extrabold tracking-tight text-brand-midnight dark:text-brand-white">
                    Lattice Na&rsquo;at
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[0.7rem] font-semibold text-emerald-700 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    {t.featuredParamsLabel}
                  </span>
                </div>
              </div>

              {/* Content panel */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-2.5 py-1 text-[0.65rem] font-semibold text-brand-accent">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  {c.featuredResearch.papers.find((p) => p.featured)?.tag ?? "Lattice Na'at"}
                </span>
                <h3 className="font-proxima mt-5 text-2xl font-bold leading-tight text-brand-midnight dark:text-brand-white sm:text-3xl">
                  {c.featuredResearch.papers.find((p) => p.featured)?.title ?? "Lattice Na'at 1T"}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.featuredDesc}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href="/investigacion/lattice-naat"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/80"
                  >
                    {t.viewFullModel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="https://huggingface.co/sintergica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-midnight/60 transition-colors hover:text-brand-midnight dark:text-brand-white/60 dark:hover:text-brand-white"
                  >
                    {t.viewOnHuggingFace}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </m.div>

          {/* Roadmap phases — horizontal timeline */}
          <div className="relative">
            {/* Desktop connector */}
            <div
              className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-emerald-500/40 via-brand-accent/30 to-amber-500/30 lg:block"
              aria-hidden="true"
            />

            <ol className="grid gap-6 lg:grid-cols-3">
              {c.roadmap.phases.map((phase, i) => {
                const tone = TONE[PHASE_TONE[phase.statusVariant]];
                const isGoal = phase.statusVariant === "goal";
                return (
                  <m.li
                    key={phase.year + phase.label}
                    {...fade(0.1 * i)}
                    animate={naatInView ? { opacity: 1, y: 0 } : {}}
                    className={`relative rounded-2xl border bg-white p-7 dark:bg-brand-deep ${tone.border} ${isGoal ? "border-dashed" : ""}`}
                  >
                    {/* Timeline dot (desktop) */}
                    <div
                      className={`absolute left-7 top-[-15px] hidden h-7 w-7 items-center justify-center rounded-full border-2 bg-brand-surface dark:bg-brand-midnight lg:flex ${tone.border}`}
                      aria-hidden="true"
                    >
                      <span className={`h-2 w-2 rounded-full ${tone.dot}`} />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold ${tone.bg} ${tone.text}`}>
                        {phase.statusVariant === "active" && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />}
                        {phase.status}
                      </span>
                      <span className="font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                        {phase.year}
                      </span>
                    </div>

                    <p className={`mt-6 font-proxima text-4xl font-extrabold tracking-tight ${tone.text}`}>
                      {phase.params}
                    </p>
                    <p className="mt-2 font-proxima text-base font-semibold text-brand-midnight dark:text-brand-white">
                      {phase.label}
                    </p>
                    {phase.arch && (
                      <p className="mt-1 font-mono text-xs text-brand-midnight/45 dark:text-brand-white/45">
                        {phase.arch}
                      </p>
                    )}
                    <p className="mt-5 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                      {phase.desc}
                    </p>
                  </m.li>
                );
              })}
            </ol>
          </div>

          <div className="mt-10 flex flex-col items-start gap-2 text-xs text-brand-midnight/45 dark:text-brand-white/45 sm:flex-row sm:items-center sm:gap-4">
            <p className="max-w-xl">{t.geoNote}</p>
            <Link
              href="/investigacion/lattice-naat"
              className="inline-flex items-center gap-1 font-semibold text-brand-accent transition-colors hover:text-brand-accent/80"
            >
              {t.naatDetail} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ 4. RESEARCH LINES ══════════════ */}
      <section
        id="lineas"
        ref={linesRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="labs-lines-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={linesInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent/60" />
                {c.researchLines.badge}
              </span>
            </div>
            <div>
              <h2
                id="labs-lines-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.researchLines.h2}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60 lg:text-lg">
                {c.researchLines.subtitle}
              </p>
            </div>
          </m.div>

          {/* Category legend */}
          <m.div {...fade(0.12)} animate={linesInView ? { opacity: 1, y: 0 } : {}} className="mb-8 flex flex-wrap gap-2">
            {(Object.entries(c.researchLines.categoryLabels) as [ResearchLine["category"], string][]).map(([key, label]) => {
              const tone = TONE[CAT_TONE[key]];
              return (
                <span
                  key={key}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tone.border} ${tone.bg} ${tone.text}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
                  {label}
                </span>
              );
            })}
          </m.div>

          {/* Lines grid */}
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-brand-midnight/10 bg-brand-midnight/10 dark:border-brand-white/10 dark:bg-brand-white/10 md:grid-cols-2 lg:grid-cols-3">
            {c.researchLines.lines.map((line, i) => {
              const tone = TONE[CAT_TONE[line.category]];
              return (
                <m.li
                  key={line.num}
                  {...fade(0.04 * i)}
                  animate={linesInView ? { opacity: 1, y: 0 } : {}}
                  className="group relative flex flex-col bg-white p-7 transition-colors hover:bg-brand-surface dark:bg-brand-midnight dark:hover:bg-brand-deep/60"
                >
                  <div className="flex items-start justify-between">
                    <span className={`font-mono text-sm font-bold ${tone.text}`}>{line.num}</span>
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide ${tone.bg} ${tone.text}`}>
                      <span className={`h-1 w-1 rounded-full ${tone.dot}`} />
                      {c.researchLines.categoryLabels[line.category]}
                    </span>
                  </div>
                  <h3 className="font-proxima mt-6 text-base font-semibold leading-snug text-brand-midnight transition-colors group-hover:text-brand-accent dark:text-brand-white dark:group-hover:text-brand-accent-light">
                    {line.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                    {line.desc}
                  </p>
                </m.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ══════════════ 5. PUBLICATIONS & MODELS ══════════════ */}
      <section
        ref={pubsRef}
        className="relative overflow-hidden border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="labs-pubs-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={pubsInView ? { opacity: 1, y: 0 } : {}} className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                <span className="h-px w-8 bg-violet-500/60" />
                {c.featuredResearch.badge}
              </span>
              <h2
                id="labs-pubs-h2"
                className="font-proxima mt-3 text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.featuredResearch.h2}
              </h2>
            </div>
            <Link
              href="https://huggingface.co/sintergica"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-midnight/60 transition-colors hover:text-brand-accent dark:text-brand-white/60 dark:hover:text-brand-white sm:self-end"
            >
              {t.viewAllPublications}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </m.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {papers.map((paper, i) => {
              const tone = TONE[getTagTone(paper.tag)];
              const isLive = paper.url !== "#";
              const Wrapper: React.ElementType = isLive ? Link : "div";
              const wrapperProps = isLive ? { href: paper.url, ...(paper.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {};

              return (
                <m.div
                  key={paper.title}
                  {...fade(0.06 * i)}
                  animate={pubsInView ? { opacity: 1, y: 0 } : {}}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={`group flex h-full flex-col rounded-2xl border border-brand-midnight/10 bg-white p-6 transition-all duration-200 dark:border-brand-white/10 dark:bg-brand-deep ${isLive ? "hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-lg" : "opacity-80"}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide ${tone.border} ${tone.bg} ${tone.text}`}>
                        {getTagIcon(paper.tag)}
                        {paper.tag}
                      </span>
                      {isLive && (
                        <ExternalLink className="h-4 w-4 text-brand-midnight/25 transition-colors group-hover:text-brand-accent dark:text-brand-white/25" />
                      )}
                    </div>
                    <h3 className="font-proxima mt-5 flex-1 text-base font-semibold leading-snug text-brand-midnight dark:text-brand-white">
                      {paper.title}
                    </h3>
                    {paper.date && (
                      <p className="mt-4 font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                        {paper.date}
                      </p>
                    )}
                  </Wrapper>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ 6. COLLABORATE ══════════════ */}
      <section
        id="colaborar"
        ref={collabRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="labs-collab-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={collabInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                <span className="h-px w-8 bg-emerald-500/60" />
                {c.collaborate.badge}
              </span>
            </div>
            <div>
              <h2
                id="labs-collab-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.collaborate.h2}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60 lg:text-lg">
                {c.collaborate.subtitle}
              </p>
            </div>
          </m.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.collaborate.audiences.map((audience, i) => {
              const Icon = AUDIENCE_ICONS[audience.id] ?? Users;
              const tone = TONE[AUDIENCE_TONE[audience.id] ?? "accent"];
              return (
                <m.div
                  key={audience.id}
                  {...fade(0.08 * i)}
                  animate={collabInView ? { opacity: 1, y: 0 } : {}}
                  className={`group flex flex-col rounded-2xl border bg-brand-surface p-7 transition-all duration-200 hover:-translate-y-0.5 dark:bg-brand-midnight ${tone.border} hover:shadow-lg`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.bg}`}>
                    <Icon className={`h-5 w-5 ${tone.text}`} strokeWidth={1.8} aria-hidden />
                  </div>
                  <h3 className="font-proxima mt-5 text-base font-bold text-brand-midnight dark:text-brand-white">
                    {audience.title}
                  </h3>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${tone.text}`}>
                    {audience.subtitle}
                  </p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {audience.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${tone.text}`} strokeWidth={2} aria-hidden />
                        <span className="text-sm leading-snug text-brand-midnight/65 dark:text-brand-white/65">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              );
            })}
          </div>

          <m.div
            {...fade(0.4)}
            animate={collabInView ? { opacity: 1, y: 0 } : {}}
            className="mt-12 flex justify-center"
          >
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-all hover:-translate-y-0.5 hover:bg-brand-accent/90"
            >
              {c.collaborate.ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </div>
      </section>

      {/* ══════════════ 7. OPEN LINKS ══════════════ */}
      <section
        id="links"
        ref={linksRef}
        className="border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-28"
        aria-labelledby="labs-links-h2"
      >
        <div className="mx-auto max-w-5xl">
          <m.div {...fade(0)} animate={linksInView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-midnight/50 dark:text-brand-white/50">
              <span className="h-px w-8 bg-brand-midnight/30 dark:bg-brand-white/30" />
              {c.links.badge}
              <span className="h-px w-8 bg-brand-midnight/30 dark:bg-brand-white/30" />
            </span>
            <h2
              id="labs-links-h2"
              className="font-proxima mt-4 text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl"
            >
              {c.links.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-brand-midnight/60 dark:text-brand-white/60">
              {c.links.subtitle}
            </p>
          </m.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* GitHub */}
            <m.a
              href={`https://${c.links.github.url}`}
              target="_blank"
              rel="noopener noreferrer"
              {...fade(0.08)}
              animate={linksInView ? { opacity: 1, y: 0 } : {}}
              className="group flex flex-col rounded-2xl border border-brand-midnight/10 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-midnight/20 hover:shadow-lg dark:border-brand-white/10 dark:bg-brand-deep dark:hover:border-brand-white/25"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-midnight/5 dark:bg-brand-white/5">
                  <Github className="h-6 w-6 text-brand-midnight/80 dark:text-brand-white/80" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="h-5 w-5 text-brand-midnight/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-midnight dark:text-brand-white/30 dark:group-hover:text-brand-white" />
              </div>
              <p className="font-proxima mt-6 text-xl font-bold text-brand-midnight dark:text-brand-white">
                {c.links.github.label}
              </p>
              <p className="mt-1 font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                {c.links.github.url}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                {c.links.github.desc}
              </p>
              <p className="mt-6 text-sm font-semibold text-brand-midnight/70 transition-colors group-hover:text-brand-accent dark:text-brand-white/70 dark:group-hover:text-brand-accent-light">
                {c.links.github.cta}
              </p>
            </m.a>

            {/* HuggingFace */}
            <m.a
              href={`https://${c.links.huggingface.url}`}
              target="_blank"
              rel="noopener noreferrer"
              {...fade(0.16)}
              animate={linksInView ? { opacity: 1, y: 0 } : {}}
              className="group flex flex-col rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/[0.08] hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15">
                  <HuggingFaceIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-emerald-600/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-600 dark:text-emerald-400/40 dark:group-hover:text-emerald-400" />
              </div>
              <p className="font-proxima mt-6 text-xl font-bold text-brand-midnight dark:text-brand-white">
                {c.links.huggingface.label}
              </p>
              <p className="mt-1 font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                {c.links.huggingface.url}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                {c.links.huggingface.desc}
              </p>
              <p className="mt-6 text-sm font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700 dark:text-emerald-400 dark:group-hover:text-emerald-300">
                {c.links.huggingface.cta}
              </p>
            </m.a>
          </div>
        </div>
      </section>

    </LazyMotion>
  );
}
