import React from 'react';
import { CaseStudy } from '../types/portfolio';
import { X, ArrowRight, CheckCircle2, Shield, Database, Cpu, Server, Lock, Layers } from 'lucide-react';

interface ArchitectureDiagramModalProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

export const ArchitectureDiagramModal: React.FC<ArchitectureDiagramModalProps> = ({ caseStudy, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0F172A] border border-slate-700 max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          aria-label="Close Diagram"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400">
            System Topology & Message Flow
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">
            {caseStudy.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Reference Architectural Blueprint designed by Mr. Ramakrishna
          </p>
        </div>

        {/* Dynamic Interactive Diagram Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 overflow-x-auto">
          {caseStudy.id === 'case-1' && (
            /* Strangler Fig Event-Driven Decoupling Flow */
            <div className="min-w-[650px] space-y-6">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800">
                <span>PHASED STRANGLER FIG CORE DECOUPLING PIPELINE</span>
                <span className="text-emerald-400">ZERO DOWNTIME CUTOVER</span>
              </div>

              <div className="grid grid-cols-4 gap-4 items-center">
                {/* Node 1 */}
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-center space-y-2">
                  <Server className="w-6 h-6 text-slate-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Legacy Core</div>
                  <div className="text-[10px] text-slate-400 font-mono">COBOL / AS400</div>
                  <div className="text-[10px] text-rose-400 bg-rose-950/50 py-0.5 rounded">400 TPS Cap</div>
                </div>

                <div className="flex flex-col items-center justify-center text-blue-400 text-xs font-mono">
                  <span>Debezium CDC</span>
                  <ArrowRight className="w-5 h-5 my-1" />
                  <span className="text-[10px] text-slate-500">Change Stream</span>
                </div>

                {/* Node 2 */}
                <div className="bg-blue-950/40 border border-blue-800/80 rounded-lg p-4 text-center space-y-2">
                  <Cpu className="w-6 h-6 text-blue-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Apache Kafka</div>
                  <div className="text-[10px] text-blue-300 font-mono">Event Backbone</div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-950/50 py-0.5 rounded">Exactly-Once</div>
                </div>

                <div className="flex flex-col items-center justify-center text-blue-400 text-xs font-mono">
                  <span>CQRS Stream</span>
                  <ArrowRight className="w-5 h-5 my-1" />
                  <span className="text-[10px] text-slate-500">Dual-Write Sync</span>
                </div>
              </div>

              {/* Bottom Target State */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-5 grid grid-cols-3 gap-4 items-center">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>Shadow Cassandra Ledger</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    High-write distributed partition key by account ID. Real-time balance snapshotting.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Reconciliation Bot</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Automated sub-cent variance discrepancy detector verifying ledger consistency 24/7.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>8,500 TPS Microservices</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Containerized EKS pods serving high-volume salary credit & digital customer queries.
                  </p>
                </div>
              </div>
            </div>
          )}

          {caseStudy.id === 'case-2' && (
            /* ISO 20022 Multi-Currency Router */
            <div className="min-w-[650px] space-y-6">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800">
                <span>ISO 20022 LOW-LATENCY PAYMENT ORCHESTRATION PIPELINE</span>
                <span className="text-emerald-400">&lt; 800MS ROUTING LATENCY</span>
              </div>

              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-center space-y-2">
                  <Server className="w-6 h-6 text-slate-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Inbound Payment</div>
                  <div className="text-[10px] text-blue-400 font-mono">pacs.008 XML</div>
                  <div className="text-[10px] text-slate-400 bg-slate-800 py-0.5 rounded">SWIFT / Local Rails</div>
                </div>

                <div className="flex flex-col items-center justify-center text-blue-400 text-xs font-mono">
                  <span>Fast XML Parser</span>
                  <ArrowRight className="w-5 h-5 my-1" />
                  <span className="text-[10px] text-slate-500">mTLS Handshake</span>
                </div>

                <div className="bg-blue-950/40 border border-blue-800/80 rounded-lg p-4 text-center space-y-2">
                  <Cpu className="w-6 h-6 text-blue-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Redis Idempotency</div>
                  <div className="text-[10px] text-blue-300 font-mono">Deduplication &amp; AML</div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-950/50 py-0.5 rounded">Sub-10ms Lookup</div>
                </div>

                <div className="flex flex-col items-center justify-center text-blue-400 text-xs font-mono">
                  <span>STP Clearing</span>
                  <ArrowRight className="w-5 h-5 my-1" />
                  <span className="text-[10px] text-slate-500">pacs.002 Ack</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-5 grid grid-cols-3 gap-4 items-center">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">FedNow &amp; SEPA Instant</div>
                  <p className="text-[11px] text-slate-400">Direct instant clearing rails routing with automatic ISO MX payload translation.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">Real-Time FX Lock</div>
                  <p className="text-[11px] text-slate-400">In-memory treasury liquidity reserve check with sub-second rate execution.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">99.4% Automated Exceptions</div>
                  <p className="text-[11px] text-slate-400">Replaced manual wire operator triage with self-healing reconciliation rules.</p>
                </div>
              </div>
            </div>
          )}

          {caseStudy.id === 'case-3' && (
            /* Neobank Card Issuance & CloudHSM Topology */
            <div className="min-w-[650px] space-y-6">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800">
                <span>SERVERLESS CARD ISSUANCE &amp; CLOUDHSM CRYPTOGRAPHIC TOPOLOGY</span>
                <span className="text-emerald-400">PCI-DSS LEVEL 1 CERTIFIED</span>
              </div>

              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-center space-y-2">
                  <Server className="w-6 h-6 text-slate-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Digital Banking App</div>
                  <div className="text-[10px] text-blue-400 font-mono">Instant Card Request</div>
                  <div className="text-[10px] text-slate-400 bg-slate-800 py-0.5 rounded">1.2M Accounts</div>
                </div>

                <div className="flex flex-col items-center justify-center text-blue-400 text-xs font-mono">
                  <span>FAPI Gateway</span>
                  <ArrowRight className="w-5 h-5 my-1" />
                  <span className="text-[10px] text-slate-500">JWT Signed</span>
                </div>

                <div className="bg-blue-950/40 border border-blue-800/80 rounded-lg p-4 text-center space-y-2">
                  <Lock className="w-6 h-6 text-blue-400 mx-auto" />
                  <div className="text-xs font-bold text-white">AWS CloudHSM</div>
                  <div className="text-[10px] text-blue-300 font-mono">FIPS 140-2 Level 3</div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-950/50 py-0.5 rounded">PIN / CVV Crypto</div>
                </div>

                <div className="flex flex-col items-center justify-center text-blue-400 text-xs font-mono">
                  <span>Apple / Google Pay</span>
                  <ArrowRight className="w-5 h-5 my-1" />
                  <span className="text-[10px] text-slate-500">Network Token</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-5 grid grid-cols-3 gap-4 items-center">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">DynamoDB Ledger</div>
                  <p className="text-[11px] text-slate-400">Multi-region active-active transactional tables with optimistic locking.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">94ms Webhook Latency</div>
                  <p className="text-[11px] text-slate-400">Visa / Mastercard real-time authorization webhooks responding well below 150ms limit.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">Zero PCI-DSS Findings</div>
                  <p className="text-[11px] text-slate-400">Isolated Cardholder Data Environment (CDE) without storing cleartext PAN/CVV.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Architecture Highlights List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 font-mono">
            Key Architecture Invariants &amp; Delivery Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {caseStudy.architectureHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/50 border border-slate-800 p-3 rounded-lg"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Architecture View
          </button>
        </div>
      </div>
    </div>
  );
};
