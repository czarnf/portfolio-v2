
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "Web Design & Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Brand Identity",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Mobile Application",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-dark dark:text-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Selected Work
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-6 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
