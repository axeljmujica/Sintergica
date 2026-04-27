"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    title: "Legal",
    image: "/images/industries/legal.jpg",
    link: "/industrias/legal",
  },
  {
    title: "Gobierno",
    image: "/images/industries/gobierno.jpg",
    link: "/industrias/gobierno",
  },
  {
    title: "Logística y Com. Ext.",
    image: "/images/industries/logistica.jpg",
    link: "/industrias/logistica",
  },
  {
    title: "Energía",
    image: "/images/industries/energia.jpg",
    link: "/industrias/energia",
  },
  {
    title: "Salud",
    image: "/images/industries/salud.jpg",
    link: "/industrias/salud",
  },
  {
    title: "Financiero",
    image: "/images/industries/financiero.jpg",
    link: "/industrias/financiero",
  },
  {
    title: "Ventas",
    image: "/images/industries/ventas.jpg",
    link: "/industrias/ventas",
  },
];

export function IndustriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }
    setProgress(el.scrollLeft / maxScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => el.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.offsetWidth ?? 340;
    const gap = 24;
    const distance = cardWidth + gap;
    el.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-brand-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Header row: title + arrows */}
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-proxima text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-midnight text-balance">
            Impulsando el progreso en todas las industrias
          </h2>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-midnight/15 text-brand-midnight/60 transition-colors hover:border-brand-midnight/40 hover:text-brand-midnight"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-midnight/15 text-brand-midnight/60 transition-colors hover:border-brand-midnight/40 hover:text-brand-midnight"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable card track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {INDUSTRIES.map((industry, i) => (
            <Link
              key={i}
              href={industry.link}
              className="group relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[340px] overflow-hidden rounded-2xl cursor-pointer block"
              style={{ scrollSnapAlign: "start", aspectRatio: "3 / 4" }}
            >
              {/* Image */}
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="340px"
                priority={i === 0}
              />

              {/* Subtle bottom gradient for label area */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Label — top-left pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-brand-midnight shadow-sm">
                  {industry.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 flex justify-center">
          <div className="relative h-[3px] w-48 rounded-full bg-brand-midnight/10 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-brand-accent transition-all duration-300 ease-out"
              style={{ width: `${Math.max(20, progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
