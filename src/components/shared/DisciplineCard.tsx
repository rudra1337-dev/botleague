import { ImageIcon } from "lucide-react";
import type { DisciplineItem } from "@/types";

export function DisciplineCard({ title, imageSrc, imageAlt, id }: DisciplineItem) {
  return (
    <div
      id={id}
      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-surface-border bg-surface-raised-2"
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
      ) : (
        // PLACEHOLDER — replace by setting `imageSrc` in src/data/disciplines.ts
        // to a real exported photo (e.g. src/assets/images/disciplines/robo-race.jpg).
        <div
          role="img"
          aria-label={imageAlt}
          className="flex h-full w-full flex-col items-center justify-center gap-2 text-text-muted transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
        >
          <ImageIcon className="h-8 w-8" aria-hidden="true" />
          <span className="text-[10px] uppercase tracking-wide">Add image</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <h3 className="pointer-events-none absolute bottom-3 left-4 right-4 text-sm font-semibold text-white">
        {title}
      </h3>
    </div>
  );
}
