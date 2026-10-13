import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A1128]/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark (Strict single-line text element) */}
          <a 
            href="#" 
            className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            RAMAKRISHNA
          </a>

          {/* Zone 2: Concise Nav Links (Single-line clean typography links) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a 
              href="#expertise" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
            >
              Expertise
            </a>
            <a 
              href="#case-studies" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
            >
              Case Studies
            </a>
            <a 
              href="#tech-stack" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
            >
              Architecture Stack
            </a>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Executive CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1128]/95 border-b border-slate-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-medium text-slate-300">
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              Expertise
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              Case Studies
            </a>
            <a
              href="#tech-stack"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              Architecture Stack
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-3 text-center font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
