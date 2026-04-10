"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { FlaskConical, Briefcase, Code, MapPin, Target, Eye } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ── i18n translations ────────────────────────────────────────── */

const T = {
  es: {
    hero: {
      badge: "EMPRESA",
      title: "Construyendo la infraestructura de IA de América Latina",
      subtitle:
        "Sintérgica AI es un laboratorio mexicano de inteligencia artificial fundado en 2016 con la misión de llevar IA privada, especializada y gobernable a organizaciones y gobiernos de México y LATAM.",
      bgImageAlt: "Equipo Sintérgica AI — Nosotros",
    },
    timeline: {
      badge: "Historia",
      title: "De 2016 a hoy",
      desc: "Una década construyendo la infraestructura de IA que América Latina necesita.",
      events: [
        {
          title: "Fundación en Veracruz",
          desc: "Sintérgica AI nace en Boca del Río, Veracruz, con la misión de llevar transformación digital a empresas mexicanas.",
        },
        {
          title: "Expansión comercial a CDMX",
          desc: "Apertura de oficina en Ciudad de México y primeros contratos con empresas del sector legal y financiero.",
        },
        {
          title: "Nace la plataforma Lattice",
          desc: "Inicio del desarrollo de Lattice, la plataforma de IA privada con gobernanza integrada para sectores regulados.",
        },
        {
          title: "Primeros agentes IA en producción",
          desc: "Primera implementación de agentes IA en sector logístico. Lanzamiento de Nahui en fase beta.",
        },
        {
          title: "SalesHub y tercera sede",
          desc: "Lanzamiento oficial de SalesHub. Apertura de la sede de investigación en Xalapa, Veracruz.",
        },
        {
          title: "Inicia entrenamiento de Na'at (1T)",
          desc: "Arranque del proyecto Lattice Na\u2019at: el modelo de IA de mayor escala con 1 billón de parámetros desarrollado en México.",
        },
        {
          title: "Lattice y Nahui v1.0 en producción",
          desc: "Lanzamiento oficial de Lattice y Nahui. Alianzas formales con AMITI y CANACINTRA. Reconocimiento COVEICYDET.",
        },
        {
          title: "Lattice Séeb — 6 verticales especializadas",
          desc: "Lanzamiento de Lattice Séeb con modelos SLM para Legal, Gobierno, Logística, Energía, Salud y Financiero.",
        },
        {
          title: "14 personas, 3 sedes, Na'at 1T en ruta",
          desc: "Equipo de 14 personas. Tres sedes operativas. Inicio del desarrollo de Lattice Na\u2019at escala hacia 1 billón de parámetros.",
        },
      ],
    },
    mission: {
      badge: "Propósito",
      title: "Misión y visión",
      missionLabel: "Misión",
      missionDesc1:
        "Construir la infraestructura de IA que México y América Latina necesitan: privada, gobernable, contextualizada.",
      missionDesc2:
        "Impulsamos la productividad, eficiencia y toma de decisiones de organizaciones y gobiernos mediante IA que entiende nuestro contexto normativo y cultural.",
      visionLabel: "Visión",
      visionDesc1:
        "Ser la infraestructura de IA de referencia para LATAM. Lanzar el modelo de frontera 100% mexicano antes de 2030.",
      visionDesc2:
        "Convertir a Lattice Na\u2019at en el primer modelo de IA de origen latinoamericano en alcanzar la frontera del conocimiento a nivel mundial.",
    },
    business: {
      badge: "Modelo de negocio",
      title: "Modelo híbrido",
      desc: "Tres fuentes de valor complementarias que se refuerzan entre sí.",
      items: [
        {
          label: "Productos SaaS",
          title: "Lattice · Nahui · SalesHub",
          desc: "Plataformas de IA privada, trazabilidad operativa y automatización de ventas, disponibles como suscripción on-premise o cloud privado.",
        },
        {
          label: "Servicios Profesionales",
          title: "Consultoría · Implementación · Capacitación",
          desc: "Estrategia de IA, integración técnica con sistemas existentes y formación especializada. Acompañamiento continuo post-implementación.",
        },
        {
          label: "Investigación Abierta",
          title: "Sintérgica Labs",
          desc: "Laboratorio sin fines de lucro. Publicaciones, datasets curados y modelos open source para fortalecer el ecosistema de IA en LATAM.",
        },
      ],
    },
    offices: {
      badge: "Sedes",
      title: "Tres sedes operativas",
      desc: "Presencia estratégica en México para atender a empresas y gobiernos de la región.",
      items: [
        {
          state: "Veracruz, México",
          role: "Sede principal",
          desc: "Centro de operaciones, ingeniería y liderazgo ejecutivo.",
        },
        {
          state: "CDMX, México",
          role: "Oficina comercial",
          desc: "Ventas, alianzas estratégicas y relaciones institucionales.",
        },
        {
          state: "Veracruz, México",
          role: "Investigación",
          desc: "Equipo de investigación de Sintérgica Labs y desarrollo de Lattice Na\u2019at.",
        },
      ],
    },
    cta: {
      badge: "SIGUIENTE PASO",
      title: "Hablemos sobre tu proyecto",
      subtitle:
        "Descubre cómo la infraestructura de IA de Sintérgica puede transformar tu operación.",
      ctaLabel: "Agendar conversación",
      trustSignals: ["Sin compromiso", "Respuesta en 24h", "IA privada on-premise"],
    },
  },
  en: {
    hero: {
      badge: "COMPANY",
      title: "Building Latin America's AI infrastructure",
      subtitle:
        "Sintérgica AI is a Mexican artificial intelligence lab founded in 2016 with the mission of bringing private, specialized, and governable AI to organizations and governments across Mexico and LATAM.",
      bgImageAlt: "Sintérgica AI Team — About Us",
    },
    timeline: {
      badge: "History",
      title: "From 2016 to today",
      desc: "A decade building the AI infrastructure Latin America needs.",
      events: [
        {
          title: "Founded in Veracruz",
          desc: "Sintérgica AI is born in Boca del Río, Veracruz, with the mission of driving digital transformation for Mexican enterprises.",
        },
        {
          title: "Commercial expansion to CDMX",
          desc: "Opening of the Mexico City office and first contracts with companies in the legal and financial sectors.",
        },
        {
          title: "The Lattice platform is born",
          desc: "Development begins on Lattice, the private AI platform with built-in governance for regulated industries.",
        },
        {
          title: "First AI agents in production",
          desc: "First deployment of AI agents in the logistics sector. Launch of Nahui in beta phase.",
        },
        {
          title: "SalesHub and third office",
          desc: "Official launch of SalesHub. Opening of the research office in Xalapa, Veracruz.",
        },
        {
          title: "Na'at training begins (1T)",
          desc: "Kickoff of the Lattice Na\u2019at project: the largest-scale AI model with 1 trillion parameters developed in Mexico.",
        },
        {
          title: "Lattice and Nahui v1.0 in production",
          desc: "Official launch of Lattice and Nahui. Formal alliances with AMITI and CANACINTRA. COVEICYDET recognition.",
        },
        {
          title: "Lattice S\u00e9eb — 6 specialized verticals",
          desc: "Launch of Lattice S\u00e9eb with SLM models for Legal, Government, Logistics, Energy, Healthcare, and Financial sectors.",
        },
        {
          title: "14 people, 3 offices, Na'at 1T underway",
          desc: "Team of 14 people. Three operational offices. Beginning of Lattice Na\u2019at development scaling toward 1 trillion parameters.",
        },
      ],
    },
    mission: {
      badge: "Purpose",
      title: "Mission and vision",
      missionLabel: "Mission",
      missionDesc1:
        "Build the AI infrastructure that Mexico and Latin America need: private, governable, contextualized, and sovereign.",
      missionDesc2:
        "We drive productivity, efficiency, and decision-making for organizations and governments through AI that understands our regulatory and cultural context.",
      visionLabel: "Vision",
      visionDesc1:
        "Become the reference AI infrastructure for LATAM. Launch a 100% Mexican frontier model before 2030.",
      visionDesc2:
        "Turn Lattice Na\u2019at into the first Latin American-origin AI model to reach the global knowledge frontier.",
    },
    business: {
      badge: "Business model",
      title: "Hybrid model",
      desc: "Three complementary value streams that reinforce each other.",
      items: [
        {
          label: "SaaS Products",
          title: "Lattice · Nahui · SalesHub",
          desc: "Private AI platforms, operational traceability, and sales automation, available as on-premise or private cloud subscriptions.",
        },
        {
          label: "Professional Services",
          title: "Consulting · Implementation · Training",
          desc: "AI strategy, technical integration with existing systems, and specialized training. Ongoing post-implementation support.",
        },
        {
          label: "Open Research",
          title: "Sintérgica Labs",
          desc: "Non-profit laboratory. Publications, curated datasets, and open-source models to strengthen the AI ecosystem in LATAM.",
        },
      ],
    },
    offices: {
      badge: "Offices",
      title: "Three operational offices",
      desc: "Strategic presence in Mexico to serve enterprises and governments across the region.",
      items: [
        {
          state: "Veracruz, Mexico",
          role: "Headquarters",
          desc: "Operations center, engineering, and executive leadership.",
        },
        {
          state: "CDMX, Mexico",
          role: "Commercial office",
          desc: "Sales, strategic alliances, and institutional relations.",
        },
        {
          state: "Veracruz, Mexico",
          role: "Research",
          desc: "Sintérgica Labs research team and Lattice Na\u2019at development.",
        },
      ],
    },
    cta: {
      badge: "NEXT STEP",
      title: "Let\u2019s talk about your project",
      subtitle:
        "Discover how Sintérgica\u2019s AI infrastructure can transform your operations.",
      ctaLabel: "Schedule a conversation",
      trustSignals: ["No commitment", "Response within 24h", "Private on-premise AI"],
    },
  },
  "pt-br": {
    hero: {
      badge: "EMPRESA",
      title: "Construindo a infraestrutura de IA da América Latina",
      subtitle:
        "A Sintérgica AI é um laboratório mexicano de inteligência artificial fundado em 2016 com a missão de levar IA privada, especializada e governável a organizações e governos do México e da América Latina.",
      bgImageAlt: "Equipe Sintérgica AI — Sobre nós",
    },
    timeline: {
      badge: "História",
      title: "De 2016 até hoje",
      desc: "Uma década construindo a infraestrutura de IA que a América Latina precisa.",
      events: [
        {
          title: "Fundação em Veracruz",
          desc: "A Sintérgica AI nasce em Boca del Río, Veracruz, com a missão de levar transformação digital a empresas mexicanas.",
        },
        {
          title: "Expansão comercial para CDMX",
          desc: "Abertura do escritório na Cidade do México e primeiros contratos com empresas dos setores jurídico e financeiro.",
        },
        {
          title: "Nasce a plataforma Lattice",
          desc: "Início do desenvolvimento do Lattice, a plataforma de IA privada com governança integrada para setores regulados.",
        },
        {
          title: "Primeiros agentes de IA em produção",
          desc: "Primeira implementação de agentes de IA no setor logístico. Lançamento do Nahui em fase beta.",
        },
        {
          title: "SalesHub e terceira sede",
          desc: "Lançamento oficial do SalesHub. Abertura da sede de pesquisa em Xalapa, Veracruz.",
        },
        {
          title: "Início do treinamento do Na'at (1T)",
          desc: "Início do projeto Lattice Na\u2019at: o modelo de IA de maior escala com 1 trilhão de parâmetros desenvolvido no México.",
        },
        {
          title: "Lattice e Nahui v1.0 em produção",
          desc: "Lançamento oficial do Lattice e Nahui. Alianças formais com AMITI e CANACINTRA. Reconhecimento COVEICYDET.",
        },
        {
          title: "Lattice Séeb — 6 verticais especializadas",
          desc: "Lançamento do Lattice Séeb com modelos SLM para Jurídico, Governo, Logística, Energia, Saúde e Financeiro.",
        },
        {
          title: "14 pessoas, 3 sedes, Na'at 1T em andamento",
          desc: "Equipe de 14 pessoas. Três sedes operacionais. Início do desenvolvimento do Lattice Na\u2019at em escala rumo a 1 trilhão de parâmetros.",
        },
      ],
    },
    mission: {
      badge: "Propósito",
      title: "Missão e visão",
      missionLabel: "Missão",
      missionDesc1:
        "Construir a infraestrutura de IA que o México e a América Latina precisam: privada, governável, contextualizada e soberana.",
      missionDesc2:
        "Impulsionamos a produtividade, eficiência e tomada de decisões de organizações e governos por meio de IA que compreende nosso contexto normativo e cultural.",
      visionLabel: "Visão",
      visionDesc1:
        "Ser a infraestrutura de IA de referência para a América Latina. Lançar o modelo de fronteira 100% mexicano antes de 2030.",
      visionDesc2:
        "Transformar o Lattice Na\u2019at no primeiro modelo de IA de origem latino-americana a alcançar a fronteira do conhecimento em nível mundial.",
    },
    business: {
      badge: "Modelo de negócio",
      title: "Modelo híbrido",
      desc: "Três fontes de valor complementares que se reforçam mutuamente.",
      items: [
        {
          label: "Produtos SaaS",
          title: "Lattice · Nahui · SalesHub",
          desc: "Plataformas de IA privada, rastreabilidade operacional e automação de vendas, disponíveis como assinatura on-premise ou nuvem privada.",
        },
        {
          label: "Serviços Profissionais",
          title: "Consultoria · Implementação · Capacitação",
          desc: "Estratégia de IA, integração técnica com sistemas existentes e formação especializada. Acompanhamento contínuo pós-implementação.",
        },
        {
          label: "Pesquisa Aberta",
          title: "Sintérgica Labs",
          desc: "Laboratório sem fins lucrativos. Publicações, datasets curados e modelos open source para fortalecer o ecossistema de IA na América Latina.",
        },
      ],
    },
    offices: {
      badge: "Sedes",
      title: "Três sedes operacionais",
      desc: "Presença estratégica no México para atender empresas e governos da região.",
      items: [
        {
          state: "Veracruz, México",
          role: "Sede principal",
          desc: "Centro de operações, engenharia e liderança executiva.",
        },
        {
          state: "CDMX, México",
          role: "Escritório comercial",
          desc: "Vendas, alianças estratégicas e relações institucionais.",
        },
        {
          state: "Veracruz, México",
          role: "Pesquisa",
          desc: "Equipe de pesquisa do Sintérgica Labs e desenvolvimento do Lattice Na\u2019at.",
        },
      ],
    },
    cta: {
      badge: "PRÓXIMO PASSO",
      title: "Vamos conversar sobre seu projeto",
      subtitle:
        "Descubra como a infraestrutura de IA da Sintérgica pode transformar sua operação.",
      ctaLabel: "Agendar conversa",
      trustSignals: ["Sem compromisso", "Resposta em 24h", "IA privada on-premise"],
    },
  },
} as const;

