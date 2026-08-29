import React, { useState } from 'react';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';
import { Mail, Copy, Check, Terminal, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSentStatus(true);
  };

  return (
    <SectionContainer
      id="contact"
      badge="Initialize Connection"
      badgeVariant="cyan"
      title="Let's Build Something That Scales"
      subtitle="Open for senior backend engineering, distributed systems architecture, and high-impact full-stack roles."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Reach & Interactive CLI */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Direct Communication Endpoints
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#090c12] border border-surface-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Primary Email</div>
                    <a href={`mailto:${profileData.email}`} className="text-zinc-200 hover:text-cyan-400 transition-colors font-medium">
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-md bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#090c12] border border-surface-border hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-indigo-950/60 text-indigo-400 border border-indigo-800/40">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Professional Network</div>
                    <div className="text-zinc-200 group-hover:text-indigo-300 font-medium">linkedin.com/in/gaurav-dubey</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400" />
              </a>

              {/* GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#090c12] border border-surface-border hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Code Repository</div>
                    <div className="text-zinc-200 group-hover:text-white font-medium">github.com/gauravdubey110</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white" />
              </a>
            </div>
          </Card>
        </div>

        {/* Right Column: Interactive Direct Message Form */}
        <div className="lg:col-span-7">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">
              Send a Direct Transmission
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Fill out the parameters below to open your native email client directly with prefilled details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Miller"
                    className="w-full px-3.5 py-2 text-xs font-mono bg-[#090c12] border border-surface-border rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2 text-xs font-mono bg-[#090c12] border border-surface-border rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                  Message / Architecture Scope
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the distributed system, engineering team, or role you have in mind..."
                  className="w-full px-3.5 py-2 text-xs font-mono bg-[#090c12] border border-surface-border rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono text-xs font-semibold shadow-md shadow-cyan-950/40 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Message</span>
              </button>

              {sentStatus && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Email client opened! Feel free to copy {profileData.email} directly as well.</span>
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
};
