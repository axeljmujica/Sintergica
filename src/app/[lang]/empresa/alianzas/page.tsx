import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { AlianzasContent } from "@/components/empresa/AlianzasContent";

export const metadata: Metadata = {
  title: "Alianzas Estratégicas | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Alianzas tecnológicas, académicas, gubernamentales y de canal. Construyendo el ecosistema de IA de LATAM con socios estratégicos.",
};

export default function AlianzasPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <AlianzasContent />
      </main>
      <Footer />
    </div>
  );
}
