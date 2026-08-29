import React, { useState } from 'react';
import { Server, Activity, Database, Cpu, Globe, Shield, Terminal, ArrowRight } from 'lucide-react';

interface NodeInfo {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  throughput: string;
  latency: string;
}

const architectureNodes: Record<string, NodeInfo> = {
  client: {
    id: 'client',
    name: 'Client Applications',
    category: 'Edge & Ingestion',
    description: 'Multi-tenant web clients, mobile frontends, and external vendor CPG integration endpoints sending continuous traffic.',
    specs: ['React & TypeScript SPAs', '20+ External Vendor Feeds', '100+ CPG Providers'],
    throughput: '15M+ req/day',
    latency: 'Sub-30ms Edge RTT',
  },
  gateway: {
    id: 'gateway',
    name: 'API Gateway & Ingress',
    category: 'Routing & Security',
    description: 'Reverse proxy handling TLS termination, rate-limiting, JWT authentication, and path-based dynamic routing.',
    specs: ['mTLS Encryption', 'Stateless JWT Verification', 'Resilience4j Rate Limiting'],
    throughput: '15M+ requests/day',
    latency: '< 4ms Overhead',
  },
  services: {
    id: 'services',
    name: 'Spring Boot Microservices',
    category: 'Core Compute (K8s)',
    description: 'Stateless backend business services containerized in Docker, orchestrated by Kubernetes HPA.',
    specs: ['Java 17 & Spring Boot', 'Autoscaling Pods (HPA)', 'G1GC Tuned (25% Latency Cut)'],
    throughput: '15M+ req across 6-7 consumers',
    latency: 'P95 < 45ms',
  },
  kafka: {
    id: 'kafka',
    name: 'Kafka Event Broker',
    category: 'Distributed Stream Backbone',
    description: 'Partitioned event stream guaranteeing strict SKU ordering, consumer group balancing, and durability.',
    specs: ['Partition Key Sharding', 'Idempotent Producer Semantics', 'Automated DLQ Topic Replay'],
    throughput: '10M+ events/day',
    latency: 'Sub-10ms Pub/Sub Lag',
  },
  processing: {
    id: 'processing',
    name: 'Processing & Stream Topologies',
    category: 'Real-Time Compute',
    description: 'Apache Storm and worker clusters aggregating real-time inventory deltas and executing transaction validations.',
    specs: ['Apache Storm Topologies', 'Stateful Windowing Computations', 'Dual-Write Stream Verifiers'],
    throughput: '~10K Peak TPS',
    latency: '< 15ms Stream Window',
  },
  storage: {
    id: 'storage',
    name: 'Multi-Model Data Layer',
    category: 'Persistence & Caching',
    description: 'Polygol data architecture with Apache Cassandra, PostgreSQL read-replicas, and Redis distributed caching.',
    specs: ['Cassandra (40M+ records, LCS)', 'PostgreSQL (ACID Inventory Ledger)', 'Redis L2 Multi-Region Cache'],
    throughput: '40M+ records migrated',
    latency: 'P99 read < 12ms',
  },
  observability: {
    id: 'observability',
    name: 'Observability & Telemetry Plane',
    category: 'Full-Stack Telemetry',
    description: 'Prometheus metric scraping, Datadog APM distributed tracing, and automated ADR runbook alerts.',
    specs: ['Datadog Distributed Tracing', 'Prometheus & Grafana Alerting', '50% MTTD/MTTR Reduction'],
    throughput: '100% Service Coverage',
    latency: 'Real-Time Alerting',
  }
};

