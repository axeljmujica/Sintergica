"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MessageSquare,
  Search,
  Share2,
  Settings,
  Users,
  Pin,
  MoreVertical,
  Paperclip,
  Mic,
  Send,
} from "lucide-react";

const CHAT_ITEMS = [
  { label: "Hola soy tu asistente", pinned: true },
  { label: "Chat 2", pinned: true },
  { label: "List item", pinned: true },
];

const FOLDER_ITEMS = [
  "Status actual de las finanzas",
  "Revisi\u00f3n de datos fina...",
];

const TYPING_TEXT =
  "Incluso si tu empresa no se dedica espec\u00edficamente al sector financiero, las finanzas y la contabilidad son \u00e1reas cruciales para cualquier tipo de negocio. Puedo ayudarte de las siguientes maneras:\n\n1. **Presupuestaci\u00f3n y planificaci\u00f3n**: Asistirte en la creaci\u00f3n y gesti\u00f3n de presupuestos para diferentes departamentos o proyectos.\n\n2. **An\u00e1lisis financiero**: Realizar an\u00e1lisis financieros para evaluar la salud econ\u00f3mica de tu empresa.\n\n3. **Contabilidad empresarial**: Ayudarte a mantener registros contables precisos.\n\n4. **Optimizaci\u00f3n de costos**: Ofrecerte estrategias para reducir costos operativos.";

export function LatticeMockup({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const plainText = TYPING_TEXT.replace(/\*\*/g, "");
    const interval = setInterval(() => {
      if (i < plainText.length) {
        setDisplayedText(plainText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText("");
          setIsTyping(true);
          i = 0;
        }, 4000);
      }
    }, 12);
    return () => clearInterval(interval);
  }, []);

  const isDark = variant === "dark";

  const bg = isDark ? "bg-brand-surface dark:bg-brand-midnight" : "bg-white";
  const sidebar = isDark ? "bg-brand-surface dark:bg-brand-deep" : "bg-brand-accent/[0.04]";
  const border = isDark ? "border-brand-midnight/10 dark:border-brand-white/10" : "border-brand-midnight/10";
  const text = isDark ? "text-brand-midnight dark:text-brand-white" : "text-brand-midnight";
  const textMuted = isDark ? "text-brand-midnight/50 dark:text-brand-white/50" : "text-brand-midnight/50";
  const textSoft = isDark ? "text-brand-midnight/70 dark:text-brand-white/70" : "text-brand-midnight/70";
  const bubble = isDark ? "bg-brand-surface dark:bg-brand-navy" : "bg-brand-accent/10";
  const inputBg = isDark ? "bg-brand-surface/50 dark:bg-brand-navy/50" : "bg-brand-accent/[0.06]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`overflow-hidden rounded-2xl border ${border} ${bg} shadow-2xl shadow-brand-midnight/20`}
    >
      <div className="flex h-[420px] sm:h-[480px]">
        {/* Sidebar */}
        <div className={`hidden w-56 shrink-0 border-r ${border} ${sidebar} p-3 sm:block`}>
          {/* Logo area */}
          <div className="mb-3 flex items-center gap-2 px-1">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-accent">
              <span className="text-[10px] font-black text-brand-midnight dark:text-brand-white">S</span>
            </div>
            <span className={`text-xs font-bold ${text}`}>Chats</span>
            <div className="ml-auto flex gap-1">
              <Search className={`h-3 w-3 ${textMuted}`} />
              <Settings className={`h-3 w-3 ${textMuted}`} />
            </div>
          </div>

          {/* New chat button */}
          <button className="mb-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-accent px-3 py-2 text-[11px] font-semibold text-brand-midnight dark:text-brand-white">
            <MessageSquare className="h-3 w-3" />
            Nuevo chat
          </button>

          {/* Pinned */}
          <div className="mb-2">
            <p className={`mb-1.5 flex items-center gap-1 px-1 text-[10px] font-medium ${textMuted}`}>
              <Pin className="h-2.5 w-2.5" /> Anclados
            </p>
            {CHAT_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[11px] ${textSoft} hover:${isDark ? "bg-brand-white dark:bg-brand-midnight/5" : "bg-brand-surface dark:bg-brand-midnight/5"}`}
              >
                <span className="truncate">{item.label}</span>
                <Pin className={`h-2.5 w-2.5 shrink-0 ${textMuted}`} />
              </div>
            ))}
          </div>

          {/* Folder */}
          <div>
            <p className={`mb-1.5 px-1 text-[10px] font-medium ${textMuted}`}>
              Finanzas
            </p>
            {FOLDER_ITEMS.map((item) => (
              <div
                key={item}
                className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[11px] ${
                  item.includes("Revisi\u00f3n")
                    ? `${isDark ? "bg-brand-accent/20 text-brand-accent-light" : "bg-brand-accent/10 text-brand-accent"}`
                    : textSoft
                }`}
              >
                <span className="truncate">{item}</span>
                {item.includes("Revisi\u00f3n") && (
                  <MoreVertical className="h-2.5 w-2.5 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom nav icons */}
          <div className="mt-auto flex flex-col gap-1 pt-4">
            {[MessageSquare, Users, Share2, Settings].map((Icon, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${textMuted}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
            ))}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex flex-1 flex-col">
          {/* Top bar */}
          <div className={`flex items-center gap-2 border-b ${border} px-4 py-2.5`}>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/20">
              <span className="text-[9px] font-bold text-brand-accent">L</span>
            </div>
            <span className={`text-xs font-semibold ${text}`}>Lattice</span>
            <span className={`text-[10px] ${textMuted}`}>Revisi\u00f3n de datos financieros</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-hidden px-4 py-4">
            {/* User message */}
            <div className="mb-4 flex justify-end">
              <div className={`max-w-[75%] rounded-2xl rounded-br-md ${bubble} px-3.5 py-2.5 text-[12px] leading-relaxed ${textSoft}`}>
                c\u00f3mo podr\u00edas ayudarme si mi empresa no es sobre finanzas?
              </div>
            </div>

            {/* AI response */}
            <div className="flex items-start gap-2.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                <span className="text-[9px] font-bold text-brand-accent">L</span>
              </div>
              <div>
                <p className={`mb-1 text-[11px] font-semibold ${text}`}>Lattice</p>
                <div className={`text-[12px] leading-[1.7] ${textSoft}`}>
                  <p className="whitespace-pre-wrap">{displayedText}</p>
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block h-3.5 w-0.5 bg-brand-accent"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className={`border-t ${border} px-4 py-3`}>
            <div className={`flex items-center gap-2 rounded-xl ${inputBg} px-3 py-2.5`}>
              <Paperclip className={`h-3.5 w-3.5 ${textMuted}`} />
              <span className={`flex-1 text-[11px] ${textMuted}`}>Escriba aqu\u00ed</span>
              <div className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${isDark ? "bg-brand-white dark:bg-brand-midnight/10 text-brand-midnight/40 dark:text-brand-white/40" : "bg-brand-accent/10 text-brand-accent/60"}`}>
                Inactivo
              </div>
              <Mic className={`h-3.5 w-3.5 ${textMuted}`} />
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent">
                <Send className="h-3 w-3 text-brand-midnight dark:text-brand-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
