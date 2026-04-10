import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FineTuningContent } from "@/components/servicios/FineTuningContent";

export const metadata: Metadata = {
  title: "Fine-Tuning Privado con Lattice Séeb | Sintérgica AI",
  description:
    "Especializa los SLM Lattice Séeb con tus datos propietarios. Modelos expertos, rápidos y ligeros para IA agéntica. Entrenamiento on-premise, datos nunca expuestos. Cumplimiento LFPDPPP.",
};

export default function FineTuningPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <FineTuningContent />
      </main>
      <Footer />
    </div>
  );
}
