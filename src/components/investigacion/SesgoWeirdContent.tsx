"use client";

import { useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, BookOpen, Scale, Banknote, Landmark, HeartPulse,
  FileText, Database, ShieldCheck, Languages, Sparkles, Quote,
  type LucideIcon,
} from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { WeirdBiasChart } from "@/components/sections/WeirdBiasChart";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ══════════════════ i18n ══════════════════ */

type Locale = "es" | "en" | "pt-br";

interface Content {
  hero: { eyebrow: string; h1: string; lead: string; scrollHint: string };
  origin: {
    chapter: string; eyebrow: string; h2: string;
    p1: string; p2: string; p3: string;
    acronym: { letter: string; label: string; description: string }[];
    consequence: string;
    citation: string;
  };
  evidence: {
    chapter: string; eyebrow: string; h2: string;
    lede: string;
    findingLabel: string;
    finding: string;
    pullquote: string;
    context: string;
    chartCaption: string;
  };
  impact: {
    chapter: string; eyebrow: string; h2: string; lede: string;
    verticals: { icon: LucideIcon; title: string; body: string }[];
    stat: { value: string; label: string; source: string };
  };
  analogy: {
    chapter: string; eyebrow: string; h2: string;
    dubbed: string;
    original: string;
  };
  response: {
    chapter: string; eyebrow: string; h2: string; lede: string;
    pillars: { icon: LucideIcon; title: string; body: string }[];
  };
  outcome: {
    chapter: string; eyebrow: string; h2: string;
    items: { title: string; body: string }[];
  };
  research: {
    chapter: string; eyebrow: string; h2: string; lede: string;
    lines: { num: string; title: string; body: string }[];
    cta: string;
  };
  cta: {
    badge: string; title: string; subtitle: string; ctaLabel: string; trust: string[];
  };
}

