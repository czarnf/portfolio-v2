
import { motion } from "framer-motion";
import MasonryGrid from "./MasonryGrid";
import ToolItem from "./tool/ToolItem";
import { tools } from "@/data/ToolsData";

const Tools = () => {
  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm relative"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(var(--accent)/0.1) 0%, transparent 100%),
          linear-gradient(to right, rgba(128,128,128,.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128,128,128,.05) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 20px 20px, 20px 20px'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-dark dark:text-light mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="tools-section"
          aria-label="Tech Stack and Tools Section"
        >
          Tech Stack & Tools
        </motion.h2>

        <MasonryGrid 
          items={tools}
          renderItem={(tool, index) => <ToolItem tool={tool} index={index} />}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Tools;
