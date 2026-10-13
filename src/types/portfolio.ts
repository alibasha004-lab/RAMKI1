export interface KeyMetric {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface ArchitecturalPillar {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CoreDomain {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  patterns: string[];
  technologies: string[];
  regulatoryAlignment: string[];
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  clientType: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    change: string;
  }[];
  architectureHighlights: string[];
  techStack: string[];
}

export interface TechItem {
  name: string;
  category: 'core-banking' | 'payments' | 'cloud' | 'data' | 'security';
  description: string;
  standardOrVendor: string;
}

export interface EngagementTier {
  id: string;
  number: string;
  name: string;
  duration: string;
  deliverables: string[];
  targetAudience: string;
  pricingAnchor?: string;
  recommendedFor: string;
}
