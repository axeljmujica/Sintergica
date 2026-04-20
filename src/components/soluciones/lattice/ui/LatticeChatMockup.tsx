"use client";

import { LazyMotion, domAnimation } from "motion/react";
import {
  MessageSquare,
  FolderKanban,
  Users,
  BookOpen,
  Search,
  Plus,
  Pin,
  FileText,
  ChevronDown,
  Share2,
  Copy,
  HelpCircle,
  Settings,
  Paperclip,
  Globe,
  Mic,
  SendHorizontal,
  ThumbsUp,
  ThumbsDown,
  RotateCw,
  Volume2,
} from "lucide-react";

const NAV_ICONS = [
  { icon: MessageSquare, active: true, label: "Chats" },
  { icon: FolderKanban, active: false, label: "Proyectos" },
  { icon: Users, active: false, label: "Equipo" },
  { icon: BookOpen, active: false, label: "Knowledge bases" },
];

const PINNED = [
  { label: "Contratos de suministro", active: false },
  { label: "Revisión cláusula penal", active: false },
  { label: "Análisis contrato arrendamiento", active: true },
];

const LAST_WEEK = [
  "Comparativa cláusulas de confi...",
  "Due diligence Grupo Alvarado",
];

function Citation({ page }: { page: string }) {
  return (
    <span className="mx-0.5 inline-flex items-center rounded-md bg-[#006EFA]/10 px-1.5 py-0.5 align-middle text-[10px] font-semibold text-[#006EFA] ring-1 ring-inset ring-[#006EFA]/20">
      {page}
    </span>
  );
}

