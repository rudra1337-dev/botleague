import type { FormFieldConfig } from "@/types";

interface FormFieldProps {
  field: FormFieldConfig;
  value: string;
  error?: string;
  idPrefix: string;
  onChange: (name: string, value: string) => void;
}

export function FormField({ field, value, error, idPrefix, onChange }: FormFieldProps) {
  const inputId = `${idPrefix}-${field.name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-text-secondary">
        {field.label}
        {field.required && (
          <span aria-hidden="true" className="ml-0.5 text-brand-red">
            *
          </span>
        )}
        {field.required && <span className="sr-only"> (required)</span>}
      </label>
      <input
        id={inputId}
        name={field.name}
        type={field.type}
        required={field.required}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => onChange(field.name, e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="rounded-md border border-surface-border bg-surface-raised-2 px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
      />
      {error && (
        <p id={errorId} className="text-xs text-brand-red">
          {error}
        </p>
      )}
    </div>
  );
}
