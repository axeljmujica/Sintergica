"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Bot, Plug, Cpu, LayoutDashboard, Workflow, Search, FlaskConical, Code2, ShieldCheck, Rocket, Users2, BookOpen, Lock, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";

const HERO = {
  badge: "Desarrollo a Medida",
  title: "Construimos soluciones de IA que no existen en el catálogo.",
  subtitle:
    "Si tu proceso es único, tu solución también debe serlo. Agentes, integraciones, modelos especializados y aplicaciones verticales — diseñados y construidos desde cero para tu operación.",
  ctaLabel: "Agendar Diagnóstico",
  trustSignals: [
    "Discovery en 1–2 semanas",
    "Código y modelos son tuyos",
    "Sin permanencia",
  ],
};

const CUANDO_CASES = [
  {
    icon: Plug,
    title: "Hospital con HIS propietario",
    description:
      "Un hospital que necesita un agente capaz de leer expedientes clínicos dentro de su sistema HIS propietario — sin extraer datos del sistema, sin exponerlos a terceros.",
  },
  {
    icon: Workflow,
    title: "Logística con TMS existente",
    description:
      "Una empresa de logística que quiere integrar IA en su TMS actual sin tirarlo a la basura y empezar de cero. El TMS sigue operando. La IA se monta encima.",
  },
  {
    icon: ShieldCheck,
    title: "Gobierno con reglas específicas",
    description:
      "Una dependencia que requiere automatizar flujos de transparencia con las reglas exactas de la LGTAIP — no con una aproximación genérica que \"más o menos\" cumple.",
  },
  {
    icon: Cpu,
    title: "Financiero con políticas propias",
    description:
      "Una institución financiera que necesita un motor de análisis de riesgo calibrado a sus propias políticas, no a las de un banco en otro país.",
  },
];

const CATEGORIES = [
  {
    icon: Bot,
    title: "Agentes autónomos",
    description:
      "Agentes con comportamientos diseñados para tu operación específica: sus propias reglas de negocio, herramientas y bases de conocimiento. Desde un agente simple hasta orquestaciones donde varios trabajan en paralelo, cada uno con su rol.",
  },
  {
    icon: Plug,
    title: "Integraciones con sistemas existentes",
    description:
      "Conectamos IA con los sistemas que tu organización ya usa — ERP, HIS, TMS, plataformas de gobierno, sistemas propietarios sin API pública. Extraer, procesar y devolver información. Sin reemplazar infraestructura.",
  },
  {
    icon: Cpu,
    title: "Modelos especializados",
    description:
      "Fine-tuning de modelos Seeb con tu corpus propietario: manuales, contratos, expedientes, regulación interna, procedimientos. El modelo razona con tu vocabulario. Los pesos, el código de inferencia y la documentación son tuyos.",
  },
  {
    icon: LayoutDashboard,
    title: "Aplicaciones de IA verticales",
    description:
      "Interfaces, dashboards y herramientas construidas sobre Lattice o como producto independiente, diseñadas para el flujo de trabajo específico de tu organización. No una herramienta genérica con menús que nadie toca.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones complejas",
    description:
      "Flujos que combinan múltiples sistemas, lógica de negocio con ramificaciones y decisiones donde la IA actúa como paso intermedio — evaluando, clasificando o generando contenido antes de pasar al siguiente sistema.",
  },
];

const PROCESS_PHASES = [
  {
    icon: Search,
    title: "1. Discovery",
    duration: "1–2 semanas",
    description:
      "Levantamos requerimientos, analizamos los sistemas que tu organización usa hoy, definimos el alcance técnico y entregamos un plan de trabajo con tiempos, costos y entregables por fase. Acá decidimos juntos si el proyecto tiene sentido — antes de gastar un peso en desarrollo.",
  },
  {
    icon: FlaskConical,
    title: "2. Prototipo supervisado",
    duration: "1–2 semanas",
    description:
      "Construimos una versión funcional de las capacidades centrales, con datos reales de tu operación. Ves algo funcionando antes de comprometerte con el desarrollo completo. Si el prototipo no convence, nos detenemos. Sin penalización.",
  },
  {
    icon: Code2,
    title: "3. Desarrollo iterativo",
    duration: "2–12 semanas",
    description:
      "Sprints semanales con entregables medibles. Tu equipo valida cada iteración antes de que avancemos. Nada se construye a puerta cerrada durante dos meses para luego descubrir que no era lo que esperabas.",
  },
  {
    icon: ShieldCheck,
    title: "4. Integración y pruebas",
    duration: "1–2 semanas",
    description:
      "Conectamos la solución con tus sistemas en producción, corremos pruebas de carga y seguridad, y validamos con los usuarios que van a operar la herramienta todos los días — no con el equipo directivo que aprobó el proyecto.",
  },
  {
    icon: Rocket,
    title: "5. Entrega y transferencia",
    duration: "Acompañamiento continuo",
    description:
      "Documentación técnica completa. Capacitación de tu equipo. Acompañamiento post-lanzamiento para ajustar lo necesario con el sistema ya en producción. La meta: que tu organización opere y mantenga la solución de forma autónoma.",
  },
];

