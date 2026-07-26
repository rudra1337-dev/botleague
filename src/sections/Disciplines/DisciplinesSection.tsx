import { disciplineItems } from "@/data/disciplines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DisciplineCard } from "@/components/shared/DisciplineCard";

export function DisciplinesSection() {
  return (
    <section aria-labelledby="disciplines-heading" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="disciplines-heading"
          eyebrow="Sports"
          title="Competition Disciplines"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {disciplineItems.map((item) => (
            <DisciplineCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
