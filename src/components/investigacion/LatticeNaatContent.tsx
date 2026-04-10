"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Landmark, Cpu, Globe, BookOpen,
  BrainCircuit, ArrowRight, Github, ChevronRight,
  Network, FlaskConical, Shield,
} from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { LordIcon } from "@/components/ui/LordIcon";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";

const BOOKING_URL = "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4";

/* ─────────────────── i18n ─────────────────── */

const T = {
  es: {
    hero: {
      badge: "Investigación",
      title1: "Un proyecto de investigación para",
      title2: "el cerebro digital de México y América Latina",
      subtitle: "Más que un producto, Lattice Na'at es un proyecto de investigación dedicado a crear el dataset normativo y cultural más grande de México. Junto con universidades y cámaras empresariales, curamos el conocimiento para construir el cerebro digital de LATAM.",
      ctaPrimary: "Colabora con nosotros",
    },
    stats: [
      { value: "1T", label: "Parámetros", sub: "Capacidad total de la arquitectura (32B activos en MoE)" },
      { value: "256K", label: "Tokens", sub: "Ventana de contexto extendida para análisis documental profundo" },
      { value: "5", label: "Variantes", sub: "Familia de modelos desde 0.8B (Edge) hasta 1T (Frontier)" },
      { value: "100%", label: "Soberano", sub: "Diseñado sin sesgo WEIRD para el contexto normativo de México" },
    ],
    porQue: {
      badge: "POR QUÉ IMPORTA",
      title: "La soberanía tecnológica es una decisión política",
      p1: "Las IA extranjeras nos ofrecen una versión \"doblada\" de la realidad: funcional, pero que pierde modismos, chistes y profundidad cultural. Lattice Na'at es la versión en idioma original, entendiendo nuestra realidad legal y lingüística sin intermediarios.",
      p2pre: "Investigadores de Harvard (Atari et al., 2023) encontraron una correlación de ",
      p2bold: "r = −0.70",
      p2post: " entre la distancia cultural de un país respecto a EE.UU. y la precisión con que la IA refleja sus valores. Este es el ",
      p2boldEnd: "sesgo WEIRD",
      p2end: " (Western, Educated, Industrialized, Rich, Democratic).",
      chartTitle: "Sesgo WEIRD en IA Global",
      chartSub: "Precisión vs Distancia Cultural",
      chartYAxis: "Alineación de valores",
      chartXStart: "EE.UU. (WEIRD)",
      chartXEnd: "Resto del mundo",
      chartMx: "México",
      p3: "Los modelos globales fueron entrenados con datos de menos del 12% de la humanidad. México —con formas de pensar más colectivistas, holísticas y con marcos normativos distintos— queda sistemáticamente sub-representado.",
      p4pre: "El resultado práctico:",
      p4: " un LLM genérico que revisa un contrato mexicano puede citar precedentes del derecho anglosajón, confundir al SAT con el IRS, o inventar regulaciones inexistentes de la CNBV.",
      p5: "Este esfuerzo es infraestructura nacional crítica construida para cerrar esa brecha, curando el dataset directamente junto a la academia, gobierno y cámaras empresariales de México.",
      linkLabel: "Leer sobre el Sesgo WEIRD",
    },
    soberaniaItems: [
      { enfoque: "Eficiencia y modelos abiertos europeos" },
      { enfoque: "Razonamiento matemático y código" },
      { enfoque: "Modelos abiertos financiados por el estado" },
      { enfoque: "Contexto cultural y normativo LATAM" },
    ],
    soberaniaBadge: "Nuestro",
    capacidades: {
      badge: "CAPACIDADES",
      title: "Lo que el dataset de Na'at contiene que otros ignoran",
      subtitle: "Curado con lo que importa: el español real, la ley mexicana, las normas sectoriales y las voces que la IA global ha dejado fuera.",
    },
    capacidadesItems: [
      { title: "Español mexicano profundo", description: "Comprensión nativa de modismos, tecnicismos y variaciones dialectales de México y LATAM — no traducido del inglés." },
      { title: "Marco normativo mexicano", description: "Entrenado en legislación, DOF, jurisprudencia SCJN, normativas CNBV, CRE, COFEPRIS y disposiciones fiscales vigentes." },
      { title: "Razonamiento multi-paso", description: "Análisis lógico complejo, deducción causal y resolución de problemas en múltiples etapas sobre casos industriales reales." },
      { title: "Lenguas originarias", description: "Soporte en desarrollo para Náhuatl y Maya — las lenguas de más de 7 millones de mexicanos invisibles para la IA global." },
      { title: "Multimodalidad nativa", description: "Procesamiento integrado de texto, imágenes y documentos complejos dentro de un mismo flujo de razonamiento." },
      { title: "Destilación eficiente", description: "Optimizado para transferir conocimiento especializado a los SLM Séeb mediante LoRA y QLoRA — precisión industrial con modelos compactos." },
    ],
    rol: {
      badge: "ROL ESTRATÉGICO",
      title: "El motor de todo el ecosistema Lattice",
      subtitle: "Na'at no es un simple producto comercial. Es el proyecto de investigación y la base de datos fundacional que hace posibles a los agentes expertos.",
    },
    rolItems: [
      { title: "Base de conocimiento maestro", description: "El inmenso dataset normativo y cultural de Na'at actúa como la fuente experta que transfiere conocimiento a los SLM Séeb. Cada modelo por industria aprende de este corpus curado.", tag: "Dataset Na'at → Séeb" },
      { title: "Evolución tecnológica continua", description: "Al separar el valor del dataset (nuestro activo principal) del modelo base, podemos evolucionar de la arquitectura inicial hacia arquitecturas futuras más potentes sin perder el conocimiento adquirido.", tag: "Agnóstico al modelo base" },
      { title: "Infraestructura de soberanía", description: "Garantiza que el cerebro digital del país —el conocimiento y el modelo— no dependa de actores extranjeros. Los datos nacionales más sensibles bajo jurisdicción mexicana.", tag: "Soberanía tecnológica nacional" },
    ],
    arquitectura: {
      badge: "ARQUITECTURA",
      title: "Diseño técnico auditable y responsable",
      subtitle: "Construido de manera agnóstica al modelo base, con proceso de entrenamiento documentado y corpus validado para cumplimiento normativo.",
    },
    arquitecturaItems: [
      { title: "Agnóstico al Modelo Base", desc: "La arquitectura está diseñada para evolucionar a modelos más avanzados (ej. Kimi K2.5 o GPT OSS 1T) protegiendo nuestro dataset." },
      { title: "Curaduría del Dataset", desc: "El verdadero valor: un corpus construido con rigor académico y legal, revisado por instituciones para garantizar representación auténtica sin sesgo WEIRD." },
      { title: "Investigación Colaborativa", desc: "Desarrollado en conjunto con universidades, organizaciones civiles y cámaras empresariales para asegurar un impacto real y preciso en la sociedad." },
      { title: "Infraestructura Nacional", desc: "Diseñado para operar en centros de datos nacionales, garantizando soberanía de los datos más sensibles bajo jurisdicción mexicana." },
    ],
    familia: {
      badge: "FAMILIA NA'AT",
      title: "Modelos para cada escala",
      subtitle: "Desde la integración edge hasta el razonamiento complejo, una familia de modelos optimizada para casos de uso específicos.",
      thModelo: "Modelo",
      thParams: "Parámetros",
      thBase: "Base técnica",
      thUso: "Caso de uso",
      thSaaS: "Disponible SaaS",
      saasYes: "Sí",
      saasNo: "Edge / On-prem",
    },
    familiaItems: [
      { modelo: "Na'at 0.8B", params: "0.8B", vram: "~1.6 GB", base: "Qwen3.5-0.8B (FT)", uso: "Dispositivos edge, apps móviles, chatbots sin conexión" },
      { modelo: "Na'at 2B", params: "2B", vram: "~4 GB", base: "Qwen3.5-2B (FT)", uso: "Chatbots de volumen, clasificación de tickets" },
      { modelo: "Na'at 4B", params: "4B", vram: "~8 GB", base: "Qwen3.5-4B (FT)", uso: "Uso diario masivo: Q&A, redacción, análisis mediano" },
      { modelo: "Na'at 9B", params: "9B", vram: "~18 GB", base: "Qwen3.5-9B (FT)", uso: "Razonamiento avanzado, análisis técnico profundo" },
      { modelo: "Na'at Full", params: "1T total (32B act)", vram: "~70 GB", base: "Kimi K2.5 (FT) · MoE", uso: "Due diligence complejo, Swarm de agentes" },
    ],
    familiaIsSaaS: [false, false, true, true, true],
    roadmap: {
      badge: "VISIÓN",
      title: "Roadmap de investigación",
      subtitle: "Hacia 1T parámetros. De un modelo nacional a un referente latinoamericano global.",
    },
    roadmapItems: [
      { fase: "Fase 1", fecha: "Actualidad", titulo: "Proyecto de Investigación 1T", desc: "Curaduría intensiva de datasets con universidades y organizaciones. En fase de pruebas con corpus normativo y soporte de lenguas originarias." },
      { fase: "Fase 2", fecha: "Mayo 2026", titulo: "Evolución Lattice 2.0", desc: "Migración del modelo base hacia arquitecturas de razonamiento avanzado (Kimi K2.5 o similar). El valor central se mantiene en el enriquecimiento de nuestro dataset nacional y el salto hacia 1T parámetros." },
      { fase: "Fase 3", fecha: "2030", titulo: "Modelo de Frontera", desc: "Capacidades de razonamiento a nivel experto humano en dominios especializados. Primer modelo de origen latinoamericano en la frontera global de IA." },
    ],
    gobernanza: {
      badge: "Gobernanza abierta",
      title1: "La infraestructura de IA fundamental",
      title2: "debe ser auditable",
      body: "Lattice Na'at está diseñado para publicarse bajo licencia permisiva open source. El proceso de entrenamiento, los datasets y las evaluaciones serán documentados públicamente conforme avanza el desarrollo. La mitigación de sesgos WEIRD no es opcional — es parte del diseño.",
      linkConstitucion: "Constitución del Modelo",
      linkGobernanza: "Gobernanza",
      linkSesgo: "Sesgo WEIRD",
    },
    cta: {
      title: "Construye el cerebro digital de México",
      subtitle: "Investiga, integra o contribuye a Lattice Na'at. Estamos formando la coalición de academia e industria que curará el dataset más importante de LATAM.",
      ctaLabel: "Hablar con el equipo de investigación",
      trustSignals: ["Dataset Nacional", "Colaboración académica", "Secretaría de Economía"],
    },
  },
  en: {
    hero: {
      badge: "Research",
      title1: "A research project for",
      title2: "the digital brain of Mexico and Latin America",
      subtitle: "More than a product, Lattice Na'at is a research project dedicated to creating the largest normative and cultural dataset of Mexico. Together with universities and business chambers, we curate the knowledge to build LATAM's digital brain.",
      ctaPrimary: "Collaborate with us",
    },
    stats: [
      { value: "1T", label: "Parameters", sub: "Total architecture capacity (32B active in MoE)" },
      { value: "256K", label: "Tokens", sub: "Extended context window for deep document analysis" },
      { value: "5", label: "Variants", sub: "Model family from 0.8B (Edge) to 1T (Frontier)" },
      { value: "100%", label: "Sovereign", sub: "Designed without WEIRD bias for Mexico's regulatory context" },
    ],
    porQue: {
      badge: "WHY IT MATTERS",
      title: "Technological sovereignty is a political decision",
      p1: "Foreign AIs offer us a \"dubbed\" version of reality: functional, but one that loses idioms, jokes, and cultural depth. Lattice Na'at is the original language version, understanding our legal and linguistic reality without intermediaries.",
      p2pre: "Harvard researchers (Atari et al., 2023) found a correlation of ",
      p2bold: "r = −0.70",
      p2post: " between a country's cultural distance from the U.S. and the accuracy with which AI reflects its values. This is the ",
      p2boldEnd: "WEIRD bias",
      p2end: " (Western, Educated, Industrialized, Rich, Democratic).",
      chartTitle: "WEIRD Bias in Global AI",
      chartSub: "Accuracy vs Cultural Distance",
      chartYAxis: "Value alignment",
      chartXStart: "U.S. (WEIRD)",
      chartXEnd: "Rest of the world",
      chartMx: "Mexico",
      p3: "Global models were trained on data from less than 12% of humanity. Mexico — with more collectivist, holistic ways of thinking and different regulatory frameworks — is systematically underrepresented.",
      p4pre: "The practical result:",
      p4: " a generic LLM reviewing a Mexican contract can cite Anglo-Saxon legal precedents, confuse SAT with the IRS, or invent nonexistent CNBV regulations.",
      p5: "This effort is critical national infrastructure built to close that gap, curating the dataset directly alongside Mexico's academia, government, and business chambers.",
      linkLabel: "Read about WEIRD Bias",
    },
    soberaniaItems: [
      { enfoque: "Efficiency and European open models" },
      { enfoque: "Mathematical reasoning and code" },
      { enfoque: "State-funded open models" },
      { enfoque: "LATAM cultural and regulatory context" },
    ],
    soberaniaBadge: "Ours",
    capacidades: {
      badge: "CAPABILITIES",
      title: "What Na'at's dataset contains that others ignore",
      subtitle: "Curated with what matters: real Spanish, Mexican law, sectoral regulations, and the voices global AI has left out.",
    },
    capacidadesItems: [
      { title: "Deep Mexican Spanish", description: "Native understanding of idioms, technical terms, and dialectal variations from Mexico and LATAM — not translated from English." },
      { title: "Mexican regulatory framework", description: "Trained on legislation, DOF, SCJN case law, CNBV, CRE, COFEPRIS regulations, and current tax provisions." },
      { title: "Multi-step reasoning", description: "Complex logical analysis, causal deduction, and multi-stage problem solving on real industrial cases." },
      { title: "Indigenous languages", description: "Support in development for Nahuatl and Maya — the languages of over 7 million Mexicans invisible to global AI." },
      { title: "Native multimodality", description: "Integrated processing of text, images, and complex documents within the same reasoning flow." },
      { title: "Efficient distillation", description: "Optimized to transfer specialized knowledge to Seeb SLMs via LoRA and QLoRA — industrial precision with compact models." },
    ],
    rol: {
      badge: "STRATEGIC ROLE",
      title: "The engine of the entire Lattice ecosystem",
      subtitle: "Na'at is not simply a commercial product. It is the research project and foundational database that makes expert agents possible.",
    },
    rolItems: [
      { title: "Master knowledge base", description: "Na'at's vast normative and cultural dataset acts as the expert source that transfers knowledge to Seeb SLMs. Each industry model learns from this curated corpus.", tag: "Na'at Dataset → Seeb" },
      { title: "Continuous technological evolution", description: "By separating the dataset's value (our main asset) from the base model, we can evolve from the initial architecture to more powerful future architectures without losing acquired knowledge.", tag: "Base model agnostic" },
      { title: "Sovereignty infrastructure", description: "Ensures that the country's digital brain — the knowledge and the model — does not depend on foreign actors. The most sensitive national data under Mexican jurisdiction.", tag: "National technological sovereignty" },
    ],
    arquitectura: {
      badge: "ARCHITECTURE",
      title: "Auditable and responsible technical design",
      subtitle: "Built base-model agnostic, with a documented training process and validated corpus for regulatory compliance.",
    },
    arquitecturaItems: [
      { title: "Base Model Agnostic", desc: "The architecture is designed to evolve to more advanced models (e.g., Kimi K2.5 or GPT OSS 1T) while protecting our dataset." },
      { title: "Dataset Curation", desc: "The real value: a corpus built with academic and legal rigor, reviewed by institutions to ensure authentic representation without WEIRD bias." },
      { title: "Collaborative Research", desc: "Developed jointly with universities, civil organizations, and business chambers to ensure real and precise societal impact." },
      { title: "National Infrastructure", desc: "Designed to operate in national data centers, ensuring sovereignty of the most sensitive data under Mexican jurisdiction." },
    ],
    familia: {
      badge: "NA'AT FAMILY",
      title: "Models for every scale",
      subtitle: "From edge integration to complex reasoning, a model family optimized for specific use cases.",
      thModelo: "Model",
      thParams: "Parameters",
      thBase: "Technical base",
      thUso: "Use case",
      thSaaS: "Available SaaS",
      saasYes: "Yes",
      saasNo: "Edge / On-prem",
    },
    familiaItems: [
      { modelo: "Na'at 0.8B", params: "0.8B", vram: "~1.6 GB", base: "Qwen3.5-0.8B (FT)", uso: "Edge devices, mobile apps, offline chatbots" },
      { modelo: "Na'at 2B", params: "2B", vram: "~4 GB", base: "Qwen3.5-2B (FT)", uso: "High-volume chatbots, ticket classification" },
      { modelo: "Na'at 4B", params: "4B", vram: "~8 GB", base: "Qwen3.5-4B (FT)", uso: "Daily mass use: Q&A, writing, medium analysis" },
      { modelo: "Na'at 9B", params: "9B", vram: "~18 GB", base: "Qwen3.5-9B (FT)", uso: "Advanced reasoning, deep technical analysis" },
      { modelo: "Na'at Full", params: "1T total (32B act)", vram: "~70 GB", base: "Kimi K2.5 (FT) · MoE", uso: "Complex due diligence, agent swarm" },
    ],
    familiaIsSaaS: [false, false, true, true, true],
    roadmap: {
      badge: "VISION",
      title: "Research roadmap",
      subtitle: "Toward 1T parameters. From a national model to a global Latin American benchmark.",
    },
    roadmapItems: [
      { fase: "Phase 1", fecha: "Current", titulo: "1T Research Project", desc: "Intensive dataset curation with universities and organizations. In testing phase with normative corpus and indigenous language support." },
      { fase: "Phase 2", fecha: "May 2026", titulo: "Lattice 2.0 Evolution", desc: "Base model migration toward advanced reasoning architectures (Kimi K2.5 or similar). Core value remains in enriching our national dataset and the leap to 1T parameters." },
      { fase: "Phase 3", fecha: "2030", titulo: "Frontier Model", desc: "Human expert-level reasoning capabilities in specialized domains. First Latin American-origin model at the global AI frontier." },
    ],
    gobernanza: {
      badge: "Open governance",
      title1: "Critical AI infrastructure",
      title2: "must be auditable",
      body: "Lattice Na'at is designed to be published under a permissive open source license. The training process, datasets, and evaluations will be publicly documented as development progresses. WEIRD bias mitigation is not optional — it is part of the design.",
      linkConstitucion: "Model Constitution",
      linkGobernanza: "Governance",
      linkSesgo: "WEIRD Bias",
    },
    cta: {
      title: "Build Mexico's digital brain",
      subtitle: "Research, integrate, or contribute to Lattice Na'at. We are forming the academia-industry coalition that will curate LATAM's most important dataset.",
      ctaLabel: "Talk to the research team",
      trustSignals: ["National Dataset", "Academic collaboration", "Ministry of Economy"],
    },
  },
  "pt-br": {
    hero: {
      badge: "Pesquisa",
      title1: "Um projeto de pesquisa para",
      title2: "o cérebro digital do México e da América Latina",
      subtitle: "Mais do que um produto, o Lattice Na'at é um projeto de pesquisa dedicado a criar o maior dataset normativo e cultural do México. Junto com universidades e câmaras empresariais, curamos o conhecimento para construir o cérebro digital da LATAM.",
      ctaPrimary: "Colabore conosco",
    },
    stats: [
      { value: "1T", label: "Parâmetros", sub: "Capacidade total da arquitetura (32B ativos em MoE)" },
      { value: "256K", label: "Tokens", sub: "Janela de contexto estendida para análise documental profunda" },
      { value: "5", label: "Variantes", sub: "Família de modelos de 0.8B (Edge) a 1T (Frontier)" },
      { value: "100%", label: "Soberano", sub: "Projetado sem viés WEIRD para o contexto regulatório do México" },
    ],
    porQue: {
      badge: "POR QUE IMPORTA",
      title: "A soberania tecnológica é uma decisão política",
      p1: "As IAs estrangeiras nos oferecem uma versão \"dublada\" da realidade: funcional, mas que perde expressões idiomáticas, piadas e profundidade cultural. O Lattice Na'at é a versão no idioma original, entendendo nossa realidade legal e linguística sem intermediários.",
      p2pre: "Pesquisadores de Harvard (Atari et al., 2023) encontraram uma correlação de ",
      p2bold: "r = −0,70",
      p2post: " entre a distância cultural de um país em relação aos EUA e a precisão com que a IA reflete seus valores. Este é o ",
      p2boldEnd: "viés WEIRD",
      p2end: " (Western, Educated, Industrialized, Rich, Democratic).",
      chartTitle: "Viés WEIRD na IA Global",
      chartSub: "Precisão vs Distância Cultural",
      chartYAxis: "Alinhamento de valores",
      chartXStart: "EUA (WEIRD)",
      chartXEnd: "Resto do mundo",
      chartMx: "México",
      p3: "Os modelos globais foram treinados com dados de menos de 12% da humanidade. O México — com formas de pensar mais coletivistas, holísticas e marcos regulatórios distintos — fica sistematicamente sub-representado.",
      p4pre: "O resultado prático:",
      p4: " um LLM genérico que revisa um contrato mexicano pode citar precedentes do direito anglo-saxão, confundir o SAT com o IRS ou inventar regulações inexistentes da CNBV.",
      p5: "Este esforço é infraestrutura nacional crítica construída para fechar essa lacuna, curando o dataset diretamente junto à academia, governo e câmaras empresariais do México.",
      linkLabel: "Ler sobre o Viés WEIRD",
    },
    soberaniaItems: [
      { enfoque: "Eficiência e modelos abertos europeus" },
      { enfoque: "Raciocínio matemático e código" },
      { enfoque: "Modelos abertos financiados pelo estado" },
      { enfoque: "Contexto cultural e regulatório LATAM" },
    ],
    soberaniaBadge: "Nosso",
    capacidades: {
      badge: "CAPACIDADES",
      title: "O que o dataset do Na'at contém que outros ignoram",
      subtitle: "Curado com o que importa: o espanhol real, a lei mexicana, as normas setoriais e as vozes que a IA global deixou de fora.",
    },
    capacidadesItems: [
      { title: "Espanhol mexicano profundo", description: "Compreensão nativa de expressões idiomáticas, tecnicismos e variações dialetais do México e LATAM — não traduzido do inglês." },
      { title: "Marco regulatório mexicano", description: "Treinado em legislação, DOF, jurisprudência SCJN, normativas CNBV, CRE, COFEPRIS e disposições fiscais vigentes." },
      { title: "Raciocínio multi-etapa", description: "Análise lógica complexa, dedução causal e resolução de problemas em múltiplas etapas sobre casos industriais reais." },
      { title: "Línguas originárias", description: "Suporte em desenvolvimento para Náhuatl e Maia — as línguas de mais de 7 milhões de mexicanos invisíveis para a IA global." },
      { title: "Multimodalidade nativa", description: "Processamento integrado de texto, imagens e documentos complexos dentro de um mesmo fluxo de raciocínio." },
      { title: "Destilação eficiente", description: "Otimizado para transferir conhecimento especializado aos SLM Séeb mediante LoRA e QLoRA — precisão industrial com modelos compactos." },
    ],
    rol: {
      badge: "PAPEL ESTRATÉGICO",
      title: "O motor de todo o ecossistema Lattice",
      subtitle: "O Na'at não é um simples produto comercial. É o projeto de pesquisa e a base de dados fundacional que torna possíveis os agentes especialistas.",
    },
    rolItems: [
      { title: "Base de conhecimento mestre", description: "O imenso dataset normativo e cultural do Na'at atua como a fonte especialista que transfere conhecimento aos SLM Séeb. Cada modelo por indústria aprende deste corpus curado.", tag: "Dataset Na'at → Séeb" },
      { title: "Evolução tecnológica contínua", description: "Ao separar o valor do dataset (nosso ativo principal) do modelo base, podemos evoluir da arquitetura inicial para arquiteturas futuras mais potentes sem perder o conhecimento adquirido.", tag: "Agnóstico ao modelo base" },
      { title: "Infraestrutura de soberania", description: "Garante que o cérebro digital do país — o conhecimento e o modelo — não dependa de atores estrangeiros. Os dados nacionais mais sensíveis sob jurisdição mexicana.", tag: "Soberania tecnológica nacional" },
    ],
    arquitectura: {
      badge: "ARQUITETURA",
      title: "Design técnico auditável e responsável",
      subtitle: "Construído de forma agnóstica ao modelo base, com processo de treinamento documentado e corpus validado para conformidade regulatória.",
    },
    arquitecturaItems: [
      { title: "Agnóstico ao Modelo Base", desc: "A arquitetura é projetada para evoluir para modelos mais avançados (ex. Kimi K2.5 ou GPT OSS 1T) protegendo nosso dataset." },
      { title: "Curadoria do Dataset", desc: "O verdadeiro valor: um corpus construído com rigor acadêmico e legal, revisado por instituições para garantir representação autêntica sem viés WEIRD." },
      { title: "Pesquisa Colaborativa", desc: "Desenvolvido em conjunto com universidades, organizações civis e câmaras empresariais para garantir um impacto real e preciso na sociedade." },
      { title: "Infraestrutura Nacional", desc: "Projetado para operar em centros de dados nacionais, garantindo soberania dos dados mais sensíveis sob jurisdição mexicana." },
    ],
    familia: {
      badge: "FAMÍLIA NA'AT",
      title: "Modelos para cada escala",
      subtitle: "Da integração edge ao raciocínio complexo, uma família de modelos otimizada para casos de uso específicos.",
      thModelo: "Modelo",
      thParams: "Parâmetros",
      thBase: "Base técnica",
      thUso: "Caso de uso",
      thSaaS: "Disponível SaaS",
      saasYes: "Sim",
      saasNo: "Edge / On-prem",
    },
    familiaItems: [
      { modelo: "Na'at 0.8B", params: "0.8B", vram: "~1.6 GB", base: "Qwen3.5-0.8B (FT)", uso: "Dispositivos edge, apps móveis, chatbots offline" },
      { modelo: "Na'at 2B", params: "2B", vram: "~4 GB", base: "Qwen3.5-2B (FT)", uso: "Chatbots de volume, classificação de tickets" },
      { modelo: "Na'at 4B", params: "4B", vram: "~8 GB", base: "Qwen3.5-4B (FT)", uso: "Uso diário massivo: Q&A, redação, análise média" },
      { modelo: "Na'at 9B", params: "9B", vram: "~18 GB", base: "Qwen3.5-9B (FT)", uso: "Raciocínio avançado, análise técnica profunda" },
      { modelo: "Na'at Full", params: "1T total (32B at)", vram: "~70 GB", base: "Kimi K2.5 (FT) · MoE", uso: "Due diligence complexo, swarm de agentes" },
    ],
    familiaIsSaaS: [false, false, true, true, true],
    roadmap: {
      badge: "VISÃO",
      title: "Roadmap de pesquisa",
      subtitle: "Rumo a 1T parâmetros. De um modelo nacional a uma referência latino-americana global.",
    },
    roadmapItems: [
      { fase: "Fase 1", fecha: "Atualidade", titulo: "Projeto de Pesquisa 1T", desc: "Curadoria intensiva de datasets com universidades e organizações. Em fase de testes com corpus normativo e suporte a línguas originárias." },
      { fase: "Fase 2", fecha: "Maio 2026", titulo: "Evolução Lattice 2.0", desc: "Migração do modelo base para arquiteturas de raciocínio avançado (Kimi K2.5 ou similar). O valor central se mantém no enriquecimento do nosso dataset nacional e no salto para 1T parâmetros." },
      { fase: "Fase 3", fecha: "2030", titulo: "Modelo de Fronteira", desc: "Capacidades de raciocínio em nível de especialista humano em domínios especializados. Primeiro modelo de origem latino-americana na fronteira global de IA." },
    ],
    gobernanza: {
      badge: "Governança aberta",
      title1: "A infraestrutura de IA fundamental",
      title2: "deve ser auditável",
      body: "O Lattice Na'at é projetado para ser publicado sob licença permissiva open source. O processo de treinamento, os datasets e as avaliações serão documentados publicamente conforme o desenvolvimento avança. A mitigação de vieses WEIRD não é opcional — é parte do design.",
      linkConstitucion: "Constituição do Modelo",
      linkGobernanza: "Governança",
      linkSesgo: "Viés WEIRD",
    },
    cta: {
      title: "Construa o cérebro digital do México",
      subtitle: "Pesquise, integre ou contribua com o Lattice Na'at. Estamos formando a coalizão de academia e indústria que curará o dataset mais importante da LATAM.",
      ctaLabel: "Falar com a equipe de pesquisa",
      trustSignals: ["Dataset Nacional", "Colaboração acadêmica", "Secretaria de Economia"],
    },
  },
} as const;

