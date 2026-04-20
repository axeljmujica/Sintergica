"use client";

import { LazyMotion, domAnimation } from "motion/react";
import {
  Terminal,
  Search,
  Settings,
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  GitBranch,
  RefreshCw,
  Sparkles,
  Check,
  Plus,
} from "lucide-react";

const FILE_TREE = [
  { type: "folder", name: "app", open: true, depth: 0 },
  { type: "folder", name: "dashboard", open: true, depth: 1 },
  { type: "file", name: "page.tsx", depth: 2, active: true, modified: true },
  { type: "file", name: "layout.tsx", depth: 2 },
  { type: "folder", name: "api", depth: 1 },
  { type: "folder", name: "components", open: true, depth: 0 },
  { type: "folder", name: "ui", depth: 1, untracked: true },
  { type: "folder", name: "lib", depth: 0 },
  { type: "folder", name: "public", depth: 0 },
  { type: "file", name: "package.json", depth: 0 },
  { type: "file", name: "tsconfig.json", depth: 0, modified: true },
];

const CODE_LINES: Array<Array<{ t: string; c?: string }>> = [
  [{ t: '"use client"', c: "str" }, { t: ";" }],
  [],
  [{ t: "import", c: "kw" }, { t: " { " }, { t: "useEffect", c: "fn" }, { t: ", " }, { t: "useState", c: "fn" }, { t: " } " }, { t: "from", c: "kw" }, { t: " " }, { t: '"react"', c: "str" }, { t: ";" }],
  [{ t: "import", c: "kw" }, { t: " { " }, { t: "fetchRevenue", c: "fn" }, { t: " } " }, { t: "from", c: "kw" }, { t: " " }, { t: '"@/lib/api"', c: "str" }, { t: ";" }],
  [],
  [{ t: "export default function", c: "kw" }, { t: " " }, { t: "DashboardPage", c: "fn" }, { t: "() {" }],
  [{ t: "  " }, { t: "const", c: "kw" }, { t: " [revenue, setRevenue] = " }, { t: "useState", c: "fn" }, { t: "<" }, { t: "number", c: "type" }, { t: ">(0);" }],
  [{ t: "  " }, { t: "const", c: "kw" }, { t: " [loading, setLoading] = " }, { t: "useState", c: "fn" }, { t: "(" }, { t: "true", c: "lit" }, { t: ");" }],
  [],
  [{ t: "  " }, { t: "useEffect", c: "fn" }, { t: "(() => {" }],
  [{ t: "    " }, { t: "fetchRevenue", c: "fn" }, { t: "().then((data) => {" }],
  [{ t: "      setRevenue(data.total);" }],
  [{ t: "      setLoading(" }, { t: "false", c: "lit" }, { t: ");" }],
  [{ t: "    });" }],
  [{ t: "  }, []);" }],
  [],
  [{ t: "  " }, { t: "return", c: "kw" }, { t: " (" }],
  [{ t: "    <" }, { t: "section", c: "tag" }, { t: " " }, { t: "className", c: "attr" }, { t: "=" }, { t: '"p-6"', c: "str" }, { t: ">" }],
  [{ t: "      <" }, { t: "h1", c: "tag" }, { t: ">Revenue: ${revenue}</" }, { t: "h1", c: "tag" }, { t: ">" }],
  [{ t: "    </" }, { t: "section", c: "tag" }, { t: ">" }],
  [{ t: "  );" }],
  [{ t: "}" }],
];

function colorClass(c?: string) {
  switch (c) {
    case "kw": return "text-[#FF7B72]";
    case "fn": return "text-[#D2A8FF]";
    case "str": return "text-[#A5D6FF]";
    case "type": return "text-[#FFA657]";
    case "lit": return "text-[#79C0FF]";
    case "tag": return "text-[#7EE787]";
    case "attr": return "text-[#D2A8FF]";
    default: return "text-[#E6EDF3]";
  }
}

