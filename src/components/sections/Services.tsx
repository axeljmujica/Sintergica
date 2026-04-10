"use client";

import { ArrowRight, Hexagon, Globe, Layers } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { LazyMotion, domAnimation, m } from "motion/react";

const SERVICES = [
  {
    icon: Hexagon,
    title: "Consultoría",
    description: "Analizamos tus procesos críticos y trazamos un roadmap estratégico para integrar Inteligencia Artificial con alto retorno de inversión.",
    link: "/servicios/consultoria",
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 25, ease: "linear" },
    echoAnimation: { rotate: [360, 0], scale: [1, 1.3, 1] },
    echoTransition: { repeat: Infinity, duration: 15, ease: "easeInOut" }
  },
  {
    icon: Globe,
    title: "Implementación",
    description: "Desplegamos soluciones de IA seguras en tu propia infraestructura (On-Premise) o en nube privada, garantizando la gobernanza de tus datos.",
    link: "/servicios/implementacion",
    animation: { rotateY: [0, 360], y: [0, -8, 0] },
    transition: { repeat: Infinity, duration: 12, ease: "linear" },
    echoAnimation: { rotateZ: [0, 90, 0], rotateX: [0, 60, 0], scale: [1, 1.15, 1] },
    echoTransition: { repeat: Infinity, duration: 18, ease: "easeInOut" }
  },
  {
    icon: Layers,
    title: "Capacitación",
    description: "Acompañamos a tu equipo en la adopción tecnológica mediante formación especializada para liderar la transformación digital desde adentro.",
    link: "/servicios/capacitacion",
    animation: { y: [0, -15, 0], rotateX: [0, 15, 0] },
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
    echoAnimation: { y: [0, 10, 0], rotateY: [0, 180, 360], scale: [1, 1.2, 1] },
    echoTransition: { repeat: Infinity, duration: 10, ease: "linear" }
  },
];

export function Services() {
  const dictionary = useDictionary();

  // If there are dictionary keys for this section later, we can map them here.
  // For now using the requested static text as default fallback.
  // const servicesDict = dictionary.services || {};

  return (
    <LazyMotion features={domAnimation}>
    <section 
      className="bg-brand-white pt-4 pb-24 md:pt-12 md:pb-32"
      aria-label="Servicios"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main Title */}
        <div className="mb-20 text-center">
          <h2 className="font-proxima text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-midnight text-balance">
            IA aplicada. Flexible. Diseñada para tu organización.
          </h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="flex flex-col group">
                {/* Thin Stroke Icon with Continuous Animation */}
                <div className="mb-8 relative flex items-center justify-center w-20 h-20" style={{ perspective: "1000px" }}>
                  {/* Holographic echo layer behind */}
                  <m.div
                    animate={service.echoAnimation as any}
                    transition={service.echoTransition as any}
                    className="absolute inset-0 text-brand-accent opacity-20 dark:opacity-30 blur-[1px]"
                  >
                    <Icon strokeWidth={1} className="h-full w-full" />
                  </m.div>

                  {/* Main solid icon */}
                  <m.div
                    animate={service.animation as any}
                    transition={service.transition as any}
                    className="relative z-10 w-full h-full"
                  >
                    <Icon 
                      strokeWidth={1} 
                      className="h-full w-full text-brand-midnight/90 dark:text-brand-white/90" 
                    />
                  </m.div>
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-proxima font-semibold text-brand-midnight">
                  {service.title}
                </h3>
                
                <p className="mb-8 flex-1 text-[0.95rem] leading-relaxed text-brand-midnight/70">
                  {service.description}
                </p>

                {/* Link */}
                <Link 
                  href={service.link}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand-midnight transition-colors hover:text-brand-accent group-hover:gap-3 group-hover:text-brand-accent duration-300"
                >
                  Saber más
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
