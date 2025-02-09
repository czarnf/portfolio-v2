
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-primary mb-8"
          variants={skillVariants}
        >
          About Me
        </motion.h2>
        <div className="space-y-6">
          <motion.p 
            className="text-secondary text-lg"
            variants={skillVariants}
          >
            With over 5 years of experience in digital design and development, I specialize in creating user-centered solutions that combine aesthetic appeal with functional excellence.
          </motion.p>
          <motion.p 
            className="text-secondary text-lg"
            variants={skillVariants}
          >
            My approach integrates strategic thinking with creative execution, ensuring that every project not only looks great but also delivers meaningful results for clients and users alike.
          </motion.p>
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-xl font-semibold text-primary"
              variants={skillVariants}
            >
              Core Competencies
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {[
                "Full Stack Development",
                "IT Project Management",
                "System Architecture",
                "API Development",
                "Database Design",
                "Security Implementation",
                "Performance Optimization",
                "Cloud Infrastructure"
              ].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full text-secondary text-sm hover:bg-accent hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md"
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
