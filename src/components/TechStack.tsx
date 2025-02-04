import { Code2, Database, FileJson, Globe, Layout, Server, Shield, Cloud } from "lucide-react";

const technologies = [
  {
    name: "Frontend Technologies",
    icon: Layout,
    description: "React.js, Next.js, Tailwind CSS, Vite"
  },
  {
    name: "Backend Development",
    icon: Server,
    description: "Node.js, Express.js, NestJS"
  },
  {
    name: "API Development",
    icon: FileJson,
    description: "RESTful APIs, WebSockets, Socket.io"
  },
  {
    name: "Databases & Storage",
    icon: Database,
    description: "PostgreSQL, MongoDB, Redis, Supabase"
  },
  {
    name: "Authentication & Security",
    icon: Shield,
    description: "Auth0, Firebase Auth, JWT"
  },
  {
    name: "Cloud Services",
    icon: Cloud,
    description: "Firebase, AWS, Cloud Storage"
  },
];

const TechStack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(to right, #accbee 0%, #e7f0fd 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <tech.icon className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{tech.name}</h3>
              <p className="text-secondary">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;