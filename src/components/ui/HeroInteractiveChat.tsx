"use client";

import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react";
import {
  Database,
  FileText,
  FileSpreadsheet,
  FolderGit2,
  Cloud,
  HardDrive,
  Send,
  Bot,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const NAMES = ["Axel", "Alejandra", "Lauro", "Clemente", "Edson"];

const SCENARIOS = [
  {
    agent: "Agente Fiscal",
    agentColor: "text-blue-400",
    bgIcon: "bg-blue-500/20",
    icon: Database,
    sources: [
      { name: "ERP Local", icon: HardDrive },
      { name: "Portal SAT", icon: Cloud },
      { name: "Base LISR", icon: FolderGit2 },
    ],
    prompt: "Genera el reporte de deducciones para Q1",
    response:
      "He analizado tus declaraciones. Encontré 2 deducciones no aplicadas y un saldo a favor de $45,000 MXN.",
    doc: "Reporte_Deducciones_Q1.pdf",
    docIcon: FileText,
    docColor: "text-red-400",
  },
  {
    agent: "Agente Legal",
    agentColor: "text-purple-400",
    bgIcon: "bg-purple-500/20",
    icon: FileText,
    sources: [
      { name: "Contratos", icon: FolderGit2 },
      { name: "Drive Legal", icon: Cloud },
      { name: "Jurisprudencia", icon: Database },
    ],
    prompt: "Revisa este NDA con el nuevo cliente",
    response:
      "Detecté 2 cláusulas de riesgo alto respecto a jurisdicción. He generado una versión corregida para su firma.",
    doc: "NDA_Corregido_v2.docx",
    docIcon: FileText,
    docColor: "text-blue-400",
  },
  {
    agent: "Agente de Ventas",
    agentColor: "text-emerald-400",
    bgIcon: "bg-emerald-500/20",
    icon: FileSpreadsheet,
    sources: [
      { name: "CRM", icon: Cloud },
      { name: "Correos", icon: FolderGit2 },
      { name: "Cotizaciones", icon: HardDrive },
    ],
    prompt: "Prepara la propuesta para Grupo Modelo",
    response:
      "Propuesta lista. Incluí el análisis de ROI y los casos de éxito del sector logística.",
    doc: "Propuesta_Comercial.pdf",
    docIcon: FileText,
    docColor: "text-red-400",
  },
];

export function HeroInteractiveChat() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<
    "greeting" | "typing" | "processing" | "response"
  >("greeting");
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "greeting") {
      setTypedText("");
      timeout = setTimeout(() => setPhase("typing"), 1500);
    } else if (phase === "typing") {
      const fullText = SCENARIOS[index].prompt;
      let i = 0;
      timeout = setInterval(() => {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(timeout);
          setTimeout(() => setPhase("processing"), 800);
        }
      }, 50); // Typing speed
    } else if (phase === "processing") {
      timeout = setTimeout(() => setPhase("response"), 1500);
    } else if (phase === "response") {
      timeout = setTimeout(() => {
        setPhase("greeting");
        setIndex((prev) => (prev + 1) % SCENARIOS.length);
      }, 4500); // Time to read response
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(timeout);
    };
  }, [phase, index]);

  const currentName = NAMES[index % NAMES.length];
  const scenario = SCENARIOS[index];
  const Icon = scenario.icon;
  const DocIcon = scenario.docIcon;

  return (
    <LazyMotion features={domAnimation}>
    <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight">
      {/* Background Image */}
      <Image
        src="/images/lattice-ui/Turing dark-2.jpg"
        alt="Abstract background"
        fill
        className="object-cover opacity-60 mix-blend-screen"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/80 to-transparent" />

      {/* Interface Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-[400px] rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/5 bg-white/[0.02]">
            <m.div
              key={`header-${index}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${scenario.bgIcon}`}
              >
                <Icon className={`w-5 h-5 ${scenario.agentColor}`} />
              </div>
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg tracking-tight">
                  {scenario.agent}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm">Lattice</p>
              </div>
            </m.div>

            {/* Sources Badges */}
            <m.div
              key={`sources-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mt-4"
            >
              {scenario.sources.map((src, i) => {
                const SrcIcon = src.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/40 border border-white/10 text-[10px] text-white/70 font-medium"
                  >
                    <SrcIcon className="w-3 h-3 text-emerald-400" />
                    {src.name}
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 ml-1 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </div>
                );
              })}
            </m.div>
          </div>

          {/* Chat Area */}
          <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1 bg-black/20">
            {/* Greeting */}
            <div className="h-6">
              <AnimatePresence mode="wait">
                {phase === "greeting" && (
                  <m.div
                    key="greeting"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-white/80 text-sm"
                  >
                    ¡Hola,{" "}
                    <span className="font-semibold text-white">
                      {currentName}
                    </span>
                    ! ¿En qué te ayudo hoy?
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Box */}
            <div className="flex items-center bg-[#2A2A2A] border border-white/10 rounded-xl p-3 shadow-inner">
              <span className="text-white/90 text-sm flex-1 min-h-[20px]">
                {typedText}
                {phase === "typing" && (
                  <m.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[2px] h-4 bg-brand-accent align-middle ml-1"
                  />
                )}
              </span>
              <button
                className={`flex items-center justify-center w-8 h-8 rounded-lg ml-2 transition-colors ${typedText.length > 0 ? "bg-brand-accent text-white" : "bg-white/10 text-white/30"}`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Processing / Response Area */}
            <div className="flex-1 min-h-[120px] relative">
              <AnimatePresence mode="wait">
                {phase === "processing" && (
                  <m.div
                    key="processing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 flex items-start pt-2 gap-3 text-white/50 text-sm"
                  >
                    <Bot className="w-5 h-5 animate-pulse text-brand-accent mt-0.5" />
                    <span>Analizando documentos...</span>
                  </m.div>
                )}

                {phase === "response" && (
                  <m.div
                    key="response"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-[#2A2A2A] border border-white/10 rounded-2xl rounded-tl-sm p-3.5 text-[13px] sm:text-sm text-white/90 leading-relaxed shadow-sm">
                          {scenario.response}
                        </div>

                        {/* Document Attachment */}
                        <m.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="mt-3 flex items-center gap-3 bg-[#2A2A2A]/50 border border-white/10 p-2.5 rounded-xl cursor-pointer hover:bg-[#2A2A2A] transition-colors"
                        >
                          <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                            <DocIcon
                              className={`w-5 h-5 ${scenario.docColor}`}
                            />
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">
                              {scenario.doc}
                            </p>
                            <p className="text-[11px] text-white/50 flex items-center gap-1 mt-0.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />{" "}
                              Generado con éxito
                            </p>
                          </div>
                        </m.div>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LazyMotion>
  );
}
