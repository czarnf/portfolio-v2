import { motion } from "framer-motion";
import { Shield, Code, Layers, Zap, Eye, RefreshCw } from "lucide-react";

interface ToolkitCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const toolkitCategories: ToolkitCategory[] = [
  {
    title: "Project Governance",
    icon: Shield,
    skills: ["Agile/Scrum", "Risk Mitigation", "ITIL", "Stakeholder Management", "Resource Planning"]
  },
  {
    title: "Technical Literacy",
    icon: Code,
    skills: ["AI Agents & ML", "Web Development", "SQL & Databases", "Cloud Architecture", "API Integration"]
  },
  {
    title: "Software & Tools",
    icon: Layers,
    skills: ["Jira", "Confluence", "Asana", "Power BI", "MS Project", "Slack/Teams"]
  }
];

interface PhilosophyPillar {
  title: string;
  description: string;
  icon: React.ElementType;
}

const philosophyPillars: PhilosophyPillar[] = [
  {
    title: "Efficiency",
    description: "Streamlining workflows through AI and automation to maximize team velocity and minimize friction.",
    icon: Zap
  },
  {
    title: "Transparency",
    description: "Data-driven reporting and stakeholder alignment ensuring everyone has visibility into progress and blockers.",
    icon: Eye
  },
  {
    title: "Resilience",
    description: "Proactive risk management and problem-solving to keep projects on track despite changing requirements.",
    icon: RefreshCw
  }
];

const TechnicalPMToolkit = () => {
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
      id="toolkit" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-label="Technical PM Toolkit Section"
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Technical PM Toolkit
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A comprehensive skill set bridging project governance, technical understanding, 
            and the tools needed to deliver complex IT initiatives successfully.
          </p>
        </motion.div>

        {/* Toolkit Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {toolkitCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <category.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <motion.div variants={cardVariants}>
          <div className="mb-8">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Principles</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Leadership Philosophy
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophyPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-all duration-300 group"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <pillar.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechnicalPMToolkit;
