"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import Image from "next/image";

const CLOUD_PROVIDERS = [
  { name: "AWS", src: "/images/badges/VPS-1.jpg" },
  { name: "Microsoft Azure", src: "/images/badges/VPS-2.png" },
  { name: "Google Cloud", src: "/images/badges/VPS-3.png" },
  { name: "Oracle Cloud", src: "/images/badges/VPS-1.jpg" }, // Reuse or use text if no logo
  { name: "On-Premise", src: "/images/badges/VPS-4.jpg" },
  { name: "IBM Cloud", src: "/images/badges/VPS-2.png" }, // Placeholder
];

// Duplicate for infinite scroll effect
const CAROUSEL_ITEMS = [...CLOUD_PROVIDERS, ...CLOUD_PROVIDERS, ...CLOUD_PROVIDERS];

export function CloudLogosCarousel() {
  return (
    <LazyMotion features={domAnimation}>
    <div className="w-full overflow-hidden flex flex-col items-center justify-center py-10 opacity-80">
      <p className="text-sm font-medium text-slate-500 mb-8 text-center">
        Compatible con los proveedores de nube más usados en México y On-Premise
      </p>
      
      <div className="relative w-full max-w-5xl mx-auto flex overflow-hidden mask-image-linear-gradient">
        {/* Gradient masks for smooth fade effect at the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        
        <m.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-12 sm:gap-20 items-center whitespace-nowrap pl-10"
        >
          {CAROUSEL_ITEMS.map((provider, i) => (
            <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <div className="relative w-10 h-10 overflow-hidden rounded-md bg-white shadow-sm border border-slate-200">
                <Image 
                  src={provider.src} 
                  alt={provider.name} 
                  fill 
                  className="object-cover" 
                  sizes="40px" 
                />
              </div>
              <span className="font-semibold text-slate-700 text-lg tracking-tight">{provider.name}</span>
            </div>
          ))}
        </m.div>
      </div>
    </div>
    </LazyMotion>
  );
}
