import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-brand-midnight/[0.07] bg-brand-white dark:bg-brand-deep/60 shadow-sm hover:shadow-md dark:border-brand-accent/10 dark:backdrop-blur-md dark:hover:border-brand-accent/25",
        glass:
          "glass hover:border-brand-white/10",
        "glass-light":
          "glass-light hover:border-brand-midnight/10",
        elevated:
          "border-transparent bg-brand-white dark:bg-brand-navy shadow-md hover:shadow-lg dark:hover:border-brand-white/10",
        accent:
          "border-brand-accent/20 bg-brand-accent/5 dark:bg-brand-accent/10 hover:border-brand-accent/35",
        outline:
          "border-brand-midnight/15 dark:border-brand-white/15 bg-transparent hover:border-brand-accent/30",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-8 lg:p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className, variant, padding }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, padding }), className)}>
      {children}
    </div>
  );
}

export { cardVariants };
