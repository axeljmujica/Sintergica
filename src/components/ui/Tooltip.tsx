import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

/**
 * Pure CSS tooltip — no JS, no dependency, uses group-hover.
 * Wrap a parent with `group/tooltip` class if needed, or use this as a standalone wrapper.
 */
export function Tooltip({ content, children, side = "top", className }: TooltipProps) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-brand-midnight/90 dark:border-t-brand-white/90 border-l-transparent border-r-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-brand-midnight/90 dark:border-b-brand-white/90 border-l-transparent border-r-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-brand-midnight/90 dark:border-l-brand-white/90 border-t-transparent border-b-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 border-r-brand-midnight/90 dark:border-r-brand-white/90 border-t-transparent border-b-transparent border-l-transparent",
  };

  return (
    <div className="group/tt relative inline-flex items-center justify-center">
      {children}
      <div
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium shadow-md",
          "bg-brand-midnight/90 text-brand-white dark:bg-brand-white/90 dark:text-brand-midnight",
          "opacity-0 transition-opacity duration-150 group-hover/tt:opacity-100",
          positionClasses[side],
          className
        )}
      >
        {content}
        {/* Arrow */}
        <span
          className={cn(
            "absolute h-0 w-0 border-4",
            arrowClasses[side]
          )}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
