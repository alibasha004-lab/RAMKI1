import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types/portfolio';
import { TrendingUp, ArrowRight, ShieldCheck, CheckCircle2, Layers, Cpu, Eye } from 'lucide-react';
import { ArchitectureDiagramModal } from './ArchitectureDiagramModal';

export const CaseStudies: React.FC = () => {
  const [selectedDiagramCase, setSelectedDiagramCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 border-b border-slate-800/80 bg-[#090E22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            Flagship Architectural Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Verified Production Transformations
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Three deep-dive architectural case studies illustrating real-world legacy decoupling, sub-second payment settlement, and PCI-DSS Level 1 infrastructure execution.
          </p>
        </div>

        {/* Case Studies Deep-Dive Cards */}
        <div className="space-y-12">
          {CASE_STUDIES.map((cs, index) => (
            <div
              key={cs.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all shadow-xl"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                    <span>CASE STUDY 0{index + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">{cs.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Client Profile:</span> {cs.clientType}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedDiagramCase(cs)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-950/70 hover:bg-blue-900/70 border border-blue-800/60 text-blue-300 hover:text-white rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Architecture Topology</span>
                </button>
              </div>

              {/* 3-Part Architecture Breakdown: Problem, Solution, Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-b border-slate-800">
                {/* Problem */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-rose-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>The Critical Bottleneck</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                {/* Architectural Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Architectural Engineering</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                {/* Quantifiable Impact */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Business & Operational Outcome</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cs.outcome}
                  </p>
                </div>
              </div>

              {/* Metrics & Architecture Badges Strip */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Before vs After Metric Cards */}
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-1.5"
                    >
                      <div className="text-[11px] font-medium text-slate-400 truncate">
                        {m.label}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-white font-mono tabular-nums">
                          {m.after}
                        </span>
                        <span className="text-[11px] text-slate-500 line-through font-mono">
                          {m.before}
                        </span>
                      </div>
                      <div className="text-[11px] font-semibold text-emerald-400 font-mono">
                        {m.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="md:col-span-5 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block font-mono">
                    Architecture Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Diagram Interactive Modal */}
      {selectedDiagramCase && (
        <ArchitectureDiagramModal
          caseStudy={selectedDiagramCase}
          onClose={() => setSelectedDiagramCase(null)}
        />
      )}
    </section>
  );
};
