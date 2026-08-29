import React, { useState } from 'react';
import { engineeringMetrics } from '../../data/metrics';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Zap, Shield, Layers, Gauge, Cpu } from 'lucide-react';

export const MetricsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Telemetry', icon: Gauge },
    { id: 'throughput', label: 'Throughput', icon: Zap },
    { id: 'scale', label: 'Scale & Migration', icon: Layers },
    { id: 'reliability', label: 'Reliability', icon: Shield },
    { id: 'velocity', label: 'Velocity & Testing', icon: Cpu },
  ];

  const filteredMetrics = activeFilter === 'all'
    ? engineeringMetrics
    : engineeringMetrics.filter(m => m.category === activeFilter);

  return (
    <SectionContainer
      id="impact"
      badge="Engineering Telemetry"
      badgeVariant="emerald"
      title="Impact & Scalability By The Numbers"
      subtitle="Measurable architectural outcomes achieved in production distributed environments, high-throughput pipelines, and large-scale data migrations."
    >
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                isActive
                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-semibold shadow-sm'
                  : 'bg-surface text-zinc-400 hover:text-zinc-200 border border-surface-border hover:border-zinc-700'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredMetrics.map((metric) => (
          <Card
            key={metric.id}
            glow={metric.highlight}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                <span>{metric.category}</span>
                {metric.highlight && (
                  <span className="text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                    High Impact
                  </span>
                )}
              </div>

              {/* Large Metric Value */}
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono my-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {metric.value}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-zinc-100 mt-2">
                {metric.label}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 mt-3 pt-3 border-t border-zinc-800/80 leading-relaxed">
              {metric.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};
