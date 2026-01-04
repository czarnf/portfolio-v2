import { motion } from "framer-motion";
import { Cpu, BarChart3, Users, ArrowDownUp } from "lucide-react";

interface SkillDomain {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: string[];
  type: "vertical" | "horizontal";
}

const skillDomains: SkillDomain[] = [
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
    ],
    type: "vertical"
  },
  {
    title: "Data, Governance & Decision Support",
    subtitle: "Vertical Depth 2",
    icon: BarChart3,
    skills: [
      "Operational & performance data analysis",
      "KPI design & tracking",
      "Power BI & advanced Excel",
      "Information governance",
      "NIST & ISO/IEC 27001 awareness",
      "Data quality, auditability & compliance"
    ],
    type: "vertical"
  },
  {
    title: "Business & Stakeholder Translation",
    subtitle: "Horizontal Breadth",
    icon: Users,
    skills: [
      "Executive & technical stakeholder alignment",
      "Business case development",
      "Commercial ROI framing",
      "Product thinking",
      "Cross-functional communication"
    ],
    type: "horizontal"
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
      aria-label="π-Shaped Skills Section"
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Skill Profile</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            π-Shaped Competency Model
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Deep expertise in two vertical domains — <span className="font-semibold text-foreground">Technical Delivery</span> and 
            <span className="font-semibold text-foreground"> Data Governance</span> — connected by broad horizontal capability in 
            business translation. This enables me to:
          </p>
        </motion.div>

        {/* Value Propositions */}
        <motion.div 
          className="grid sm:grid-cols-3 gap-4 mb-12"
          variants={cardVariants}
        >
          <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
            <ArrowDownUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              Translate <span className="font-semibold">business intent</span> into technical systems
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
            <ArrowDownUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              Translate <span className="font-semibold">system outputs</span> into executive decisions
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
            <ArrowDownUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              Operate credibly across <span className="font-semibold">engineering, data & leadership</span> domains
            </p>
          </div>
        </motion.div>

        {/* π Visual Representation */}
        <div className="relative mb-8">
          {/* Horizontal bar (top of π) */}
          <motion.div 
            className="bg-card rounded-xl border border-border p-6 mb-6"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                  {skillDomains[2].subtitle}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {skillDomains[2].title}
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillDomains[2].skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-md border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Vertical legs of π */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillDomains.slice(0, 2).map((domain, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl border border-accent/30 p-6 relative"
                variants={cardVariants}
              >
                {/* Connecting line to horizontal bar */}
                <div className="absolute -top-6 left-1/2 w-px h-6 bg-accent/30 hidden md:block" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <domain.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                      {domain.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {domain.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {domain.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PiShapedSkills;