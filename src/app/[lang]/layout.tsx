import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { Mulish } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";

function isValidLocale(lang: string): lang is Locale {
  return (i18n.locales as readonly string[]).includes(lang);
}

const proximaNova = localFont({
  src: [
    { path: "../../../public/fonts/ProximaNova-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../../public/fonts/ProximaNova-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../../public/fonts/Proxima Nova Bold.otf", weight: "700", style: "normal" },
    { path: "../../../public/fonts/ProximaNova-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-proxima",
  display: "swap",
});

const gilroy = localFont({
  src: [
    { path: "../../../public/fonts/Gilroy-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../../public/fonts/Gilroy-Extrabold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.metadata?.title || "Sintérgica AI — IA Privada para México y Latinoamérica",
    description: dictionary.metadata?.description || "Sintérgica AI diseña, implementa y opera Lattice: IA privada con modelos especializados, agentes autónomos y gobernanza verificable para sectores regulados de México y LATAM.",
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon.svg", type: "image/svg+xml" }
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {i18n.locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`https://sintergica.ai${locale === i18n.defaultLocale ? '' : `/${locale}`}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://sintergica.ai" />
      </head>
      <body className={`${proximaNova.variable} ${gilroy.variable} ${mulish.variable} antialiased bg-brand-surface text-brand-midnight overflow-x-hidden`}>
        <DictionaryProvider dictionary={dictionary} locale={locale}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
