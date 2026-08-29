import { EngineeringPrinciple } from '../types/portfolio';

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 'reliability',
    title: 'Reliability & Fault Tolerance',
    iconName: 'ShieldCheck',
    coreConcept: 'Failures in distributed systems are inevitable. Systems must be architected to self-heal, degrade gracefully, and maintain data integrity under partial outages.',
    practices: [
      {
        name: 'Idempotency by Design',
        detail: 'Every write endpoint and consumer handler enforces idempotency keys, deduplication state, and atomic commits to eliminate duplicate side effects.',
        grounding: 'Codified as team baseline across a 6-engineer squad at ZopSmart.'
      },
      {
        name: 'Resilient Retry & DLQ Policies',
        detail: 'Exponential backoff with jitter prevents thundering herd problems, routing unrecoverable payloads into Dead Letter Queues for asynchronous audit and replay.',
        grounding: 'Cut production incident rate by 50% in the inventory platform.'
      },
      {
        name: 'Circuit Breaking & Bulkheading',
        detail: 'Isolate upstream and downstream failures with resilience4j circuit breakers, preventing cascading thread exhaustion and providing cached fallbacks.',
        grounding: 'Protected 6-7 downstream services consuming 15M+ requests/day.'
      }
    ]
  },
  {
    id: 'scale',
    title: 'Horizontal Scalability & Partitioning',
    iconName: 'Layers',
    coreConcept: 'Design stateless compute and partitioned data layers that scale horizontally without introducing concurrency bottlenecks or hot spots.',
    practices: [
      {
        name: 'Deterministic Partition Keying',
        detail: 'Design partition keys in Kafka and Cassandra to evenly distribute traffic across shards while preserving strict ordering where business logic mandates.',
        grounding: 'Sustained ~10K TPS across multi-tenant Kafka & Storm clusters.'
      },
      {
        name: 'Multi-Tier Caching Strategies',
        detail: 'Implement near-cache in JVM memory combined with distributed Redis clusters, enforcing cache-aside and write-through patterns with sensible TTLs.',
        grounding: 'Shielded primary PostgreSQL & Cassandra clusters during flash spikes.'
      },
      {
        name: 'Stateless Service Orchestration',
        detail: 'Containerized Spring Boot pods managed by Kubernetes HPA reacting to both CPU thresholds and custom message broker consumer lag metrics.',
        grounding: 'Scaled event-driven platform handling 10M+ events/day seamlessly.'
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Latency Optimization',
    iconName: 'Zap',
    coreConcept: 'Performance is engineered at every layer: operating system page caches, JVM memory management, query execution plans, and data serialization formats.',
    practices: [
      {
        name: 'JVM & Garbage Collection Tuning',
        detail: 'Profile heap allocation patterns, thread dumps, and GC pauses with JFR/VisualVM; tune G1GC survivor ratios and pause time goals.',
        grounding: 'Reduced P95 API latency by 25% across distributed services.'
      },
      {
        name: 'Database Query & Index Tuning',
        detail: 'Analyze query execution plans, composite indexes, and Cassandra compaction strategies (LCS) to eliminate table scans and tombstones.',
        grounding: 'Reduced p99 read latency by 25% on a 40M+ record NoSQL cluster.'
      },
      {
        name: 'Asynchronous Non-Blocking Pipelines',
        detail: 'Decouple CPU-intensive work from request/response threads using event queues, worker pools, and non-blocking I/O.',
        grounding: 'Enables sub-50ms response times for high-volume inventory reads.'
      }
    ]
  },
  {
    id: 'observability',
    title: 'Deep Observability & Telemetry',
    iconName: 'Activity',
    coreConcept: 'You cannot fix what you cannot measure. Observability must provide instant visibility from high-level business KPIs down to granular distributed trace spans.',
    practices: [
      {
        name: 'The Golden Signals (Metrics)',
        detail: 'Instrument endpoints and queues with Prometheus and Micrometer to continuously track Latency, Traffic, Errors, and Saturation.',
        grounding: 'Enabled real-time alerting and proactive capacity forecasting.'
      },
      {
        name: 'End-to-End Distributed Tracing',
        detail: 'Propagate trace and span IDs across HTTP gateways, Kafka headers, and database drivers to trace end-to-end request lifecycles.',
        grounding: 'Reduced Sev-1 incident MTTD and MTTR by 50% using Datadog.'
      },
      {
        name: 'Actionable ADRs & Runbooks',
        detail: 'Standardize architectural decision records and on-call runbooks for predictable, fast remediation during outages.',
        grounding: 'Cut on-call MTTR by 25% with standardized engineering runbooks.'
      }
    ]
  }
];
