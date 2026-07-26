import { aboutItems } from "@/data/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureItem } from "@/components/shared/FeatureItem";
import aboutIllustration from "@/assets/images/about/about-illustration.png";

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

          <div
            aria-hidden="true"
            className="hidden items-center justify-center md:flex"
          >
            <img
              src={aboutIllustration}
              alt=""
              className="h-auto w-full max-w-md object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
