import React from 'react';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <SectionContainer
      id="education"
      badge="Academic Foundation"
      badgeVariant="neutral"
      title="Education & Foundations"
      subtitle="Formal training in Computer Science, algorithms, distributed systems theory, and software engineering."
      className="py-12 md:py-16"
    >
      <div className="max-w-3xl">
        <Card className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-zinc-900 text-cyan-400 border border-zinc-800 flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Jaypee University of Engineering and Technology, Guna
                </h3>
                <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                  Bachelor of Technology (B.Tech) — Computer Science and Engineering
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 sm:self-start">
              <Calendar className="w-3.5 h-3.5" />
              <span>2019 – 2023</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2 bg-[#090c12] p-2.5 rounded-lg border border-surface-border">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Data Structures, Algorithms & OS</span>
            </div>
            <div className="flex items-center gap-2 bg-[#090c12] p-2.5 rounded-lg border border-surface-border">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Distributed Computing & DBMS</span>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
};
