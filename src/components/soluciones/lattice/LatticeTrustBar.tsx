"use client";

import {
  MessageCircle,
  Send,
  Slack,
  Mail,
  Database,
  Cloud,
  Building2,
  LayoutGrid,
  Plug,
  FileSpreadsheet,
} from "lucide-react";

const INTEGRATIONS = [
  { name: "WhatsApp Business", Icon: MessageCircle },
  { name: "Telegram", Icon: Send },
  { name: "Slack", Icon: Slack },
  { name: "Microsoft Teams", Icon: LayoutGrid },
  { name: "Google Workspace", Icon: Cloud },
  { name: "Outlook", Icon: Mail },
  { name: "SAP", Icon: Building2 },
  { name: "Salesforce", Icon: Cloud },
  { name: "HubSpot", Icon: FileSpreadsheet },
  { name: "Correo electrónico", Icon: Mail },
  { name: "ERPs", Icon: Building2 },
  { name: "Bases de datos SQL", Icon: Database },
  { name: "APIs REST", Icon: Plug },
];

export function LatticeTrustBar() {
  const items = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section
      className="relative overflow-hidden bg-[#040615] border-y border-white/[0.06]"
      aria-label="Integraciones compatibles"
    >
      <div className="py-6">
        {/* Label */}
        <p className="mb-5 text-center text-[13px] font-normal uppercase tracking-[0.06em] text-white/40">
          Compatible con las herramientas que ya usas
        </p>

        {/* Infinite marquee */}
        <div className="relative mask-fade-x">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {items.map(({ name, Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="group flex shrink-0 items-center gap-2 cursor-default"
              >
                <Icon className="h-6 w-6 text-white/40 transition-all duration-200 group-hover:text-white md:h-8 md:w-8" />
                <span className="hidden text-xs font-medium text-white/40 transition-colors duration-200 group-hover:text-white sm:inline">
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
