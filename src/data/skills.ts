import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Core JVM',
    icon: 'Server',
    description: 'Enterprise Java and modern microservices architecture with reactive and event-driven backbones.',
    skills: [
      { name: 'Java (8, 11, 17)', level: 'Core Mastery', context: 'Primary language for high-throughput distributed systems & JVM tuning' },
      { name: 'Spring Boot', level: 'Core Mastery', context: 'Production microservices, REST APIs, JPA, Spring Cloud' },
      { name: 'REST APIs & Microservices', level: 'Core Mastery', context: 'Architected services serving 15M+ requests/day across 6-7 consumers' },
      { name: 'Hibernate / JPA', level: 'Advanced', context: 'Transactional management, ORM, connection pool tuning' },
      { name: 'Golang & Kotlin', level: 'Advanced', context: 'Concurrent backend services and JVM modern extensions' },
      { name: 'Spring MVC & J2EE', level: 'Advanced', context: 'Enterprise web layer architectures' }
    ]
  },
  {
    id: 'distributed',
    title: 'Distributed Systems & Messaging',
    icon: 'Network',
    description: 'High-throughput stream processing, fault-tolerant messaging, and partition orchestration.',
    skills: [
      { name: 'Apache Kafka', level: 'Core Mastery', context: 'Partition key design, consumer group rebalancing, 10M+ events/day' },
      { name: 'Event-Driven Architecture', level: 'Core Mastery', context: 'Asynchronous event decoupling, transactional outbox, DLQ replay' },
      { name: 'Fault Tolerance & Resilience', level: 'Core Mastery', context: 'Idempotency, circuit breakers (Resilience4j), retries with jitter' },
      { name: 'Apache Storm', level: 'Advanced', context: 'Real-time stream aggregation sustaining ~10K TPS' },
      { name: 'Temporal Workflow', level: 'Advanced', context: 'Durable distributed saga orchestration and long-running workflows' },
      { name: 'Scalability & Load Balancing', level: 'Core Mastery', context: 'Stateless scale, reverse proxies, multi-tenant clustering' }
    ]
  },
  {
    id: 'data',
    title: 'Databases & Performance',
    icon: 'Database',
    description: 'Distributed NoSQL, transactional RDBMS, low-latency caching, and query optimization.',
    skills: [
      { name: 'Apache Cassandra', level: 'Core Mastery', context: '40M+ record migration, partition-key design, compaction tuning' },
      { name: 'PostgreSQL', level: 'Core Mastery', context: 'Inventory visibility engine, indexing, connection pooling' },
      { name: 'Redis', level: 'Core Mastery', context: 'Distributed caching, session storage, rate limiting, pub/sub' },
      { name: 'MySQL', level: 'Advanced', context: 'Relational data modeling, ACID transactions, query plans' },
      { name: 'JVM Performance & GC Tuning', level: 'Core Mastery', context: 'G1GC optimization, heap dump analysis, 25% P95 latency cut' },
      { name: 'Query Optimization & Indexing', level: 'Core Mastery', context: 'Execution plan analysis, compound indices, hotspot elimination' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: 'Cloud',
    description: 'Container orchestration, cloud deployment, and automated CI/CD deployment pipelines.',
    skills: [
      { name: 'Kubernetes (K8s)', level: 'Core Mastery', context: 'HPA autoscaling, pod scheduling, configmaps, rolling updates' },
      { name: 'Docker', level: 'Core Mastery', context: 'Multi-stage container builds, image size optimization' },
      { name: 'AWS & Azure', level: 'Advanced', context: 'Cloud-native compute, VPC, S3, IAM, managed databases' },
      { name: 'CI/CD Automation', level: 'Advanced', context: 'Automated build, test, lint, container push, canary deployments' },
      { name: 'Security & TLS / IAM', level: 'Advanced', context: 'Zero-trust network policies, mTLS, RBAC access control' }
    ]
  },
  {
    id: 'observability',
    title: 'Observability & Testing',
    icon: 'Activity',
    description: 'End-to-end distributed telemetry, metrics, log analysis, and automated test frameworks.',
    skills: [
      { name: 'Prometheus & Grafana', level: 'Core Mastery', context: 'Custom metrics instrumentation, alerting rules, real-time dashboards' },
      { name: 'Datadog APM', level: 'Core Mastery', context: 'APM, distributed tracing, log correlation, 50% MTTD/MTTR cut' },
      { name: 'Karate BDD & Gherkin', level: 'Core Mastery', context: 'Automated integration testing, 95%+ coverage, 50% regression cycle cut' },
      { name: 'JUnit & Mockito', level: 'Core Mastery', context: 'Unit testing, mocking strategies, test-driven development (TDD)' },
      { name: 'JMeter & TestNG', level: 'Advanced', context: 'Load testing, stress testing, concurrency benchmarking' }
    ]
  },
  {
    id: 'frontend-ai',
    title: 'Frontend & AI-Assisted Tooling',
    icon: 'Bot',
    description: 'Modern component-based interfaces, Model Context Protocol servers, and AI developer workflows.',
    skills: [
      { name: 'React & TypeScript', level: 'Core Mastery', context: 'Enterprise dashboards, strict types, component design systems' },
      { name: 'Model Context Protocol (MCP)', level: 'Core Mastery', context: 'Custom tool servers, spec-driven development, 70%+ velocity boost' },
      { name: 'Spring AI & APIs', level: 'Advanced', context: 'Incident triage pipelines, OpenAI/Anthropic orchestration' },
      { name: 'Claude Code & Copilot', level: 'Core Mastery', context: 'Agentic workflows, spec synthesis, automated test scaffolding' }
    ]
  }
];
