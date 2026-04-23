import type { Metadata } from "next";
import localFont from "next/font/local";
import { Mulish } from "next/font/google";
import { NotFoundContent } from "@/components/shared/NotFoundContent";
import "./globals.css";

const proximaNova = localFont({
  src: [
    { path: "../../public/fonts/ProximaNova-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/ProximaNova-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Proxima Nova Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/ProximaNova-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-proxima",
  display: "swap",
});

const gilroy = localFont({
  src: [
    { path: "../../public/fonts/Gilroy-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Gilroy-Extrabold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Página no encontrada | Sintérgica AI",
  description:
    "La página que buscas no existe o fue movida. Vuelve al inicio o explora las soluciones, industrias y recursos de Sintérgica AI.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="es" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${proximaNova.variable} ${gilroy.variable} ${mulish.variable} antialiased bg-brand-midnight text-brand-white`}>
        <NotFoundContent />
      </body>
    </html>
  );
}
