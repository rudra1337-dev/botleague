import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  tone?: "red" | "gold" | "neutral";
  pulse?: boolean;
  className?: string;
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  red: "bg-brand-red/15 text-brand-red border-brand-red/30",
  gold: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
  neutral: "bg-surface-raised-2 text-text-secondary border-surface-border",
};

export function Badge({ children, tone = "red", pulse, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {pulse && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-current motion-safe:animate-pulse"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
