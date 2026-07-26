import { ecosystemRoles } from "@/data/ecosystemForms";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignupForm } from "./SignupForm";

export function EcosystemSection() {
  return (
    <section
      aria-labelledby="ecosystem-heading"
      className="bg-surface-raised/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="ecosystem-heading" title="Join the Ecosystem" />
        <div className="grid gap-6 md:grid-cols-3">
          {ecosystemRoles.map(({ role, title }) => (
            <SignupForm key={role} role={role} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}
