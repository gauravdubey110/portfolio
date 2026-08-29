import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
  dot = false,
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-950/50 text-cyan-400 border-cyan-800/50',
    emerald: 'bg-emerald-950/50 text-emerald-400 border-emerald-800/50',
    indigo: 'bg-indigo-950/50 text-indigo-400 border-indigo-800/50',
    amber: 'bg-amber-950/50 text-amber-400 border-amber-800/50',
    neutral: 'bg-zinc-900/70 text-zinc-300 border-zinc-800',
  };

  const dotColors = {
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    indigo: 'bg-indigo-400',
    amber: 'bg-amber-400',
    neutral: 'bg-zinc-400',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs md:text-sm px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full border tracking-wide uppercase ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
};
