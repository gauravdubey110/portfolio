import React from 'react';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Server, Gauge, Sparkles, CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Badge } from '../ui/Badge';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'What I Build',
      icon: Server,
      accent: 'cyan',
      description: 'Distributed backend platforms, high-throughput asynchronous event streams, Kubernetes microservices, and full-stack operational dashboards.',
      highlights: [
        'Real-time event processing with Kafka & Spring Boot at 10M+ events/day',
        'Stateless REST microservices serving 15M+ requests/day',
        'Full-stack management dashboards for 100+ CPGs and 20+ vendors',
        'Zero-downtime dual-write data migration pipelines (40M+ records)'
      ]
    },
    {
      title: 'What I Optimize',
      icon: Gauge,
      accent: 'emerald',
      description: 'System reliability, P95/P99 latency profiles, database compaction strategies, garbage collection pauses, and team-wide MTTR.',
      highlights: [
        'JVM memory management, G1GC tuning, and heap profiling (-25% P95 latency)',
        'Cassandra partition-key design and Leveled Compaction tuning (-25% p99 latency)',
        'Fault-tolerant idempotency, retries with jitter, and DLQ replay (-50% incident rate)',
        'End-to-end telemetry instrumentation with Prometheus, Grafana, and Datadog'
      ]
    },
    {
      title: 'How I Work & Lead',
      icon: Sparkles,
      accent: 'indigo',
      description: 'Codifying engineering standards, leading cross-team design reviews, authoring ADRs, mentoring engineers, and integrating spec-driven AI tooling.',
      highlights: [
        'Drove design reviews across a 6-engineer squad codifying fault tolerance baselines',
        'Authored incident runbooks & ADRs cutting on-call MTTR by 25%',
        'Integrated Model Context Protocol (MCP) cutting frontend dev time by 70%+',
        'Mentored 3 engineers in GenAI-assisted engineering and automated BDD testing'
      ]
    }
  ];

  return (
    <SectionContainer
      id="about"
      badge="Engineering Persona"
      badgeVariant="cyan"
      title="Engineering Philosophy & Focus"
      subtitle="Full-stack Software Engineer with 3+ years architecting event-driven backends, scaling microservices, and leading system design baselines."
    >
      {/* Profile Overview Card with Photo */}
      <div className="mb-8 p-6 md:p-7 rounded-2xl bg-surface border border-surface-border relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-500 opacity-25 group-hover:opacity-50 blur transition-all duration-300" />
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="relative w-40 h-40 sm:w-48 sm:h-48 object-cover object-top rounded-2xl border border-surface-border shadow-2xl"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-surface-elevated/90 backdrop-blur-md border border-surface-border text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active</span>
              </div>
            </div>

            <div className="mt-3.5">
              <h3 className="text-xl font-bold text-white tracking-tight">{profileData.name}</h3>
              <div className="text-xs font-mono text-cyan-400 mt-0.5">Software Engineer · Full Stack</div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{profileData.location}</span>
                <span>·</span>
                <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                <span>3+ Yrs Exp</span>
              </div>
            </div>
          </div>

          {/* Summary & Identifiers */}
          <div className="lg:col-span-8 space-y-3.5">
            <div className="flex flex-wrap gap-1.5 mb-1">
              <Badge variant="cyan" size="sm">Distributed Systems</Badge>
              <Badge variant="emerald" size="sm">Backend Architecture</Badge>
              <Badge variant="indigo" size="sm">Cloud Native (K8s)</Badge>
              <Badge variant="neutral" size="sm">Full Stack (React/TS)</Badge>
            </div>

            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              {profileData.summary}
            </p>

            <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Primary: Java 17, Spring Boot, Kafka, K8s</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Databases: Cassandra, PostgreSQL, Redis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <Card key={idx} className="flex flex-col justify-between p-5">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`p-2 rounded-xl border ${
                    pillar.accent === 'cyan' ? 'bg-cyan-950/60 text-cyan-400 border-cyan-800/60' :
                    pillar.accent === 'emerald' ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60' :
                    'bg-indigo-950/60 text-indigo-400 border-indigo-800/60'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                </div>

                <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-zinc-800/80">
                  {pillar.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-200">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                        pillar.accent === 'cyan' ? 'text-cyan-400' :
                        pillar.accent === 'emerald' ? 'text-emerald-400' :
                        'text-indigo-400'
                      }`} />
                      <span className="leading-snug">{item}</span>
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
