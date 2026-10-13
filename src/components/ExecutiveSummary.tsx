import React from 'react';
import { ARCHITECTURAL_PILLARS, EXECUTIVE_PROFILE } from '../data/portfolioData';
import { Layers, Network, KeyRound, ShieldAlert } from 'lucide-react';

export const ExecutiveSummary: React.FC = () => {
  const pillarIcons = [
    <Layers className="w-5 h-5 text-blue-400" />,
    <Network className="w-5 h-5 text-blue-400" />,
    <KeyRound className="w-5 h-5 text-blue-400" />,
    <ShieldAlert className="w-5 h-5 text-blue-400" />
  ];

  return (
    <section id="expertise" className="py-20 border-b border-slate-800/80 bg-[#090F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
            Executive Summary & Architecture Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Bridging Complex Financial Regulations with Cloud-Native Engineering.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
            {EXECUTIVE_PROFILE.bio}
          </p>
        </div>

        {/* 2-Column Strategic Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-7 space-y-4">
            <h3 className="text-xl font-bold text-white">The Enterprise Modernization Mandate</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tier-1 financial institutions and scaling fintechs face an existential dual challenge: legacy core systems that struggle with high transaction bursts and batch window bottlenecks, combined with unprecedented regulatory pressure for ISO 20022 compliance and open banking interoperability.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mr. Ramakrishna provides battle-tested enterprise architecture leadership that translates board-level risk mandates into deterministic, phased engineering execution—ensuring zero data loss, zero unscheduled cutover downtime, and audited regulatory conformance.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-7 space-y-4">
            <h3 className="text-xl font-bold text-white">Who Mr. Ramakrishna Partners With</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="pb-3 border-b border-slate-800/80">
                <span className="font-semibold text-white">Chief Information Officers (CIOs) & CTOs:</span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Seeking independent architectural due diligence, legacy mainframe decoupling roadmaps, and failover validation without vendor bias.
                </p>
              </div>
              <div className="pb-3 border-b border-slate-800/80">
                <span className="font-semibold text-white">Heads of Enterprise Architecture:</span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Requiring hands-on reference designs for event-sourced balance ledgers, ISO 20022 translation bridges, and FAPI-grade microgateways.
                </p>
              </div>
              <div>
                <span className="font-semibold text-white">FinTech Founders & VP Engineering:</span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Neobanks requiring instant card issuance pipelines, PCI-DSS Level 1 certification, and CloudHSM key management in months, not years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Architectural Pillars */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white tracking-tight">Four Architectural Pillars</h3>
            <span className="text-xs text-slate-400 font-mono">Foundational Standards</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURAL_PILLARS.map((pillar, index) => (
              <div
                key={pillar.number}
                className="bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/90 hover:border-blue-900/50 rounded-xl p-6 transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-blue-950/60 border border-blue-900/40 rounded-lg">
                    {pillarIcons[index]}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Clean unboxed tags with typographic separators */}
                <div className="pt-3 border-t border-slate-800/70 text-[11px] text-slate-400 flex flex-wrap gap-x-2 gap-y-1 font-mono">
                  {pillar.tags.map((tag, tIndex) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {tIndex < pillar.tags.length - 1 && <span className="text-slate-600" aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
