import type { Metadata } from "next";
import { NotFoundContent } from "@/components/shared/NotFoundContent";

export const metadata: Metadata = {
  title: "404 — Página no encontrada | Sintérgica AI",
  description:
    "La página que buscas no existe o fue movida. Vuelve al inicio o explora las soluciones, industrias y recursos de Sintérgica AI.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
