"use client";

import { Linkedin, Youtube, Github } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const HuggingFaceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-3.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-9 5.5s1 4 5.5 4 5.5-4 5.5-4H6.5z" />
  </svg>
);

import Image from "next/image";
import { FOOTER_COLUMNS, FOOTER_BOTTOM_LINKS, FOOTER_TAGLINE } from "@/lib/data";
import { useDictionary } from "@/i18n/DictionaryProvider";

const SOCIAL_LINKS: {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sintergica", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Sintergica-AI", icon: Github },
  { label: "X", href: "https://x.com/sintergica_ai", icon: XIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Sintergica-ai", icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/sintergica", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/sintergica.ai/", icon: InstagramIcon },
  { label: "WhatsApp", href: "https://wa.me/525659227340", icon: WhatsAppIcon },
  { label: "HuggingFace", href: "https://huggingface.co/sintergica", icon: HuggingFaceIcon },
];

const BADGES_WITH_IMAGE = [
  { name: "Meta Business Partner", src: "/images/MBP-Badge-Dark-backgrounds@4x.png", width: 140 },
  { name: "CANACINTRA", src: "/images/aliados/Canacintra.png", width: 140 },
  { name: "AMITI", src: "/images/aliados/Amiti CMYK.png", width: 120 },
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

        {/* ── Partners / Hecho en México ───── */}
        <div className="flex flex-row flex-nowrap items-center justify-between gap-3 border-t border-brand-midnight/[0.06] py-8 md:gap-6 md:py-10 dark:border-brand-white/[0.06]">
          {/* Badges + Hecho en México: móvil → distribución uniforme; desktop → badges izquierda, Hecho en México derecha */}
          <div className="flex flex-1 items-center justify-around gap-3 md:justify-start md:gap-10">
            {BADGES_WITH_IMAGE.map((badge) => (
              <div
                key={badge.name}
                className="flex h-10 items-center justify-center sm:h-12 md:h-16"
              >
                <Image
                  src={badge.src}
                  alt={badge.name}
                  width={160}
                  height={56}
                  className="max-h-8 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-10 md:max-h-12 dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0"
                />
              </div>
            ))}

            {/* Hecho en México — en móvil es parte del flujo uniforme, en desktop lo sacamos del grupo vía margin-left auto */}
            <div className="flex h-10 items-center justify-center sm:h-12 md:h-16 md:ml-auto">
              <Image
                src="/images/aliados/Hecho en Mexico.svg"
                alt="Hecho en México — Sintérgica AI"
                width={120}
                height={60}
                className="h-10 w-auto object-contain sm:h-12 md:h-14"
              />
            </div>
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
