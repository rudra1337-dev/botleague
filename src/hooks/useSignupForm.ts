import { useCallback, useState } from "react";
import type { FormFieldConfig, SignupFormState, SignupFormStatus } from "@/types";
import { validateSignupForm } from "@/utils/validation";

interface UseSignupFormResult {
  values: SignupFormState;
  errors: Record<string, string>;
  status: SignupFormStatus;
  handleChange: (name: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

/**
 * Encapsulates field state + validation + a simulated submit lifecycle for one
 * signup form instance. No state here is shared between instances — each
 * SignupForm calling this hook gets its own fully isolated state.
 */
export function useSignupForm(fields: FormFieldConfig[]): UseSignupFormResult {
  const initialValues = Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState<SignupFormState>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SignupFormStatus>("idle");

  const handleChange = useCallback((name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validateSignupForm(fields, values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        setStatus("error");
        return;
      }

      setStatus("submitting");
      // No backend exists (frontend-only assignment) — this brief delay
      // simulates a real submission so the interaction feels genuine rather
      // than instantaneous-and-suspicious, per the implementation plan.
      window.setTimeout(() => {
        setStatus("success");
      }, 500);
    },
    [fields, values]
  );

  return { values, errors, status, handleChange, handleSubmit };
}
