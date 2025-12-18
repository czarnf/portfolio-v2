import { ExternalLink, Github, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  challenge: string;
  solution: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Zinter Logistics Platform",
    challenge: "A Dutch logistics startup needed to modernize their B2B2C platform to increase customer retention and streamline operations.",
    solution: "Built an AI-enhanced platform with predictive analytics, reducing operational bottlenecks and improving retention by 70%.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Data Dashboard",
    challenge: "NHS patient flow data was scattered across multiple systems, making real-time decisions difficult.",
    solution: "Created a unified dashboard integrating multiple data sources for instant visibility into bed management and patient flow.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    techStack: ["TypeScript", "React", "D3.js", "Supabase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-Commerce Conversion Engine",
    challenge: "Small businesses on Fiverr needed high-converting websites but lacked technical expertise.",
    solution: "Developed a streamlined e-commerce solution with SEO optimization and conversion-focused UX, increasing client sales by 40%.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    techStack: ["Next.js", "Tailwind", "Stripe", "Vercel"],
    liveUrl: "#",
    githubUrl: "#"
  },
];

const Work = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      id="work" 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Selected Work Section"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          variants={cardVariants}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Projects where I've transformed complex challenges into elegant, user-focused solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div 
          className="grid lg:grid-cols-2 gap-8"
          role="list"
          aria-label="Projects grid"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              role="listitem"
              aria-label={project.title}
              className="project-card group bg-card rounded-2xl border border-border overflow-hidden"
              variants={cardVariants}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                {!loadedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <Loader2 className="w-8 h-8 animate-spin text-accent" />
                  </div>
                )}
                <img
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    loadedImages[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono text-accent uppercase tracking-wider mb-1">The Challenge</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-accent uppercase tracking-wider mb-1">The Solution</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Key Tech</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
