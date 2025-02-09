
import { ExternalLink, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Project One",
    description: "Web Design & Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
    tags: ["Web Design", "React", "TypeScript"]
  },
  {
    title: "Project Two",
    description: "Brand Identity",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    link: "#",
    tags: ["Branding", "Design", "Identity"]
  },
  {
    title: "Project Three",
    description: "Mobile Application",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#",
    tags: ["Mobile", "React Native", "UI/UX"]
  },
];

const Work = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section 
      id="work" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark"
      aria-label="Selected Work Section"
    >
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
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Projects grid"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              role="listitem"
              aria-label={`${project.title} - ${project.description}`}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video">
                {!loadedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
                    <Loader2 className="w-8 h-8 animate-spin text-accent" />
                  </div>
                )}
                <motion.img
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loadedImages[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div 
                className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-6 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="group/link flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  aria-label={`View ${project.title} project`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </a>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
