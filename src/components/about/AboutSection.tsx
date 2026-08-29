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
      description: 'Distributed backend platforms, high-throughput asynchronous event-driven pipelines, microservices on Kubernetes, and full-stack operational dashboards.',
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
        'JVM memory management, G1GC tuning, and heap profiling',
        'NoSQL & RDBMS query execution plans and partition-key design',
        'Fault-tolerant idempotency, retries with jitter, and DLQ replay',
        'Continuous telemetry instrumentation with Prometheus, Grafana, and Datadog'
      ]
    },
    {
      title: 'What I am Exploring',
      icon: Sparkles,
      accent: 'indigo',
      description: 'Spec-Driven Development (SDD), custom Model Context Protocol (MCP) servers, agentic developer workflows, and Spring AI production integration.',
      highlights: [
        'MCP servers bridging OpenAPI specifications with IDE AI models',
        'Automated incident triage systems leveraging Spring AI and historical ADRs',
        'Living documentation & BDD automation with Karate and Gherkin',
        'AI-accelerated full-stack workflows cutting dev cycles by 70%+'
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
      <div className="mb-10 p-6 md:p-8 rounded-2xl bg-surface border border-surface-border relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-500 opacity-30 group-hover:opacity-60 blur transition-all duration-300" />
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="relative w-44 h-44 sm:w-52 sm:h-52 object-cover object-top rounded-2xl border-2 border-surface-border shadow-2xl"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-surface-elevated/90 backdrop-blur-md border border-surface-border text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-white tracking-tight">{profileData.name}</h3>
              <div className="text-xs font-mono text-cyan-400 mt-0.5">Software Engineer · Full Stack</div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{profileData.location}</span>
                <span>·</span>
                <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                <span>3+ Yrs Exp</span>
              </div>
            </div>
          </div>

          {/* Summary & Identifiers */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="cyan" size="sm">Distributed Systems</Badge>
              <Badge variant="emerald" size="sm">Backend Architecture</Badge>
              <Badge variant="indigo" size="sm">Cloud Native</Badge>
              <Badge variant="neutral" size="sm">Spec-Driven AI</Badge>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
              {profileData.summary}
            </p>

            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Primary Stack: Java 17, Spring Boot, Kafka, K8s</span>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <Card key={idx} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    pillar.accent === 'cyan' ? 'bg-cyan-950/60 text-cyan-400 border-cyan-800/60' :
                    pillar.accent === 'emerald' ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60' :
                    'bg-indigo-950/60 text-indigo-400 border-indigo-800/60'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-5 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                  {pillar.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                        pillar.accent === 'cyan' ? 'text-cyan-400' :
                        pillar.accent === 'emerald' ? 'text-emerald-400' :
                        'text-indigo-400'
                      }`} />
                      <span className="leading-normal">{item}</span>
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
