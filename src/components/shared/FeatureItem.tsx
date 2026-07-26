import clsx from "clsx";
import type { FeatureItemData } from "@/types";

interface FeatureItemProps extends FeatureItemData {
  variant: "numbered" | "icon-card" | "plain-icon";
}

/**
 * One flexible primitive powering 3 visually-similar-but-not-identical
 * sections (What is BotLeague, Categories, Why Register) rather than three
 * separate near-copies. `variant` controls layout/emphasis differences; see
 * Phase 3 for the reasoning.
 */
export function FeatureItem({
  icon: Icon,
  number,
  title,
  description,
  href,
  featured,
  variant,
}: FeatureItemProps) {
  const content = (
    <>
      {variant === "numbered" && number !== undefined && (
        <span className="mb-3 block text-2xl font-bold text-brand-red">
          {String(number).padStart(2, "0")}
        </span>
      )}

      {variant !== "numbered" && Icon && (
        <span
          className={clsx(
            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg",
            variant === "icon-card"
              ? featured
                ? "bg-brand-gold/15 text-brand-gold"
                : "bg-surface-raised-2 text-brand-red"
              : "bg-transparent text-brand-red"
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
      )}

      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>

      {href && (
        <span className="mt-3 inline-block text-sm font-semibold text-brand-red transition-colors group-hover:text-brand-red-hover">
          Learn More →
        </span>
      )}
    </>
  );

  const wrapperClasses = clsx(
    "group rounded-xl p-6 transition-all duration-150 motion-reduce:transition-none",
    variant === "icon-card" &&
      clsx(
        "border bg-surface-raised hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0",
        featured
          ? "border-brand-gold/40"
          : "border-surface-border hover:border-text-secondary"
      ),
    variant !== "icon-card" && "border border-transparent"
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={`Learn more about ${title}`}
        className={clsx(
          wrapperClasses,
          "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
        )}
      >
        {content}
      </a>
    );
  }

  return <div className={wrapperClasses}>{content}</div>;
}
