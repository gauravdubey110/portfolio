import React from 'react';

interface SectionContainerProps {
  id: string;
  badge?: string;
  badgeVariant?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'neutral';
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  badge,
  badgeVariant = 'cyan',
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          {badge && (
            <div className="mb-3">
              <span className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border ${
                badgeVariant === 'cyan' ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800/40' :
                badgeVariant === 'emerald' ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40' :
                badgeVariant === 'indigo' ? 'bg-indigo-950/40 text-indigo-400 border-indigo-800/40' :
                badgeVariant === 'amber' ? 'bg-amber-950/40 text-amber-400 border-amber-800/40' :
                'bg-zinc-900/50 text-zinc-400 border-zinc-800'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-3xl font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
};