/* ─── Non-translatable base data ─── */

const STATS_BASE = [
  { stacked: false },
  { stacked: true },
  { stacked: false },
  { stacked: true },
];

const SOBERANIA_BASE = [
  { flag: "🇫🇷", pais: "Francia", isMx: false },
  { flag: "🇨🇳", pais: "China", isMx: false },
  { flag: "🇦🇪", pais: "EAU", isMx: false },
  { flag: "🇲🇽", pais: "México", isMx: true },
];

const SOBERANIA_MODELOS = ["Mistral AI", "DeepSeek", "Falcon", "Lattice Na'at"];

const CAPACIDADES_ICONS = [
  "https://cdn.lordicon.com/ayhtotha.json",
  "https://cdn.lordicon.com/rjzlnunf.json",
  "https://cdn.lordicon.com/zpxybbhl.json",
  "https://cdn.lordicon.com/wxnxiano.json",
  "https://cdn.lordicon.com/pkmkagva.json",
  "https://cdn.lordicon.com/fpipqhrr.json",
];

const ROL_ICONS = [BrainCircuit, Cpu, Landmark];

const ARQUITECTURA_ICONS = [Network, Shield, FlaskConical, Globe];

const ROADMAP_STATUSES = ["activo", "investigacion", "futuro"];

