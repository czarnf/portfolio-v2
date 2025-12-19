import { ExternalLink, FileText, TrendingUp, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  organization: string;
  challenge: string;
  solution: string;
  impact: string[];
  methodologies: string[];
  icon: React.ElementType;
}

const caseStudies: CaseStudy[] = [
  {
    title: "B2B2C Platform Transformation",
    organization: "Zinter (Netherlands)",
    challenge: "A Dutch logistics startup faced declining customer retention due to fragmented systems, manual processes, and lack of real-time visibility across their supply chain operations.",
    solution: "Led end-to-end digital transformation with a cross-functional global team. Implemented AI-enhanced analytics, unified customer data platforms, and automated workflow orchestration to create a seamless B2B2C experience.",
    impact: [
      "70% projected increase in customer retention",
      "40% reduction in operational bottlenecks",
      "Real-time visibility across supply chain",
      "Scalable architecture for European expansion"
    ],
    methodologies: ["Agile/Scrum", "SDLC", "Cloud Migration", "Data Mapping"],
    icon: TrendingUp
  },
  {
    title: "Healthcare Operations Optimization",
    organization: "NHS",
    challenge: "Patient flow data scattered across multiple legacy systems made real-time bed management and resource allocation extremely challenging, impacting patient care efficiency.",
    solution: "Applied IT systems knowledge to coordinate cross-departmental data flows. Developed standardized reporting procedures and identified integration opportunities to improve operational visibility.",
    impact: [
      "Improved cross-department coordination",
      "Standardized data reporting procedures",
      "Enhanced resource allocation visibility",
      "Reduced manual data reconciliation"
    ],
    methodologies: ["Process Analysis", "ITIL", "Stakeholder Management", "Requirements Gathering"],
    icon: Target
  },
  {
    title: "Digital Strategy Consulting",
    organization: "SME Clients (Fiverr)",
    challenge: "Small businesses lacked technical expertise to develop effective digital presence, resulting in poor online conversion rates and missed growth opportunities.",
    solution: "Delivered comprehensive digital strategy consulting including market positioning, user experience optimization, and technology stack recommendations aligned with business objectives.",
    impact: [
      "Average 40% increase in client conversions",
      "Improved user engagement metrics",
      "Scalable technology foundations",
      "Clear digital roadmaps delivered"
    ],
    methodologies: ["Business Analysis", "UX Strategy", "Competitive Analysis", "Roadmap Planning"],
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
      aria-label="Case Studies Section"
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
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Strategic initiatives where I've translated complex technical requirements 
            into measurable business outcomes.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              className="case-study-card bg-card rounded-xl border border-border overflow-hidden"
              variants={cardVariants}
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
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

                {/* Methodologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {study.methodologies.map((method, methodIndex) => (
                    <span 
                      key={methodIndex}
                      className="competency-badge"
                    >
                      {method}
                    </span>
                  ))}
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