const es: Content = {
  hero: {
    eyebrow: "Investigación · Sesgo cultural en IA",
    h1: "El sesgo que nadie te dice que tiene tu IA.",
    lead:
      "Hay un sesgo estructural en los modelos de lenguaje que los grandes laboratorios no publican en su página de inicio. Se llama WEIRD. Tiene nombre, evidencia científica y consecuencias medibles en cada decisión que tu empresa toma con inteligencia artificial.",
    scrollHint: "Seguir leyendo",
  },
  origin: {
    chapter: "Capítulo 01",
    eyebrow: "¿Qué es el sesgo WEIRD?",
    h2: "En 2010, tres investigadores encontraron algo incómodo.",
    p1: "Joseph Henrich, Steven Heine y Ara Norenzayan publicaron un estudio en Behavioral and Brain Sciences que cambió la forma en que las ciencias del comportamiento se entienden a sí mismas. Su hallazgo fue incómodo: la inmensa mayoría de lo que la psicología presentaba como “verdades universales” sobre el comportamiento humano provenía de un tipo muy específico de sociedad.",
    p2: "Occidentales. Educadas. Industrializadas. Ricas. Democráticas. En inglés: Western, Educated, Industrialized, Rich, Democratic. El acrónimo quedó como WEIRD — que en inglés también significa “raro”. Y ese era precisamente el punto.",
    p3: "Las poblaciones WEIRD representan alrededor del 15% de la humanidad. Son la excepción, no la norma. Pero la ciencia las trataba como si fueran la regla.",
    acronym: [
      { letter: "W", label: "Western", description: "Occidental" },
      { letter: "E", label: "Educated", description: "Educado formalmente" },
      { letter: "I", label: "Industrialized", description: "Industrializado" },
      { letter: "R", label: "Rich", description: "Alto ingreso" },
      { letter: "D", label: "Democratic", description: "Democrático liberal" },
    ],
    consequence:
      "Más de una década después, el mismo patrón apareció en la inteligencia artificial. Y esta vez, las consecuencias no son académicas. Son operativas.",
    citation:
      "Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? Behavioral and Brain Sciences, 33(2–3), 61–83.",
  },
  evidence: {
    chapter: "Capítulo 02",
    eyebrow: "La ciencia lo confirma",
    h2: "Harvard, 2023. 65 países. 94,278 personas.",
    lede: "Investigadores de Harvard (Atari et al., 2023) compararon las respuestas de GPT con datos de personas reales en 65 países. El hallazgo central fue una correlación que no se puede ignorar.",
    findingLabel: "Hallazgo central",
    finding:
      "Correlación de r = −0.70 entre la distancia cultural de un país respecto a EE.UU. y la similitud de GPT con sus habitantes.",
    pullquote:
      "Cuanto más diferente es tu cultura de la estadounidense, menos te representa la IA que estás usando.",
    context:
      "Estados Unidos, Canadá, Australia y el Reino Unido son los más cercanos al perfil que los modelos replican de forma natural. México, como la mayoría de América Latina, cae en una zona de representación significativamente menor. El sesgo está en los datos de entrenamiento y afecta cada respuesta.",
    chartCaption:
      "Distancia cultural vs. similitud con respuestas de GPT. Mayor distancia, menor representación.",
  },
  impact: {
    chapter: "Capítulo 03",
    eyebrow: "Qué significa para tu empresa",
    h2: "Cuatro áreas donde el sesgo deja de ser teoría y se vuelve costo.",
    lede:
      "El razonamiento jurídico, fiscal y regulatorio de un modelo global es anglosajón por diseño. Cuando lo aplicas a México, el resultado suena técnico — pero parte del sistema equivocado.",
    verticals: [
      {
        icon: Scale,
        title: "Legal",
        body: "Un modelo entrenado con datos predominantemente anglosajones razona desde el Common Law — un sistema donde la jurisprudencia crea precedente vinculante. México opera bajo derecho civil codificado, donde el Código de Comercio, el Código Civil Federal y la legislación estatal establecen las reglas. Cuando el modelo sugiere cláusulas o interpreta contratos, puede aplicar lógica jurídica que no corresponde al sistema mexicano.",
      },
      {
        icon: Banknote,
        title: "Fiscal",
        body: "La lógica tributaria del SAT — con regímenes fiscales, complementos de pago, CFDI y reglas de deducibilidad — tiene poco que ver con la del IRS o el HMRC. Un asistente entrenado globalmente puede confundir conceptos, aplicar criterios de otra jurisdicción o recomendar estrategias sin validez en México. El resultado puede ser una declaración incorrecta o una multa.",
      },
      {
        icon: Landmark,
        title: "Gobierno",
        body: "Un agente que procesa solicitudes bajo la LGTAIP necesita conocer plazos, procedimientos y normativas exactas del marco jurídico mexicano. Los principios generales de transparencia que un modelo global conoce son un punto de partida; los detalles operativos que determinan si una solicitud se procesa correctamente son locales.",
      },
      {
        icon: HeartPulse,
        title: "Salud",
        body: "Los protocolos clínicos, las Normas Oficiales Mexicanas y la normativa COFEPRIS son específicos de México. Un modelo que aprendió con datos predominantemente estadounidenses o europeos puede recomendar procedimientos, dosificaciones o clasificaciones que no corresponden al marco regulatorio nacional.",
      },
    ],
    stat: {
      value: "36%",
      label: "de las empresas globales reportaron impactos negativos directos del sesgo de IA en 2024 — incluyendo pérdida de ingresos, clientes y empleados.",
      source: "AI Bias Report, AllAboutAI, 2025",
    },
  },
  analogy: {
    chapter: "Capítulo 04",
    eyebrow: "La analogía",
    h2: "Es la diferencia entre una película doblada y la versión original.",
    dubbed:
      "Entiendes la trama. Sigues la historia. Pero los chistes pierden el ritmo, los modismos suenan forzados y las referencias culturales desaparecen o se adaptan torpemente. La experiencia es funcional, pero distante. Nunca fue diseñada para ti.",
    original:
      "Lattice Na'at es la versión original. Construida específicamente para cerrar la brecha WEIRD en México y América Latina: con corpus normativos de legislación y jurisprudencia mexicana, benchmarks culturalmente apropiados, procesamiento en infraestructura nacional bajo las leyes de México, y trabajo pionero en NLP para lenguas originarias.",
  },
  response: {
    chapter: "Capítulo 05",
    eyebrow: "La respuesta",
    h2: "Lattice Na'at no es un parche de traducción. Es un diseño distinto.",
    lede:
      "Na'at es una familia de modelos especializados, entrenados con corpus normativos de legislación y jurisprudencia mexicana, evaluados con benchmarks que no asumen contexto occidental y desplegados en infraestructura nacional bajo las leyes de México.",
    pillars: [
      {
        icon: BookOpen,
        title: "Corpus Normativo Mexicano",
        body: "Legislación federal y estatal, jurisprudencia, normativa administrativa y regulación sectorial — integrados como conocimiento base del modelo, no como búsqueda en internet. Cuando Na'at responde sobre derecho mexicano, razona desde el derecho mexicano.",
      },
      {
        icon: Database,
        title: "Benchmarks sin sesgo occidental",
        body: "Spanish HELM y MMLU-LatAm son métricas desarrolladas para medir el rendimiento en español sin asumir contexto anglosajón. Si un modelo obtiene buena puntuación en MMLU pero falla en MMLU-LatAm, el sesgo WEIRD está actuando.",
      },
      {
        icon: ShieldCheck,
        title: "Procesamiento soberano",
        body: "Los datos se procesan en infraestructura ubicada en México — AWS Querétaro o servidores físicos del cliente. No cruzan fronteras. No están sujetos al CLOUD Act ni a la jurisdicción de otro país.",
      },
      {
        icon: Languages,
        title: "Lenguas originarias",
        body: "Trabajo pionero en NLP para náhuatl, maya y otras lenguas indígenas de México. Más de 7.3 millones de hablantes según el Censo 2020 del INEGI. Un primer paso hacia una IA que representa al país completo.",
      },
    ],
  },
  outcome: {
    chapter: "Capítulo 06",
    eyebrow: "El impacto en México",
    h2: "Qué cambia cuando la IA se diseña desde el contexto correcto.",
    items: [
      {
        title: "Trámites de gobierno accesibles",
        body: "Un asistente que entiende al SAT, al IMSS y al INFONAVIT como parte de su entrenamiento — no como consulta web. Guía a cualquier ciudadano por un proceso burocrático en lenguaje claro, sin importar su nivel educativo.",
      },
      {
        title: "Contratos en tu marco legal",
        body: "Na'at explica qué dice un contrato usando el derecho mexicano correcto. No traducciones de cláusulas anglosajonas que suenan bien pero pueden ser inaplicables bajo el Código de Comercio local.",
      },
      {
        title: "Soberanía tecnológica",
        body: "Tus datos se procesan en México, bajo leyes mexicanas, en infraestructura que tu organización controla. Sin dependencia de jurisdicciones extranjeras.",
      },
      {
        title: "Inclusión que no existía",
        body: "Por primera vez, un esfuerzo sistemático para que la IA funcione en las lenguas que hablan millones de mexicanos — no solo en el idioma que domina internet.",
      },
      {
        title: "Inclusión digital",
        body: "Entrenamiento en lenguas originarias (náhuatl, maya) como primer paso hacia una IA que represente a los más de 7.3 millones de hablantes de lenguas indígenas en México.",
      },
    ],
  },
  research: {
    chapter: "Capítulo 07",
    eyebrow: "La investigación detrás",
    h2: "Sintérgica Labs: el trabajo sistemático contra el sesgo WEIRD.",
    lede: "Cuatro líneas de investigación activas que componen el programa de mitigación.",
    lines: [
      { num: "01", title: "Benchmarks no-WEIRD", body: "Spanish HELM y MMLU-LatAm: métricas que no asumen contexto occidental." },
      { num: "02", title: "Mitigación de sesgo cultural", body: "Identificación y reducción sistemática de sesgos WEIRD en modelos de producción." },
      { num: "03", title: "Corpus Normativo Mexicano V1", body: "Dataset curado de legislación, jurisprudencia y normativa mexicana." },
      { num: "04", title: "NLP para lenguas originarias", body: "Modelos y herramientas para náhuatl, maya y otras lenguas indígenas." },
    ],
    cta: "Conocer Sintérgica Labs",
  },
  cta: {
    badge: "Siguiente paso",
    title: "Cierra la brecha WEIRD en tu operación.",
    subtitle:
      "Agenda un Diagnóstico Inteligente. En 45 minutos identificamos dónde el sesgo de tu IA actual te cuesta — y cómo Lattice Na'at lo resuelve con tus datos reales.",
    ctaLabel: "Agendar Diagnóstico Inteligente",
    trust: ["45 minutos, sin costo", "Sin permanencia", "Demo con tus datos reales"],
  },
};

