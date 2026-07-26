import type { FormFieldConfig, SignupFormState } from "@/types";

/** Returns a map of field name -> error message, empty when the form is valid. */
export function validateSignupForm(
  fields: FormFieldConfig[],
  values: SignupFormState
): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const field of fields) {
    const value = values[field.name]?.trim() ?? "";

    if (field.required && value.length === 0) {
      errors[field.name] = `${field.label} is required.`;
      continue;
    }

    if (field.type === "email" && value.length > 0) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errors[field.name] = "Enter a valid email address.";
      }
    }
  }

  return errors;
}
