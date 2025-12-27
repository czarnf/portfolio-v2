import { motion } from "framer-motion";
import { Zap, Eye, ShieldCheck, GitBranch, Workflow, Database, Settings } from "lucide-react";

interface ApproachItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const philosophyItems: ApproachItem[] = [
  {
    icon: Zap,
    title: "Efficiency",
    description: "Streamlining workflows through AI and automation. Every process is optimized for speed without sacrificing quality or governance."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Data-driven reporting and stakeholder alignment. Clear communication ensures everyone—from developers to executives—stays informed."
  },
  {
    icon: ShieldCheck,
    title: "Resilience",
    description: "Proactive risk management and problem-solving. Anticipating bottlenecks before they impact delivery timelines."
  }
];

const methodologies: ApproachItem[] = [
  {
    icon: GitBranch,
    title: "SDLC Management",
    description: "End-to-end oversight from requirements through deployment."
  },
  {
    icon: Workflow,
    title: "ITIL v4 Framework",
    description: "IT service management ensuring reliable, efficient operations."
  },
  {
    icon: Database,
    title: "Business Intelligence",
    description: "Transforming data into actionable strategic insights."
  },
  {
    icon: Settings,
    title: "Agile & Scrum",
    description: "Iterative delivery with continuous stakeholder value."
  }
];

const StrategicApproach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      id="approach" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Strategic Approach Section"
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-12" variants={cardVariants}>
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Strategic Approach</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Leadership Philosophy & Frameworks
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Efficiency is not just about code; it is about the flow of information. 
            My mission is to ensure that IT systems serve the people who use them—whether 
            that is a clinician on an NHS ward or a logistics coordinator in a <span className="font-semibold text-foreground">B2B2C</span> startup.
          </p>
        </motion.div>

        {/* Leadership Philosophy - Three Pillars */}
        <motion.div className="mb-14" variants={cardVariants}>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-accent"></span>
            Leadership Pillars
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-all duration-300 group overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                {/* Blueprint grid overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                  <svg width="100%" height="100%">
                    <pattern id={`pillar-grid-${index}`} width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#pillar-grid-${index})`} />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Grid */}
        <motion.div variants={cardVariants}>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-accent"></span>
            Frameworks & Standards
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl border border-border p-5 text-center hover:border-accent/30 transition-all group"
                variants={cardVariants}
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/15 transition-colors">
                  <method.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1.5">{method.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StrategicApproach;
