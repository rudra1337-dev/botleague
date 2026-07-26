import { Settings2 } from "lucide-react";
import { aboutItems } from "@/data/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureItem } from "@/components/shared/FeatureItem";

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="about-heading" title="What is BotLeague?" />
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-[2fr_1fr]">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {aboutItems.map((item) => (
              <FeatureItem key={item.id} {...item} variant="numbered" />
            ))}
          </div>

          {/* PLACEHOLDER — replace with the real decorative illustration
              exported from Figma. Hidden below md to match the mobile
              export, which doesn't show this graphic. */}
          <div
            aria-hidden="true"
            className="hidden items-center justify-center rounded-xl border border-dashed border-surface-border bg-surface-raised-2 text-text-muted md:flex"
          >
            <Settings2 className="h-16 w-16" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
