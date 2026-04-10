"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

interface EncryptedTextProps {
  text: string;
  className?: string;
  /** Delay between each character reveal (ms) */
  revealDelayMs?: number;
  /** Character set used for the scramble effect */
  charset?: string;
  /** Delay between random character flips (ms) */
  flipDelayMs?: number;
  /** Class applied to characters still encrypted */
  encryptedClassName?: string;
  /** Class applied to characters already revealed */
  revealedClassName?: string;
  /** Trigger animation when element enters viewport */
  animateOnView?: boolean;
}

export function EncryptedText({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
  animateOnView = true,
}: EncryptedTextProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(!animateOnView);
  const [scrambled, setScrambled] = useState("");
  const [revealedCount, setRevealedCount] = useState(0);

  const getRandomChar = useCallback(
    () => charset[Math.floor(Math.random() * charset.length)],
    [charset]
  );

  // Viewport observer — only sets state in the IO callback, not synchronously
  useEffect(() => {
    if (!animateOnView || shouldReduce) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOnView, shouldReduce]);

  // Scramble unrevealed characters
  useEffect(() => {
    if (!isInView || shouldReduce) return;
    if (revealedCount >= text.length) return;

    const id = setInterval(() => {
      setScrambled(
        text
          .split("")
          .map((char, i) => {
            if (i < revealedCount) return char;
            if (char === " ") return " ";
            return getRandomChar();
          })
          .join("")
      );
    }, flipDelayMs);

    return () => clearInterval(id);
  }, [isInView, revealedCount, text, flipDelayMs, getRandomChar, shouldReduce]);

  // Reveal one character at a time
  useEffect(() => {
    if (!isInView || shouldReduce) return;
    if (revealedCount >= text.length) return;

    const id = setTimeout(() => {
      setRevealedCount((c) => c + 1);
    }, revealDelayMs);

    return () => clearTimeout(id);
  }, [isInView, revealedCount, text, revealDelayMs, shouldReduce]);

  // Derive final display — avoids synchronous setState for the "done" state
  const done = shouldReduce || revealedCount >= text.length;
  const displayText = done ? text : scrambled || text;

  return (
    <span ref={ref} className={cn(className)}>
      {displayText.split("").map((char, i) => (
        <span
          key={i}
          className={
            i < revealedCount || done ? revealedClassName : encryptedClassName
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}
