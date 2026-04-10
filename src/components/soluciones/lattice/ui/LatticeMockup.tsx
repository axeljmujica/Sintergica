"use client";

import { useState, useEffect, useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { useTheme } from "next-themes";
import {
  MessageCircle,
  MessagesSquare,
  Database,
  Blocks,
  Waypoints,
  LogOut,
  ChevronDown,
  Box,
  Settings,
  Paperclip,
  Globe,
  Mic,
} from "lucide-react";

const CONVERSATIONS = [
  {
    topic: "Energía",
    user: "Analiza el comportamiento de la red eléctrica durante la última ola de calor y sugiere ajustes de carga.",
    assistant:
      "Durante la ola de calor, la demanda máxima superó la capacidad base en un 12%, provocando fluctuaciones de frecuencia. Recomiendo activar los protocolos de respuesta a la demanda (DR) en el sector industrial y redistribuir la carga hacia fuentes de energía renovable de respaldo para estabilizar la red.",
    modelSelector: "Lattice Séeb",
  },
  {
    topic: "Gobierno",
    user: "Verifica si esta propuesta cumple con los requisitos de la licitación pública LO-2023-001.",
    assistant:
      "He revisado la propuesta contra las bases de la licitación. Cumple con los requisitos técnicos y financieros, pero falta incluir el Anexo C (Declaración de Integridad). Te recomiendo adjuntar este documento firmado antes del cierre de recepción para evitar la descalificación automática.",
    modelSelector: "Lattice Naat",
  },
  {
    topic: "Logística y Comercio Exterior",
    user: "¿Cuál es la fracción arancelaria para los nuevos inversores solares y qué regulaciones aplican?",
    assistant:
      "Los inversores solares especificados corresponden a la fracción arancelaria 8504.40.12. Actualmente están exentos de arancel de importación, pero es obligatorio presentar el certificado de cumplimiento NOM-003-SCFI-2014 en aduana antes del despacho.",
    modelSelector: "Lattice Séeb",
  },
];

export function LatticeMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduce = useReducedMotion();
  const { resolvedTheme } = useTheme();

  // Default to dark mode if theme is not resolved yet, as requested
  const isDark = resolvedTheme === "dark" || resolvedTheme === undefined;

  const [convIndex, setConvIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [phase, setPhase] = useState<"typing" | "done" | "waiting">("typing");

  useEffect(() => {
    if (!isInView || shouldReduce) {
      setDisplayedText(CONVERSATIONS[convIndex].assistant);
      setPhase("done");
      return;
    }

    if (phase === "typing") {
      setIsTyping(true);
      let i = 0;
      const targetText = CONVERSATIONS[convIndex].assistant;
      setDisplayedText("");

      const interval = setInterval(() => {
        if (i < targetText.length) {
          setDisplayedText(targetText.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          setPhase("done");
          clearInterval(interval);
        }
      }, 15); // Typing speed

      return () => clearInterval(interval);
    } else if (phase === "done") {
      const timeout = setTimeout(() => {
        setPhase("waiting");
      }, 5000); // Wait 5 seconds before changing conversation
      return () => clearTimeout(timeout);
    } else if (phase === "waiting") {
      setConvIndex((prev) => (prev + 1) % CONVERSATIONS.length);
      setPhase("typing");
    }
  }, [isInView, shouldReduce, convIndex, phase]);

  // Shell/Tenant Logo placeholder
  const TenantLogo = () => (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-lg ${isDark ? "bg-brand-white dark:bg-brand-midnight/10" : "bg-white"} p-1`}
    >
      <div className="relative flex h-full w-full items-center justify-center text-red-500">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path
            d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
            fill="#FBBF24"
          />
        </svg>
      </div>
    </div>
  );

  const LatticeLogo = ({ className = "h-5 w-5" }: { className?: string }) => (
    <div
      className={`flex items-center justify-center rounded-full bg-[#006efa] text-white p-1.5 ${className}`}
    >
      <svg
        viewBox="0 0 359.05 311.3"
        fill="currentColor"
        className="h-full w-full"
      >
        <path d="M275.08,224.48c-4.65-2.43-9.88-3.9-15.11-3.9-10.45,0-20.33,4.86-26.73,12.61-12.77,16.5-34.85,27.66-59.85,27.66s-48.8-11.16-61.57-27.66c-6.4-7.75-15.7-12.61-26.15-12.61-5.8,0-10.45,1.47-15.68,3.9-14.53,8.23-19.19,23.77-9.88,35.41,24.39,31.06,65.08,51.41,113.29,51.41s87.73-20.35,111.57-51.41c9.31-11.65,4.65-27.18-9.88-35.41Z" />
        <path d="M274.65,3.24c-47.58,0-85.5,37.92-85.5,85.13s37.93,85.51,85.5,85.51,84.4-37.93,84.4-85.51S321.13,3.24,274.65,3.24ZM274.65,134.84c-26.02,0-46.47-20.81-46.47-46.47s20.46-46.48,46.47-46.48,45.73,21.19,45.73,46.48-20.81,46.47-45.73,46.47Z" />
        <path d="M136.07,82.75c-1.09-1.69-2.34-3.21-3.72-4.55-1.18-1.58-2.55-3.06-4.13-4.38L47.53,6.04C36.63-3.12,20.37-1.7,11.21,9.2h0c-9.15,10.9-7.74,27.16,3.16,36.31l57.24,48.07-59.78,38.47c-11.97,7.7-15.43,23.65-7.73,35.62h0c7.7,11.97,23.65,15.43,35.62,7.73l88.62-57.03c3.93-2.53,6.94-5.94,8.94-9.81.19-.37.37-.74.54-1.12.09-.19.17-.38.25-.57,1.39-3.23,2.1-6.72,2.09-10.24,0-4.76-1.33-9.58-4.1-13.88Z" />
      </svg>
    </div>
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        initial={shouldReduce ? false : { opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative mx-auto flex h-[600px] w-full max-w-4xl overflow-hidden rounded-[16px] border ${isDark ? "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy shadow-blue-900/20" : "border-slate-200 bg-[#f1f5f9] shadow-slate-300/50"} font-sans ${isDark ? "text-slate-300" : "text-slate-700"} shadow-2xl`}
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        {/* Leftmost Rail */}
        <div
          className={`flex w-[80px] shrink-0 flex-col items-center border-r ${isDark ? "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep" : "border-slate-200 bg-[#e2e8f0]"} py-[17px]`}
        >
          <TenantLogo />

          <div
            className={`mt-8 flex h-8 w-8 items-center justify-center rounded-[33px] ${isDark ? "bg-brand-white dark:bg-brand-midnight/10 text-brand-midnight dark:text-brand-white" : "bg-[#f8fafc] text-[#006efa]"} text-[12px] font-semibold`}
          >
            ED
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="group relative flex cursor-pointer items-center justify-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-[8px] ${isDark ? "bg-brand-accent/20 text-brand-accent-light" : "bg-[#b4e0f7] text-[#006efa]"}`}
              >
                <MessageCircle className="h-[24px] w-[24px]" />
              </div>
            </div>

            {[Database, Blocks].map((Icon, i) => (
              <div
                key={i}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-[8px] ${isDark ? "text-brand-midnight/40 dark:text-brand-white/40 hover:bg-brand-white/10 hover:text-brand-white" : "text-slate-500 hover:bg-slate-300 hover:text-slate-700"}`}
              >
                <Icon className="h-[20px] w-[20px]" />
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col items-center gap-4">
            <div
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-[8px] bg-[#006efa] text-white shadow-lg ${isDark ? "shadow-[#006efa]/20" : "shadow-blue-600/20"}`}
            >
              <LatticeLogo className="h-[24px] w-[24px] bg-transparent" />
            </div>
          </div>
        </div>

        {/* Secondary Sidebar (Chats) */}
        <div
          className={`hidden w-[280px] shrink-0 flex-col border-r ${isDark ? "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy" : "border-slate-200 bg-[#f1f5f9]"} px-[12px] py-[17px] ${isDark ? "text-brand-midnight dark:text-brand-white" : "text-black"} md:flex`}
        >
          <div className="flex items-center justify-between px-[5px] mb-[45px]">
            <h2 className="text-[20px] font-bold tracking-[0.2px]">Chats</h2>
            <div
              className={`flex gap-[16px] ${isDark ? "text-brand-midnight/50 dark:text-brand-white/50" : "text-slate-500"}`}
            >
              <LogOut
                className={`h-[20px] w-[20px] cursor-pointer ${isDark ? "hover:text-brand-white" : "hover:text-slate-700"}`}
              />
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-[8px] rounded-[8px] bg-[#006efa] p-[8px] text-[14px] text-white mb-[28px] hover:bg-blue-700 transition-colors">
            Nuevo chat
            <MessagesSquare className="h-[20px] w-[20px]" />
          </button>

          <div className="flex flex-col gap-[8px]">
            {/* Pinned Section */}
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between py-[8px]">
                <div
                  className={`flex items-center gap-[4px] text-[14px] font-light ${isDark ? "text-brand-midnight/40 dark:text-brand-white/40" : "text-[#94a3b8]"}`}
                >
                  <Waypoints className="h-[16px] w-[16px]" />
                  Pinned
                </div>
                <ChevronDown
                  className={`h-[24px] w-[24px] rotate-180 ${isDark ? "text-brand-midnight/40 dark:text-brand-white/40" : "text-slate-400"}`}
                />
              </div>
              <div className="flex flex-col">
                <div
                  className={`group flex cursor-pointer items-center justify-between rounded-[6px] p-[8px] ${isDark ? "hover:bg-brand-white/5" : "hover:bg-slate-200"}`}
                >
                  <span
                    className={`text-[16px] ${isDark ? "text-brand-midnight dark:text-brand-white" : "text-[#0f172a]"}`}
                  >
                    Optimización de Red
                  </span>
                  <Settings
                    className={`h-[16px] w-[16px] ${isDark ? "text-brand-midnight/40 dark:text-brand-white/40" : "text-slate-400"} opacity-0 group-hover:opacity-100`}
                  />
                </div>
                <div
                  className={`flex cursor-pointer items-center justify-between rounded-[6px] ${isDark ? "bg-brand-white dark:bg-brand-midnight/10" : "bg-slate-200"} p-[8px]`}
                >
                  <span
                    className={`text-[16px] font-medium ${isDark ? "text-brand-midnight dark:text-brand-white" : "text-[#0f172a]"}`}
                  >
                    Licitaciones 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Folder Section */}
            <div className="flex flex-col w-full mt-4">
              <div className="flex items-center justify-between py-[8px]">
                <div
                  className={`flex items-center gap-[4px] text-[14px] font-light ${isDark ? "text-brand-midnight/40 dark:text-brand-white/40" : "text-[#94a3b8]"}`}
                >
                  <Database className="h-[16px] w-[16px]" />
                  Bases de Conocimiento
                </div>
                <ChevronDown
                  className={`h-[24px] w-[24px] ${isDark ? "text-brand-midnight/40 dark:text-brand-white/40" : "text-slate-400"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div
          className={`flex flex-1 flex-col ${isDark ? "bg-brand-surface dark:bg-brand-navy" : "bg-[#f1f5f9]"}`}
        >
          {/* Header */}
          <div
            className={`flex h-[72px] shrink-0 items-center justify-between px-6 border-b ${isDark ? "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/50" : "border-slate-200 bg-white/50"}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-[32px] w-[32px] rounded-lg flex items-center justify-center ${isDark ? "bg-brand-accent/20 text-brand-accent-light" : "bg-blue-100 text-[#006efa]"}`}
              >
                <Box className="h-[20px] w-[20px]" />
              </div>
              <div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  <m.span
                    key={convIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-[24px] font-bold tracking-[0.24px] ${isDark ? "text-brand-midnight dark:text-brand-white" : "text-black"}`}
                  >
                    {CONVERSATIONS[convIndex].modelSelector}
                  </m.span>
                </AnimatePresence>
                <ChevronDown
                  className={`h-[24px] w-[24px] ${isDark ? "text-brand-midnight/50 dark:text-brand-white/50" : "text-slate-400"}`}
                />
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide flex flex-col items-center">
            {/* Empty State / Welcome */}
            <div className="flex flex-col items-center gap-[8px] mt-8 mb-12 max-w-[380px] text-center">
              <h1 className="text-[32px] font-bold text-[#006efa] tracking-[0.32px] leading-tight">
                Hola Usuario
              </h1>
              <p
                className={`text-[16px] ${isDark ? "text-brand-midnight dark:text-brand-white" : "text-black"}`}
              >
                ¿En qué puedo ayudarte hoy?
              </p>
            </div>

            <AnimatePresence mode="wait">
              <m.div
                key={convIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex w-full max-w-3xl flex-col gap-8"
              >
                {/* User Message */}
                <div className="flex flex-col items-end">
                  <div className="max-w-[80%] rounded-[16px] rounded-tr-sm bg-[#006efa] px-[16px] py-[12px] text-[16px] leading-[24px] text-white shadow-sm">
                    {CONVERSATIONS[convIndex].user}
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start gap-4">
                  <div
                    className={`h-[32px] w-[32px] shrink-0 rounded-full mt-1 flex items-center justify-center ${isDark ? "bg-brand-white dark:bg-brand-midnight/10 text-[#006efa]" : "bg-slate-200 text-[#006efa]"}`}
                  >
                    <LatticeLogo className="h-[20px] w-[20px] bg-transparent" />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`mb-2 text-[16px] font-semibold ${isDark ? "text-brand-midnight dark:text-brand-white" : "text-black"}`}
                    >
                      Lattice
                    </div>
                    <div
                      className={`prose max-w-none text-[16px] leading-[24px] ${isDark ? "prose-invert text-brand-midnight/80 dark:text-brand-white/80" : "prose-slate text-slate-700"}`}
                    >
                      <p className="whitespace-pre-wrap">{displayedText}</p>
                      {isTyping && (
                        <m.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="inline-block h-4 w-[2px] translate-y-[2px] bg-[#006efa]"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="p-6 pt-0 w-full max-w-4xl mx-auto">
            <div
              className={`relative flex flex-col gap-[4px] rounded-[16px] p-[16px] border shadow-sm ${isDark ? "bg-brand-surface dark:bg-brand-deep border-brand-midnight/10 dark:border-brand-white/10 shadow-lg" : "bg-white border-slate-200"}`}
            >
              <div className="flex items-center min-h-[48px]">
                <textarea
                  rows={1}
                  placeholder="Escriba aquí"
                  className={`w-full resize-none bg-transparent px-[12px] text-[16px] focus:outline-none ${isDark ? "text-brand-midnight dark:text-brand-white placeholder:text-brand-midnight/50 dark:text-brand-white/50" : "text-black placeholder:text-[#94a3b8]"}`}
                  readOnly
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <button
                    title="Adjuntar archivo"
                    className={`${isDark ? "text-brand-midnight/50 dark:text-brand-white/50 hover:text-brand-white/80" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    <Paperclip className="h-[20px] w-[20px]" />
                  </button>

                  <div
                    className={`flex items-center gap-[4px] rounded-[8px] px-[8px] py-[4px] ${isDark ? "bg-brand-accent/20" : "bg-[#b4e0f7]"}`}
                  >
                    <Globe
                      className={`h-[20px] w-[20px] ${isDark ? "text-brand-accent-light" : "text-[#006efa]"}`}
                    />
                    <span
                      className={`text-[16px] font-normal ${isDark ? "text-brand-accent-light" : "text-[#006efa]"}`}
                    >
                      Activo
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-[15px]">
                  <button
                    title="Dictar por voz"
                    className={`${isDark ? "text-brand-midnight/50 dark:text-brand-white/50 hover:text-brand-white/80" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    <Mic className="h-[20px] w-[20px]" />
                  </button>

                  <button
                    title="Enviar mensaje"
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#006efa] text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[20px] w-[20px]"
                    >
                      <path d="M4 12v7l17-7-17-7v7h8v0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
