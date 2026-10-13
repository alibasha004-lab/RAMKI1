import { KeyMetric, ArchitecturalPillar, CoreDomain, CaseStudy, TechItem, EngagementTier } from '../types/portfolio';

export const EXECUTIVE_PROFILE = {
  name: "Mr. Ramakrishna",
  roleTitle: "Principal Enterprise Architect",
  specialization: "Banking & Financial Technology Solutions",
  email: "contact@ramakrishna-architect.com",
  linkedin: "https://linkedin.com/in/ramakrishna-banking-architect",
  location: "Available for Global Advisory Engagements & On-Site Technical Governance",
  eyebrow: "ENTERPRISE BANKING SOLUTIONS ARCHITECT",
  headline: "Engineering Resilient, High-Throughput Architectures for Modern Banking Systems.",
  subheadline: "Specializing in Core Banking Modernization, Real-Time Payment Rails (ISO 20022), and Cloud-Native Resilience for Tier-1 Financial Institutions and FinTech Scale-Ups.",
  bio: "Mr. Ramakrishna is a Principal Solutions Architect with over two decades of hands-on experience guiding global tier-1 financial institutions, regional retail banks, and agile fintech innovators through complex mission-critical transformations. Specializing in high-throughput ledger engineering, zero-data-loss resiliency patterns, and frictionless regulatory alignment.",
  valueProposition: "Modernizing mission-critical banking infrastructure—transitioning legacy monolithic core banking systems into high-throughput, cloud-native microservices, ISO 20022-compliant real-time payment rails, and zero-trust financial security architectures.",
  targetRoles: [
    "High-Impact Enterprise Banking Solutions Consultant",
    "Strategic Advisory Architect",
    "Fractional Chief Architect for Tier-1/Tier-2 Banks & FinTechs"
  ]
};

export const KEY_METRICS: KeyMetric[] = [
  {
    id: "exp",
    value: "20+",
    label: "Years Enterprise Experience",
    context: "Designing mission-critical financial systems across global banks and fintechs"
  },
  {
    id: "volume",
    value: "$15B+",
    label: "Daily Transaction Capacity",
    context: "Aggregate daily transaction volume processed across delivered architectures"
  },
  {
    id: "availability",
    value: "99.999%",
    label: "High Availability SLA Standard",
    context: "Multi-region active-active topologies ensuring zero unexpected business downtime"
  },
  {
    id: "compliance",
    value: "ISO 20022",
    label: "& PCI-DSS Tier-1 Compliance",
    context: "100% regulatory alignment across FAPI, SOC 2 Type II, and central bank rails"
  }
];

export const ARCHITECTURAL_PILLARS: ArchitecturalPillar[] = [
  {
    number: "01",
    title: "Core Banking Modernization",
    description: "Monolith-to-microservices migration, event-driven ledger architectures (Kafka/EventBridge), CQRS, and high availability (99.999%).",
    tags: ["Strangler Fig Pattern", "Event Sourcing", "Dual-Write Reconciliation", "CQRS Ledgers"]
  },
  {
    number: "02",
    title: "Real-Time Payment Rails & Standards",
    description: "ISO 20022 message compliance (pacs, camt, pain), SWIFT GPI, FedNow, SEPA Instant, and UPI/RTGS integration patterns.",
    tags: ["ISO 20022 pacs.008", "SWIFT MT/MX", "FedNow & SEPA", "Sub-800ms Latency"]
  },
  {
    number: "03",
    title: "Open Banking & API Governance",
    description: "Financial-grade API (FAPI) security profiles, OAuth 2.0 mTLS, PSD2 compliance, microgateway routing, and circuit-breaker resiliency.",
    tags: ["FAPI Profiles", "OAuth 2.0 / mTLS", "Open Banking UK", "Microgateway Routing"]
  },
  {
    number: "04",
    title: "Resilience, Security & Compliance",
    description: "PCI-DSS Level 1, Zero Trust security models, multi-zone disaster recovery (RPO=0, RTO < 60s), data residency, and banking regulatory governance.",
    tags: ["PCI-DSS v4.0", "CloudHSM Tokenization", "Zero Data Loss (RPO=0)", "Real-Time AML"]
  }
];

