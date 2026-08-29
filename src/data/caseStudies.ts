import { CaseStudy } from '../types/portfolio';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'event-driven-inventory',
    badge: 'Distributed Systems & Event Stream',
    title: 'High-Throughput Real-Time Inventory Visibility Engine',
    subtitle: 'Processing 10M+ daily events with sub-50ms P95 latency and 50% fewer production incidents.',
    problem: 'Retail inventory updates were previously handled via periodic batch queries, causing data staleness, database connection saturation during flash events, and race conditions across distributed fulfillment nodes.',
    architecture: {
      overview: 'Event-driven pub/sub architecture built on Kafka partitioned topics, Spring Boot microservices on Kubernetes, and PostgreSQL read-replicas with Redis L2 caching.',
      keyComponents: [
        'Kafka partition key strategy guaranteeing strict per-SKU ordering while parallelizing across partitions',
        'Idempotent event consumer layer with deduplication table and atomic state transitions',
        'Dead Letter Queue (DLQ) automated replay mechanism with exponential backoff and circuit breaking',
        'Kubernetes Horizontal Pod Autoscaler (HPA) driven by Kafka consumer group lag metrics'
      ],
      diagramTitle: 'Event Ingestion & Processing Pipeline'
    },
    bottleneck: 'High contention on hot SKU records during concurrent flash updates, JVM GC pauses causing consumer group rebalances, and cascading failures on downstream inventory sinks.',
    engineeringSolution: [
      'JVM Tuning & GC Optimization: Migrated to G1GC with optimized survivor ratios and heap allocations, eliminating 90% of STW pause jitter and shaving 25% off P95 API latency.',
      'Idempotency & Resilience Baseline: Embedded transactional outbox pattern and deduplication keys, ensuring exactly-once processing semantics at application level.',
      'Circuit Breakers & Graceful Degradation: Configured resilience4j circuit breakers with fallback read paths from Redis read caches, isolating downstream outages.',
      'Dynamic Autoscaling: Rebalanced consumer partitions dynamically to prevent uneven lag across worker pods.'
    ],
    outcomes: [
      { metric: '10M+', label: 'Events processed daily at real-time scale' },
      { metric: '-25%', label: 'P95 API latency reduction' },
      { metric: '-50%', label: 'Production incident reduction' },
      { metric: '100%', label: 'Data consistency across fulfillment nodes' }
    ],
    techStack: ['Java 17', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Kubernetes', 'Redis', 'Resilience4j', 'Docker']
  },
  {
    id: 'cassandra-migration',
    badge: 'Database Engineering & Zero Downtime',
    title: '40M+ Record Monolith to Cassandra Migration',
    subtitle: 'Zero-downtime, zero-data-loss cutover with ~10K TPS real-time streaming pipelines.',
    problem: 'The legacy relational monolithic database reached vertical scaling limits with high write latencies, frequent query timeouts during peak retail operations, and inability to scale horizontally across multi-tenant clusters.',
    architecture: {
      overview: 'Phased dual-write architecture leveraging Kafka and Apache Storm stream processing to replicate writes into Apache Cassandra alongside real-time data consistency reconcilers.',
      keyComponents: [
        'Dual-write producer layer persisting to legacy RDBMS and asynchronous Kafka CDC topic',
        'Apache Storm streaming topology computing distributed state aggregations at ~10K TPS',
        'Asynchronous shadow reconciliation worker verifying row hashes between relational and NoSQL stores',
        'Feature-flagged read-switching proxy supporting instant rollback without user disruption'
      ],
      diagramTitle: 'Dual-Write & Shadow Reconciliation Flow'
    },
    bottleneck: 'Data drift risk during parallel writes, Cassandra tombstone buildup from heavy update patterns, and partition hotspots on high-volume tenant IDs.',
    engineeringSolution: [
      'Partition Key Redesign: Restructured Cassandra compound primary keys using bucketing strategies to uniformly distribute partition sizes under 100MB.',
      'Compaction & Consistency Tuning: Configured Leveled Compaction Strategy (LCS) for read-heavy workloads and adjusted `LOCAL_QUORUM` consistency to balance speed and data durability.',
      'Dual-Write Verification: Ran shadow reads comparing 100% of read traffic across both databases for 30 consecutive days, achieving zero detected data loss before final decommission.',
      'Latency Optimization: Reduced p99 read latency by 25% by optimizing bloom filters and OS page cache sizing.'
    ],
    outcomes: [
      { metric: '40M+', label: 'Total records safely migrated' },
      { metric: '~10K', label: 'TPS sustained streaming throughput' },
      { metric: '-25%', label: 'p99 read latency reduction' },
      { metric: '0', label: 'Data loss or unplanned downtime during cutover' }
    ],
    techStack: ['Apache Cassandra', 'Apache Kafka', 'Apache Storm', 'Java', 'Spring Boot', 'MySQL', 'Prometheus', 'Grafana']
  },
  {
    id: 'ai-mcp-workflow',
    badge: 'AI-Assisted Engineering & Systems',
    title: 'Spec-Driven Engineering & Model Context Protocol (MCP)',
    subtitle: 'Accelerating frontend delivery by 70%+ and cutting incident triage MTTR by 25%.',
    problem: 'Frontend dashboard delivery for ingestion workflows (100+ CPGs, 20+ vendors) was slowed by repetitive boilerplate creation, schema mismatches between backend APIs and UI components, and manual on-call incident diagnosis.',
    architecture: {
      overview: 'Custom Model Context Protocol (MCP) server integration paired with Spec-Driven Development (SDD), connecting OpenAPI backend contracts, organization UI component schemas, and live incident triage runbooks.',
      keyComponents: [
        'MCP Server providing Claude/Cursor with live introspection of org component libraries and design tokens',
        'OpenAPI-to-TypeScript code generation pipeline strictly verifying schema consistency',
        'Spring AI automated incident triage agent aggregating error logs, trace IDs, and known runbook ADRs',
        'Automated BDD test generator scaffolding Karate/Gherkin specifications from API definitions'
      ],
      diagramTitle: 'MCP Tooling & Agentic Engineering Pipeline'
    },
    bottleneck: 'Hallucination in general AI coding tools without organizational context, drift between backend DTOs and frontend models, and high cognitive load during Sev-1 on-call triage.',
    engineeringSolution: [
      'Context Injection via MCP: Built custom tool definitions allowing AI assistants to query company-specific architectural patterns, UI templates, and idempotency standards.',
      'Spec-Driven Scaffold: Enforced API contract validation where UI scaffolds and integration tests are synthesized directly from verified Spring Boot controller specs.',
      'Intelligent Triage Runbooks: Integrated Spring AI to correlate Prometheus alerts with Datadog traces and recommend vetted resolution steps from historical ADRs.',
      'Mentorship & Standards: Mentored 3 engineers in adopting agentic engineering practices, codifying prompt architecture and review standards.'
    ],
    outcomes: [
      { metric: '70%+', label: 'Faster frontend boilerplate and UI delivery' },
      { metric: '-50%+', label: 'Reduction in manual item-ingestion triage time' },
      { metric: '-25%', label: 'On-call MTTR reduction through automated runbook matching' },
      { metric: '3', label: 'Engineers mentored in GenAI-assisted workflows' }
    ],
    techStack: ['Model Context Protocol (MCP)', 'Spring AI', 'TypeScript', 'React', 'OpenAI API', 'Anthropic API', 'Claude Code', 'GitHub Copilot']
  }
];
