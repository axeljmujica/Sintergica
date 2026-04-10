"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";
import type { Locale } from "@/i18n/config";

const T = {
  es: {
    hero: { badge: "ALIANZAS", title: "Alianzas estratégicas", subtitle: "Construimos el ecosistema de IA de LATAM con socios tecnológicos e institucionales que comparten nuestra visión de IA privada, responsable y contextualizada.", bgImageAlt: "Alianzas estratégicas Sintérgica AI" },
    section: { badge: "Alianzas institucionales", title: "Ecosistema de innovación en México", desc: "Colaboración con organismos de la industria, academia y gobierno para impulsar la adopción responsable de IA en México y LATAM." },
    partners: [
      { desc: "Asociación Mexicana de la Industria de Tecnologías de Información. Representación del sector tecnológico ante gobierno y organismos internacionales.", type: "Industria TI" },
      { desc: "Cámara Nacional de la Industria de Transformación. Vinculación con el sector industrial para implementación de IA en manufactura y logística.", type: "Cámara Industrial" },
      { desc: "Convenio de colaboración para investigación aplicada, desarrollo de talento en IA y proyectos conjuntos con Sintérgica Labs.", type: "Academia" },
      { desc: "Consejo Veracruzano de Investigación Científica y Desarrollo Tecnológico. Apoyo institucional al desarrollo de Lattice Na\u2019at en Veracruz.", type: "Ciencia y Tecnología" },
      { desc: "Colaboración en programas de transformación digital para PyMEs mexicanas y proyectos de adopción de IA en sectores productivos.", type: "Gobierno Federal" },
      { desc: "Alineación con la agenda nacional de ciencia, tecnología e innovación para el desarrollo de IA en México.", type: "Gobierno Federal" },
    ],
    cta: { badge: "ÚNETE", title: "¿Quieres ser aliado de Sintérgica?", subtitle: "Universidades, integradores, organismos y empresas que quieran construir el ecosistema de IA de LATAM junto a nosotros.", ctaLabel: "Explorar alianza", trustSignals: ["Respuesta en 24h", "Sin compromiso inicial", "México y LATAM"] },
  },
  en: {
    hero: { badge: "PARTNERSHIPS", title: "Strategic partnerships", subtitle: "We build the LATAM AI ecosystem with technology and institutional partners who share our vision of private, responsible, and contextualized AI.", bgImageAlt: "Sintérgica AI strategic partnerships" },
    section: { badge: "Institutional partnerships", title: "Innovation ecosystem in Mexico", desc: "Collaboration with industry bodies, academia, and government to drive responsible AI adoption in Mexico and LATAM." },
    partners: [
      { desc: "Mexican Association of Information Technology Industries. Technology sector representation before government and international organizations.", type: "IT Industry" },
      { desc: "National Chamber of the Transformation Industry. Linking with the industrial sector for AI implementation in manufacturing and logistics.", type: "Industrial Chamber" },
      { desc: "Collaboration agreement for applied research, AI talent development, and joint projects with Sintérgica Labs.", type: "Academia" },
      { desc: "Veracruz Council for Scientific Research and Technological Development. Institutional support for Lattice Na\u2019at development in Veracruz.", type: "Science & Technology" },
      { desc: "Collaboration on digital transformation programs for Mexican SMEs and AI adoption projects in productive sectors.", type: "Federal Government" },
      { desc: "Alignment with the national science, technology, and innovation agenda for sovereign AI development in Mexico.", type: "Federal Government" },
    ],
    cta: { badge: "JOIN US", title: "Want to become a Sintérgica partner?", subtitle: "Universities, integrators, organizations, and companies who want to build the LATAM AI ecosystem together.", ctaLabel: "Explore partnership", trustSignals: ["Response in 24h", "No initial commitment", "Mexico & LATAM"] },
  },
  "pt-br": {
    hero: { badge: "ALIANÇAS", title: "Alianças estratégicas", subtitle: "Construímos o ecossistema de IA da LATAM com parceiros tecnológicos e institucionais que compartilham nossa visão de IA privada, responsável e contextualizada.", bgImageAlt: "Alianças estratégicas Sintérgica AI" },
    section: { badge: "Alianças institucionais", title: "Ecossistema de inovação no México", desc: "Colaboração com organismos da indústria, academia e governo para impulsionar a adoção responsável de IA no México e LATAM." },
    partners: [
      { desc: "Associação Mexicana da Indústria de Tecnologias da Informação. Representação do setor tecnológico perante governo e organismos internacionais.", type: "Indústria TI" },
      { desc: "Câmara Nacional da Indústria de Transformação. Vinculação com o setor industrial para implementação de IA em manufatura e logística.", type: "Câmara Industrial" },
      { desc: "Convênio de colaboração para pesquisa aplicada, desenvolvimento de talentos em IA e projetos conjuntos com o Sintérgica Labs.", type: "Academia" },
      { desc: "Conselho Veracruzano de Pesquisa Científica e Desenvolvimento Tecnológico. Apoio institucional ao desenvolvimento do Lattice Na\u2019at em Veracruz.", type: "Ciência e Tecnologia" },
      { desc: "Colaboração em programas de transformação digital para PMEs mexicanas e projetos de adoção de IA em setores produtivos.", type: "Governo Federal" },
      { desc: "Alinhamento com a agenda nacional de ciência, tecnologia e inovação para o desenvolvimento de IA no México.", type: "Governo Federal" },
    ],
    cta: { badge: "JUNTE-SE", title: "Quer ser parceiro da Sintérgica?", subtitle: "Universidades, integradores, organismos e empresas que queiram construir o ecossistema de IA da LATAM conosco.", ctaLabel: "Explorar parceria", trustSignals: ["Resposta em 24h", "Sem compromisso inicial", "México e LATAM"] },
  },
} as const;