export function LatticeCodeMockup() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto flex h-[460px] w-full max-w-[1000px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_40px_-16px_rgba(15,23,42,0.18)] sm:h-[600px]">
        {/* Top bar */}
        <div className="flex h-10 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-500">
              <span>sintergica-web</span>
              <span className="text-slate-300">/</span>
              <span>app</span>
              <span className="text-slate-300">/</span>
              <span>dashboard</span>
              <span className="text-slate-300">/</span>
              <span className="font-semibold text-slate-900">page.tsx</span>
            </div>
          </div>
          <div className="hidden flex-1 max-w-[200px] items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-400 md:flex">
            <Search className="h-3 w-3" />
            <span className="flex-1">Buscar...</span>
            <kbd className="rounded bg-white px-1 font-mono text-[9px] text-slate-500 ring-1 ring-slate-200">⌘K</kbd>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
              <Terminal className="h-3 w-3 text-[#16A34A]" />
              Lattice Code
            </div>
            <span className="rounded-full bg-[#F59E0B]/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#B45309]">
              Próximamente
            </span>
            <button aria-label="Ajustes" className="text-slate-400 hover:text-slate-600"><Settings className="h-3.5 w-3.5" /></button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* File tree */}
          <aside className="hidden w-[180px] shrink-0 flex-col border-r border-slate-200 bg-[#F8FAFC] md:flex">
            <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Explorer</span>
              <Plus className="h-3 w-3 text-slate-400" />
            </div>
            <div className="flex-1 overflow-y-auto py-1 [&::-webkit-scrollbar]:hidden">
              {FILE_TREE.map((f, i) => {
                const Icon = f.type === "folder" ? (f.open ? FolderOpen : Folder) : f.name.endsWith(".json") ? FileText : FileCode;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-1.5 px-2 py-0.5 text-[10.5px] ${f.active ? "bg-[#006EFA]/10 font-medium text-[#006EFA]" : "text-slate-700 hover:bg-slate-200/60"}`}
                    style={{ paddingLeft: `${8 + f.depth * 10}px` }}
                  >
                    <Icon className={`h-3 w-3 shrink-0 ${f.type === "folder" ? "text-[#F59E0B]" : "text-slate-500"}`} />
                    <span className="flex-1 truncate">{f.name}</span>
                    {f.modified && <span className="text-[8px] font-bold text-[#F59E0B]">M</span>}
                    {f.untracked && <span className="text-[8px] font-bold text-[#16A34A]">U</span>}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-1.5 border-t border-slate-200 px-3 py-1.5 text-[10px] text-slate-500">
              <GitBranch className="h-3 w-3" />
              <span>main</span>
              <RefreshCw className="ml-auto h-2.5 w-2.5" />
            </div>
          </aside>

          {/* Editor */}
          <div className="flex min-w-0 flex-1 flex-col bg-[#0D1117]">
            {/* Tabs */}
            <div className="flex h-8 shrink-0 items-center border-b border-[#21262D] bg-[#010409] px-2">
              <div className="flex items-center gap-1.5 rounded-t-md bg-[#0D1117] px-2.5 py-1 text-[10px] text-[#E6EDF3]">
                <FileCode className="h-3 w-3 text-[#79C0FF]" />
                page.tsx
                <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              </div>
            </div>
            <div className="flex flex-1 overflow-hidden font-mono text-[10.5px] leading-[1.5]">
              <div className="select-none border-r border-[#21262D] px-2 py-2 text-right text-[#6E7681]">
                {CODE_LINES.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre className="flex-1 overflow-x-auto px-3 py-2">
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line.length === 0 ? "\u00A0" : line.map((tok, j) => (
                      <span key={j} className={colorClass(tok.c)}>{tok.t}</span>
                    ))}
                  </div>
                ))}
              </pre>
            </div>
            {/* Status bar */}
            <div className="flex h-5 shrink-0 items-center justify-between border-t border-[#21262D] bg-[#010409] px-3 text-[9px] text-[#7D8590]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><GitBranch className="h-2.5 w-2.5" /> main</span>
                <span>TypeScript React</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Ln 12, Col 24</span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>

          {/* Agent panel */}
          <aside className="hidden w-[240px] shrink-0 flex-col border-l border-slate-200 bg-white lg:flex">
            <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-[#16A34A] to-[#10B981] text-white">
                <Sparkles className="h-3 w-3" />
              </div>
              <span className="text-[11px] font-semibold text-slate-900">Agente de código</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 [&::-webkit-scrollbar]:hidden">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-[10px] text-slate-700">
                Refactoriza <code className="rounded bg-white px-1 font-mono text-[9px] text-[#006EFA]">DashboardPage</code> para usar Suspense y Server Components.
              </div>
              <div className="mt-2.5 rounded-lg border border-slate-200 bg-white p-2">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-900">
                  <Sparkles className="h-3 w-3 text-[#16A34A]" />
                  Plan propuesto
                </div>
                <ul className="mt-1.5 flex flex-col gap-1 text-[9.5px] text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <Check className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#16A34A]" />
                    Convertir a RSC: quitar <span className="font-mono text-[#006EFA]">&quot;use client&quot;</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#16A34A]" />
                    Mover fetch al servidor
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full border border-slate-300" />
                    Envolver en <span className="font-mono text-[#006EFA]">&lt;Suspense&gt;</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full border border-slate-300" />
                    Actualizar tipos
                  </li>
                </ul>
              </div>
              <div className="mt-2.5 flex flex-col gap-1 rounded-lg border border-[#16A34A]/30 bg-[#16A34A]/5 p-2">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#15803D]">
                  <FileCode className="h-3 w-3" />
                  2 archivos editados
                </div>
                <div className="flex items-center justify-between text-[9px] text-slate-600">
                  <span className="font-mono">app/dashboard/page.tsx</span>
                  <span className="text-[#16A34A]">+18 -12</span>
                </div>
                <div className="flex items-center justify-between text-[9px] text-slate-600">
                  <span className="font-mono">lib/api.ts</span>
                  <span className="text-[#16A34A]">+4</span>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 p-2">
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5">
                <Sparkles className="h-3 w-3 text-slate-400" />
                <span className="flex-1 text-[10px] text-slate-400">Pide un cambio...</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </LazyMotion>
  );
}