/* ── Static data (non-translatable style props) ───────────────── */

const TIMELINE_STYLES = [
  { year: "2016", accent: "text-brand-accent", dot: "bg-brand-accent" },
  { year: "2018", accent: "text-sky-400", dot: "bg-sky-400" },
  { year: "2020", accent: "text-violet-400", dot: "bg-violet-400" },
  { year: "2021", accent: "text-emerald-400", dot: "bg-emerald-400" },
  { year: "2022", accent: "text-amber-400", dot: "bg-amber-400" },
  { year: "2023", accent: "text-violet-400", dot: "bg-violet-400" },
  { year: "2024", accent: "text-brand-accent", dot: "bg-brand-accent" },
  { year: "2025", accent: "text-sky-400", dot: "bg-sky-400" },
  { year: "2026", accent: "text-emerald-400", dot: "bg-emerald-400" },
];

const BUSINESS_MODEL_STYLES = [
  {
    icon: Code,
    border: "border-violet-500/25",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: Briefcase,
    border: "border-brand-accent/25",
    iconBg: "bg-brand-accent/10",
    iconColor: "text-brand-accent",
  },
  {
    icon: FlaskConical,
    border: "border-emerald-500/25",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

const OFFICE_CITIES = ["Boca del Río", "Ciudad de México", "Xalapa"] as const;

const OFFICE_STYLES = [
  { accentBorder: "border-brand-accent/30", accentText: "text-brand-accent" },
  { accentBorder: "border-violet-500/30", accentText: "text-violet-400" },
  { accentBorder: "border-emerald-500/30", accentText: "text-emerald-400" },
];

/* ── Component ──────────────────────────────────────────────── */

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6" aria-label={t.timeline.badge}>
      <div className="mx-auto max-w-3xl">
        <m.div
          ref={ref}
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
        >
          <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {t.timeline.badge}
          </span>
          <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
            {t.timeline.title}
          </h2>
          <p className="mt-3 text-brand-midnight/60 dark:text-brand-white/60">
            {t.timeline.desc}
          </p>
        </m.div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-accent/40 via-brand-white/8 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {TIMELINE_STYLES.map((style, i) => (
              <m.div
                key={style.year}
                initial={shouldReduce ? false : { opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.4, delay: 0.1 + i * 0.07 }}
                className="relative flex gap-5 pl-7"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-brand-midnight ${style.dot}`}
                  aria-hidden="true"
                />

                <div className="flex-1 rounded-xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface/40 dark:bg-brand-navy/40 px-5 py-4">
                  <span className={`text-xs font-bold ${style.accent}`}>
                    {style.year}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-brand-midnight dark:text-brand-white">
                    {t.timeline.events[i].title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                    {t.timeline.events[i].desc}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <section className="bg-brand-surface/40 dark:bg-brand-navy/40 py-24 px-6" aria-label={t.mission.title}>
      <div ref={ref} className="mx-auto max-w-5xl">
        <m.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {t.mission.badge}
          </span>
          <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
            {t.mission.title}
          </h2>
        </m.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.15 }}
            className="rounded-2xl border border-brand-accent/25 bg-brand-accent/[0.06] p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-accent/10">
                <Target className="h-4.5 w-4.5 text-brand-accent" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {t.mission.missionLabel}
              </p>
            </div>
            <p className="text-base leading-relaxed text-brand-midnight/90 dark:text-brand-white/90">
              {t.mission.missionDesc1}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
              {t.mission.missionDesc2}
            </p>
          </m.div>

          {/* Vision */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.25 }}
            className="rounded-2xl border border-violet-500/25 bg-violet-500/[0.06] p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10">
                <Eye className="h-4.5 w-4.5 text-violet-400" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                {t.mission.visionLabel}
              </p>
            </div>
            <p className="text-base leading-relaxed text-brand-midnight/90 dark:text-brand-white/90">
              {t.mission.visionDesc1}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
              {t.mission.visionDesc2}
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}

function BusinessModelSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6" aria-label={t.business.badge}>
      <div ref={ref} className="mx-auto max-w-6xl">
        <m.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {t.business.badge}
          </span>
          <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
            {t.business.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-midnight/60 dark:text-brand-white/60">
            {t.business.desc}
          </p>
        </m.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BUSINESS_MODEL_STYLES.map((style, i) => {
            const Icon = style.icon;
            const item = t.business.items[i];
            return (
              <m.div
                key={item.label}
                initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.12 }}
                className={`rounded-2xl border bg-brand-surface/50 dark:bg-brand-navy/50 p-7 ${style.border}`}
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.iconBg}`}>
                  <Icon className={`h-5 w-5 ${style.iconColor}`} />
                </div>
                <p className={`mt-4 text-xs font-semibold uppercase tracking-widest ${style.iconColor}`}>
                  {item.label}
                </p>
                <p className="mt-1 text-base font-semibold text-brand-midnight dark:text-brand-white">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {item.desc}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OfficesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <section className="bg-brand-surface/40 dark:bg-brand-navy/40 py-24 px-6" aria-label={t.offices.badge}>
      <div ref={ref} className="mx-auto max-w-5xl">
        <m.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {t.offices.badge}
          </span>
          <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
            {t.offices.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-midnight/60 dark:text-brand-white/60">
            {t.offices.desc}
          </p>
        </m.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {OFFICE_STYLES.map((style, i) => {
            const office = t.offices.items[i];
            return (
              <m.div
                key={OFFICE_CITIES[i]}
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.12 }}
                className={`rounded-2xl border bg-brand-surface/50 dark:bg-brand-navy/50 p-7 ${style.accentBorder}`}
              >
                <div className="flex items-start gap-3">
                  <MapPin className={`mt-0.5 h-5 w-5 shrink-0 ${style.accentText}`} />
                  <div>
                    <p className="text-lg font-semibold text-brand-midnight dark:text-brand-white">{OFFICE_CITIES[i]}</p>
                    <p className={`text-xs font-medium ${style.accentText}`}>{office.state}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-midnight/40 dark:text-brand-white/40">
                  {office.role}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {office.desc}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function NosotrosContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          bgImage="/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg"
          bgImageAlt={t.hero.bgImageAlt}
        />
        <TimelineSection />
        <MissionVisionSection />
        <BusinessModelSection />
        <OfficesSection />
        <CTASection
          badge={t.cta.badge}
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
