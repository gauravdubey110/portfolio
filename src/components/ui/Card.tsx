import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl bg-surface p-5 md:p-6 border border-surface-border transition-all duration-200 ${
        glow ? 'hover:border-accent-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]' : 'hover:border-zinc-700'
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
