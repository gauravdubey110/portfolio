import { ExperienceRole } from '../types/portfolio';

export const experienceData: ExperienceRole[] = [
  {
    id: 'sde-2',
    title: 'Software Development Engineer II',
    company: 'ZopSmart',
    period: 'Apr 2025 – Present',
    isCurrent: true,
    type: 'Full-time',
    summary: 'Leading distributed backend platform architecture, reliability engineering, spec-driven development integrations, and engineering standards across distributed services.',
    coreHighlights: [
      'Architected a distributed, event-driven backend platform in Java, Spring Boot, and Kubernetes with PostgreSQL, powering real-time inventory visibility at 10M+ events/day.',
      'Reduced P95 API latency by 25% through JVM performance tuning, GC optimization, and SQL/caching improvements.',
      'Cut production incident rate by 50% using idempotent processing, retries, DLQ recovery, and circuit breakers.',
      'Built a full-stack item-ingestion dashboard (TypeScript, React, Spring Boot) tracking 100+ CPGs and 20+ vendor sources, cutting manual triage time by 50%+ across 5+ teams.',
      'Integrated MCP (Model Context Protocol) calls to auto-load org-specific UI templates, cutting frontend dev time by 70%+ via AI-driven, spec-driven development (SDD).',
      'Drove design reviews across a 6-engineer team, codifying idempotency, API stability, and fault-tolerance standards as team baseline.',
      'Piloted Spring AI and MCP integration for incident triage, mentoring 3 engineers on GenAI-assisted development.',
      'Authored incident runbooks and Architecture Decision Records (ADRs) that cut on-call MTTR by 25%, communicating trade-offs to engineering leadership.'
    ],
    metrics: [
      '10M+ events/day real-time processing',
      '25% P95 API latency reduction',
      '50% incident rate drop via fault tolerance',
      '70%+ frontend development acceleration via MCP/SDD',
      '25% on-call MTTR reduction'
    ],
    technologies: [
      'Java 17',
      'Spring Boot',
      'Kubernetes',
      'PostgreSQL',
      'Kafka',
      'React',
      'TypeScript',
      'Model Context Protocol (MCP)',
      'Spring AI',
      'Docker',
      'Redis',
      'REST APIs'
    ],
    architectureNotes: 'Distributed event-driven architecture using Kafka partitions for ordered real-time inventory aggregation, decoupled worker pools on Kubernetes, and PostgreSQL read-replicas with Redis caching.'
  },
  {
    id: 'sde-1',
    title: 'Software Development Engineer I (promoted from SDE Intern)',
    company: 'ZopSmart',
    period: 'Feb 2023 – Mar 2025',
    isCurrent: false,
    type: 'Full-time',
    summary: 'Engineered high-throughput stream processing pipelines, executed large-scale data migrations to NoSQL, and established enterprise observability and automated testing baselines.',
    coreHighlights: [
      'Led a 40M+ record migration from a legacy monolith to Cassandra, building validation and dual-write checks for a zero-data-loss cutover.',
      'Engineered Kafka + Apache Storm real-time pipelines for retail event processing, sustaining ~10K TPS across multi-tenant clusters.',
      'Tuned Cassandra consistency, compaction, and partition-key design — reducing p99 read latency by 25% and eliminating cluster hotspots.',
      'Built end-to-end observability with Prometheus, Grafana, and Datadog — compressing MTTD and MTTR on Sev-1 incidents by 50%.',
      'Designed 6 REST microservices in Java and Spring Boot with Spring Data JPA, serving 15M+ requests/day across 6-7 downstream consumers.',
      'Introduced BDD automation (Karate, Gherkin) achieving 95%+ test coverage and cutting regression cycle time by 50%; led on-call RCAs for enterprise retail clients.'
    ],
    metrics: [
      '40M+ records migrated with zero data loss',
      '~10K TPS peak stream processing throughput',
      '25% p99 read latency reduction in Cassandra',
      '15M+ requests/day across 6 microservices',
      '50% MTTD & MTTR compression on Sev-1 incidents',
      '95%+ automated test coverage with Karate'
    ],
    technologies: [
      'Java 11 / 17',
      'Spring Boot',
      'Apache Kafka',
      'Apache Storm',
      'Cassandra',
      'Prometheus',
      'Grafana',
      'Datadog',
      'Karate / BDD',
      'MySQL',
      'Hibernate',
      'JUnit / Mockito'
    ],
    architectureNotes: 'Dual-write migration pipeline with shadow read validation ensuring zero data drift; Apache Storm topology consuming Kafka partitions for low-latency stateful stream calculations.'
  }
];
