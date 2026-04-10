import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CasosDeUsoContent } from "@/components/casos-de-uso/CasosDeUsoContent";
import { type Locale } from "@/i18n/config";
import { CASOS_DE_USO_I18N, type LangCode } from "@/lib/casos-de-uso-i18n";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = (lang as string) in CASOS_DE_USO_I18N ? (lang as LangCode) : "es";
  const t = CASOS_DE_USO_I18N[safeLang];

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `https://sintergica.ai${safeLang === "es" ? "" : `/${safeLang}`}/casos-de-uso`,
      siteName: "Sintérgica AI",
      images: [{ url: "/og/casos-de-uso.png", width: 1200, height: 630 }],
      locale: safeLang === "es" ? "es_MX" : safeLang === "en" ? "en_US" : "pt_BR",
      type: "website",
    },
    alternates: {
      canonical: `https://sintergica.ai${safeLang === "es" ? "" : `/${safeLang}`}/casos-de-uso`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function CasosDeExitoPage({ params }: Props) {
  const { lang } = await params;
  const safeLang = (lang as string) in CASOS_DE_USO_I18N ? (lang as LangCode) : "es";

  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <CasosDeUsoContent lang={safeLang} />
      </main>
      <Footer />
    </div>
  );
}
