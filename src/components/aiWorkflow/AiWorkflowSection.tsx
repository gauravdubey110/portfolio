import React from 'react';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Bot, Terminal, Cpu, CheckCircle2, Zap } from 'lucide-react';

export const AiWorkflowSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Spec-Driven Development (SDD) with MCP',
      icon: Terminal,
      description: 'Integrated custom Model Context Protocol (MCP) servers to auto-load organization-specific UI templates and design system tokens directly into the LLM context.',
      impact: '70%+ Frontend Velocity Boost',
      points: [
        'Enforces OpenAPI schema consistency between Spring Boot DTOs and TypeScript models',
        'Eliminated manual boilerplate generation for 100+ CPG ingestion dashboards',
        'Standardized component props and error handling across distributed teams'
      ],
      tech: ['Model Context Protocol (MCP)', 'TypeScript', 'React', 'Claude Code']
    },
    {
      title: 'Spring AI & Automated Incident Triage',
      icon: Zap,
      description: 'Piloted Spring AI integrations to parse telemetry anomalies, correlate Datadog trace spans with Prometheus alerts, and synthesize vetted incident runbook recommendations.',
      impact: '25% On-Call MTTR Reduction',
      points: [
        'Contextual retrieval over historical Architecture Decision Records (ADRs)',
        'Automated initial root-cause analysis (RCA) hypothesis generation',
        'Mentored 3 team engineers in agentic pair-programming best practices'
      ],
      tech: ['Spring AI', 'OpenAI API', 'Anthropic API', 'Datadog APM']
    },
    {
      title: 'Agentic Testing & Living Specifications',
      icon: Cpu,
      description: 'Automated generation of Behavior-Driven Development (BDD) test suites using Karate and Gherkin directly from REST API specs.',
      impact: '95%+ Automated Test Coverage',
      points: [
        'Transforms API acceptance criteria into executable regression test suites',
        'Compressed enterprise regression verification cycles by 50%',
        'Living documentation that stays 100% synchronized with production code'
      ],
      tech: ['Karate BDD', 'Gherkin', 'GitHub Copilot', 'JUnit 5']
    }
  ];

  return (
    <SectionContainer
      id="ai-workflow"
      badge="AI & Developer Velocity"
      badgeVariant="cyan"
      title="Engineering with AI — Beyond the Chat Window"
      subtitle="How I leverage Model Context Protocol (MCP), Spring AI, and Spec-Driven Development to eliminate friction and accelerate distributed systems delivery."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <Card key={idx} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/50 text-cyan-400 border border-cyan-800/40">
                    <Icon className="w-5 h-5" />
                  </div>
                  <Badge variant="emerald" size="sm">
                    {cap.impact}
                  </Badge>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed">
                  {cap.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-surface-border">
                  {cap.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                {cap.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Engineering Callout */}
      <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#090b10] border border-cyan-900/30 flex items-start gap-3 font-mono text-xs text-zinc-300">
        <Bot className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
        <div className="leading-relaxed">
          <span className="text-cyan-400 font-bold">SYSTEM PRINCIPLE: </span>
          AI tooling is treating context as an architectural asset. By feeding machine-readable organizational constraints, API contracts, and telemetry into LLMs via MCP, engineering throughput multiplies without compromising reliability.
        </div>
      </div>
    </SectionContainer>
  );
};
