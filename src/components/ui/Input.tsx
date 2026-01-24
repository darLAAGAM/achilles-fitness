import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  suffix?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, suffix, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              w-full bg-[var(--color-surface-elevated)]
              border border-[var(--color-border)] rounded-2xl
              px-4 py-4 text-base text-[var(--color-text)]
              placeholder:text-[var(--color-text-secondary)]/50
              focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20
              active:scale-[0.995] transition-all
              ${suffix ? 'pr-14' : ''}
              ${error ? 'border-[var(--color-error)] focus:border-[var(--color-error)]' : ''}
              ${className}
            `.trim().replace(/\s+/g, ' ')}
            {...props}
          />
          {suffix && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] text-sm font-medium">
              {suffix}
            </span>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
