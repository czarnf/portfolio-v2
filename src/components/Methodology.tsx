import { motion } from "framer-motion";
import { GitBranch, Workflow, Database, Settings } from "lucide-react";

interface MethodologyItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const methodologies: MethodologyItem[] = [
  {
    icon: GitBranch,
    title: "SDLC Management",
    description: "End-to-end software development lifecycle oversight from requirements through deployment and maintenance."
  },
  {
    icon: Workflow,
    title: "ITIL Framework",
    description: "IT service management best practices ensuring reliable, efficient, and continuously improving IT services."
  },
  {
    icon: Database,
    title: "Business Intelligence",
    description: "Transforming organizational data into actionable insights through analytics and strategic reporting."
  },
  {
    icon: Settings,
    title: "Agile & Scrum",
    description: "Iterative delivery frameworks enabling rapid adaptation, stakeholder collaboration, and continuous value delivery."
  }
];

const Methodology = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      id="methodology" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--methodology-bg))]"
      aria-label="Methodology Section"
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
          className="text-center mb-12"
          variants={cardVariants}
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Frameworks</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Methodology & Standards
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proven frameworks and industry standards that underpin my approach to 
            delivering complex IT initiatives.
          </p>
        </motion.div>

        {/* Methodology Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologies.map((method, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl border border-border p-6 text-center hover:border-accent/30 transition-all group"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                <method.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Methodology;