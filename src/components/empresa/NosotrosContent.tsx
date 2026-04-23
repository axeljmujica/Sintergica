"use client";

import { useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight, Building2, FlaskConical, Briefcase, Code2, MapPin,
  Target, Eye, ShieldCheck, Database, Scale, BarChart3, FileSearch,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ══════════════════ i18n ══════════════════ */

type Locale = "es" | "en" | "pt-br";

interface Content {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
  };
  stats: { value: string; label: string }[];
  about: {
    badge: string;
    h2: string;
    paragraphs: string[];
  };
  purpose: {
    badge: string;
    h2: string;
    missionLabel: string;
    mission: string;
    visionLabel: string;
    vision: string;
  };
  doing: {
    badge: string;
    h2: string;
    subtitle: string;
    items: { label: string; title: string; desc: string }[];
  };
  principles: {
    badge: string;
    h2: string;
    items: { title: string; desc: string }[];
  };
  origin: {
    badge: string;
    h2: string;
    paragraphs: string[];
  };
  offices: {
    badge: string;
    h2: string;
    items: { city: string; role: string; address: string }[];
  };
  faq: {
    badge: string;
    h2: string;
    items: { q: string; a: string }[];
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    trust: string[];
  };
}

const es: Content = {
  hero: {
    eyebrow: "Acerca de Sintérgica AI",
    h1: "Construyendo la infraestructura de IA de América Latina.",
    lead:
      "Laboratorio mexicano de inteligencia artificial. IA privada, especializada y gobernable para organizaciones y gobiernos de México y LATAM.",
    ctaPrimary: "Agendar conversación",
    ctaSecondary: "Conocer Sintérgica Labs",
    trust: ["Fundada en 2016", "Soberanía de datos", "Despliegue on-premise"],
  },
  stats: [
    { value: "2016", label: "Año de fundación" },
    { value: "3", label: "Sedes operativas" },
    { value: "9", label: "Líneas de investigación activas" },
  ],
  about: {
    badge: "Quiénes somos",
    h2: "Laboratorio, consultora y constructora de software — con el mismo equipo, de principio a fin.",
    paragraphs: [
      "Sintérgica AI es un laboratorio mexicano de inteligencia artificial fundado con la misión de llevar IA privada, especializada y gobernable a organizaciones y gobiernos de México y LATAM. Operamos desde Veracruz y Ciudad de México, y atendemos clientes en todo el país y la región latinoamericana.",
      "Nuestro trabajo combina tres disciplinas que en la mayoría de las empresas están separadas: investigación aplicada en modelos de IA, consultoría de transformación digital y desarrollo de software empresarial propio. Esa combinación es lo que nos permite ofrecer algo que una consultora tradicional o un proveedor de software genérico no pueden: diagnosticamos el problema, diseñamos la solución, construimos la tecnología y la implementamos — con el mismo equipo, de principio a fin.",
      "El nombre Sintérgica nace de la idea de crear orden y claridad a partir de un campo informacional denso. Es lo que hacemos: convertimos el ruido de datos, regulaciones y procesos en inteligencia operativa que las organizaciones pueden usar para tomar mejores decisiones.",
    ],
  },
  purpose: {
    badge: "Propósito",
    h2: "Misión y visión.",
    missionLabel: "Misión",
    mission:
      "Impulsar la productividad, eficiencia y toma de decisiones en organizaciones y gobiernos de México y LATAM mediante IA privada, especializada y gobernable.",
    visionLabel: "Visión",
    vision:
      "Convertir a Lattice en la infraestructura cognitiva estratégica de México y Latinoamérica.",
  },
  doing: {
    badge: "Qué hacemos",
    h2: "Tres roles. Un solo propósito.",
    subtitle:
      "Una combinación deliberada: quien diagnostica el problema también construye la tecnología y la pone en producción.",
    items: [
      {
        label: "Laboratorio de investigación aplicada",
        title: "Sintérgica Labs",
        desc: "A través de nuestra Asociación Civil de investigación abierta desarrollamos, evaluamos y mejoramos modelos de IA con contexto normativo, cultural y lingüístico de México y LATAM. Nueve líneas de investigación activas. Modelos publicados en Hugging Face. Todo el output es público y de acceso libre.",
      },
      {
        label: "Consultora de IA y transformación digital",
        title: "Estrategia, diagnóstico e implementación",
        desc: "Desde la primera conversación hasta el sistema en producción. Acompañamiento continuo para organizaciones y gobiernos, con métricas de impacto definidas antes de invertir.",
      },
      {
        label: "Constructora de software empresarial",
        title: "Lattice · Nahui · SalesHub",
        desc: "Plataformas propias diseñadas para problemas reales en sectores regulados. Lattice Platform es el workspace de IA para organizaciones. Nahui gestiona operaciones logísticas con inteligencia integrada. SalesHub unifica ventas, marketing y CRM con IA comercial.",
      },
    ],
  },
  principles: {
    badge: "Nuestros principios",
    h2: "Cinco decisiones que definen cómo operamos.",
    items: [
      {
        title: "Soberanía de datos.",
        desc: "Los datos del cliente se procesan en su infraestructura. En despliegues on-premise, nunca salen de sus servidores. En despliegues cloud, residen en infraestructura ubicada en México. Sintérgica no retiene datos de operación.",
      },
      {
        title: "Gobernanza integrada.",
        desc: "Los controles de seguridad, auditoría y trazabilidad están en la arquitectura del sistema. Un agente no puede hacer lo que no está autorizado porque la arquitectura no se lo permite, no porque alguien configuró un permiso.",
      },
      {
        title: "Contexto antes que generalidad.",
        desc: "Los modelos de Sintérgica están entrenados con normativa, jurisprudencia y terminología de México y LATAM. Cuando un modelo Seeb analiza un contrato, razona con el Código de Comercio — no con principios del Common Law adaptados al español.",
      },
      {
        title: "Resultados medibles.",
        desc: "Las métricas de éxito se definen antes de empezar, no después de entregar. El impacto se mide en la operación del cliente, no en las funcionalidades del producto.",
      },
      {
        title: "Transparencia.",
        desc: "Cada decisión de la IA es trazable y auditable. Na'at está disponible para descarga pública. La gobernanza del modelo se documenta abiertamente.",
      },
    ],
  },
  origin: {
    badge: "Origen y trayectoria",
    h2: "De agencia digital a laboratorio de IA.",
    paragraphs: [
      "Sintérgica AI comenzó como agencia digital en 2016. En 2024, el equipo fundador identificó una brecha que nadie en México estaba cerrando: la ausencia de modelos de IA entrenados con el contexto normativo y cultural del país. Los modelos globales funcionaban para tareas generales, pero fallaban en las tareas que más importan a las organizaciones mexicanas — las que involucran regulación local, terminología sectorial y marcos jurídicos propios.",
      "Ese año pivotamos hacia lo que somos hoy: un laboratorio de IA con productos propios, capacidad de consultoría y un ecosistema de modelos diseñados para el mercado que conocemos.",
      "En 2025 lanzamos Lattice Na'at — el modelo de lenguaje de mayor escala desarrollado en México — y consolidamos el ecosistema Lattice. Hoy operamos con la participación en programas de NVIDIA Inception, AWS Startups y Google for Startups, la certificación como Meta Business Partner, y alianzas institucionales con AMITI, CANACINTRA, la Universidad Veracruzana y dependencias de gobierno federal y estatal.",
    ],
  },
  offices: {
    badge: "Sedes",
    h2: "Tres sedes operativas en México.",
    items: [
      {
        city: "Ciudad de México",
        role: "Sede principal",
        address: "Av. Ejército Nacional Mexicano 453, Piso 1. Chapultepec Morales, Granada, Miguel Hidalgo.",
      },
      {
        city: "Boca del Río, Veracruz",
        role: "Operaciones",
        address: "Juan de Grijalva 127-A, Fracc. Virginia.",
      },
      {
        city: "Xalapa-Enríquez, Veracruz",
        role: "Investigación",
        address: "Leonardo Pasquel 22, Col. Pumar.",
      },
    ],
  },
  faq: {
    badge: "Preguntas frecuentes",
    h2: "Lo que las organizaciones nos preguntan antes de trabajar con nosotros.",
    items: [
      {
        q: "¿Sintérgica AI es una startup, una consultora o un laboratorio?",
        a: "Las tres cosas. Desarrollamos modelos propios de IA (laboratorio), los implementamos en organizaciones y gobiernos (consultora), y construimos plataformas de software empresarial (productos). Esa combinación es deliberada: quien diagnostica el problema también construye la tecnología y la pone en producción. Sin intermediarios, sin desconexión entre lo que se recomienda y lo que se ejecuta.",
      },
      {
        q: "¿Qué significa que NVIDIA, AWS y Google \u201crespaldan\u201d a Sintérgica?",
        a: "Sintérgica participa en los programas NVIDIA Inception, AWS Startups y Google for Startups — programas de aceleración y soporte técnico que estas empresas ofrecen a startups de IA. Esto nos da acceso a infraestructura, créditos cloud, mentoría técnica y visibilidad en sus ecosistemas. Meta Business Partner es una certificación que valida nuestra capacidad de operar con el ecosistema publicitario de Meta. Ninguno de estos programas implica inversión de capital ni co-desarrollo de producto — son programas de soporte al ecosistema de startups.",
      },
      {
        q: "¿Por qué una empresa de IA opera desde Veracruz?",
        a: "Porque la inteligencia artificial que México necesita debería poder construirse desde cualquier punto del país, no solo desde el Valle de México o desde Silicon Valley. Veracruz es donde nacimos, donde están nuestras alianzas académicas con la Universidad Veracruzana y el COVEICYDET, y donde operan varios de nuestros primeros clientes. La sede en Ciudad de México atiende al mercado corporativo y de gobierno federal. Ambas son necesarias.",
      },
      {
        q: "¿Qué diferencia a Sintérgica de otras empresas de IA en México?",
        a: "Tres cosas. Primera: tenemos modelos propios entrenados con normativa mexicana, no solo integramos modelos de terceros. Segunda: operamos un laboratorio de investigación abierta (Sintérgica Labs) con publicaciones, datasets y modelos públicos — eso genera un nivel de credibilidad técnica que una consultora sin investigación propia no puede ofrecer. Tercera: desplegamos en la infraestructura del cliente — on-premise o en nube privada en México — con zero-retention certificado. Eso resuelve el problema de soberanía de datos que las plataformas globales de IA no resuelven para el mercado mexicano.",
      },
      {
        q: "¿Sintérgica trabaja solo con empresas grandes?",
        a: "Trabajamos con organizaciones de todos los tamaños. Los planes SaaS de Lattice y SalesHub están diseñados para PyMEs. Los despliegues enterprise y on-premise están diseñados para corporativos y gobierno. La consultoría tiene formatos desde sesiones de diagnóstico gratuitas hasta proyectos de transformación completos. El punto de entrada se adapta a la necesidad y al presupuesto.",
      },
    ],
  },
  cta: {
    badge: "Siguiente paso",
    title: "Hablemos sobre tu proyecto.",
    subtitle:
      "Sesión de diagnóstico gratuita. Definimos las métricas de éxito antes de invertir, con tus datos reales.",
    ctaLabel: "Agendar conversación",
    trust: ["Sin compromiso", "Despliegue on-premise o cloud en México", "Zero-retention certificado"],
  },
};

