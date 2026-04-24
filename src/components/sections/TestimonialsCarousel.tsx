"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  id: string;
  company: string;
  logoSrc: string;
  logoAlt: string;
  sector: string;
  quote: string;
  linkText: string;
  linkHref: string;
  image: string;
  altText: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "swivel-energy",
    company: "Swivel Energy",
    logoSrc: "/images/clientes/SWIVEL-ENERGY-BRANDING-NV-3.png",
    logoAlt: "Logo de Swivel Energy",
    sector: "Energía Solar",
    quote: "Sintérgica nos construyó un cotizador y un CRM con IA que cambió cómo vendemos. Lo que antes tomaba días en hojas de cálculo, hoy lo cerramos en minutos —con propuestas técnicas precisas y seguimiento automático a cada prospecto.",
    linkText: "Conoce el caso",
    linkHref: "#",
    image: "/images/industries/seeb-energia-2.jpg",
    altText: "Planta de paneles solares",
  },
  {
    id: "sj-medica",
    company: "SJ Médica Estética",
    logoSrc: "/images/clientes/SJ.png",
    logoAlt: "Logo de SJ Médica Estética",
    sector: "Salud · Medicina estética",
    quote: "Los agentes de Sintérgica atienden a nuestros pacientes, agendan y confirman citas sin que alguien del equipo levante el teléfono. Todo conectado a un sistema de gestión hospitalaria hecho a la medida —nuestra operación dejó de depender de la disponibilidad humana.",
    linkText: "Conoce el caso",
    linkHref: "#",
    image: "/images/DSC_0114.JPG",
    altText: "Equipo de SJ Médica Estética",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-brand-surface py-16 lg:py-20 w-full px-4 lg:px-10 overflow-hidden relative">
        <div className="mx-auto w-full max-w-[1400px] relative z-10">
          
          {/* Header Row */}
          <div className="flex w-full items-end justify-between pb-10">
            <h2 className="font-proxima text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-midnight text-balance max-w-sm md:max-w-xl">
              Por qué los líderes confían en <span className="text-brand-accent">Sintérgica</span>
            </h2>
            <div className="flex gap-x-4">
              <button 
                onClick={prevSlide}
                aria-label="Previous" 
                className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-midnight/20 text-brand-midnight/70 hover:text-brand-midnight hover:border-brand-accent hover:bg-brand-accent/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                aria-label="Next" 
                className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-midnight/20 text-brand-midnight/70 hover:text-brand-midnight hover:border-brand-accent hover:bg-brand-accent/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* SVG Filter for rounded corners on clip patterns */}
          <svg tabIndex={-1} aria-hidden="true" className="pointer-events-none invisible absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="rounded-clip" colorInterpolationFilters="sRGB">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="rounded"></feColorMatrix>
                <feComposite in="SourceGraphic" in2="rounded" operator="atop"></feComposite>
              </filter>
            </defs>
          </svg>

          {/* Carousel Container */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[22/10] max-h-[800px] lg:max-h-[600px] mt-8 bg-transparent">
            
            {/* Desktop Layout - static structure, animated content */}
            <div className="hidden md:block absolute inset-0 w-full h-full">
              {/* Left Solid Box */}
              <div className="absolute left-0 top-0 h-full w-[55%] z-20 drop-shadow-xl" style={{ filter: 'url("#rounded-clip")' }}>
                <div className="h-full w-full bg-white [clip-path:polygon(0_0,82%_0,98%_100%,0_100%)] relative">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full w-full p-10 lg:p-14 flex flex-col justify-between"
                    >
                      <div className="w-[90%] lg:w-10/12">
                        {/* Company Logo */}
                        <div className="mb-8 lg:mb-12 flex items-center gap-4">
                          <div className="relative h-12 w-12 lg:h-14 lg:w-14 shrink-0">
                            <Image
                              src={TESTIMONIALS[currentIndex].logoSrc}
                              alt={TESTIMONIALS[currentIndex].logoAlt}
                              fill
                              className="object-contain"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <h3 className="font-proxima font-bold text-lg lg:text-xl tracking-tight text-brand-midnight leading-tight">
                              {TESTIMONIALS[currentIndex].company}
                            </h3>
                            <p className="text-brand-midnight/60 text-sm">
                              {TESTIMONIALS[currentIndex].sector}
                            </p>
                          </div>
                        </div>
                        <h4 className="font-proxima text-xl lg:text-2xl xl:text-3xl text-brand-midnight font-medium leading-relaxed mb-8">
                          “{TESTIMONIALS[currentIndex].quote}”
                        </h4>
                      </div>

                      <Link href={TESTIMONIALS[currentIndex].linkHref} className="inline-flex items-center gap-2 text-brand-midnight font-bold group mt-8 w-max">
                        {TESTIMONIALS[currentIndex].linkText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </m.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Image Box */}
              <div className="absolute right-0 top-0 h-full w-[52%] z-10" style={{ filter: 'url("#rounded-clip")' }}>
                <div className="h-full w-full bg-neutral-900 [clip-path:polygon(100%_0,2%_0,18%_100%,100%_100%)] relative">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.4 } }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={TESTIMONIALS[currentIndex].image} 
                        alt={TESTIMONIALS[currentIndex].altText}
                        fill
                        loading="lazy"
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 50vw, 50vw"
                      />
                    </m.div>
                  </AnimatePresence>
                  {/* Dark overlay fixed on top to retain brand contrast */}
                  <div className="absolute inset-0 bg-brand-midnight/10 mix-blend-multiply pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile Layout (Slide up animation for full card) */}
            <div className="md:hidden relative w-full h-full">
              <AnimatePresence mode="wait">
                <m.div
                  key={"mobile-" + currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col w-full h-full bg-white rounded-3xl overflow-hidden shadow-xl"
                >
                   <div className="relative w-full h-[40%]">
                      <Image 
                        src={TESTIMONIALS[currentIndex].image} 
                        alt={TESTIMONIALS[currentIndex].altText}
                        fill
                        loading="lazy"
                        className="object-cover object-center"
                      />
                   </div>
                   <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-6 flex items-center gap-3">
                          <div className="relative h-10 w-10 shrink-0">
                            <Image
                              src={TESTIMONIALS[currentIndex].logoSrc}
                              alt={TESTIMONIALS[currentIndex].logoAlt}
                              fill
                              className="object-contain"
                              sizes="40px"
                            />
                          </div>
                          <div>
                            <h3 className="font-proxima font-bold text-base tracking-tight text-brand-midnight leading-tight">
                              {TESTIMONIALS[currentIndex].company}
                            </h3>
                            <p className="text-brand-midnight/60 text-xs">
                              {TESTIMONIALS[currentIndex].sector}
                            </p>
                          </div>
                        </div>
                        <h4 className="font-proxima text-lg text-brand-midnight font-medium leading-relaxed mb-6">
                          “{TESTIMONIALS[currentIndex].quote}”
                        </h4>
                      </div>
                      <Link href={TESTIMONIALS[currentIndex].linkHref} className="inline-flex items-center gap-2 text-brand-midnight font-bold group mt-6 text-sm w-max">
                        {TESTIMONIALS[currentIndex].linkText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                   </div>
                </m.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Progress Bar Indicators */}
          <div className="mt-8 md:mt-16 flex justify-center w-full">
            <div className="flex gap-2 w-full max-w-[200px]">
               {TESTIMONIALS.map((_, idx) => (
                 <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-full bg-brand-accent' : 'w-1/3 bg-brand-midnight/10 hover:bg-brand-midnight/30'}`} 
                    aria-label={`Ir al testimonio ${idx + 1}`}
                 />
               ))}
            </div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
