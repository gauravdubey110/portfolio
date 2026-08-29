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
      subtitle="Formal training in Computer Science, algorithms, distributed systems theory, and database systems."
    >
      <div className="max-w-3xl">
        <Card className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-border">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-zinc-900 text-cyan-400 border border-zinc-800 flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Jaypee University of Engineering and Technology, Guna
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                  Bachelor of Technology (B.Tech) — Computer Science and Engineering
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 sm:self-start">
              <Calendar className="w-3.5 h-3.5" />
              <span>2019 – 2023</span>
            </div>
          </div>

          <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2 bg-[#090c12] p-2.5 rounded-lg border border-surface-border">
              <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>Data Structures, Algorithms & OS</span>
            </div>
            <div className="flex items-center gap-2 bg-[#090c12] p-2.5 rounded-lg border border-surface-border">
              <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>Distributed Computing & DBMS</span>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
};
