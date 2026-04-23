import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";

// ── Above-the-fold: static imports (must render immediately)
// Navbar + Hero are eagerly loaded for best LCP

// ── Below-the-fold: lazy loaded to split the JS bundle
const LogoStrip = dynamic(
  () => import("@/components/sections/LogoStrip").then((m) => ({ default: m.LogoStrip })),
  { ssr: true }
);
const StatsBar = dynamic(
  () => import("@/components/sections/StatsBar").then((m) => ({ default: m.default })),
  { ssr: true }
);
const Services = dynamic(
  () => import("@/components/sections/Services").then((m) => ({ default: m.Services })),
  { ssr: true }
);
const LatticeShowcase = dynamic(
  () => import("@/components/sections/LatticeShowcase").then((m) => ({ default: m.LatticeShowcase })),
  { ssr: true }
);
const IndustriesCarousel = dynamic(
  () => import("@/components/sections/IndustriesCarousel").then((m) => ({ default: m.IndustriesCarousel })),
  { ssr: true }
);
const ModelFeatures = dynamic(
  () => import("@/components/sections/ModelFeatures").then((m) => ({ default: m.ModelFeatures })),
  { ssr: true }
);
const TestimonialsCarousel = dynamic(
  () => import("@/components/sections/TestimonialsCarousel").then((m) => ({ default: m.TestimonialsCarousel })),
  { ssr: true }
);
const BlogHighlight = dynamic(
  () => import("@/components/sections/BlogHighlight").then((m) => ({ default: m.BlogHighlight })),
  { ssr: true }
);
const PreFooterCTA = dynamic(
  () => import("@/components/sections/PreFooterCTA").then((m) => ({ default: m.PreFooterCTA })),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => ({ default: m.Footer })),
  { ssr: true }
);

import { i18n } from "@/i18n/config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-surface text-brand-midnight dark:bg-brand-midnight dark:text-brand-white">
      <Navbar />
      <main>
        {/* 1. Hero — above the fold, SSR + eager */}
        <Hero />
        {/* 2–10. Below the fold — code-split bundles */}
        <LogoStrip />
        <StatsBar />
        <Services />
        <LatticeShowcase />
        <IndustriesCarousel />
        <ModelFeatures />
        <TestimonialsCarousel />
        <BlogHighlight />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
