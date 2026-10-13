import React, { useState } from 'react';
import { CORE_DOMAINS } from '../data/portfolioData';
import { CoreDomain } from '../types/portfolio';
import { ArrowRight, X, CheckCircle, Cpu, Radio, Shield, Cloud, Server, Database } from 'lucide-react';

export const ArchitecturalDomains: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<CoreDomain | null>(null);

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'domain-1': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'domain-2': return <Radio className="w-5 h-5 text-blue-400" />;
      case 'domain-3': return <Server className="w-5 h-5 text-blue-400" />;
      case 'domain-4': return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'domain-5': return <Shield className="w-5 h-5 text-blue-400" />;
      case 'domain-6': return <Database className="w-5 h-5 text-blue-400" />;
      default: return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            Enterprise Architecture Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Six Specialized Architectural Domains
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Battle-tested engineering patterns designed specifically for high-throughput transactional ledgers, strict regulatory oversight, and zero-downtime banking operations.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              onClick={() => setSelectedDomain(domain)}
              className="bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800 hover:border-blue-700/60 rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-blue-950/70 border border-blue-900/50 rounded-xl group-hover:scale-105 transition-transform">
                    {getDomainIcon(domain.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                    Domain {domain.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {domain.summary}
                  </p>
                </div>

                {/* Key Architectural Patterns */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold tracking-wide uppercase text-slate-400">
                    Core Patterns:
                  </span>
                  <div className="flex flex-col gap-1 text-xs text-slate-400">
                    {domain.patterns.slice(0, 3).map((pat) => (
                      <div key={pat} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                        <span className="truncate">{pat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-blue-400 group-hover:text-blue-300">
                <span>View Architecture Spec</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Specification Modal */}
        {selectedDomain && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-[#0F172A] border border-slate-700/80 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-6">
              {/* Close Button */}
              <button
                onClick={() => setSelectedDomain(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-950/80 border border-blue-900/50 rounded-xl">
                  {getDomainIcon(selectedDomain.id)}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-blue-400">
                    Domain {selectedDomain.number} Specification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedDomain.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                <p>{selectedDomain.details}</p>

                {/* Patterns */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Architectural Patterns & Mechanisms
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedDomain.patterns.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Production Stack & Tooling
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDomain.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-slate-800 text-slate-200 rounded text-xs font-mono border border-slate-700/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Regulatory Alignment */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Regulatory & Compliance Alignment
                  </h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
                    {selectedDomain.regulatoryAlignment.map((reg, rIdx) => (
                      <React.Fragment key={reg}>
                        <span className="text-emerald-400">{reg}</span>
                        {rIdx < selectedDomain.regulatoryAlignment.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
