import { motion } from "framer-motion";
import { Zap, GitBranch, ShieldCheck } from "lucide-react";

interface PhilosophyItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
}

const philosophyItems: PhilosophyItem[] = [
  {
    icon: Zap,
    title: "Agile Delivery",
    subtitle: "Iterative Value Creation",
    description: "Focusing on iterative value and stakeholder alignment. Every sprint delivers tangible outcomes, with continuous feedback loops ensuring we're always building what matters most to the business."
  },
  {
    icon: GitBranch,
    title: "Technical Bridge",
    subtitle: "Strategy Translation",
    description: "Translating complex development requirements into business ROI. I speak both languages fluently—ensuring technical teams understand business priorities and executives grasp technical constraints."
  },
  {
    icon: ShieldCheck,
    title: "Risk Mitigation",
    subtitle: "Proactive Governance",
    description: "Proactive bottleneck identification and resource optimization. Through structured governance and continuous monitoring, I anticipate risks before they become blockers and keep projects on track."
  }
];

const Philosophy = () => {
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
      id="philosophy" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Management Philosophy Section"
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Approach</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Management Philosophy
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Efficiency is not just about code; it is about the flow of information. 
            My mission is to ensure that IT systems serve the people who use them—whether 
            that is a clinician on an NHS ward or a logistics coordinator in a startup.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-accent text-sm font-medium mb-3">{item.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
