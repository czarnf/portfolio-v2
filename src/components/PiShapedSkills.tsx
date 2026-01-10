import { motion } from "framer-motion";
import { Users, Cpu, Database, GitBranch, Workflow, Settings, BarChart3, Zap, Eye, ShieldCheck } from "lucide-react";

const horizontalBreadth = {
  title: "Business & Stakeholder Translation",
  subtitle: "Horizontal Breadth",
  skills: [
    "Executive & technical stakeholder alignment",
    "Business case development",
    "Commercial ROI framing",
    "Product thinking",
    "Cross-functional communication"
  ]
};

const verticalDepths = [
  {
    title: "Technical Delivery & Systems",
    subtitle: "Vertical Depth 1",
    icon: Cpu,
    skills: [
      "Technical project leadership",
      "Platform architecture & system integration",
      "Cloud infrastructure (AWS/Azure)",
      "API-driven systems",
      "Agile & SDLC governance"
    ]
  },
  {
    title: "Data, Governance & Decision Support",
    subtitle: "Vertical Depth 2",
    icon: Database,
    skills: [
      "Operational & performance data analysis",
      "KPI design & tracking",
      "Power BI & advanced Excel",
      "Information governance",
      "NIST & ISO/IEC 27001 awareness",
      "Data quality, auditability & compliance"
    ]
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
    icon: BarChart3,
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

  return (
    <section 
      id="pi-skills" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="π-Shaped Competency Model"
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-10" variants={cardVariants}>
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Skill Profile</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            π-Shaped Competency Model
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-6">
            Deep expertise in two vertical domains — <span className="font-semibold text-foreground">Technical Delivery</span> and <span className="font-semibold text-foreground">Data Governance</span> — connected by broad horizontal capability in business translation. This enables me to:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Translate business intent into technical systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Translate system outputs into executive decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Operate credibly across engineering, data & leadership domains</span>
            </li>
          </ul>
        </motion.div>

        {/* π Visual Representation */}
        <div className="relative mb-16">
          {/* Horizontal Breadth (top of π) */}
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
                  <Users className="w-6 h-6 text-slate-200" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    {horizontalBreadth.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {horizontalBreadth.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {horizontalBreadth.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm bg-slate-700/50 text-slate-200 rounded-md border border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connecting lines from horizontal bar */}
          <div className="hidden md:flex justify-center gap-[calc(50%-6rem)] mb-0">
            <div className="w-px h-8 bg-slate-600" />
            <div className="w-px h-8 bg-slate-600" />
          </div>

          {/* Vertical Depths of π */}
          <div className="grid md:grid-cols-2 gap-6">
            {verticalDepths.map((depth, index) => (
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
                      <depth.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {depth.subtitle}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {depth.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {depth.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
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
