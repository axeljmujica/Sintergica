"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  Brain,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  Scale,
  Landmark,
  Ship,
  Zap,
  HeartPulse,
  Building2,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Gauge,
  Leaf,
  WalletMinimal,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const HERO_TRUST = SEEB_DEFAULT.hero.trustSignals;

const WHY_POINTS = [
  {
    icon: Target,
    stat: "NVIDIA",
    statLabel: "Benchmark 2025",
    title: "Especializados en IA agéntica",
    description:
      "En tareas agénticas de dominio específico, los SLMs superan en precisión y consistencia a modelos genéricos masivos. Lo demuestra el estudio de NVIDIA \"Small Language Models are the Future of Agentic AI\" (Belcak et al., 2025).",
    accent: {
      iconBg: "bg-purple-500/10",
      iconText: "text-purple-500",
      statText: "text-purple-500",
      hoverBorder: "hover:border-purple-500/30",
      glow: "hover:shadow-purple-500/10",
    },
  },
  {
    icon: Leaf,
    stat: "10–30×",
    statLabel: "menos energía",
    title: "Adaptados a la infraestructura nacional",
    description:
      "Requieren de 10× a 30× menos energía y hardware que un modelo frontera. Operan en local con respuestas instantáneas, sin dependencia de Wi-Fi ni costos por consumo de datos.",
    accent: {
      iconBg: "bg-sky-500/10",
      iconText: "text-sky-500",
      statText: "text-sky-500",
      hoverBorder: "hover:border-sky-500/30",
      glow: "hover:shadow-sky-500/10",
    },
  },
  {
    icon: WalletMinimal,
    stat: "Cero",
    statLabel: "costos por token",
    title: "Flexibilidad de costos y despliegue",
    description:
      "Acceso vía API pagando por token, o licencia para despliegue en VPC / On-premise. Al licenciar el modelo, eliminas el costo por token y garantizas que tus datos nunca salgan de tu infraestructura.",
    accent: {
      iconBg: "bg-brand-accent/10",
      iconText: "text-brand-accent",
      statText: "text-brand-accent",
      hoverBorder: "hover:border-brand-accent/30",
      glow: "hover:shadow-brand-accent/10",
    },
  },
];

