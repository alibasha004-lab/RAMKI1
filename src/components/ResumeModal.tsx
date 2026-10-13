import React from 'react';
import { X, Download, Printer, CheckCircle2, ShieldCheck, Mail, Linkedin, MapPin } from 'lucide-react';
import { EXECUTIVE_PROFILE, KEY_METRICS, ARCHITECTURAL_PILLARS, TECHNICAL_MATRIX } from '../data/portfolioData';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0F172A] border border-slate-700 max-w-4xl w-full max-h-[92vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-bold text-white">Executive Curriculum Vitae &amp; Credentials</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Scrollable CV Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 bg-slate-950/90 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {EXECUTIVE_PROFILE.name}
            </h1>
            <p className="text-base text-blue-400 font-semibold">
              {EXECUTIVE_PROFILE.roleTitle} — {EXECUTIVE_PROFILE.specialization}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {EXECUTIVE_PROFILE.email}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                {EXECUTIVE_PROFILE.linkedin}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Global Advisory &amp; On-Site Governance
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Executive Profile &amp; Value Proposition
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {EXECUTIVE_PROFILE.bio}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {EXECUTIVE_PROFILE.valueProposition}
            </p>
          </div>

          {/* Core Quantifiable Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
            {KEY_METRICS.map(km => (
              <div key={km.id} className="space-y-1">
                <div className="text-2xl font-bold text-white font-mono">{km.value}</div>
                <div className="text-xs font-semibold text-blue-400">{km.label}</div>
              </div>
            ))}
          </div>

          {/* Core Architectural Pillars */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Core Architectural Pillars
            </h2>
            <div className="space-y-3">
              {ARCHITECTURAL_PILLARS.map(p => (
                <div key={p.number} className="text-xs space-y-1 bg-slate-900/40 p-3.5 rounded-lg border border-slate-800">
                  <span className="font-bold text-white text-sm">{p.number}. {p.title}</span>
                  <p className="text-slate-300">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Case Study Highlights */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Selected Flagship Transformations
            </h2>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-4 bg-slate-900/40 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white">Tier-1 Retail Bank Core Migration (24M Accounts)</span>
                <p>Engineered Kafka + Cassandra Strangler Fig migration. Increased peak throughput from 400 to 8,500 TPS; reduced midnight batch window from 6.0 hours to 18 minutes with 99.999% availability.</p>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white">Multi-Currency Real-Time Payment Rail (ISO 20022)</span>
                <p>Designed distributed payment router validating ISO 20022 XML (pacs.008/pacs.002). Achieved sub-800ms routing latency and automated 99.4% of reconciliation exceptions.</p>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white">Neobank Cloud-Native Card Issuance Architecture (1.2M Accounts)</span>
                <p>Architected serverless ledger with AWS CloudHSM tokenization and sub-100ms authorization webhooks under PCI-DSS Level 1 compliance with zero security audit findings.</p>
              </div>
            </div>
          </div>

          {/* Technical Standards & Governance */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Enterprise Governance &amp; Stack Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-slate-900/40 rounded border border-slate-800">
                <span className="font-semibold text-white block">Core Banking &amp; Ledgers:</span>
                <span className="text-slate-400">Mambu, Finacle, Temenos Transact, Thought Machine, Custom Ledgers</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded border border-slate-800">
                <span className="font-semibold text-white block">Payment Protocols &amp; Standards:</span>
                <span className="text-slate-400">ISO 20022 (pacs/camt/pain), SWIFT MT/MX, FedNow, SEPA Instant, RTGS</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded border border-slate-800">
                <span className="font-semibold text-white block">Cloud &amp; Infrastructure:</span>
                <span className="text-slate-400">AWS Financial Services, Microsoft Azure for Banking, Kubernetes, Terraform</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded border border-slate-800">
                <span className="font-semibold text-white block">Security &amp; Regulatory Standards:</span>
                <span className="text-slate-400">PCI-DSS v4.0 Level 1, FAPI, OAuth 2.0 mTLS, CloudHSM, SOC 2 Type II</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex justify-between items-center">
          <span className="text-xs text-slate-400">
            Confidential Executive Briefing Document · Mr. Ramakrishna
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Print / Save
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
