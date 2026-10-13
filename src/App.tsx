import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ArchitecturalDomains } from './components/ArchitecturalDomains';
import { CaseStudies } from './components/CaseStudies';
import { TechStackMatrix } from './components/TechStackMatrix';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A1128] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Bar conforming to Top Bar Contract */}
      <Header onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Executive Summary & 4 Architectural Pillars */}
        <ExecutiveSummary />

        {/* 6 Specialized Enterprise Architectural Domains */}
        <ArchitecturalDomains />

        {/* 3 Flagship Deep-Dive Case Studies */}
        <CaseStudies />

        {/* Production-Verified Technical Matrix & Governance */}
        <TechStackMatrix />
      </main>

      {/* Minimalist Compliant Footer */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Executive CV & Credentials Modal */}
      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}
    </div>
  );
}
