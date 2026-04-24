"use client";

import { LazyMotion, domAnimation } from "motion/react";
import { BellRing, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";

export function EventosContent() {
  return (
    <LazyMotion features={domAnimation}>
    <>
      <PageHero
        badge="AGENDA"
        title="Nuestros eventos"
        subtitle="Explora hackathons de desarrollo, sesiones de investigación del laboratorio y masterclasses para transformar tu organización con Inteligencia Artificial."
      />

      <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-12">
          <SectionHeader
            badge="EN VIVO"
            title="Próximas sesiones y actividades"
            subtitle="Revisa nuestro calendario oficial y asegura tu lugar en nuestras próximas actividades abiertas al ecosistema tecnológico."
            centered
          />
          <div className="w-full relative rounded-2xl overflow-hidden border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep shadow-2xl p-2 sm:p-4">
            <iframe
              src="https://luma.com/embed/calendar/cal-3dgDvCGmsgALV4m/events"
              width="100%"
              height="650"
              frameBorder="0"
              className="rounded-xl bg-transparent"
              style={{ border: "none" }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </section>

      {/* Luma Subscription Section */}
      <section className="relative overflow-hidden bg-[#0A0F1C] py-24 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/15 blur-[130px]" />
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-violet-600/12 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-brand-white/10 bg-gradient-to-b from-brand-white/[0.04] to-brand-white/[0.01] p-8 sm:p-12 md:p-14 backdrop-blur-sm shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <Sparkles className="h-3.5 w-3.5" />
                Suscripción gratuita
              </span>

              <div className="relative mt-8">
                <div className="absolute inset-0 rounded-2xl bg-brand-accent/30 blur-2xl" aria-hidden="true" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-brand-accent/30 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 shadow-lg shadow-brand-accent/20">
                  <BellRing className="h-9 w-9 text-brand-accent" />
                </div>
              </div>

              <h2 className="mt-8 font-proxima text-3xl font-extrabold leading-tight tracking-tight text-brand-white sm:text-4xl md:text-5xl text-balance">
                No te pierdas ninguna sesión
              </h2>
              <p className="mt-5 max-w-xl text-base text-brand-white sm:text-lg">
                Suscríbete a nuestro calendario oficial en Luma. Sé el primero en enterarte sobre nuevos hackathons, seminarios de investigación técnica y masterclasses corporativas.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                <a
                  href="https://luma.com/sintergica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-accent px-8 text-sm font-bold text-white shadow-lg shadow-brand-accent/30 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/50"
                >
                  Seguir a Sintérgica en Luma
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-brand-white">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-brand-accent" />
                  Recordatorios automáticos
                </span>
                <span className="inline-flex items-center gap-2">
                  <BellRing className="h-3.5 w-3.5 text-brand-accent" />
                  Acceso prioritario
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                  100% gratuito
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Buscas una capacitación privada?"
        subtitle="Diseñamos talleres, masterclasses y programas de inmersión en Inteligencia Artificial adaptados a los retos específicos de tu equipo y sector empresarial."
        ctaLabel="Solicitar taller corporativo"
        ctaHref="/servicios/capacitacion"
      />
    </>
    </LazyMotion>
  );
}
