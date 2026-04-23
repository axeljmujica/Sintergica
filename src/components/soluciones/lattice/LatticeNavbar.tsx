"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight, Globe, ChevronDown } from "lucide-react";
import { NAV_MENUS, LANGUAGES } from "@/lib/data";

const MENU_KEYS = ["lattice", "soluciones", "industrias", "investigacion", "empresa"] as const;
type MenuKey = (typeof MENU_KEYS)[number];

export function LatticeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [lang, setLang] = useState<"es" | "en" | "pt">("es");
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<MenuKey | null>(null);

  const shouldReduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? Math.min(window.scrollY / docH, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduleClose = () => { closeTimerRef.current = setTimeout(() => setActiveMenu(null), 150); };
  const cancelClose = () => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } };
  const closeAll = () => { cancelClose(); setActiveMenu(null); setMobileOpen(false); setMobileExpanded(null); };
  const isOpen = activeMenu !== null || mobileOpen;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          onClick={closeAll}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 z-50 w-full">
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 z-50 h-[2px] bg-brand-accent"
          style={{ width: `${scrollProgress * 100}%`, transition: "width 50ms linear" }}
          aria-hidden="true"
        />
        <div className={`transition-all duration-300 bg-[#040615] ${scrolled ? "border-b border-white/[0.08]" : "border-b border-transparent"}`}>
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3.5 lg:px-8">
            <Link href="/" aria-label="Sintérgica AI — Inicio" className="shrink-0">
              <Image
                src="/logo/Sintergica-ai-white@4x.png"
                alt="Sintérgica AI"
                width={140}
                height={32}
                className="h-7 w-auto"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
              {MENU_KEYS.map((key) => {
                const menu = NAV_MENUS[key];
                const isActive = activeMenu === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onMouseEnter={() => { cancelClose(); setActiveMenu(key); }}
                    onClick={() => setActiveMenu(isActive ? null : key)}
                    className={`relative rounded-full px-4 py-2 text-[0.9rem] font-bold transition-colors duration-150 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill-lattice"
                          className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                          transition={
                            shouldReduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 400, damping: 30 }
                          }
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10">{menu.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div
                className="relative"
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[0.85rem] font-semibold transition-all duration-200 text-white/50 hover:text-white hover:bg-white/[0.07]"
                >
                  <Globe className="h-4 w-4" />
                  {lang.toUpperCase()}
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full z-50 pt-1">
                    <div className="rounded-xl border border-white/10 bg-[#0d101d] p-1.5 shadow-xl shadow-black/30">
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          type="button"
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={`block w-full rounded-lg px-6 py-2.5 text-center text-[0.85rem] font-semibold transition-all duration-200 ${
                            lang === l.code
                              ? "bg-white/10 text-white"
                              : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/diagnostico"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.85rem] font-semibold transition-all duration-300 bg-brand-accent text-white hover:scale-105 hover:bg-brand-accent/90 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                Agendar diagnóstico
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                className="rounded-lg px-2 py-1.5 text-xs font-semibold text-white/40"
                onClick={() => {
                  const codes = LANGUAGES.map((l) => l.code);
                  const next = codes[(codes.indexOf(lang) + 1) % codes.length];
                  setLang(next);
                }}
              >
                <Globe className="inline h-3.5 w-3.5" /> {lang.toUpperCase()}
              </button>
              <button
                type="button"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="rounded-lg p-2 transition-colors text-white/60 hover:text-white"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ═══ MEGA MENU PANELS (Desktop) ═══ */}
        <AnimatePresence>
        {activeMenu && (() => {
          const menu = NAV_MENUS[activeMenu];
          const hasFeatured = !!menu.featured;
          const featuredBelow = !!menu.featuredBelow;
          const hasBottomLinks = !!menu.bottomLinks?.length;
          const hasHeaderImages = !!menu.headerImages?.length;
          const isCompact = !!menu.compact;
          const activeGroups = menu.groups.filter((g) => g.items.length > 0);

          if (isCompact) {
            return (
              <motion.div
                key="mega-panel"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute left-0 right-0 top-full hidden lg:block"
              >
                <div className="flex justify-center px-6 pt-2 lg:px-8">
                  <div onMouseLeave={scheduleClose} onMouseEnter={cancelClose} className="w-full max-w-xs rounded-2xl border border-white/[0.08] bg-[#0d101d] p-6 shadow-xl shadow-black/30">
                    <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                      {menu.groups[0].heading}
                    </p>
                    <div className="space-y-0.5">
                      {menu.groups[0].items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={closeAll}
                          className="group block rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-white/[0.06]"
                        >
                          <p className="text-[0.938rem] font-bold text-white/80 group-hover:text-white">
                            {item.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key="mega-panel"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full hidden lg:block"
            >
              <div className="flex justify-center px-6 pt-2 lg:px-8">
                <div onMouseLeave={scheduleClose} onMouseEnter={cancelClose} className={`${hasHeaderImages ? "w-full max-w-[630px]" : featuredBelow ? "w-[280px]" : hasFeatured ? "w-fit" : "w-full max-w-3xl"} rounded-2xl border border-white/[0.08] bg-[#0d101d] shadow-xl shadow-black/30`}>
                  {hasHeaderImages && (
                    <div className="px-6 pt-6">
                      <div className={`grid gap-3 ${menu.headerImages!.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                        {menu.headerImages!.map((src, i) => (
                          <div key={i} className="relative h-24 overflow-hidden rounded-xl">
                            <Image src={src} alt="" fill className="object-cover" sizes="400px" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={hasHeaderImages ? "px-6 pb-6 pt-5" : "p-6"}>
                    <div className={`grid gap-6 ${hasFeatured && !featuredBelow ? "grid-cols-[max-content_280px]" : ""}`}>
                      <div className={`grid gap-6 ${activeGroups.length === 2 ? "grid-cols-2" : activeGroups.length >= 3 ? "grid-cols-3" : ""}`}>
                        {activeGroups.map((group) => (
                          <div key={group.heading}>
                            <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                              {group.heading}
                            </p>
                            <div className="space-y-0.5">
                              {group.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={closeAll}
                                  className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-white/[0.06]"
                                >
                                  {item.icon && (
                                    <item.icon className="h-4.5 w-4.5 shrink-0 text-white/30 group-hover:text-white/60" />
                                  )}
                                  <div>
                                    <p className="text-[0.938rem] font-bold text-white/80 group-hover:text-white">
                                      {item.name}
                                    </p>
                                    {item.desc && (
                                      <p className="mt-0.5 text-[0.8rem] leading-relaxed text-white/40">
                                        {item.desc}
                                      </p>
                                    )}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {featuredBelow && menu.featured && (
                        <a
                          href={menu.featured.href}
                          onClick={closeAll}
                          className="group relative mt-2 flex h-32 flex-col justify-end overflow-hidden rounded-xl"
                        >
                          <Image
                            src={menu.featured.image!}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="280px"
                          />
                          <div className="absolute inset-0 bg-brand-midnight/50 transition-colors group-hover:bg-brand-midnight/60" />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/85 to-transparent" />
                          <div className="relative px-5 pb-4">
                            <p className="text-[1.05rem] font-bold text-white drop-shadow-sm flex items-center gap-1.5">{menu.featured.title}</p>
                            <p className="mt-1.5 text-[0.8rem] leading-relaxed text-white/80 font-medium drop-shadow-sm line-clamp-2">{menu.featured.desc}</p>
                          </div>
                        </a>
                      )}

                      {hasFeatured && !featuredBelow && menu.featured && (
                        <a
                          href={menu.featured.href}
                          onClick={closeAll}
                          className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-full"
                        >
                          {menu.featured.image ? (
                            <>
                              <Image
                                src={menu.featured.image}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="300px"
                              />
                              <div className="absolute inset-0 bg-brand-midnight/50 transition-colors group-hover:bg-brand-midnight/60" />
                              <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/90 to-brand-midnight/30" />
                              <div className="relative px-6 pb-6 pt-12">
                                <p className="text-[1.05rem] font-bold text-white group-hover:text-white/90 transition-colors flex items-center gap-1.5">
                                  {menu.featured.title}
                                </p>
                                <p className="mt-2 text-[0.85rem] leading-relaxed text-white/80 font-medium drop-shadow-sm">
                                  {menu.featured.desc}
                                </p>
                              </div>
                            </>
                          ) : (
                            <div className={`flex h-full flex-col justify-end bg-gradient-to-br ${menu.featured.gradient || "from-white/5 to-white/10"} p-6`}>
                              <p className="text-[0.938rem] font-bold text-white flex items-center gap-1.5">
                                {menu.featured.title}
                              </p>
                              <p className="mt-1.5 text-[0.8rem] leading-relaxed text-white/60 font-medium">
                                {menu.featured.desc}
                              </p>
                            </div>
                          )}
                        </a>
                      )}
                    </div>
                  </div>

                  {hasBottomLinks && (
                    <div className="flex items-center justify-end gap-10 border-t border-white/[0.06] py-5 px-8">
                      {menu.bottomLinks!.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={closeAll}
                          className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                        >
                          {link.label} <ArrowRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })()}
        </AnimatePresence>

        {/* ═══ MOBILE DRAWER ═══ */}
        <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={false}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/[0.06] bg-[#040615] lg:hidden"
          >
          <div className="max-h-[80vh] overflow-y-auto px-5 pb-6 pt-4">
            {MENU_KEYS.map((key) => {
              const menu = NAV_MENUS[key];
              const isExpanded = mobileExpanded === key;
              return (
                <div key={key} className="border-b border-white/[0.04] py-3 last:border-0">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(isExpanded ? null : key)}
                    className="flex w-full items-center justify-between py-1 text-sm font-semibold uppercase tracking-wider text-white/50"
                  >
                    {menu.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  {isExpanded && (
                    <div className="mt-2">
                      {menu.groups.map((group) => (
                        <div key={group.heading}>
                          {menu.groups.length > 1 && (
                            <p className="mb-1 mt-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-white/30">
                              {group.heading}
                            </p>
                          )}
                          {group.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={closeAll}
                              className="block rounded-lg px-2 py-2.5 text-[0.938rem] font-bold text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-4">
              <Link
                href="/diagnostico"
                onClick={closeAll}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:bg-brand-accent/90 transition-colors"
              >
                Agendar Diagnóstico
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          </motion.div>
        )}
        </AnimatePresence>
      </header>
    </>
  );
}
