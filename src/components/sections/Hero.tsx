"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { LinkedinIcon, GithubIcon, Server } from "lucide-react";
import { HERO } from "@/lib/data";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { useDictionary } from "@/i18n/DictionaryProvider";

function HuggingFaceIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
  HuggingFace: HuggingFaceIcon,
};

export function Hero() {
  const dictionary = useDictionary();
  const shouldReduce = useReducedMotion();
  return (
    <section
      className="relative flex w-full flex-col items-center justify-start overflow-hidden bg-brand-white pt-[4.5rem] pb-20"
      aria-label="Sintérgica AI Inicio"
    >
      {/* Container acting as the "rounded image" like the reference */}
      <div className="relative mx-5 sm:mx-6 md:mx-8 xl:mx-auto flex w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] xl:w-full max-w-[1400px] flex-col overflow-hidden rounded-[2.5rem] bg-brand-midnight min-h-[calc(100svh-5.5rem)] lg:h-[calc(100vh-5.5rem)] lg:min-h-[600px] px-6 sm:px-8 lg:px-12 pt-10 pb-8 shadow-2xl">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-brand-midnight">
          <video
            src="/videos/0330.mp4"
            poster="/images/hero-home.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight/40 via-brand-midnight/10 to-brand-midnight/80" />
        </div>

        {/* Sparkles particle field */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            particleDensity={40}
            particleColor="#ffffff"
            className="opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 items-start justify-center text-left mx-auto w-full">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.5 }}
            className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-[0.85rem] font-medium text-white/80 w-fit"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Laboratorio de IA Mexicano 🇲🇽
          </motion.div>

          <motion.h1
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.1 }}
            className="font-proxima text-[clamp(2rem,4vw,4.5rem)] font-bold leading-[1.2] tracking-tight text-white w-full max-w-[1100px]"
          >
            <span className="block mb-2 md:mb-4">
              La IA más inteligente no es la más grande.
            </span>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-3 md:gap-x-4">
              Es la del
              <span className="inline-flex items-center px-5 py-2 md:px-6 md:py-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl text-brand-white/95">
                contexto correcto.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.35 }}
            className="mt-8 max-w-[600px] text-[1.125rem] leading-[1.6] text-white/80 font-medium"
          >
            {dictionary.hero?.subtitle || HERO.subtitle}
          </motion.p>

          <motion.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto"
          >
            <a
              href={HERO.ctaPrimaryHref}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-surface px-8 py-4 text-[1rem] font-semibold text-brand-midnight shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white focus-visible:outline-none"
            >
              {dictionary.hero?.ctaPrimary || HERO.ctaPrimary}
            </a>
            <a
              href={HERO.ctaSecondaryHref}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-[1rem] font-semibold text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline-none"
            >
              {dictionary.hero?.ctaSecondary || HERO.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Bottom Elements (Inside Image Box) */}
        <div className="relative z-10 w-full mt-auto pt-6 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 w-fit">
            <div className="flex items-center">
              {[
                { src: "/images/nubes/VPS-1.jpg", alt: "DigitalOcean" },
                { src: "/images/nubes/VPS-2.png", alt: "Google Cloud" },
                { src: "/images/nubes/VPS-3.png", alt: "Azure" },
                { src: "/images/nubes/VPS-4.jpg", alt: "AWS" },
              ].map((cloud, i) => (
                <div
                  key={i}
                  className={`relative w-[2rem] h-[2rem] sm:w-[2.25rem] sm:h-[2.25rem] rounded-full border-[2px] border-white/40 overflow-hidden shadow-md bg-white ${i !== 0 ? "-ml-2.5" : ""
                    }`}
                >
                  <Image
                    src={cloud.src}
                    alt={cloud.alt}
                    fill
                    className="object-cover bg-brand-midnight"
                    sizes="40px"
                  />
                </div>
              ))}
              {/* On-Premise Icon */}
              <div
                className="relative flex items-center justify-center w-[2rem] h-[2rem] sm:w-[2.25rem] sm:h-[2.25rem] rounded-full border-[2px] border-white/40 shadow-md bg-[#252a37] -ml-2.5 z-10"
              >
                <Server className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <p className="text-[0.95rem] sm:text-[1rem] font-medium leading-[1.3] text-left tracking-normal">
              <span className="text-white/90 block">Compatible con tu proveedor</span>
              <span className="text-white/50 block">de nube y On-Premise.</span>
            </p>
          </div>

          <div className="flex items-center gap-5">
            {HERO.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.85rem] font-medium text-white/50 transition-colors hover:text-white flex items-center gap-1.5"
              >
                {s.label} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
