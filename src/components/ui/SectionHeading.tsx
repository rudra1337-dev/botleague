import clsx from "clsx";

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold uppercase tracking-tight text-text-primary md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
