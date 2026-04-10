"use client";

import { useState, useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const c = SEEB_DEFAULT.faq;

export function LatticeSeebFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="faq"
        className="bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-3xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
              {c.h2}
            </h2>
          </m.div>

          {/* FAQ list */}
          <div className="mt-10 space-y-3">
            {c.questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <m.div
                  key={i}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.4, delay: i * 0.08 }}
                  className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-violet-500/30 bg-violet-500/[0.06]"
                      : "border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface/40 dark:bg-brand-navy/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen ? "true" : "false"}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-brand-midnight dark:text-brand-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-midnight/50 dark:text-brand-white/50 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-violet-400" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        key="answer"
                        initial={shouldReduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={shouldReduce ? {} : { opacity: 0, height: 0 }}
                        transition={{ duration: shouldReduce ? 0 : 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                          {item.a}
                        </p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