/* Minimal EN/PT mirrors — same structure, translated copy */
const en: Content = {
  hero: {
    eyebrow: "Research · Cultural bias in AI",
    h1: "The bias nobody tells you your AI has.",
    lead:
      "There is a structural bias in language models that frontier AI labs don't put on their landing pages. It's called WEIRD. It has a name, scientific evidence, and measurable consequences in every decision your company makes with AI.",
    scrollHint: "Keep reading",
  },
  origin: {
    chapter: "Chapter 01",
    eyebrow: "What is WEIRD bias?",
    h2: "In 2010, three researchers found something uncomfortable.",
    p1: "Joseph Henrich, Steven Heine and Ara Norenzayan published a study in Behavioral and Brain Sciences that changed how behavioral science understands itself. Their finding was uncomfortable: the vast majority of what psychology presented as “universal truths” about human behavior came from a very specific type of society.",
    p2: "Western. Educated. Industrialized. Rich. Democratic. The acronym — WEIRD — also means “strange” in English. And that was precisely the point.",
    p3: "WEIRD populations represent about 15% of humanity. They are the exception, not the norm. Yet science treated them as the rule.",
    acronym: [
      { letter: "W", label: "Western", description: "Western" },
      { letter: "E", label: "Educated", description: "Formally educated" },
      { letter: "I", label: "Industrialized", description: "Industrialized" },
      { letter: "R", label: "Rich", description: "High income" },
      { letter: "D", label: "Democratic", description: "Liberal democratic" },
    ],
    consequence:
      "Over a decade later, the same pattern appeared in artificial intelligence. This time, the consequences aren't academic. They're operational.",
    citation:
      "Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? Behavioral and Brain Sciences, 33(2–3), 61–83.",
  },
  evidence: {
    chapter: "Chapter 02",
    eyebrow: "The science confirms it",
    h2: "Harvard, 2023. 65 countries. 94,278 people.",
    lede: "Harvard researchers (Atari et al., 2023) compared GPT responses with data from real people in 65 countries. The central finding is a correlation that can't be ignored.",
    findingLabel: "Central finding",
    finding:
      "Correlation of r = −0.70 between a country's cultural distance from the U.S. and GPT's similarity to its inhabitants.",
    pullquote:
      "The more different your culture is from the American one, the less the AI you're using represents you.",
    context:
      "The U.S., Canada, Australia and the U.K. are closest to the profile models naturally replicate. Mexico, like most of Latin America, falls in a zone of significantly lower representation. The bias is in the training data and shapes every response.",
    chartCaption:
      "Cultural distance vs. similarity with GPT responses. Greater distance, lower representation.",
  },
  impact: {
    chapter: "Chapter 03",
    eyebrow: "What this means for your company",
    h2: "Four areas where bias stops being theory and becomes cost.",
    lede:
      "The legal, fiscal and regulatory reasoning of a global model is Anglo-Saxon by design. Applied to Mexico, the output sounds technical — but starts from the wrong system.",
    verticals: [
      { icon: Scale, title: "Legal", body: "A model trained predominantly on Anglo-Saxon data reasons from Common Law — where precedent binds. Mexico operates under codified civil law: the Commercial Code, Federal Civil Code and state legislation set the rules. When the model suggests clauses or interprets contracts, it can apply legal logic from the wrong system." },
      { icon: Banknote, title: "Tax", body: "SAT tax logic — fiscal regimes, payment complements, CFDI and deductibility rules — has little to do with the IRS or HMRC. A globally trained assistant can confuse concepts, apply criteria from another jurisdiction or recommend strategies that aren't valid in Mexico. The outcome may be an incorrect filing or a fine." },
      { icon: Landmark, title: "Government", body: "An agent handling LGTAIP requests needs exact deadlines, procedures and regulations from the Mexican legal framework. The general transparency principles a global model knows are a starting point; the operational details that determine whether a request is processed correctly are local." },
      { icon: HeartPulse, title: "Health", body: "Clinical protocols, Normas Oficiales Mexicanas and COFEPRIS regulations are Mexico-specific. A model trained predominantly on U.S. or European data may recommend procedures, dosages or classifications that don't match the national regulatory framework." },
    ],
    stat: { value: "36%", label: "of global companies reported direct negative impacts from AI bias in 2024 — including loss of revenue, customers and employees.", source: "AI Bias Report, AllAboutAI, 2025" },
  },
  analogy: {
    chapter: "Chapter 04",
    eyebrow: "The analogy",
    h2: "It's the difference between a dubbed film and the original.",
    dubbed: "You follow the plot. But the jokes lose their timing, idioms feel forced and cultural references disappear or get awkwardly adapted. The experience is functional but distant. It was never designed for you.",
    original: "Lattice Na'at is the original version. Built specifically to close the WEIRD gap in Mexico and Latin America: with Mexican legislation and jurisprudence corpora, culturally appropriate benchmarks, processing on national infrastructure under Mexican law, and pioneering NLP work for indigenous languages.",
  },
  response: {
    chapter: "Chapter 05",
    eyebrow: "The response",
    h2: "Lattice Na'at isn't a translation patch. It's a different design.",
    lede: "Na'at is a family of specialized models, trained on Mexican legislation and jurisprudence corpora, evaluated with benchmarks that don't assume Western context, and deployed on national infrastructure under Mexican law.",
    pillars: [
      { icon: BookOpen, title: "Mexican Regulatory Corpus", body: "Federal and state legislation, jurisprudence, administrative regulation and sector-specific rules — integrated as base knowledge, not as web search. When Na'at answers about Mexican law, it reasons from Mexican law." },
      { icon: Database, title: "Non-WEIRD benchmarks", body: "Spanish HELM and MMLU-LatAm evaluate performance in Spanish without assuming Anglo-Saxon context. If a model scores well on MMLU but fails on MMLU-LatAm, WEIRD bias is active." },
      { icon: ShieldCheck, title: "Sovereign processing", body: "Data is processed on infrastructure located in Mexico — AWS Querétaro or the client's own servers. It doesn't cross borders. It isn't subject to the CLOUD Act or foreign jurisdiction." },
      { icon: Languages, title: "Indigenous languages", body: "Pioneering NLP work for Nahuatl, Maya and other indigenous languages. More than 7.3 million speakers per INEGI 2020 Census. A first step toward AI that represents the whole country." },
    ],
  },
  outcome: {
    chapter: "Chapter 06",
    eyebrow: "The impact in Mexico",
    h2: "What changes when AI is designed from the right context.",
    items: [
      { title: "Accessible government procedures", body: "An assistant that understands SAT, IMSS and INFONAVIT as part of its training — not as a web search. Guides any citizen through a bureaucratic process in plain language, regardless of education level." },
      { title: "Contracts in your legal framework", body: "Na'at explains a contract using the correct Mexican law — not translations of Anglo-Saxon clauses that may be inapplicable under the local Commercial Code." },
      { title: "Technological sovereignty", body: "Your data is processed in Mexico, under Mexican law, on infrastructure your organization controls. No dependence on foreign jurisdictions." },
      { title: "Inclusion that didn't exist", body: "For the first time, a systematic effort to make AI work in the languages millions of Mexicans speak — not just the language that dominates the internet." },
      { title: "Digital inclusion", body: "Training in indigenous languages (Nahuatl, Maya) as a first step toward AI that represents the 7.3M+ speakers of indigenous languages in Mexico." },
    ],
  },
  research: {
    chapter: "Chapter 07",
    eyebrow: "The research behind",
    h2: "Sintérgica Labs: the systematic work against WEIRD bias.",
    lede: "Four active research lines make up the mitigation program.",
    lines: [
      { num: "01", title: "Non-WEIRD benchmarks", body: "Spanish HELM and MMLU-LatAm: metrics that don't assume Western context." },
      { num: "02", title: "Cultural bias mitigation", body: "Systematic identification and reduction of WEIRD bias in production models." },
      { num: "03", title: "Mexican Regulatory Corpus V1", body: "Curated dataset of Mexican legislation, jurisprudence and regulation." },
      { num: "04", title: "NLP for indigenous languages", body: "Models and tools for Nahuatl, Maya and other indigenous languages." },
    ],
    cta: "Explore Sintérgica Labs",
  },
  cta: {
    badge: "Next step",
    title: "Close the WEIRD gap in your operations.",
    subtitle: "Book a Smart Diagnosis. In 45 minutes we identify where your current AI's bias is costing you — and how Lattice Na'at solves it with your real data.",
    ctaLabel: "Book Smart Diagnosis",
    trust: ["45 minutes, no cost", "No lock-in", "Demo with your real data"],
  },
};

