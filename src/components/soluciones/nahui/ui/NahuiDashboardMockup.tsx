"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import {
  LayoutDashboard,
  Calendar,
  Settings,
  Users,
  Truck,
  MapPin,
  Search,
  Bell,
  CheckCircle2,
  Navigation,
  Plus,
  Minus,
  Eye,
  Pencil,
  Trash2,
  Package,
  Cloud
} from "lucide-react";

const SIDEBAR_MENUS = [
  {
    title: "OPERACIONES",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", active: false },
      { icon: MapPin, label: "Rutas", active: true },
      { icon: Calendar, label: "Programación", active: false },
      { icon: Package, label: "Órdenes", active: false },
    ],
  },
  {
    title: "RECURSOS",
    items: [
      { icon: Users, label: "Conductores", active: false },
      { icon: Truck, label: "Vehículos", active: false },
    ],
  },
];

const ROUTE_POINTS = [
  { id: "A", label: "CEDIS Central Sur", customer: "Carga Inicial", status: "completed" },
  { id: "B", label: "Corporativo Polanco", customer: "Entrega #1024", status: "active" },
  { id: "C", label: "Sucursal Condesa", customer: "Entrega #1025", status: "pending" },
  { id: "D", label: "Lomas de Chapultepec", customer: "Entrega #1026", status: "pending" },
  { id: "E", label: "Interlomas", customer: "Entrega #1027", status: "pending" },
];

const MAP_POINTS = [
  { id: "A", left: "30%", top: "75%", status: "completed" },
  { id: "B", left: "44%", top: "54%", status: "active" },
  { id: "C", left: "48%", top: "70%", status: "pending" },
  { id: "D", left: "55%", top: "45%", status: "pending" },
  { id: "E", left: "60%", top: "32%", status: "pending" },
];

