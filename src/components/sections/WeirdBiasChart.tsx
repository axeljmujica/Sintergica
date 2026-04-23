"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { useState } from "react";
import { useLocale } from "@/i18n/DictionaryProvider";

interface DataPoint {
  id: string;
  country: Record<string, string>;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  highlight?: boolean;
}

const DATA_POINTS: DataPoint[] = [
  { id: "us", country: { es: "Estados Unidos", en: "United States", "pt-br": "Estados Unidos" }, x: 0.00, y: 0.82, offsetX: -65, offsetY: 0 },
  { id: "ca", country: { es: "Canadá", en: "Canada", "pt-br": "Canadá" }, x: 0.01, y: 0.83, offsetX: -40, offsetY: -15 },
  { id: "uk", country: { es: "Reino Unido", en: "United Kingdom", "pt-br": "Reino Unido" }, x: 0.04, y: 0.82, offsetX: 20, offsetY: -15 },
  { id: "au", country: { es: "Australia", en: "Australia", "pt-br": "Austrália" }, x: 0.02, y: 0.87, offsetX: -25, offsetY: -15 },
  { id: "nz", country: { es: "Nueva Zelanda", en: "New Zealand", "pt-br": "Nova Zelândia" }, x: 0.05, y: 0.88, offsetX: -20, offsetY: -25 },
  { id: "de", country: { es: "Alemania", en: "Germany", "pt-br": "Alemanha" }, x: 0.08, y: 0.88, offsetX: 25, offsetY: -25 },
  { id: "jp", country: { es: "Japón", en: "Japan", "pt-br": "Japão" }, x: 0.12, y: 0.85, offsetX: 10, offsetY: -20 },
  { id: "sg", country: { es: "Singapur", en: "Singapore", "pt-br": "Singapura" }, x: 0.03, y: 0.80, offsetX: -40, offsetY: 0 },
  { id: "ar", country: { es: "Argentina", en: "Argentina", "pt-br": "Argentina" }, x: 0.06, y: 0.79, offsetX: 5, offsetY: -15 },
  { id: "br", country: { es: "Brasil", en: "Brazil", "pt-br": "Brasil" }, x: 0.05, y: 0.74, offsetX: -25, offsetY: -25 },
  { id: "cl", country: { es: "Chile", en: "Chile", "pt-br": "Chile" }, x: 0.09, y: 0.77, offsetX: -5, offsetY: -15 },
  { id: "co", country: { es: "Colombia", en: "Colombia", "pt-br": "Colômbia" }, x: 0.08, y: 0.70, offsetX: 10, offsetY: 15 },
  { id: "ec", country: { es: "Ecuador", en: "Ecuador", "pt-br": "Equador" }, x: 0.12, y: 0.72, offsetX: -25, offsetY: 15 },
  { id: "pe", country: { es: "Perú", en: "Peru", "pt-br": "Peru" }, x: 0.08, y: 0.68, offsetX: -25, offsetY: 15 },
  { id: "gt", country: { es: "Guatemala", en: "Guatemala", "pt-br": "Guatemala" }, x: 0.14, y: 0.74, offsetX: -20, offsetY: 15 },
  { id: "mx", country: { es: "México", en: "Mexico", "pt-br": "México" }, x: 0.06, y: 0.72, offsetX: -45, offsetY: 0, highlight: true },
  { id: "ru", country: { es: "Rusia", en: "Russia", "pt-br": "Rússia" }, x: 0.06, y: 0.74, offsetX: -5, offsetY: -25 },
  { id: "cn", country: { es: "China", en: "China", "pt-br": "China" }, x: 0.16, y: 0.76, offsetX: 15, offsetY: -20 },
  { id: "vn", country: { es: "Vietnam", en: "Vietnam", "pt-br": "Vietnã" }, x: 0.18, y: 0.73, offsetX: 30, offsetY: 0 },
  { id: "eg", country: { es: "Egipto", en: "Egypt", "pt-br": "Egito" }, x: 0.22, y: 0.71, offsetX: 25, offsetY: -15 },
  { id: "pk", country: { es: "Pakistán", en: "Pakistan", "pt-br": "Paquistão" }, x: 0.18, y: 0.62, offsetX: 30, offsetY: -10 },
  { id: "ng", country: { es: "Nigeria", en: "Nigeria", "pt-br": "Nigéria" }, x: 0.14, y: 0.65, offsetX: -20, offsetY: 15 },
  { id: "et", country: { es: "Etiopía", en: "Ethiopia", "pt-br": "Etiópia" }, x: 0.13, y: 0.67, offsetX: -15, offsetY: 15 },
  { id: "ly", country: { es: "Libia", en: "Libya", "pt-br": "Líbia" }, x: 0.15, y: 0.64, offsetX: 10, offsetY: 15 },
  { id: "tr", country: { es: "Turquía", en: "Turkey", "pt-br": "Turquia" }, x: 0.11, y: 0.79, offsetX: 30, offsetY: -10 },
  { id: "ma", country: { es: "Marruecos", en: "Morocco", "pt-br": "Marrocos" }, x: 0.14, y: 0.72, offsetX: 35, offsetY: 0 },
  { id: "kr", country: { es: "Corea del Sur", en: "South Korea", "pt-br": "Coreia do Sul" }, x: 0.09, y: 0.79, offsetX: 20, offsetY: -20 },
  { id: "nl", country: { es: "Países Bajos", en: "Netherlands", "pt-br": "Países Baixos" }, x: 0.06, y: 0.86, offsetX: -15, offsetY: 15 },
  { id: "uy", country: { es: "Uruguay", en: "Uruguay", "pt-br": "Uruguai" }, x: 0.08, y: 0.83, offsetX: -15, offsetY: 15 },
  { id: "hk", country: { es: "Hong Kong", en: "Hong Kong", "pt-br": "Hong Kong" }, x: 0.08, y: 0.81, offsetX: 40, offsetY: -5 },
  { id: "ad", country: { es: "Andorra", en: "Andorra", "pt-br": "Andorra" }, x: 0.10, y: 0.84, offsetX: 30, offsetY: -18 },
  { id: "tw", country: { es: "Taiwán", en: "Taiwan", "pt-br": "Taiwan" }, x: 0.10, y: 0.80, offsetX: 40, offsetY: -8 },
  { id: "cy", country: { es: "Chipre", en: "Cyprus", "pt-br": "Chipre" }, x: 0.06, y: 0.77, offsetX: -35, offsetY: -5 },
  { id: "rs", country: { es: "Serbia", en: "Serbia", "pt-br": "Sérvia" }, x: 0.06, y: 0.75, offsetX: -30, offsetY: -18 },
  { id: "kz", country: { es: "Kazajistán", en: "Kazakhstan", "pt-br": "Cazaquistão" }, x: 0.11, y: 0.76, offsetX: 30, offsetY: -10 },
  { id: "th", country: { es: "Tailandia", en: "Thailand", "pt-br": "Tailândia" }, x: 0.14, y: 0.78, offsetX: 30, offsetY: -18 },
  { id: "ua", country: { es: "Ucrania", en: "Ukraine", "pt-br": "Ucrânia" }, x: 0.10, y: 0.74, offsetX: -35, offsetY: 0 },
  { id: "ro", country: { es: "Rumanía", en: "Romania", "pt-br": "Romênia" }, x: 0.07, y: 0.73, offsetX: 20, offsetY: 15 },
  { id: "ir", country: { es: "Irán", en: "Iran", "pt-br": "Irã" }, x: 0.14, y: 0.73, offsetX: 25, offsetY: -15 },
  { id: "lb", country: { es: "Líbano", en: "Lebanon", "pt-br": "Líbano" }, x: 0.09, y: 0.69, offsetX: -30, offsetY: 15 },
  { id: "kg", country: { es: "Kirguistán", en: "Kyrgyzstan", "pt-br": "Quirguistão" }, x: 0.12, y: 0.68, offsetX: 30, offsetY: 15 },
  { id: "my", country: { es: "Malasia", en: "Malaysia", "pt-br": "Malásia" }, x: 0.12, y: 0.72, offsetX: -35, offsetY: 10 },
  { id: "ph", country: { es: "Filipinas", en: "Philippines", "pt-br": "Filipinas" }, x: 0.14, y: 0.68, offsetX: 30, offsetY: 10 },
  { id: "zw", country: { es: "Zimbabue", en: "Zimbabwe", "pt-br": "Zimbábue" }, x: 0.08, y: 0.67, offsetX: -35, offsetY: 15 },
  { id: "id", country: { es: "Indonesia", en: "Indonesia", "pt-br": "Indonésia" }, x: 0.14, y: 0.67, offsetX: 30, offsetY: 15 },
  { id: "am", country: { es: "Armenia", en: "Armenia", "pt-br": "Armênia" }, x: 0.17, y: 0.71, offsetX: 30, offsetY: -10 },
  { id: "iq", country: { es: "Irak", en: "Iraq", "pt-br": "Iraque" }, x: 0.16, y: 0.69, offsetX: 25, offsetY: 12 },
  { id: "tn", country: { es: "Túnez", en: "Tunisia", "pt-br": "Tunísia" }, x: 0.15, y: 0.65, offsetX: 25, offsetY: 10 },
  { id: "jo", country: { es: "Jordania", en: "Jordan", "pt-br": "Jordânia" }, x: 0.20, y: 0.66, offsetX: 30, offsetY: 15 },
];

