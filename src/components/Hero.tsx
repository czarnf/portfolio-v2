
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <motion.div 
        className="max-w-7xl w-full space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Creative Developer & Designer
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-secondary max-w-2xl"
            variants={itemVariants}
          >
            I craft beautiful and functional digital experiences, combining design and development to create impactful solutions.
          </motion.p>
        </div>
        <motion.div 
          className="flex space-x-4"
          variants={itemVariants}
        >
          <motion.a
            href="#work"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
