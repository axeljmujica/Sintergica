"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Server, BookOpen, Shield, CheckCircle2, Workflow, ChevronDown, Users } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TimelineSteps, type TimelineStep } from "@/components/shared/TimelineSteps";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    hero: {
      badge: "IMPLEMENTACIÓN DE IA",
      title: "Desplegamos Inteligencia Artificial de grado corporativo en tu infraestructura",
      subtitle: "Implementación técnica, ajuste fino y conexión con tus sistemas reales. Un proceso riguroso para empresas de LatAm que exigen alta seguridad y soberanía de datos.",
      bgImageAlt: "Implementación de infraestructura de IA",
      ctaLabel: "Iniciar implementación",
      trustSignals: ["Despliegue Privado", "Fine-tuning real", "Integración con ERPs/CRMs"],
    },
    intro: {
      badge: "CÓMO TRABAJAMOS",
      title: "No es solo instalar software. Es co-construcción.",
      p1: "El servicio de implementación de Sintérgica va más allá de conectar APIs. Es un proceso donde desplegamos, configuramos y ponemos en operación nuestras soluciones de IA directamente en tu ecosistema informacional.",
      p2: "Aplicamos <strong>ajuste fino (fine-tuning) real</strong> sobre los SLM Lattice Séeb — modelos expertos, rápidos y optimizados para IA agéntica — con tus datos propietarios, para que cada agente interiorice tu terminología, lógica de negocio y cultura sin exponer información confidencial.",
      imageAlt: "Equipo validando flujos y datos de IA",
    },
    timeline: {
      badge: "METODOLOGÍA EN 7 FASES",
      title: "Activación progresiva y controlada",
      subtitle: "Un proceso estructurado desde el levantamiento de instancias hasta la revisión de métricas con el equipo de operaciones.",
      steps: [
        { label: "Fase 1", title: "Levantamiento de instancias", description: "Despliegue de infraestructura segura y acceso inmediato a la plataforma Lattice. Tu equipo puede empezar a explorar desde el primer día." },
        { label: "Fase 2", title: "Ajuste fino de agentes Lattice Séeb (Fine-tuning)", description: "Especialización de los SLM Lattice Séeb — modelos expertos, rápidos y ligeros diseñados para IA agéntica — con tu terminología sectorial, manuales internos y políticas de negocio." },
        { label: "Fase 3 y 4", title: "Prompts y Pipelines de datos", description: "Conexión segura con tus fuentes de información (ERP, CRM) y diseño de instrucciones precisas para el comportamiento de la IA." },
        { label: "Fase 5 y 6", title: "Agentes e Integración", description: "Creación de los empleados digitales con roles específicos y conexión fluida con los sistemas preexistentes de tu operación." },
        { label: "Fase 7", title: "Pruebas, validación y entrega", description: "Evaluación con datos reales, validación humana, pruebas de seguridad y entrega formal con métricas de éxito definidas." },
      ],
    },
    includes: {
      badge: "ALCANCE TÉCNICO",
      title: "Ecosistema completo operativo",
      subtitle: "Entregamos soluciones integradas listas para el uso diario y conectadas a tus procesos.",
      items: [
        { title: "Lattice Agents configurados", description: "Agentes autónomos con reglas de negocio específicas, alineados a tu cultura organizacional." },
        { title: "Arquitectura flexible", description: "Despliegue en nube privada virtual (AWS, Azure) u On-Premise (servidores físicos locales)." },
        { title: "Seguridad y cumplimiento", description: "Auditoría, control de acceso basado en roles (RBAC) y cumplimiento con la normativa mexicana LFPDPPP." },
        { title: "Capacitación y Documentación", description: "Formación de usuarios y entrega de documentación técnica completa sin retención de datos por nuestra parte." },
      ],
    },
    guarantees: {
      title: "Principios de trabajo",
      items: [
        "Co-creación: construimos contigo, no solo para ti.",
        "Iteración medible antes de avanzar a la siguiente fase.",
        "Sin permanencia forzada: control total de tu proyecto.",
        "Acompañamiento integral para garantizar autonomía.",
        "Cumplimiento absoluto de privacidad de datos (Zero-retention).",
      ],
    },
    faq: {
      badge: "DUDAS COMUNES",
      title: "Preguntas sobre la implementación",
      items: [
        { q: "¿Tienen que migrar mis datos a la nube pública?", a: "No. Contamos con 4 modalidades de despliegue: SaaS (instancia dedicada), VPC (nube privada), On-Premise (servidores físicos) e Híbrido, adaptándonos al nivel de seguridad que requiera tu sector." },
        { q: "¿Mis datos se usarán para entrenar otras IAs?", a: "Nunca. Tu información no se comparte. Los modelos ajustados son de uso estrictamente privado para tu organización y entregamos un certificado zero-retention al cierre. Cumplimos con LFPDPPP y LGTAIP." },
        { q: "¿Cuánto tarda una implementación típica?", a: "El tiempo depende de la modalidad elegida. Un despliegue SaaS dedicado puede estar listo en menos de 24 horas, mientras que una integración profunda On-Premise con fine-tuning suele tomar algunas semanas." },
        { q: "¿Nos volvemos dependientes de Sintérgica?", a: "Todo lo contrario. Nuestra metodología está diseñada para transferir conocimiento. Te entregamos la documentación, la capacitación y la arquitectura para que tu equipo obtenga autonomía progresiva." },
      ],
    },
    cta: {
      title: "Transforma el caos informacional en inteligencia operativa",
      subtitle: "Asegura el éxito de tu proyecto de IA con una implementación técnica robusta, ajustada a tu cultura y garantizando la soberanía absoluta de tus datos.",
      ctaLabel: "Contactar a Ingeniería",
      trustSignals: ["Cumplimiento LFPDPPP", "Expertos en despliegue privado", "Arquitectura escalable"],
    },
  },
  en: {
    hero: {
      badge: "AI IMPLEMENTATION",
      title: "We deploy enterprise-grade Artificial Intelligence on your infrastructure",
      subtitle: "Technical implementation, fine-tuning, and connection with your real systems. A rigorous process for LatAm enterprises that demand high security and data sovereignty.",
      bgImageAlt: "AI infrastructure implementation",
      ctaLabel: "Start implementation",
      trustSignals: ["Private Deployment", "Real fine-tuning", "ERP/CRM Integration"],
    },
    intro: {
      badge: "HOW WE WORK",
      title: "It's not just installing software. It's co-construction.",
      p1: "Sintérgica's implementation service goes beyond connecting APIs. It's a process where we deploy, configure, and put our AI solutions into operation directly within your information ecosystem.",
      p2: "We apply <strong>real fine-tuning</strong> on the Lattice Séeb SLMs — expert, fast, and optimized models for agentic AI — with your proprietary data, so each agent internalizes your terminology, business logic, and culture without exposing confidential information.",
      imageAlt: "Team validating AI flows and data",
    },
    timeline: {
      badge: "7-PHASE METHODOLOGY",
      title: "Progressive and controlled activation",
      subtitle: "A structured process from instance provisioning to metrics review with the operations team.",
      steps: [
        { label: "Phase 1", title: "Instance provisioning", description: "Secure infrastructure deployment and immediate access to the Lattice platform. Your team can start exploring from day one." },
        { label: "Phase 2", title: "Lattice Séeb agent fine-tuning", description: "Specialization of Lattice Séeb SLMs — expert, fast, and lightweight models designed for agentic AI — with your industry terminology, internal manuals, and business policies." },
        { label: "Phase 3 & 4", title: "Prompts and data pipelines", description: "Secure connection with your data sources (ERP, CRM) and design of precise instructions for AI behavior." },
        { label: "Phase 5 & 6", title: "Agents and integration", description: "Creation of digital employees with specific roles and seamless connection with your operation's pre-existing systems." },
        { label: "Phase 7", title: "Testing, validation, and delivery", description: "Evaluation with real data, human validation, security testing, and formal delivery with defined success metrics." },
      ],
    },
    includes: {
      badge: "TECHNICAL SCOPE",
      title: "Complete operational ecosystem",
      subtitle: "We deliver integrated solutions ready for daily use and connected to your processes.",
      items: [
        { title: "Configured Lattice Agents", description: "Autonomous agents with specific business rules, aligned with your organizational culture." },
        { title: "Flexible architecture", description: "Deployment on virtual private cloud (AWS, Azure) or On-Premise (local physical servers)." },
        { title: "Security and compliance", description: "Audit, role-based access control (RBAC), and compliance with Mexican LFPDPPP regulations." },
        { title: "Training and documentation", description: "User training and delivery of complete technical documentation with no data retention on our part." },
      ],
    },
    guarantees: {
      title: "Working principles",
      items: [
        "Co-creation: we build with you, not just for you.",
        "Measurable iteration before advancing to the next phase.",
        "No forced lock-in: full control of your project.",
        "Comprehensive support to guarantee autonomy.",
        "Absolute data privacy compliance (Zero-retention).",
      ],
    },
    faq: {
      badge: "COMMON QUESTIONS",
      title: "Questions about implementation",
      items: [
        { q: "Do you need to migrate my data to the public cloud?", a: "No. We offer 4 deployment modes: SaaS (dedicated instance), VPC (private cloud), On-Premise (physical servers), and Hybrid, adapting to the security level your sector requires." },
        { q: "Will my data be used to train other AIs?", a: "Never. Your information is not shared. Fine-tuned models are for strictly private use by your organization, and we deliver a zero-retention certificate at project close. We comply with LFPDPPP and LGTAIP." },
        { q: "How long does a typical implementation take?", a: "The timeline depends on the chosen deployment mode. A dedicated SaaS deployment can be ready in less than 24 hours, while a deep On-Premise integration with fine-tuning typically takes a few weeks." },
        { q: "Do we become dependent on Sintérgica?", a: "Quite the opposite. Our methodology is designed to transfer knowledge. We deliver the documentation, training, and architecture so your team achieves progressive autonomy." },
      ],
    },
    cta: {
      title: "Transform information chaos into operational intelligence",
      subtitle: "Ensure the success of your AI project with a robust technical implementation, tailored to your culture, and guaranteeing absolute data sovereignty.",
      ctaLabel: "Contact Engineering",
      trustSignals: ["LFPDPPP compliance", "Private deployment experts", "Scalable architecture"],
    },
  },
  "pt-br": {
    hero: {
      badge: "IMPLEMENTAÇÃO DE IA",
      title: "Implantamos Inteligência Artificial de nível corporativo na sua infraestrutura",
      subtitle: "Implementação técnica, ajuste fino e conexão com seus sistemas reais. Um processo rigoroso para empresas da LatAm que exigem alta segurança e soberania de dados.",
      bgImageAlt: "Implementação de infraestrutura de IA",
      ctaLabel: "Iniciar implementação",
      trustSignals: ["Implantação Privada", "Fine-tuning real", "Integração com ERPs/CRMs"],
    },
    intro: {
      badge: "COMO TRABALHAMOS",
      title: "Não é apenas instalar software. É co-construção.",
      p1: "O serviço de implementação da Sintérgica vai além de conectar APIs. É um processo onde implantamos, configuramos e colocamos em operação nossas soluções de IA diretamente no seu ecossistema informacional.",
      p2: "Aplicamos <strong>ajuste fino (fine-tuning) real</strong> sobre os SLM Lattice Séeb — modelos especialistas, rápidos e otimizados para IA agêntica — com seus dados proprietários, para que cada agente internalize sua terminologia, lógica de negócio e cultura sem expor informações confidenciais.",
      imageAlt: "Equipe validando fluxos e dados de IA",
    },
    timeline: {
      badge: "METODOLOGIA EM 7 FASES",
      title: "Ativação progressiva e controlada",
      subtitle: "Um processo estruturado desde o provisionamento de instâncias até a revisão de métricas com a equipe de operações.",
      steps: [
        { label: "Fase 1", title: "Provisionamento de instâncias", description: "Implantação de infraestrutura segura e acesso imediato à plataforma Lattice. Sua equipe pode começar a explorar desde o primeiro dia." },
        { label: "Fase 2", title: "Ajuste fino dos agentes Lattice Séeb (Fine-tuning)", description: "Especialização dos SLM Lattice Séeb — modelos especialistas, rápidos e leves projetados para IA agêntica — com sua terminologia setorial, manuais internos e políticas de negócio." },
        { label: "Fase 3 e 4", title: "Prompts e Pipelines de dados", description: "Conexão segura com suas fontes de informação (ERP, CRM) e design de instruções precisas para o comportamento da IA." },
        { label: "Fase 5 e 6", title: "Agentes e Integração", description: "Criação dos funcionários digitais com papéis específicos e conexão fluida com os sistemas preexistentes da sua operação." },
        { label: "Fase 7", title: "Testes, validação e entrega", description: "Avaliação com dados reais, validação humana, testes de segurança e entrega formal com métricas de sucesso definidas." },
      ],
    },
    includes: {
      badge: "ESCOPO TÉCNICO",
      title: "Ecossistema completo operacional",
      subtitle: "Entregamos soluções integradas prontas para uso diário e conectadas aos seus processos.",
      items: [
        { title: "Lattice Agents configurados", description: "Agentes autônomos com regras de negócio específicas, alinhados à sua cultura organizacional." },
        { title: "Arquitetura flexível", description: "Implantação em nuvem privada virtual (AWS, Azure) ou On-Premise (servidores físicos locais)." },
        { title: "Segurança e conformidade", description: "Auditoria, controle de acesso baseado em papéis (RBAC) e conformidade com a normativa mexicana LFPDPPP." },
        { title: "Capacitação e Documentação", description: "Formação de usuários e entrega de documentação técnica completa sem retenção de dados da nossa parte." },
      ],
    },
    guarantees: {
      title: "Princípios de trabalho",
      items: [
        "Co-criação: construímos com você, não apenas para você.",
        "Iteração mensurável antes de avançar para a próxima fase.",
        "Sem permanência forçada: controle total do seu projeto.",
        "Acompanhamento integral para garantir autonomia.",
        "Conformidade absoluta de privacidade de dados (Zero-retention).",
      ],
    },
    faq: {
      badge: "DÚVIDAS COMUNS",
      title: "Perguntas sobre a implementação",
      items: [
        { q: "Vocês precisam migrar meus dados para a nuvem pública?", a: "Não. Contamos com 4 modalidades de implantação: SaaS (instância dedicada), VPC (nuvem privada), On-Premise (servidores físicos) e Híbrido, adaptando-nos ao nível de segurança que seu setor exige." },
        { q: "Meus dados serão usados para treinar outras IAs?", a: "Nunca. Suas informações não são compartilhadas. Os modelos ajustados são de uso estritamente privado para sua organização e entregamos um certificado zero-retention no encerramento. Cumprimos com LFPDPPP e LGTAIP." },
        { q: "Quanto tempo leva uma implementação típica?", a: "O prazo depende da modalidade escolhida. Uma implantação SaaS dedicada pode estar pronta em menos de 24 horas, enquanto uma integração profunda On-Premise com fine-tuning geralmente leva algumas semanas." },
        { q: "Ficamos dependentes da Sintérgica?", a: "Muito pelo contrário. Nossa metodologia é projetada para transferir conhecimento. Entregamos a documentação, a capacitação e a arquitetura para que sua equipe obtenha autonomia progressiva." },
      ],
    },
    cta: {
      title: "Transforme o caos informacional em inteligência operacional",
      subtitle: "Garanta o sucesso do seu projeto de IA com uma implementação técnica robusta, ajustada à sua cultura e garantindo a soberania absoluta dos seus dados.",
      ctaLabel: "Contatar Engenharia",
      trustSignals: ["Conformidade LFPDPPP", "Especialistas em implantação privada", "Arquitetura escalável"],
    },
  },
} as const;

