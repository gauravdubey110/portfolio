import React, { useState } from 'react';
import { caseStudiesData } from '../../data/caseStudies';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CheckCircle2, AlertTriangle, Cpu, ArrowRight, Server, Sparkles } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [activeStudyId, setActiveStudyId] = useState<string>(caseStudiesData[0].id);

  const activeStudy = caseStudiesData.find(c => c.id === activeStudyId) || caseStudiesData[0];

  return (
    <SectionContainer
      id="case-studies"
      badge="Engineering Case Studies"
      badgeVariant="cyan"
      title="System Architecture & Deep Dives"
      subtitle="Engineering stories highlighting core architectural trade-offs, scalability bottlenecks, and verified outcomes."
    >
      {/* Case Study Tab Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {caseStudiesData.map((study, idx) => {
          const isSelected = activeStudyId === study.id;
          return (
            <button
              key={study.id}
              type="button"
              onClick={() => setActiveStudyId(study.id)}
              className={`p-4 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? 'bg-surface-elevated border-cyan-500/80 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                  : 'bg-surface border-surface-border hover:border-zinc-700 hover:bg-zinc-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-zinc-400">STUDY 0{idx + 1}</span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </div>
              <div className="font-bold text-sm text-white mb-1 leading-snug">
                {study.title}
              </div>
              <div className="text-xs font-mono text-cyan-400 mt-1 line-clamp-1">
                {study.badge}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Case Study Detail Card */}
      <Card className="p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-surface-border">
          <div>
            <Badge variant="cyan" size="md" className="mb-2">
              {activeStudy.badge}
            </Badge>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {activeStudy.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 mt-2 max-w-3xl">
              {activeStudy.subtitle}
            </p>
          </div>
        </div>

        {/* 2-Column Story Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
          {/* Left Column: Problem & Architecture */}
          <div className="lg:col-span-6 space-y-6">
            {/* The Problem */}
            <div className="rounded-xl bg-[#090c12] p-5 border border-surface-border">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rose-400 mb-2">
                <AlertTriangle className="w-4 h-4" />
                Problem Statement & Context
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeStudy.problem}
              </p>
            </div>

            {/* Architecture Overview & Key Components */}
            <div className="rounded-xl bg-[#090c12] p-5 border border-surface-border">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
                <Server className="w-4 h-4" />
                Architecture & Components
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {activeStudy.architecture.overview}
              </p>
              <div className="space-y-2">
                {activeStudy.architecture.keyComponents.map((comp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-mono bg-zinc-900/60 p-2 rounded border border-zinc-800/80">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bottlenecks & Solutions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Bottlenecks Encountered */}
            <div className="rounded-xl bg-[#090c12] p-5 border border-surface-border">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-400 mb-2">
                <AlertTriangle className="w-4 h-4" />
                Technical Bottlenecks Identified
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeStudy.bottleneck}
              </p>
            </div>

            {/* Engineering Solutions Implemented */}
            <div className="rounded-xl bg-[#090c12] p-5 border border-surface-border">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3">
                <Sparkles className="w-4 h-4" />
                Engineered Solutions & Optimization
              </div>
              <div className="space-y-2.5">
                {activeStudy.engineeringSolution.map((sol, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Measurable Production Outcomes */}
        <div className="pt-6 border-t border-surface-border">
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-4">
            Production Verified Outcomes
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {activeStudy.outcomes.map((outcome, i) => (
              <div key={i} className="bg-[#090c12] p-4 rounded-xl border border-surface-border font-mono">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {outcome.metric}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-sans">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 mr-2 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" /> Stack:
            </span>
            {activeStudy.techStack.map((tech, i) => (
              <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-900 text-cyan-300 border border-zinc-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
};
