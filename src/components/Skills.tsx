import { motion } from "framer-motion";
import { Code2, Wrench, TrendingUp } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Skills",
    icon: Code2,
    description: "Technologies I use daily to build robust applications",
    skills: [
      "React / Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "RESTful APIs",
      "Tailwind CSS",
      "Python",
      "Git / GitHub"
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Software and platforms that power my workflow",
    skills: [
      "VS Code",
      "Figma",
      "AWS / Azure",
      "Docker",
      "Vercel",
      "Supabase",
      "Jira",
      "Notion"
    ]
  },
  {
    title: "Learning Path",
    icon: TrendingUp,
    description: "Technologies I'm actively exploring and growing in",
    skills: [
      "Rust",
      "GraphQL",
      "Kubernetes",
      "Machine Learning",
      "Web3 / Blockchain",
      "System Design"
    ]
  }
];

const Skills = () => {
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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/50"
      aria-label="Technical Skills Section"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          variants={cardVariants}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A curated toolkit built over years of shipping products and solving real-world problems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl border border-border p-8 hover:border-accent/30 transition-colors"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6">
                {category.description}
              </p>

              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="tech-badge"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
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