const INCLUYE_BASE = [
  { icon: Users },
  { icon: Server },
  { icon: Shield },
  { icon: BookOpen },
];

export function ImplementacionContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const inclRef = useRef<HTMLDivElement>(null);
  const inclInView = useInView(inclRef, { once: true, margin: "-60px" });
  const garantRef = useRef<HTMLDivElement>(null);
  const garantInView = useInView(garantRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          bgImage="/images/implementacion-hero.jpg"
          bgImageAlt={t.hero.bgImageAlt}
          ctaLabel={t.hero.ctaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[...t.hero.trustSignals]}
        />

        {/* Intro Section with Image */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8 border-b border-brand-midnight/5 dark:border-brand-white/10">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden border border-brand-midnight/10 dark:border-brand-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-brand-midnight/10 dark:bg-brand-midnight/30 mix-blend-multiply z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
                <Image
                  src="/images/121725.jpg"
                  alt={t.intro.imageAlt}
                  fill
                  className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-brand-accent font-bold text-sm tracking-wider uppercase mb-2 block">{t.intro.badge}</span>
                <h2 className="text-3xl font-proxima font-bold text-brand-midnight dark:text-brand-white mb-6">{t.intro.title}</h2>
                <p className="text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed mb-6">
                  {t.intro.p1}
                </p>
                <p className="text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.intro.p2 }} />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              badge={t.timeline.badge}
              title={t.timeline.title}
              subtitle={t.timeline.subtitle}
              centered
            />
            <div className="mt-16">
              <TimelineSteps steps={t.timeline.steps as unknown as TimelineStep[]} />
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative element */}
          <div className="pointer-events-none absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 flex items-center justify-center opacity-10">
            <div className="h-[600px] w-[600px] rounded-full bg-brand-accent blur-[150px]" />
          </div>

          <div className="mx-auto max-w-6xl relative z-10">
            <SectionHeader
              badge={t.includes.badge}
              title={t.includes.title}
              subtitle={t.includes.subtitle}
              centered
            />
            <div ref={inclRef} className="mt-16 grid gap-6 sm:grid-cols-2">
              {INCLUYE_BASE.map((item, i) => {
                const Icon = item.icon;
                const content = t.includes.items[i];
                return (
                  <m.div
                    key={content.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={inclInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.1 }}
                    className="group flex gap-5 rounded-2xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-deep/80 backdrop-blur-sm p-8 transition-all hover:border-brand-accent/30 hover:bg-brand-deep"
                  >
                    <m.div
                      whileHover={shouldReduce ? {} : { scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 will-change-transform"
                    >
                      <Icon className="h-6 w-6 text-brand-accent" />
                    </m.div>
                    <div>
                      <h3 className="text-[18px] font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-2">{content.title}</h3>
                      <p className="text-[14px] leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">{content.description}</p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guarantees & FAQ */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Guarantees */}
            <div className="lg:col-span-5">
              <m.div
                ref={garantRef}
                initial={shouldReduce ? false : { opacity: 0, x: -20 }}
                animate={garantInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6 }}
                className="rounded-3xl border border-brand-accent/20 bg-brand-accent/[0.03] p-10 h-full"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Workflow className="h-6 w-6 text-brand-accent" />
                  <p className="font-proxima text-xl font-bold text-brand-midnight dark:text-brand-white">
                    {t.guarantees.title}
                  </p>
                </div>
                <ul className="space-y-6">
                  {t.guarantees.items.map((g) => (
                    <li key={g} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                      <span className="text-[15px] leading-relaxed text-brand-midnight/80 dark:text-brand-white/80">{g}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            </div>

            {/* FAQs */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="text-brand-accent font-bold text-sm tracking-wider uppercase mb-2 block">{t.faq.badge}</span>
                <h3 className="text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.faq.title}</h3>
              </div>

              <div className="flex flex-col gap-4">
                {t.faq.items.map((faq, i) => (
                  <div
                    key={i}
                    className={`border ${openFaq === i ? 'border-brand-accent/30 bg-brand-accent/5' : 'border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight'} rounded-2xl overflow-hidden transition-colors`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <span className="font-bold text-brand-midnight dark:text-brand-white text-[15px] pr-4">{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-brand-midnight/50 dark:text-brand-white/50 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-brand-accent' : ''}`} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="p-6 pt-0 text-[14px] leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
