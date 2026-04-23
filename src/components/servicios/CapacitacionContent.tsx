"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Users, Settings, BarChart3, Monitor, Video, Presentation, Compass, Award } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    hero: {
      badge: "CAPACITACIÓN EMPRESARIAL EN IA",
      title: "Formación diseñada a la medida de tu organización",
      subtitle: "Programas de formación diseñados para que las organizaciones no solo usen IA, sino que la entiendan, la dominen y la aprovechen de forma ética y segura, con enfoque en el contexto de México y Latinoamérica.",
      bgImageAlt: "Equipo recibiendo capacitación en IA",
      ctaLabel: "Solicitar taller corporativo",
      trustSignals: ["Capacitaciones a la medida", "Talleres in-company", "Certificación interna"],
    },
    levels: {
      badge: "TEMARIOS DISPONIBLES",
      title: "Programas especializados por nivel de uso",
      subtitle: "Entendemos que cada miembro de tu equipo necesita un tipo diferente de capacitación. Diseñamos programas a la medida del rol, nivel técnico y objetivos de cada audiencia.",
      items: [
        { title: "Nivel Directivo / C-Level", temario: ["Fundamentos de IA para Ejecutivos", "Impacto de la IA en tu industria", "Gobernanza de IA"] },
        { title: "Nivel Operativo", temario: ["Herramientas de IA", "Uso ético, seguro y responsable de herramientas", "Ingeniería de prompts avanzada"] },
        { title: "Nivel Técnico", temario: ["Anonimización de datos", "Ajuste fino (Fine-tuning)", "Despliegue y mantenimiento de modelos"] },
      ],
    },
    formats: {
      badge: "NUESTROS FORMATOS",
      title: "Acompañamiento a tu medida",
      subtitle: "Nuestras capacitaciones a la medida se adaptan a tus instalaciones, plataforma y disponibilidad. El objetivo es que la organización gane autonomía progresiva.",
      items: [
        { label: "Talleres presenciales", detail: "Medio día o día completo" },
        { label: "Sesiones virtuales", detail: "Bloques de 2 a 4 horas" },
        { label: "Programas in-company", detail: "Secuencia de varias sesiones" },
        { label: "Conferencias y keynotes", detail: "Para eventos corporativos" },
      ],
    },
    cta: {
      title: "¿Buscas una capacitación privada?",
      subtitle: "Diseñamos talleres, masterclasses y programas in-company adaptados a los retos de tu industria. Te ayudamos a preparar a tu equipo para la Inteligencia Artificial.",
      ctaLabel: "Solicitar taller corporativo",
      trustSignals: ["Programas a la medida", "Instructores expertos", "Casos de uso reales"],
    },
  },
  en: {
    hero: {
      badge: "ENTERPRISE AI TRAINING",
      title: "Training designed to fit your organization",
      subtitle: "Training programs designed so organizations don't just use AI, but understand it, master it, and leverage it ethically and securely, with a focus on the Mexico and Latin America context.",
      bgImageAlt: "Team receiving AI training",
      ctaLabel: "Request corporate workshop",
      trustSignals: ["Custom training", "In-company workshops", "Internal certification"],
    },
    levels: {
      badge: "AVAILABLE CURRICULA",
      title: "Specialized programs by usage level",
      subtitle: "We understand that each team member needs a different type of training. We design programs tailored to the role, technical level, and objectives of each audience.",
      items: [
        { title: "Executive / C-Level", temario: ["AI Fundamentals for Executives", "AI Impact on your industry", "AI Governance"] },
        { title: "Operational Level", temario: ["AI Tools", "Ethical, secure, and responsible tool usage", "Advanced prompt engineering"] },
        { title: "Technical Level", temario: ["Data anonymization", "Fine-tuning", "Model deployment and maintenance"] },
      ],
    },
    formats: {
      badge: "OUR FORMATS",
      title: "Support tailored to you",
      subtitle: "Our custom training sessions adapt to your facilities, platform, and availability. The goal is for the organization to gain progressive autonomy.",
      items: [
        { label: "In-person workshops", detail: "Half day or full day" },
        { label: "Virtual sessions", detail: "2 to 4-hour blocks" },
        { label: "In-company programs", detail: "Multi-session sequence" },
        { label: "Conferences and keynotes", detail: "For corporate events" },
      ],
    },
    cta: {
      title: "Looking for private training?",
      subtitle: "We design workshops, masterclasses, and in-company programs tailored to the challenges of your industry. We help you prepare your team for Artificial Intelligence.",
      ctaLabel: "Request corporate workshop",
      trustSignals: ["Custom programs", "Expert instructors", "Real use cases"],
    },
  },
  "pt-br": {
    hero: {
      badge: "CAPACITAÇÃO EMPRESARIAL EM IA",
      title: "Formação projetada sob medida para sua organização",
      subtitle: "Programas de formação projetados para que as organizações não apenas usem IA, mas a entendam, dominem e aproveitem de forma ética e segura, com foco no contexto do México e América Latina.",
      bgImageAlt: "Equipe recebendo capacitação em IA",
      ctaLabel: "Solicitar workshop corporativo",
      trustSignals: ["Capacitações sob medida", "Workshops in-company", "Certificação interna"],
    },
    levels: {
      badge: "PROGRAMAS DISPONÍVEIS",
      title: "Programas especializados por nível de uso",
      subtitle: "Entendemos que cada membro da sua equipe precisa de um tipo diferente de capacitação. Projetamos programas sob medida para o papel, nível técnico e objetivos de cada audiência.",
      items: [
        { title: "Nível Diretivo / C-Level", temario: ["Fundamentos de IA para Executivos", "Impacto da IA na sua indústria", "Governança de IA"] },
        { title: "Nível Operacional", temario: ["Ferramentas de IA", "Uso ético, seguro e responsável de ferramentas", "Engenharia de prompts avançada"] },
        { title: "Nível Técnico", temario: ["Anonimização de dados", "Ajuste fino (Fine-tuning)", "Implantação e manutenção de modelos"] },
      ],
    },
    formats: {
      badge: "NOSSOS FORMATOS",
      title: "Acompanhamento sob medida",
      subtitle: "Nossas capacitações sob medida se adaptam às suas instalações, plataforma e disponibilidade. O objetivo é que a organização ganhe autonomia progressiva.",
      items: [
        { label: "Workshops presenciais", detail: "Meio dia ou dia inteiro" },
        { label: "Sessões virtuais", detail: "Blocos de 2 a 4 horas" },
        { label: "Programas in-company", detail: "Sequência de várias sessões" },
        { label: "Conferências e keynotes", detail: "Para eventos corporativos" },
      ],
    },
    cta: {
      title: "Procura uma capacitação privada?",
      subtitle: "Projetamos workshops, masterclasses e programas in-company adaptados aos desafios da sua indústria. Ajudamos a preparar sua equipe para a Inteligência Artificial.",
      ctaLabel: "Solicitar workshop corporativo",
      trustSignals: ["Programas sob medida", "Instrutores especialistas", "Casos de uso reais"],
    },
  },
} as const;

