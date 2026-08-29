import { Profile } from '../types/portfolio';

export const profileData: Profile = {
  name: "Gaurav Dubey",
  title: "Software Engineer, Full Stack | Java & Spring Boot | React & TypeScript | Distributed Systems",
  tagline: "Architecting distributed systems for scale, reliability, and sub-millisecond precision.",
  rolePrimary: "Software Engineer",
  roleSecondary: "Distributed Systems · Backend Architecture · Full Stack",
  location: "Bengaluru, India",
  experienceYears: "3+ Years",
  email: "546gauravdubey@gmail.com",
  linkedin: "https://www.linkedin.com/in/gaurav-dubey-79a448190/",
  github: "https://github.com/gauravdubey110",
  summary: "Full-stack Software Engineer with 3+ years building distributed backend systems (Java, Spring Boot, Kafka, Kubernetes) and modern frontend experiences (React, TypeScript) — architecting event-driven platforms that process 10M+ events/day at scale, and shipping end-to-end features spanning API design through UI delivery. Experienced in large-scale distributed systems, system design, performance tuning, cross-team design reviews, and mentoring engineers.",
  status: "Designing high-scale distributed backends & scalable platforms",
  avatarUrl: "/gaurav-dubey.jpg"
};

export const heroCopy = {
  eyebrow: "Software Engineer · Distributed Systems & Full Stack",
  headline: "Building distributed systems for scale, reliability, and speed.",
  subheadline: "Architecting event-driven platforms processing 10M+ events/day, dual-write migrations of 40M+ records with zero downtime, and engineering high-throughput microservices serving 15M+ requests daily.",
  quickStats: [
    { label: "Daily Event Stream", value: "10M+" },
    { label: "Data Migrated", value: "40M+" },
    { label: "Peak TPS Sustained", value: "~10K" },
    { label: "Daily API Traffic", value: "15M+" }
  ]
};
