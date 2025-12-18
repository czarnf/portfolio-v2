import { motion } from "framer-motion";
import { Users, Zap, Palette } from "lucide-react";

interface PhilosophyItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const philosophyItems: PhilosophyItem[] = [
  {
    icon: Users,
    title: "User-Centric Logic",
    description: "Every line of code I write serves a purpose for the end-user. If it doesn't solve a human problem, it's just noise."
  },
  {
    icon: Zap,
    title: "Rapid Iteration, Solid Foundation",
    description: "I believe in moving fast and shipping often, but never at the expense of a stable, tested codebase."
  },
  {
    icon: Palette,
    title: "Bridging Design & Dev",
    description: "I speak both 'Figma' and 'Terminal,' ensuring that the pixel-perfect vision is translated accurately into functional code."
  }
];

const Philosophy = () => {
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

  return (
    <motion.div 
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="mb-8" variants={cardVariants}>
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">How I Think</p>
        <h3 className="text-2xl font-bold text-foreground">Development Philosophy</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {philosophyItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-colors group"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <item.icon className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
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
