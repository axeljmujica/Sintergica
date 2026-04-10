"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { 
  Rocket, 
  LayoutDashboard, 
  MessageSquare, 
  Calendar, 
  Users, 
  Contact,
  CreditCard,
  Sparkles,
  Megaphone,
  Zap,
  Globe,
  Settings,
  Search,
  ChevronDown,
  Plus,
  Download,
  Filter,
  ArrowUpDown,
  Phone,
  Tag,
  CheckSquare,
  Bell,
  HelpCircle,
  LayoutGrid
} from "lucide-react";

interface SalesHubDashboardMockupProps {
  startAnimation?: boolean;
}

export function SalesHubDashboardMockup({ startAnimation = false }: SalesHubDashboardMockupProps) {
  const shouldReduce = useReducedMotion();

  const SIDEBAR_ITEMS = [
    { icon: Rocket, label: "Launchpad" },
    { icon: LayoutDashboard, label: "Tablero" },
    { icon: MessageSquare, label: "Conversaciones" },
    { icon: Calendar, label: "Calendarios" },
    { icon: Contact, label: "Contactos" },
    { icon: Users, label: "Clientes Potenciales", active: true },
    { icon: CreditCard, label: "Pagos" },
    { icon: Sparkles, label: "Agentes de AI" },
    { icon: Megaphone, label: "Marketing" },
    { icon: Zap, label: "Automatización" },
    { icon: Globe, label: "Sitios" },
    { icon: Settings, label: "Configuración" },
  ];

  const KANBAN_COLS = [
    { 
      title: "Oportunidades", 
      count: 49, 
      val: "$0.00", 
      borderTop: "border-brand-midnight/20 dark:border-brand-white/20",
      cards: [
        { name: "Jesus Gomez Salgado", sub: "Casa h...", initials: "JG", bg: "bg-blue-600" },
        { name: "Jean Read", sub: "Casa habitación", initials: "AH", bg: "bg-indigo-400" },
        { name: "Feliciano Rosario", sub: "Casa habita...", initials: "CY", bg: "bg-purple-400" }
      ]
    },
    { 
      title: "HOT LEADS 🔥", 
      count: 6, 
      val: "$0.00", 
      borderTop: "border-orange-400",
      cards: [
        { name: "Orizaba Va", sub: "Negocio o Industria", initials: "OV", bg: "bg-orange-500" },
        { name: "Arturo Gil", sub: "Casa habitación", initials: "RS", bg: "bg-teal-500" },
        { name: "FerLozano", sub: "", initials: "FL", bg: "bg-pink-500" }
      ]
    },
    { 
      title: "Contactado", 
      count: 78, 
      val: "$0.00", 
      borderTop: "border-pink-300",
      cards: [
        { name: "Israel Oli", sub: "Casa habitación", initials: "IO", bg: "bg-green-600" },
        { name: "Rosario Cruz", sub: "Casa habitación", initials: "RC", bg: "bg-red-500" },
        { name: "Gerardo Mancillas", sub: "Casa ...", initials: "AH", bg: "bg-indigo-400" }
      ]
    },
    { 
      title: "En atención", 
      count: 64, 
      val: "$432,000.00", 
      borderTop: "border-purple-300",
      cards: [
        { name: "Maria Luisa Benitez", sub: "Colegio I...", initials: "ML", bg: "bg-yellow-500" },
        { name: "Luis Raymundo Aguilar", sub: "...", initials: "LR", bg: "bg-cyan-600" },
        { name: "Alfonso Jiménez", sub: "Negocio o In...", initials: "AJ", bg: "bg-emerald-500" }
      ]
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full aspect-[16/11] sm:aspect-[4/3] rounded-xl overflow-hidden flex shadow-2xl border border-brand-midnight/10 dark:border-brand-white/10 select-none bg-brand-surface dark:bg-brand-midnight">
        {/* Sidebar */}
        <div className="w-[28%] md:w-[24%] bg-brand-surface dark:bg-brand-midnight flex flex-col border-r border-brand-midnight/5 dark:border-brand-white/5">
          {/* Header */}
          <div className="p-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-midnight dark:text-brand-white font-bold text-[10px] md:text-xs">
              <div className="w-4 h-4 bg-brand-accent rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-brand-midnight dark:text-brand-white">
                  <path d="M4 12l8-8 8 8M4 12l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              SalesHub
            </div>
            
            {/* Account Selector */}
            <div className="flex items-center gap-2 bg-brand-white dark:bg-brand-white/5 rounded p-1.5 border border-brand-midnight/10 dark:border-brand-white/10 shadow-sm dark:shadow-none">
              <div className="w-5 h-5 rounded-full bg-brand-surface dark:bg-brand-white/20 flex items-center justify-center text-[8px] text-brand-midnight dark:text-brand-white">SE</div>
              <div className="flex-1 overflow-hidden">
                <div className="text-[8px] font-semibold text-brand-midnight dark:text-brand-white leading-none truncate">Swivel Energy</div>
                <div className="text-[6px] text-brand-midnight/60 dark:text-brand-white/60 mt-0.5 leading-none truncate">Veracruz, Veracruz</div>
              </div>
              <ChevronDown className="w-3 h-3 text-brand-midnight/40 dark:text-brand-white/40 shrink-0" />
            </div>
            
            {/* Search */}
            <div className="flex items-center gap-1.5 mt-1">
              <div className="relative flex-1">
                <Search className="w-3 h-3 text-brand-midnight/40 dark:text-brand-white/40 absolute left-2 top-1.5" />
                <div className="w-full bg-brand-white dark:bg-brand-white/5 border border-brand-midnight/10 dark:border-brand-white/10 rounded pl-6 pr-6 py-1 h-6 text-[8px] text-brand-midnight/60 dark:text-brand-white/60 flex items-center justify-between shadow-sm dark:shadow-none">
                  Buscar
                  <div className="flex items-center gap-0.5 opacity-60">
                    <span className="text-[7px]">⌘</span>
                    <span className="text-[7px]">K</span>
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 rounded bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                <Zap className="w-3 h-3 text-brand-accent fill-brand-accent" />
              </div>
            </div>
          </div>
          
          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto flex flex-col gap-0.5 px-1.5 py-1 hide-scrollbar">
            {SIDEBAR_ITEMS.map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[8px] transition-colors ${
                  item.active 
                    ? "bg-brand-accent/10 dark:bg-brand-white/10 text-brand-accent dark:text-brand-white font-medium relative" 
                    : "text-brand-midnight/60 dark:text-brand-white/60"
                }`}
              >
                {item.active && <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-brand-accent rounded-r-full" />}
                <item.icon className={`w-3 h-3 ${item.active ? 'text-brand-accent dark:text-brand-white' : 'text-brand-midnight/40 dark:text-brand-white/40'}`} />
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-brand-white dark:bg-brand-navy flex flex-col min-w-0">
          {/* Top Header */}
          <div className="h-12 bg-brand-surface dark:bg-brand-midnight flex items-end justify-between px-4 border-b border-brand-midnight/5 dark:border-brand-white/5 pb-0">
            {/* Tabs */}
            <div className="flex gap-4 items-center">
              <div className="text-brand-midnight dark:text-brand-white font-bold text-[11px] mb-2 mr-2">Clientes Potenciales</div>
              <div className="text-[9px] font-medium text-brand-accent dark:text-brand-white pb-2 border-b-2 border-brand-accent px-1">Clientes Potenciales</div>
              <div className="text-[9px] font-medium text-brand-midnight/40 dark:text-brand-white/40 pb-2 hidden sm:block">Secuencia</div>
              <div className="text-[9px] font-medium text-brand-midnight/40 dark:text-brand-white/40 pb-2 hidden md:block">Acciones en lote</div>
            </div>
            {/* Top Icons */}
            <div className="flex gap-1.5 pb-2 items-center">
              <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-brand-midnight dark:text-brand-white font-bold text-[8px]">A</div>
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-brand-midnight dark:text-brand-white"><Phone className="w-2.5 h-2.5" /></div>
              <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center text-brand-midnight dark:text-brand-white"><Sparkles className="w-2.5 h-2.5" /></div>
              <div className="relative w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-brand-midnight dark:text-brand-white">
                <CheckSquare className="w-2.5 h-2.5" />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-brand-surface dark:border-brand-midnight flex items-center justify-center text-[5px] font-bold">4</div>
              </div>
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-brand-midnight dark:text-brand-white"><Bell className="w-2.5 h-2.5" /></div>
              <div className="w-5 h-5 rounded-full bg-brand-surface dark:bg-brand-navy flex items-center justify-center text-brand-midnight dark:text-brand-white"><HelpCircle className="w-2.5 h-2.5" /></div>
              <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-brand-white/10 border border-brand-midnight/10 dark:border-brand-white/20 ml-1 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Felix')] bg-cover" />
              </div>
            </div>
          </div>
          
          {/* Sub Header */}
          <div className="bg-brand-white dark:bg-brand-midnight border-b border-brand-midnight/5 dark:border-brand-white/5 px-4 py-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border border-brand-midnight/10 dark:border-brand-white/10 rounded-md px-3 py-1.5 text-[10px] font-medium text-brand-midnight/80 dark:text-brand-white/80 bg-brand-white dark:bg-brand-midnight shadow-sm">
                  Solar Pipeline <ChevronDown className="w-3 h-3 text-brand-midnight/40 dark:text-brand-white/40" />
                </div>
                <div className="text-[9px] font-medium text-brand-accent bg-brand-accent/5 px-2.5 py-1 rounded-full hidden sm:block border border-brand-accent/10">
                  571 clientes potenciales
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center border border-brand-midnight/10 dark:border-brand-white/10 rounded p-1 text-brand-midnight/40 dark:text-brand-white/40 gap-1 bg-brand-surface dark:bg-brand-white/5">
                  <LayoutGrid className="w-3.5 h-3.5 text-brand-accent" />
                  <div className="w-px h-3 bg-brand-surface dark:bg-brand-white/10" />
                  <div className="w-3.5 h-3.5" />
                </div>
                <button className="hidden sm:flex items-center gap-1.5 border border-brand-midnight/10 dark:border-brand-white/10 rounded-md px-3 py-1.5 text-[9px] font-medium text-brand-accent bg-brand-white dark:bg-brand-midnight shadow-sm hover:bg-brand-surface dark:hover:bg-brand-white/5 transition-colors">
                  <Download className="w-3 h-3" /> Importar
                </button>
                <button className="flex items-center gap-1.5 bg-brand-accent hover:bg-brand-accent/90 transition-colors text-brand-midnight dark:text-brand-white rounded-md px-3 py-1.5 text-[9px] font-medium shadow-sm">
                  <Plus className="w-3 h-3" /> Añadir oportunidad
                </button>
              </div>
            </div>
            
            {/* List Switcher */}
            <div className="flex items-center gap-4 border-b border-brand-midnight/5 dark:border-brand-white/5 pb-2">
              <div className="flex items-center gap-1.5 text-brand-midnight/80 dark:text-brand-white/80 font-medium text-[9px]">
                <LayoutGrid className="w-3 h-3 text-brand-midnight/40 dark:text-brand-white/40" /> Todo
              </div>
              <div className="flex items-center gap-1 text-brand-midnight/40 dark:text-brand-white/40 font-medium text-[9px]">
                <Plus className="w-3 h-3" /> Lista
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-[9px] font-medium text-brand-accent bg-brand-white dark:bg-brand-midnight border border-brand-accent/20 rounded-md px-3 py-1.5 hover:bg-brand-accent/5 transition-colors">
                  <Filter className="w-3 h-3" /> Filtros avanzados
                </button>
                <button className="flex items-center gap-1.5 text-[9px] font-medium text-brand-accent bg-brand-white dark:bg-brand-midnight border border-brand-accent/20 rounded-md px-3 py-1.5 hover:bg-brand-accent/5 transition-colors">
                  <ArrowUpDown className="w-3 h-3" /> Ordenar (1)
                </button>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <div className="relative">
                  <Search className="w-3 h-3 text-brand-midnight/40 dark:text-brand-white/40 absolute left-2.5 top-1.5" />
                  <div className="w-48 bg-brand-white dark:bg-brand-midnight border border-brand-midnight/10 dark:border-brand-white/10 rounded-md pl-8 pr-3 py-1.5 h-7 text-[9px] text-brand-midnight/40 dark:text-brand-white/40 flex items-center shadow-sm">Buscar Clientes Potencia</div>
                </div>
                <button className="flex items-center gap-1.5 text-[9px] font-medium text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-midnight dark:hover:text-brand-white transition-colors">
                  <Settings className="w-3 h-3" /> Gestionar campos
                </button>
              </div>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="flex-1 overflow-x-auto p-4 flex gap-4 hide-scrollbar items-start bg-brand-surface dark:bg-brand-navy">
            {KANBAN_COLS.map((col, cIdx) => (
              <div key={col.title} className="flex-1 min-w-[200px] flex flex-col gap-3">
                {/* Col Header */}
                <div className={`flex flex-col bg-brand-white dark:bg-brand-midnight rounded-md p-2 border-t-4 shadow-sm ${col.borderTop}`}>
                  <div className="text-[10px] font-bold text-brand-midnight dark:text-brand-white/80 tracking-wide">{col.title}</div>
                  <div className="flex items-center gap-1.5 text-[8px] text-brand-midnight/50 dark:text-brand-white/50 mt-1">
                    <span>{col.count} Clientes potenciales</span>
                    <span className="font-semibold text-brand-midnight/80 dark:text-brand-white/70">{col.val}</span>
                  </div>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-2.5">
                  {col.cards.map((card, i) => (
                    <m.div 
                      key={i}
                      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                      animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * cIdx + i * 0.1 }}
                      className="bg-brand-white dark:bg-brand-midnight rounded-lg border border-brand-midnight/5 dark:border-brand-white/5 p-3 shadow-sm flex flex-col gap-2.5 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="text-[9px] font-bold text-brand-midnight dark:text-brand-white/90 leading-snug">
                          {card.name} <span className="font-normal text-brand-midnight/50 dark:text-brand-white/50">| {card.sub || "..."}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full ${card.bg} flex items-center justify-center text-brand-midnight dark:text-brand-white text-[7px] font-bold shrink-0 shadow-inner`}>
                          {card.initials}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-1 mt-0.5">
                        <div className="flex justify-between text-[7px] text-brand-midnight/50 dark:text-brand-white/50">
                          <span>Fuente del cliente pot...</span>
                          <span className="text-brand-midnight/40 dark:text-brand-white/40">Facebook</span>
                        </div>
                        <div className="flex justify-between text-[7px] text-brand-midnight/50 dark:text-brand-white/50">
                          <span>Valor del cliente poten...</span>
                          <span className="text-brand-midnight/40 dark:text-brand-white/40">$0.00</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-1.5 pt-2 border-t border-brand-midnight/5 dark:border-brand-white/5">
                        <Phone className="w-3.5 h-3.5 text-brand-midnight/40 dark:text-brand-white/40 hover:text-brand-midnight/60 dark:hover:text-brand-white/60 transition-colors" />
                        <div className="relative">
                          <MessageSquare className="w-3.5 h-3.5 text-brand-midnight/40 dark:text-brand-white/40 hover:text-brand-midnight/60 dark:hover:text-brand-white/60 transition-colors" />
                        </div>
                        <Tag className="w-3.5 h-3.5 text-brand-midnight/40 dark:text-brand-white/40 hover:text-brand-midnight/60 dark:hover:text-brand-white/60 transition-colors" />
                        <div className="relative">
                          <CheckSquare className="w-3.5 h-3.5 text-brand-accent" />
                          <div className="absolute -top-1 -right-1.5 w-3 h-3 bg-brand-accent rounded-full flex items-center justify-center text-[6px] text-brand-midnight dark:text-brand-white font-bold border border-brand-midnight/20 dark:border-brand-white/20">1</div>
                        </div>
                        <Calendar className="w-3.5 h-3.5 text-brand-midnight/40 dark:text-brand-white/40 hover:text-brand-midnight/60 dark:hover:text-brand-white/60 transition-colors" />
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

