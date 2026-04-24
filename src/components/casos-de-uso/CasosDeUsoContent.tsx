"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Factory,
  Stethoscope,
  Ship,
  ShoppingBag,
  Landmark,
  AlertTriangle,
  Sparkles,
  LineChart,
  Quote,
} from "lucide-react";
import {
  CASOS_DE_USO_I18N,
  type LangCode,
  type IndustriaId,
  type ProductoId,
  type CasoDeUso,
} from "@/lib/casos-de-uso-i18n";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";

/* tested: light ✓ dark ✓ */

interface CasosDeUsoContentProps {
  lang: LangCode;
}

const INDUSTRIA_ICON: Record<IndustriaId, React.ComponentType<{ className?: string }>> = {
  energia: Factory,
  salud: Stethoscope,
  logistica: Ship,
  ecommerce: ShoppingBag,
  gobierno: Landmark,
};

// Override de imagen por caso específico (prioridad sobre INDUSTRIA_IMAGE)
const CASO_IMAGE_OVERRIDE: Record<string, { src: string; alt: string }> = {
  "energia-solar": {
    src: "/images/industries/seeb-energia-2.jpg",
    alt: "Paneles solares fotovoltaicos — empresa de energía solar",
  },
  "limpieza-municipal": {
    src: "/images/veracruz-ampliara-a-120-las-rutas-de-recoleccion-de-basura-695445.jpg",
    alt: "Camión recolector de residuos en Veracruz — servicio de limpia municipal",
  },
};

// Imágenes alusivas reales (públicas) por industria
const INDUSTRIA_IMAGE: Record<IndustriaId, { src: string; alt: string }> = {
  energia: {
    src: "/images/industries/seeb-energia.jpg",
    alt: "Campo de paneles solares fotovoltaicos — sector energía",
  },
  salud: {
    src: "/images/industries/seeb-salud.jpg",
    alt: "Profesional médico revisando expediente clínico digital — sector salud",
  },
  logistica: {
    src: "/images/industries/seeb-logistica.jpg",
    alt: "Contenedores en puerto y operación aduanal — sector logística",
  },
  ecommerce: {
    src: "/images/industries/seeb-ventas.jpg",
    alt: "Operación de comercio electrónico y atención al cliente",
  },
  gobierno: {
    src: "/images/industries/seeb-gob.jpg",
    alt: "Operación de servicio público municipal — sector gobierno",
  },
};

// Acento cromático por industria (tokens de marca + acentos semánticos existentes)
const INDUSTRIA_ACCENT: Record<
  IndustriaId,
  { dot: string; chip: string; ring: string; metricBg: string; metricText: string }
> = {
  energia: {
    dot: "bg-amber-500",
    chip: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
    ring: "ring-amber-500/30",
    metricBg: "bg-amber-500/10",
    metricText: "text-amber-700 dark:text-amber-300",
  },
  salud: {
    dot: "bg-emerald-500",
    chip:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
    ring: "ring-emerald-500/30",
    metricBg: "bg-emerald-500/10",
    metricText: "text-emerald-700 dark:text-emerald-300",
  },
  logistica: {
    dot: "bg-brand-accent",
    chip:
      "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
    ring: "ring-brand-accent/30",
    metricBg: "bg-brand-accent/10",
    metricText: "text-brand-accent",
  },
  ecommerce: {
    dot: "bg-fuchsia-500",
    chip:
      "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/20",
    ring: "ring-fuchsia-500/30",
    metricBg: "bg-fuchsia-500/10",
    metricText: "text-fuchsia-700 dark:text-fuchsia-300",
  },
  gobierno: {
    dot: "bg-indigo-500",
    chip:
      "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
    ring: "ring-indigo-500/30",
    metricBg: "bg-indigo-500/10",
    metricText: "text-indigo-700 dark:text-indigo-300",
  },
};

