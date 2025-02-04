import { Card } from "@/components/ui/card";
import { 
  Code2,
  MessageSquare,
  Bot,
  Braces,
  Database,
  GitBranch,
  Box,
  Cloud,
  Mail,
  Terminal,
  Workflow,
  Brain,
  Laptop,
  Keyboard
} from "lucide-react";

const tools = [
  {
    name: "VS Code",
    icon: Code2,
    description: "Code Editor",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-blue-100 to-cyan-100",
    link: "https://code.visualstudio.com"
  },
  {
    name: "Teams",
    icon: MessageSquare,
    description: "Collaboration",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-purple-100 to-indigo-100",
    link: "https://teams.microsoft.com"
  },
  {
    name: "Office 365",
    icon: Mail,
    description: "Productivity Suite",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-red-100 to-orange-100",
    link: "https://office.com"
  },
  {
    name: "Jira",
    icon: Workflow,
    description: "Project Management",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-blue-100 to-indigo-100",
    link: "https://jira.atlassian.com"
  },
  {
    name: "PostgreSQL",
    icon: Database,
    description: "Database",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-cyan-100 to-blue-100",
    link: "https://postgresql.org"
  },
  {
    name: "Git",
    icon: GitBranch,
    description: "Version Control",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-orange-100 to-amber-100",
    link: "https://git-scm.com"
  },
  {
    name: "Docker",
    icon: Box,
    description: "Containerization",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-blue-100 to-cyan-100",
    link: "https://www.docker.com"
  },
  {
    name: "OpenAI",
    icon: Brain,
    description: "AI Integration",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-green-100 to-emerald-100",
    link: "https://openai.com"
  },
  {
    name: "Vercel",
    icon: Cloud,
    description: "Deployment",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-slate-100 to-gray-100",
    link: "https://vercel.com"
  },
  {
    name: "Lovable",
    icon: Terminal,
    description: "Development Platform",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-purple-100 to-pink-100",
    link: "https://lovable.dev"
  },
  {
    name: "Cursor",
    icon: Keyboard,
    description: "AI-Powered Editor",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-indigo-100 to-violet-100",
    link: "https://cursor.sh"
  },
  {
    name: "v0 by Vercel",
    icon: Laptop,
    description: "AI Development",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-gray-100 to-slate-100",
    link: "https://v0.dev"
  }
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12">Tech Stack & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[120px]">
          {tools.map((tool, index) => (
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`group ${tool.className}`}
            >
              <Card
                className={`h-full p-6 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br ${tool.bgColor} backdrop-blur-sm flex flex-col items-center justify-center group cursor-pointer animate-fadeIn overflow-hidden relative border`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <tool.icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300 text-primary/80" />
                <h3 className="text-lg font-semibold mb-1 text-primary group-hover:text-accent transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-secondary text-sm group-hover:text-accent/90 transition-colors duration-300">
                  {tool.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;