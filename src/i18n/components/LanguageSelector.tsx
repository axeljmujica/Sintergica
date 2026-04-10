"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return "/";
    
    const segments = pathname.split("/");
    const hasLocale = i18n.locales.includes(segments[1] as Locale);
    
    if (hasLocale) {
      segments[1] = locale;
      if (locale === i18n.defaultLocale) {
        segments.splice(1, 1);
        if (segments.length === 1 && segments[0] === "") return "/";
      }
      return segments.join("/") || "/";
    } else {
      if (locale === i18n.defaultLocale) return pathname;
      return `/${locale}${pathname}`;
    }
  };

  const handleLocaleChange = (locale: Locale) => {
    localStorage.setItem("locale", locale);
    router.push(redirectedPathName(locale));
    router.refresh();
    setIsOpen(false);
  };

  const currentLocale = pathname
    ? i18n.locales.find((locale) => pathname.startsWith(`/${locale}`)) || i18n.defaultLocale
    : i18n.defaultLocale;

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-2 rounded-md hover:bg-brand-surface/50 dark:hover:bg-brand-white/10 transition-colors text-sm font-medium text-brand-midnight dark:text-brand-surface cursor-pointer"
        aria-label="Select language"
        aria-expanded={isOpen ? "true" : "false"}
        type="button"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{currentLocale === 'pt-br' ? 'PT' : currentLocale}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-24 py-2 bg-brand-white dark:bg-brand-midnight border border-brand-midnight/10 dark:border-brand-white/10 rounded-md shadow-lg z-50">
          <button
            type="button"
            onClick={() => handleLocaleChange("es")}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-surface/50 dark:hover:bg-brand-white/10 transition-colors cursor-pointer ${currentLocale === 'es' ? 'font-bold text-brand-accent' : 'text-brand-midnight dark:text-brand-surface'}`}
          >
            ES
          </button>
          <button
            type="button"
            onClick={() => handleLocaleChange("en")}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-surface/50 dark:hover:bg-brand-white/10 transition-colors cursor-pointer ${currentLocale === 'en' ? 'font-bold text-brand-accent' : 'text-brand-midnight dark:text-brand-surface'}`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => handleLocaleChange("pt-br")}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-surface/50 dark:hover:bg-brand-white/10 transition-colors cursor-pointer ${currentLocale === 'pt-br' ? 'font-bold text-brand-accent' : 'text-brand-midnight dark:text-brand-surface'}`}
          >
            PT
          </button>
        </div>
      )}
    </div>
  );
}