/* EN / PT — faithful translations (no invented facts) */

const en: Content = {
  hero: {
    eyebrow: "About Sintérgica AI",
    h1: "Building Latin America's AI infrastructure.",
    lead:
      "Mexican artificial intelligence lab. Private, specialized, and governable AI for organizations and governments across Mexico and LATAM.",
    ctaPrimary: "Book a conversation",
    ctaSecondary: "Explore Sintérgica Labs",
    trust: ["Founded in 2016", "Data sovereignty", "On-premise deployment"],
  },
  stats: [
    { value: "2016", label: "Founded" },
    { value: "3", label: "Operational offices" },
    { value: "9", label: "Active research lines" },
  ],
  about: {
    badge: "Who we are",
    h2: "Lab, consultancy, and software builder — with the same team, end to end.",
    paragraphs: [
      "Sintérgica AI is a Mexican artificial intelligence lab founded with the mission of bringing private, specialized, and governable AI to organizations and governments across Mexico and LATAM. We operate from Veracruz and Mexico City, and serve clients throughout the country and the Latin American region.",
      "Our work combines three disciplines that are separate in most companies: applied research on AI models, digital transformation consulting, and proprietary enterprise software development. That combination lets us offer something a traditional consultancy or a generic software vendor cannot: we diagnose the problem, design the solution, build the technology, and deploy it — with the same team, end to end.",
      "The name Sintérgica comes from the idea of creating order and clarity out of a dense informational field. That is what we do: we turn the noise of data, regulations, and processes into operational intelligence organizations can use to make better decisions.",
    ],
  },
  purpose: {
    badge: "Purpose",
    h2: "Mission and vision.",
    missionLabel: "Mission",
    mission:
      "Drive productivity, efficiency, and decision-making in organizations and governments across Mexico and LATAM through private, specialized, and governable AI.",
    visionLabel: "Vision",
    vision:
      "Make Lattice the strategic cognitive infrastructure of Mexico and Latin America.",
  },
  doing: {
    badge: "What we do",
    h2: "Three roles. One purpose.",
    subtitle:
      "A deliberate combination: whoever diagnoses the problem also builds the technology and puts it into production.",
    items: [
      {
        label: "Applied research lab",
        title: "Sintérgica Labs",
        desc: "Through our open research civil association we develop, evaluate, and improve AI models with the regulatory, cultural, and linguistic context of Mexico and LATAM. Nine active research lines. Models published on Hugging Face. All output is public and openly accessible.",
      },
      {
        label: "AI and digital transformation consultancy",
        title: "Strategy, diagnosis, and implementation",
        desc: "From the first conversation to the system in production. Ongoing support for organizations and governments, with impact metrics defined before investing.",
      },
      {
        label: "Enterprise software builder",
        title: "Lattice · Nahui · SalesHub",
        desc: "Proprietary platforms designed for real problems in regulated sectors. Lattice Platform is the AI workspace for organizations. Nahui handles logistics operations with integrated intelligence. SalesHub unifies sales, marketing, and CRM with commercial AI.",
      },
    ],
  },
  principles: {
    badge: "Our principles",
    h2: "Five decisions that define how we operate.",
    items: [
      {
        title: "Data sovereignty.",
        desc: "Client data is processed on the client's infrastructure. In on-premise deployments, it never leaves their servers. In cloud deployments, it resides on infrastructure located in Mexico. Sintérgica does not retain operational data.",
      },
      {
        title: "Built-in governance.",
        desc: "Security, audit, and traceability controls are in the system's architecture. An agent cannot do what it is not authorized to do because the architecture does not allow it, not because someone configured a permission.",
      },
      {
        title: "Context over generality.",
        desc: "Sintérgica's models are trained on Mexican and LATAM regulations, jurisprudence, and terminology. When a Seeb model analyzes a contract, it reasons with the Código de Comercio — not with Common Law principles adapted to Spanish.",
      },
      {
        title: "Measurable results.",
        desc: "Success metrics are defined before starting, not after delivering. Impact is measured on the client's operation, not on product features.",
      },
      {
        title: "Transparency.",
        desc: "Every AI decision is traceable and auditable. Na'at is available for public download. Model governance is documented openly.",
      },
    ],
  },
  origin: {
    badge: "Origin and trajectory",
    h2: "From digital agency to AI lab.",
    paragraphs: [
      "Sintérgica AI began as a digital agency in 2016. In 2024, the founding team identified a gap no one in Mexico was closing: the absence of AI models trained on the country's regulatory and cultural context. Global models worked for general tasks but failed on the tasks that matter most to Mexican organizations — those involving local regulation, sector terminology, and domestic legal frameworks.",
      "That year we pivoted into what we are today: an AI lab with proprietary products, consulting capability, and an ecosystem of models designed for the market we know.",
      "In 2025 we launched Lattice Na'at — the largest-scale language model developed in Mexico — and consolidated the Lattice ecosystem. Today we operate with participation in NVIDIA Inception, AWS Startups, and Google for Startups programs, Meta Business Partner certification, and institutional alliances with AMITI, CANACINTRA, Universidad Veracruzana, and federal and state government agencies.",
    ],
  },
  offices: {
    badge: "Offices",
    h2: "Three operational offices in Mexico.",
    items: [
      {
        city: "Mexico City",
        role: "Headquarters",
        address: "Av. Ejército Nacional Mexicano 453, Piso 1. Chapultepec Morales, Granada, Miguel Hidalgo.",
      },
      {
        city: "Boca del Río, Veracruz",
        role: "Operations",
        address: "Juan de Grijalva 127-A, Fracc. Virginia.",
      },
      {
        city: "Xalapa-Enríquez, Veracruz",
        role: "Research",
        address: "Leonardo Pasquel 22, Col. Pumar.",
      },
    ],
  },
  faq: {
    badge: "Frequently asked questions",
    h2: "What organizations ask us before working with us.",
    items: [
      {
        q: "Is Sintérgica AI a startup, a consultancy, or a lab?",
        a: "All three. We develop proprietary AI models (lab), deploy them in organizations and governments (consultancy), and build enterprise software platforms (products). That combination is deliberate: whoever diagnoses the problem also builds the technology and puts it into production. No intermediaries, no disconnect between what is recommended and what is executed.",
      },
      {
        q: "What does it mean that NVIDIA, AWS, and Google \u201cback\u201d Sintérgica?",
        a: "Sintérgica participates in the NVIDIA Inception, AWS Startups, and Google for Startups programs — acceleration and technical support programs these companies offer to AI startups. This gives us access to infrastructure, cloud credits, technical mentorship, and visibility in their ecosystems. Meta Business Partner is a certification that validates our ability to operate with Meta's advertising ecosystem. None of these programs imply capital investment or product co-development — they are ecosystem support programs for startups.",
      },
      {
        q: "Why does an AI company operate from Veracruz?",
        a: "Because the AI Mexico needs should be buildable from anywhere in the country, not only from the Valley of Mexico or Silicon Valley. Veracruz is where we were born, where our academic alliances with Universidad Veracruzana and COVEICYDET are based, and where several of our earliest clients operate. The Mexico City office serves the corporate and federal government market. Both are necessary.",
      },
      {
        q: "What sets Sintérgica apart from other AI companies in Mexico?",
        a: "Three things. First: we have proprietary models trained on Mexican regulation, not only third-party model integrations. Second: we operate an open research lab (Sintérgica Labs) with publications, datasets, and public models — that creates a level of technical credibility a consultancy without its own research cannot offer. Third: we deploy on the client's infrastructure — on-premise or private cloud in Mexico — with certified zero-retention. That solves the data sovereignty problem that global AI platforms do not solve for the Mexican market.",
      },
      {
        q: "Does Sintérgica only work with large enterprises?",
        a: "We work with organizations of all sizes. The SaaS plans for Lattice and SalesHub are designed for SMBs. Enterprise and on-premise deployments are designed for corporate and government clients. Consulting has formats ranging from free diagnosis sessions to full transformation projects. The entry point adapts to the need and the budget.",
      },
    ],
  },
  cta: {
    badge: "Next step",
    title: "Let's talk about your project.",
    subtitle:
      "Free diagnosis session. We define success metrics before investing, with your real data.",
    ctaLabel: "Book a conversation",
    trust: ["No commitment", "On-premise or private cloud in Mexico", "Certified zero-retention"],
  },
};

