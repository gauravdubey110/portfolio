import React from 'react';
import { engineeringMetrics } from '../../data/metrics';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';

export const MetricsGrid: React.FC = () => {
  return (
    <SectionContainer
      id="impact"
      badge="Production Telemetry"
      badgeVariant="emerald"
      title="Scale & Impact by the Numbers"
      subtitle="Measurable architectural outcomes achieved in high-throughput distributed systems, large-scale data migrations, and production pipelines."
    >
      {/* High-Impact 6-Metric Telemetry Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {engineeringMetrics.map((metric) => (
          <Card
            key={metric.id}
            glow={metric.highlight}
            className="flex flex-col justify-between p-5"
          >
            <div>
              <div className="flex items-center justify-between mb-2 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                <span className="text-zinc-500">{metric.category}</span>
                {metric.highlight && (
                  <span className="text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40 text-[10px]">
                    Verified Metric
                  </span>
                )}
              </div>

              {/* Metric Value */}
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono my-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {metric.value}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-zinc-100 mt-1">
                {metric.label}
              </h3>
            </div>

            <p className="text-xs text-zinc-300 mt-3 pt-3 border-t border-zinc-800/80 leading-relaxed font-sans">
              {metric.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};
