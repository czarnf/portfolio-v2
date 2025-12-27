import { TrendingUp, Target, Lightbulb, Shield, ExternalLink, FileCode } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  organization: string;
  challenge: string;
  solution: string;
  impact: string[];
  methodology: string;
  toolsManaged: string[];
  keyResult: string;
  techStackManaged: string[];
  kpiImpact: string;
  icon: React.ElementType;
  projectSpecsLink?: string;
  liveDemoLink?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Full Platform Transformation & AI-Driven B2B2C Migration",
    organization: "Zinter (Netherlands)",
    challenge: "Led a total architectural overhaul for a Dutch B2B2C startup, replacing legacy systems with a scalable, cloud-native infrastructure to support high-concurrency traffic across European markets.",
    solution: "Integrated AI Computer Vision Agents for automated logistics estimation and implemented auto-scaling AWS infrastructure. Managed cross-functional global teams across 3 time zones through structured Agile governance.",
    impact: [
      "70% projected increase in customer retention",
      "40% reduction in platform latency",
      "Cloud-native B2B2C architecture deployed",
      "Scalable infrastructure for European expansion"
    ],
    methodology: "Agile/Scrum",
    toolsManaged: ["Jira", "AWS", "Python", "React"],
    keyResult: "70% retention | 40% latency reduction",
    techStackManaged: ["AWS Auto-Scaling", "AI Computer Vision", "B2B2C Platform", "Agile Governance", "Multi-Cloud Architecture"],
    kpiImpact: "70% retention improvement | 40% latency reduction | Global team across 3 time zones",
    icon: TrendingUp,
    projectSpecsLink: "https://github.com/emmanuelchiefson"
  },
  {
    title: "Operational Resilience & Healthcare Data Governance",
    organization: "NHS — Patient Flow Coordinator",
    challenge: "High-stakes, real-time healthcare data flows across multiple legacy systems created reconciliation bottlenecks and impacted clinical efficiency in a fast-paced hospital environment.",
    solution: "Established data governance frameworks for clinical IT systems. Managed high-stakes patient flow data, standardized reporting procedures across departments, and implemented protocols achieving significant reconciliation improvements.",
    impact: [
      "30% reduction in data reconciliation time",
      "Standardized clinical reporting across 3 departments",
      "Enhanced real-time patient flow visibility",
      "Improved cross-department coordination"
    ],
    methodology: "ITIL/Kanban",
    toolsManaged: ["Power BI", "Excel", "NHS Systems"],
    keyResult: "30% reconciliation reduction",
    techStackManaged: ["NHS Digital Systems", "ITIL Frameworks", "Power BI", "Data Governance", "Stakeholder Communication"],
    kpiImpact: "30% reconciliation reduction | 3 departments standardized | Real-time data flow management",
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
    methodology: "Waterfall/Research",
    toolsManaged: ["SPSS", "NVivo", "MS Office"],
    keyResult: "Actionable policy recommendations delivered",
    techStackManaged: ["Research Methodology", "Risk Analysis", "Policy Development", "Academic Writing", "Data Analysis"],
    kpiImpact: "Delivered actionable policy recommendations; presented findings to academic panel",
    icon: Shield,
    projectSpecsLink: "https://github.com/emmanuelchiefson"
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
    methodology: "Agile/Iterative",
    toolsManaged: ["Power BI", "SQL", "Excel"],
    keyResult: "Optimized resource allocation across 50+ positions",
    techStackManaged: ["Power BI", "SQL", "Financial Modeling", "Data Visualization", "Excel"],
    kpiImpact: "Created reusable framework for evaluating 50+ equity positions",
    icon: Lightbulb,
    projectSpecsLink: "https://github.com/emmanuelchiefson"
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
                <div className="flex items-start justify-between gap-4 mb-4">
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
                  <div className="flex gap-2 flex-shrink-0">
                    {study.projectSpecsLink && (
                      <motion.a
                        href={study.projectSpecsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FileCode className="w-4 h-4" />
                        Project Specs
                      </motion.a>
                    )}
                    <motion.button
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Case Study
                    </motion.button>
                  </div>
                </div>

                {/* Methodology, Tools Managed, Key Result Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 text-xs font-semibold bg-accent/15 text-accent rounded-md border border-accent/20">
                    {study.methodology}
                  </span>
                  <span className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-md border border-border">
                    Tools: {study.toolsManaged.join(", ")}
                  </span>
                  <span className="px-3 py-1.5 text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 rounded-md border border-green-500/20">
                    {study.keyResult}
                  </span>
                </div>
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
