import { motion } from "framer-motion";
import { Building2, Cpu, ArrowRightLeft, Zap, Eye, ShieldCheck, GitBranch, Workflow, Database, Settings } from "lucide-react";

interface PillarData {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  type: "left" | "right" | "crossbar";
}

const pillars: PillarData[] = [
  {
    title: "Structural Architecture",
    subtitle: "Left Pillar",
    icon: Building2,
    description: "Rooted in a 10+ year foundation of Architectural Technology. I apply blueprint-first logic and architectural dependency mapping to resolve technical risks before execution.",
    type: "left"
  },
  {
    title: "Digital Systems & IT Governance",
    subtitle: "Right Pillar",
    icon: Cpu,
    description: "MSc Information Technology (Merit). Technical mastery in Cloud Migration (SWOT Analysis), Information Security (NIST/PCI DSS), and IoT Smart Systems. Expert in Data Life-cycle Management (GDPR) to ensure transformations are secure and audit-ready.",
    type: "right"
  },
  {
    title: "Strategic Governance",
    subtitle: "The Cross-Bar",
    icon: ArrowRightLeft,
    description: "I bridge technical engineering and high-pressure human systems. This includes liaising with NHS Management to facilitate operational efficiency and managing C-Suite expectations for Zinter to drive 70% retention and protect revenue. I utilize COCOMO/Effort Estimation and Agile to ensure predictable delivery.",
    type: "crossbar"
  }
];

const leadershipPillars = [
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

const methodologies = [
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

const PiShapedSkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

  const crossbar = pillars.find(p => p.type === "crossbar")!;
  const verticalPillars = pillars.filter(p => p.type !== "crossbar");

  return (
    <section 
      id="pi-skills" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="π-Shaped Leadership Model"
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-14" variants={cardVariants}>
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Core Competency Model</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Beyond Generalist: The Pi-Shaped Leadership Model
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Cross-functional governance supported by <span className="font-semibold text-foreground">dual-depth technical expertise</span>
          </p>
        </motion.div>

        {/* π Visual Representation - Executive Navy/Slate Palette */}
        <div className="relative mb-16">
          {/* Cross-bar (top of π) */}
          <motion.div 
            className="bg-slate-900 dark:bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6 relative overflow-hidden"
            variants={cardVariants}
          >
            {/* Blueprint grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="crossbar-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#crossbar-grid)" />
              </svg>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                  <crossbar.icon className="w-6 h-6 text-slate-200" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    {crossbar.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {crossbar.title}
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {crossbar.description}
              </p>
            </div>
          </motion.div>

          {/* Connecting lines from crossbar */}
          <div className="hidden md:flex justify-center gap-[calc(50%-6rem)] mb-0">
            <div className="w-px h-8 bg-slate-600" />
            <div className="w-px h-8 bg-slate-600" />
          </div>

          {/* Vertical pillars of π */}
          <div className="grid md:grid-cols-2 gap-6">
            {verticalPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 dark:bg-slate-900/50 rounded-xl border border-slate-600 p-6 relative overflow-hidden"
                variants={cardVariants}
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Pillars - Integrated */}
        <motion.div className="mb-14" variants={cardVariants}>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-accent"></span>
            Leadership Pillars
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {leadershipPillars.map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-all duration-300 group overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
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

export default PiShapedSkills;