const pt: Content = {
  hero: {
    eyebrow: "Pesquisa · Viés cultural em IA",
    h1: "O viés que ninguém te conta que sua IA tem.",
    lead: "Há um viés estrutural nos modelos de linguagem que os grandes laboratórios não publicam na home. Chama-se WEIRD. Tem nome, evidência científica e consequências mensuráveis em cada decisão que sua empresa toma com IA.",
    scrollHint: "Continuar lendo",
  },
  origin: {
    chapter: "Capítulo 01",
    eyebrow: "O que é o viés WEIRD?",
    h2: "Em 2010, três pesquisadores encontraram algo incômodo.",
    p1: "Joseph Henrich, Steven Heine e Ara Norenzayan publicaram um estudo em Behavioral and Brain Sciences que mudou como as ciências do comportamento se entendem. O achado foi incômodo: a imensa maioria do que a psicologia apresentava como “verdades universais” vinha de um tipo muito específico de sociedade.",
    p2: "Ocidentais. Educadas. Industrializadas. Ricas. Democráticas. O acrônimo WEIRD também significa “estranho” em inglês. E esse era justamente o ponto.",
    p3: "Populações WEIRD representam cerca de 15% da humanidade. São a exceção, não a norma. Mas a ciência as tratava como regra.",
    acronym: [
      { letter: "W", label: "Western", description: "Ocidental" },
      { letter: "E", label: "Educated", description: "Formalmente educado" },
      { letter: "I", label: "Industrialized", description: "Industrializado" },
      { letter: "R", label: "Rich", description: "Alta renda" },
      { letter: "D", label: "Democratic", description: "Democrático liberal" },
    ],
    consequence: "Mais de uma década depois, o mesmo padrão apareceu na IA. Desta vez, as consequências não são acadêmicas. São operacionais.",
    citation: "Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? Behavioral and Brain Sciences, 33(2–3), 61–83.",
  },
  evidence: {
    chapter: "Capítulo 02",
    eyebrow: "A ciência confirma",
    h2: "Harvard, 2023. 65 países. 94.278 pessoas.",
    lede: "Pesquisadores de Harvard (Atari et al., 2023) compararam respostas do GPT com dados de pessoas reais em 65 países. O achado central é uma correlação que não pode ser ignorada.",
    findingLabel: "Achado central",
    finding: "Correlação de r = −0,70 entre a distância cultural de um país em relação aos EUA e a similaridade do GPT com seus habitantes.",
    pullquote: "Quanto mais diferente é sua cultura da estadunidense, menos a IA que você usa representa você.",
    context: "EUA, Canadá, Austrália e Reino Unido são os mais próximos do perfil que os modelos replicam naturalmente. México, como a maior parte da América Latina, cai em uma zona de representação muito menor. O viés está nos dados de treinamento.",
    chartCaption: "Distância cultural vs. similaridade com respostas do GPT. Maior distância, menor representação.",
  },
  impact: {
    chapter: "Capítulo 03",
    eyebrow: "O que significa para sua empresa",
    h2: "Quatro áreas onde o viés deixa de ser teoria e vira custo.",
    lede: "O raciocínio jurídico, fiscal e regulatório de um modelo global é anglo-saxão por design. Aplicado ao México, o resultado soa técnico — mas parte do sistema errado.",
    verticals: [
      { icon: Scale, title: "Jurídico", body: "Um modelo treinado predominantemente com dados anglo-saxões raciocina a partir do Common Law. O México opera sob direito civil codificado: Código de Comércio, Código Civil Federal e legislação estadual estabelecem as regras." },
      { icon: Banknote, title: "Fiscal", body: "A lógica tributária do SAT — regimes fiscais, complementos de pagamento, CFDI e regras de dedutibilidade — tem pouco a ver com IRS ou HMRC. Um assistente treinado globalmente pode confundir conceitos e recomendar estratégias sem validade no México." },
      { icon: Landmark, title: "Governo", body: "Um agente que processa solicitações sob a LGTAIP precisa conhecer prazos, procedimentos e normas exatas do marco jurídico mexicano." },
      { icon: HeartPulse, title: "Saúde", body: "Protocolos clínicos, Normas Oficiais Mexicanas e regulação da COFEPRIS são específicos do México. Um modelo treinado com dados dos EUA ou Europa pode recomendar procedimentos fora do marco regulatório nacional." },
    ],
    stat: { value: "36%", label: "das empresas globais relataram impactos negativos diretos do viés de IA em 2024 — incluindo perda de receita, clientes e funcionários.", source: "AI Bias Report, AllAboutAI, 2025" },
  },
  analogy: {
    chapter: "Capítulo 04",
    eyebrow: "A analogia",
    h2: "É a diferença entre um filme dublado e a versão original.",
    dubbed: "Você segue a trama. Mas as piadas perdem o tempo, os idiomismos soam forçados e as referências culturais desaparecem ou são adaptadas de forma desajeitada. A experiência é funcional, mas distante. Nunca foi desenhada para você.",
    original: "Lattice Na'at é a versão original. Construída especificamente para fechar o gap WEIRD no México e na América Latina: com corpus normativos de legislação e jurisprudência mexicana, benchmarks culturalmente apropriados, processamento em infraestrutura nacional sob as leis do México, e trabalho pioneiro em PLN para línguas originárias.",
  },
  response: {
    chapter: "Capítulo 05",
    eyebrow: "A resposta",
    h2: "Lattice Na'at não é um patch de tradução. É um desenho diferente.",
    lede: "Na'at é uma família de modelos especializados, treinada com corpus normativos de legislação e jurisprudência mexicana, avaliada com benchmarks que não assumem contexto ocidental e implantada em infraestrutura nacional sob as leis do México.",
    pillars: [
      { icon: BookOpen, title: "Corpus Normativo Mexicano", body: "Legislação federal e estadual, jurisprudência, normas administrativas e regulação setorial — integrados como conhecimento base, não como busca na web." },
      { icon: Database, title: "Benchmarks sem viés ocidental", body: "Spanish HELM e MMLU-LatAm avaliam desempenho em espanhol sem assumir contexto anglo-saxão. Se um modelo pontua bem em MMLU mas falha em MMLU-LatAm, o viés WEIRD está atuando." },
      { icon: ShieldCheck, title: "Processamento soberano", body: "Os dados são processados em infraestrutura localizada no México — AWS Querétaro ou servidores do cliente. Não cruzam fronteiras. Não estão sujeitos ao CLOUD Act." },
      { icon: Languages, title: "Línguas originárias", body: "Trabalho pioneiro em PLN para náhuatl, maia e outras línguas indígenas. Mais de 7,3 milhões de falantes segundo o Censo 2020 do INEGI." },
    ],
  },
  outcome: {
    chapter: "Capítulo 06",
    eyebrow: "O impacto no México",
    h2: "O que muda quando a IA é desenhada a partir do contexto certo.",
    items: [
      { title: "Trâmites governamentais acessíveis", body: "Um assistente que entende SAT, IMSS e INFONAVIT como parte de seu treinamento. Guia qualquer cidadão em linguagem clara, independentemente do nível educacional." },
      { title: "Contratos no seu marco legal", body: "Na'at explica o contrato usando o direito mexicano correto — não traduções de cláusulas anglo-saxãs que podem ser inaplicáveis sob o Código de Comércio local." },
      { title: "Soberania tecnológica", body: "Seus dados são processados no México, sob leis mexicanas, em infraestrutura que sua organização controla." },
      { title: "Inclusão que não existia", body: "Pela primeira vez, um esforço sistemático para que a IA funcione nas línguas que milhões de mexicanos falam." },
      { title: "Inclusão digital", body: "Treinamento em línguas originárias (náhuatl, maia) como primeiro passo rumo a uma IA que represente os 7,3M+ de falantes de línguas indígenas no México." },
    ],
  },
  research: {
    chapter: "Capítulo 07",
    eyebrow: "A pesquisa por trás",
    h2: "Sintérgica Labs: o trabalho sistemático contra o viés WEIRD.",
    lede: "Quatro linhas de pesquisa ativas compõem o programa de mitigação.",
    lines: [
      { num: "01", title: "Benchmarks não-WEIRD", body: "Spanish HELM e MMLU-LatAm: métricas que não assumem contexto ocidental." },
      { num: "02", title: "Mitigação de viés cultural", body: "Identificação e redução sistemática de vieses WEIRD em modelos de produção." },
      { num: "03", title: "Corpus Normativo Mexicano V1", body: "Dataset curado de legislação, jurisprudência e regulação mexicana." },
      { num: "04", title: "PLN para línguas originárias", body: "Modelos e ferramentas para náhuatl, maia e outras línguas indígenas." },
    ],
    cta: "Conhecer Sintérgica Labs",
  },
  cta: {
    badge: "Próximo passo",
    title: "Feche o gap WEIRD na sua operação.",
    subtitle: "Agende um Diagnóstico Inteligente. Em 45 minutos identificamos onde o viés da sua IA atual te custa — e como Lattice Na'at resolve com seus dados reais.",
    ctaLabel: "Agendar Diagnóstico Inteligente",
    trust: ["45 minutos, sem custo", "Sem permanência", "Demo com seus dados reais"],
  },
};