const T = {
  es: {
    correlationLabel: "Correlación negativa muy fuerte",
    dirUp: "\u2191 IA más precisa",
    dirUpNote: "(similar a EE.UU.)",
    dirDown: "IA menos precisa \u2193",
    dirDownNote: "(lejano culturalmente)",
    yAxis: "Correlación entre GPT y Humanos",
    xAxis: "Distancia Cultural de Estados Unidos",
    keyFinding: "Hallazgo clave",
    keyFindingDesc: "A mayor distancia cultural con EE.UU., menor es la precisión con la que la IA refleja valores y razonamiento humano local.",
    mexicoLabel: "México en la gráfica",
    mexicoDesc: "México tiene una correlación GPT-humanos de 0.72 vs. 0.85 de países anglosajones \u2014 una brecha del",
    mexicoDescEnd: "que impacta cada respuesta.",
    implication: "Implicación",
    implicationDesc: "Los modelos globales no son culturalmente neutrales; están calibrados para responder como un ciudadano típico de EE.UU.",
  },
  en: {
    correlationLabel: "Very strong negative correlation",
    dirUp: "\u2191 More accurate AI",
    dirUpNote: "(similar to U.S.)",
    dirDown: "Less accurate AI \u2193",
    dirDownNote: "(culturally distant)",
    yAxis: "GPT-Human Correlation",
    xAxis: "Cultural Distance from the United States",
    keyFinding: "Key finding",
    keyFindingDesc: "The greater the cultural distance from the U.S., the less accurately AI reflects local human values and reasoning.",
    mexicoLabel: "Mexico on the chart",
    mexicoDesc: "Mexico has a GPT-human correlation of 0.72 vs. 0.85 for Anglo-Saxon countries \u2014 a",
    mexicoDescEnd: "gap that impacts every response.",
    implication: "Implication",
    implicationDesc: "Global models are not culturally neutral; they are calibrated to respond like a typical U.S. citizen.",
  },
  "pt-br": {
    correlationLabel: "Correlação negativa muito forte",
    dirUp: "\u2191 IA mais precisa",
    dirUpNote: "(similar aos EUA)",
    dirDown: "IA menos precisa \u2193",
    dirDownNote: "(culturalmente distante)",
    yAxis: "Correlação entre GPT e Humanos",
    xAxis: "Distância Cultural dos Estados Unidos",
    keyFinding: "Achado-chave",
    keyFindingDesc: "Quanto maior a distância cultural dos EUA, menor é a precisão com que a IA reflete valores e raciocínio humano local.",
    mexicoLabel: "México no gráfico",
    mexicoDesc: "O México tem uma correlação GPT-humanos de 0,72 vs. 0,85 de países anglo-saxões \u2014 uma lacuna de",
    mexicoDescEnd: "que impacta cada resposta.",
    implication: "Implicação",
    implicationDesc: "Os modelos globais não são culturalmente neutros; estão calibrados para responder como um cidadão típico dos EUA.",
  },
} as const;