export function LatticeChatMockup() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto flex h-[460px] w-full max-w-[1000px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_40px_-16px_rgba(15,23,42,0.18)] sm:h-[600px]">
        {/* Top bar */}
        <div className="flex h-10 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="ml-2 flex items-center gap-1.5 rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
            <MessageSquare className="h-3 w-3 text-[#006EFA]" />
            Lattice Chat
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="hidden w-[220px] shrink-0 flex-col border-r border-slate-200 bg-slate-50/60 md:flex">
            {/* Workspace header */}
            <div className="flex items-center gap-2.5 border-b border-slate-200 p-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-amber-400 to-amber-500 text-[11px] font-bold text-white">
                A
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-[11px] font-semibold text-slate-900">Atlas Legal</span>
                <span className="text-[9px] text-slate-500">Workspace</span>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DBEAFE] text-[9px] font-bold text-[#006EFA]">
                ED
              </div>
            </div>

            {/* Icon nav */}
            <div className="flex gap-1 border-b border-slate-200 px-3 py-2">
              {NAV_ICONS.map(({ icon: Icon, active, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
                    active
                      ? "bg-[#006EFA]/10 text-[#006EFA]"
                      : "text-slate-500 hover:bg-slate-200/70 hover:text-slate-700"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>

            {/* Chats header */}
            <div className="flex items-center justify-between px-3 pt-3 pb-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Chats
              </span>
              <div className="flex items-center gap-1">
                <button aria-label="Buscar" className="flex h-5 w-5 items-center justify-center rounded text-slate-400 hover:bg-slate-200/70 hover:text-slate-600">
                  <Search className="h-3 w-3" />
                </button>
                <button aria-label="Nuevo" className="flex h-5 w-5 items-center justify-center rounded text-slate-400 hover:bg-slate-200/70 hover:text-slate-600">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* New chat button */}
            <div className="px-3">
              <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#006EFA] py-1.5 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-[#0059D1]">
                <Plus className="h-3 w-3" />
                Nuevo chat
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 [&::-webkit-scrollbar]:hidden">
              {/* Anclados */}
              <div className="mb-4">
                <div className="mb-1.5 flex items-center gap-1 px-1.5">
                  <Pin className="h-2.5 w-2.5 text-slate-400" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                    Anclados
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  {PINNED.map((item) => (
                    <button
                      key={item.label}
                      className={`truncate rounded-md px-2 py-1.5 text-left text-[11px] transition-colors ${
                        item.active
                          ? "bg-[#EFF6FF] font-medium text-[#006EFA]"
                          : "text-slate-600 hover:bg-slate-200/60"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* La semana pasada */}
              <div>
                <div className="mb-1.5 px-1.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                    La semana pasada
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  {LAST_WEEK.map((label) => (
                    <button
                      key={label}
                      className="truncate rounded-md px-2 py-1.5 text-left text-[11px] text-slate-600 transition-colors hover:bg-slate-200/60"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main chat area */}
          <div className="flex flex-1 flex-col overflow-hidden bg-white">
            {/* Chat header */}
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-slate-200 px-4">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#006EFA] text-white">
                  <MessageSquare className="h-3 w-3" />
                </div>
                <button className="flex items-center gap-1 text-[12px] font-semibold text-slate-900">
                  Lattice Séeb Legal
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>
                <span className="h-3 w-px bg-slate-300" />
                <span className="truncate text-[11px] text-slate-500">
                  Análisis contrato arrendamiento
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-400">
                <button aria-label="Compartir" className="flex h-6 w-6 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><Share2 className="h-3.5 w-3.5" /></button>
                <button aria-label="Copiar" className="flex h-6 w-6 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><Copy className="h-3.5 w-3.5" /></button>
                <button aria-label="Ayuda" className="flex h-6 w-6 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><HelpCircle className="h-3.5 w-3.5" /></button>
                <button aria-label="Ajustes" className="flex h-6 w-6 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><Settings className="h-3.5 w-3.5" /></button>
              </div>
            </div>

            {/* Conversation */}
            <div className="flex-1 overflow-y-auto px-5 py-4 [&::-webkit-scrollbar]:hidden">
              {/* User message */}
              <div className="flex flex-col items-end gap-1.5">
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] text-slate-600">
                  <FileText className="h-3 w-3 text-[#DC2626]" />
                  <span className="font-medium">Contrato_Arrendamiento_Torre_Roble.pdf</span>
                  <span className="text-slate-400">2.1 MB</span>
                </div>
                <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[#DBEAFE] px-3.5 py-2 text-[11.5px] leading-relaxed text-slate-800">
                  Identifica cláusulas de riesgo para el arrendatario y resume las condiciones de rescisión anticipada.
                </div>
              </div>

              {/* AI response */}
              <div className="mt-5 flex gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#006EFA] text-white">
                  <MessageSquare className="h-3 w-3" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <div className="text-[11px] font-semibold text-slate-900">Lattice Séeb Legal</div>
                  <p className="text-[11.5px] leading-relaxed text-slate-700">
                    Analicé el contrato (32 págs.). Encontré 4 cláusulas de atención prioritaria para el arrendatario:
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="text-[11.5px] leading-relaxed text-slate-700">
                      <span className="font-semibold text-slate-900">Cláusula 8.3</span> — Incremento anual indexado a inflación sin tope máximo
                      <Citation page="p.14" />
                    </div>
                    <div className="text-[11.5px] leading-relaxed text-slate-700">
                      <span className="font-semibold text-slate-900">Cláusula 12.1</span> — Depósito en garantía equivalente a 3 meses no reembolsable en ciertos supuestos
                      <Citation page="p.18" />
                    </div>
                    <div className="text-[11.5px] leading-relaxed text-slate-700">
                      <span className="font-semibold text-slate-900">Cláusula 15.4</span> — Obligación de mantenimiento mayor a cargo del arrendatario
                      <Citation page="p.22" />
                    </div>
                  </div>

                  <p className="text-[11.5px] leading-relaxed text-slate-700">
                    La rescisión anticipada procede con aviso de 90 días y penalización equivalente a 2 meses de renta
                    <Citation page="p.27" />.
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-slate-400">
                    <button aria-label="Copiar" className="flex h-5 w-5 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><Copy className="h-3 w-3" /></button>
                    <button aria-label="Leer en voz alta" className="flex h-5 w-5 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><Volume2 className="h-3 w-3" /></button>
                    <button aria-label="Regenerar" className="flex h-5 w-5 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><RotateCw className="h-3 w-3" /></button>
                    <button aria-label="Útil" className="flex h-5 w-5 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><ThumbsUp className="h-3 w-3" /></button>
                    <button aria-label="No útil" className="flex h-5 w-5 items-center justify-center rounded hover:bg-slate-100 hover:text-slate-600"><ThumbsDown className="h-3 w-3" /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-slate-200 bg-slate-50/60 px-4 py-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <button aria-label="Adjuntar" className="text-slate-400 hover:text-slate-600">
                  <Paperclip className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-500">
                  <Globe className="h-3 w-3" />
                  Inactivo
                </div>
                <span className="flex-1 text-[11.5px] text-slate-400">Escriba aquí</span>
                <button aria-label="Grabar" className="text-slate-400 hover:text-slate-600">
                  <Mic className="h-4 w-4" />
                </button>
                <button aria-label="Enviar" className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#006EFA] text-white transition-colors hover:bg-[#0059D1]">
                  <SendHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
