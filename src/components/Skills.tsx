import { motion } from "framer-motion";
import { Shield, TrendingUp, BarChart3 } from "lucide-react";

interface CompetencyCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  competencies: string[];
}

const competencyCategories: CompetencyCategory[] = [
  {
    title: "Project Governance",
    icon: Shield,
    description: "Establishing robust frameworks for project control and stakeholder alignment",
    competencies: [
      "Agile & Scrum Methodologies",
      "Risk Assessment & Mitigation",
      "Stakeholder Management",
      "Resource Allocation",
      "Budget Control",
      "Compliance & Standards",
      "Quality Assurance",
      "Cross-functional Leadership"
    ]
  },
  {
    title: "Transformation Strategy",
    icon: TrendingUp,
    description: "Driving organizational change through technology-enabled solutions",
    competencies: [
      "Systems Migration",
      "Cloud Adoption (AWS/Azure)",
      "Digital Transformation",
      "Process Optimization",
      "Change Management",
      "Legacy Modernization",
      "Integration Strategy",
      "Vendor Management"
    ]
  },
  {
    title: "Information Analysis",
    icon: BarChart3,
    description: "Translating complex data into actionable business intelligence",
    competencies: [
      "Data Mapping & Flow",
      "Requirements Engineering",
      "Business Process Analysis",
      "KPI Development",
      "Reporting & Dashboards",
      "Gap Analysis",
      "User Research",
      "Technical Documentation"
    ]
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
      aria-label="Core Competencies Section"
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Strategic capabilities developed through delivering complex IT projects 
            and driving organizational transformation across multiple sectors.
          </p>
        </motion.div>

        {/* Competencies Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {competencyCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-colors"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {category.description}
              </p>

              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {category.competencies.map((competency, compIndex) => (
                  <motion.span
                    key={compIndex}
                    className="competency-badge"
                    variants={skillVariants}
                  >
                    {competency}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;