import { journeySteps } from "@/data/journeySteps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepItem } from "./StepItem";

export function UserJourneySection() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="bg-surface-raised/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="journey-heading"
          eyebrow="User Journey"
          title="Your Path to the League"
          align="center"
        />
        <ol className="flex flex-col gap-10 md:flex-row md:gap-4">
          {journeySteps.map((step, i) => (
            <StepItem key={step.stepNumber} step={step} isLast={i === journeySteps.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
