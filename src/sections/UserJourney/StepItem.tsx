import type { JourneyStep } from "@/types";

export function StepItem({ step, isLast }: { step: JourneyStep; isLast: boolean }) {
  const Icon = step.icon;
  return (
    <li className="relative flex flex-1 flex-col items-center text-center md:flex-row md:text-left">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-6 top-14 h-full w-px bg-surface-border md:left-full md:top-6 md:h-px md:w-full"
        />
      )}
      <div className="relative z-10 flex flex-col items-center gap-3 md:flex-1">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-red/40 bg-surface-raised text-brand-red">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">
            Step {step.stepNumber}
          </p>
          <p className="mt-1 text-sm font-semibold text-text-primary">{step.title}</p>
        </div>
      </div>
    </li>
  );
}
