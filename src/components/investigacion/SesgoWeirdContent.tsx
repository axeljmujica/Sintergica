"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { FileText, Scale, Banknote, Globe, MapPin, AlertTriangle, Sparkles, ArrowRight, BookOpen, CheckCircle2, XCircle, Film, Shield, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { WeirdBiasChart } from "@/components/sections/WeirdBiasChart";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ─────────────────── i18n ─────────────────── */

const T = {
  es: {
    hero: {
      badge: "Investigación · Universidad de Harvard 2024",
      title1: "El Sesgo WEIRD:",
      title2: "Por qué la IA global falla",
      title3: "en tu contexto",
      subtitle:
        "Los modelos de IA más avanzados fueron entrenados con datos de menos del 12% de la población mundial. Descubre cómo esto afecta tus operaciones en México y LATAM.",
      paperBtn: "Leer el paper",
      compareBtn: "Ver comparación en vivo",
    },
    weird: {
      heading: "¿Qué significa",
      headingSuffix: "?",
      description:
        "Un acrónimo acuñado por investigadores de psicología evolutiva para describir las sociedades que representan menos del 12% de la humanidad pero generan el 96% de los datos de entrenamiento de IA.",
      letters: [
        { desc: "Occidental", context: "de la población mundial" },
        { desc: "Educado formalmente", context: "con acceso a universidad" },
        { desc: "Industrializado", context: "del PIB global" },
        { desc: "Alto ingreso", context: "del ingreso mundial" },
        { desc: "Democrático liberal", context: "de países del mundo" },
      ],
    },
    movie: {
      badge: "Analogía",
      heading: "La diferencia: película doblada vs. original",
      dubbed: {
        title: "La versión doblada",
        subtitle: "Las IAs actuales (ChatGPT, Claude)",
        p1: "Cuando ves una película doblada, entiendes la trama general. Sin embargo, sabes que no es la experiencia completa. Los chistes pierden su gracia, los modismos se diluyen y las referencias culturales se adaptan o desaparecen.",
        p2pre: "Así funcionan las IAs extranjeras: nos ofrecen una versión \u201Cdoblada\u201D, funcional, pero que ",
        p2highlight: "no comprende la profundidad de nuestra cultura",
        p2post:
          ". Además, al ser modelos privados, operan como una \u201Ccaja negra\u201D: no sabemos con certeza cómo funcionan por dentro.",
      },
      original: {
        title: "La versión original",
        subtitle: "Lattice — Diseñada para México",
        p1pre:
          "Ver una película en su idioma original te permite captar la historia completa, con toda su riqueza y significado. ",
        p1highlight: "Lattice es esa versión original para México",
        p1post: ".",
        p2pre:
          "Esta IA piensa directamente en español mexicano porque fue ajustada con nuestro propio conocimiento: ",
        p2highlight: "leyes, libros de texto, historia y cultura",
        p2post:
          ". Al ser un modelo abierto, no es una \u201Ccaja negra\u201D; cualquiera puede revisar su funcionamiento, lo que genera transparencia y confianza.",
      },
    },
    benefits: {
      heading: "¿Y a mí en qué me beneficia?",
      subtitle:
        "Tener nuestra propia IA es clave para construir un futuro digital hecho en México.",
      cards: [
        {
          title: "Trámites de gobierno más fáciles",
          text: "Imagina poder consultar tus dudas en los portales del SAT o del IMSS con un asistente virtual que te entienda como si hablaras con una persona. Podrías resolver trámites complejos sin necesidad de usar lenguaje técnico. Lattice comprende el contexto de cada procedimiento como parte de su entrenamiento base, no como una capa superficial.",
        },
        {
          title: "Entender las \u201Cletras chiquitas\u201D",
          text: "Leyes, contratos y documentos oficiales suelen ser muy difíciles de leer. Con una IA como Lattice, podrías pedirle que te \u201Ctraduzca\u201D esos textos a un lenguaje simple y claro. Así, sabrías con exactitud qué dicen y cómo te afectan, usando el marco legal mexicano correcto.",
        },
        {
          title: "Soberanía y seguridad de datos",
          text: "A diferencia de los modelos extranjeros que procesan tu información en servidores fuera del país, Lattice corre en centros de datos nacionales. Esto garantiza la",
          highlight: " soberanía de datos",
          textPost:
            ", asegurando que tu información personal y la de las empresas mexicanas se mantenga protegida bajo las leyes de México.",
        },
      ],
    },
    economic: {
      heading: "El motor para el futuro de",
      headingHighlight: "México",
      subtitle: "Más empleos y una mejor economía",
      jobs: {
        title: "Nuevas empresas y empleos",
        p1pre:
          "Lattice es el cimiento para crear nuevas empresas y aplicaciones de IA de clase mundial, ",
        p1highlight: "sin depender de costosas tecnologías extranjeras",
        p1post:
          ". Esto fomenta la creación de empleos de alta especialización, como ingenieros de IA y científicos de datos, aquí en México.",
      },
      compete: {
        title: "Competitividad global",
        p1pre:
          "Las empresas mexicanas, desde pymes hasta grandes corporativos, podrán integrar una IA que ",
        p1highlight:
          "entiende perfectamente su mercado y a sus clientes",
        p1post:
          ". Esto las hará más eficientes y competitivas a nivel global, reduciendo costos y mejorando la experiencia del cliente.",
      },
    },
    education: {
      heading: "Impacto en la educación, la cultura y la",
      headingHighlight: "inclusión social",
      edu: {
        title: "Educación a la medida",
        p1: "Se pueden crear tutores virtuales que expliquen temas complejos (matemáticas, historia, civismo) usando el contexto y el currículo educativo mexicano. Un estudiante podría pedir que le \u201Cexplique la Reforma Agraria como si fuera un corrido\u201D, y la IA tendría la capacidad de hacerlo.",
        p2: "Se pueden desarrollar variantes de Lattice dedicadas exclusivamente a la educación en México, haciendo más eficientes las tareas de enseñanza.",
      },
      culture: {
        title: "Inclusión y preservación cultural",
        p1: "Lattice ya está siendo entrenado en lenguas originarias como el náhuatl y el maya, y se busca ampliar su alcance a muchas más.",
        p2pre:
          "La importancia de esto va más allá de la simple preservación cultural; el objetivo es crear una poderosa ",
        p2highlight: "herramienta de inclusión",
        p2post:
          ". La meta es que los ciudadanos que no hablan español puedan recibir servicios de calidad en su lengua materna, ya sea para realizar trámites de gobierno o para recibir atención médica.",
      },
      conclusion: {
        pre: "Lattice no es solo un producto tecnológico;",
        mid: " es infraestructura nacional crítica",
        post: ", tan importante como las carreteras o las redes eléctricas. Es el cerebro digital que permitirá a México construir la IA del futuro en sus propios términos.",
      },
    },
    chat: {
      badge: "Comparación Real",
      heading: "Mismo problema. Dos realidades.",
      subtitle:
        "Un caso real de un contrato mexicano. Mira cómo responde un modelo global entrenado con datos WEIRD vs. Lattice Na\u2019at, diseñado para LATAM.",
      userQuery: "Consulta del usuario",
      query:
        "¿Qué debo hacer si mi proveedor no entrega a tiempo y ya pagué el 50% por adelantado según el contrato mexicano?",
      global: {
        model: "Modelo Global (GPT-4/Claude)",
        trainedWith: "Entrenado con datos WEIRD",
        response: [
          "Basándome en principios generales de contratos internacionales, te recomendaría:",
          "1. Envía una carta formal de reclamo (demand letter)",
          "2. Considera mediación antes de litigio",
          "3. Revisa cláusulas de force majeure",
          "4. En caso de litigio, los tribunales de common law generalmente...",
        ],
        issues: [
          "Menciona 'demand letter' — concepto de common law, no existe en derecho civil mexicano",
          "Ignora el CPP (Código de Procedimientos Civiles) aplicable",
          "No menciona la resolución por incumplimiento ni la restitución de pagos",
          "El término 'force majeure' no se usa en México; es caso fortuito o fuerza mayor",
        ],
      },
      lattice: {
        model: "Lattice Na'at / Lattice Séeb",
        trainedWith: "Entrenado con datos de LATAM",
        response: [
          "Según el Código Civil Federal (Arts. 1796-1800) y práctica mexicana:",
          "1. Reclamo formal vía buro de conciliación o mediación (CPC Art. 694)",
          "2. Requerimiento notarial de cumplimiento o resolución",
          "3. Si persiste: juicio civil ordinario o ejecutivo mercantil",
          "4. Puedes exigir la restitución del 50% pagado + daños y perjuicios",
          "⚠️ Alerta: Verifica si hay cláusula de penas convencionales que limite tu reclamo",
        ],
        strengths: [
          "Cita correctamente Código Civil Federal y Código de Procedimientos Civiles",
          "Menciona requerimiento notarial — institución típica de derecho civil",
          "Incluye alerta específica sobre penas convencionales (muy común en contratos MX)",
          "Diferencia entre juicio civil y ejecutivo mercantil según naturaleza del contrato",
        ],
      },
    },
    examples: {
      heading: "Donde la IA global falla en México",
      subtitle:
        "Casos reales donde los modelos WEIRD cometen errores críticos al aplicar lógica anglosajona a contextos mexicanos.",
      errorLabel: "El error: ",
      impactLabel: "Impacto real: ",
      cards: [
        {
          title: "Contratos mexicanos",
          context: "Civil law vs Common law",
          error:
            "Los modelos globales usan lógica de 'common law' (USA/UK). En México operamos bajo 'derecho civil' donde los códigos son la fuente primaria, no la jurisprudencia.",
          impact:
            "Riesgo de interpretar mal cláusulas de resolución, plazos y obligaciones contractuales.",
        },
        {
          title: "Licitaciones públicas",
          context: "LAASSP · CompraNet · SHCP",
          error:
            "No conocen la Ley de Adquisiciones ni el portal CompraNet. Hablan de 'RFPs' y 'bidding processes' genéricos.",
          impact:
            "Elaboración de documentos que no cumplen requisitos formales. Descalificación automática en procesos.",
        },
        {
          title: "Regulación fiscal mexicana",
          context: "SAT · CFDI · Complementos",
          error:
            "Confunden el CFDI mexicano con 'invoices' anglosajones. No entienden complementos de pago, carta porte, retenciones.",
          impact:
            "Documentación fiscal inválida. Problemas de deducibilidad ante auditorías del SAT.",
        },
      ],
    },
    solution: {
      badge: "La Solución",
      heading: "Lattice Na\u2019at: IA diseñada para LATAM",
      description:
        "Un modelo de 120 mil millones de parámetros construido desde cero con corpus propietario de México y América Latina. No es una traducción: es inteligencia artificial que entiende el contexto legal, fiscal y operativo de nuestra región.",
      features: [
        "Corpus legal mexicano (CCF, CPC, CFF)",
        "Normativa sectorial especializada",
        "Contexto cultural y lingüístico local",
        "Entrenado con documentos reales de LATAM",
        "Sin sesgo anglosajón pre-entrenado",
        "Compatible con Lattice Agents",
      ],
      knowBtn: "Conocer Lattice Na\u2019at",
      exploreBtn: "Explorar Lattice Séeb",
    },
    cta: {
      title: "Elimina el sesgo WEIRD de tu operación",
      subtitle:
        "Solicita un Diagnóstico Inteligente y descubre cómo Lattice Na\u2019at o Lattice Séeb pueden resolver los casos de uso específicos de tu industria.",
      ctaLabel: "Solicitar Diagnóstico Inteligente",
      trust: [
        "Demo con tus datos reales",
        "Comparación directa incluida",
        "Sin permanencia",
      ],
    },
  },
  en: {
    hero: {
      badge: "Research · Harvard University 2024",
      title1: "The WEIRD Bias:",
      title2: "Why global AI fails",
      title3: "in your context",
      subtitle:
        "The most advanced AI models were trained on data from less than 12% of the world\u2019s population. Discover how this affects your operations in Mexico and LATAM.",
      paperBtn: "Read the paper",
      compareBtn: "See live comparison",
    },
    weird: {
      heading: "What does",
      headingSuffix: "mean?",
      description:
        "An acronym coined by evolutionary psychology researchers to describe societies that represent less than 12% of humanity yet generate 96% of AI training data.",
      letters: [
        { desc: "Western", context: "of the world\u2019s population" },
        { desc: "Formally educated", context: "with university access" },
        { desc: "Industrialized", context: "of global GDP" },
        { desc: "High income", context: "of global income" },
        { desc: "Liberal democratic", context: "of countries worldwide" },
      ],
    },
    movie: {
      badge: "Analogy",
      heading: "The difference: dubbed movie vs. original",
      dubbed: {
        title: "The dubbed version",
        subtitle: "Current AIs (ChatGPT, Claude)",
        p1: "When you watch a dubbed movie, you understand the general plot. However, you know it\u2019s not the complete experience. Jokes lose their punch, idioms are diluted, and cultural references are adapted or disappear.",
        p2pre:
          "This is how foreign AIs work: they offer us a \u201Cdubbed\u201D version, functional, but one that ",
        p2highlight:
          "does not grasp the depth of our culture",
        p2post:
          ". Moreover, being proprietary models, they operate as a \u201Cblack box\u201D: we don\u2019t know for certain how they work inside.",
      },
      original: {
        title: "The original version",
        subtitle: "Lattice \u2014 Designed for Mexico",
        p1pre:
          "Watching a movie in its original language lets you grasp the complete story, with all its richness and meaning. ",
        p1highlight:
          "Lattice is that original version for Mexico",
        p1post: ".",
        p2pre:
          "This AI thinks directly in Mexican Spanish because it was fine-tuned with our own knowledge: ",
        p2highlight:
          "laws, textbooks, history, and culture",
        p2post:
          ". Being an open model, it is not a \u201Cblack box\u201D; anyone can review how it works, fostering transparency and trust.",
      },
    },
    benefits: {
      heading: "How does this benefit me?",
      subtitle:
        "Having our own AI is key to building a digital future made in Mexico.",
      cards: [
        {
          title: "Easier government procedures",
          text: "Imagine being able to ask questions on SAT or IMSS portals with a virtual assistant that understands you as if you were talking to a person. You could resolve complex procedures without technical jargon. Lattice understands the context of each Mexican procedure as part of its core training, not as a superficial layer.",
        },
        {
          title: "Understanding the \u201Cfine print\u201D",
          text: "Laws, contracts, and official documents are often very hard to read. With an AI like Lattice, you could ask it to \u201Ctranslate\u201D those texts into simple, clear language. You\u2019d know exactly what they say and how they affect you, using the correct Mexican legal framework.",
        },
        {
          title: "Data sovereignty and security",
          text: "Unlike foreign models that process your information on servers outside the country, Lattice runs in national data centers. This guarantees",
          highlight: " data sovereignty",
          textPost:
            ", ensuring that your personal information and that of Mexican companies remains protected under Mexico\u2019s laws.",
        },
      ],
    },
    economic: {
      heading: "The engine for the future of",
      headingHighlight: "Mexico",
      subtitle: "More jobs and a stronger economy",
      jobs: {
        title: "New businesses and jobs",
        p1pre:
          "Lattice is the foundation for building world-class AI companies and applications, ",
        p1highlight:
          "without relying on expensive foreign technologies",
        p1post:
          ". This fosters the creation of highly specialized jobs, such as AI engineers and data scientists, right here in Mexico.",
      },
      compete: {
        title: "Global competitiveness",
        p1pre:
          "Mexican businesses, from SMEs to large corporations, will be able to integrate an AI that ",
        p1highlight:
          "perfectly understands their market and customers",
        p1post:
          ". This will make them more efficient and competitive globally, reducing costs and improving the customer experience.",
      },
    },
    education: {
      heading: "Impact on education, culture, and",
      headingHighlight: "social inclusion",
      edu: {
        title: "Tailored education",
        p1: "Virtual tutors can be created to explain complex topics (math, history, civics) using the context and curriculum of the Mexican education system. A student could ask to \u201Cexplain the Agrarian Reform as if it were a corrido,\u201D and the AI would be capable of doing so.",
        p2: "Variants of Lattice dedicated exclusively to education in Mexico can be developed, making teaching tasks more efficient.",
      },
      culture: {
        title: "Inclusion and cultural preservation",
        p1: "Lattice is already being trained in indigenous languages such as Nahuatl and Maya, and the goal is to expand to many more.",
        p2pre:
          "The importance of this goes beyond simple cultural preservation; the goal is to create a powerful ",
        p2highlight: "tool for inclusion",
        p2post:
          ". The aim is for citizens who do not speak Spanish to receive quality services in their mother tongue, whether for government procedures or medical care.",
      },
      conclusion: {
        pre: "Lattice is not just a technology product;",
        mid: " it is critical national infrastructure",
        post: ", as important as highways or power grids. It is the digital brain that will enable Mexico to build the AI of the future on its own terms.",
      },
    },
    chat: {
      badge: "Real Comparison",
      heading: "Same problem. Two realities.",
      subtitle:
        "A real case involving a Mexican contract. See how a global model trained on WEIRD data responds vs. Lattice Na\u2019at, designed for LATAM.",
      userQuery: "User query",
      query:
        "What should I do if my supplier doesn\u2019t deliver on time and I already paid 50% upfront under a Mexican contract?",
      global: {
        model: "Global Model (GPT-4/Claude)",
        trainedWith: "Trained on WEIRD data",
        response: [
          "Based on general principles of international contracts, I would recommend:",
          "1. Send a formal demand letter",
          "2. Consider mediation before litigation",
          "3. Review force majeure clauses",
          "4. In case of litigation, common law courts generally...",
        ],
        issues: [
          "Mentions \u2018demand letter\u2019 \u2014 a common law concept that does not exist in Mexican civil law (derecho civil)",
          "Ignores the applicable CPP (C\u00F3digo de Procedimientos Civiles)",
          "Does not mention contract termination for breach (resoluci\u00F3n por incumplimiento) or payment restitution",
          "Uses the term \u2018force majeure\u2019 instead of the Mexican legal terms caso fortuito or fuerza mayor",
        ],
      },
      lattice: {
        model: "Lattice Na'at / Lattice S\u00E9eb",
        trainedWith: "Trained on LATAM data",
        response: [
          "Seg\u00FAn el C\u00F3digo Civil Federal (Arts. 1796-1800) y pr\u00E1ctica mexicana:",
          "1. Reclamo formal v\u00EDa buro de conciliaci\u00F3n o mediaci\u00F3n (CPC Art. 694)",
          "2. Requerimiento notarial de cumplimiento o resoluci\u00F3n",
          "3. Si persiste: juicio civil ordinario o ejecutivo mercantil",
          "4. Puedes exigir la restituci\u00F3n del 50% pagado + da\u00F1os y perjuicios",
          "\u26A0\uFE0F Alerta: Verifica si hay cl\u00E1usula de penas convencionales que limite tu reclamo",
        ],
        strengths: [
          "Correctly cites C\u00F3digo Civil Federal and C\u00F3digo de Procedimientos Civiles",
          "Mentions requerimiento notarial \u2014 a typical civil law institution",
          "Includes specific alert about penas convencionales (very common in Mexican contracts)",
          "Distinguishes between juicio civil and ejecutivo mercantil based on contract type",
        ],
      },
    },
    examples: {
      heading: "Where global AI fails in Mexico",
      subtitle:
        "Real cases where WEIRD models make critical errors by applying Anglo-Saxon logic to Mexican contexts.",
      errorLabel: "The error: ",
      impactLabel: "Real impact: ",
      cards: [
        {
          title: "Mexican contracts",
          context: "Civil law vs Common law",
          error:
            "Global models use common law logic (USA/UK). In Mexico, the legal system operates under civil law (derecho civil), where statutes are the primary source, not case law (jurisprudencia).",
          impact:
            "Risk of misinterpreting termination clauses, deadlines, and contractual obligations.",
        },
        {
          title: "Public procurement",
          context: "LAASSP \u00B7 CompraNet \u00B7 SHCP",
          error:
            "They are unaware of Mexico\u2019s Ley de Adquisiciones or the CompraNet portal. They refer to generic \u2018RFPs\u2019 and \u2018bidding processes.\u2019",
          impact:
            "Documents that fail to meet formal requirements. Automatic disqualification from procurement processes.",
        },
        {
          title: "Mexican tax regulation",
          context: "SAT \u00B7 CFDI \u00B7 Complementos",
          error:
            "They confuse Mexico\u2019s CFDI with Anglo-Saxon \u2018invoices.\u2019 They don\u2019t understand complementos de pago, carta porte, or withholdings (retenciones).",
          impact:
            "Invalid tax documentation. Deductibility issues during SAT audits.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      heading: "Lattice Na\u2019at: AI designed for LATAM",
      description:
        "A 120-billion-parameter model built from scratch with a proprietary corpus from Mexico and Latin America. It is not a translation: it is artificial intelligence that understands the legal, fiscal, and operational context of our region.",
      features: [
        "Mexican legal corpus (CCF, CPC, CFF)",
        "Specialized sector regulations",
        "Local cultural and linguistic context",
        "Trained on real LATAM documents",
        "No pre-trained Anglo-Saxon bias",
        "Compatible with Lattice Agents",
      ],
      knowBtn: "Discover Lattice Na\u2019at",
      exploreBtn: "Explore Lattice S\u00E9eb",
    },
    cta: {
      title: "Eliminate WEIRD bias from your operations",
      subtitle:
        "Request a Smart Diagnosis and discover how Lattice Na\u2019at or Lattice S\u00E9eb can solve the specific use cases for your industry.",
      ctaLabel: "Request Smart Diagnosis",
      trust: [
        "Demo with your real data",
        "Direct comparison included",
        "No lock-in",
      ],
    },
  },
  "pt-br": {
    hero: {
      badge: "Pesquisa · Universidade de Harvard 2024",
      title1: "O Vi\u00E9s WEIRD:",
      title2: "Por que a IA global falha",
      title3: "no seu contexto",
      subtitle:
        "Os modelos de IA mais avan\u00E7ados foram treinados com dados de menos de 12% da popula\u00E7\u00E3o mundial. Descubra como isso afeta suas opera\u00E7\u00F5es no M\u00E9xico e na Am\u00E9rica Latina.",
      paperBtn: "Ler o paper",
      compareBtn: "Ver compara\u00E7\u00E3o ao vivo",
    },
    weird: {
      heading: "O que significa",
      headingSuffix: "?",
      description:
        "Um acr\u00F4nimo cunhado por pesquisadores de psicologia evolutiva para descrever sociedades que representam menos de 12% da humanidade, mas geram 96% dos dados de treinamento de IA.",
      letters: [
        { desc: "Ocidental", context: "da popula\u00E7\u00E3o mundial" },
        { desc: "Formalmente educado", context: "com acesso \u00E0 universidade" },
        { desc: "Industrializado", context: "do PIB global" },
        { desc: "Alta renda", context: "da renda mundial" },
        { desc: "Democr\u00E1tico liberal", context: "dos pa\u00EDses do mundo" },
      ],
    },
    movie: {
      badge: "Analogia",
      heading: "A diferen\u00E7a: filme dublado vs. original",
      dubbed: {
        title: "A vers\u00E3o dublada",
        subtitle: "As IAs atuais (ChatGPT, Claude)",
        p1: "Quando voc\u00EA assiste a um filme dublado, entende a trama geral. Por\u00E9m, sabe que n\u00E3o \u00E9 a experi\u00EAncia completa. As piadas perdem a gra\u00E7a, as express\u00F5es se diluem e as refer\u00EAncias culturais s\u00E3o adaptadas ou desaparecem.",
        p2pre:
          "\u00C9 assim que as IAs estrangeiras funcionam: nos oferecem uma vers\u00E3o \u201Cdublada\u201D, funcional, mas que ",
        p2highlight:
          "n\u00E3o compreende a profundidade da nossa cultura",
        p2post:
          ". Al\u00E9m disso, por serem modelos privados, operam como uma \u201Ccaixa preta\u201D: n\u00E3o sabemos com certeza como funcionam por dentro.",
      },
      original: {
        title: "A vers\u00E3o original",
        subtitle: "Lattice \u2014 Projetada para o M\u00E9xico",
        p1pre:
          "Assistir a um filme no idioma original permite captar a hist\u00F3ria completa, com toda sua riqueza e significado. ",
        p1highlight:
          "Lattice \u00E9 essa vers\u00E3o original para o M\u00E9xico",
        p1post: ".",
        p2pre:
          "Esta IA pensa diretamente em espanhol mexicano porque foi ajustada com nosso pr\u00F3prio conhecimento: ",
        p2highlight:
          "leis, livros did\u00E1ticos, hist\u00F3ria e cultura",
        p2post:
          ". Por ser um modelo aberto, n\u00E3o \u00E9 uma \u201Ccaixa preta\u201D; qualquer pessoa pode revisar seu funcionamento, o que gera transpar\u00EAncia e confian\u00E7a.",
      },
    },
    benefits: {
      heading: "E como isso me beneficia?",
      subtitle:
        "Ter nossa pr\u00F3pria IA \u00E9 fundamental para construir um futuro digital feito no M\u00E9xico.",
      cards: [
        {
          title: "Tr\u00E2mites governamentais mais f\u00E1ceis",
          text: "Imagine poder consultar suas d\u00FAvidas nos portais do SAT ou do IMSS com um assistente virtual que te entende como se voc\u00EA estivesse falando com uma pessoa. Voc\u00EA poderia resolver tr\u00E2mites complexos sem necessidade de usar linguagem t\u00E9cnica. O Lattice compreende o contexto de cada procedimento como parte de seu treinamento base, n\u00E3o como uma camada superficial.",
        },
        {
          title: "Entender as \u201Cletras miúdas\u201D",
          text: "Leis, contratos e documentos oficiais costumam ser muito dif\u00EDceis de ler. Com uma IA como o Lattice, voc\u00EA poderia pedir que \u201Ctraduzisse\u201D esses textos para uma linguagem simples e clara. Assim, saberia exatamente o que dizem e como te afetam, usando o marco legal mexicano correto.",
        },
        {
          title: "Soberania e seguran\u00E7a de dados",
          text: "Diferentemente dos modelos estrangeiros que processam suas informa\u00E7\u00F5es em servidores fora do pa\u00EDs, o Lattice roda em centros de dados nacionais. Isso garante a",
          highlight: " soberania de dados",
          textPost:
            ", assegurando que suas informa\u00E7\u00F5es pessoais e as das empresas mexicanas permane\u00E7am protegidas sob as leis do M\u00E9xico.",
        },
      ],
    },
    economic: {
      heading: "O motor para o futuro do",
      headingHighlight: "M\u00E9xico",
      subtitle: "Mais empregos e uma economia mais forte",
      jobs: {
        title: "Novas empresas e empregos",
        p1pre:
          "O Lattice \u00E9 a base para criar novas empresas e aplica\u00E7\u00F5es de IA de classe mundial, ",
        p1highlight:
          "sem depender de tecnologias estrangeiras caras",
        p1post:
          ". Isso fomenta a cria\u00E7\u00E3o de empregos de alta especializa\u00E7\u00E3o, como engenheiros de IA e cientistas de dados, aqui no M\u00E9xico.",
      },
      compete: {
        title: "Competitividade global",
        p1pre:
          "As empresas mexicanas, de PMEs a grandes corporações, poderão integrar uma IA que ",
        p1highlight:
          "entende perfeitamente seu mercado e seus clientes",
        p1post:
          ". Isso as tornar\u00E1 mais eficientes e competitivas globalmente, reduzindo custos e melhorando a experi\u00EAncia do cliente.",
      },
    },
    education: {
      heading: "Impacto na educa\u00E7\u00E3o, na cultura e na",
      headingHighlight: "inclus\u00E3o social",
      edu: {
        title: "Educa\u00E7\u00E3o sob medida",
        p1: "Tutores virtuais podem ser criados para explicar temas complexos (matem\u00E1tica, hist\u00F3ria, civismo) usando o contexto e o curr\u00EDculo educacional mexicano. Um estudante poderia pedir que \u201Cexplicasse a Reforma Agr\u00E1ria como se fosse um corrido\u201D, e a IA teria capacidade de faz\u00EA-lo.",
        p2: "Variantes do Lattice dedicadas exclusivamente \u00E0 educa\u00E7\u00E3o no M\u00E9xico podem ser desenvolvidas, tornando as tarefas de ensino mais eficientes.",
      },
      culture: {
        title: "Inclus\u00E3o e preserva\u00E7\u00E3o cultural",
        p1: "O Lattice j\u00E1 est\u00E1 sendo treinado em l\u00EDnguas origin\u00E1rias como o n\u00E1huatl e o maia, e o objetivo \u00E9 ampliar seu alcance para muitas mais.",
        p2pre:
          "A import\u00E2ncia disso vai al\u00E9m da simples preserva\u00E7\u00E3o cultural; o objetivo \u00E9 criar uma poderosa ",
        p2highlight: "ferramenta de inclus\u00E3o",
        p2post:
          ". A meta \u00E9 que os cidad\u00E3os que n\u00E3o falam espanhol possam receber servi\u00E7os de qualidade em sua l\u00EDngua materna, seja para realizar tr\u00E2mites governamentais ou para receber atendimento m\u00E9dico.",
      },
      conclusion: {
        pre: "O Lattice n\u00E3o \u00E9 apenas um produto tecnol\u00F3gico;",
        mid: " \u00E9 infraestrutura nacional cr\u00EDtica",
        post: ", t\u00E3o importante quanto rodovias ou redes el\u00E9tricas. \u00C9 o c\u00E9rebro digital que permitir\u00E1 ao M\u00E9xico construir a IA do futuro em seus pr\u00F3prios termos.",
      },
    },
    chat: {
      badge: "Compara\u00E7\u00E3o Real",
      heading: "Mesmo problema. Duas realidades.",
      subtitle:
        "Um caso real de um contrato mexicano. Veja como um modelo global treinado com dados WEIRD responde vs. Lattice Na\u2019at, projetado para a Am\u00E9rica Latina.",
      userQuery: "Consulta do usu\u00E1rio",
      query:
        "O que devo fazer se meu fornecedor n\u00E3o entrega no prazo e eu j\u00E1 paguei 50% antecipadamente conforme o contrato mexicano?",
      global: {
        model: "Modelo Global (GPT-4/Claude)",
        trainedWith: "Treinado com dados WEIRD",
        response: [
          "Com base em princ\u00EDpios gerais de contratos internacionais, eu recomendaria:",
          "1. Envie uma carta formal de reclama\u00E7\u00E3o (demand letter)",
          "2. Considere media\u00E7\u00E3o antes de lit\u00EDgio",
          "3. Revise cl\u00E1usulas de force majeure",
          "4. Em caso de lit\u00EDgio, os tribunais de common law geralmente...",
        ],
        issues: [
          "Menciona \u2018demand letter\u2019 \u2014 conceito de common law que n\u00E3o existe no direito civil mexicano (derecho civil)",
          "Ignora o CPP (C\u00F3digo de Procedimientos Civiles) aplic\u00E1vel",
          "N\u00E3o menciona a resolu\u00E7\u00E3o por inadimpl\u00EAncia (resoluci\u00F3n por incumplimiento) nem a restitui\u00E7\u00E3o de pagamentos",
          "Usa o termo \u2018force majeure\u2019 em vez dos termos jur\u00EDdicos mexicanos caso fortuito ou fuerza mayor",
        ],
      },
      lattice: {
        model: "Lattice Na'at / Lattice S\u00E9eb",
        trainedWith: "Treinado com dados da Am\u00E9rica Latina",
        response: [
          "Seg\u00FAn el C\u00F3digo Civil Federal (Arts. 1796-1800) y pr\u00E1ctica mexicana:",
          "1. Reclamo formal v\u00EDa buro de conciliaci\u00F3n o mediaci\u00F3n (CPC Art. 694)",
          "2. Requerimiento notarial de cumplimiento o resoluci\u00F3n",
          "3. Si persiste: juicio civil ordinario o ejecutivo mercantil",
          "4. Puedes exigir la restituci\u00F3n del 50% pagado + da\u00F1os y perjuicios",
          "\u26A0\uFE0F Alerta: Verifica si hay cl\u00E1usula de penas convencionales que limite tu reclamo",
        ],
        strengths: [
          "Cita corretamente o C\u00F3digo Civil Federal e o C\u00F3digo de Procedimientos Civiles",
          "Menciona requerimiento notarial \u2014 institui\u00E7\u00E3o t\u00EDpica do direito civil",
          "Inclui alerta espec\u00EDfico sobre penas convencionales (muito comum em contratos mexicanos)",
          "Diferencia entre juicio civil e ejecutivo mercantil conforme a natureza do contrato",
        ],
      },
    },
    examples: {
      heading: "Onde a IA global falha no M\u00E9xico",
      subtitle:
        "Casos reais em que modelos WEIRD cometem erros cr\u00EDticos ao aplicar l\u00F3gica anglo-sax\u00E3 a contextos mexicanos.",
      errorLabel: "O erro: ",
      impactLabel: "Impacto real: ",
      cards: [
        {
          title: "Contratos mexicanos",
          context: "Civil law vs Common law",
          error:
            "Os modelos globais usam l\u00F3gica de common law (EUA/Reino Unido). No M\u00E9xico, o sistema jur\u00EDdico opera sob o derecho civil, onde os c\u00F3digos s\u00E3o a fonte prim\u00E1ria, n\u00E3o a jurisprud\u00EAncia.",
          impact:
            "Risco de interpretar mal cl\u00E1usulas de resolu\u00E7\u00E3o, prazos e obriga\u00E7\u00F5es contratuais.",
        },
        {
          title: "Licita\u00E7\u00F5es p\u00FAblicas",
          context: "LAASSP \u00B7 CompraNet \u00B7 SHCP",
          error:
            "N\u00E3o conhecem a Ley de Adquisiciones nem o portal CompraNet. Falam de \u2018RFPs\u2019 e \u2018bidding processes\u2019 gen\u00E9ricos.",
          impact:
            "Elabora\u00E7\u00E3o de documentos que n\u00E3o cumprem requisitos formais. Desclassifica\u00E7\u00E3o autom\u00E1tica em processos.",
        },
        {
          title: "Regula\u00E7\u00E3o fiscal mexicana",
          context: "SAT \u00B7 CFDI \u00B7 Complementos",
          error:
            "Confundem o CFDI mexicano com \u2018invoices\u2019 anglo-sax\u00F5es. N\u00E3o entendem complementos de pago, carta porte nem reten\u00E7\u00F5es (retenciones).",
          impact:
            "Documenta\u00E7\u00E3o fiscal inv\u00E1lida. Problemas de dedutibilidade em auditorias do SAT.",
        },
      ],
    },
    solution: {
      badge: "A Solu\u00E7\u00E3o",
      heading: "Lattice Na\u2019at: IA projetada para a Am\u00E9rica Latina",
      description:
        "Um modelo de 120 bilh\u00F5es de par\u00E2metros constru\u00EDdo do zero com corpus propriet\u00E1rio do M\u00E9xico e da Am\u00E9rica Latina. N\u00E3o \u00E9 uma tradu\u00E7\u00E3o: \u00E9 intelig\u00EAncia artificial que entende o contexto legal, fiscal e operacional da nossa regi\u00E3o.",
      features: [
        "Corpus jur\u00EDdico mexicano (CCF, CPC, CFF)",
        "Normativa setorial especializada",
        "Contexto cultural e lingu\u00EDstico local",
        "Treinado com documentos reais da Am\u00E9rica Latina",
        "Sem vi\u00E9s anglo-sax\u00E3o pr\u00E9-treinado",
        "Compat\u00EDvel com Lattice Agents",
      ],
      knowBtn: "Conhecer Lattice Na\u2019at",
      exploreBtn: "Explorar Lattice S\u00E9eb",
    },
    cta: {
      title: "Elimine o vi\u00E9s WEIRD da sua opera\u00E7\u00E3o",
      subtitle:
        "Solicite um Diagn\u00F3stico Inteligente e descubra como o Lattice Na\u2019at ou o Lattice S\u00E9eb podem resolver os casos de uso espec\u00EDficos do seu setor.",
      ctaLabel: "Solicitar Diagn\u00F3stico Inteligente",
      trust: [
        "Demo com seus dados reais",
        "Compara\u00E7\u00E3o direta inclu\u00EDda",
        "Sem fideliza\u00E7\u00E3o",
      ],
    },
  },
} as const;

/* ─────────────── Base data (non-translatable) ─────────────── */

const WEIRD_LETTERS_BASE = [
  { letter: "W", word: "Western", stat: "12%" },
  { letter: "E", word: "Educated", stat: "15%" },
  { letter: "I", word: "Industrialized", stat: "19%" },
  { letter: "R", word: "Rich", stat: "16%" },
  { letter: "D", word: "Democratic", stat: "8%" },
];

const EJEMPLOS_ICONS = [FileText, Scale, Banknote];

/* ─────────────────── Component ─────────────────── */

export function SesgoWeirdContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const weirdRef = useRef<HTMLDivElement>(null);
  const weirdInView = useInView(weirdRef, { once: true, margin: "-100px" });
  const chatRef = useRef<HTMLDivElement>(null);
  const chatInView = useInView(chatRef, { once: true, margin: "-100px" });
  const ejRef = useRef<HTMLDivElement>(null);
  const ejInView = useInView(ejRef, { once: true, margin: "-100px" });
  const solRef = useRef<HTMLDivElement>(null);
  const solInView = useInView(solRef, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <>
        {/* Hero with Paper Button */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-deep py-24 md:py-32">
          {/* Decorative background image */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <Image
              src="/images/pages/General/hand-reaching-out-touch-human-hand.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.08]"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/80 via-brand-surface/60 to-brand-surface dark:from-brand-deep/80 dark:via-brand-deep/60 dark:to-brand-deep" />
          </div>

          {/* Background gradient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[100px]" />
            <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-brand-accent/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
                <BookOpen className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  {t.hero.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-proxima text-4xl font-bold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl lg:text-6xl">
                {t.hero.title1}
                <br />
                <span className="text-orange-400">{t.hero.title2}</span>
                <br />
                <span className="text-brand-midnight/60 dark:text-brand-white/60">{t.hero.title3}</span>
              </h1>

              {/* Subtitle */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                {t.hero.subtitle}
              </p>

              {/* Paper Button */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <a
                  href="https://coevolution.fas.harvard.edu/publications/which-humans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-500/90 hover:shadow-orange-500/40"
                >
                  <BookOpen className="h-4 w-4" />
                  {t.hero.paperBtn}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#comparacion"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-midnight/60 dark:text-brand-white/60 transition-colors hover:text-brand-accent dark:hover:text-brand-white"
                >
                  {t.hero.compareBtn}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </m.div>
            </m.div>
          </div>
        </section>

        {/* WEIRD Definition */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <m.div
              ref={weirdRef}
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              animate={weirdInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="text-center"
            >
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.weird.heading} <span className="text-orange-400">WEIRD</span>{t.weird.headingSuffix}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-brand-midnight/60 dark:text-brand-white/60">
                {t.weird.description}
              </p>
            </m.div>

            {/* WEIRD Cards */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {WEIRD_LETTERS_BASE.map((w, i) => (
                <m.div
                  key={w.letter}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={weirdInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-orange-500/20 bg-brand-surface dark:bg-brand-deep p-5 transition-all hover:border-orange-500/40 hover:bg-orange-500/[0.05]"
                >
                  <div className="text-center">
                    <span className="font-proxima text-4xl font-bold text-orange-400">{w.letter}</span>
                    <p className="mt-2 text-sm font-semibold text-brand-midnight dark:text-brand-white">{w.word}</p>
                    <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{t.weird.letters[i].desc}</p>
                    <div className="mt-4 border-t border-orange-500/20 pt-3">
                      <p className="text-lg font-bold text-orange-400">{w.stat}</p>
                      <p className="text-[0.65rem] text-brand-midnight/40 dark:text-brand-white/40">{t.weird.letters[i].context}</p>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-16">
              <WeirdBiasChart />
            </div>
          </div>
        </section>

        {/* Movie Analogy */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2">
                <Film className="h-4 w-4 text-brand-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {t.movie.badge}
                </span>
              </div>
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.movie.heading}
              </h2>
            </m.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* Doblada */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5 }}
                className="rounded-2xl border border-red-500/20 bg-brand-surface dark:bg-brand-deep p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="font-proxima text-xl font-bold text-red-400">{t.movie.dubbed.title}</p>
                    <p className="text-sm text-brand-midnight/40 dark:text-brand-white/40">{t.movie.dubbed.subtitle}</p>
                  </div>
                </div>
                <p className="text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
                  {t.movie.dubbed.p1}
                </p>
                <p className="mt-4 text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
                  {t.movie.dubbed.p2pre}<span className="text-red-400 font-semibold">{t.movie.dubbed.p2highlight}</span>{t.movie.dubbed.p2post}
                </p>
              </m.div>

              {/* Original */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 }}
                className="rounded-2xl border border-brand-accent/20 bg-brand-surface dark:bg-brand-deep p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                    <CheckCircle2 className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-proxima text-xl font-bold text-brand-accent">{t.movie.original.title}</p>
                    <p className="text-sm text-brand-midnight/40 dark:text-brand-white/40">{t.movie.original.subtitle}</p>
                  </div>
                </div>
                <p className="text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
                  {t.movie.original.p1pre}<span className="text-brand-accent font-semibold">{t.movie.original.p1highlight}</span>{t.movie.original.p1post}
                </p>
                <p className="mt-4 text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
                  {t.movie.original.p2pre}<span className="text-brand-accent font-semibold">{t.movie.original.p2highlight}</span>{t.movie.original.p2post}
                </p>
              </m.div>
            </div>
          </div>
        </section>

        {/* Benefits for Mexico */}
        <section className="bg-brand-surface dark:bg-brand-deep py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="text-center"
            >
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.benefits.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-brand-midnight/60 dark:text-brand-white/60">
                {t.benefits.subtitle}
              </p>
            </m.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Benefit 1 */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5 }}
                className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                  <Briefcase className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="mt-4 text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.benefits.cards[0].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.benefits.cards[0].text}
                </p>
              </m.div>

              {/* Benefit 2 */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 }}
                className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                  <FileText className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="mt-4 text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.benefits.cards[1].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.benefits.cards[1].text}
                </p>
              </m.div>

              {/* Benefit 3 */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
                className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Shield className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.benefits.cards[2].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.benefits.cards[2].text}
                  <span className="text-emerald-400 font-semibold">{t.benefits.cards[2].highlight}</span>{t.benefits.cards[2].textPost}
                </p>
              </m.div>
            </div>
          </div>
        </section>

        {/* Economic Impact */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="text-center"
            >
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.economic.heading} <span className="text-brand-accent">{t.economic.headingHighlight}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-brand-midnight/60 dark:text-brand-white/60">
                {t.economic.subtitle}
              </p>
            </m.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* New jobs */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5 }}
                className="rounded-2xl border border-brand-accent/20 bg-brand-accent/[0.05] p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                    <Briefcase className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.economic.jobs.title}</h3>
                </div>
                <p className="mt-4 text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
                  {t.economic.jobs.p1pre}<span className="text-brand-accent font-semibold">{t.economic.jobs.p1highlight}</span>{t.economic.jobs.p1post}
                </p>
              </m.div>

              {/* Competitiveness */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 }}
                className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.05] p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                    <TrendingUp className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.economic.compete.title}</h3>
                </div>
                <p className="mt-4 text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
                  {t.economic.compete.p1pre}<span className="text-orange-400 font-semibold">{t.economic.compete.p1highlight}</span>{t.economic.compete.p1post}
                </p>
              </m.div>
            </div>
          </div>
        </section>

        {/* Education and Culture */}
        <section className="bg-brand-surface dark:bg-brand-deep py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="text-center"
            >
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.education.heading} <span className="text-brand-accent">{t.education.headingHighlight}</span>
              </h2>
            </m.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Education */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5 }}
                className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                    <GraduationCap className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.education.edu.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.education.edu.p1}
                </p>
                <p className="mt-3 text-sm text-brand-midnight/60 dark:text-brand-white/60">
                  {t.education.edu.p2}
                </p>
              </m.div>

              {/* Cultural Inclusion */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 }}
                className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Globe className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.education.culture.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.education.culture.p1}
                </p>
                <p className="mt-3 text-sm text-brand-midnight/60 dark:text-brand-white/60">
                  {t.education.culture.p2pre}<span className="text-emerald-400 font-semibold">{t.education.culture.p2highlight}</span>{t.education.culture.p2post}
                </p>
              </m.div>
            </div>

            {/* Conclusion */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
              className="mt-10 rounded-2xl border border-brand-accent/30 bg-brand-accent/[0.08] p-8 text-center"
            >
              <p className="text-lg leading-relaxed text-brand-midnight/80 dark:text-brand-white/80">
                <span className="text-brand-accent font-bold">{t.education.conclusion.pre}</span>
                <span className="text-brand-accent font-bold">{t.education.conclusion.mid}</span>{t.education.conclusion.post}
              </p>
            </m.div>
          </div>
        </section>

        {/* Chat Comparison */}
        <section id="comparacion" className="bg-brand-surface dark:bg-brand-deep py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <m.div
              ref={chatRef}
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              animate={chatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                  {t.chat.badge}
                </span>
              </div>
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.chat.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-brand-midnight/60 dark:text-brand-white/60">
                {t.chat.subtitle}
              </p>
            </m.div>

            {/* Query */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={chatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">{t.chat.userQuery}</p>
              <p className="mt-2 text-brand-midnight dark:text-brand-white">{t.chat.query}</p>
            </m.div>

            {/* Side by Side */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {/* Global Model */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: -20 }}
                animate={chatInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.3 }}
                className="rounded-2xl border border-red-500/20 bg-brand-surface dark:bg-brand-midnight/50 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                    <Globe className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-red-400">{t.chat.global.model}</p>
                    <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{t.chat.global.trainedWith}</p>
                  </div>
                </div>
                <div className="space-y-2 rounded-xl bg-brand-surface dark:bg-brand-deep p-4">
                  {t.chat.global.response.map((line, i) => (
                    <p key={i} className="text-sm text-brand-midnight/70 dark:text-brand-white/70">{line}</p>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {t.chat.global.issues.map((issue, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      <p className="text-sm text-red-400/80">{issue}</p>
                    </div>
                  ))}
                </div>
              </m.div>

              {/* Lattice */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                animate={chatInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.4 }}
                className="rounded-2xl border border-brand-accent/20 bg-brand-surface dark:bg-brand-midnight/50 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10">
                    <MapPin className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-accent">{t.chat.lattice.model}</p>
                    <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{t.chat.lattice.trainedWith}</p>
                  </div>
                </div>
                <div className="space-y-2 rounded-xl bg-brand-accent/[0.05] p-4">
                  {t.chat.lattice.response.map((line, i) => (
                    <p key={i} className="text-sm text-brand-midnight/80 dark:text-brand-white/80">{line}</p>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {t.chat.lattice.strengths.map((strength, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      <p className="text-sm text-brand-accent/80">{strength}</p>
                    </div>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Real Examples */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <m.div
              ref={ejRef}
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              animate={ejInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="text-center"
            >
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.examples.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-brand-midnight/60 dark:text-brand-white/60">
                {t.examples.subtitle}
              </p>
            </m.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.examples.cards.map((ej, i) => {
                const Icon = EJEMPLOS_ICONS[i];
                return (
                  <m.div
                    key={ej.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={ejInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.1 }}
                    className="group rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-6 transition-all hover:border-orange-500/30 hover:bg-orange-500/[0.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">
                        <Icon className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-orange-400">{ej.context}</p>
                        <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white">{ej.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                      <span className="text-red-400 font-medium">{t.examples.errorLabel}</span>
                      {ej.error}
                    </p>
                    <p className="mt-3 text-sm text-brand-midnight/40 dark:text-brand-white/40">
                      <span className="text-orange-400 font-medium">{t.examples.impactLabel}</span>
                      {ej.impact}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-brand-surface dark:bg-brand-deep py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <m.div
              ref={solRef}
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              animate={solInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-brand-accent/20 bg-brand-accent/[0.03] p-8 md:p-12"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/20 blur-[80px]" />

              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-brand-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                    {t.solution.badge}
                  </span>
                </div>

                <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                  {t.solution.heading}
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                  {t.solution.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {t.solution.features.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      <p className="text-sm text-brand-midnight/70 dark:text-brand-white/70">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/investigacion/lattice-naat"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-accent/25 transition-all hover:bg-brand-accent/90"
                  >
                    {t.solution.knowBtn}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/soluciones/lattice-seeb"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-midnight/20 dark:border-brand-white/10 px-6 py-3 text-sm font-semibold text-brand-midnight dark:text-brand-white transition-colors hover:border-brand-white/40"
                  >
                    {t.solution.exploreBtn}
                  </a>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[...t.cta.trust]}
        />
      </>
    </LazyMotion>
  );
}
