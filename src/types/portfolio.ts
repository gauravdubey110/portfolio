export interface Profile {
  name: string;
  title: string;
  tagline: string;
  rolePrimary: string;
  roleSecondary: string;
  location: string;
  experienceYears: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  status: string;
  avatarUrl?: string;
}

export interface MetricItem {
  id: string;
  value: string;
  prefix?: string;
  suffix?: string;
  numericTarget: number;
  label: string;
  description: string;
  category: 'throughput' | 'scale' | 'performance' | 'reliability' | 'velocity';
  highlight?: boolean;
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  type?: string;
  summary: string;
  coreHighlights: string[];
  metrics: string[];
  technologies: string[];
  architectureNotes?: string;
}

export interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  problem: string;
  architecture: {
    overview: string;
    keyComponents: string[];
    diagramTitle?: string;
  };
  bottleneck: string;
  engineeringSolution: string[];
  outcomes: {
    metric: string;
    label: string;
  }[];
  techStack: string[];
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  iconName: string;
  coreConcept: string;
  practices: {
    name: string;
    detail: string;
    grounding: string;
  }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Core Mastery' | 'Advanced' | 'Proficient';
    context?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  architectureDetail: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  metricsOrHighlight?: string;
}

export interface AiCapability {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
  impact: string;
}