export const SystemVisualizer: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('kafka');

  const active = architectureNodes[selectedNode] || architectureNodes.kafka;

  return (
    <div className="relative rounded-2xl bg-surface border border-surface-border overflow-hidden shadow-2xl">
      {/* Top Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#090b10] border-b border-surface-border font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300 font-semibold">DISTRIBUTED SYSTEM ARCHITECTURE</span>
          <span className="text-zinc-500 hidden sm:inline">|</span>
          <span className="text-cyan-400 hidden sm:inline">EVENT-DRIVEN CONTROL PLANE</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="text-zinc-500">TPS:</span>
            <span className="text-emerald-400 font-semibold">~10,000</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-zinc-500">EVENTS:</span>
            <span className="text-cyan-400 font-semibold">10M+/day</span>
          </span>
          <span className="flex items-center gap-1.5 hidden md:flex">
            <span className="text-zinc-500">STATE:</span>
            <span className="text-emerald-400 font-semibold">ONLINE</span>
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive SVG Architecture Map */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="mb-4">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Interactive Topology Map · Click any node to inspect telemetry
            </p>
          </div>

          {/* Node Grid Visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-auto">
            {/* 1. Client Node */}
            <button
              type="button"
              onClick={() => setSelectedNode('client')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedNode === 'client'
                  ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0a0d14] border-surface-border hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Globe className={`w-4 h-4 ${selectedNode === 'client' ? 'text-cyan-400' : 'text-zinc-400'}`} />
                <span className="font-mono text-[10px] uppercase text-zinc-400">EDGE</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-white">Client & Vendors</div>
              <div className="text-[11px] text-zinc-400 font-mono mt-1">15M+ req/day</div>
            </button>

            {/* 2. API Gateway */}
            <button
              type="button"
              onClick={() => setSelectedNode('gateway')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedNode === 'gateway'
                  ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0a0d14] border-surface-border hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Shield className={`w-4 h-4 ${selectedNode === 'gateway' ? 'text-cyan-400' : 'text-zinc-400'}`} />
                <span className="font-mono text-[10px] uppercase text-zinc-400">INGRESS</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-white">API Gateway</div>
              <div className="text-[11px] text-zinc-400 font-mono mt-1">mTLS & Rate Limit</div>
            </button>

            {/* 3. Microservices */}
            <button
              type="button"
              onClick={() => setSelectedNode('services')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedNode === 'services'
                  ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0a0d14] border-surface-border hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Server className={`w-4 h-4 ${selectedNode === 'services' ? 'text-cyan-400' : 'text-zinc-400'}`} />
                <span className="font-mono text-[10px] uppercase text-emerald-400">K8S CLUSTER</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-white">Spring Boot Services</div>
              <div className="text-[11px] text-zinc-400 font-mono mt-1">-25% P95 Latency</div>
            </button>

            {/* 4. Kafka Stream Backbone */}
            <button
              type="button"
              onClick={() => setSelectedNode('kafka')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedNode === 'kafka'
                  ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0a0d14] border-surface-border hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Cpu className={`w-4 h-4 ${selectedNode === 'kafka' ? 'text-cyan-400' : 'text-zinc-400'}`} />
                <span className="font-mono text-[10px] uppercase text-cyan-400">EVENT BROKER</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-white">Apache Kafka</div>
              <div className="text-[11px] text-zinc-400 font-mono mt-1">10M+ events/day</div>
            </button>

            {/* 5. Stream Processing */}
            <button
              type="button"
              onClick={() => setSelectedNode('processing')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedNode === 'processing'
                  ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0a0d14] border-surface-border hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Activity className={`w-4 h-4 ${selectedNode === 'processing' ? 'text-cyan-400' : 'text-zinc-400'}`} />
                <span className="font-mono text-[10px] uppercase text-amber-400">STREAM ENGINE</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-white">Apache Storm / Worker</div>
              <div className="text-[11px] text-zinc-400 font-mono mt-1">~10,000 TPS</div>
            </button>

            {/* 6. Multi-Model Storage */}
            <button
              type="button"
              onClick={() => setSelectedNode('storage')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedNode === 'storage'
                  ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0a0d14] border-surface-border hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Database className={`w-4 h-4 ${selectedNode === 'storage' ? 'text-cyan-400' : 'text-zinc-400'}`} />
                <span className="font-mono text-[10px] uppercase text-indigo-400">DATA LAYER</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-white">Cassandra & Postgres</div>
              <div className="text-[11px] text-zinc-400 font-mono mt-1">40M+ records / Redis</div>
            </button>
          </div>

          {/* Observability Bar */}
          <button
            type="button"
            onClick={() => setSelectedNode('observability')}
            className={`mt-3 p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              selectedNode === 'observability'
                ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                : 'bg-[#0a0d14] border-surface-border hover:border-zinc-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <Activity className={`w-4 h-4 ${selectedNode === 'observability' ? 'text-cyan-400' : 'text-zinc-400'}`} />
              <div>
                <div className="font-semibold text-xs text-white">Observability & Telemetry Plane</div>
                <div className="text-[11px] text-zinc-400 font-mono">Datadog APM · Prometheus · Grafana Metrics</div>
              </div>
            </div>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40 hidden sm:inline-block">
              50% MTTD/MTTR Cut
            </span>
          </button>
        </div>

        {/* Selected Node Telemetry Inspector */}
        <div className="lg:col-span-4 rounded-xl bg-[#090b10] border border-surface-border p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                {active.category}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{active.name}</h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">{active.description}</p>

            <div className="space-y-2 mb-4">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Specifications</div>
              {active.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono bg-zinc-900/60 p-1.5 rounded border border-zinc-800/60">
                  <ArrowRight className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Telemetry Card */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-zinc-800 font-mono">
            <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800">
              <div className="text-[10px] text-zinc-500 uppercase">Throughput</div>
              <div className="text-xs font-bold text-cyan-400 mt-0.5">{active.throughput}</div>
            </div>
            <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800">
              <div className="text-[10px] text-zinc-500 uppercase">Latency / SLA</div>
              <div className="text-xs font-bold text-emerald-400 mt-0.5">{active.latency}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
