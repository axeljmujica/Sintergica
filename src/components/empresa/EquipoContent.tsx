"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    hero: { badge: "EQUIPO", title: "El equipo que está construyendo la IA de LATAM", subtitle: "Líderes, ingenieros y estratégicos comprometidos con llevar IA privada de frontera a México y Latinoamérica.", bgImageAlt: "Equipo C-Level Sintérgica AI" },
    section: { badge: "Liderazgo", title: "Equipo C-Level", desc: "Seis líderes con experiencia en IA, tecnología y negocios en sectores regulados de México y LATAM." },
    bios: [
      "Emprendedor en serie. Máster en Ciencia de Datos. Lidera la Comisión de Tecnología de CANACINTRA Región Golfo. Miembro del Comité de IA de AMITI.",
      "Arquitecto de software ex-IBM. Experto en sistemas seguros y escalables. Responsable de la arquitectura técnica de Lattice.",
      "Investigador experto en NLP. Lidera Sintérgica Labs. Responsable de traducir contexto local en modelos SLM de alto rendimiento.",
      "Experto en gestión gubernamental. Navega el ciclo de ventas y compliance en sector público.",
      "Experiencia en logtech y foodtech. Responsable de la coordinación ejecutiva y operación estratégica del equipo.",
      "Comunicóloga con amplia experiencia en relaciones públicas y campañas digitales. Responsable de la experiencia del cliente, estrategia de comunicación y relaciones institucionales.",
    ],
    roles: ["Director General", "Director de Tecnología", "Director de Ciencia", "VP Relaciones Interinstitucionales", "Jefe de Staff", "Directora de Éxito al Cliente"],
    cta: { title: "¿Listo para llevar IA privada a tu organización?", subtitle: "Agenda un Diagnóstico Inteligente. Analizamos tus procesos, identificamos los casos de uso con mayor impacto y entregamos un plan de implementación con ROI estimado — sin permanencia.", ctaLabel: "Solicitar Diagnóstico", trustSignals: ["Sin permanencia", "Demo con tus datos reales", "ROI estimado en 1 semana"] },
  },
  en: {
    hero: { badge: "TEAM", title: "The team building LATAM's AI", subtitle: "Leaders, engineers, and strategists committed to bringing frontier private AI to Mexico and Latin America.", bgImageAlt: "Sintérgica AI C-Level Team" },
    section: { badge: "Leadership", title: "C-Level Team", desc: "Six leaders with experience in AI, technology, and business in regulated sectors across Mexico and LATAM." },
    bios: [
      "Serial entrepreneur. Master's in Data Science. Leads CANACINTRA Gulf Region Technology Commission. Member of AMITI's AI Committee.",
      "Software architect, ex-IBM. Expert in secure and scalable systems. Responsible for Lattice's technical architecture.",
      "NLP research expert. Leads Sintérgica Labs. Responsible for translating local context into high-performance SLM models.",
      "Expert in government management. Navigates the sales cycle and compliance in the public sector.",
      "Experience in logtech and foodtech. Responsible for executive coordination and strategic team operations.",
      "Communications specialist with extensive experience in PR and digital campaigns. Responsible for customer experience, communication strategy, and institutional relations.",
    ],
    roles: ["Chief Executive Officer", "Chief Technology Officer", "Chief Science Officer", "VP Institutional Relations", "Chief of Staff", "Chief Customer Officer"],
    cta: { title: "Ready to bring private AI to your organization?", subtitle: "Book a Smart Diagnosis. We analyze your processes, identify the highest-impact use cases, and deliver an implementation plan with estimated ROI — no lock-in.", ctaLabel: "Request Diagnosis", trustSignals: ["No lock-in", "Demo with your real data", "Estimated ROI in 1 week"] },
  },
  "pt-br": {
    hero: { badge: "EQUIPE", title: "A equipe que está construindo a IA da LATAM", subtitle: "Líderes, engenheiros e estrategistas comprometidos em levar IA privada de fronteira ao México e à América Latina.", bgImageAlt: "Equipe C-Level Sintérgica AI" },
    section: { badge: "Liderança", title: "Equipe C-Level", desc: "Seis líderes com experiência em IA, tecnologia e negócios em setores regulados do México e LATAM." },
    bios: [
      "Empreendedor em série. Mestre em Ciência de Dados. Lidera a Comissão de Tecnologia da CANACINTRA Região Golfo. Membro do Comitê de IA da AMITI.",
      "Arquiteto de software ex-IBM. Especialista em sistemas seguros e escaláveis. Responsável pela arquitetura técnica do Lattice.",
      "Pesquisador especialista em NLP. Lidera o Sintérgica Labs. Responsável por traduzir contexto local em modelos SLM de alto desempenho.",
      "Especialista em gestão governamental. Navega o ciclo de vendas e compliance no setor público.",
      "Experiência em logtech e foodtech. Responsável pela coordenação executiva e operação estratégica da equipe.",
      "Comunicóloga com ampla experiência em relações públicas e campanhas digitais. Responsável pela experiência do cliente, estratégia de comunicação e relações institucionais.",
    ],
    roles: ["Diretor Executivo", "Diretor de Tecnologia", "Diretor de Ciência", "VP Relações Interinstitucionais", "Diretor de Gabinete", "Diretora de Clientes"],
    cta: { title: "Pronto para levar IA privada à sua organização?", subtitle: "Agende um Diagnóstico Inteligente. Analisamos seus processos, identificamos os casos de uso com maior impacto e entregamos um plano de implementação com ROI estimado — sem permanência.", ctaLabel: "Solicitar Diagnóstico", trustSignals: ["Sem permanência", "Demo com seus dados reais", "ROI estimado em 1 semana"] },
  },
} as const;

