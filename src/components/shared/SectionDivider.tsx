import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "glow" | "dots" | "wave";
  className?: string;
}

export function SectionDivider({ variant = "glow", className }: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center py-4", className)} aria-hidden="true">
        <span className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1 w-1 rounded-full bg-brand-accent/30"
            />
          ))}
        </span>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={cn("overflow-hidden py-2", className)} aria-hidden="true">
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="w-full h-8 text-brand-accent/20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,20 C180,35 360,5 540,20 C720,35 900,5 1080,20 C1260,35 1350,10 1440,20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Default: glow line
  return (
    <div
      className={cn("divider-glow mx-auto max-w-5xl", className)}
      aria-hidden="true"
    />
  );
}
