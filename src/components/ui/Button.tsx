import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  loading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-2xl
    transition-all duration-150 touch-target
    active:scale-[0.97] active:opacity-90
    disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100
  `.trim().replace(/\s+/g, ' ');

  const variants = {
    primary: 'bg-[var(--color-primary)] text-black hover:brightness-110',
    secondary: 'bg-[var(--color-surface-elevated)] text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-border)]',
    ghost: 'bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface)]',
    danger: 'bg-[var(--color-error)] text-white hover:brightness-110'
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm min-h-[40px]',
    md: 'px-5 py-3 text-base min-h-[48px]',
    lg: 'px-6 py-4 text-lg min-h-[56px]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 size={20} className="animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
}
