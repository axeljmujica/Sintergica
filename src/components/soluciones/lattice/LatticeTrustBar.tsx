"use client";

import { Mail, Database, Building2, Plug } from "lucide-react";
import {
  SiWhatsapp,
  SiTelegram,
  SiSlack,
  SiZoom,
  SiGoogle,
  SiGmail,
  SiSap,
  SiSalesforce,
  SiHubspot,
  SiNotion,
} from "react-icons/si";

const INTEGRATIONS = [
  { name: "WhatsApp Business", Icon: SiWhatsapp,  color: "#25D366" },
  { name: "Telegram",          Icon: SiTelegram,  color: "#26A5E4" },
  { name: "Slack",             Icon: SiSlack,     color: "#4A154B" },
  { name: "Zoom",              Icon: SiZoom,      color: "#2D8CFF" },
  { name: "Google Workspace",  Icon: SiGoogle,    color: "#4285F4" },
  { name: "Gmail",             Icon: SiGmail,     color: "#EA4335" },
  { name: "SAP",               Icon: SiSap,       color: "#0070F2" },
  { name: "Salesforce",        Icon: SiSalesforce,color: "#00A1E0" },
  { name: "HubSpot",           Icon: SiHubspot,   color: "#FF7A59" },
  { name: "Notion",            Icon: SiNotion,    color: "#000000" },
  { name: "Correo electrónico",Icon: Mail,               color: undefined },
  { name: "ERPs",              Icon: Building2,           color: undefined },
  { name: "Bases de datos SQL",Icon: Database,           color: undefined },
  { name: "APIs REST",         Icon: Plug,               color: undefined },
] as const;

export function LatticeTrustBar() {
  const items = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200 bg-white"
      aria-label="Integraciones compatibles"
    >
      <div className="py-8">
        <p className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.1em] text-slate-500">
          Compatible con las herramientas que ya usas
        </p>

        <div className="relative mask-fade-x">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {items.map(({ name, Icon, color }, i) => (
              <div
                key={`${name}-${i}`}
                className="group flex shrink-0 cursor-default items-center gap-2"
              >
                <Icon
                  className="h-6 w-6 opacity-60 transition-opacity duration-200 group-hover:opacity-100 md:h-7 md:w-7"
                  style={color ? { color } : undefined}
                />
                <span className="hidden text-xs font-medium text-slate-500 transition-colors duration-200 group-hover:text-slate-900 sm:inline">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
