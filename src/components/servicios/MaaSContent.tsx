"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Megaphone,
  Target,
  PenTool,
  BarChart3,
  Users,
  Sparkles,
  Check,
  X,
  Search,
  Wand2,
  Rocket,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";

const HERO = {
  badge: "Marketing as a Service",
  title: "Marketing impulsado por agentes de IA, no por plantillas.",
  subtitle:
    "Captación, contenido, campañas y analítica en un solo flujo operado por inteligencia agéntica. Tu equipo se enfoca en estrategia; los agentes ejecutan a escala.",
  ctaLabel: "Agendar diagnóstico",
  trustSignals: [
    "Kickoff en 1 semana",
    "Sin permanencia",
    "Precios en MXN, sin sorpresas",
  ],
};

const PROBLEMS = [
  {
    icon: Users,
    title: "Equipo de marketing rebasado",
    description:
      "Tres personas haciendo el trabajo de diez. Copy, diseño, pauta, reportes, nurturing — todo compite por el mismo tiempo y casi nada se hace con calidad.",
  },
  {
    icon: BarChart3,
    title: "Costo por lead que no baja",
    description:
      "Gastas más en Meta y Google cada trimestre, pero el CAC crece y la conversión se estanca. No hay tiempo para iterar creativos ni para optimizar audiencias.",
  },
  {
    icon: PenTool,
    title: "Contenido irregular",
    description:
      "Publicas tres semanas seguidas y luego desapareces un mes. SEO, redes y email compiten contra prioridades operativas que siempre ganan.",
  },
  {
    icon: Target,
    title: "Pipeline sin seguimiento",
    description:
      "Los leads entran, pero nadie los califica a tiempo. El que responde rápido gana; tú respondes tarde y pierdes deals que ya eran tuyos.",
  },
];

const AI_CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Creación de contenido a escala",
    description:
      "Blogs, landings, emails, anuncios, posts y guiones de video generados con modelos ajustados a la voz de tu marca — no genéricos.",
  },
  {
    icon: Wand2,
    title: "Diseño generativo on-brand",
    description:
      "Variantes visuales para cada canal y audiencia en horas, no semanas. A/B testing real con suficiente volumen para aprender.",
  },
  {
    icon: Target,
    title: "Campañas optimizadas 24/7",
    description:
      "Agentes que ajustan copy, presupuesto y segmentación en tiempo real según métricas, no según el calendario de tu agencia.",
  },
  {
    icon: Megaphone,
    title: "Outbound hiper-personalizado",
    description:
      "Secuencias de email y LinkedIn adaptadas al contexto de cada prospecto. Tasa de respuesta real, no plantillas disfrazadas.",
  },
  {
    icon: LineChart,
    title: "Analítica y reporting continuo",
    description:
      "Un dashboard con lo que importa: CAC, LTV, pipeline por canal, ROAS. Cerrado con lectura semanal, no con un PDF trimestral.",
  },
  {
    icon: Rocket,
    title: "Nurturing con SalesHub",
    description:
      "Captación, calificación y seguimiento 24/7 en un CRM integrado. Los leads ya no se enfrían mientras duermes.",
  },
];

const PLANS = [
  {
    name: "MaaS Starter",
    price: "$17,900",
    period: "MXN / mes",
    tagline: "Para PyMEs que quieren presencia consistente.",
    highlight: false,
    features: [
      "8 piezas de contenido al mes (blog, redes, email)",
      "1 campaña activa en Meta o Google",
      "Diseño generativo para 1 canal",
      "Dashboard con métricas base",
      "Reunión de lectura mensual",
    ],
  },
  {
    name: "MaaS Pro",
    price: "$35,800",
    period: "MXN / mes",
    tagline: "Para empresas que quieren crecimiento medible.",
    highlight: true,
    features: [
      "20 piezas de contenido al mes, multi-formato",
      "3 campañas activas + optimización continua",
      "Diseño generativo multi-canal + A/B testing",
      "SalesHub configurado con nurturing y scoring",
      "Outbound personalizado hasta 500 contactos",
      "Dashboard completo + lectura quincenal",
    ],
  },
  {
    name: "MaaS Business",
    price: "$89,600",
    period: "MXN / mes",
    tagline: "Para operaciones con pipeline grande y múltiples mercados.",
    highlight: false,
    features: [
      "Contenido ilimitado dentro del scope definido",
      "Campañas multi-mercado y multi-idioma",
      "Diseño generativo enterprise con guidelines",
      "SalesHub + integraciones a tu stack actual",
      "Outbound hasta 5,000 contactos al mes",
      "Agente dedicado + lectura semanal",
      "Modelos ajustados a tu voz de marca",
    ],
  },
];