const OWNERSHIP_POINTS = [
  {
    icon: Code2,
    title: "El código es tuyo",
    description:
      "El código desarrollado exclusivamente para tu proyecto se entrega con documentación completa. Si mañana decides operar sin Sintérgica o contratar otro equipo para evolucionarlo, tienes todo lo que necesitas.",
  },
  {
    icon: Cpu,
    title: "Los modelos también",
    description:
      "Los modelos especializados con tus datos se entregan completos: pesos, código de inferencia y documentación de despliegue. No retenemos nada que te impida operar de forma independiente.",
  },
  {
    icon: BookOpen,
    title: "Licencias base transparentes",
    description:
      "Los modelos base del ecosistema Lattice — Na'at bajo Apache 2.0, Seeb bajo licencia propietaria — mantienen sus licencias originales. Esto no limita tu propiedad sobre lo que se construyó encima.",
  },
  {
    icon: Lock,
    title: "Tus datos no salen",
    description:
      "Tus datos nunca se usan fuera de tu proyecto. No se reciclan para entrenar otros modelos. No se comparten con otros clientes. No se retienen después de la entrega. Cumplimos con la LFPDPPP.",
  },
];

const WHY_POINTS = [
  {
    icon: Users2,
    title: "Quién construye",
    description:
      "El equipo core que diseña tu solución es el mismo que la construye. No hay una firma de consultoría que vende y un outsourcing en otro país que ejecuta. Las personas con las que hablas en el discovery son las que escriben el código.",
  },
  {
    icon: ShieldCheck,
    title: "Qué conocen",
    description:
      "Trabajamos con sectores regulados en México: gobierno, salud, energía, finanzas. Nuestros equipos operan con familiaridad directa con la normativa del SAT, la CNBV, la LGTAIP y las NOMs sectoriales relevantes.",
  },
  {
    icon: BookOpen,
    title: "Qué te llevas",
    description:
      "Código, modelos, documentación, conocimiento. Todo transferido formalmente. No construimos dependencia. Si dentro de un año tu equipo interno puede mantener y evolucionar la solución sin llamarnos, hicimos bien nuestro trabajo.",
  },
];

const FAQS = [
  {
    q: "¿Cuál es la diferencia entre implementación y desarrollo a medida?",
    a: "La implementación despliega y configura los productos que ya existen en el ecosistema Sintérgica — Lattice, Nahui, SalesHub. El desarrollo a medida construye algo que no existía: un agente, una integración, una aplicación o un modelo especializado diseñado exclusivamente para tu operación. Si lo que necesitas encaja en un producto existente, te lo decimos. Si no encaja, lo construimos.",
  },
  {
    q: "¿Necesito tener Lattice para contratar desarrollo a medida?",
    a: "No necesariamente. Muchas soluciones custom se construyen sobre Lattice porque es la infraestructura más eficiente para desplegar agentes y modelos. Pero si tu proyecto requiere independencia del ecosistema Lattice — por restricciones de tu organización o porque la solución opera en un contexto distinto — también lo hacemos.",
  },
  {
    q: "¿Qué pasa si el prototipo no convence?",
    a: "Nos detenemos. La fase de prototipo existe precisamente para validar antes de comprometerse con el desarrollo completo. Si lo que ves no resuelve tu problema o no justifica la inversión, el proyecto se detiene ahí. Pagas el discovery y el prototipo. Nada más.",
  },
  {
    q: "¿Cuánto tarda un proyecto típico?",
    a: "Depende del alcance. Un agente simple puede estar listo en una semana. Una aplicación vertical completa toma de dos a tres meses. Un proyecto de transformación enterprise, de tres a seis meses. Los tiempos se definen con precisión en la fase de discovery — no antes.",
  },
  {
    q: "¿Puedo cambiar de proveedor después?",
    a: "Sí. Todo el código y los modelos se entregan con documentación suficiente para que tu equipo o cualquier otro proveedor pueda continuar el trabajo. No usamos frameworks propietarios cerrados ni dependencias ocultas que te aten a nosotros.",
  },
];

