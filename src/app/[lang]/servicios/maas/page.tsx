import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MaaSContent } from "@/components/servicios/MaaSContent";

export const metadata: Metadata = {
  title: "Marketing As A Service (MaaS) | Sintérgica AI",
  description:
    "Evoluciona tu marketing con inteligencia artificial agéntica. Desde automatización de ventas con SalesHub, hasta agentes de gestión de campañas y diseño impulsado por IA.",
};

export default function MaaSPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <MaaSContent />
      </main>
      <Footer />
    </div>
  );
}