const C_LEVEL_BASE = [
  { name: "Axel Javier Jara Mújica", initials: "AJ", avatarBg: "bg-brand-accent/15", avatarText: "text-brand-accent", border: "border-brand-accent/25", roleBadge: "text-brand-accent" },
  { name: "Edson Manuel Carballo Vera", initials: "EC", avatarBg: "bg-violet-500/15", avatarText: "text-violet-400", border: "border-violet-500/25", roleBadge: "text-violet-400" },
  { name: "José Clemente Hernández Hernández", initials: "JC", avatarBg: "bg-sky-500/15", avatarText: "text-sky-400", border: "border-sky-500/25", roleBadge: "text-sky-400" },
  { name: "Axel Jesús López Flores", initials: "AL", avatarBg: "bg-emerald-500/15", avatarText: "text-emerald-400", border: "border-emerald-500/25", roleBadge: "text-emerald-400" },
  { name: "Lauro Joseph Martínez Lepe", initials: "LM", avatarBg: "bg-amber-500/15", avatarText: "text-amber-400", border: "border-amber-500/25", roleBadge: "text-amber-400" },
  { name: "Alejandra Cano", initials: "AC", avatarBg: "bg-pink-500/15", avatarText: "text-pink-400", border: "border-pink-500/25", roleBadge: "text-pink-400" },
];

export function EquipoContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          bgImage="/images/ai-cloud-concept-with-lit-brain.jpg"
          bgImageAlt={t.hero.bgImageAlt}
        />

        {/* C-Level grid */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8" aria-label={t.section.badge}>
          <div className="mx-auto max-w-6xl">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {t.section.badge}
              </span>
              <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
                {t.section.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-brand-midnight/60 dark:text-brand-white/60">
                {t.section.desc}
              </p>
            </m.div>

            <div
              ref={gridRef}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {C_LEVEL_BASE.map((member, i) => (
                <m.div
                  key={member.name}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.09 }}
                  className={`rounded-2xl border bg-brand-surface/50 dark:bg-brand-navy/50 p-6 ${member.border}`}
                >
                  {/* Avatar */}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold ${member.avatarBg} ${member.avatarText}`}>
                    {member.initials}
                  </div>

                  {/* Name + role */}
                  <div className="mt-4">
                    <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                      {member.name}
                    </h3>
                    <p className={`text-xs font-semibold uppercase tracking-wider mt-0.5 ${member.roleBadge}`}>
                      {t.roles[i]}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                    {t.bios[i]}
                  </p>
                </m.div>
              ))}
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
