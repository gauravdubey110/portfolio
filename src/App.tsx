import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { MetricsGrid } from './components/metrics/MetricsGrid';
import { AboutSection } from './components/about/AboutSection';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { CaseStudiesSection } from './components/caseStudies/CaseStudiesSection';
import { PrinciplesSection } from './components/principles/PrinciplesSection';
import { SkillsConstellation } from './components/skills/SkillsConstellation';
import { ProjectsGrid } from './components/projects/ProjectsGrid';
import { AiWorkflowSection } from './components/aiWorkflow/AiWorkflowSection';
import { EducationSection } from './components/education/EducationSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero & Distributed System Visualizer */}
        <Hero />

        {/* 2. Impact & Engineering Telemetry */}
        <MetricsGrid />

        {/* 3. About & Engineering Philosophy */}
        <AboutSection />

        {/* 4. Experience & Career Progression */}
        <ExperienceTimeline />

        {/* 5. Deep-Dive Case Studies */}
        <CaseStudiesSection />

        {/* 6. Systems Thinking / Principles */}
        <PrinciplesSection />

        {/* 7. Interactive Technical Stack */}
        <SkillsConstellation />

        {/* 8. Projects & Open Source */}
        <ProjectsGrid />

        {/* 9. AI & Spec-Driven Development (MCP) */}
        <AiWorkflowSection />

        {/* 10. Education */}
        <EducationSection />

        {/* 11. Contact & Transmission */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
