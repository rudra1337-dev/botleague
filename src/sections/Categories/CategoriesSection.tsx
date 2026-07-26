import { categoryItems } from "@/data/categories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureItem } from "@/components/shared/FeatureItem";

export function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="bg-surface-raised/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="categories-heading" title="Categories" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryItems.map((item) => (
            <FeatureItem key={item.id} {...item} variant="icon-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
