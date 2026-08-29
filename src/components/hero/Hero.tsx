import React from 'react';
import { ArrowUpRight, Terminal, FileDown, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData, heroCopy } from '../../data/profile';
import { SystemVisualizer } from './SystemVisualizer';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Grids & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-tech-glow pointer-events-none opacity-50 blur-3xl" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-glow pointer-events-none opacity-30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="cyan" dot size="md">
            {heroCopy.eyebrow}
          </Badge>
          <span className="hidden sm:inline-block font-mono text-xs text-zinc-500">
            Based in {profileData.location} · 3+ Yrs Scaling Backends
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Building distributed systems for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                scale, reliability,
              </span>{' '}
              and speed.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
              {heroCopy.subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-950/50 hover:shadow-cyan-900/80 transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Architecture Studies</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-zinc-800 text-zinc-200 hover:text-white border border-surface-border hover:border-zinc-600 font-mono text-xs sm:text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-zinc-800 text-zinc-200 hover:text-white border border-surface-border hover:border-zinc-600 font-mono text-xs sm:text-sm transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href="/Gaurav_Dubey__SWE_Resume.pdf"
                download="Gaurav_Dubey_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-zinc-800 text-zinc-200 hover:text-white border border-surface-border hover:border-zinc-600 font-mono text-xs sm:text-sm transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Aside Card */}
          <div className="lg:col-span-4 rounded-xl bg-[#090b10]/90 border border-surface-border p-5 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-4 font-mono text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                Telemetry Snapshot
              </span>
              <span className="text-zinc-500">v3.4.0</span>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono">
              {heroCopy.quickStats.map((stat, idx) => (
                <div key={idx} className="bg-surface p-3 rounded-lg border border-surface-border">
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span className="text-zinc-400">Core Architecture:</span>
              <span className="text-emerald-400 font-medium">Kafka · Spring Boot · K8s</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive System Architecture Visualizer */}
        <div className="mt-2">
          <SystemVisualizer />
        </div>
      </div>
    </section>
  );
};
