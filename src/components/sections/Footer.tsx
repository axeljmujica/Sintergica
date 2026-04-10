"use client";

import { Linkedin, Youtube, Twitter } from "lucide-react";
import Image from "next/image";
import { FOOTER_COLUMNS, FOOTER_BOTTOM_LINKS, FOOTER_TAGLINE } from "@/lib/data";
import { useDictionary } from "@/i18n/DictionaryProvider";

const SOCIAL_LINKS: {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sintergica", icon: Linkedin },
  { label: "X", href: "#", icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/@Sintergica-ai", icon: Youtube },
];

const BADGES_WITH_IMAGE = [
  { name: "AMITI", src: "/images/aliados/Amiti CMYK.png", width: 120 },
  { name: "CANACINTRA", src: "/images/aliados/Canacintra.png", width: 140 },
  { name: "Universidad Veracruzana", src: "/images/aliados/Universidad Veracruzana.png", width: 50 },
  { name: "COVECEIDET", src: "/images/aliados/coveicydet.png", width: 130 },
  { name: "Secretaría de Economía", src: "/images/aliados/Logo Secretaria de Economia 2024.png", width: 160 },
  { name: "Secretaría de Ciencia y Tecnología", src: "/images/aliados/Logo Secretaria Ciencia y Tecnologia 2024.png", width: 160 },
  { name: "Agencia de Transformación Digital", src: "/images/aliados/Logo ATDT 2024.png", width: 120 },
];

export function Footer() {
  const year = new Date().getFullYear();
  const dictionary = useDictionary();
  
  const footerCols = dictionary.footer?.columns || FOOTER_COLUMNS;
  const bottomLinks = dictionary.footer?.bottomLinks || FOOTER_BOTTOM_LINKS;

  return (
    <footer
      className="border-t border-brand-midnight/[0.06] bg-brand-surface dark:border-brand-white/[0.06] dark:bg-brand-midnight"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Main grid ─────────────────────────────────────── */}
        <div className="py-14 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {/* Brand column (spans 2) */}
            <div className="lg:col-span-2 lg:pr-8">
              <Image
                src="/logo/Sintergica-ai-color@4x.png"
                alt="Sintérgica AI"
                width={140}
                height={32}
                className="mb-5 h-7 w-auto dark:hidden"
              />
              <Image
                src="/logo/Sintergica-ai-white@4x.png"
                alt="Sintérgica AI"
                width={140}
                height={32}
                className="mb-5 h-7 w-auto hidden dark:block"
              />
              <p className="text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/50">
                {dictionary.footer?.tagline || FOOTER_TAGLINE}
              </p>

              {/* Social icons */}
              <div className="mt-5 flex items-center gap-2">
                {SOCIAL_LINKS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-midnight/[0.06] text-brand-midnight/50 transition-colors duration-200 hover:border-brand-accent/30 hover:text-brand-accent dark:border-brand-white/[0.06] dark:text-brand-white/40 dark:hover:border-brand-accent/30 dark:hover:text-brand-accent"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link columns */}
            {footerCols.map((col: { title: string, links: { label: string, href: string }[] }) => (
              <div key={col.title}>
                <h3 className="mb-4 text-xs font-proxima font-semibold uppercase tracking-wider text-brand-midnight/60 dark:text-brand-white/50">
                  {col.title}
                </h3>
                <ul className="space-y-2.5" role="list">
                  {col.links.map((link: { label: string, href: string }) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-midnight/50 transition-colors duration-200 hover:text-brand-midnight dark:text-brand-white/45 dark:hover:text-brand-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Partners / Asociaciones / Hecho en México ───── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-brand-midnight/[0.06] py-10 dark:border-brand-white/[0.06]">
          {/* Asociaciones Carousel */}
          <div className="w-full max-w-[800px] overflow-hidden">
            <h4 className="mb-4 text-center text-[0.625rem] font-proxima font-semibold uppercase tracking-[0.15em] text-brand-midnight/30 dark:text-brand-white/30 md:text-left">
              {dictionary.footer?.asociaciones || "Asociaciones y Partners"}
            </h4>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-brand-surface to-transparent dark:from-brand-midnight" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-brand-surface to-transparent dark:from-brand-midnight" />
              <div className="flex animate-marquee items-center gap-4">
                {BADGES_WITH_IMAGE.map((badge) => (
                  <div key={badge.name} className="group flex h-16 flex-shrink-0 items-center justify-center rounded-xl px-4 transition-all duration-300" style={{ width: badge.width }}>
                    <Image
                      src={badge.src}
                      alt={badge.name}
                      width={130}
                      height={48}
                      className="max-h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
                    />
                  </div>
                ))}
                {BADGES_WITH_IMAGE.map((badge) => (
                  <div key={`dup-${badge.name}`} className="group flex h-16 flex-shrink-0 items-center justify-center rounded-xl px-4 transition-all duration-300" style={{ width: badge.width }}>
                    <Image
                      src={badge.src}
                      alt={badge.name}
                      width={130}
                      height={48}
                      className="max-h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hecho en México */}
          <div className="flex-shrink-0 text-center md:text-right">
            <h4 className="mb-4 text-[0.625rem] font-proxima font-semibold uppercase tracking-[0.15em] text-brand-midnight/30 dark:text-brand-white/30">
              {dictionary.footer?.hechoEn || "Hecho en México"}
            </h4>
            <Image
              src="/images/aliados/Hecho en Mexico.svg"
              alt="Hecho en México — Sintérgica AI"
              width={120}
              height={60}
              className="h-14 w-auto object-contain mx-auto md:ml-auto"
            />
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-brand-midnight/[0.06] py-6 dark:border-brand-white/[0.06] sm:flex-row">
          <p className="text-xs text-brand-midnight/40 dark:text-brand-white/35">
            &copy; {year} Sintérgica AI. {dictionary.footer?.rights || "Todos los derechos reservados."}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {bottomLinks.map((link: { label: string, href: string }) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-brand-midnight/50 transition-colors duration-200 hover:text-brand-midnight dark:text-brand-white/40 dark:hover:text-brand-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
