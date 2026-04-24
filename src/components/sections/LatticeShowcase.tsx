"use client";

import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function LatticeShowcase() {
  const dictionary = useDictionary();

  return (
    <section className="relative w-full bg-brand-white py-12 md:py-20 px-4 md:px-8">
      {/* Card container */}
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] md:min-h-[650px] lg:min-h-[700px]">

        {/* Background photo */}
        <Image
          src="/images/ocean-waves.jpg"
          alt="Océano azul"
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />

        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />

        {/* ─── Mobile: natural flow (no overlap) ─── */}
        <div className="relative z-20 flex flex-col p-6 pb-8 md:hidden">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/lattice-chat.svg"
              alt="Lattice"
              width={36}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="text-white font-proxima font-bold text-xl tracking-tight">
              Lattice
            </span>
          </div>
          <h2 className="mt-8 font-proxima text-[1.875rem] leading-[1.1] font-bold text-white tracking-tight text-balance">
            El sistema operativo inteligente de tu organización
          </h2>
          <p className="mt-4 text-[0.95rem] text-white/80 leading-relaxed">
            Del trabajo disperso a la ejecución coordinada — Lattice integra chat, agentes autónomos, bases de conocimiento y automatizaciones en un solo espacio. Todo en español, todo en tu región, todo bajo tu control.
          </p>
          <Link
            href="/soluciones/lattice"
            className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-midnight"
          >
            conoce Lattice
          </Link>
          {/* Mockup below, clearly separated */}
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/mockup-home.png"
              alt="Lattice interface"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
            />
          </div>
        </div>

        {/* ─── Desktop (md+): absolute layout with mockup floating right ─── */}
        <div className="hidden md:flex absolute inset-0 z-20 flex-col p-12 lg:p-16">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/lattice-chat.svg"
              alt="Lattice"
              width={36}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <span className="text-white font-proxima font-bold text-2xl tracking-tight">
              Lattice
            </span>
          </div>
          <div className="flex-1" />
          <div className="w-full max-w-[420px] lg:max-w-[480px]">
            <h2 className="font-proxima text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
              El sistema operativo inteligente de tu organización
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-8">
              Del trabajo disperso a la ejecución coordinada — Lattice integra chat, agentes autónomos, bases de conocimiento y automatizaciones en un solo espacio. Todo en español, todo en tu región, todo bajo tu control.
            </p>
            <Link
              href="/soluciones/lattice"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-midnight"
            >
              conoce Lattice
            </Link>
          </div>
        </div>

        <div className="absolute top-[10%] bottom-0 left-[42%] right-0 z-10 pointer-events-none hidden md:block">
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
    </section>
  );
}