const pt: Content = {
  hero: {
    eyebrow: "Sobre a Sintérgica AI",
    h1: "Construindo a infraestrutura de IA da América Latina.",
    lead:
      "Laboratório mexicano de inteligência artificial. IA privada, especializada e governável para organizações e governos do México e da América Latina.",
    ctaPrimary: "Agendar conversa",
    ctaSecondary: "Conhecer Sintérgica Labs",
    trust: ["Fundada em 2016", "Soberania de dados", "Implantação on-premise"],
  },
  stats: [
    { value: "2016", label: "Ano de fundação" },
    { value: "3", label: "Sedes operacionais" },
    { value: "9", label: "Linhas de pesquisa ativas" },
  ],
  about: {
    badge: "Quem somos",
    h2: "Laboratório, consultoria e construtora de software — com a mesma equipe, de ponta a ponta.",
    paragraphs: [
      "A Sintérgica AI é um laboratório mexicano de inteligência artificial fundado com a missão de levar IA privada, especializada e governável a organizações e governos do México e da América Latina. Operamos a partir de Veracruz e da Cidade do México, e atendemos clientes em todo o país e na região latino-americana.",
      "Nosso trabalho combina três disciplinas que na maioria das empresas estão separadas: pesquisa aplicada em modelos de IA, consultoria de transformação digital e desenvolvimento de software empresarial próprio. Essa combinação nos permite oferecer algo que uma consultoria tradicional ou um fornecedor de software genérico não podem: diagnosticamos o problema, desenhamos a solução, construímos a tecnologia e a implantamos — com a mesma equipe, de ponta a ponta.",
      "O nome Sintérgica nasce da ideia de criar ordem e clareza a partir de um campo informacional denso. É o que fazemos: convertemos o ruído de dados, regulamentações e processos em inteligência operacional que as organizações podem usar para tomar melhores decisões.",
    ],
  },
  purpose: {
    badge: "Propósito",
    h2: "Missão e visão.",
    missionLabel: "Missão",
    mission:
      "Impulsionar a produtividade, eficiência e tomada de decisões em organizações e governos do México e da América Latina por meio de IA privada, especializada e governável.",
    visionLabel: "Visão",
    vision:
      "Tornar o Lattice a infraestrutura cognitiva estratégica do México e da América Latina.",
  },
  doing: {
    badge: "O que fazemos",
    h2: "Três papéis. Um único propósito.",
    subtitle:
      "Uma combinação deliberada: quem diagnostica o problema também constrói a tecnologia e a coloca em produção.",
    items: [
      {
        label: "Laboratório de pesquisa aplicada",
        title: "Sintérgica Labs",
        desc: "Através da nossa associação civil de pesquisa aberta desenvolvemos, avaliamos e melhoramos modelos de IA com contexto regulatório, cultural e linguístico do México e da América Latina. Nove linhas de pesquisa ativas. Modelos publicados no Hugging Face. Todo o output é público e de acesso livre.",
      },
      {
        label: "Consultoria de IA e transformação digital",
        title: "Estratégia, diagnóstico e implementação",
        desc: "Da primeira conversa ao sistema em produção. Acompanhamento contínuo para organizações e governos, com métricas de impacto definidas antes de investir.",
      },
      {
        label: "Construtora de software empresarial",
        title: "Lattice · Nahui · SalesHub",
        desc: "Plataformas próprias desenhadas para problemas reais em setores regulados. Lattice Platform é o workspace de IA para organizações. Nahui gerencia operações logísticas com inteligência integrada. SalesHub unifica vendas, marketing e CRM com IA comercial.",
      },
    ],
  },
  principles: {
    badge: "Nossos princípios",
    h2: "Cinco decisões que definem como operamos.",
    items: [
      {
        title: "Soberania de dados.",
        desc: "Os dados do cliente são processados em sua infraestrutura. Em implantações on-premise, nunca saem dos seus servidores. Em implantações cloud, residem em infraestrutura localizada no México. A Sintérgica não retém dados de operação.",
      },
      {
        title: "Governança integrada.",
        desc: "Os controles de segurança, auditoria e rastreabilidade estão na arquitetura do sistema. Um agente não pode fazer o que não está autorizado porque a arquitetura não permite, não porque alguém configurou uma permissão.",
      },
      {
        title: "Contexto antes da generalidade.",
        desc: "Os modelos da Sintérgica são treinados com regulamentação, jurisprudência e terminologia do México e da América Latina. Quando um modelo Seeb analisa um contrato, raciocina com o Código de Comercio — não com princípios do Common Law adaptados ao espanhol.",
      },
      {
        title: "Resultados mensuráveis.",
        desc: "As métricas de sucesso são definidas antes de começar, não depois de entregar. O impacto é medido na operação do cliente, não nas funcionalidades do produto.",
      },
      {
        title: "Transparência.",
        desc: "Cada decisão da IA é rastreável e auditável. Na'at está disponível para download público. A governança do modelo é documentada abertamente.",
      },
    ],
  },
  origin: {
    badge: "Origem e trajetória",
    h2: "De agência digital a laboratório de IA.",
    paragraphs: [
      "A Sintérgica AI começou como agência digital em 2016. Em 2024, a equipe fundadora identificou uma lacuna que ninguém no México estava fechando: a ausência de modelos de IA treinados com o contexto regulatório e cultural do país. Os modelos globais funcionavam para tarefas gerais, mas falhavam nas tarefas que mais importam às organizações mexicanas — aquelas que envolvem regulação local, terminologia setorial e marcos jurídicos próprios.",
      "Naquele ano pivotamos para o que somos hoje: um laboratório de IA com produtos próprios, capacidade de consultoria e um ecossistema de modelos desenhados para o mercado que conhecemos.",
      "Em 2025 lançamos o Lattice Na'at — o modelo de linguagem de maior escala desenvolvido no México — e consolidamos o ecossistema Lattice. Hoje operamos com a participação nos programas NVIDIA Inception, AWS Startups e Google for Startups, a certificação como Meta Business Partner e alianças institucionais com AMITI, CANACINTRA, Universidad Veracruzana e dependências de governo federal e estadual.",
    ],
  },
  offices: {
    badge: "Sedes",
    h2: "Três sedes operacionais no México.",
    items: [
      {
        city: "Cidade do México",
        role: "Sede principal",
        address: "Av. Ejército Nacional Mexicano 453, Piso 1. Chapultepec Morales, Granada, Miguel Hidalgo.",
      },
      {
        city: "Boca del Río, Veracruz",
        role: "Operações",
        address: "Juan de Grijalva 127-A, Fracc. Virginia.",
      },
      {
        city: "Xalapa-Enríquez, Veracruz",
        role: "Pesquisa",
        address: "Leonardo Pasquel 22, Col. Pumar.",
      },
    ],
  },
  faq: {
    badge: "Perguntas frequentes",
    h2: "O que as organizações nos perguntam antes de trabalhar conosco.",
    items: [
      {
        q: "A Sintérgica AI é uma startup, uma consultoria ou um laboratório?",
        a: "As três coisas. Desenvolvemos modelos próprios de IA (laboratório), os implementamos em organizações e governos (consultoria) e construímos plataformas de software empresarial (produtos). Essa combinação é deliberada: quem diagnostica o problema também constrói a tecnologia e a coloca em produção. Sem intermediários, sem desconexão entre o que se recomenda e o que se executa.",
      },
      {
        q: "O que significa que NVIDIA, AWS e Google \u201capoiam\u201d a Sintérgica?",
        a: "A Sintérgica participa dos programas NVIDIA Inception, AWS Startups e Google for Startups — programas de aceleração e suporte técnico que essas empresas oferecem a startups de IA. Isso nos dá acesso a infraestrutura, créditos cloud, mentoria técnica e visibilidade em seus ecossistemas. Meta Business Partner é uma certificação que valida nossa capacidade de operar com o ecossistema publicitário da Meta. Nenhum desses programas implica investimento de capital nem co-desenvolvimento de produto — são programas de suporte ao ecossistema de startups.",
      },
      {
        q: "Por que uma empresa de IA opera a partir de Veracruz?",
        a: "Porque a inteligência artificial de que o México precisa deveria poder ser construída a partir de qualquer ponto do país, não só do Vale do México ou do Vale do Silício. Veracruz é onde nascemos, onde estão nossas alianças acadêmicas com a Universidad Veracruzana e o COVEICYDET, e onde operam vários dos nossos primeiros clientes. A sede na Cidade do México atende ao mercado corporativo e de governo federal. Ambas são necessárias.",
      },
      {
        q: "O que diferencia a Sintérgica de outras empresas de IA no México?",
        a: "Três coisas. Primeira: temos modelos próprios treinados com regulamentação mexicana, não apenas integramos modelos de terceiros. Segunda: operamos um laboratório de pesquisa aberta (Sintérgica Labs) com publicações, datasets e modelos públicos — isso gera um nível de credibilidade técnica que uma consultoria sem pesquisa própria não pode oferecer. Terceira: implantamos na infraestrutura do cliente — on-premise ou nuvem privada no México — com zero-retention certificado. Isso resolve o problema de soberania de dados que as plataformas globais de IA não resolvem para o mercado mexicano.",
      },
      {
        q: "A Sintérgica trabalha apenas com grandes empresas?",
        a: "Trabalhamos com organizações de todos os tamanhos. Os planos SaaS do Lattice e do SalesHub são desenhados para PMEs. As implantações enterprise e on-premise são desenhadas para corporativos e governo. A consultoria tem formatos desde sessões de diagnóstico gratuitas até projetos de transformação completos. O ponto de entrada se adapta à necessidade e ao orçamento.",
      },
    ],
  },
  cta: {
    badge: "Próximo passo",
    title: "Vamos conversar sobre seu projeto.",
    subtitle:
      "Sessão de diagnóstico gratuita. Definimos as métricas de sucesso antes de investir, com seus dados reais.",
    ctaLabel: "Agendar conversa",
    trust: ["Sem compromisso", "On-premise ou nuvem privada no México", "Zero-retention certificado"],
  },
};

