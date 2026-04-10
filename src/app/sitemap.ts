import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://sintergica.ai";
const LOCALES = ["es", "en", "pt-BR"] as const;

/** All page paths relative to /[lang] */
const ROUTES = [
  { path: "", priority: 1.0, changeFreq: "weekly" },
  // Solutions
  { path: "/soluciones", priority: 0.9, changeFreq: "weekly" },
  { path: "/soluciones/lattice", priority: 0.9, changeFreq: "weekly" },
  { path: "/soluciones/lattice-seeb", priority: 0.8, changeFreq: "monthly" },
  { path: "/soluciones/nahui", priority: 0.8, changeFreq: "weekly" },
  { path: "/soluciones/saleshub", priority: 0.8, changeFreq: "weekly" },
  // Industries
  { path: "/industrias", priority: 0.8, changeFreq: "weekly" },
  { path: "/industrias/legal", priority: 0.7, changeFreq: "monthly" },
  { path: "/industrias/gobierno", priority: 0.7, changeFreq: "monthly" },
  { path: "/industrias/logistica", priority: 0.7, changeFreq: "monthly" },
  { path: "/industrias/energia", priority: 0.7, changeFreq: "monthly" },
  { path: "/industrias/salud", priority: 0.7, changeFreq: "monthly" },
  { path: "/industrias/financiero", priority: 0.7, changeFreq: "monthly" },
  { path: "/industrias/ventas", priority: 0.7, changeFreq: "monthly" },
  // Services
  { path: "/servicios", priority: 0.8, changeFreq: "monthly" },
  { path: "/servicios/consultoria", priority: 0.7, changeFreq: "monthly" },
  { path: "/servicios/implementacion", priority: 0.7, changeFreq: "monthly" },
  { path: "/servicios/capacitacion", priority: 0.7, changeFreq: "monthly" },
  { path: "/servicios/fine-tuning", priority: 0.7, changeFreq: "monthly" },
  { path: "/servicios/metodologia", priority: 0.6, changeFreq: "monthly" },
  // Company
  { path: "/empresa/nosotros", priority: 0.7, changeFreq: "monthly" },
  { path: "/empresa/acerca-de", priority: 0.6, changeFreq: "monthly" },
  { path: "/empresa/equipo", priority: 0.6, changeFreq: "monthly" },
  { path: "/empresa/alianzas", priority: 0.6, changeFreq: "monthly" },
  { path: "/empresa/contacto", priority: 0.8, changeFreq: "monthly" },
  // Research
  { path: "/investigacion", priority: 0.7, changeFreq: "monthly" },
  { path: "/investigacion/labs", priority: 0.6, changeFreq: "monthly" },
  { path: "/investigacion/lattice-naat", priority: 0.6, changeFreq: "monthly" },
  { path: "/investigacion/gobernanza", priority: 0.6, changeFreq: "monthly" },
  { path: "/investigacion/constitucion", priority: 0.6, changeFreq: "monthly" },
  { path: "/investigacion/sesgo-weird", priority: 0.5, changeFreq: "monthly" },
  // Resources
  { path: "/recursos/blog", priority: 0.7, changeFreq: "weekly" },
  { path: "/recursos/historias-de-exito", priority: 0.7, changeFreq: "monthly" },
  { path: "/recursos/eventos", priority: 0.6, changeFreq: "weekly" },
  { path: "/recursos/prensa", priority: 0.6, changeFreq: "monthly" },
  // Other top-level
  { path: "/casos-de-uso", priority: 0.7, changeFreq: "monthly" },
  { path: "/despliegue", priority: 0.6, changeFreq: "monthly" },
  { path: "/diagnostico", priority: 0.8, changeFreq: "monthly" },
  { path: "/seguridad", priority: 0.6, changeFreq: "monthly" },
  // Legal
  { path: "/privacidad", priority: 0.3, changeFreq: "yearly" },
  { path: "/terminos", priority: 0.3, changeFreq: "yearly" },
] as const;

/** Map locale to hreflang tag */
function localeToHreflang(locale: string): string {
  const map: Record<string, string> = {
    es: "es",
    en: "en",
    "pt-BR": "pt-BR",
  };
  return map[locale] ?? locale;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}${route.path}`;

      // Build alternates for hreflang
      const alternates: Record<string, string> = {};
      for (const alt of LOCALES) {
        alternates[localeToHreflang(alt)] = `${BASE_URL}/${alt}${route.path}`;
      }
      alternates["x-default"] = `${BASE_URL}/es${route.path}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFreq as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: route.priority,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}
