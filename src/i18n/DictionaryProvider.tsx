"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dictionary = Record<string, any>;

interface DictionaryContextValue {
  dictionary: Dictionary;
  locale: Locale;
}

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({
  dictionary,
  locale,
  children,
}: {
  dictionary: Dictionary;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={{ dictionary, locale }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext);
  if (!ctx) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return ctx.dictionary;
}

export function useLocale(): Locale {
  const ctx = useContext(DictionaryContext);
  // Fallback to default locale when outside provider (e.g., not-found boundary)
  if (!ctx) {
    return "es";
  }
  return ctx.locale;
}
