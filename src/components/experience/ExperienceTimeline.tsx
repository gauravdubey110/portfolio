import React, { useState } from 'react';
import { experienceData } from '../../data/experience';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Briefcase, Calendar, CheckCircle2, ChevronDown, ChevronUp, Cpu, Server } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'sde-2': true,
    'sde-1': true,
  });

  const toggleRole = (id: string) => {
    setExpandedRoles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <SectionContainer
      id="experience"
      badge="Career Track"
      badgeVariant="indigo"
      title="Engineering Experience & Impact"
      subtitle="Track record of designing, scaling, and maintaining mission-critical distributed systems and event-driven backends."
    >
      <div className="space-y-6 relative">
        {/* Continuous Timeline Line (Desktop) */}
        <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-zinc-800 pointer-events-none" />

        {experienceData.map((role) => {
          const isExpanded = !!expandedRoles[role.id];

          return (
            <div key={role.id} className="relative lg:pl-16">
              {/* Timeline Dot (Desktop) */}
              <div className={`hidden lg:flex absolute left-[26px] top-6 w-3 h-3 rounded-full border-2 -translate-x-1/2 items-center justify-center ${
                role.isCurrent
                  ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                  : 'bg-indigo-400 border-indigo-300'
              }`} />

              <Card className="overflow-hidden p-5 sm:p-6">
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-surface-border">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {role.title}
                      </h3>
                      {role.isCurrent && (
                        <Badge variant="emerald" dot size="sm">
                          Current Role
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                        <Briefcase className="w-3.5 h-3.5" />
                        {role.company}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {role.period}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Accordion Button */}
                  <button
                    type="button"
                    onClick={() => toggleRole(role.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-surface-elevated hover:bg-zinc-800 text-zinc-200 border border-surface-border hover:border-zinc-600 transition-colors self-start md:self-auto"
                  >
                    <span>{isExpanded ? 'Hide Details' : 'View All Scope'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Summary Statement */}
                <p className="mt-3.5 text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                  {role.summary}
                </p>

                {/* Key Metrics Pills */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {role.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#090c12] text-zinc-200 border border-surface-border flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Expanded Bullet Points */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2.5">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                      Key Technical Contributions & Architectural Scope
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {role.coreHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 leading-relaxed bg-[#0a0d14]/70 p-3 rounded-lg border border-surface-border">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Note */}
                    {role.architectureNotes && (
                      <div className="mt-3.5 p-3 rounded-lg bg-cyan-950/20 border border-cyan-900/40 text-xs font-mono text-cyan-200 flex items-start gap-2.5">
                        <Server className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-cyan-400 uppercase">Architecture Context: </span>
                          <span>{role.architectureNotes}</span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="mt-3.5 pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono text-zinc-400 mr-1.5 flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5" /> Stack:
                      </span>
                      {role.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};