function FilterBar({
  allLabel,
  industrias,
  selected,
  onSelect,
  counts,
}: {
  allLabel: string;
  industrias: Record<IndustriaId, string>;
  selected: IndustriaId | "all";
  onSelect: (v: IndustriaId | "all") => void;
  counts: Record<IndustriaId | "all", number>;
}) {
  const entries: Array<{ id: IndustriaId | "all"; label: string }> = [
    { id: "all", label: allLabel },
    ...(Object.entries(industrias) as Array<[IndustriaId, string]>).map(
      ([id, label]) => ({ id, label })
    ),
  ];

  return (
    <div
      role="tablist"
      aria-label="Filtrar por industria"
      className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--surface-elevated)] p-1.5 shadow-sm backdrop-blur"
    >
      {entries.map(({ id, label }) => {
        const active = selected === id;
        const Icon = id === "all" ? Sparkles : INDUSTRIA_ICON[id as IndustriaId];
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(id)}
            className={[
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
              active
                ? "bg-brand-midnight text-brand-white shadow-sm dark:bg-brand-white dark:text-brand-midnight"
                : "text-brand-midnight/70 hover:bg-brand-midnight/[0.04] hover:text-brand-midnight dark:text-brand-white/70 dark:hover:bg-brand-white/[0.06] dark:hover:text-brand-white",
            ].join(" ")}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{label}</span>
            <span
              className={[
                "ml-0.5 rounded-full px-1.5 py-0.5 text-[0.65rem] font-semibold tabular-nums",
                active
                  ? "bg-white/15 text-brand-white dark:bg-brand-midnight/15 dark:text-brand-midnight"
                  : "bg-brand-midnight/5 text-brand-midnight/60 dark:bg-brand-white/10 dark:text-brand-white/60",
              ].join(" ")}
            >
              {counts[id]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ImpactSummary({
  casos,
  industrias,
  label,
}: {
  casos: CasoDeUso[];
  industrias: Record<IndustriaId, string>;
  label: string;
}) {
  return (
    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-5 md:gap-4 lg:px-8">
      {casos.map((c) => {
        const accent = INDUSTRIA_ACCENT[c.industria];
        const Icon = INDUSTRIA_ICON[c.industria];
        return (
          <div
            key={c.id}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--surface-elevated)] p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl ${accent.metricBg}`}>
              <Icon className={`h-5 w-5 ${accent.metricText}`} aria-hidden="true" />
            </div>
            <div className={`font-proxima text-3xl font-extrabold tracking-tight ${accent.metricText}`}>
              {c.metrica.value}
            </div>
            <div className="mt-1 text-xs font-medium text-brand-midnight/60 dark:text-brand-white/60">
              {c.metrica.label}
            </div>
            <div className="mt-3 text-[0.7rem] font-semibold uppercase tracking-wider text-brand-midnight/45 dark:text-brand-white/45">
              {label} · {industrias[c.industria]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CasoCard({
  caso,
  index,
  content,
}: {
  caso: CasoDeUso;
  index: number;
  content: ReturnType<typeof getContent>;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const accent = INDUSTRIA_ACCENT[caso.industria];
  const Icon = INDUSTRIA_ICON[caso.industria];
  const img = CASO_IMAGE_OVERRIDE[caso.id] ?? INDUSTRIA_IMAGE[caso.industria];
  const reversed = index % 2 === 1;

  return (
    <m.article
      ref={ref}
      id={caso.id}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduce ? 0 : 0.6, delay: 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--surface-elevated)] shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className={`grid items-stretch gap-0 lg:grid-cols-12 ${reversed ? "lg:[&>.img]:order-2" : ""}`}>
        {/* Imagen alusiva */}
        <div className="img relative col-span-12 aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[460px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Gradiente para legibilidad de chips sobre la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {/* Chip industria sobre imagen */}
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${accent.chip}`}>
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {content.filter.industrias[caso.industria]}
            </span>
          </div>

          {/* Tarjeta de métrica destacada */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
            <div>
              <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/80">
                {content.labels.metrica}
              </div>
              <div className="mt-1 font-proxima text-4xl font-extrabold leading-none text-white drop-shadow-md sm:text-5xl">
                {caso.metrica.value}
              </div>
              <div className="mt-1 text-sm text-white/85">{caso.metrica.label}</div>
            </div>
            <LineChart className="h-10 w-10 text-white/70" aria-hidden="true" />
          </div>
        </div>

        {/* Contenido */}
        <div className="col-span-12 p-6 sm:p-8 lg:col-span-7 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${accent.dot}`} aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/55 dark:text-brand-white/55">
              {`Caso ${String(index + 1).padStart(2, "0")}`}
            </span>
            <span className="text-brand-midnight/25 dark:text-brand-white/25">/</span>
            <span className="text-xs text-brand-midnight/55 dark:text-brand-white/55">
              {caso.empresa}
            </span>
          </div>

          <h3 className="mt-3 font-proxima text-2xl font-extrabold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-3xl">
            {caso.empresa}
          </h3>

          {/* Productos aplicados */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/50 dark:text-brand-white/50">
              {content.labels.productos}:
            </span>
            {caso.productos.map((p: ProductoId) => (
              <span
                key={p}
                className="inline-flex items-center gap-1 rounded-md border border-[var(--border-default)] bg-[var(--surface-subtle)] px-2 py-0.5 text-xs font-medium text-brand-midnight dark:bg-brand-white/[0.04] dark:text-brand-white"
              >
                {content.productos[p]}
              </span>
            ))}
          </div>

          {/* P → S → R */}
          <div className="mt-6 space-y-5">
            <PSRBlock
              label={content.labels.problema}
              text={caso.problema}
              icon={<AlertTriangle className="h-4 w-4" />}
              tone="danger"
            />
            <PSRBlock
              label={content.labels.solucion}
              text={caso.solucion}
              icon={<Sparkles className="h-4 w-4" />}
              tone="accent"
            />
            <PSRBlock
              label={content.labels.resultado}
              text={caso.resultado}
              icon={<LineChart className="h-4 w-4" />}
              tone="success"
            />
          </div>
        </div>
      </div>
    </m.article>
  );
}

function PSRBlock({
  label,
  text,
  icon,
  tone,
}: {
  label: string;
  text: string;
  icon: React.ReactNode;
  tone: "danger" | "accent" | "success";
}) {
  const tones: Record<typeof tone, { bar: string; iconWrap: string; iconText: string }> = {
    danger: {
      bar: "bg-rose-500/60",
      iconWrap: "bg-rose-500/10",
      iconText: "text-rose-600 dark:text-rose-400",
    },
    accent: {
      bar: "bg-brand-accent/70",
      iconWrap: "bg-brand-accent/10",
      iconText: "text-brand-accent",
    },
    success: {
      bar: "bg-emerald-500/70",
      iconWrap: "bg-emerald-500/10",
      iconText: "text-emerald-600 dark:text-emerald-400",
    },
  };
  const t = tones[tone];

  return (
    <div className="relative flex gap-4 pl-0">
      <div className="flex flex-col items-center">
        <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${t.iconWrap} ${t.iconText}`}>
          {icon}
        </span>
        <span className={`mt-1 w-px flex-1 ${t.bar}`} aria-hidden="true" />
      </div>
      <div className="flex-1 pb-1">
        <div className="text-[0.7rem] font-bold uppercase tracking-widest text-brand-midnight/55 dark:text-brand-white/55">
          {label}
        </div>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-midnight/80 dark:text-brand-white/75">
          {text}
        </p>
      </div>
    </div>
  );
}

function getContent(lang: LangCode) {
  return CASOS_DE_USO_I18N[lang];
}

export function CasosDeUsoContent({ lang }: CasosDeUsoContentProps) {
  const content = useMemo(() => getContent(lang), [lang]);
  const [selected, setSelected] = useState<IndustriaId | "all">("all");

  const counts = useMemo(() => {
    const base = {
      all: content.casos.length,
    } as Record<IndustriaId | "all", number>;
    (Object.keys(content.filter.industrias) as IndustriaId[]).forEach((k) => {
      base[k] = content.casos.filter((c) => c.industria === k).length;
    });
    return base;
  }, [content]);

  const visibles = useMemo(
    () =>
      selected === "all"
        ? content.casos
        : content.casos.filter((c) => c.industria === selected),
    [content.casos, selected]
  );

  return (
    <LazyMotion features={domAnimation}>
      {/* HERO */}
      <PageHero
        badge={content.hero.badge}
        badgeColor="brand-accent"
        title={content.hero.h1}
        subtitle={content.hero.subtitle}
        trustSignals={content.hero.trustSignals}
        bgImage="/images/ai-cloud-concept-with-lit-brain.jpg"
        bgImageAlt=""
      />

      {/* Resumen de impacto */}
      <section
        aria-label="Resumen de impacto por industria"
        className="relative -mt-10 bg-transparent pb-6"
      >
        <ImpactSummary
          casos={content.casos}
          industrias={content.filter.industrias}
          label={content.labels.industria}
        />
      </section>

      {/* FILTROS + GRID DE CASOS */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="font-proxima text-3xl font-extrabold tracking-tight text-brand-midnight dark:text-brand-white sm:text-4xl">
              {lang === "es"
                ? "Implementaciones documentadas"
                : lang === "en"
                ? "Documented implementations"
                : "Implementações documentadas"}
            </h2>
            <p className="mt-3 text-base text-brand-midnight/65 dark:text-brand-white/60">
              {lang === "es"
                ? "Filtra por industria para ver el caso que aplica a tu operación."
                : lang === "en"
                ? "Filter by industry to see the case that applies to your operation."
                : "Filtre por setor para ver o caso aplicável à sua operação."}
            </p>
          </div>

          <FilterBar
            allLabel={content.filter.all}
            industrias={content.filter.industrias}
            selected={selected}
            onSelect={setSelected}
            counts={counts}
          />

          {/* Grid alternado */}
          <div className="mt-14 flex flex-col gap-10">
            {visibles.map((caso, idx) => (
              <CasoCard key={caso.id} caso={caso} index={idx} content={content} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mx-auto mt-14 flex max-w-3xl items-start gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)] p-5">
            <Quote className="mt-0.5 h-4 w-4 shrink-0 text-brand-midnight/40 dark:text-brand-white/40" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-brand-midnight/60 dark:text-brand-white/55">
              {content.disclaimer}
            </p>
          </div>

          {/* Links cruzados */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href={lang === "es" ? "/soluciones" : `/${lang}/soluciones`}
              className="inline-flex items-center gap-1 font-semibold text-brand-accent hover:underline"
            >
              {lang === "es"
                ? "Ver soluciones"
                : lang === "en"
                ? "See solutions"
                : "Ver soluções"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={lang === "es" ? "/industrias" : `/${lang}/industrias`}
              className="inline-flex items-center gap-1 font-semibold text-brand-accent hover:underline"
            >
              {lang === "es"
                ? "Explorar por industria"
                : lang === "en"
                ? "Explore by industry"
                : "Explorar por setor"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        badge={content.hero.badge}
        title={content.cta.title}
        subtitle={content.cta.subtitle}
        ctaLabel={content.cta.label}
        ctaHref={content.cta.href}
        trustSignals={content.cta.trustSignals}
      />
    </LazyMotion>
  );
}
