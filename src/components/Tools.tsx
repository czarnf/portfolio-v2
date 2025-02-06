
import { motion } from "framer-motion";

const tools = [
  {
    name: "VS Code",
    icon: "/vscode-logo.svg",
    description: "Code Editor",
    link: "https://code.visualstudio.com"
  },
  {
    name: "Teams",
    icon: "/brand-logos/teams-logo.svg", 
    description: "Collaboration",
    link: "https://teams.microsoft.com"
  },
  {
    name: "Figma",
    icon: "/figma-logo.svg",
    description: "Design Tool",
    link: "https://figma.com"
  },
  {
    name: "Whimsical",
    icon: "/brand-logos/whimsical-logo.svg",
    description: "Flowcharts & Diagrams", 
    link: "https://whimsical.com"
  },
  {
    name: "Excel",
    icon: "/brand-logos/excel-logo.svg",
    description: "Spreadsheets",
    link: "https://office.com/excel"
  },
  {
    name: "Jira",
    icon: "/brand-logos/jira-logo.svg",
    description: "Project Management",
    link: "https://jira.atlassian.com"
  },
  {
    name: "Slack",
    icon: "/brand-logos/slack-logo.svg",
    description: "Team Communication",
    link: "https://slack.com"
  },
  {
    name: "PostgreSQL",
    icon: "/brand-logos/postgresql-logo.svg",
    description: "Database",
    link: "https://postgresql.org"
  },
  {
    name: "Git",
    icon: "/brand-logos/git-logo.svg",
    description: "Version Control",
    link: "https://git-scm.com"
  },
  {
    name: "Docker",
    icon: "/brand-logos/docker-logo.svg",
    description: "Containerization",
    link: "https://www.docker.com"
  },
  {
    name: "OpenAI",
    icon: "/brand-logos/openai-logo.svg",
    description: "AI Integration",
    link: "https://openai.com"
  },
  {
    name: "Lovable",
    icon: "/brand-logos/lovable-logo.svg",
    description: "Development Platform",
    link: "https://lovable.dev"
  },
  {
    name: "Supabase",
    icon: "/brand-logos/supabase-logo.svg",
    description: "Backend Platform",
    link: "https://supabase.com"
  },
  {
    name: "Cursor",
    icon: "/brand-logos/cursor-logo.svg",
    description: "AI Code Editor",
    link: "https://cursor.sh"
  },
  {
    name: "Power BI",
    icon: "/brand-logos/powerbi-logo.svg",
    description: "Business Intelligence",
    link: "https://powerbi.microsoft.com"
  },
  {
    name: "V0",
    icon: "/brand-logos/v0-logo.svg",
    description: "AI Design Tool",
    link: "https://v0.dev"
  },
  {
    name: "Firebase",
    icon: "/brand-logos/firebase-logo.svg",
    description: "Backend Platform",
    link: "https://firebase.google.com"
  },
  {
    name: "M365",
    icon: "/brand-logos/m365-logo.svg",
    description: "Productivity Suite",
    link: "https://microsoft365.com"
  }
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-dark dark:text-light mb-12">Tech Stack & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <span className="text-sm font-medium text-dark dark:text-light text-center">
                {tool.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