export const CORE_DOMAINS: CoreDomain[] = [
  {
    id: "domain-1",
    number: "01",
    title: "Core Banking Modernization",
    summary: "Decomposing legacy COBOL/AS400 monoliths into domain-driven microservices with zero cutover downtime.",
    details: "Architecting phased decoupling paths utilizing the Strangler Fig pattern. Establishing event-sourced balance ledgers, Command Query Responsibility Segregation (CQRS), and automated dual-write reconciliation engines to prevent data skew during years-long modernization initiatives.",
    patterns: ["Strangler Fig Decoupling", "CQRS & Event Sourcing", "Dual-Write Ledger Reconciliation", "Domain-Driven Bounded Contexts"],
    technologies: ["Apache Kafka", "Cassandra", "PostgreSQL", "Mambu / Thought Machine", "AWS / Azure"],
    regulatoryAlignment: ["BCBS 239 Risk Aggregation", "Central Bank Auditability", "Continuous Disaster Recovery"]
  },
  {
    id: "domain-2",
    number: "02",
    title: "Real-Time Payment Engines & ISO 20022",
    summary: "Architecting low-latency payment processing pipelines compliant with ISO 20022 XML formats and instant rails.",
    details: "Engineering payment orchestration engines capable of sub-second clearing and routing. Full lifecycle processing for ISO 20022 pacs.008 (credit transfer), pacs.002 (payment status report), camt.053 (bank-to-customer statement), and pain.001 (initiation) across SWIFT GPI, FedNow, SEPA Instant, and UPI.",
    patterns: ["Distributed Message Router", "Schema Validation Pre-Processing", "Idempotent Transaction Handling", "Automated Exception Triage"],
    technologies: ["ISO 20022 XML", "SWIFT Alliance Gateway", "Redis Cluster", "Apache Flink", "Go / Java Microservices"],
    regulatoryAlignment: ["ISO 20022 Mandate", "FedNow Readiness", "EPC SEPA Rulebook", "RTGS Settlement Rules"]
  },
  {
    id: "domain-3",
    number: "03",
    title: "Open Banking & Financial API Platforms",
    summary: "Designing secure, high-throughput API gateways adhering to Financial-grade API (FAPI) security profiles.",
    details: "Implementing zero-trust external API perimeters enforcing mutual TLS (mTLS), asymmetric client certificates, OAuth 2.0 with Private Key JWT, and strict request signing. Microgateway topologies supporting PSD2 open banking standards and third-party provider (TPP) access quotas.",
    patterns: ["FAPI Security Enforcement", "mTLS Asymmetric Cryptography", "Dynamic Quota Management", "Distributed Circuit Breaking"],
    technologies: ["Kong / Envoy Gateway", "Keycloak / Ping Identity", "OpenAPI 3.1", "HashiCorp Vault", "Kubernetes"],
    regulatoryAlignment: ["Open Banking UK Standards", "Berlin Group PSD2", "OAuth 2.0 FAPI 1.0/2.0", "GDPR / CCPA"]
  },
  {
    id: "domain-4",
    number: "04",
    title: "Cloud Infrastructure & Resiliency",
    summary: "Multi-region active-active deployment topologies ensuring Zero Data Loss (RPO=0) and recovery (RTO < 60s).",
    details: "Designing mission-critical banking clouds on AWS Financial Services and Azure for Banking. Geographically distributed active-active Kubernetes clusters, synchronous cross-region consensus databases, multi-cloud disaster failover, and strict data residency isolation.",
    patterns: ["Multi-Region Active-Active", "Synchronous Cross-Region Consensus", "Automated Chaos Engineering", "Immutable Infrastructure as Code"],
    technologies: ["AWS Financial Services", "Azure for Banking", "Kubernetes (EKS/AKS)", "Terraform / OpenTofu", "CockroachDB / Spanner"],
    regulatoryAlignment: ["DORA (Digital Operational Resilience)", "FFIEC Business Continuity", "EBA Cloud Outsourcing"]
  },
  {
    id: "domain-5",
    number: "05",
    title: "Security, Fraud Detection & Regulatory Governance",
    summary: "Zero-Trust perimeter design, Hardware Security Module (HSM) encryption, and real-time streaming AML/fraud scoring.",
    details: "Architecting end-to-end cardholder data protection compliant with PCI-DSS v4.0. Integration of CloudHSM for real-time PIN/CVV cryptographic verification and tokenization. Real-time stream processing with Apache Flink for fraud anomaly detection and sanction screening under 50 milliseconds.",
    patterns: ["Envelope Tokenization", "Hardware Security Module (HSM)", "Real-Time Streaming Anomaly Scoring", "Least Privilege IAM Automation"],
    technologies: ["AWS CloudHSM", "Apache Flink", "HashiCorp Boundary", "Splunk / OpenTelemetry", "Snort / Suricata IDS"],
    regulatoryAlignment: ["PCI-DSS v4.0 Level 1", "SOC 2 Type II", "FATF AML/CFT Standards", "FinCEN Reporting"]
  },
  {
    id: "domain-6",
    number: "06",
    title: "Enterprise Systems Integration & Event Streaming",
    summary: "Designing fault-tolerant Apache Kafka and distributed queue fabrics handling 50,000+ financial messages per second.",
    details: "Enterprise message backbone architecture with exactly-once processing semantics (EOS). Partition key hashing strategies guaranteeing financial account order preservation, dead-letter queue (DLQ) automated replay pipelines, and distributed tracing across hundreds of downstream banking systems.",
    patterns: ["Exactly-Once Semantics (EOS)", "Account-Partition Key Invariants", "Dead-Letter Queue Replay Fabric", "OpenTelemetry Distributed Spans"],
    technologies: ["Apache Kafka", "RabbitMQ", "Kafka Connect / Debezium", "Grafana Prometheus", "Confluent Schema Registry"],
    regulatoryAlignment: ["BCBS 239 Systemic Tracing", "Immutable Audit Logging", "Non-repudiation Standards"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    tag: "Core Banking Modernization",
    title: "Tier-1 Retail Bank Core Migration",
    clientType: "Top-5 National Retail Banking Group (24M Retail Accounts)",
    problem: "An 18-year-old monolithic COBOL core system could not scale past 400 TPS during peak salary disbursement days and required a grueling 6-hour batch window every midnight, causing frequent mobile banking outages and delaying end-of-day balance reconciliations.",
    solution: "Engineered an event-driven Strangler Fig migration pattern using Apache Kafka and Apache Cassandra. Extracted deposit accounts into microservices with dual-write balance shadow ledgers and automated real-time discrepancy reconcilers, decoupling customer queries from legacy mainframes without a minute of branch downtime.",
    outcome: "Boosted system throughput capacity to 8,500 TPS (a 21x improvement), reduced end-of-day batch processing from 6 hours to 18 minutes, and achieved 99.999% SLA availability with zero unscheduled client disruptions.",
    metrics: [
      { label: "Peak Processing Throughput", before: "400 TPS", after: "8,500 TPS", change: "+2,025%" },
      { label: "End-of-Day Batch Window", before: "6.0 Hours", after: "18 Minutes", change: "-95%" },
      { label: "Core Availability SLA", before: "99.92%", after: "99.999%", change: "Tier-1 Standard" }
    ],
    architectureHighlights: [
      "Strangler Fig event interceptor capturing legacy database changes via CDC",
      "Event-driven balance ledgers maintaining CQRS read models",
      "Automated dual-write reconciliation bot detecting sub-cent variances",
      "Zero-downtime traffic cutover with Canary routing"
    ],
    techStack: ["Apache Kafka", "Apache Cassandra", "Kubernetes", "PostgreSQL", "Java / Spring Boot", "AWS Financial Services"]
  },
  {
    id: "case-2",
    tag: "Cross-Border Payment Rails",
    title: "Multi-Currency Real-Time Payment Rail (ISO 20022)",
    clientType: "International Commercial & Institutional Banking Syndicate",
    problem: "Cross-border settlement pipeline required manual intervention for 18% of wire transfers and suffered from an excruciating 12-hour processing latency window due to legacy SWIFT MT103 syntax mismatches and non-standardized correspondent bank message translation errors.",
    solution: "Designed a distributed, microservice-based payment router natively validating ISO 20022 XML schemas (pacs.008, pacs.002, camt.053). Integrated in-memory Redis cluster for idempotency key validation, sanction-list pre-screening, and automated SWIFT MX-to-local rail translation (FedNow and SEPA Instant).",
    outcome: "Achieved sub-800ms end-to-end clearing latency for straight-through payments and automated 99.4% of reconciliation exceptions, reducing compliance exception costs by $3.4M annually.",
    metrics: [
      { label: "End-to-End Routing Latency", before: "12 Hours", after: "Sub-800ms", change: "-99.98%" },
      { label: "Manual Reconciliation Rate", before: "18.2%", after: "0.6%", change: "-96.7%" },
      { label: "ISO 20022 Parsing Accuracy", before: "Legacy MT", after: "100% pacs/camt", change: "Full Compliance" }
    ],
    architectureHighlights: [
      "Ultra-low latency schema validation microengine with JAXB / Rust parsers",
      "Idempotency cache preventing duplicate debits across distributed gateways",
      "Automated correspondent bank fee routing & real-time FX rate lock",
      "Straight-Through Processing (STP) engine for pacs.008 and pacs.002"
    ],
    techStack: ["ISO 20022 XML", "SWIFT GPI", "Redis Enterprise", "Go Microservices", "Apache Flink", "Envoy mTLS"]
  },
  {
    id: "case-3",
    tag: "FinTech & Card Infrastructure",
    title: "Neobank Cloud-Native Card Issuance Architecture",
    clientType: "Hyper-Growth Challenger Neobank (1.2M Digital Users)",
    problem: "Challenger bank faced aggressive 6-month launch deadlines to release instant physical and virtual debit cards under Mastercard and Visa networks, needing PCI-DSS Level 1 certification while having zero legacy infrastructure or in-house cryptographic hardware.",
    solution: "Architected a serverless, AWS-based ledger infrastructure integrating AWS CloudHSM for secure PIN generation, CVV encryption, and dynamic card tokenization (Apple Pay & Google Pay). Implemented real-time transaction authorization webhooks delivering sub-120ms responses to card schemes.",
    outcome: "Successfully launched to production in 5 months. Onboarded 1.2M active accounts within 10 months with zero PCI-DSS audit findings and zero security vulnerabilities reported across consecutive pen-tests.",
    metrics: [
      { label: "Active Accounts Onboarded", before: "0 (Pre-launch)", after: "1.2 Million", change: "In 10 Months" },
      { label: "Transaction Auth Latency", before: "N/A", after: "94ms", change: "Well Under 150ms SLA" },
      { label: "PCI-DSS Audit Findings", before: "Uncertified", after: "Zero Defects", change: "Level 1 Certified" }
    ],
    architectureHighlights: [
      "Dedicated CloudHSM cluster for PCI-DSS cryptographic boundary",
      "Dynamic Apple Pay / Google Pay network tokenization API endpoints",
      "Sub-100ms real-time balance ledger locking with optimistic concurrency",
      "Event-driven webhook engine for immediate push notifications"
    ],
    techStack: ["AWS CloudHSM", "AWS Lambda / ECS", "DynamoDB Global Tables", "Terraform", "PCI-DSS v4.0", "Mastercard / Visa APIs"]
  }
];

export const TECHNICAL_MATRIX: TechItem[] = [
  // Core Banking
  { name: "Mambu", category: "core-banking", description: "SaaS composable core banking engine architecture & product engine setup", standardOrVendor: "Composable Core" },
  { name: "Finacle (Infosys)", category: "core-banking", description: "Large-scale core banking modernization, migration & integration", standardOrVendor: "Enterprise Core" },
  { name: "Temenos Transact", category: "core-banking", description: "T24 modern microservices layer, packaging & cloud deployment", standardOrVendor: "Global Core" },
  { name: "Thought Machine", category: "core-banking", description: "Vault core cloud-native smart contracts ledger implementation", standardOrVendor: "Cloud-Native Core" },
  { name: "Custom Event-Ledgers", category: "core-banking", description: "Double-entry accounting, immutable audit trails, and CQRS ledgers", standardOrVendor: "Proprietary Architecture" },

  // Payments
  { name: "ISO 20022", category: "payments", description: "pacs.008, pacs.002, camt.053, pain.001 syntax & dictionary implementation", standardOrVendor: "ISO Global Standard" },
  { name: "SWIFT GPI / MT-MX", category: "payments", description: "Cross-border payment tracking, gpi directory & MT-to-MX coexistence translation", standardOrVendor: "SWIFT Network" },
  { name: "FedNow & SEPA Instant", category: "payments", description: "Sub-second 24/7/365 instant domestic settlement rails integration", standardOrVendor: "Central Bank Rails" },
  { name: "Card Rails (Visa/Mastercard)", category: "payments", description: "Direct scheme dual-message & single-message card authorization flows", standardOrVendor: "Payment Networks" },
  { name: "ACH & RTGS", category: "payments", description: "Batch clearing house formatting and real-time gross settlement integration", standardOrVendor: "Clearing Standards" },

  // Infrastructure & Cloud
  { name: "AWS Financial Services", category: "cloud", description: "Multi-region architecture, Landing Zone, and compliance-ready controls", standardOrVendor: "Cloud Provider" },
  { name: "Azure for Banking", category: "cloud", description: "Confidential computing, Azure Kubernetes Service & enterprise governance", standardOrVendor: "Cloud Provider" },
  { name: "Kubernetes (EKS / AKS)", category: "cloud", description: "Production cluster mesh, zero-downtime rolling deploys, and autoscaling", standardOrVendor: "Cloud Orchestration" },
  { name: "Terraform / OpenTofu", category: "cloud", description: "Immutable Infrastructure-as-Code with automated compliance scanning", standardOrVendor: "IaC Automation" },

  // Data & Streaming
  { name: "Apache Kafka", category: "data", description: "Distributed event fabric with exactly-once delivery and strict ordering", standardOrVendor: "Streaming Fabric" },
  { name: "PostgreSQL & Cassandra", category: "data", description: "ACID transactional stores paired with high-write distributed ledgers", standardOrVendor: "Storage Engine" },
  { name: "Redis Enterprise", category: "data", description: "In-memory caching for idempotency keys, token stores, and session state", standardOrVendor: "In-Memory Store" },
  { name: "Apache Flink", category: "data", description: "Stateful stream processing for real-time AML scoring and fraud analytics", standardOrVendor: "Stream Processing" },

  // Security & Standards
  { name: "FAPI (Financial-grade API)", category: "security", description: "Advanced security profile with mTLS, JARM, and Private Key JWT", standardOrVendor: "OpenID Foundation" },
  { name: "PCI-DSS v4.0 Level 1", category: "security", description: "End-to-end cardholder data environment (CDE) segmentation & hardening", standardOrVendor: "Payment Card Council" },
  { name: "AWS CloudHSM", category: "security", description: "FIPS 140-2 Level 3 cryptographic key management and envelope encryption", standardOrVendor: "Hardware Security" },
  { name: "Zero Trust & SOC 2", category: "security", description: "Least-privilege network micro-segmentation and continuous audit compliance", standardOrVendor: "Security Standard" }
];

export const ENGAGEMENT_MODELS: EngagementTier[] = [
  {
    id: "tier-1",
    number: "01",
    name: "Architecture Diagnostic & Audit",
    duration: "2-Week Rapid Sprint",
    pricingAnchor: "$5,000 – $10,000",
    targetAudience: "CIOs & CTOs seeking an objective second opinion on architectural roadblocks or upcoming modernization plans.",
    recommendedFor: "Immediate Health Check",
    deliverables: [
      "Comprehensive 15-page Architectural Gap Analysis Document",
      "Payment latency, bottleneck discovery & failover resiliency evaluation",
      "API security (FAPI/mTLS) and PCI-DSS compliance readiness check",
      "Executive Actionable 90-Day Modernization Roadmap & quick wins"
    ]
  },
  {
    id: "tier-2",
    number: "02",
    name: "Modernization Blueprint & Strategy",
    duration: "4 to 8 Weeks Structured Program",
    pricingAnchor: "Custom Milestone-Based Scope",
    targetAudience: "Heads of Enterprise Architecture & Transformation Committees executing core overhauls.",
    recommendedFor: "High-Impact Core Migration",
    deliverables: [
      "Complete Target-State Reference Architecture diagrams and specifications",
      "Detailed monolith-to-microservices Strangler Fig migration roadmap",
      "ISO 20022 message transformation dictionary & interface contracts",
      "Vendor evaluation & RFP scoring matrix (Mambu, Temenos, Finacle, Kafka)",
      "Risk mitigation and non-disruptive cutover operational playbook"
    ]
  },
  {
    id: "tier-3",
    number: "03",
    name: "Fractional Chief Architect / Principal Advisor",
    duration: "Monthly Advisory Retainer",
    pricingAnchor: "Strategic Monthly Retainer",
    targetAudience: "Fast-growing FinTech scale-ups, Neobanks, and Banking Executives requiring ongoing senior oversight.",
    recommendedFor: "Continuous Architectural Governance",
    deliverables: [
      "Direct weekly strategic advisory with Executive Engineering Leadership",
      "Architecture Review Board (ARB) governance, gating, and RFC approvals",
      "Cloud & infrastructure cost optimization and capacity planning",
      "Hands-on mentorship for principal engineers & cross-functional lead architects",
      "On-demand incident post-mortem advisory & regulatory audit defense"
    ]
  }
];

export const OUTREACH_SCRIPTS = [
  {
    id: "cto-direct",
    label: "CTO / Head of Core Banking Direct Outreach",
    recipient: "Head of Core Banking / Director of Payment Systems / CTO",
    subject: "Core modernization & cutover resiliency patterns — [Bank_Name]",
    body: `Hello [First_Name],

I saw your recent team update regarding the core modernization initiative at [Bank_Name].

Over the past 20 years, I've guided multiple retail and commercial banks through monolithic core decoupling and ISO 20022 real-time payment migrations—reducing batch cycles from hours to minutes while sustaining 99.999% availability.

I put together a summary of reference architectural blueprints and case studies covering high-throughput banking topologies and zero-data-loss failover:
https://ramakrishna-architect.com

Would you be open to an informal 15-minute peer exchange next Tuesday on patterns for mitigating cutover risks during core decoupling?

Best regards,
Ramakrishna
Principal Enterprise Architect | Banking Solutions
contact@ramakrishna-architect.com`
  },
  {
    id: "fintech-founder",
    label: "FinTech Founder / Neobank Scale-Up Angle",
    recipient: "FinTech Founder / VP Engineering at Challenger Banks",
    subject: "PCI-DSS Level 1 & high-throughput ledger architecture",
    body: `Hi [First_Name],

Congratulations on [Company_Name]'s rapid account growth.

Scaling card issuance, multi-currency ledgers, and real-time transaction webhooks often surfaces unexpected latency bottlenecks and stringent PCI-DSS audit requirements.

Recently, I architected a cloud-native card issuance platform for a challenger bank onboarding 1.2M accounts with zero security vulnerabilities and sub-100ms authorization latency using AWS CloudHSM tokenization.

Here is the case study and architecture breakdown:
https://ramakrishna-architect.com

Happy to share the reference topology if you're evaluating your next infrastructure milestone.

Warm regards,
Ramakrishna
Principal Enterprise Architect | Banking & FinTech Solutions`
  }
];

export const EXECUTION_DASHBOARD_STAGES = [
  {
    stage: "1. Code Generation",
    task: "Generate single-file static portfolio & React web app",
    platform: "Google AI Studio",
    action: "Complete executive architecture portfolio with all copy and visuals",
    status: "Completed",
    badgeColor: "emerald"
  },
  {
    stage: "2. Local Review",
    task: "Inspect layout, text, metrics, and mobile responsiveness",
    platform: "Web Preview",
    action: "Test tabs, calculators, modal viewers, and contact workflow",
    status: "Ready for Inspection",
    badgeColor: "blue"
  },
  {
    stage: "3. Live Deployment",
    task: "Publish globally with free SSL CDN",
    platform: "Vercel Drop / AI Studio Host",
    action: "Drag & drop folder to vercel.com/drop or share live URL",
    status: "Active & Shareable",
    badgeColor: "emerald"
  },
  {
    stage: "4. Domain Connect",
    task: "Connect professional custom executive domain",
    platform: "Vercel DNS / Registrar",
    action: "Add CNAME record to ramakrishna-architect.com",
    status: "Optional Step",
    badgeColor: "amber"
  },
  {
    stage: "5. Executive Outreach",
    task: "Share live portfolio with target CIOs, CTOs, and FinTech leads",
    platform: "LinkedIn / Email",
    action: "Send peer-to-peer message using Section 5 outreach scripts",
    status: "Ready to Execute",
    badgeColor: "indigo"
  }
];