export function LatticeNaatContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const capRef = useRef<HTMLDivElement>(null);
  const capInView = useInView(capRef, { once: true, margin: "-60px" });
  const rolRef = useRef<HTMLDivElement>(null);
  const rolInView = useInView(rolRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8">
          {/* Decorative background image */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <Image
              src="/images/pages/Tecnologia-IA/glowing-synapse-multi-colored-neural-communication-abstract-design-generated-by-ai.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.08]"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/80 via-brand-surface/60 to-brand-surface dark:from-brand-midnight/80 dark:via-brand-midnight/60 dark:to-brand-midnight" />
          </div>

          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
            >
              <div className="mb-6 flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="font-proxima text-4xl font-extrabold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl lg:text-6xl">
                {t.hero.title1}<br />
                <span className="text-brand-accent">{t.hero.title2}</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                {t.hero.subtitle}
              </p>

              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 font-semibold text-white shadow-lg shadow-brand-accent/20 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/30"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="https://github.com/sintergica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/15 dark:border-brand-white/10 px-7 py-3 font-semibold text-brand-midnight/80 dark:text-brand-white/80 transition-colors hover:border-brand-accent/30 hover:text-brand-accent dark:hover:border-brand-white/30 dark:hover:text-brand-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </m.div>
            </m.div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="mx-auto max-w-6xl relative z-10">
            <div ref={statsRef} className="grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-4">
              {t.stats.map((s, i) => (
                <m.div
                  key={s.label}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className={`flex w-full justify-center ${STATS_BASE[i].stacked ? 'flex-col items-center gap-1' : 'flex-row items-baseline gap-2'} mb-3`}>
                    <span className={`font-proxima font-extrabold text-brand-accent tracking-tight ${STATS_BASE[i].stacked ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-6xl lg:text-7xl'}`}>
                      {s.value}
                    </span>
                    {s.label && (
                      <span className={`font-proxima font-bold text-brand-accent tracking-tight ${STATS_BASE[i].stacked ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-3xl lg:text-4xl'}`}>
                        {s.label}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-brand-midnight/50 dark:text-brand-white/50 max-w-[220px] leading-relaxed mx-auto font-medium">
                    {s.sub}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUÉ IMPORTA ── */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduce ? 0 : 0.7 }}
              >
                <SectionHeader
                  badge={t.porQue.badge}
                  title={t.porQue.title}
                />
                <p className="mt-6 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.porQue.p1}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.porQue.p2pre}<strong className="text-brand-midnight dark:text-brand-white">{t.porQue.p2bold}</strong>{t.porQue.p2post}<strong>{t.porQue.p2boldEnd}</strong>{t.porQue.p2end}
                </p>

                {/* Gráfica Sesgo WEIRD */}
                <div className="my-8 rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/50 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.porQue.chartTitle}</h4>
                      <p className="text-xs text-brand-midnight/50 dark:text-brand-white/50">{t.porQue.chartSub}</p>
                    </div>
                    <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-bold tracking-wider text-red-500">
                      r = -0.70
                    </span>
                  </div>

                  <div className="relative h-40 w-full pl-6 pb-6">
                    {/* Ejes */}
                    <div className="absolute bottom-6 left-6 right-0 h-px bg-brand-midnight/10 dark:bg-brand-white/10" />
                    <div className="absolute bottom-6 left-6 top-0 w-px bg-brand-midnight/10 dark:bg-brand-white/10" />

                    {/* Etiquetas Ejes */}
                    <div className="absolute bottom-0 left-6 text-[0.65rem] font-medium text-brand-midnight/40 dark:text-brand-white/40">{t.porQue.chartXStart}</div>
                    <div className="absolute bottom-0 right-0 text-[0.65rem] font-medium text-brand-midnight/40 dark:text-brand-white/40">{t.porQue.chartXEnd}</div>

                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-[0.65rem] font-medium text-brand-midnight/40 dark:text-brand-white/40 whitespace-nowrap">
                      {t.porQue.chartYAxis}
                    </div>

                    {/* Área de gráfico */}
                    <div className="relative h-full w-full">
                      {/* Línea de tendencia */}
                      <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                        <line x1="5%" y1="10%" x2="95%" y2="85%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-red-400/50" />
                      </svg>

                      {/* Puntos (Scatter) */}
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="absolute left-[5%] top-[10%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-midnight/30 dark:bg-brand-white/30" />
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="absolute left-[15%] top-[25%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-midnight/20 dark:bg-brand-white/20" />
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="absolute left-[25%] top-[20%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-midnight/20 dark:bg-brand-white/20" />
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="absolute left-[35%] top-[40%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-midnight/20 dark:bg-brand-white/20" />
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="absolute left-[50%] top-[55%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-midnight/20 dark:bg-brand-white/20" />
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="absolute left-[70%] top-[70%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-midnight/20 dark:bg-brand-white/20" />
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }} className="absolute left-[90%] top-[85%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-midnight/20 dark:bg-brand-white/20" />

                      {/* Punto México destacado */}
                      <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1, type: "spring" }} viewport={{ once: true }} className="absolute left-[80%] top-[80%] z-10 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative flex h-3 w-3 items-center justify-center">
                          <div className="absolute h-full w-full animate-ping rounded-full bg-brand-accent opacity-40"></div>
                          <div className="relative h-2.5 w-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(0,110,250,0.8)]"></div>
                        </div>
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[0.65rem] font-bold text-brand-accent">{t.porQue.chartMx}</span>
                      </m.div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.porQue.p3}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  <strong>{t.porQue.p4pre}</strong>{t.porQue.p4}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.porQue.p5}
                </p>
                <Link
                  href="/investigacion/sesgo-weird"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/80"
                >
                  {t.porQue.linkLabel}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </m.div>

              {/* Sovereignty cards */}
              <div className="flex flex-col gap-3">
                {SOBERANIA_BASE.map((item, i) => (
                  <m.div
                    key={item.pais}
                    initial={shouldReduce ? false : { opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                    className={`flex items-center gap-4 rounded-2xl border p-5 transition-all ${
                      item.isMx
                        ? "border-brand-accent/40 bg-brand-accent/[0.07] shadow-lg shadow-brand-accent/10"
                        : "border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/50"
                    }`}
                  >
                    <span className="text-2xl leading-none" role="img" aria-label={item.pais}>{item.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${item.isMx ? "text-brand-accent" : "text-brand-midnight/80 dark:text-brand-white/80"}`}>{SOBERANIA_MODELOS[i]}</span>
                        {item.isMx && (
                          <span className="rounded-full bg-brand-accent/20 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-brand-accent">{t.soberaniaBadge}</span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-brand-midnight/45 dark:text-brand-white/45 truncate">{t.soberaniaItems[i].enfoque}</p>
                    </div>
                    <span className="shrink-0 text-xs text-brand-midnight/25 dark:text-brand-white/25">{item.pais}</span>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPACIDADES ── */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.capacidades.badge}
              title={t.capacidades.title}
              subtitle={t.capacidades.subtitle}
              centered
            />
            <div ref={capRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.capacidadesItems.map((item, i) => {
                return (
                  <m.div
                    key={item.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={capInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.05 + i * 0.08 }}
                    className="group rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 transition-all hover:border-brand-accent/20 hover:bg-brand-midnight/5 dark:hover:bg-brand-midnight/70"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20">
                      <LordIcon
                        src={CAPACIDADES_ICONS[i]}
                        size={22}
                        trigger="hover"
                      />
                    </div>
                    <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{item.description}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ROL EN EL ECOSISTEMA ── */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/4 blur-[120px]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <SectionHeader
                  badge={t.rol.badge}
                  title={t.rol.title}
                  subtitle={t.rol.subtitle}
                />
              </div>
              <div ref={rolRef} className="lg:col-span-8 flex flex-col gap-5">
                {t.rolItems.map((item, i) => {
                  const Icon = ROL_ICONS[i];
                  return (
                    <m.div
                      key={item.title}
                      initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                      animate={rolInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.12 }}
                      className="flex gap-5 rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/60 p-6 backdrop-blur-sm"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                        <Icon className="h-5 w-5 text-brand-accent" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.title}</h3>
                          <span className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-brand-accent">
                            {item.tag}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{item.description}</p>
                      </div>
                    </m.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── ARQUITECTURA ── */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.arquitectura.badge}
              title={t.arquitectura.title}
              subtitle={t.arquitectura.subtitle}
              centered
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {t.arquitecturaItems.map((item, i) => {
                const Icon = ARQUITECTURA_ICONS[i];
                return (
                  <m.div
                    key={item.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                    className="flex gap-5 rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{item.desc}</p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FAMILIA DE MODELOS ── */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-midnight/5 dark:border-brand-white/5">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.familia.badge}
              title={t.familia.title}
              subtitle={t.familia.subtitle}
              centered
            />
            <div className="mt-14 overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-brand-midnight/10 dark:border-brand-white/10">
                    <th className="pb-4 font-bold text-sm text-brand-midnight/70 dark:text-brand-white/70">{t.familia.thModelo}</th>
                    <th className="pb-4 font-bold text-sm text-brand-midnight/70 dark:text-brand-white/70">{t.familia.thParams}</th>
                    <th className="pb-4 font-bold text-sm text-brand-midnight/70 dark:text-brand-white/70">VRAM</th>
                    <th className="pb-4 font-bold text-sm text-brand-midnight/70 dark:text-brand-white/70">{t.familia.thBase}</th>
                    <th className="pb-4 font-bold text-sm text-brand-midnight/70 dark:text-brand-white/70">{t.familia.thUso}</th>
                    <th className="pb-4 font-bold text-sm text-brand-midnight/70 dark:text-brand-white/70 text-center">{t.familia.thSaaS}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-midnight/5 dark:divide-brand-white/5">
                  {t.familiaItems.map((modelo, i) => (
                    <m.tr
                      key={modelo.modelo}
                      initial={shouldReduce ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: shouldReduce ? 0 : 0.4, delay: i * 0.1 }}
                      className="group transition-colors hover:bg-brand-midnight/5 dark:hover:bg-brand-white/5"
                    >
                      <td className="py-4 pr-4">
                        <span className="font-bold text-brand-midnight dark:text-brand-white">{modelo.modelo}</span>
                      </td>
                      <td className="py-4 pr-4 text-sm font-medium text-brand-accent">{modelo.params}</td>
                      <td className="py-4 pr-4 text-sm text-brand-midnight/60 dark:text-brand-white/60">{modelo.vram}</td>
                      <td className="py-4 pr-4 text-sm text-brand-midnight/60 dark:text-brand-white/60">{modelo.base}</td>
                      <td className="py-4 pr-4 text-sm text-brand-midnight/60 dark:text-brand-white/60">{modelo.uso}</td>
                      <td className="py-4 text-center">
                        {t.familiaIsSaaS[i] ? (
                          <span className="inline-block rounded-full bg-emerald-500/15 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            {t.familia.saasYes}
                          </span>
                        ) : (
                          <span className="inline-block rounded-full bg-brand-midnight/5 dark:bg-brand-white/5 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">
                            {t.familia.saasNo}
                          </span>
                        )}
                      </td>
                    </m.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge={t.roadmap.badge}
              title={t.roadmap.title}
              subtitle={t.roadmap.subtitle}
              centered
            />
            <div className="mt-14 flex flex-col gap-0">
              {t.roadmapItems.map((item, i) => {
                const status = ROADMAP_STATUSES[i];
                return (
                  <m.div
                    key={item.fase}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.12 }}
                    className="relative flex gap-6"
                  >
                    {/* connector line */}
                    <div className="flex flex-col items-center">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 z-10 ${
                        status === "activo"
                          ? "border-brand-accent bg-brand-accent shadow-lg shadow-brand-accent/30"
                          : status === "investigacion"
                          ? "border-brand-accent/40 bg-brand-surface dark:bg-brand-deep"
                          : "border-brand-midnight/15 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep"
                      }`}>
                        <div className={`h-2.5 w-2.5 rounded-full ${
                          status === "activo" ? "bg-white" : status === "investigacion" ? "bg-brand-accent/60" : "bg-brand-white dark:bg-brand-midnight/20"
                        }`} />
                      </div>
                      {i < t.roadmapItems.length - 1 && (
                        <div className={`mt-1 min-h-8 h-full w-px ${status === "activo" ? "bg-brand-accent/30" : "bg-brand-white dark:bg-brand-midnight/8"}`} />
                      )}
                    </div>

                    {/* content */}
                    <div className={`mb-8 flex-1 rounded-2xl border p-6 ${
                      status === "activo"
                        ? "border-brand-accent/30 bg-brand-accent/[0.06]"
                        : "border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/50"
                    }`}>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider ${status === "activo" ? "text-brand-accent" : "text-brand-midnight/40 dark:text-brand-white/40"}`}>{item.fase}</span>
                        <span className={`text-xs rounded-full px-2 py-0.5 ${
                          status === "activo"
                            ? "bg-brand-accent/20 text-brand-accent font-semibold"
                            : status === "investigacion"
                            ? "bg-amber-500/15 text-amber-400"
                            : "bg-brand-white dark:bg-brand-midnight/5 text-brand-midnight/30 dark:text-brand-white/30"
                        }`}>{item.fecha}</span>
                      </div>
                      <h3 className={`font-proxima font-semibold ${status === "activo" ? "text-brand-midnight dark:text-brand-white" : "text-brand-midnight/60 dark:text-brand-white/60"}`}>{item.titulo}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-midnight/45 dark:text-brand-white/45">{item.desc}</p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GOBERNANZA ── */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-10 md:p-14 text-center">
              <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {t.gobernanza.badge}
              </span>
              <h2 className="font-proxima text-2xl font-bold text-brand-midnight dark:text-brand-white sm:text-3xl">
                {t.gobernanza.title1}<br />{t.gobernanza.title2}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                {t.gobernanza.body}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/investigacion/constitucion"
                  className="group inline-flex items-center gap-2 rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep px-6 py-3 text-sm font-semibold text-brand-midnight dark:text-brand-white transition-all hover:border-brand-accent/40 hover:text-brand-accent"
                >
                  <BookOpen className="h-4 w-4" />
                  {t.gobernanza.linkConstitucion}
                </Link>
                <Link
                  href="/investigacion/gobernanza"
                  className="group inline-flex items-center gap-2 rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep px-6 py-3 text-sm font-semibold text-brand-midnight dark:text-brand-white transition-all hover:border-brand-accent/40 hover:text-brand-accent"
                >
                  <Landmark className="h-4 w-4" />
                  {t.gobernanza.linkGobernanza}
                </Link>
                <Link
                  href="/investigacion/sesgo-weird"
                  className="group inline-flex items-center gap-2 rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep px-6 py-3 text-sm font-semibold text-brand-midnight dark:text-brand-white transition-all hover:border-brand-accent/40 hover:text-brand-accent"
                >
                  <FlaskConical className="h-4 w-4" />
                  {t.gobernanza.linkSesgo}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref={BOOKING_URL}
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
