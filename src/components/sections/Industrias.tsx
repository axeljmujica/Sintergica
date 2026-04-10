"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { INDUSTRIAS_SECTION, INDUSTRIAS } from "@/lib/data";
import { AppleCardsCarousel, type AppleCardData } from "@/components/ui/apple-cards-carousel";
import { useDictionary } from "@/i18n/DictionaryProvider";

const IMAGE_MAP: Record<string, string> = {
  Legal:        "/images/home/legal.jpg",
  Gobierno:     "/images/home/gobierno.jpg",
  "Logística y Com. Ext.":  "/images/home/logistica.jpg",
  Energía:      "/images/home/energia.jpg",
  Salud:        "/images/home/salud.jpg",
  Financiero:   "/images/home/financiero.jpg",
};

export function Industrias() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const dictionary = useDictionary();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.55;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const cards: AppleCardData[] = INDUSTRIAS.map((ind) => {
    let colorClass = "text-brand-accent-light";
    let iconClass = "text-brand-accent-light";
    
    if (ind.name === "Legal") {
      colorClass = "text-purple-300";
      iconClass = "text-purple-300";
    }
    if (ind.name === "Gobierno") {
      colorClass = "text-slate-300"; // neutral institutional requested
      iconClass = "text-slate-300";
    }
    if (ind.name === "Logística y Com. Ext.") {
      colorClass = "text-orange-300";
      iconClass = "text-orange-300";
    }
    if (ind.name === "Energía") {
      colorClass = "text-amber-300";
      iconClass = "text-amber-300";
    }
    if (ind.name === "Salud") {
      colorClass = "text-pink-300";
      iconClass = "text-pink-300";
    }
    if (ind.name === "Financiero") {
      colorClass = "text-lime-300";
      iconClass = "text-lime-300";
    }
    if (ind.name === "Ventas") {
      colorClass = "text-sky-300";
      iconClass = "text-sky-300";
    }

    const dictKey = ind.name === "Logística y Com. Ext." ? "logistica" :
                    ind.name === "Energía" ? "energia" :
                    ind.name.toLowerCase();
                    
    const itemDict = dictionary.industrias?.items?.[dictKey] || {};

    return {
      id: ind.name,
      title: itemDict.name || ind.name,
      subtitle: itemDict.proName || ind.proName,
      useCase: itemDict.useCase || ind.useCase,
      agent: itemDict.agent || ind.agent,
      impact: itemDict.impact || ind.impact,
      imageSrc: IMAGE_MAP[ind.name] ?? "/images/home/Desarrollador-TI-con-café.jpg",
      imageAlt: `Sector ${itemDict.name || ind.name}`,
      Icon: ind.icon,
      colorClass,
      iconClass,
      href: `/industrias/${dictKey}`
    };
  });

  return (
    <LazyMotion features={domAnimation}>
    <section
      id="industrias"
      className="bg-brand-white dark:bg-brand-midnight py-20 md:py-28"
      aria-label="Industrias"
    >
      {/* Contenedor del encabezado (centrado, ancho máximo) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          ref={ref}
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.7 }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="mb-4 inline-block rounded-full border border-brand-accent/25 bg-brand-accent/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-brand-accent dark:border-brand-accent/25 dark:bg-brand-accent/10">
              {dictionary.industrias?.badge || "Sectores"}
            </span>
            <h2 className="font-proxima max-w-xl text-balance text-[1.75rem] font-bold leading-[1.2] tracking-tight text-brand-midnight dark:text-brand-white sm:text-[2.25rem] lg:text-[2.75rem]">
              {dictionary.industrias?.title || INDUSTRIAS_SECTION.title}
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-midnight/10 text-brand-midnight/40 transition-colors hover:border-amber-500 hover:text-amber-500 dark:border-brand-white/10 dark:text-brand-white/40 dark:hover:border-amber-500 dark:hover:text-amber-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-midnight/10 text-brand-midnight/40 transition-colors hover:border-amber-500 hover:text-amber-500 dark:border-brand-white/10 dark:text-brand-white/40 dark:hover:border-amber-500 dark:hover:text-amber-500"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </m.div>
      </div>

      {/* Contenedor del carrusel (full-width derecho, padding izquierdo alineado) */}
      <div className="mt-10 pl-4 sm:pl-6 lg:pl-8">
        <m.div
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2 }}
        >
          <AppleCardsCarousel cards={cards} scrollRef={scrollRef} />
        </m.div>
      </div>

      {/* Contenedor del CTA (centrado, ancho máximo) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <m.div
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href={INDUSTRIAS_SECTION.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-midnight transition-colors hover:text-brand-accent dark:text-brand-white dark:hover:text-brand-accent-light"
          >
            {dictionary.industrias?.cta || INDUSTRIAS_SECTION.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}
