import React, { useState } from 'react';
import { engineeringPrinciples } from '../../data/principles';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { ShieldCheck, Layers, Zap, Activity, ArrowRight, Check } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Layers,
  Zap,
  Activity,
};

export const PrinciplesSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(engineeringPrinciples[0].id);

  const selectedPillar = engineeringPrinciples.find(p => p.id === selectedPillarId) || engineeringPrinciples[0];
  const IconComponent = iconMap[selectedPillar.iconName] || ShieldCheck;

  return (
    <SectionContainer
      id="principles"
      badge="Systems Thinking"
      badgeVariant="emerald"
      title="How I Think About Systems"
      subtitle="Core principles applied across distributed architecture, performance engineering, fault tolerance, and team velocity."
    >
      {/* 4 Pillar Navigation Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {engineeringPrinciples.map((principle) => {
          const Icon = iconMap[principle.iconName] || ShieldCheck;
          const isSelected = selectedPillarId === principle.id;

          return (
            <button
              key={principle.id}
              type="button"
              onClick={() => setSelectedPillarId(principle.id)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-surface-elevated border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.12)] text-white'
                  : 'bg-surface border-surface-border text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-emerald-400' : 'text-zinc-500'}`} />
              <div className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                {principle.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Detail Card */}
      <Card className="p-5 sm:p-7">
        <div className="flex items-start gap-3.5 pb-5 border-b border-surface-border">
          <div className="p-2.5 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 flex-shrink-0">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {selectedPillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed max-w-3xl font-normal">
              {selectedPillar.coreConcept}
            </p>
          </div>
        </div>

        {/* 3 Core Practices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {selectedPillar.practices.map((practice, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[#090c12] border border-surface-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-white mb-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{practice.name}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {practice.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-emerald-400/90 flex items-start gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>{practice.grounding}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </SectionContainer>
  );
};