const BOOKING_URL = "/diagnostico";

/* ── Visual tones ─────────────────────────────────────────── */

type Tone = "accent" | "emerald" | "amber" | "violet";
const TONE: Record<Tone, { text: string; bg: string; border: string; dot: string }> = {
  accent:  { text: "text-brand-accent",                       bg: "bg-brand-accent/10",  border: "border-brand-accent/25",  dot: "bg-brand-accent" },
  emerald: { text: "text-emerald-600 dark:text-emerald-400",  bg: "bg-emerald-500/10",   border: "border-emerald-500/25",   dot: "bg-emerald-500" },
  amber:   { text: "text-amber-600 dark:text-amber-400",      bg: "bg-amber-500/10",     border: "border-amber-500/25",     dot: "bg-amber-500" },
  violet:  { text: "text-violet-600 dark:text-violet-400",    bg: "bg-violet-500/10",    border: "border-violet-500/25",    dot: "bg-violet-500" },
};

const DOING_ICONS: LucideIcon[] = [FlaskConical, Briefcase, Code2];
const DOING_TONE: Tone[] = ["violet", "accent", "emerald"];

const PRINCIPLE_ICONS: LucideIcon[] = [ShieldCheck, Scale, Database, BarChart3, FileSearch];
const PRINCIPLE_TONE: Tone[] = ["accent", "violet", "emerald", "amber", "accent"];

