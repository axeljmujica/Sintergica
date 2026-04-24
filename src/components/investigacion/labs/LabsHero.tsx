"use client";

import { PageHero } from "@/components/shared/PageHero";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";

export function LabsHero() {
  const locale = useLocale();
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).hero;

  return (
    <PageHero
      badge={c.badge}
      badgeColor="success-600"
      title={c.h1}
      subtitle={c.subtitle}
      ctaLabel={c.ctaPrimary}
      ctaHref="/diagnostico"
      ctaSecondaryLabel={c.ctaSecondary}
      ctaSecondaryHref="#lineas"
      bgImage="/images/Catedral Metropolitana Ciudad de México.jpg"
      bgImageAlt="Sintérgica Labs"
      trustSignals={[...c.trustSignals]}
    />
  );
}
