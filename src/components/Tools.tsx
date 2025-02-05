import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const tools = [
  {
    name: "VS Code",
    icon: "/vscode-logo.svg",
    description: "Code Editor",
    className: "md:col-span-2 row-span-2",
    importance: "primary",
    link: "https://code.visualstudio.com"
  },
  {
    name: "Teams",
    icon: "/brand-logos/teams-logo.svg",
    description: "Collaboration",
    className: "md:col-span-1 row-span-1",
    importance: "secondary",
    link: "https://teams.microsoft.com"
  },
  {
    name: "Figma",
    icon: "/figma-logo.svg",
    description: "Design Tool",
    className: "md:col-span-1 row-span-2",
    importance: "primary",
    link: "https://figma.com"
  },
  {
    name: "Whimsical",
    icon: "/brand-logos/whimsical-logo.svg",
    description: "Flowcharts & Diagrams",
    className: "md:col-span-2 row-span-1",
    importance: "secondary",
    link: "https://whimsical.com"
  },
  {
    name: "Excel",
    icon: "/brand-logos/excel-logo.svg",
    description: "Spreadsheets",
    className: "md:col-span-1 row-span-1",
    importance: "secondary",
    link: "https://office.com/excel"
  },
  {
    name: "Jira",
    icon: "/brand-logos/jira-logo.svg",
    description: "Project Management",
    className: "md:col-span-2 row-span-2",
    importance: "primary",
    link: "https://jira.atlassian.com"
  },
  {
    name: "Slack",
    icon: "/brand-logos/slack-logo.svg",
    description: "Team Communication",
    className: "md:col-span-1 row-span-1",
    importance: "secondary",
    link: "https://slack.com"
  },
  {
    name: "PostgreSQL",
    icon: "/brand-logos/postgresql-logo.svg",
    description: "Database",
    className: "md:col-span-2 row-span-1",
    importance: "primary",
    link: "https://postgresql.org"
  },
  {
    name: "Git",
    icon: "/brand-logos/git-logo.svg",
    description: "Version Control",
    className: "md:col-span-1 row-span-1",
    importance: "secondary",
    link: "https://git-scm.com"
  },
  {
    name: "Docker",
    icon: "/brand-logos/docker-logo.svg",
    description: "Containerization",
    className: "md:col-span-2 row-span-1",
    importance: "primary",
    link: "https://www.docker.com"
  },
  {
    name: "OpenAI",
    icon: "/brand-logos/openai-logo.svg",
    description: "AI Integration",
    className: "md:col-span-1 row-span-2",
    importance: "primary",
    link: "https://openai.com"
  },
  {
    name: "Lovable",
    icon: "/brand-logos/lovable-logo.svg",
    description: "Development Platform",
    className: "md:col-span-2 row-span-1",
    importance: "primary",
    link: "https://lovable.dev"
  }
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12">Tech Stack & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[120px]">
          {tools.map((tool, index) => (
            <motion.a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`group ${tool.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card
                className={`h-full p-6 transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer overflow-hidden relative border
                  ${tool.importance === 'primary' ? 'bg-white shadow-lg' : 'bg-gray-50'}`}
              >
                <motion.img 
                  src={tool.icon} 
                  alt={`${tool.name} logo`}
                  className="w-8 h-8 mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {tool.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;