const INCLUDED_ALWAYS = [
  "Onboarding guiado y brief estratégico",
  "Acceso al dashboard en tiempo real",
  "Modelos de IA operados por Sintérgica",
  "Soporte por email y chat",
  "Propiedad total de tu contenido y datos",
];

const PROCESS_WEEKS = [
  {
    week: "Semana 1",
    icon: Search,
    title: "Discovery y brief",
    description:
      "Entendemos tu oferta, ICP, canales actuales y métricas. Definimos el plan editorial y los KPIs que mueven tu negocio.",
  },
  {
    week: "Semana 2",
    icon: Wand2,
    title: "Setup y calibración",
    description:
      "Configuramos los agentes a tu voz de marca, conectamos SalesHub, tu CRM y tus plataformas de pauta. Primeras piezas para aprobación.",
  },
  {
    week: "Semana 3",
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Campañas al aire, contenido publicando, outbound en marcha. Dashboard activo con datos en vivo.",
  },
  {
    week: "Semana 4",
    icon: LineChart,
    title: "Lectura y optimización",
    description:
      "Primera reunión de resultados. Ajustes de audiencia, creativos y secuencias basados en datos reales, no en corazonadas.",
  },
];

const INCLUDED = [
  "Contenido creado por agentes + curaduría humana",
  "Diseño generativo con guidelines de tu marca",
  "Gestión y optimización de campañas pagadas",
  "CRM con nurturing y scoring automatizado",
  "Dashboard de métricas y reuniones de lectura",
  "Propiedad de todo el contenido generado",
];

const NOT_INCLUDED = [
  "Presupuesto de pauta (se paga directo a las plataformas)",
  "Licencias de herramientas externas no listadas",
  "Producción de video profesional en locación",
  "Eventos presenciales y activaciones BTL",
  "Desarrollo de sitio web completo (ver Desarrollo a Medida)",
];

const AUDIENCES = [
  {
    icon: Rocket,
    title: "Startups en etapa de crecimiento",
    description:
      "Tienes producto validado y necesitas volumen de leads consistente sin contratar un equipo de marketing completo.",
  },
  {
    icon: Users,
    title: "PyMEs con equipos pequeños",
    description:
      "Tu equipo de marketing son una o dos personas que no alcanzan a cubrir todos los frentes. MaaS se vuelve una extensión operativa.",
  },
  {
    icon: BarChart3,
    title: "Empresas con pipeline B2B",
    description:
      "Ventas consultivas con ciclos largos donde el nurturing, el contenido técnico y el outbound personalizado mueven la aguja.",
  },
];

