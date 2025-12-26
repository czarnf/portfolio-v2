import { motion } from "framer-motion";
import { Shield, Cloud, Database } from "lucide-react";

interface TechnicalPillar {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  accent: boolean;
}

const technicalPillars: TechnicalPillar[] = [
  {
    title: "IT Governance & Operations",
    icon: Shield,
    description: "Enterprise-grade project control and operational frameworks",
    skills: [
      "Jira (Admin)",
      "Confluence",
      "ITIL Frameworks",
      "Agile/Scrum",
      "MS Project",
      "Risk Mitigation",
      "Stakeholder Management",
      "SDLC Governance"
    ],
    accent: false
  },
  {
    title: "Cloud & Enterprise Infrastructure",
    icon: Cloud,
    description: "Multi-cloud proficiency across major platforms",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Oracle Cloud",
      "MS Server",
      "SharePoint Admin",
      "Cloud Migration",
      "Infrastructure Design"
    ],
    accent: true
  },
  {
    title: "Data & Systems Logic",
    icon: Database,
    description: "From architectural blueprints to data-driven insights",
    skills: [
      "Power BI",
      "SQL",
      "Advanced Excel",
      "Revit/AutoCAD",
      "Systems Architecture",
      "Data Flow Mapping",
      "ETL Processes",
      "Dashboard Design"
    ],
    accent: false
  }
];

const Skills = () => {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25 }
    }
  };

  return (
    <section 
      id="competencies" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50"
      aria-label="Technical Ecosystem Section"
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Technical Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Strategic Technical Pillars
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Three integrated domains of expertise enabling end-to-end IT leadership—from 
            governance frameworks to cloud infrastructure to data-driven decision making.
          </p>
        </motion.div>

        {/* Technical Pillars Grid - Blueprint Aesthetic */}
        <div className="grid md:grid-cols-3 gap-6">
          {technicalPillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`relative bg-card rounded-xl border overflow-hidden transition-all hover:shadow-lg ${
                pillar.accent 
                  ? "border-accent/40 hover:border-accent" 
                  : "border-border hover:border-accent/30"
              }`}
              variants={cardVariants}
            >
              {/* Blueprint grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id={`blueprint-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#blueprint-${index})`} />
                </svg>
              </div>

              <div className="relative p-6">
                {/* Column Label */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
                    Col {String.fromCharCode(65 + index)}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    pillar.accent 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-accent/10"
                  }`}>
                    <pillar.icon className={`w-6 h-6 ${pillar.accent ? "" : "text-accent"}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {pillar.description}
                </p>

                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {pillar.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                        pillar.accent
                          ? "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20"
                          : "bg-muted text-muted-foreground border-border hover:border-accent/30"
                      }`}
                      variants={skillVariants}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architectural Systems Thinking Note */}
        <motion.div 
          className="mt-10 p-6 bg-card rounded-xl border border-border"
          variants={cardVariants}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Architectural Systems Thinking</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                My Revit/AutoCAD expertise represents <span className="font-medium text-foreground">Systems Design Logic</span>—the 
                ability to visualize complex infrastructures before building them. This architectural foundation 
                makes me a better IT Architect, enabling me to blueprint enterprise systems with the same precision 
                applied to physical structures.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
