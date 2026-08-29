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
    <section id={id} className={`py-10 md:py-16 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          {badge && (
            <div className="mb-2.5">
              <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                badgeVariant === 'cyan' ? 'bg-cyan-950/50 text-cyan-400 border-cyan-800/40' :
                badgeVariant === 'emerald' ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/40' :
                badgeVariant === 'indigo' ? 'bg-indigo-950/50 text-indigo-400 border-indigo-800/40' :
                badgeVariant === 'amber' ? 'bg-amber-950/50 text-amber-400 border-amber-800/40' :
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
            <p className="mt-2.5 text-sm sm:text-base text-zinc-300 max-w-3xl font-normal leading-relaxed">
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
