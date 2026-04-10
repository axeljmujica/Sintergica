import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-mulish font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-accent text-white rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/25 btn-glow",
        secondary:
          "border border-brand-accent/30 text-brand-accent bg-transparent rounded-full px-6 py-3 hover:bg-brand-accent/10",
        ghost:
          "text-current hover:bg-brand-midnight/5 dark:hover:bg-brand-white/5 rounded-lg px-4 py-2",
        outline:
          "border-2 border-brand-midnight/20 dark:border-brand-white/20 text-brand-midnight dark:text-brand-white bg-transparent rounded-full px-6 py-3 hover:border-brand-accent hover:text-brand-accent dark:hover:border-brand-accent dark:hover:text-brand-accent",
        danger:
          "bg-danger-600 text-white rounded-full px-6 py-3 hover:bg-danger-600/90 hover:shadow-lg hover:shadow-danger-600/25 hover:-translate-y-0.5",
        link:
          "text-brand-accent underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-3",
        lg: "text-lg px-8 py-4",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${buttonVariants({ variant, size })} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
