import type { SponsorItem } from "@/types";

export function SponsorLogo({ name, logoSrc }: SponsorItem) {
  return (
    <div className="flex items-center gap-6 rounded-xl p-8 min-h-[140px] transition-all duration-200 hover:bg-surface-raised-2 hover:shadow-md">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={name}
          loading="lazy"
          className="h-35 w-35 object-contain flex-shrink-0"
        />
      ) : (
        <div
          aria-hidden="true"
          className="text-xl md:text-2xl font-bold text-text-primary leading-snug"
        >
          {name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)}
        </div>
      )}

      <span className="text-lg font-semibold text-text-primary leading-snug">
        {name}
      </span>
    </div>
  );
}