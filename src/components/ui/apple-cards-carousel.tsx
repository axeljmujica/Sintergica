"use client";

import { useRef, useState } from "react";
import { type LucideIcon } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export interface AppleCardData {
  id: string;
  title: string;
  subtitle: string;
  useCase: string;
  agent: string;
  impact: string;
  imageSrc: string;
  imageAlt: string;
  Icon?: LucideIcon;
  colorClass?: string;
  iconClass?: string;
  href?: string;
}

/* ── Individual card ───────────────────────────────────────── */
function AppleCardItem({
  card,
  index,
  shouldReduce,
}: {
  card: AppleCardData;
  index: number;
  shouldReduce: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const CardIcon = card.Icon;

  return (
    <m.div
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-[300px] flex-shrink-0 overflow-hidden rounded-3xl sm:w-[340px]"
      style={{ height: "480px" }}
    >
      {card.href ? (
        <Link href={card.href} className="absolute inset-0 z-10" aria-label={`Ir a ${card.title}`} />
      ) : null}
      
      {/* Background image */}
      <Image
        src={card.imageSrc}
        alt={card.imageAlt}
        fill
        sizes="340px"
        className="object-cover transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        draggable={false}
      />

      {/* Persistent gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Default: title at bottom-left */}
      <m.div
        initial={false}
        animate={{ opacity: hovered ? 0 : 1, y: hovered ? 8 : 0 }}
        transition={{ duration: 0.22 }}
        className="absolute bottom-0 left-0 right-0 p-7"
      >
        {CardIcon && (
          <div className={`mb-3 inline-flex rounded-xl bg-brand-white dark:bg-brand-midnight/10 p-2.5 backdrop-blur-sm ${card.colorClass || "text-brand-midnight dark:text-brand-white"}`}>
            <CardIcon className="h-5 w-5" />
          </div>
        )}
        <h3 className="text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{card.title}</h3>
        <p className={`mt-1 text-xs font-semibold uppercase tracking-widest ${card.colorClass || "text-brand-accent-light/80"}`}>
          {card.subtitle}
        </p>
      </m.div>

      {/* Hover: full detail overlay */}
      <m.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 14 }}
        transition={{ duration: 0.28 }}
        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/80 to-black/40 p-7"
        style={{ pointerEvents: hovered ? "auto" : "none" }}
      >
        {CardIcon && (
          <div className={`mb-3 inline-flex self-start rounded-xl p-2.5 ${card.colorClass ? card.colorClass.replace('text-', 'bg-').replace('-300', '-500/20') : 'bg-brand-accent/20 text-brand-accent-light'}`}>
            <CardIcon className={`h-5 w-5 ${card.colorClass || "text-brand-accent-light"}`} />
          </div>
        )}
        <h3 className="text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{card.title}</h3>
        <p className={`mt-1 text-xs font-semibold uppercase tracking-widest ${card.colorClass || "text-brand-accent-light"}`}>
          {card.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-brand-midnight/75 dark:text-brand-white/75">{card.useCase}</p>

        <div className="mt-5 space-y-3 border-t border-brand-midnight/10 dark:border-brand-white/10 pt-4">
          <div className="flex items-center gap-2">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center ${card.colorClass ? card.colorClass.replace('text-', 'bg-').replace('-300', '-500/20') : 'bg-brand-accent/20'}`}>
              <span className={`text-[10px] font-bold ${card.colorClass || "text-brand-accent-light"}`}>✓</span>
            </div>
            <p className="text-sm font-bold text-brand-midnight dark:text-brand-white">{card.agent}</p>
          </div>
          <p className={`text-[0.8125rem] font-semibold leading-snug ${card.colorClass || "text-brand-accent-light"}`}>{card.impact}</p>
        </div>
      </m.div>
    </m.div>
  );
}

/* ── Carousel container with smooth drag ───────────────── */
export function AppleCardsCarousel({
  cards,
  scrollRef: externalRef,
}: {
  cards: AppleCardData[];
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const internalRef = useRef<HTMLDivElement>(null);
  const trackRef = externalRef ?? internalRef;
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const rafId = useRef(0);
  const shouldReduce = useReducedMotion();

  const tick = () => {
    if (!trackRef.current || Math.abs(velocity.current) < 0.5) return;
    trackRef.current.scrollLeft -= velocity.current;
    velocity.current *= 0.92;
    rafId.current = requestAnimationFrame(tick);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    cancelAnimationFrame(rafId.current);
    isDragging.current = false;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    scrollLeftRef.current = trackRef.current.scrollLeft;
    velocity.current = 0;
    trackRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (startX.current === 0 || !trackRef.current) return;
    e.preventDefault();
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 3) isDragging.current = true;
    if (isDragging.current) {
      velocity.current = e.clientX - lastX.current;
      lastX.current = e.clientX;
      trackRef.current.style.cursor = "grabbing";
      trackRef.current.scrollLeft = scrollLeftRef.current - dx;
    }
  };

  const onMouseUpLeave = () => {
    if (!trackRef.current) return;
    trackRef.current.style.cursor = "";
    trackRef.current.style.userSelect = "";
    if (isDragging.current && Math.abs(velocity.current) > 1) {
      rafId.current = requestAnimationFrame(tick);
    }
    setTimeout(() => { isDragging.current = false; startX.current = 0; }, 50);
  };

  return (
    <div
      ref={trackRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUpLeave}
      onMouseLeave={onMouseUpLeave}
      className="flex cursor-grab gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {cards.map((card, i) => (
        <AppleCardItem
          key={card.id}
          card={card}
          index={i}
          shouldReduce={shouldReduce ?? false}
        />
      ))}
    </div>
  );
}