export function WeirdBiasChart() {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  // ViewBox dimensions
  const SVG_W = 860;
  const SVG_H = 680;

  const PLOT_X = 200;
  const PLOT_Y = 20;
  const PLOT_W = 660;
  const PLOT_H = 540;

  // Scales
  const getX = (val: number) => PLOT_X + (val / 0.24) * PLOT_W;
  const getY = (val: number) => PLOT_Y + PLOT_H - ((val - 0.6) / 0.3) * PLOT_H;

  const xTicks = [0.00, 0.05, 0.10, 0.15, 0.20];
  const yTicks = [0.6, 0.7, 0.8, 0.9];

  return (
    <LazyMotion features={domAnimation}>
    <div className="flex w-full flex-col p-2">
      {/* Chart Container */}
      <div className="relative w-full">

        <div className="relative aspect-[4/3] w-full max-w-3xl mx-auto sm:aspect-[4/3]">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="h-full w-full overflow-visible">

            {/* Main Axis Border (L-shaped) */}
            <polyline
              points={`${PLOT_X},${PLOT_Y} ${PLOT_X},${PLOT_Y + PLOT_H} ${PLOT_X + PLOT_W},${PLOT_Y + PLOT_H}`}
              className="fill-none stroke-black/20 dark:stroke-white/20"
              strokeWidth="2"
            />

            {/* Shaded Area (Variance) */}
            <polygon
              points={`
                ${getX(0)},${getY(0.89)}
                ${getX(0.24)},${getY(0.66)}
                ${getX(0.24)},${getY(0.55)}
                ${getX(0)},${getY(0.79)}
              `}
              className="fill-black/5 transition-colors duration-500 dark:fill-white/10"
              clipPath="url(#plot-clip)"
            />

            {/* Clip path for bounds */}
            <defs>
              <clipPath id="plot-clip">
                <rect x={PLOT_X} y={PLOT_Y} width={PLOT_W} height={PLOT_H} />
              </clipPath>
            </defs>

            {/* Regression Line */}
            <line
              x1={getX(0)} y1={getY(0.84)}
              x2={getX(0.24)} y2={getY(0.605)}
              className="stroke-black transition-colors duration-500 dark:stroke-white"
              strokeWidth="4"
              clipPath="url(#plot-clip)"
            />

            {/* Correlation coefficient badge */}
            <g>
              <rect
                x={PLOT_X + PLOT_W - 180}
                y={PLOT_Y + 12}
                width={168}
                height={42}
                rx={8}
                className="fill-orange-500/15"
              />
              <text
                x={PLOT_X + PLOT_W - 96}
                y={PLOT_Y + 30}
                textAnchor="middle"
                className="fill-orange-400"
                fontSize="13"
                fontWeight="700"
              >
                r = −0.89 &nbsp; p &lt; 0.001
              </text>
              <text
                x={PLOT_X + PLOT_W - 96}
                y={PLOT_Y + 47}
                textAnchor="middle"
                className="fill-orange-400/70"
                fontSize="11"
              >
                {t.correlationLabel}
              </text>
            </g>

            {/* Top-left directional label */}
            <g>
              <text
                x={PLOT_X + 8}
                y={PLOT_Y + 22}
                textAnchor="start"
                className="fill-black/50 dark:fill-white/50"
                fontSize="12"
                fontStyle="italic"
              >
                {t.dirUp}
              </text>
              <text
                x={PLOT_X + 8}
                y={PLOT_Y + 38}
                textAnchor="start"
                className="fill-black/40 dark:fill-white/40"
                fontSize="11"
              >
                {t.dirUpNote}
              </text>
            </g>

            {/* Bottom-right directional label */}
            <g>
              <text
                x={PLOT_X + PLOT_W - 8}
                y={PLOT_Y + PLOT_H - 18}
                textAnchor="end"
                className="fill-black/50 dark:fill-white/50"
                fontSize="12"
                fontStyle="italic"
              >
                {t.dirDown}
              </text>
              <text
                x={PLOT_X + PLOT_W - 8}
                y={PLOT_Y + PLOT_H - 4}
                textAnchor="end"
                className="fill-black/40 dark:fill-white/40"
                fontSize="11"
              >
                {t.dirDownNote}
              </text>
            </g>

            {/* Y Ticks & Labels */}
            {yTicks.map(val => {
              const y = getY(val);
              return (
                <g key={`y-${val}`}>
                  <line x1={PLOT_X - 6} y1={y} x2={PLOT_X} y2={y} className="stroke-black/20 dark:stroke-white/20" strokeWidth="2" />
                  <text x={PLOT_X - 14} y={y + 5} textAnchor="end" className="fill-black/60 text-[15px] font-semibold dark:fill-white/60">
                    {val.toFixed(1)}
                  </text>
                </g>
              );
            })}

            {/* X Ticks & Labels */}
            {xTicks.map(val => {
              const x = getX(val);
              return (
                <g key={`x-${val}`}>
                  <line x1={x} y1={PLOT_Y + PLOT_H} x2={x} y2={PLOT_Y + PLOT_H + 6} className="stroke-black/20 dark:stroke-white/20" strokeWidth="2" />
                  <text x={x} y={PLOT_Y + PLOT_H + 28} textAnchor="middle" className="fill-black/60 text-[15px] font-semibold dark:fill-white/60">
                    {val.toFixed(2)}
                  </text>
                </g>
              );
            })}

            {/* Axes Titles - Placed completely outside the border box */}
            <text
              x={-(PLOT_Y + PLOT_H/2)}
              y={30}
              transform="rotate(-90)"
              textAnchor="middle"
              className="fill-black font-bold tracking-widest dark:fill-white"
              fontSize="18"
            >
              {t.yAxis}
            </text>

            <text
              x={PLOT_X + PLOT_W/2}
              y={PLOT_Y + PLOT_H + 70}
              textAnchor="middle"
              className="fill-black font-bold tracking-widest dark:fill-white"
              fontSize="18"
            >
              {t.xAxis}
            </text>

            {/* Lines from Dots to Labels */}
            {DATA_POINTS.map(p => {
              const px = getX(p.x);
              const py = getY(p.y);
              const lx = px + p.offsetX;
              const ly = py + p.offsetY;
              const isHovered = hoveredPoint === p.id;
              const isMexico = p.highlight;

              return (
                <line
                  key={`line-${p.id}`}
                  x1={px} y1={py} x2={lx} y2={ly}
                  className={`transition-colors duration-300 ${
                    isMexico ? 'stroke-red-500' : isHovered ? 'stroke-brand-accent-light' : 'stroke-black/20 dark:stroke-white/20'
                  }`}
                  strokeWidth={isMexico || isHovered ? "2" : "1"}
                />
              );
            })}

            {/* Dots and Labels (rendered last to be on top) */}
            {DATA_POINTS.map(p => {
              const px = getX(p.x);
              const py = getY(p.y);
              const lx = px + p.offsetX;
              const ly = py + p.offsetY;
              const isHovered = hoveredPoint === p.id;
              const isMexico = p.highlight;
              const countryName = p.country[locale] ?? p.country.es;

              return (
                <g
                  key={`pt-${p.id}`}
                  onMouseEnter={() => setHoveredPoint(p.id)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  className="cursor-pointer"
                >
                  {/* Dot */}
                  {isMexico && !shouldReduce && (
                    <m.circle
                      cx={px} cy={py}
                      r={12}
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="fill-red-500"
                      style={{ pointerEvents: 'none' }}
                    />
                  )}
                  <m.circle
                    cx={px} cy={py}
                    r={isMexico || isHovered ? 6 : 4}
                    className={`transition-colors duration-300 ${
                      isMexico ? 'fill-red-500' : isHovered ? 'fill-brand-accent-light' : 'fill-brand-midnight/50 dark:fill-brand-white/50'
                    }`}
                  />

                  {/* Label Wrapper via foreignObject to easily center and style HTML */}
                  <foreignObject
                    x={lx - 60} y={ly - 20}
                    width="120" height="40"
                    className={`pointer-events-none transition-all duration-300 ${
                      isHovered || isMexico ? 'z-50' : 'z-10'
                    }`}
                  >
                    <div className="flex h-full w-full items-center justify-center pointer-events-auto">
                      <div
                        className={`rounded-sm border px-2 py-1 text-[13px] font-semibold leading-none shadow-sm backdrop-blur-md transition-colors duration-300 ${
                          isMexico
                            ? 'border-red-500/30 bg-red-500/10 text-red-600 dark:bg-red-500/10 dark:text-red-400 font-bold'
                            : isHovered
                              ? 'border-brand-accent bg-brand-white dark:bg-brand-surface dark:bg-brand-midnight text-brand-accent dark:bg-brand-deep dark:text-brand-accent-light'
                              : 'border-brand-midnight/15 bg-brand-white dark:bg-brand-midnight/90 text-brand-midnight/70 dark:border-brand-white/15 dark:bg-brand-deep/90 dark:text-brand-white/70'
                        }`}
                      >
                        {countryName}
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Interpretation cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.07] px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-400">{t.keyFinding}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/10">
            {t.keyFindingDesc}
          </p>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/[0.07] px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400">{t.mexicoLabel}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/10">
            {t.mexicoDesc} <strong className="text-red-400">15%</strong> {t.mexicoDescEnd}
          </p>
        </div>
        <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/[0.07] px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-accent">{t.implication}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/10">
            {t.implicationDesc}
          </p>
        </div>
      </div>

    </div>
    </LazyMotion>
  );
}
