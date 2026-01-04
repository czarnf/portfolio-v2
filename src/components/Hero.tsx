import { motion } from "framer-motion";
import { ArrowDown, FileText, Linkedin } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        className="max-w-5xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
        {/* Role identifier */}
          <motion.p 
            className="text-accent font-medium text-sm tracking-wide uppercase"
            variants={itemVariants}
          >
            Technical Project Lead | Digital Transformation & Data Platforms
          </motion.p>
          
          {/* Name */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground tracking-tight leading-[1.1]"
            variants={itemVariants}
          >
            Emmanuel<br />
            <span className="text-accent">Chiefson.</span>
          </motion.h1>
          
          {/* Strategic headline */}
          <motion.div 
            className="space-y-4 max-w-2xl"
            variants={itemVariants}
          >
            <p className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed">
              Bridging Technical Complexity, Data & Commercial Outcomes
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I translate technical complexity into operational scale, data clarity, and revenue protection. 
              From <span className="font-semibold text-foreground">AI-driven platform overhauls</span> to 
              <span className="font-semibold text-foreground"> healthcare data governance</span>, I lead 
              transformations that deliver measurable business outcomes.
            </p>
          </motion.div>

          {/* Dual Impact Statement */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">
                <span className="font-bold text-foreground">70%</span> Customer Retention at Zinter
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">
                <span className="font-bold text-foreground">30%</span> Data Reconciliation Reduction at NHS
              </span>
            </div>
          </motion.div>
          
          {/* Credibility Line */}
          <motion.p 
            className="text-xs text-muted-foreground italic"
            variants={itemVariants}
          >
            Metrics validated through operational reporting, system performance tracking, and stakeholder sign-off.
          </motion.p>
          
          {/* CTA Buttons - Primary CTAs: Contact/CV & LinkedIn */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 bg-foreground text-background text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="mr-2 w-4 h-4" />
              Download CV
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/emmanuelchiefson"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="mr-2 w-4 h-4" />
              Connect on LinkedIn
            </motion.a>
            <motion.a
              href="#case-studies"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg transition-colors hover:border-accent hover:text-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Studies
              <ArrowDown className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
