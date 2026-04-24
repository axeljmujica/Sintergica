"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

type ModelItem = {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  linkText: string;
  linkHref: string;
};

const MODELS: ModelItem[] = [
  {
    id: "naat",
    title: "Lattice Na'at",
    subtitle: "Modelo de razonamiento profundo y propósito general, especializado para México y LATAM.",
    features: [
      "Corpus de español mexicano, normativa local y contexto regulatorio — no traducción desde el inglés.",
      "Razonamiento complejo, síntesis documental y análisis estructurado.",
      "Open source con atribución: descargable, auditable, sin licencia propietaria.",
    ],
    linkText: "Conocer Lattice Na'at",
    linkHref: "/investigacion/lattice-naat",
  },
  {
    id: "seeb",
    title: "Lattice Séeb",
    subtitle: "Small Language Models especializados por vertical industrial.",
    features: [
      "Seis verticales: Legal, Gobierno, Logística y Comercio Exterior, Energía, Salud y Financiero.",
      "Rendimiento superior al de modelos generales en tareas específicas de su vertical.",
      "Despliegue en CPU u on-premise: latencia baja, costo predecible, sin dependencia de nube externa.",
    ],
    linkText: "Ver modelos Séeb",
    linkHref: "/soluciones/lattice-seeb",
  },
];

export function ModelFeatures() {
  const [activeModel, setActiveModel] = useState<string>(MODELS[0].id);

  return (
    <LazyMotion features={domAnimation}>
      {/* Usando fondo oscuro y min-h-screen para centrar el contenido verticalmente y dar un aspecto inmersivo */}
      <section className="bg-[#0A0F1C] lg:min-h-[100svh] flex items-center py-16 lg:py-12 relative overflow-hidden">
        {/* Glow de fondo para integrar la imagen conceptual */}
        <div className="absolute top-1/4 left-0 w-full md:w-1/2 h-1/2 bg-brand-accent/20 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="w-full mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="mb-12 md:mb-14">
            <h2 className="font-proxima text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Modelos de IA que <br className="hidden md:block" />
              <span className="text-brand-accent">entienden tu industria.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-white/70 leading-relaxed font-medium">
              Modelos entrenados con el lenguaje, la regulación y el contexto de las industrias que operan en México y LATAM.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
            {/* Left: Neural Network Concept Image */}
            <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden bg-brand-deep relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group h-[350px] lg:h-auto lg:min-h-[480px]">
              <Image
                src="/images/naat/85.jpg"
                alt="Lattice Na'at — modelo fundacional para México y LATAM"
                fill
                loading="lazy"
                className="object-cover object-center transition-transform duration-1500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
            </div>

            {/* Right: Accordion & CTA */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex flex-col">
                {MODELS.map((model) => {
                  const isActive = activeModel === model.id;
                  
                  return (
                    <div 
                      key={model.id} 
                      className="border-b border-white/10 last:border-0"
                    >
                      <button
                        onClick={() => setActiveModel(model.id)}
                        className="w-full flex items-center justify-between py-5 lg:py-6 text-left group transition-all"
                        aria-expanded={isActive}
                      >
                        <h3 className={`font-proxima text-2xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                          {model.title}
                        </h3>
                        <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${isActive ? 'text-brand-accent rotate-180' : 'text-white/30 group-hover:text-white/60'}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <m.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 pr-4">
                              <p className="text-[15px] md:text-base text-white/80 mb-6 font-medium leading-relaxed">
                                {model.subtitle}
                              </p>
                              
                              <ul className="space-y-4 mb-6">
                                {model.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                      <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                                    </div>
                                    <span className="text-[15px] leading-relaxed text-white/70">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                              
                              <Link 
                                href={model.linkHref}
                                className="inline-flex items-center gap-3 text-[15px] font-bold text-white hover:text-brand-accent transition-colors group relative"
                              >
                                <span>{model.linkText}</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
                              </Link>
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Fine Tuning CTA - Glassmorphic Card */}
              <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-[1.5rem] p-6 lg:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col gap-3 relative z-10 flex-1">
                  <h4 className="font-proxima text-xl md:text-2xl font-bold text-white tracking-tight">
                    Fine-Tuning
                  </h4>
                  <p className="text-[15px] text-white/70 leading-relaxed text-balance">
                    Entrenamos Séeb con los datos de tu organización. El modelo resultante es de uso exclusivo para ti — ningún otro cliente lo comparte ni lo usa. El entrenamiento ocurre en ambiente aislado; el modelo opera dentro de Lattice con acceso controlado por tu equipo.
                  </p>
                </div>
                <Link
                  href="/servicios/fine-tuning"
                  className="shrink-0 relative z-10 flex items-center justify-center rounded-full bg-blue-600 text-white px-8 py-4 text-[15px] font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all hover:-translate-y-1 w-full md:w-auto mt-4 md:mt-0"
                >
                  Conoce más
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
