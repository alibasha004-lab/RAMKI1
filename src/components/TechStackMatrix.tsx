import React, { useState } from 'react';
import { TECHNICAL_MATRIX } from '../data/portfolioData';
import { Search, Layers, Check } from 'lucide-react';

export const TechStackMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'core-banking', label: 'Core Banking' },
    { id: 'payments', label: 'Payments & Rails' },
    { id: 'cloud', label: 'Cloud & Infra' },
    { id: 'data', label: 'Data & Streaming' },
    { id: 'security', label: 'Security & Standards' }
  ];

  const filteredItems = TECHNICAL_MATRIX.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.standardOrVendor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tech-stack" className="py-20 border-b border-slate-800/80 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">
              Enterprise Technology Stack &amp; Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Production-Verified Technical Matrix
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Curated platforms, messaging formats, regulatory standards, and cloud topologies deployed across Tier-1 banking and fintech engagements.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g., Kafka, ISO 20022)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Segmented Tabs (Functional Buttons) */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-900/60 border border-slate-800 rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all flex flex-col justify-between group space-y-3"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/70">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.standardOrVendor}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {/* Clean unboxed footer */}
              <div className="pt-2 text-[11px] font-mono text-blue-400/90 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Enterprise Architecture Verified</span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-slate-900/20 border border-slate-800 rounded-xl">
            <p className="text-sm text-slate-400">No technology matched "{searchQuery}". Try searching for Kafka, ISO, or Mambu.</p>
          </div>
        )}
      </div>
    </section>
  );
};
