import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B1A] border-t border-slate-800/80 py-14 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">RAMAKRISHNA</span>
              <span className="text-slate-600">/</span>
              <span className="text-xs text-blue-400 font-mono">Principal Enterprise Architect</span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              Specializing in Core Banking Modernization, ISO 20022 Real-Time Payment Rails, and Cloud-Native Resilient Financial Infrastructures.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#tech-stack" className="hover:text-white transition-colors">Architecture Stack</a>
            <button onClick={onOpenResumeModal} className="hover:text-white transition-colors cursor-pointer">
              Executive CV
            </button>
            <a href={`mailto:${EXECUTIVE_PROFILE.email}`} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              {EXECUTIVE_PROFILE.email}
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} Mr. Ramakrishna. All rights reserved.
            </div>
            <p className="text-slate-400">
              Banking architecture schematics, transaction topologies, and case study metrics are confidential property.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${EXECUTIVE_PROFILE.email}`}
              className="hover:text-slate-200 transition-colors"
              title="Email Inquiry"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={EXECUTIVE_PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-200 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded border border-slate-800 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
