"use client";

import Image from "next/image";
import { useDictionary } from "@/i18n/DictionaryProvider";

const LOGOS = [
  { src: "/images/aliados/Amiti CMYK.png", alt: "AMITI", width: 120, height: 40 },
  { src: "/images/aliados/Canacintra.png", alt: "CANACINTRA", width: 140, height: 40 },
  { src: "/images/aliados/Universidad Veracruzana.png", alt: "Universidad Veracruzana", width: 50, height: 40 },
  { src: "/images/aliados/Logo Secretaria de Economia 2024.png", alt: "Secretaría de Economía", width: 160, height: 40 },
  { src: "/images/aliados/coveicydet.png", alt: "COVEICYDET", width: 130, height: 40 },
  { src: "/images/aliados/Logo Secretaria Ciencia y Tecnologia 2024.png", alt: "Secretaría de Ciencia y Tecnología", width: 160, height: 40 },
  { src: "/images/aliados/Logo ATDT 2024.png", alt: "ATDT", width: 120, height: 40 },
];

export function LogoStrip() {
  const dictionary = useDictionary();

  return (
    <>
      <section
        className="bg-brand-white py-4 dark:bg-brand-midnight overflow-hidden"
        aria-label="Organizaciones aliadas"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="text-center text-[0.813rem] font-semibold uppercase tracking-[0.2em] text-brand-midnight/40 dark:text-brand-white/40 mb-8">
            {dictionary.socialProof?.title || "Organizaciones e instituciones aliadas"}
          </p>
        </div>

        {/* Marquee container with fade masks */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-brand-white dark:from-brand-midnight to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-brand-white dark:from-brand-midnight to-transparent" />

          {/* Scrolling track */}
          <div className="flex animate-marquee gap-x-16 whitespace-nowrap" aria-hidden="false">
            {/* First set */}
            {LOGOS.map((logo, i) => (
              <div
                key={`a-${i}`}
                className="inline-flex shrink-0 items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-40 dark:invert dark:hover:opacity-100 dark:hover:invert-0"
              >
                <div className="relative" style={{ width: logo.width, height: logo.height }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes={`${logo.width}px`}
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {LOGOS.map((logo, i) => (
              <div
                key={`b-${i}`}
                className="inline-flex shrink-0 items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-40 dark:invert dark:hover:opacity-100 dark:hover:invert-0"
                aria-hidden="true"
                style={{ width: logo.width, height: logo.height }}
              >
                <div className="relative" style={{ width: logo.width, height: logo.height }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes={`${logo.width}px`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