const MODELS = [
  {
    id: "legal",
    name: "Lattice Séeb Legal",
    icon: Scale,
    image: "/images/seeb/legal-seeb.jpg",
    corpus: ["Código Civil Federal", "Código de Comercio", "Jurisprudencia SCJN", "Ley de Amparo", "DOF"],
    useCases: ["Revisión contractual", "Monitoreo del DOF", "Análisis de jurisprudencia", "Due diligence documental"],
    accent: {
      bar: "bg-purple-500",
      label: "text-purple-500",
      chipBg: "bg-purple-500/10",
      chipText: "text-purple-700 dark:text-purple-300",
      chipBorder: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/30",
      dot: "bg-purple-500",
      iconText: "text-purple-500",
    },
  },
  {
    id: "gobierno",
    name: "Lattice Séeb Gobierno",
    icon: Landmark,
    image: "/images/seeb/gobierno-seeb.jpg",
    corpus: ["Ley de Adquisiciones", "Compranet", "LGTAIP", "Normativa de transparencia", "Legislación estatal"],
    useCases: ["Análisis de licitaciones", "Respuestas a LGTAIP", "Redacción de oficios", "Análisis presupuestal"],
    accent: {
      bar: "bg-rose-800",
      label: "text-rose-700 dark:text-rose-400",
      chipBg: "bg-rose-800/10",
      chipText: "text-rose-800 dark:text-rose-300",
      chipBorder: "border-rose-800/20",
      hoverBorder: "hover:border-rose-800/30",
      dot: "bg-rose-800",
      iconText: "text-rose-700 dark:text-rose-400",
    },
  },
  {
    id: "logistica",
    name: "Lattice Séeb Logística",
    icon: Ship,
    image: "/images/seeb/logistica-seeb.jpg",
    corpus: ["Normativa SAT", "Ley Aduanera", "Fracciones TIGIE", "Normativa 3PL", "Comercio exterior"],
    useCases: ["Clasificación arancelaria TIGIE", "Validación de pedimentos", "Análisis regulatorio", "Optimización de rutas"],
    accent: {
      bar: "bg-warning-600",
      label: "text-warning-600",
      chipBg: "bg-warning-600/10",
      chipText: "text-warning-600",
      chipBorder: "border-warning-600/20",
      hoverBorder: "hover:border-warning-600/30",
      dot: "bg-warning-600",
      iconText: "text-warning-600",
    },
  },
  {
    id: "energia",
    name: "Lattice Séeb Energía",
    icon: Zap,
    image: "/images/seeb/energia-seeb.jpg",
    corpus: ["Normativa CRE", "Regulación CFE y PEMEX", "NOMs energéticas", "Seguridad industrial"],
    useCases: ["Contratos de suministro", "Cumplimiento de NOMs", "Permisos CRE", "Monitoreo regulatorio"],
    accent: {
      bar: "bg-lime-500",
      label: "text-lime-600",
      chipBg: "bg-lime-500/10",
      chipText: "text-lime-700 dark:text-lime-300",
      chipBorder: "border-lime-500/20",
      hoverBorder: "hover:border-lime-500/30",
      dot: "bg-lime-500",
      iconText: "text-lime-600",
    },
  },
  {
    id: "salud",
    name: "Lattice Séeb Salud",
    icon: HeartPulse,
    image: "/images/seeb/salud-seeb.jpg",
    corpus: ["Normativa COFEPRIS", "Protocolos clínicos", "NOMs de salud", "Farmacovigilancia", "Terminología médica"],
    useCases: ["Análisis de expedientes", "Verificación COFEPRIS", "Farmacovigilancia", "Autorizaciones sanitarias"],
    accent: {
      bar: "bg-sky-500",
      label: "text-sky-500",
      chipBg: "bg-sky-500/10",
      chipText: "text-sky-700 dark:text-sky-300",
      chipBorder: "border-sky-500/20",
      hoverBorder: "hover:border-sky-500/30",
      dot: "bg-sky-500",
      iconText: "text-sky-500",
    },
  },
  {
    id: "financiero",
    name: "Lattice Séeb Financiero",
    icon: Building2,
    image: "/images/seeb/finazas-seeb.jpg",
    corpus: ["Disposiciones CNBV", "Normativa CNSF", "Regulación SAT/CFDI", "KYC/AML", "Normativa PLD"],
    useCases: ["Auditoría y detección PLD", "Reportes CNBV y UIF", "Análisis de CFDIs", "Due diligence financiero"],
    accent: {
      bar: "bg-brand-accent",
      label: "text-brand-accent",
      chipBg: "bg-brand-accent/10",
      chipText: "text-brand-accent",
      chipBorder: "border-brand-accent/20",
      hoverBorder: "hover:border-brand-accent/30",
      dot: "bg-brand-accent",
      iconText: "text-brand-accent",
    },
  },
];

const DISTILLATION_STEPS = [
  {
    icon: Brain,
    label: "Lattice Na'at",
    tag: "Modelo fundacional",
    description:
      "El modelo base de frontera desarrollado en LATAM. Conocimiento general, razonamiento complejo y comprensión de lenguaje especializado.",
    iconBg: "bg-brand-accent/10",
    iconText: "text-brand-accent",
    badgeBg: "bg-brand-accent",
    tagText: "text-brand-accent",
  },
  {
    icon: Sparkles,
    label: "Destilación supervisada",
    tag: "Corpus curado por industria",
    description:
      "Expertos de dominio curan, limpian y validan el corpus normativo. Se transfiere el conocimiento de Na'at a un modelo compacto especializado.",
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-500",
    badgeBg: "bg-purple-500",
    tagText: "text-purple-500",
  },
  {
    icon: Cpu,
    label: "Lattice Séeb",
    tag: "4B–9B parámetros",
    description:
      "Modelo experto por industria optimizado para IA agéntica: alta velocidad, bajo cómputo y despliegue on-premise.",
    iconBg: "bg-success-600/10",
    iconText: "text-success-600",
    badgeBg: "bg-success-600",
    tagText: "text-success-600",
  },
];