const NIVELES_BASE = [
  { icon: BarChart3 },
  { icon: Users },
  { icon: Monitor },
];

const FORMATOS_BASE = [
  { icon: Presentation },
  { icon: Video },
  { icon: Compass },
  { icon: Award },
];

export function CapacitacionContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const lvlRef = useRef<HTMLDivElement>(null);
  const lvlInView = useInView(lvlRef, { once: true, margin: "-60px" });
  const fmtRef = useRef<HTMLDivElement>(null);
  const fmtInView = useInView(fmtRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          bgImage="/images/Industrial-Logistica/factory-workshop-interior-machines-glass-production-background.jpg"
          bgImageAlt={t.hero.bgImageAlt}
          ctaLabel={t.hero.ctaLabel}
          ctaHref="/diagnostico"
          trustSignals={[...t.hero.trustSignals]}
        />

        {/* Niveles y Temarios */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.levels.badge}
              title={t.levels.title}
              subtitle={t.levels.subtitle}
              centered
            />
            <div ref={lvlRef} className="mt-12 grid gap-6 md:grid-cols-3">
              {NIVELES_BASE.map((nivel, i) => {
                const Icon = nivel.icon;
                const item = t.levels.items[i];
                return (
                  <m.div
                    key={item.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={lvlInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : 0.1 + i * 0.1 }}
                    className="flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-7"
                  >
                    <div className="mb-6 flex items-center gap-4 border-b border-brand-midnight/10 dark:border-brand-white/10 pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                        <Icon className="h-6 w-6 text-brand-accent" />
                      </div>
                      <h3 className="text-[18px] font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.title}</h3>
                    </div>
                    <ul className="flex flex-col gap-4 flex-1">
                      {item.temario.map((topic, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                          <span className="text-[14px] text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formatos */}
        <section className="bg-brand-surface dark:bg-brand-deep py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
            <div className="h-[400px] w-[800px] rounded-full bg-brand-accent blur-[150px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl">
            <SectionHeader
              badge={t.formats.badge}
              title={t.formats.title}
              subtitle={t.formats.subtitle}
              centered
            />
            <div
              ref={fmtRef}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {FORMATOS_BASE.map((f, i) => {
                const Icon = f.icon;
                const item = t.formats.items[i];
                return (
                  <m.div
                    key={item.label}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={fmtInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.08 }}
                    className="group flex flex-col items-center gap-4 rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-8 text-center transition-all hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/5 hover:bg-brand-white dark:hover:bg-brand-midnight"
                  >
                    <m.div
                      whileHover={shouldReduce ? {} : { scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/10 will-change-transform"
                    >
                      <Icon className="h-7 w-7 text-brand-accent" />
                    </m.div>
                    <p className="text-[15px] font-semibold text-brand-midnight dark:text-brand-white">{item.label}</p>
                    <span className="text-[13px] text-brand-midnight/50 dark:text-brand-white/50">{item.detail}</span>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref="/diagnostico"
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
