import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        variant === 'primary' && 'bg-emerald-700 text-white shadow-[0_12px_30px_rgba(5,80,52,0.18)] hover:bg-emerald-800',
        variant === 'secondary' && 'border border-emerald-200 bg-white text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50',
        variant === 'ghost' && 'bg-transparent text-emerald-800 hover:bg-emerald-50',
        size === 'sm' && 'px-3 py-2 text-sm',
        size === 'md' && 'px-4 py-3 text-sm',
        size === 'lg' && 'px-6 py-3.5 text-base',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
