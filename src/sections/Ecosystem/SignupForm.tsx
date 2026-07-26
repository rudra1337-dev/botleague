import { signupFieldConfig } from "@/data/ecosystemForms";
import type { SignupRole } from "@/types";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { useSignupForm } from "@/hooks/useSignupForm";

interface SignupFormProps {
  role: SignupRole;
  title: string;
}

export function SignupForm({ role, title }: SignupFormProps) {
  const { values, errors, status, handleChange, handleSubmit } =
    useSignupForm(signupFieldConfig);
  const headingId = `signup-${role}-heading`;

  return (
    <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
      <h3 id={headingId} className="mb-5 text-sm font-semibold uppercase tracking-wide text-text-primary">
        {title}
      </h3>

      {status === "success" ? (
        <p aria-live="polite" className="text-sm text-text-secondary">
          Thanks — we&rsquo;ll be in touch!
        </p>
      ) : (
        <form aria-labelledby={headingId} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {signupFieldConfig.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={values[field.name] ?? ""}
              error={errors[field.name]}
              idPrefix={`signup-${role}`}
              onChange={handleChange}
            />
          ))}
          <Button type="submit" variant="primary" disabled={status === "submitting"} className="w-full">
            {status === "submitting" ? "Submitting…" : "Sign Up"}
          </Button>
        </form>
      )}
    </div>
  );
}
