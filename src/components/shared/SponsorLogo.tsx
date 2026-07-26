import { ImageIcon } from "lucide-react";
import type { SponsorItem } from "@/types";

export function SponsorLogo({ name, logoSrc }: SponsorItem) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 grayscale opacity-70 transition-all duration-150 hover:grayscale-0 hover:opacity-100 motion-reduce:transition-none">
      {logoSrc ? (
        <img src={logoSrc} alt={name} loading="lazy" className="h-10 w-auto" />
      ) : (
        // PLACEHOLDER — replace by setting `logoSrc` in src/data/sponsors.ts
        // to a real exported logo (e.g. src/assets/images/sponsors/nit-delhi.svg).
        <div
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-text-muted"
        >
          <ImageIcon className="h-4 w-4" />
        </div>
      )}
      <span className="text-center text-xs font-medium text-text-secondary">{name}</span>
    </div>
  );
}