const INSTITUTIONAL_BASE = [
  { name: "AMITI", logo: "/images/badges/Amiti CMYK.png" },
  { name: "CANACINTRA", logo: "/images/badges/Canacintra.png" },
  { name: "Universidad Veracruzana", logo: "/images/badges/Universidad Veracruzana.png" },
  { name: "COVEICYDET", logo: "/images/badges/coveicydet.png" },
  { name: "Secretaría de Economía", logo: "/images/badges/Logo Secretaria de Economia 2024.png" },
  { name: "Secretaría de Ciencia y Tecnología", logo: "/images/badges/Logo Secretaria Ciencia y Tecnologia 2024.png" },
];

export function AlianzasContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const instRef = useRef<HTMLDivElement>(null);
  const instInView = useInView(instRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

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

        {/* Institutional Partners */}
        <section className="bg-brand-surface/40 dark:bg-brand-navy/40 py-24 px-4 sm:px-6 lg:px-8" aria-label={t.section.badge}>
          <div className="mx-auto max-w-6xl">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={instInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
            >
              <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {t.section.badge}
              </span>
              <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
                {t.section.title}
              </h2>
              <p className="mt-4 max-w-xl text-brand-midnight/60 dark:text-brand-white/60">
                {t.section.desc}
              </p>
            </m.div>

            <div ref={instRef} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INSTITUTIONAL_BASE.map((inst, i) => {
                const content = t.partners[i];
                return (
                  <m.div
                    key={inst.name}
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    animate={instInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.08 }}
                    className="flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface/50 dark:bg-brand-navy/50 p-6"
                  >
                    {/* Logo */}
                    <div className="flex h-14 items-center">
                      <Image
                        src={inst.logo}
                        alt={inst.name}
                        width={120}
                        height={48}
                        className="h-10 w-auto max-w-[120px] object-contain brightness-0 invert opacity-60 transition-opacity hover:opacity-90"
                      />
                    </div>

                    {/* Type badge + name */}
                    <div className="mt-4">
                      <span className="rounded px-2 py-0.5 text-xs font-medium bg-brand-accent/10 text-brand-accent">
                        {content.type}
                      </span>
                      <p className="mt-2 text-sm font-semibold text-brand-midnight dark:text-brand-white">
                        {inst.name}
                      </p>
                    </div>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                      {content.desc}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

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
