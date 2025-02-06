
import { ExternalLink } from "lucide-react";

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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-dark dark:text-light mb-8">Selected Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <ExternalLink className="w-6 h-6" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