const BOOKING_URL = "/diagnostico";

/* ══════════════════ Component ══════════════════ */

export function SesgoWeirdContent() {
  const locale = useLocale() as Locale;
  const c: Content =
    locale === "en" ? en : locale === "pt-br" ? pt : es;

  const shouldReduce = useReducedMotion();

  const originRef = useRef<HTMLDivElement>(null);
  const evidenceRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const analogyRef = useRef<HTMLDivElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);

  const originInView = useInView(originRef, { once: true, margin: "-80px" });
  const evidenceInView = useInView(evidenceRef, { once: true, margin: "-80px" });
  const impactInView = useInView(impactRef, { once: true, margin: "-80px" });
  const analogyInView = useInView(analogyRef, { once: true, margin: "-80px" });
  const responseInView = useInView(responseRef, { once: true, margin: "-80px" });
  const outcomeInView = useInView(outcomeRef, { once: true, margin: "-80px" });
  const researchInView = useInView(researchRef, { once: true, margin: "-80px" });

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
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0F1C] px-6 pb-16 pt-28"
        aria-labelledby="weird-hero-h1"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/65 via-brand-midnight/35 to-[#0A0F1C]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 via-transparent to-brand-navy/50" />
        </div>
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/[0.08] blur-[120px]" />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <m.div {...fade(0)} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-400 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                {!shouldReduce && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              {c.hero.eyebrow}
            </span>
          </m.div>

          <m.h1
            id="weird-hero-h1"
            {...fade(0.08)}
            animate={{ opacity: 1, y: 0 }}
            className="font-proxima mx-auto mt-6 max-w-4xl text-balance text-center text-4xl font-extrabold leading-[1.02] tracking-tight text-brand-white sm:text-5xl lg:text-[4.25rem]"
          >
            {c.hero.h1}
          </m.h1>

          <m.p
            {...fade(0.16)}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg leading-relaxed text-brand-white sm:text-xl [text-shadow:0_2px_12px_rgba(10,15,28,0.9)]"
          >
            {c.hero.lead}
          </m.p>

          <m.div
            {...fade(0.24)}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="#origin"
              className="group inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-white transition-colors hover:text-brand-accent-light"
            >
              <span>{c.hero.scrollHint}</span>
              <span className="flex h-8 w-5 items-start justify-center rounded-full border border-brand-white/60 p-1">
                <span className="block h-2 w-0.5 animate-bounce rounded-full bg-brand-white" />
              </span>
            </a>
          </m.div>
        </div>
      </section>

      {/* ══════════════ 01 · ORIGIN ══════════════ */}
      <section
        id="origin"
        ref={originRef}
        className="relative border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="weird-origin-h2"
      >
        <div className="mx-auto max-w-5xl">
          <m.div {...fade(0)} animate={originInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                <span className="h-px w-8 bg-amber-500/60" />
                {c.origin.eyebrow}
              </span>
            </div>
            <h2
              id="weird-origin-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.origin.h2}
            </h2>
          </m.div>

          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div /> {/* spacer */}
            <div className="space-y-6 text-base leading-relaxed text-brand-midnight/75 dark:text-brand-white/75 lg:text-lg">
              <m.p {...fade(0.08)} animate={originInView ? { opacity: 1, y: 0 } : {}}>
                {c.origin.p1}
              </m.p>
              <m.p {...fade(0.12)} animate={originInView ? { opacity: 1, y: 0 } : {}}>
                {c.origin.p2}
              </m.p>

              {/* Acronym breakdown */}
              <m.dl
                {...fade(0.18)}
                animate={originInView ? { opacity: 1, y: 0 } : {}}
                className="my-10 grid gap-px overflow-hidden rounded-2xl border border-brand-midnight/10 bg-brand-midnight/10 dark:border-brand-white/10 dark:bg-brand-white/10 sm:grid-cols-5"
              >
                {c.origin.acronym.map((a) => (
                  <div key={a.letter} className="flex flex-col bg-white p-5 dark:bg-brand-deep">
                    <dt className="font-proxima text-3xl font-extrabold text-brand-accent dark:text-brand-accent-light">
                      {a.letter}
                    </dt>
                    <dd className="mt-2">
                      <p className="font-mono text-xs uppercase tracking-wide text-brand-midnight/40 dark:text-brand-white/40">
                        {a.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-brand-midnight dark:text-brand-white">
                        {a.description}
                      </p>
                    </dd>
                  </div>
                ))}
              </m.dl>

              <m.p {...fade(0.22)} animate={originInView ? { opacity: 1, y: 0 } : {}}>
                {c.origin.p3}
              </m.p>

              <m.p
                {...fade(0.28)}
                animate={originInView ? { opacity: 1, y: 0 } : {}}
                className="border-l-2 border-amber-500 pl-6 font-proxima text-xl font-semibold text-brand-midnight dark:text-brand-white"
              >
                {c.origin.consequence}
              </m.p>

              <m.p
                {...fade(0.32)}
                animate={originInView ? { opacity: 1, y: 0 } : {}}
                className="mt-8 font-mono text-xs text-brand-midnight/45 dark:text-brand-white/45"
              >
                {c.origin.citation}
              </m.p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 02 · EVIDENCE (Harvard 2023 + Chart) ══════════════ */}
      <section
        ref={evidenceRef}
        className="relative overflow-hidden border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="weird-evidence-h2"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-brand-accent/6 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={evidenceInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent/60" />
                {c.evidence.eyebrow}
              </span>
            </div>
            <div>
              <h2
                id="weird-evidence-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.evidence.h2}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-midnight/65 dark:text-brand-white/65 lg:text-lg">
                {c.evidence.lede}
              </p>
            </div>
          </m.div>

          {/* Finding card */}
          <m.div
            {...fade(0.1)}
            animate={evidenceInView ? { opacity: 1, y: 0 } : {}}
            className="mb-10 grid gap-6 rounded-2xl border border-brand-accent/20 bg-white p-8 dark:border-brand-accent/25 dark:bg-brand-deep lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10 lg:p-10"
          >
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                {c.evidence.findingLabel}
              </p>
              <p className="font-proxima mt-3 text-5xl font-extrabold tracking-tight text-brand-accent sm:text-6xl">
                r = −0.70
              </p>
            </div>
            <p className="text-base leading-relaxed text-brand-midnight/75 dark:text-brand-white/75 lg:text-lg">
              {c.evidence.finding}
            </p>
          </m.div>

          {/* Pullquote */}
          <m.blockquote
            {...fade(0.16)}
            animate={evidenceInView ? { opacity: 1, y: 0 } : {}}
            className="my-14 mx-auto max-w-3xl text-center"
          >
            <Quote className="mx-auto h-8 w-8 text-brand-accent/30" aria-hidden />
            <p className="font-proxima mt-5 text-balance text-2xl font-semibold leading-snug text-brand-midnight dark:text-brand-white sm:text-3xl lg:text-[2.25rem]">
              “{c.evidence.pullquote}”
            </p>
          </m.blockquote>

          {/* Context paragraph */}
          <m.p
            {...fade(0.2)}
            animate={evidenceInView ? { opacity: 1, y: 0 } : {}}
            className="mx-auto mb-12 max-w-3xl text-pretty text-base leading-relaxed text-brand-midnight/70 dark:text-brand-white/70 lg:text-lg"
          >
            {c.evidence.context}
          </m.p>

          {/* Chart */}
          <m.figure
            {...fade(0.24)}
            animate={evidenceInView ? { opacity: 1, y: 0 } : {}}
            className="mt-8 overflow-hidden rounded-2xl border border-brand-midnight/10 bg-white p-2 dark:border-brand-white/10 dark:bg-brand-deep sm:p-4"
          >
            <WeirdBiasChart />
            <figcaption className="mt-3 px-2 pb-1 text-center text-xs text-brand-midnight/50 dark:text-brand-white/50">
              {c.evidence.chartCaption} · Atari et al., Harvard 2023
            </figcaption>
          </m.figure>
        </div>
      </section>

      {/* ══════════════ 03 · IMPACT (4 verticals + stat) ══════════════ */}
      <section
        ref={impactRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="weird-impact-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={impactInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                <span className="h-px w-8 bg-amber-500/60" />
                {c.impact.eyebrow}
              </span>
            </div>
            <div>
              <h2
                id="weird-impact-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.impact.h2}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-midnight/65 dark:text-brand-white/65 lg:text-lg">
                {c.impact.lede}
              </p>
            </div>
          </m.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-brand-midnight/10 bg-brand-midnight/10 dark:border-brand-white/10 dark:bg-brand-white/10 md:grid-cols-2">
            {c.impact.verticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <m.div
                  key={v.title}
                  {...fade(0.06 * i)}
                  animate={impactInView ? { opacity: 1, y: 0 } : {}}
                  className="flex flex-col bg-white p-8 transition-colors hover:bg-brand-surface dark:bg-brand-deep dark:hover:bg-brand-midnight lg:p-10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10">
                    <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400" strokeWidth={1.8} aria-hidden />
                  </div>
                  <h3 className="font-proxima mt-5 text-xl font-bold text-brand-midnight dark:text-brand-white">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {v.body}
                  </p>
                </m.div>
              );
            })}
          </div>

          {/* Stat callout */}
          <m.div
            {...fade(0.3)}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-amber-500/25 bg-amber-500/[0.04] p-8 dark:bg-amber-500/[0.06] lg:flex-row lg:items-center lg:gap-10 lg:p-10"
          >
            <p className="font-proxima text-5xl font-extrabold tracking-tight text-amber-600 dark:text-amber-400 sm:text-6xl lg:text-7xl">
              {c.impact.stat.value}
            </p>
            <div className="flex-1">
              <p className="text-base leading-relaxed text-brand-midnight/75 dark:text-brand-white/75 lg:text-lg">
                {c.impact.stat.label}
              </p>
              <p className="mt-3 font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                {c.impact.stat.source}
              </p>
            </div>
          </m.div>
        </div>
      </section>

      {/* ══════════════ 04 · ANALOGY ══════════════ */}
      <section
        ref={analogyRef}
        className="border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="weird-analogy-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={analogyInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                <span className="h-px w-8 bg-violet-500/60" />
                {c.analogy.eyebrow}
              </span>
            </div>
            <h2
              id="weird-analogy-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.analogy.h2}
            </h2>
          </m.div>

          <div className="grid gap-5 md:grid-cols-2">
            <m.div
              {...fade(0.1)}
              animate={analogyInView ? { opacity: 1, y: 0 } : {}}
              className="relative overflow-hidden rounded-2xl border border-brand-midnight/10 bg-white p-8 dark:border-brand-white/10 dark:bg-brand-deep lg:p-10"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-midnight/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-midnight/60 dark:bg-brand-white/5 dark:text-brand-white/60">
                {locale === "en" ? "Dubbed film" : locale === "pt-br" ? "Filme dublado" : "Película doblada"}
              </span>
              <p className="font-proxima mt-6 text-xl font-semibold leading-snug text-brand-midnight dark:text-brand-white">
                {locale === "en" ? "Global AI (ChatGPT, Claude, Gemini)" : locale === "pt-br" ? "IA global (ChatGPT, Claude, Gemini)" : "IA global (ChatGPT, Claude, Gemini)"}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                {c.analogy.dubbed}
              </p>
            </m.div>

            <m.div
              {...fade(0.16)}
              animate={analogyInView ? { opacity: 1, y: 0 } : {}}
              className="relative overflow-hidden rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-accent/[0.06] via-white to-emerald-500/[0.04] p-8 dark:border-brand-accent/30 dark:from-brand-accent/[0.12] dark:via-brand-deep dark:to-emerald-500/[0.06] lg:p-10"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-accent">
                <Sparkles className="h-3 w-3" aria-hidden />
                {locale === "en" ? "Original version" : locale === "pt-br" ? "Versão original" : "Versión original"}
              </span>
              <p className="font-proxima mt-6 text-xl font-semibold leading-snug text-brand-midnight dark:text-brand-white">
                Lattice Na&rsquo;at
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                {c.analogy.original}
              </p>
            </m.div>
          </div>
        </div>
      </section>

      {/* ══════════════ 05 · RESPONSE (4 pillars) ══════════════ */}
      <section
        ref={responseRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="weird-response-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={responseInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent/60" />
                {c.response.eyebrow}
              </span>
            </div>
            <div>
              <h2
                id="weird-response-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.response.h2}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-midnight/65 dark:text-brand-white/65 lg:text-lg">
                {c.response.lede}
              </p>
            </div>
          </m.div>

          <div className="grid gap-5 md:grid-cols-2">
            {c.response.pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <m.div
                  key={p.title}
                  {...fade(0.08 * i)}
                  animate={responseInView ? { opacity: 1, y: 0 } : {}}
                  className="group flex flex-col rounded-2xl border border-brand-midnight/10 bg-brand-surface p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-lg dark:border-brand-white/10 dark:bg-brand-midnight"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10">
                      <Icon className="h-5 w-5 text-brand-accent" strokeWidth={1.8} aria-hidden />
                    </div>
                    <span className="font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-proxima mt-5 text-lg font-bold text-brand-midnight dark:text-brand-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {p.body}
                  </p>
                </m.div>
              );
            })}
          </div>

          <m.div
            {...fade(0.4)}
            animate={responseInView ? { opacity: 1, y: 0 } : {}}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/investigacion/lattice-naat"
              className="group inline-flex items-center gap-2 rounded-lg border border-brand-accent/30 bg-brand-accent/5 px-6 py-3 text-sm font-semibold text-brand-accent transition-all hover:-translate-y-0.5 hover:border-brand-accent/50 hover:bg-brand-accent/10"
            >
              {locale === "en" ? "See full Na'at model" : locale === "pt-br" ? "Ver modelo Na'at completo" : "Ver Na'at en detalle"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </div>
      </section>

      {/* ══════════════ 06 · OUTCOME (Mexico impact) ══════════════ */}
      <section
        ref={outcomeRef}
        className="border-t border-brand-midnight/5 bg-brand-surface px-4 py-24 dark:border-brand-white/10 dark:bg-brand-midnight sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="weird-outcome-h2"
      >
        <div className="mx-auto max-w-6xl">
          <m.div {...fade(0)} animate={outcomeInView ? { opacity: 1, y: 0 } : {}} className="mb-14 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                <span className="h-px w-8 bg-emerald-500/60" />
                {c.outcome.eyebrow}
              </span>
            </div>
            <h2
              id="weird-outcome-h2"
              className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
            >
              {c.outcome.h2}
            </h2>
          </m.div>

          <ol className="grid gap-px overflow-hidden rounded-2xl border border-brand-midnight/10 bg-brand-midnight/10 dark:border-brand-white/10 dark:bg-brand-white/10 md:grid-cols-2 lg:grid-cols-3">
            {c.outcome.items.map((it, i) => (
              <m.li
                key={it.title}
                {...fade(0.05 * i)}
                animate={outcomeInView ? { opacity: 1, y: 0 } : {}}
                className="flex flex-col bg-white p-7 transition-colors hover:bg-brand-surface dark:bg-brand-deep dark:hover:bg-brand-midnight lg:p-8"
              >
                <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  0{i + 1}
                </span>
                <h3 className="font-proxima mt-4 text-base font-semibold leading-snug text-brand-midnight dark:text-brand-white">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                  {it.body}
                </p>
              </m.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════ 07 · RESEARCH ══════════════ */}
      <section
        ref={researchRef}
        className="border-t border-brand-midnight/5 bg-white px-4 py-24 dark:border-brand-white/10 dark:bg-brand-deep sm:px-6 lg:px-8 lg:py-32"
        aria-labelledby="weird-research-h2"
      >
        <div className="mx-auto max-w-5xl">
          <m.div {...fade(0)} animate={researchInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                <span className="h-px w-8 bg-violet-500/60" />
                {c.research.eyebrow}
              </span>
            </div>
            <div>
              <h2
                id="weird-research-h2"
                className="font-proxima text-balance text-3xl font-bold leading-[1.15] text-brand-midnight dark:text-brand-white sm:text-4xl lg:text-5xl"
              >
                {c.research.h2}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-midnight/65 dark:text-brand-white/65 lg:text-lg">
                {c.research.lede}
              </p>
            </div>
          </m.div>

          <ol className="grid gap-5 sm:grid-cols-2">
            {c.research.lines.map((l, i) => (
              <m.li
                key={l.num}
                {...fade(0.08 * i)}
                animate={researchInView ? { opacity: 1, y: 0 } : {}}
                className="group flex gap-5 rounded-2xl border border-brand-midnight/10 bg-brand-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-lg dark:border-brand-white/10 dark:bg-brand-midnight"
              >
                <span className="font-mono text-xs font-semibold text-violet-600 dark:text-violet-400">
                  {l.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-proxima text-base font-semibold leading-snug text-brand-midnight dark:text-brand-white">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {l.body}
                  </p>
                </div>
              </m.li>
            ))}
          </ol>

          <m.div
            {...fade(0.4)}
            animate={researchInView ? { opacity: 1, y: 0 } : {}}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/investigacion/labs"
              className="group inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/[0.06] px-6 py-3 text-sm font-semibold text-violet-600 transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-500/[0.1] dark:text-violet-400"
            >
              <FileText className="h-4 w-4" aria-hidden />
              {c.research.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </m.div>
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
