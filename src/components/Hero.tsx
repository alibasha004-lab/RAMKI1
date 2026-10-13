import React from 'react';
import { ShieldCheck, ArrowRight, FileText, CheckCircle2, Building2, Zap, Lock, Mail } from 'lucide-react';
import { EXECUTIVE_PROFILE, KEY_METRICS } from '../data/portfolioData';
import { ExecutiveAvatar } from './ExecutiveAvatar';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800/80">
      {/* Background Architectural FinTech Gradients */}
      <div className="absolute inset-0 bg-[#0A1128] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/25 via-slate-900/0 to-transparent pointer-events-none" />
      
      {/* Fine architectural coordinate grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Primary Messaging */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/70 border border-blue-800/50 rounded-md text-xs font-semibold tracking-wider text-blue-400 uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>{EXECUTIVE_PROFILE.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Engineering Resilient, High-Throughput Architectures for Modern Banking Systems.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {EXECUTIVE_PROFILE.subheadline}
            </p>

            {/* Value Proposition Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Monolith-to-microservices core decoupling with zero downtime cutover</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>ISO 20022 instant payment rails & sub-800ms settlement engines</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Zero Trust perimeters, CloudHSM tokenization & PCI-DSS Tier-1</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Active-Active multi-region cloud topologies with RPO=0 and RTO &lt; 60s</span>
              </div>
            </div>

            {/* CTA Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg shadow-blue-600/25 transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Executive CV</span>
              </button>

              <a
                href={`mailto:${EXECUTIVE_PROFILE.email}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap"
                title="Direct Inquiries"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{EXECUTIVE_PROFILE.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
              {/* Image Frame */}
              <div className="aspect-[4/4.4] w-full mb-5 rounded-xl overflow-hidden bg-slate-950">
                <ExecutiveAvatar className="w-full h-full" showUploadOption={true} />
              </div>

              {/* Executive Identity & Roles */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Mr. Ramakrishna</h2>
                    <p className="text-xs font-medium text-blue-400 mt-0.5">Principal Enterprise Architect</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      Tier-1 Ready
                    </span>
                  </div>
                </div>

                {/* Target Profiles */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 block font-mono">
                    Specialized Banking Sectors:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Tier-1 / Tier-2 Commercial & Retail Banks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Hyper-Growth FinTech Scale-Ups & Neobanks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Enterprise Core Modernization & Payment Rails</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Dynamic KPI Cards with Tabular Numerals */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_METRICS.map((kpi) => (
              <div 
                key={kpi.id}
                className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/90 rounded-xl p-5 transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums group-hover:text-blue-400 transition-colors">
                  {kpi.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {kpi.label}
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {kpi.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