export function NahuiDashboardMockup() {
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div className="rounded-xl border border-white/10 bg-[#090b14] shadow-2xl overflow-hidden flex flex-col h-[400px] sm:h-[550px] w-full max-w-[1000px] mx-auto text-white font-sans ring-1 ring-white/5">
        {/* App Top Bar */}
        <div className="flex h-12 items-center justify-between border-b border-white/5 bg-[#090b14] px-4 shrink-0">
          <div className="flex items-center gap-4">
            {/* Mac dots */}
            <div className="flex items-center gap-1.5 mr-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-md px-2 py-1 text-xs font-semibold text-white/90">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-[#1e293b] text-[#53abe6]">
                <Cloud className="h-3 w-3" fill="currentColor" />
              </div>
              Nahui Ops
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button aria-label="Notificaciones del sistema" className="hidden sm:flex items-center justify-center h-6 w-6 rounded-full bg-[#111827] border border-[#53abe6]/30 text-[#53abe6] hover:bg-[#53abe6]/10 transition-colors">
              <CheckCircle2 className="h-3 w-3" />
            </button>
            <button aria-label="Ver alertas" className="text-white/40 hover:text-white transition-colors">
              <Bell className="h-4 w-4" />
            </button>
            <button aria-label="Ajustes" className="text-white/40 hover:text-white transition-colors">
              <Settings className="h-4 w-4" />
            </button>
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-transparent px-2.5 py-1 border border-white/10">
              <div className="h-4 w-4 rounded-full bg-[#1e293b] flex items-center justify-center">
                <Truck className="h-2.5 w-2.5 text-[#53abe6]" />
              </div>
              <span className="text-[10px] font-semibold text-white/80">Nahui Logistics</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="hidden md:flex w-[200px] flex-col bg-[#090b14] border-r border-white/5 p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#53abe6] py-2.5 text-xs font-bold text-[#090b14] hover:bg-[#429bd6] transition-colors">
              <Plus className="h-3.5 w-3.5" strokeWidth={3} />
              Crear orden
            </button>

            {SIDEBAR_MENUS.map(section => (
              <div key={section.title} className="mb-5">
                <h4 className="mb-2 px-2 text-[9px] font-bold uppercase tracking-widest text-white/30">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-0.5">
                  {section.items.map(item => (
                    <button
                      key={item.label}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-colors ${
                        item.active
                          ? "bg-[#111827] border border-[#53abe6]/20 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <item.icon className={`h-4 w-4 ${item.active ? "text-[#53abe6]" : "text-white/40"}`} />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map Area */}
          <div className="relative flex-1 bg-[#101524] overflow-hidden">
            {/* SVG Grayscale city map */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              {/* Base */}
              <rect width="400" height="300" fill="#101524"/>
              
              {/* Main avenues */}
              <line x1="0" y1="120" x2="400" y2="120" stroke="#1c273c" strokeWidth="6"/>
              <line x1="0" y1="230" x2="400" y2="230" stroke="#1c273c" strokeWidth="6"/>
              <line x1="100" y1="0" x2="100" y2="300" stroke="#1c273c" strokeWidth="6"/>
              <line x1="250" y1="0" x2="250" y2="300" stroke="#1c273c" strokeWidth="6"/>
              
              {/* Secondary streets */}
              <line x1="160" y1="0" x2="160" y2="300" stroke="#182133" strokeWidth="2"/>
              <line x1="330" y1="0" x2="330" y2="300" stroke="#182133" strokeWidth="2"/>
              <line x1="0" y1="60" x2="400" y2="60" stroke="#182133" strokeWidth="2"/>
              <line x1="0" y1="170" x2="400" y2="170" stroke="#182133" strokeWidth="2"/>
              
              {/* Diagonal road */}
              <line x1="0" y1="80" x2="150" y2="0" stroke="#1a2438" strokeWidth="4"/>

              {/* Blocks */}
              <rect x="15" y="15" width="60" height="90" fill="#151d2c" rx="2"/>
              <rect x="120" y="15" width="110" height="90" fill="#151d2c" rx="2"/>
              <rect x="270" y="15" width="110" height="90" fill="#151d2c" rx="2"/>
              
              <rect x="15" y="140" width="60" height="70" fill="#151d2c" rx="2"/>
              <rect x="120" y="140" width="110" height="70" fill="#151d2c" rx="2"/>
              
              <rect x="15" y="250" width="60" height="70" fill="#151d2c" rx="2"/>
              <rect x="120" y="250" width="110" height="70" fill="#151d2c" rx="2"/>
              <rect x="270" y="250" width="110" height="70" fill="#151d2c" rx="2"/>

              {/* Park */}
              <rect x="180" y="145" width="55" height="40" fill="#1a2e23" rx="4"/>
              
              {/* Roundabout */}
              <circle cx="250" cy="120" r="10" fill="none" stroke="#1c273c" strokeWidth="3"/>
              <circle cx="250" cy="120" r="4" fill="#151d2c"/>
            </svg>

            {/* Search overlay */}
            <div className="absolute left-5 top-5 z-10 flex w-[calc(100%-2.5rem)] sm:w-64 items-center gap-2.5 rounded-lg bg-[#090b14] px-3 py-2 shadow-xl border border-white/5">
              <Search className="h-3.5 w-3.5 text-white/40" />
              <span className="text-[11px] text-white/40 font-medium tracking-wide">Buscar por palabra clave...</span>
            </div>

            {/* Floating map tools */}
            <div className="absolute left-5 top-16 z-10 hidden sm:flex flex-col items-center gap-0 rounded-full bg-[#090b14] py-1.5 shadow-xl border border-white/5 w-8">
              <button aria-label="Acercar mapa" className="p-2 text-white/40 hover:text-white transition-colors"><Plus className="h-3.5 w-3.5" /></button>
              <button aria-label="Alejar mapa" className="p-2 text-white/40 hover:text-white transition-colors"><Minus className="h-3.5 w-3.5" /></button>
              <button aria-label="Navegar" className="p-2 text-white/40 hover:text-white transition-colors"><Navigation className="h-3.5 w-3.5" fill="currentColor" /></button>
              <button aria-label="Centrar en ruta" className="p-2 text-[#53abe6]"><MapPin className="h-3.5 w-3.5" fill="currentColor" /></button>
              <button aria-label="Ver detalles" className="p-2 text-white/40 hover:text-white transition-colors"><Eye className="h-3.5 w-3.5" /></button>
            </div>

            {/* Map Points */}
            {MAP_POINTS.map((point) => (
              <div
                key={point.id}
                className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ left: point.left, top: point.top }}
              >
                {point.status === 'completed' ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent border-2 border-[#22c55e] text-[#22c55e]">
                    <CheckCircle2 className="h-3.5 w-3.5" fill="currentColor" stroke="#090b14" />
                  </div>
                ) : point.status === 'active' ? (
                  <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#53abe6] text-[#090b14] shadow-lg shadow-[#53abe6]/30">
                    {!shouldReduce && (
                      <m.span 
                        className="absolute inset-0 rounded-full bg-[#53abe6]"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    <Truck className="h-3 w-3 relative z-10" fill="currentColor" />
                  </div>
                ) : (
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#090b14] border border-white/20 text-white/70 shadow-lg">
                    <span className="text-[8px] font-bold">{point.id}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Sidebar (Route details) */}
          <div className="hidden lg:flex w-[280px] flex-col bg-[#090b14] border-l border-white/5">
            <div className="flex items-center justify-between border-b border-white/5 p-4">
              <h3 className="text-sm font-bold text-white">Ruta Activa</h3>
              <button className="rounded border border-[#53abe6]/20 bg-transparent px-2.5 py-1 text-[10px] font-semibold text-[#53abe6] hover:bg-[#53abe6]/10 transition-colors">
                Optimizar
              </button>
            </div>

            <div className="flex flex-col gap-2.5 p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-6 rounded-full bg-[#22c55e] flex items-center p-0.5">
                    <div className="h-2 w-2 rounded-full bg-white ml-auto" />
                  </div>
                  <span className="text-[10px] font-semibold text-white/80">Múltiples entregas</span>
                </div>
                <button className="flex items-center gap-1 text-[10px] font-semibold text-white/40 hover:text-white transition-colors">
                  <Plus className="h-3 w-3" />
                  Punto
                </button>
              </div>

              {ROUTE_POINTS.map((rp) => (
                <div
                  key={rp.id}
                  className={`flex items-center gap-3 rounded-xl border p-2.5 transition-colors ${
                    rp.status === 'active' 
                      ? "border-[#53abe6]/30 bg-[#53abe6]/5" 
                      : rp.status === 'completed'
                      ? "border-[#22c55e]/20 bg-transparent"
                      : "border-white/5 bg-transparent hover:border-white/10"
                  }`}
                >
                  {/* Status Indicator */}
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] text-[10px] font-bold ${
                    rp.status === 'completed' ? 'bg-[#22c55e]/20 text-[#22c55e]' :
                    rp.status === 'active' ? 'bg-[#53abe6] text-[#090b14]' :
                    'bg-[#1f2937] text-white/50'
                  }`}>
                    {rp.id}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 flex-col overflow-hidden">
                    <span className={`truncate text-xs font-bold ${rp.status === 'completed' ? 'text-white/40 line-through' : 'text-white/90'}`}>
                      {rp.label}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-semibold text-white/50">
                      {rp.status === 'completed' ? <CheckCircle2 className="h-3 w-3 text-[#22c55e]" /> : <Package className="h-3 w-3" />}
                      <span className="truncate">{rp.customer}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button aria-label="Editar parada" className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                      <Pencil className="h-3 w-3" />
                    </button>
                    <button aria-label="Eliminar parada" className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-[#ef4444]/10 text-[#ef4444] hover:bg-[#ef4444]/20 transition-colors">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

