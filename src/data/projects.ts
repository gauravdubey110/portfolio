import { ProjectItem } from '../types/portfolio';

export const featuredProjects: ProjectItem[] = [
  {
    id: 'streamflow',
    name: 'StreamFlow',
    badge: 'Distributed Systems & Stream Processing',
    description: 'High-throughput real-time stream processing framework and pipeline built in Java with containerized worker orchestration and event routing.',
    architectureDetail: 'Implements event-driven worker consumers with configurable batching, backpressure handling, and containerized Docker Compose environment.',
    techStack: ['Java 17', 'Distributed Streaming', 'Docker', 'Kafka', 'Multi-Threading'],
    githubUrl: 'https://github.com/gauravdubey110/streamflow',
    featured: true,
    metricsOrHighlight: 'Low-latency streaming architecture'
  },
  {
    id: 'realtime-code-editor',
    name: 'Realtime Code Editor (CodeShare)',
    badge: 'Real-Time Web & WebSockets',
    description: 'Collaborative cloud code editor allowing multiple distributed developers to edit code simultaneously with live synchronization and JWT-secured room tokens.',
    architectureDetail: 'Engineered with WebSockets for sub-10ms cursor/character synchronization, room-based isolation, conflict resolution, and secure session management.',
    techStack: ['React', 'Node.js', 'Express', 'Socket.io', 'JWT Authentication', 'MERN'],
    githubUrl: 'https://github.com/gauravdubey110/Realtime-code-editor',
    featured: true,
    metricsOrHighlight: 'Multi-user real-time room synchronization'
  },
  {
    id: 'financial-trading-platform',
    name: 'Financial Trading Engine',
    badge: 'Financial Systems & Java Backend',
    description: 'Financial market simulation and order processing backend architected for concurrent trade execution and transaction logging.',
    architectureDetail: 'Applies thread-safe order matching logic, transactional persistence, and structured API endpoints for high-frequency portfolio state queries.',
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Concurrency'],
    githubUrl: 'https://github.com/gauravdubey110/financial-trading-platform-app',
    featured: true,
    metricsOrHighlight: 'Concurrent order execution engine'
  },
  {
    id: 'taskapp',
    name: 'TaskApp Orchestration Platform',
    badge: 'Full-Stack & Authentication',
    description: 'Scalable task management and workflow reminder platform with role-based JWT authentication, persistent storage, and responsive UI.',
    architectureDetail: 'Decoupled REST API layer with stateless JWT verification, optimized MongoDB indexing, and responsive React client.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
    githubUrl: 'https://github.com/gauravdubey110/TaskApp',
    featured: false,
    metricsOrHighlight: 'Stateless JWT auth & automated scheduling'
  },
  {
    id: 'techskolir',
    name: 'Techskölir Developer Suite',
    badge: 'Developer Tools & Full Stack',
    description: 'Suite of utility tools and algorithm workbenches built to streamline everyday developer tasks and data transformations.',
    architectureDetail: 'Modular tool architecture with isolated client-side worker execution for instant text/data manipulation and server-side aggregation APIs.',
    techStack: ['React', 'JavaScript', 'MongoDB', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/gauravdubey110/Techskolir',
    featured: false,
    metricsOrHighlight: 'Comprehensive developer workbench suite'
  },
  {
    id: 'newsapp',
    name: 'NewsApp Content Aggregator',
    badge: 'API Integration & Frontend',
    description: 'Dynamic, category-based content aggregation engine fetching and normalizing live global news feeds with responsive pagination.',
    architectureDetail: 'Implements request debouncing, client-side caching for fast category switching, and resilient fallback handling for third-party API limits.',
    techStack: ['React', 'REST APIs', 'JavaScript', 'CSS3', 'Component Architecture'],
    githubUrl: 'https://github.com/gauravdubey110/NewsApp',
    featured: false,
    metricsOrHighlight: 'Dynamic category pagination & API caching'
  }
];
