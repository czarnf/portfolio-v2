import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <motion.div 
        className="max-w-7xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          {/* Eyebrow text */}
          <motion.p 
            className="text-accent font-mono text-sm tracking-widest uppercase"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.p>
          
          {/* Massive Name */}
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tighter leading-[0.9]"
            variants={nameVariants}
          >
            <span className="block">Okelola</span>
            <span className="block text-accent">Oludamilare.</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Building digital experiences that bridge{" "}
            <span className="text-foreground font-medium">design</span> and{" "}
            <span className="text-foreground font-medium">development</span>.
            Currently shaping healthcare systems at the{" "}
            <span className="text-accent font-medium">NHS</span>.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="#work"
              className="cta-glow inline-flex items-center px-8 py-4 bg-accent text-accent-foreground text-base font-semibold rounded-lg transition-all duration-300 hover:bg-accent/90"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowDown className="ml-2 w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-border text-foreground text-base font-semibold rounded-lg transition-all duration-300 hover:border-accent hover:text-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="mr-2 w-4 h-4" />
              Get Resume
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
