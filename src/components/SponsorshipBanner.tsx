import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const SponsorshipBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-accent/20">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 mb-6"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">UK-based</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">MSc Information Technology Graduate</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Briefcase className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Skilled Worker Visa Sponsorship Eligible</span>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-lg text-foreground font-medium max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Open to sponsor-backed senior technical delivery, data, and transformation roles.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SponsorshipBanner;