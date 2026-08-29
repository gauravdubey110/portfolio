import { ProjectItem } from '../types/portfolio';

export const featuredProjects: ProjectItem[] = [
  {
    id: 'streamflow',
    name: 'StreamFlow',
    badge: 'Distributed Systems & Stream Processing',
    description: 'High-throughput real-time stream processing framework built in Java with containerized worker orchestration, backpressure handling, and event routing.',
    architectureDetail: 'Implements event-driven worker consumers with configurable batching, partition-aware routing, and Docker Compose orchestration.',
    techStack: ['Java 17', 'Apache Kafka', 'Distributed Streaming', 'Docker', 'Multi-Threading'],
    githubUrl: 'https://github.com/gauravdubey110/streamflow',
    featured: true,
    metricsOrHighlight: 'Low-latency streaming architecture'
  },
  {
    id: 'realtime-code-editor',
    name: 'Realtime Code Editor (CodeShare)',
    badge: 'Real-Time Web & WebSockets',
    description: 'Collaborative cloud code editor allowing distributed developers to edit code simultaneously with live WebSocket synchronization and JWT-secured rooms.',
    architectureDetail: 'Engineered with WebSockets for sub-10ms cursor/character synchronization, room-based isolation, conflict resolution, and secure session management.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.io', 'JWT Auth'],
    githubUrl: 'https://github.com/gauravdubey110/Realtime-code-editor',
    featured: true,
    metricsOrHighlight: 'Sub-10ms multi-user room synchronization'
  },
  {
    id: 'newsapp',
    name: 'NewsApp Content Aggregator',
    badge: 'API Integration & Dynamic Feeds',
    description: 'Dynamic content aggregation engine fetching, normalizing, and rendering real-time global news feeds with category-based routing and search.',
    architectureDetail: 'Implements request debouncing, client-side caching for instant category transitions, and resilient fallback handling for external API limits.',
    techStack: ['React', 'REST APIs', 'JavaScript', 'CSS3', 'Component Architecture'],
    githubUrl: 'https://github.com/gauravdubey110/NewsApp',
    featured: true,
    metricsOrHighlight: 'Dynamic category pagination & API caching'
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
  }
];
