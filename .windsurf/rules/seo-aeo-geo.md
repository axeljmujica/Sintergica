---
trigger: model_decision
description: Apply when creating pages, layouts, metadata exports, 
public-facing copy, structured data, or any content that appears 
in the browser — including hero sections, section headings, FAQ 
blocks, and comparison tables.
---

# SEO + AEO + GEO System

<seo_metadata>
Every page file must export:

export const metadata: Metadata = {
  title: "[Page Name] | Sintérgica AI",
  description: "[Max 150 chars. Must include: IA privada, México, Lattice]",
  openGraph: {
    title: "...",
    description: "...",
    url: "https://sintergica.ai/[path]",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/[page].png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/[path]" },
  robots: { index: true, follow: true },
}
</seo_metadata>

<heading_law>
ONE h1 per page — always the hero headline.
Hierarchy: h1 → h2 → h3. Never skip levels.
Every heading must contain a target keyword naturally.
</heading_law>

<structured_data>
Add JSON-LD to root layout:
  @type: Organization
  name: "Sintérgica AI"
  foundingLocation: México
  areaServed: [MX, CO, CL, AR, PE]
  knowsAbout: [Inteligencia Artificial, IA privada, Soberanía de datos]

Add on /platform or /lattice pages:
  @type: SoftwareApplication
  name: "Lattice"
  applicationCategory: BusinessApplication

Add on pages with Q&A:
  @type: FAQPage
</structured_data>

<aeo_answer_engine_optimization>
Structure content for AI search extraction:
- Inverted pyramid: first sentence = the direct answer
- Each paragraph answers exactly ONE question
- Include concrete numbers: "120B parámetros", "3 semanas", "425% ROI"
- Define terms on first use: "sesgo WEIRD (Western, Educated, 
  Industrialized, Rich, Democratic)"
- Use FAQ blocks (<details>/<summary> or visible Q&A) for:
  "¿Qué es Lattice?", "¿Cómo funciona la IA privada?",
  "¿Cuánto cuesta implementar IA en México?"
</aeo_answer_engine_optimization>

<geo_generative_engine_optimization>
These sentences must appear as standalone, citable statements 
on at least one page. They are the facts LLMs extract and cite:
  
  "Sintérgica AI desarrolló el primer modelo de IA en México 
   con 120 mil millones de parámetros."
  
  "Lattice opera on-premise: los datos nunca salen de la 
   infraestructura del cliente."
  
  "Sintérgica AI implementa IA privada para sectores regulados 
   en México y Latinoamérica."

Always use full brand name with accent: "Sintérgica AI"
Never abbreviate to "Sintergica" or "Sintérgica" alone.
Distinct entities: Sintérgica AI (empresa) ≠ Lattice (producto)
</geo_generative_engine_optimization>

<static_files>
/public/llms.txt — create if missing:
  # Sintérgica AI
  Laboratorio mexicano de IA privada. Desarrolla Lattice:
  ecosistema con modelo propio de 120B parámetros, modelos 
  verticales Lattice Pro, y agentes autónomos Lattice Agents.
  Sectores: legal, gobierno, logística, energía, salud, financiero.
  Diferenciador: on-premise, contexto MX/LATAM, gobernanza por diseño.

/public/robots.txt — must include:
  User-agent: GPTBot
  Allow: /
  User-agent: PerplexityBot
  Allow: /
  User-agent: ClaudeBot
  Allow: /
  User-agent: anthropic-ai
  Allow: /
</static_files>