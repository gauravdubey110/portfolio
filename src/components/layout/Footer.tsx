import React from 'react';
import { Mail, FileDown, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060a] border-t border-surface-border py-10 text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-800/80">
          {/* Col 1: Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs">
                GD
              </div>
              <span className="font-bold text-sm text-white">{profileData.name}</span>
            </div>
            <p className="text-zinc-300 leading-relaxed max-w-md text-xs sm:text-sm font-sans">
              Software Engineer specializing in scalable distributed systems, event-driven platforms, and cloud-native backend engineering.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 pt-1 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Status: {profileData.status}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">System Maps</div>
            <ul className="space-y-1.5 text-zinc-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Philosophy</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience & Timeline</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Architecture Studies</a></li>
              <li><a href="#stack" className="hover:text-cyan-400 transition-colors">Technical Stack</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects & Repositories</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">Direct Endpoints</div>
            <div className="flex items-center gap-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface text-zinc-400 hover:text-white border border-surface-border hover:border-zinc-600 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface text-zinc-400 hover:text-white border border-surface-border hover:border-zinc-600 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg bg-surface text-zinc-400 hover:text-white border border-surface-border hover:border-zinc-600 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="/Gaurav_Dubey__SWE_Resume.pdf"
                download="Gaurav_Dubey_Resume.pdf"
                className="p-2 rounded-lg bg-surface text-cyan-400 hover:text-cyan-300 border border-surface-border hover:border-cyan-500/40 transition-all"
                aria-label="Download Resume"
              >
                <FileDown className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-zinc-500">
              Zero telemetry tracking. Built for performance, accessibility, and high availability.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-zinc-500 text-[11px]">
            © {new Date().getFullYear()} Gaurav Dubey · Built with React, TypeScript & Tailwind CSS.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-zinc-800 text-zinc-400 hover:text-white border border-surface-border transition-colors text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
