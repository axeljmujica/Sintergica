"use client";

import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function LatticeShowcase() {
  const dictionary = useDictionary();

  return (
    <section className="relative w-full bg-brand-white py-12 md:py-20 px-4 md:px-8">
      {/* Single rounded card — everything is INSIDE this container */}
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[550px] md:min-h-[650px] lg:min-h-[700px]">

        {/* Background photo — fills the ENTIRE card from edge to edge */}
        <Image
          src="/images/ocean-waves.jpg"
          alt="Océano azul"
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />

        {/* Dark gradient overlays for text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]" />

        {/* ─── Text content: logo top-left, title+subtitle+CTA bottom-left ─── */}
        <div className="absolute inset-0 z-20 flex flex-col p-8 md:p-12 lg:p-16">
          {/* Logo + wordmark */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/lattice-chat.svg"
              alt="Lattice"
              width={36}
              height={36}
              className="h-8 md:h-9 w-auto brightness-0 invert"
            />
            <span className="text-white font-proxima font-bold text-xl md:text-2xl tracking-tight">
              Lattice
            </span>
          </div>

          {/* Push text to bottom */}
          <div className="flex-1" />

          {/* Text block — restricted to the left ~40% so it never touches the mockup */}
          <div className="w-full max-w-[420px] lg:max-w-[480px]">
            <h2 className="font-proxima text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
              El sistema operativo inteligente de tu organización
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">
              Del trabajo disperso a la ejecución coordinada — Lattice integra chat, agentes autónomos, bases de conocimiento y automatizaciones en un solo espacio. Todo en español, todo en tu región, todo bajo tu control.
            </p>
            <Link
              href="/soluciones/lattice"
              className="inline-flex h-11 md:h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-midnight"
            >
              conoce Lattice
            </Link>
          </div>
        </div>

        {/* ─── Mockup — FLOATS on top of the ocean on the right side ─── */}
        {/* This is positioned absolutely INSIDE the same card, so the ocean shows behind it */}
        <div className="absolute top-[10%] bottom-0 left-[42%] right-0 z-10 pointer-events-none hidden md:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/mockup-home.png"
              alt="Lattice interface"
              fill
              className="object-contain object-right-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              sizes="800px"
              priority
            />
          </div>
        </div>

        {/* Mobile: mockup below text, smaller */}
        <div className="absolute bottom-0 right-0 w-[80%] h-[35%] z-10 pointer-events-none md:hidden">
          <Image
            src="/images/mockup-home.png"
            alt="Lattice interface"
            fill
            className="object-contain object-right-bottom"
            sizes="400px"
          />
        </div>
      </div>
    </section>
  );
}
