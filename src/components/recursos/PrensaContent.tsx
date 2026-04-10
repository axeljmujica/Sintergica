"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { FileText, Download, Newspaper, Mail } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";

export function PrensaContent() {
  const boilerRef = useRef<HTMLDivElement>(null);
  const boilerInView = useInView(boilerRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <>
      <PageHero
        badge="PRENSA"
        title="Sala de prensa"
        subtitle="Comunicados oficiales, kit de medios y contacto de prensa de Sintérgica AI."
      />

      {/* Boilerplate */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <m.div
            ref={boilerRef}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={boilerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-8"
          >
            <h2 className="font-proxima text-xl font-bold text-brand-midnight dark:text-brand-white mb-4">
              Acerca de Sintérgica AI
            </h2>
            <p className="text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
              Sintérgica AI es un laboratorio mexicano de inteligencia artificial que diseña, implementa y opera Lattice: un ecosistema de IA privada con modelos especializados, agentes autónomos y gobernanza verificable para sectores regulados de México y Latinoamérica. Fundada en México, la empresa lanzó Lattice Na&apos;at, el primer modelo de IA con 120 mil millones de parámetros desarrollado en el país, diseñado con contexto normativo y cultural específico de la región. Sintérgica AI opera como laboratorio de investigación aplicada, consultora de IA y transformación digital, y constructora de software empresarial.
            </p>
          </m.div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-brand-surface dark:bg-brand-deep py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
              <Download className="h-6 w-6 text-brand-accent" />
            </div>
            <h3 className="mt-4 text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
              Kit de prensa
            </h3>
            <p className="mt-2 text-sm text-brand-midnight/50 dark:text-brand-white/50">
              Logos, fotos, boilerplate oficial y lineamientos de marca.
            </p>
            <p className="mt-4 text-xs text-brand-midnight/35 dark:text-brand-white/35">
              Disponible próximamente
            </p>
          </div>

          <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
              <FileText className="h-6 w-6 text-brand-accent" />
            </div>
            <h3 className="mt-4 text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
              Comunicados
            </h3>
            <p className="mt-2 text-sm text-brand-midnight/50 dark:text-brand-white/50">
              Comunicados oficiales y notas de prensa.
            </p>
            <p className="mt-4 text-xs text-brand-midnight/35 dark:text-brand-white/35">
              Próximamente
            </p>
          </div>

          <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
              <Newspaper className="h-6 w-6 text-brand-accent" />
            </div>
            <h3 className="mt-4 text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
              Menciones en medios
            </h3>
            <p className="mt-2 text-sm text-brand-midnight/50 dark:text-brand-white/50">
              Cobertura de medios y publicaciones relevantes.
            </p>
            <p className="mt-4 text-xs text-brand-midnight/35 dark:text-brand-white/35">
              Próximamente
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10">
            <Mail className="h-7 w-7 text-brand-accent" />
          </div>
          <h2 className="mt-4 font-proxima text-xl font-bold text-brand-midnight dark:text-brand-white">
            Contacto de prensa
          </h2>
          <a
            href="mailto:prensa@sintergica.ai"
            className="mt-2 inline-block text-brand-accent transition-colors hover:text-brand-accent-light"
          >
            prensa@sintergica.ai
          </a>
        </div>
      </section>

      <CTASection
        title="¿Eres medio de comunicación?"
        subtitle="Escríbenos para entrevistas, datos o declaraciones sobre IA en México y LATAM."
        ctaLabel="Contactar prensa"
        ctaHref="mailto:prensa@sintergica.ai"
      />
    </>
    </LazyMotion>
  );
}
