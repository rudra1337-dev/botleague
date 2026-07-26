import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-hover focus-visible:ring-brand-red",
  secondary:
    "bg-surface-raised-2 text-text-primary hover:bg-surface-border focus-visible:ring-surface-border",
  outline:
    "bg-transparent text-text-primary border border-surface-border hover:border-text-secondary focus-visible:ring-text-secondary",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
        "transition-transform duration-150 motion-reduce:transition-none",
        "hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
        "disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