const STATS = [
  { value: "6", label: "Verticales especializadas", color: "text-brand-accent" },
  { value: "4B–9B", label: "Parámetros por modelo", color: "text-purple-500" },
  { value: "<300ms", label: "Tiempo de respuesta", color: "text-sky-500" },
  { value: "94%+", label: "Precisión sectorial", color: "text-success-600" },
];

const FAQS = SEEB_DEFAULT.faq.questions;

function HeroSeeb() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/seeb/hero-seeb.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        {/* Glow lila */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto flex flex-1 flex-col justify-center max-w-5xl px-6 pt-32 pb-0 text-center w-full">
        <m.div {...anim(0)} className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/15 px-4 py-1.5 text-xs font-mulish font-medium uppercase tracking-widest text-purple-300 backdrop-blur-sm">
            Lattice Séeb · Modelos Especializados
          </span>
        </m.div>

        <m.h1
          {...anim(0.1)}
          className="mt-6 font-proxima text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] text-balance"
        >
          Modelos expertos para cada industria regulada.
        </m.h1>

        <m.p
          {...anim(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
        >
          Small Language Models destilados desde Lattice Na&apos;at y entrenados con corpus curado por sector. Precisión industrial, despliegue on-premise, costo de operación bajo control.
        </m.p>

        <m.div
          {...anim(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-9 py-3.5 text-[1rem] font-bold text-white shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-purple-500/40"
          >
            Agenda un diagnóstico
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#modelos"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-9 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Ver modelos disponibles
          </a>
        </m.div>

        <m.div
          {...anim(0.4)}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {HERO_TRUST.map((signal) => (
            <span key={signal} className="flex items-center gap-1.5 text-xs text-white/60">
              <CheckCircle className="h-3.5 w-3.5 text-purple-400" />
              {signal}
            </span>
          ))}
        </m.div>

        {/* Stats dentro del hero */}
        <m.div
          {...anim(0.5)}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-white/10"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-8 text-center ${i < STATS.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <p className={`font-proxima text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="mt-2 text-sm text-white/55">{s.label}</p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

export function LatticeSeebContent() {
  const shouldReduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const modelsRef = useRef<HTMLDivElement>(null);
  const modelsInView = useInView(modelsRef, { once: true, margin: "-80px" });
  const distRef = useRef<HTMLDivElement>(null);
  const distInView = useInView(distRef, { once: true, margin: "-80px" });

  return (
    <LazyMotion features={domAnimation}>
      <>
        {/* Hero */}
        <HeroSeeb />

        {/* Por qué SLMs */}
        <section id="por-que" className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Por qué SLMs"
              title="Los Small Language Models son el futuro de la IA agéntica."
              subtitle={SEEB_DEFAULT.whySLMs.citation}
              centered
            />
            <div ref={whyRef} className="mt-14 grid gap-6 md:grid-cols-3">
              {WHY_POINTS.map(({ icon: Icon, stat, statLabel, title, description, accent }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${accent.hoverBorder} ${accent.glow}`}
                >
                  <div className="mb-4">
                    {stat === "NVIDIA" ? (
                      <Image
                        src="/images/NVIDIA_logo.png"
                        alt="NVIDIA"
                        width={120}
                        height={32}
                        className="mb-1 dark:invert"
                      />
                    ) : (
                      <p className={`font-proxima text-3xl font-bold ${accent.statText}`}>
                        {stat}
                      </p>
                    )}
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/50 dark:text-brand-white/50">
                      {statLabel}
                    </p>
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modelos */}
        <section id="modelos" className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Modelos disponibles"
              title="Un modelo entrenado para cada sector."
              subtitle="Cada Lattice Séeb conoce las regulaciones, la terminología y los procesos de su industria."
              centered
            />
            <div ref={modelsRef} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {MODELS.map(({ id, name, icon: Icon, image, corpus, useCases, accent }, i) => (
                <m.article
                  key={id}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={modelsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep transition-all hover:-translate-y-1 hover:shadow-lg ${accent.hoverBorder}`}
                >
                  <div className={`absolute left-0 top-0 z-10 h-1 w-full ${accent.bar}`} />
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className={`absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm ${accent.iconText}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                      {name}
                    </h3>
                    <div className="mt-4">
                      <p className={`text-[11px] font-semibold uppercase tracking-wider ${accent.label}`}>
                        Corpus
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {corpus.map((item) => (
                          <span
                            key={item}
                            className={`rounded-full border px-2.5 py-1 text-xs ${accent.chipBg} ${accent.chipText} ${accent.chipBorder}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className={`text-[11px] font-semibold uppercase tracking-wider ${accent.label}`}>
                        Casos de uso
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {useCases.map((uc) => (
                          <li
                            key={uc}
                            className="flex items-start gap-2 text-[13px] text-brand-midnight/70 dark:text-brand-white/65"
                          >
                            <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${accent.dot}`} />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </m.article>
              ))}
            </div>
          </div>
        </section>

        {/* Destilación */}
        <section id="destilacion" className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Proceso de destilación"
              title="De Na'at a Séeb: precisión industrial a escala."
              subtitle="Lattice Na'at es el modelo base. A través de destilación supervisada con corpus curado, generamos Séeb: modelos expertos por industria optimizados para IA agéntica."
              centered
            />
            <div ref={distRef} className="mt-14 grid gap-6 md:grid-cols-3">
              {DISTILLATION_STEPS.map(({ icon: Icon, label, tag, description, iconBg, iconText, badgeBg, tagText }, i) => (
                <m.div
                  key={label}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={distInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight p-8"
                >
                  <div className={`absolute -top-4 left-8 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${badgeBg}`}>
                    {i + 1}
                  </div>
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconText}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {label}
                  </h3>
                  <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${tagText}`}>
                    {tag}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                  {i < DISTILLATION_STEPS.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                      <ArrowRight className="h-6 w-6 text-brand-midnight/30 dark:text-brand-white/30" />
                    </div>
                  )}
                </m.div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-2 text-brand-midnight/70 dark:text-brand-white/70">
                <Layers className="h-4 w-4 text-sky-500" />
                Alta velocidad
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-brand-midnight/70 dark:text-brand-white/70">
                <Cpu className="h-4 w-4 text-purple-500" />
                Bajo cómputo
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-success-600/20 bg-success-600/5 px-4 py-2 text-brand-midnight/70 dark:text-brand-white/70">
                <ShieldCheck className="h-4 w-4 text-success-600" />
                Datos privados
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Preguntas frecuentes"
              title="Resuelve tus dudas sobre Lattice Séeb"
              centered
            />
            <div className="mt-12 flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    openFaq === i
                      ? "border-brand-accent/30 bg-brand-accent/5"
                      : "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="pr-4 text-[16px] font-bold text-brand-midnight dark:text-brand-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-midnight/50 dark:text-brand-white/50 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180 text-brand-accent" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-6 pt-0 text-[14px] leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          badge="Siguiente paso"
          title="Agenda un diagnóstico para tu industria"
          subtitle="Identifica qué modelo de Lattice Séeb es el adecuado para tus procesos y recibe una propuesta de implementación con ROI estimado."
          ctaLabel="Agendar diagnóstico"
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[
            "Despliegue API, VPC u On-premise",
            "Datos nunca salen de tu entorno",
            "ROI estimado por caso de uso",
          ]}
        />
      </>
    </LazyMotion>
  );
}
