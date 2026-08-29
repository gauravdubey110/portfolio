import React, { useState, useMemo } from 'react';
import { skillCategories } from '../../data/skills';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Search, Server, Network, Database, Cloud, Layout, Activity, Bot, Code, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Network,
  Database,
  Cloud,
  Layout,
  Activity,
  Bot,
  Code,
};

export const SkillsConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (s.context && s.context.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <SectionContainer
      id="stack"
      badge="Technical Matrix"
      badgeVariant="cyan"
      title="Interactive Technical Stack"
      subtitle="Categorized engineering capabilities strictly grounded in production experience and verified projects."
    >
      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/60 font-semibold'
                : 'bg-surface text-zinc-400 hover:text-zinc-200 border border-surface-border'
            }`}
          >
            All Domains
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/60 font-semibold'
                  : 'bg-surface text-zinc-400 hover:text-zinc-200 border border-surface-border'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies (e.g., Kafka, JVM, React)..."
            className="w-full pl-9 pr-4 py-1.5 text-xs font-mono bg-surface border border-surface-border rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>
      </div>

      {/* Skills Group Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => {
          const Icon = iconMap[cat.icon] || Cpu;

          return (
            <Card key={cat.id} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-surface-border">
                  <div className="p-2 rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-800/40">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">{cat.title}</h3>
                    <p className="text-[11px] text-zinc-500 line-clamp-1">{cat.description}</p>
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-2.5 mt-4">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#090c12] border border-surface-border hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-zinc-100 font-mono">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            skill.level === 'Core Mastery'
                              ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/40'
                              : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.context && (
                        <p className="text-[11px] text-zinc-400 leading-tight">
                          {skill.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
};