export function DesarrolloMedidaContent() {
  const shouldReduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const catRef = useRef<HTMLDivElement>(null);
  const catInView = useInView(catRef, { once: true, margin: "-80px" });
  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const ownRef = useRef<HTMLDivElement>(null);
  const ownInView = useInView(ownRef, { once: true, margin: "-80px" });
  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={HERO.badge}
          title={HERO.title}
          subtitle={HERO.subtitle}
          bgImage="/images/121725.jpg"
          bgImageAlt="Desarrollo de software de IA a medida"
          ctaLabel={HERO.ctaLabel}
          ctaHref="/diagnostico"
          ctaSecondaryLabel="Ver nuestro proceso"
          ctaSecondaryHref="#proceso"
          trustSignals={HERO.trustSignals}
        />

        {/* Cuándo tiene sentido */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Cuándo tiene sentido"
              title="No todo requiere una solución custom. Pero algunos problemas sí."
              subtitle="Si tu organización opera un sistema propietario sin API pública y necesitas que un agente de IA lea y escriba en él — eso no se resuelve con un producto de estantería. Si tu flujo de cumplimiento tiene reglas tan específicas que ningún motor genérico las captura — tampoco. Ahí es donde entra el desarrollo a medida."
              centered
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {CUANDO_CASES.map(({ icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8 transition-colors hover:border-brand-accent/30"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base text-brand-midnight/60 dark:text-brand-white/60">
              Estos problemas no se resuelven con configuración. Se resuelven con ingeniería.
            </p>
          </div>
        </section>

        {/* Qué construimos */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Qué construimos"
              title="Cinco categorías de soluciones. Todas a la medida."
              centered
            />
            <div ref={catRef} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map(({ icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={catInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              badge="Proceso"
              title="Cinco fases. Sin sorpresas en ninguna."
              centered
            />
            <div ref={processRef} className="mt-14 flex flex-col gap-4">
              {PROCESS_PHASES.map(({ icon: Icon, title, duration, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, x: -16 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col gap-5 rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8 sm:flex-row"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                        {title}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        {duration}
                      </span>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                      {description}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Propiedad */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Propiedad intelectual"
              title="Lo que construimos para ti te pertenece."
              subtitle="Sin vendor lock-in. Sin dependencias ocultas. Si mañana decides operar sin nosotros, tienes todo lo que necesitas."
              centered
            />
            <div ref={ownRef} className="mt-14 grid gap-6 md:grid-cols-2">
              {OWNERSHIP_POINTS.map(({ icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={ownInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight p-8"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué Sintérgica */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Por qué Sintérgica"
              title="Tres cosas que importan cuando contratas desarrollo custom de IA."
              centered
            />
            <div ref={whyRef} className="mt-14 grid gap-6 md:grid-cols-3">
              {WHY_POINTS.map(({ icon: Icon, title, description }, i) => (
                <m.div
                  key={title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep p-8"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Preguntas frecuentes"
              title="Resolvamos tus dudas"
              centered
            />
            <div className="mt-12 flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    openFaq === i
                      ? "border-brand-accent/30 bg-brand-accent/5"
                      : "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-brand-midnight dark:text-brand-white text-[16px] pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-midnight/50 dark:text-brand-white/50 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180 text-brand-accent" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-6 pt-0 text-[14px] leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          badge="Siguiente paso"
          title="Construyamos el software que impulsará tu IA"
          subtitle="Hablemos sobre tu proyecto y descubramos cómo crear una arquitectura resiliente, escalable y lista para la era de los agentes autónomos."
          ctaLabel="Iniciar Proyecto"
          ctaHref="/diagnostico"
          trustSignals={[
            "Discovery sin compromiso",
            "Código y modelos son tuyos",
            "Acompañamiento post-lanzamiento",
          ]}
        />
      </>
    </LazyMotion>
  );
}