const OFFICE_TONE: Tone[] = ["accent", "violet", "emerald"];

/* ══════════════════ Component ══════════════════ */

export function NosotrosContent() {
  const locale = useLocale() as Locale;
  const c: Content = locale === "en" ? en : locale === "pt-br" ? pt : es;

  const shouldReduce = useReducedMotion();

  const aboutRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);
  const doingRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const purposeInView = useInView(purposeRef, { once: true, margin: "-80px" });
  const doingInView = useInView(doingRef, { once: true, margin: "-80px" });
  const principlesInView = useInView(principlesRef, { once: true, margin: "-80px" });
  const originInView = useInView(originRef, { once: true, margin: "-80px" });
  const officesInView = useInView(officesRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const fade = (delay = 0) =>
    shouldReduce
      ? { initial: false, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        };

  return (
    <LazyMotion features={domAnimation}>

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight px-4 pt-28 sm:px-6 lg:px-8 md:pt-36"
        aria-labelledby="nosotros-hero-h1"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(54,101,245,0.08),transparent_55%)]" />
          <div className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-emerald-500/5 blur-[120px]" />
          <div className="absolute right-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              color: "var(--brand-midnight)",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center pb-20 pt-10 md:pt-14 lg:pb-24">
          <m.div {...fade(0)} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 bg-white/60 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-midnight/70 backdrop-blur dark:border-brand-white/10 dark:bg-brand-midnight/40 dark:text-brand-white/70">
              <Building2 className="h-3.5 w-3.5 text-brand-accent" />
              {c.hero.eyebrow}
            </span>
          </m.div>

          <m.h1
            id="nosotros-hero-h1"
            {...fade(0.08)}
            animate={{ opacity: 1, y: 0 }}
            className="font-proxima mx-auto mt-8 max-w-5xl text-balance text-center text-4xl font-extrabold leading-[1.03] tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl lg:text-[4.25rem]"
          >
            {c.hero.h1}
          </m.h1>

          <m.p
            {...fade(0.16)}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-center text-lg leading-relaxed text-brand-midnight/65 dark:text-brand-white/65 sm:text-xl"
          >
            {c.hero.lead}
          </m.p>

          <m.div
            {...fade(0.24)}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
          >
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-all hover:-translate-y-0.5 hover:bg-brand-accent/90 hover:shadow-xl hover:shadow-brand-accent/30"
            >
              {c.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/investigacion/labs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-midnight/70 transition-colors hover:text-brand-accent dark:text-brand-white/70 dark:hover:text-brand-white"
            >
              {c.hero.ctaSecondary}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </m.div>

          <m.div
            {...fade(0.32)}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {c.hero.trust.map((s) => (
              <span
                key={s}
                className="flex items-center gap-2 text-xs font-medium text-brand-midnight/45 dark:text-brand-white/45"
              >
                <span className="h-1 w-1 rounded-full bg-emerald-500/80" />
                {s}
              </span>
            ))}
          </m.div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-brand-midnight/8 dark:border-brand-white/10">
          <div className="mx-auto max-w-6xl">
            <dl className="grid grid-cols-3 divide-x divide-brand-midnight/8 dark:divide-brand-white/10">
              {c.stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center py-6 sm:py-8">
                  <dt className="order-2 mt-1.5 px-2 text-center text-[0.65rem] font-medium uppercase tracking-[0.14em] text-brand-midnight/45 dark:text-brand-white/45 sm:text-xs">
                    {s.label}
                  </dt>
                  <dd className="order-1 font-proxima text-3xl font-extrabold text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section
        ref={aboutRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="nosotros-about-h2"
      >
        <div className="mx-auto max-w-5xl">
          <m.div {...fade(0)} animate={aboutInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent/60" />
                {c.about.badge}
              </span>
            </div>
            <h2
              id="nosotros-about-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.about.h2}
            </h2>
          </m.div>

          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div /> {/* spacer */}
            <div className="space-y-6 text-base leading-relaxed text-brand-midnight/75 dark:text-brand-white/75 lg:text-lg">
              {c.about.paragraphs.map((p, i) => (
                <m.p key={i} {...fade(0.08 + 0.04 * i)} animate={aboutInView ? { opacity: 1, y: 0 } : {}}>
                  {p}
                </m.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ PURPOSE (Mission & Vision) ══════════════ */}
      <section
        ref={purposeRef}
        className="relative overflow-hidden border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="nosotros-purpose-h2"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-brand-accent/6 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={purposeInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent/60" />
                {c.purpose.badge}
              </span>
            </div>
            <h2
              id="nosotros-purpose-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.purpose.h2}
            </h2>
          </m.div>

          <div className="grid gap-5 md:grid-cols-2">
            <m.div
              {...fade(0.1)}
              animate={purposeInView ? { opacity: 1, y: 0 } : {}}
              className="relative overflow-hidden rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-accent/[0.05] via-white to-transparent p-8 dark:border-brand-accent/30 dark:from-brand-accent/[0.1] dark:via-brand-deep dark:to-brand-deep lg:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10">
                  <Target className="h-5 w-5 text-brand-accent" strokeWidth={1.8} aria-hidden />
                </div>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  {c.purpose.missionLabel}
                </span>
              </div>
              <p className="font-proxima mt-6 text-lg font-semibold leading-snug text-brand-midnight dark:text-brand-white lg:text-xl">
                {c.purpose.mission}
              </p>
            </m.div>

            <m.div
              {...fade(0.18)}
              animate={purposeInView ? { opacity: 1, y: 0 } : {}}
              className="relative overflow-hidden rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-500/[0.05] via-white to-transparent p-8 dark:border-violet-500/30 dark:from-violet-500/[0.1] dark:via-brand-deep dark:to-brand-deep lg:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
                  <Eye className="h-5 w-5 text-violet-600 dark:text-violet-400" strokeWidth={1.8} aria-hidden />
                </div>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                  {c.purpose.visionLabel}
                </span>
              </div>
              <p className="font-proxima mt-6 text-lg font-semibold leading-snug text-brand-midnight dark:text-brand-white lg:text-xl">
                {c.purpose.vision}
              </p>
            </m.div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT WE DO ══════════════ */}
      <section
        ref={doingRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="nosotros-doing-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={doingInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                <span className="h-px w-8 bg-emerald-500/60" />
                {c.doing.badge}
              </span>
            </div>
            <div>
              <h2
                id="nosotros-doing-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.doing.h2}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-midnight/65 dark:text-brand-white/65 lg:text-lg">
                {c.doing.subtitle}
              </p>
            </div>
          </m.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-brand-midnight/10 bg-brand-midnight/10 dark:border-brand-white/10 dark:bg-brand-white/10 md:grid-cols-3">
            {c.doing.items.map((item, i) => {
              const Icon = DOING_ICONS[i];
              const tone = TONE[DOING_TONE[i]];
              return (
                <m.div
                  key={item.label}
                  {...fade(0.08 * i)}
                  animate={doingInView ? { opacity: 1, y: 0 } : {}}
                  className="group flex flex-col bg-white p-8 transition-colors hover:bg-brand-surface dark:bg-brand-deep dark:hover:bg-brand-midnight lg:p-10"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.bg}`}>
                    <Icon className={`h-5 w-5 ${tone.text}`} strokeWidth={1.8} aria-hidden />
                  </div>
                  <span className={`mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${tone.text}`}>
                    {item.label}
                  </span>
                  <h3 className="font-proxima mt-2 text-lg font-bold leading-snug text-brand-midnight dark:text-brand-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {item.desc}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ PRINCIPLES ══════════════ */}
      <section
        ref={principlesRef}
        className="border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="nosotros-principles-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={principlesInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                <span className="h-px w-8 bg-amber-500/60" />
                {c.principles.badge}
              </span>
            </div>
            <h2
              id="nosotros-principles-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.principles.h2}
            </h2>
          </m.div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.principles.items.map((p, i) => {
              const Icon = PRINCIPLE_ICONS[i];
              const tone = TONE[PRINCIPLE_TONE[i]];
              return (
                <m.li
                  key={p.title}
                  {...fade(0.05 * i)}
                  animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                  className={`group flex flex-col rounded-2xl border bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-brand-deep ${tone.border}`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.bg}`}>
                      <Icon className={`h-5 w-5 ${tone.text}`} strokeWidth={1.8} aria-hidden />
                    </div>
                    <span className={`font-mono text-xs font-semibold ${tone.text}`}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-proxima mt-6 text-base font-bold leading-snug text-brand-midnight dark:text-brand-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {p.desc}
                  </p>
                </m.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ══════════════ ORIGIN ══════════════ */}
      <section
        ref={originRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="nosotros-origin-h2"
      >
        <div className="mx-auto max-w-5xl">
          <m.div {...fade(0)} animate={originInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                <span className="h-px w-8 bg-violet-500/60" />
                {c.origin.badge}
              </span>
            </div>
            <h2
              id="nosotros-origin-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.origin.h2}
            </h2>
          </m.div>

          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div /> {/* spacer */}
            <div className="space-y-6 text-base leading-relaxed text-brand-midnight/75 dark:text-brand-white/75 lg:text-lg">
              {c.origin.paragraphs.map((p, i) => (
                <m.p key={i} {...fade(0.08 + 0.04 * i)} animate={originInView ? { opacity: 1, y: 0 } : {}}>
                  {p}
                </m.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ OFFICES ══════════════ */}
      <section
        ref={officesRef}
        className="border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="nosotros-offices-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={officesInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                <span className="h-px w-8 bg-emerald-500/60" />
                {c.offices.badge}
              </span>
            </div>
            <h2
              id="nosotros-offices-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.offices.h2}
            </h2>
          </m.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {c.offices.items.map((office, i) => {
              const tone = TONE[OFFICE_TONE[i]];
              return (
                <m.div
                  key={office.city}
                  {...fade(0.08 * i)}
                  animate={officesInView ? { opacity: 1, y: 0 } : {}}
                  className={`group flex flex-col rounded-2xl border bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-brand-deep ${tone.border}`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.bg}`}>
                      <MapPin className={`h-5 w-5 ${tone.text}`} strokeWidth={1.8} aria-hidden />
                    </div>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide ${tone.bg} ${tone.text}`}>
                      <span className={`h-1 w-1 rounded-full ${tone.dot}`} />
                      {office.role}
                    </span>
                  </div>
                  <h3 className="font-proxima mt-6 text-lg font-bold leading-snug text-brand-midnight dark:text-brand-white">
                    {office.city}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {office.address}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section
        ref={faqRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="nosotros-faq-h2"
      >
        <div className="mx-auto max-w-5xl">
          <m.div {...fade(0)} animate={faqInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent/60" />
                {c.faq.badge}
              </span>
            </div>
            <h2
              id="nosotros-faq-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.faq.h2}
            </h2>
          </m.div>

          <div className="divide-y divide-brand-midnight/10 rounded-2xl border border-brand-midnight/10 bg-white dark:divide-brand-white/10 dark:border-brand-white/10 dark:bg-brand-deep">
            {c.faq.items.map((item, i) => (
              <m.details
                key={item.q}
                {...fade(0.04 * i)}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                className="group"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 transition-colors hover:bg-brand-surface/60 dark:hover:bg-brand-midnight/40 sm:px-8">
                  <span className="font-proxima text-base font-semibold leading-snug text-brand-midnight dark:text-brand-white sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-midnight/50 transition-transform duration-200 group-open:rotate-180 dark:text-brand-white/50"
                    aria-hidden
                  />
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70 sm:px-8 sm:text-base">
                  {item.a}
                </div>
              </m.details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <CTASection
        badge={c.cta.badge}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        ctaLabel={c.cta.ctaLabel}
        ctaHref={BOOKING_URL}
        trustSignals={c.cta.trust}
      />

    </LazyMotion>
  );
}
