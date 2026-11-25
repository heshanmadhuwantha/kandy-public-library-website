import type { FieldError } from 'react-hook-form';
import { cloneElement, isValidElement, type ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  error?: FieldError;
  children: ReactNode;
  required?: boolean;
}

export function FormField({ label, name, error, children, required = false }: FormFieldProps) {
  const child = isValidElement<{ 'aria-invalid'?: boolean; 'aria-describedby'?: string }>(children)
    ? cloneElement(children, {
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? `${name}-error` : undefined,
      })
    : children;
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="ml-1 text-rose-500">*</span> : null}
      </label>
      {child}
      {error ? <p id={`${name}-error`} className="text-sm text-rose-600" role="alert">{error.message}</p> : null}
    </div>
  );
}
