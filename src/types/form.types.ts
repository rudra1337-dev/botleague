export type SignupRole = "judge" | "volunteer" | "member";

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  required: boolean;
  placeholder?: string;
}

/** Keyed by each field's `name` — a 3-field lead form doesn't justify per-role strict interfaces. */
export type SignupFormState = Record<string, string>;

export type SignupFormStatus = "idle" | "submitting" | "success" | "error";