export function MaaSContent() {
  const shouldReduce = useReducedMotion();

  const probRef = useRef<HTMLDivElement>(null);
  const probInView = useInView(probRef, { once: true, margin: "-80px" });
  const aiRef = useRef<HTMLDivElement>(null);
  const aiInView = useInView(aiRef, { once: true, margin: "-80px" });
  const plansRef = useRef<HTMLDivElement>(null);
  const plansInView = useInView(plansRef, { once: true, margin: "-80px" });
  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const audRef = useRef<HTMLDivElement>(null);
  const audInView = useInView(audRef, { once: true, margin: "-80px" });

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={HERO.badge}
          title={HERO.title}
          subtitle={HERO.subtitle}
          bgImage="/images/121725.jpg"
          bgImageAlt="Marketing as a Service con IA agéntica"
          ctaLabel={HERO.ctaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          ctaSecondaryLabel="Ver planes"
          ctaSecondaryHref="#planes"
          trustSignals={HERO.trustSignals}
        />

        {/* Qué problema resuelve */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Qué problema resuelve"
              title="Marketing que no crece porque el equipo no alcanza."
              subtitle="La mayoría de los equipos de marketing en México no tienen un problema de estrategia. Tienen un problema de ejecución: demasiados canales, muy poca gente, y herramientas que no hablan entre sí."
              centered
            />
            <div ref={probRef} className="mt-14 grid gap-6 md:grid-cols-2">
              {PROBLEMS.map(({ icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={probInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8 transition-colors hover:border-brand-accent/30"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" />
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

        {/* Qué hace la IA aquí */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Qué hace la IA aquí"
              title="Seis capacidades que operan de forma continua."
              subtitle="No es automatización superficial. Son agentes con acceso a tu contexto, tus guidelines y tus métricas."
              centered
            />
            <div ref={aiRef} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {AI_CAPABILITIES.map(({ icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={aiInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Planes */}
        <section id="planes" className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Planes"
              title="Tres niveles. Precio claro. Sin permanencia."
              subtitle="Empiezas donde tu operación lo requiera y escalas cuando los números lo justifiquen."
              centered
            />
            <div ref={plansRef} className="mt-14 grid gap-6 lg:grid-cols-3">
              {PLANS.map((plan, i) => (
                <m.div
                  key={plan.name}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={plansInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    plan.highlight
                      ? "border-brand-accent bg-brand-white dark:bg-brand-deep shadow-xl shadow-brand-accent/10"
                      : "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-brand-accent px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                      Más elegido
                    </span>
                  )}
                  <h3 className="font-proxima text-xl font-bold text-brand-midnight dark:text-brand-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">
                    {plan.tagline}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-proxima text-4xl font-extrabold text-brand-midnight dark:text-brand-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-brand-midnight/50 dark:text-brand-white/50">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-brand-midnight/75 dark:text-brand-white/75">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                    className={`mt-8 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all ${
                      plan.highlight
                        ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-400"
                        : "border border-brand-midnight/15 text-brand-midnight hover:bg-brand-midnight/5 dark:border-brand-white/15 dark:text-brand-white dark:hover:bg-brand-white/5"
                    }`}
                  >
                    Agendar diagnóstico
                  </Link>
                </m.div>
              ))}
            </div>

            <div className="mt-14 rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8">
              <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                Incluido en todos los planes
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {INCLUDED_ALWAYS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-midnight/75 dark:text-brand-white/75">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              badge="Cómo funciona"
              title="Cuatro semanas del contrato a resultados."
              centered
            />
            <div ref={processRef} className="mt-14 flex flex-col gap-4">
              {PROCESS_WEEKS.map(({ week, icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, x: -16 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col gap-5 rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight p-8 sm:flex-row"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                        {title}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        {week}
                      </span>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                      {description}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incluido vs no incluido */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Qué está incluido y qué no"
              title="Transparente desde el primer día."
              centered
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8">
                <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                  Incluido
                </h3>
                <ul className="mt-5 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-midnight/75 dark:text-brand-white/75">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8">
                <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                  No incluido
                </h3>
                <ul className="mt-5 space-y-3">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-midnight/75 dark:text-brand-white/75">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-midnight/40 dark:text-brand-white/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Para quién funciona */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Para quién funciona"
              title="MaaS no es para todos. Es para estos tres casos."
              centered
            />
            <div ref={audRef} className="mt-14 grid gap-6 md:grid-cols-3">
              {AUDIENCES.map(({ icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={audInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight p-8"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre los resultados */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              badge="Sobre los resultados"
              title="Hablamos de rangos, no de garantías."
              subtitle="Lo que sí podemos asegurar: consistencia en la ejecución, datos reales para decidir y un equipo que no se enferma ni renuncia."
              centered
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { metric: "−30 a −60%", label: "Costo por lead" },
                { metric: "+40 a +80%", label: "Tasa de conversión" },
                { metric: "5 a 10×", label: "Volumen de contenido" },
              ].map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8"
                >
                  <div className="font-proxima text-3xl font-extrabold text-brand-accent">
                    {r.metric}
                  </div>
                  <div className="mt-2 text-sm text-brand-midnight/65 dark:text-brand-white/65">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-brand-midnight/55 dark:text-brand-white/55">
              Rangos observados en clientes activos. Resultados dependen del punto de partida, industria y presupuesto de pauta.
            </p>
          </div>
        </section>

        <CTASection
          badge="Siguiente paso"
          title="Acelera tu crecimiento con agentes de marketing"
          subtitle="Una conversación de 45 minutos basta para dimensionar el plan correcto para tu operación."
          ctaLabel="Agendar diagnóstico"
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[
            "45 minutos, sin costo",
            "Sin permanencia",
            "Kickoff en 1 semana",
          ]}
        />
      </>
    </LazyMotion>
  );
}
