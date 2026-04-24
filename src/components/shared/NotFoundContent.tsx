"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { ArrowRight, Home } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ══════════════════ i18n ══════════════════ */

type Locale = "es" | "en" | "pt-br";

interface Content {
  eyebrow: string;
  h1: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  imageAlt: string;
}

const es: Content = {
  eyebrow: "Error 404 · Página no encontrada",
  h1: "Esta página se perdió en el espacio.",
  lead:
    "El enlace no existe, fue movido o tiene un error. No pasa nada — puedes volver al inicio o escribirnos.",
  ctaPrimary: "Volver al inicio",
  ctaSecondary: "Hablar con el equipo",
  imageAlt: "Ilustración 404 · Gato astronauta de Sintérgica AI con visor de realidad virtual",
};

const en: Content = {
  eyebrow: "Error 404 · Page not found",
  h1: "This page got lost in space.",
  lead:
    "The link doesn't exist, was moved, or has a typo. No worries — you can go back home or reach out.",
  ctaPrimary: "Back to home",
  ctaSecondary: "Talk to the team",
  imageAlt: "404 illustration · Sintérgica AI astronaut cat wearing a VR headset",
};

const pt: Content = {
  eyebrow: "Erro 404 · Página não encontrada",
  h1: "Esta página se perdeu no espaço.",
  lead:
    "O link não existe, foi movido ou tem um erro. Sem problema — você pode voltar ao início ou nos escrever.",
  ctaPrimary: "Voltar ao início",
  ctaSecondary: "Falar com a equipe",
  imageAlt: "Ilustração 404 · Gato astronauta da Sintérgica AI com visor de realidade virtual",
};

/* ══════════════════ Component ══════════════════ */

export function NotFoundContent() {
  const locale = useLocale() as Locale;
  const c: Content = locale === "en" ? en : locale === "pt-br" ? pt : es;
  const homeHref = locale === "es" ? "/" : `/${locale}/`;
  const contactHref = locale === "es" ? "/empresa/contacto" : `/${locale}/empresa/contacto`;

  const shouldReduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldReduce) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, [shouldReduce]);

  const fade = (delay = 0) =>
    shouldReduce
      ? { initial: false, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        };

  return (
    <LazyMotion features={domAnimation}>
      <main
        className="relative flex min-h-screen items-center overflow-hidden bg-brand-surface px-4 py-16 dark:bg-brand-midnight sm:px-6 lg:px-8"
        aria-labelledby="not-found-h1"
      >
        {/* Ambient backdrop */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(54,101,245,0.1),transparent_55%)]" />
          <div className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-emerald-500/6 blur-[120px]" />
          <div className="absolute right-[-10%] top-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/6 blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              color: "var(--brand-midnight)",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Illustration (video loop) */}
            <m.div
              {...fade(0)}
              className="relative order-1 mx-auto flex w-full max-w-md items-center justify-center lg:order-none lg:max-w-none"
            >
              <div
                className="absolute inset-0 -z-10 mx-auto my-auto h-[70%] w-[70%] animate-pulse-glow rounded-full bg-brand-accent/15 blur-3xl dark:bg-brand-accent/25"
                aria-hidden="true"
              />
              <m.div
                initial={shouldReduce ? false : { y: 0 }}
                animate={shouldReduce ? undefined : { y: [0, -8, 0] }}
                transition={shouldReduce ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[520px] overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.22)] ring-1 ring-brand-midnight/5 will-change-transform dark:shadow-[0_25px_60px_rgba(0,0,0,0.55)] dark:ring-brand-white/5"
              >
                <video
                  ref={videoRef}
                  src="/videos/404.mp4"
                  poster="/images/404-error.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={c.imageAlt}
                  className="block h-auto w-full"
                />
              </m.div>
            </m.div>

            {/* Copy + CTAs */}
            <div className="order-2 text-center lg:order-none lg:text-left">
              <m.span
                {...fade(0.04)}
                className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 bg-white/60 px-4 py-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-midnight/70 backdrop-blur dark:border-brand-white/10 dark:bg-brand-midnight/40 dark:text-brand-white/70"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                {c.eyebrow}
              </m.span>

              <m.h1
                id="not-found-h1"
                {...fade(0.1)}
                className="font-proxima mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl lg:text-6xl"
              >
                {c.h1}
              </m.h1>

              <m.p
                {...fade(0.16)}
                className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-brand-midnight/65 dark:text-brand-white/65 lg:mx-0"
              >
                {c.lead}
              </m.p>

              <m.div
                {...fade(0.22)}
                className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
              >
                <Link
                  href={homeHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-all hover:-translate-y-0.5 hover:bg-brand-accent/90 hover:shadow-xl hover:shadow-brand-accent/30"
                >
                  <Home className="h-4 w-4" aria-hidden />
                  {c.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-brand-midnight/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-brand-midnight/80 transition-all hover:border-brand-midnight/30 hover:bg-white dark:border-brand-white/15 dark:bg-brand-midnight/40 dark:text-brand-white/80 dark:hover:border-brand-white/30 dark:hover:bg-brand-midnight/60"
                >
                  {c.ctaSecondary}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </m.div>
            </div>
          </div>
        </div>
      </main>
    </LazyMotion>
  );
}
