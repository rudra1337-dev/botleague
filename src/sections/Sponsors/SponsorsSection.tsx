import { sponsorItems } from "@/data/sponsors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SponsorLogo } from "@/components/shared/SponsorLogo";

export function SponsorsSection() {
  return (
    <section aria-labelledby="sponsors-heading" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="sponsors-heading" title="Sponsors" align="left" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {sponsorItems.map((item) => (
            <SponsorLogo key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
