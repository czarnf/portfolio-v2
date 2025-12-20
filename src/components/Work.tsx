import { TrendingUp, Target, Lightbulb, Shield, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  organization: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStackManaged: string[];
  kpiImpact: string;
  icon: React.ElementType;
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI Logistics Platform Delivery",
    organization: "Zinter (Netherlands)",
    challenge: "A Dutch logistics startup required product management leadership for an AI Computer Vision solution to automate logistics estimation processes.",
    solution: "Orchestrated the end-to-end delivery of an automated logistics estimation engine. Led cross-functional teams through Agile sprints, managed stakeholder expectations, and ensured alignment between technical development and business objectives.",
    impact: [
      "70% projected increase in customer retention",
      "40% reduction in operational bottlenecks",
      "Real-time visibility across supply chain",
      "Scalable architecture for European expansion"
    ],
    techStackManaged: ["Jira", "Agile/Scrum", "AWS", "AI/ML Pipelines", "Stakeholder Management"],
    kpiImpact: "Delivered MVP within 12-week timeline; managed cross-functional team of 8",
    icon: TrendingUp
  },
  {
    title: "NHS Operational Resilience",
    organization: "NHS",
    challenge: "Patient flow data scattered across multiple legacy systems made real-time bed management and resource allocation challenging, impacting clinical efficiency.",
    solution: "Managed patient flow and clinical IT systems (Band 3). Served as Digital Link for ward-level IT governance and troubleshooting. Coordinated cross-departmental data flows and developed standardized reporting procedures.",
    impact: [
      "Improved cross-department coordination",
      "Standardized data reporting procedures",
      "Enhanced resource allocation visibility",
      "Reduced manual data reconciliation"
    ],
    techStackManaged: ["NHS Digital Systems", "ITIL", "Information Governance", "Excel/Power BI", "Stakeholder Communication"],
    kpiImpact: "Streamlined reporting across 3 clinical departments; reduced data reconciliation time by 30%",
    icon: Target
  },
  {
    title: "MSc Research: Security & Human Factors",
    organization: "MSc Information Technology",
    challenge: "Healthcare organizations face increasing cybersecurity threats, with staff training gaps contributing to breach vulnerabilities.",
    solution: "Investigated the intersection of staff training and cybersecurity breaches in healthcare settings. Produced high-level policy recommendations for risk reduction through comprehensive analysis of human factors in security incidents.",
    impact: [
      "Comprehensive risk assessment framework",
      "Policy recommendations for NHS Trusts",
      "Human factors analysis methodology",
      "Training program enhancement proposals"
    ],
    techStackManaged: ["Research Methodology", "Risk Analysis", "Policy Development", "Academic Writing", "Data Analysis"],
    kpiImpact: "Delivered actionable policy recommendations; presented findings to academic panel",
    icon: Shield
  },
  {
    title: "Financial Equity Analysis Framework",
    organization: "Independent Research",
    challenge: "Retail investors lack structured frameworks for evaluating equity investments, leading to inconsistent decision-making and suboptimal returns.",
    solution: "Built a data-driven investment framework focusing on P/OCF ratios and volume trends to drive ROI. Developed systematic approaches for equity analysis combining quantitative metrics with market sentiment indicators.",
    impact: [
      "Systematic evaluation methodology",
      "Data-driven investment decisions",
      "Reproducible analysis framework",
      "Clear documentation of investment thesis"
    ],
    techStackManaged: ["Power BI", "SQL", "Financial Modeling", "Data Visualization", "Excel"],
    kpiImpact: "Created reusable framework for evaluating 50+ equity positions",
    icon: Lightbulb
  },
];

const Work = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      id="case-studies" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Portfolio of Deliveries Section"
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="mb-14"
          variants={cardVariants}
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Portfolio of Deliveries
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Strategic initiatives demonstrating leadership in IT Project Management, 
            translating complex technical requirements into measurable business outcomes.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              className="case-study-card bg-card rounded-xl border border-border overflow-hidden hover:border-accent/30 transition-colors"
              variants={cardVariants}
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <study.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {study.title}
                      </h3>
                      <p className="text-accent text-sm font-medium">{study.organization}</p>
                    </div>
                  </div>
                  <motion.button
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Case Study
                  </motion.button>
                </div>

                {/* KPI Impact Highlight */}
                <div className="mb-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
                  <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">
                    Key Impact
                  </p>
                  <p className="text-foreground font-medium">
                    {study.kpiImpact}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Challenge */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      The Challenge
                    </p>
                    <p className="text-foreground text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  {/* Solution */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      The Strategic Solution
                    </p>
                    <p className="text-foreground text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Business Impact / ROI
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {study.impact.map((item, impactIndex) => (
                      <div 
                        key={impactIndex}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Managed */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Tech Stack Managed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.techStackManaged.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
