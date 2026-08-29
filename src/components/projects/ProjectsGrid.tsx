import React from 'react';
import { featuredProjects } from '../../data/projects';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

export const ProjectsGrid: React.FC = () => {
  return (
    <SectionContainer
      id="projects"
      badge="Open Source & Repos"
      badgeVariant="indigo"
      title="Featured Projects & Open Source"
      subtitle="Selected public repositories demonstrating stream processing, real-time collaboration, concurrent engines, and full-stack systems."
    >
      {/* 2x2 Clean Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuredProjects.map((project) => (
          <Card
            key={project.id}
            glow={project.featured}
            className="flex flex-col justify-between p-5 sm:p-6"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <Badge variant={project.featured ? 'cyan' : 'neutral'} size="sm">
                  {project.badge}
                </Badge>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-surface-elevated transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-1.5 group">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>{project.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 mb-3.5 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Detail */}
              <div className="p-3 rounded-lg bg-[#090c12] border border-surface-border text-xs text-zinc-300 mb-3.5 font-mono">
                <div className="text-[10px] text-cyan-400 uppercase font-bold mb-1 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-cyan-400" /> Architecture Detail
                </div>
                {project.architectureDetail}
              </div>
            </div>

            {/* Tech Stack & Links */}
            <div className="pt-3 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold self-start sm:self-auto whitespace-nowrap"
              >
                <span>Inspect Repo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* GitHub Profile Banner */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-surface border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-zinc-900 text-white border border-zinc-800 flex-shrink-0">
            <GithubIcon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              Explore More Repositories on GitHub
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Browse additional algorithms, competitive programming solutions, backend tools, and experimental utilities.
            </p>
          </div>
        </div>

        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated hover:bg-zinc-800 text-white border border-surface-border hover:border-zinc-600 font-mono text-xs font-semibold whitespace-nowrap transition-all"
        >
          <span>github.com/gauravdubey110</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
        </a>
      </div>
    </SectionContainer>
  );
};
