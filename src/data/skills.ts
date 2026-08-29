import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: 'Server',
    description: 'Enterprise Java and modern microservices architecture with reactive and event-driven backbones.',
    skills: [
      { name: 'Java (8, 11, 17)', level: 'Core Mastery', context: 'Primary language for high-throughput distributed systems & JVM tuning' },
      { name: 'Spring Boot', level: 'Core Mastery', context: 'Production microservices, REST APIs, JPA, Spring Cloud' },
      { name: 'REST APIs & API Gateway', level: 'Core Mastery', context: 'Designed services serving 15M+ requests/day' },
      { name: 'Microservices Architecture', level: 'Core Mastery', context: 'Service decomposition, inter-service contracts, resilience' },
      { name: 'Hibernate / Spring Data JPA', level: 'Advanced', context: 'ORM, transactional management, connection pool tuning' },
      { name: 'Golang', level: 'Advanced', context: 'High-performance concurrent microservices and tooling' },
      { name: 'Kotlin', level: 'Advanced', context: 'Modern JVM backend development' },
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
      { name: 'Scalability & Load Balancing', level: 'Core Mastery', context: 'Stateless scale, reverse proxies, multi-DC clustering' }
    ]
  },
  {
    id: 'data',
    title: 'Databases, Caching & Performance',
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
    title: 'Cloud Infrastructure & DevOps',
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
    id: 'frontend',
    title: 'Frontend & Full Stack',
    icon: 'Layout',
    description: 'Modern, component-based user interfaces and interactive dashboards.',
    skills: [
      { name: 'React', level: 'Core Mastery', context: 'Enterprise dashboards, state management, custom hooks' },
      { name: 'TypeScript', level: 'Core Mastery', context: 'Strict types, API contract models, scalable frontend architecture' },
      { name: 'HTML5 & CSS', level: 'Core Mastery', context: 'Semantic layout, responsive design, modern CSS token systems' },
      { name: 'REST / JSON Integration', level: 'Core Mastery', context: 'Efficient API consumption, optimistic UI updates, error boundaries' },
      { name: 'Component Architecture', level: 'Core Mastery', context: 'Modular design systems, accessible reusable UI primitives' }
    ]
  },
  {
    id: 'observability',
    title: 'Observability & Testing',
    icon: 'Activity',
    description: 'End-to-end distributed telemetry, metrics, log analysis, and automated test frameworks.',
    skills: [
      { name: 'Prometheus & Grafana', level: 'Core Mastery', context: 'Custom metrics instrumentation, alerting rules, real-time dashboards' },
      { name: 'Datadog', level: 'Core Mastery', context: 'APM, distributed tracing, log correlation, 50% MTTD/MTTR cut' },
      { name: 'Karate / BDD & Gherkin', level: 'Core Mastery', context: 'Automated integration testing, 95%+ coverage, 50% regression cycle cut' },
      { name: 'JUnit & Mockito', level: 'Core Mastery', context: 'Unit testing, mocking strategies, test-driven development (TDD)' },
      { name: 'JMeter & TestNG', level: 'Advanced', context: 'Load testing, stress testing, concurrency benchmarking' }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI & Developer Velocity',
    icon: 'Bot',
    description: 'Spec-driven development, custom Model Context Protocol servers, and production AI integration.',
    skills: [
      { name: 'Model Context Protocol (MCP)', level: 'Core Mastery', context: 'Custom tool servers, spec-driven development, 70%+ velocity boost' },
      { name: 'Spring AI', level: 'Advanced', context: 'Incident triage pipelines, LLM orchestration, structured output' },
      { name: 'OpenAI & Anthropic APIs', level: 'Advanced', context: 'Prompt engineering, tool calling, automated code generation' },
      { name: 'Claude Code & GitHub Copilot', level: 'Core Mastery', context: 'Agentic workflows, pair-programming, automated test generation' }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code',
    description: 'Strong foundation in typed, compiled, and scripting languages.',
    skills: [
      { name: 'Java', level: 'Core Mastery', context: '8, 11, 17 — Concurrency, streams, JVM internals, memory model' },
      { name: 'TypeScript', level: 'Core Mastery', context: 'Full-stack type safety and scalable frontend codebases' },
      { name: 'JavaScript', level: 'Core Mastery', context: 'ESNext, asynchronous event loop, browser APIs, Node.js' },
      { name: 'SQL', level: 'Core Mastery', context: 'Complex queries, execution plan tuning, joins, window functions' },
      { name: 'Golang', level: 'Advanced', context: 'Goroutines, channels, microservices, high-performance CLI tools' },
      { name: 'Kotlin', level: 'Advanced', context: 'Coroutines, null safety, modern backend services' },
      { name: 'C++', level: 'Advanced', context: 'Algorithms, data structures, competitive programming foundation' }
    ]
  }
];
