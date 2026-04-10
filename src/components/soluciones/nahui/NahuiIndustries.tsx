"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Truck, Globe, ShoppingCart } from "lucide-react";
import { IndustryCard } from "./ui/IndustryCard";

const INDUSTRIES = [
  {
    icon: Truck,
    title: "Logística y distribución",
    description:
      "Última milla, operadores 3PL, distribuidoras. Optimiza rutas, controla entregas y mide SLAs.",
    examples: "Última milla, operadores 3PL, distribuidoras",
  },
  {
    icon: Globe,
    title: "Comercio exterior",
    description:
      "Agentes aduanales, importadoras, freight forwarders. Trazabilidad de pedimentos, validación documental, clasificación arancelaria.",
    examples: "Agentes aduanales, importadoras, freight forwarders",
  },
  {
    icon: ShoppingCart,
    title: "Retail y e-commerce",
    description:
      "Fulfillment, gestión de entregas, dark stores. Convierte la logística en ventaja competitiva.",
    examples: "Tiendas en línea, marketplaces, dark stores",
  },
];

export function NahuiIndustries() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
    <section
      className="bg-brand-surface dark:bg-brand-deep py-24 px-6"
      aria-label="Industrias objetivo de Nahui"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <m.div {...anim(0)}>
          <span className="inline-block rounded-full border border-brand-accent-light/20 bg-brand-accent-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-light">
            Industrias
          </span>
          <h2 className="mt-5 max-w-2xl font-proxima font-bold text-3xl leading-tight text-brand-midnight dark:text-brand-white md:text-4xl">
            Diseñado para quienes mueven México.
          </h2>
          <p className="mt-4 max-w-xl text-base text-brand-midnight/60 dark:text-brand-white/60">
            Nahui entiende la complejidad operativa de cada sector: aduanas,
            última milla, cadena de suministro, e-commerce.
          </p>
        </m.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {INDUSTRIES.map((industry, i) => (
            <m.div key={industry.title} {...anim(0.1 + i * 0.1)}>
              <IndustryCard {...industry} />
            </m.div>
          ))}
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
