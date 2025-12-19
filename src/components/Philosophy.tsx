import { motion } from "framer-motion";
import { Users, Layers, LineChart } from "lucide-react";

interface PhilosophyItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const philosophyItems: PhilosophyItem[] = [
  {
    icon: Users,
    title: "Stakeholder-Centric Delivery",
    description: "Every project decision is anchored in stakeholder value. I prioritize clear communication and alignment between technical teams and business leadership to ensure outcomes that matter."
  },
  {
    icon: Layers,
    title: "Structured Agility",
    description: "I champion iterative delivery with robust governance. Speed and quality aren't trade-offs—they're achieved through disciplined frameworks, clear milestones, and continuous feedback loops."
  },
  {
    icon: LineChart,
    title: "Data-Driven Strategy",
    description: "I translate complex technical landscapes into actionable insights. By mapping information flows and identifying bottlenecks, I enable informed decisions that drive measurable improvement."
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
    <motion.div 
      className="mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="mb-6" variants={cardVariants}>
        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">Approach</p>
        <h3 className="text-2xl font-semibold text-foreground">Management Philosophy</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {philosophyItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-card rounded-xl border border-border p-5 hover:border-accent/30 transition-colors group"
            variants={cardVariants}
            whileHover={{ y: -3 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
              <item.icon className="w-5 h-5 text-accent" />
            </div>
            <h4 className="text-base font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Philosophy;