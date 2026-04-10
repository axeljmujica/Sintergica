"use client";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Word = { text: string; className?: string };

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}) {
  const prefersReduced = useReducedMotion();
  const wordsArray = words.map((w) => ({ ...w, text: Array.from(w.text) }));

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.045,
        delayChildren: 0.1,
      },
    },
  };
  const child = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className={cn("inline-flex flex-wrap items-center gap-x-1.5", className)}>
      <m.div
        className="inline-flex flex-wrap gap-x-1.5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {wordsArray.map((word, wi) => (
          <div key={wi} className="inline-flex">
            {word.text.map((char, ci) => (
              <m.span
                key={ci}
                variants={child}
                className={cn("text-brand-midnight dark:text-brand-white", word.className)}
              >
                {char}
              </m.span>
            ))}
          </div>
        ))}
      </m.div>
      {/* Cursor parpadeante */}
      <m.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className={cn(
          "ml-0.5 inline-block h-[1em] w-[2px] rounded-sm bg-brand-accent align-middle",
          cursorClassName
        )}
      />
    </div>
    </LazyMotion>
  );
}
