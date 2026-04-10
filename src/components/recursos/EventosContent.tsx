"use client";

import { LazyMotion, domAnimation } from "motion/react";
import { BellRing } from "lucide-react";
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
      <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20" aria-hidden="true">
          <div className="h-[400px] w-[600px] rounded-full bg-brand-accent blur-[120px]" />
        </div>
        
        <div className="mx-auto max-w-3xl relative z-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-accent/10 mb-8 border border-brand-accent/20">
            <BellRing className="h-8 w-8 text-brand-accent" />
          </div>
          <SectionHeader
            title="No te pierdas ninguna sesión"
            subtitle="Suscríbete a nuestro calendario oficial en Luma. Sé el primero en enterarte sobre nuevos hackathons, seminarios de investigación técnica y masterclasses corporativas."
            centered
          />
          <div className="mt-10">
            <a
              href="https://luma.com/sintergica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-transparent bg-brand-white dark:bg-brand-midnight px-8 text-sm font-bold text-brand-midnight shadow-lg transition-all hover:scale-105 hover:bg-brand-surface"
            >
              Seguir a Sintérgica en Luma
              <BellRing className="h-4 w-4" />
            </a>
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
