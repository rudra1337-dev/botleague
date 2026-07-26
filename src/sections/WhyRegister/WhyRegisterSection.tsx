import { benefitItems } from "@/data/whyRegister";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { LeaderboardWidget } from "./LeaderboardWidget";

export function WhyRegisterSection() {
  return (
    <section
      aria-labelledby="why-register-heading"
      className="py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            id="why-register-heading"
            eyebrow="Why Register?"
            title="The League Advantage"
          />
          <div className="flex flex-col gap-6">
            {benefitItems.map((item) => (
              <FeatureItem key={item.id} {...item} variant="plain-icon" />
            ))}
          </div>
        </div>
        <div className="flex items-start lg:items-center">
          <LeaderboardWidget />
        </div>
      </div>
    </section>
  );
}
