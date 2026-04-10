"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Users,
  Mail,
  MousePointerClick,
  Calendar,
  BarChart3,
  ClipboardList,
  Workflow,
  MessageCircle,
} from "lucide-react";
import { ReplacesChip } from "./ui/ReplacesChip";

const CATEGORIES = [
  { icon: Users, label: "CRM y gestión de contactos" },
  { icon: Mail, label: "Email marketing y nurturing" },
  { icon: MousePointerClick, label: "Landing pages y funnels" },
  { icon: Calendar, label: "Agenda y citas" },
  { icon: BarChart3, label: "Reportes y analytics" },
  { icon: ClipboardList, label: "Formularios y captación" },
  { icon: Workflow, label: "Automatización de workflows" },
  { icon: MessageCircle, label: "Comunicación WhatsApp/SMS" },
];

export function SalesHubReplaces() {
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
      className="bg-brand-surface dark:bg-brand-deep py-20 px-6"
      aria-label="Herramientas que reemplaza SalesHub"
    >
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <m.h3
          {...anim(0)}
          className="text-2xl font-semibold text-brand-midnight dark:text-brand-white"
        >
          Una plataforma. Múltiples herramientas reemplazadas.
        </m.h3>
        <m.p {...anim(0.1)} className="mt-3 text-brand-midnight/60 dark:text-brand-white/60">
          Lo que antes requerías de 5 proveedores distintos, SalesHub lo
          resuelve en uno.
        </m.p>

        <m.div
          {...anim(0.2)}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {CATEGORIES.map((cat) => (
            <ReplacesChip key={cat.label} icon={cat.icon} label={cat.label} />
          ))}
        </m.div>

        <m.p
          {...anim(0.3)}
          className="mt-8 text-sm text-brand-midnight/40 dark:text-brand-white/40"
        >
          Sin mencionar que con Lattice integrado también reemplazas
          herramientas de análisis de competencia, generación de contenido y
          scoring inteligente.
        </m.p>
      </div>
    </section>
    </LazyMotion>
  );
}
