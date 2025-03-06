
import { useState } from "react";
import { motion } from "framer-motion";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";
import MasonryGrid from "./MasonryGrid";

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
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (toolName: string) => {
    setLoadedImages(prev => ({ ...prev, [toolName]: true }));
  };

  const renderTool = (tool: typeof tools[0], index: number) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg 
                     bg-white/5 dark:bg-dark/5 backdrop-blur-sm
                     hover:bg-accent/10 dark:hover:bg-accent/5
                     active:scale-95
                     transition-all duration-300 ease-in-out
                     border border-transparent hover:border-accent/20
                     focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                     dark:focus:ring-offset-dark
                     group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            role="gridcell"
            aria-label={`${tool.name} - ${tool.description}`}
            tabIndex={0}
          >
            <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              {!loadedImages[tool.name] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-accent" />
                </div>
              )}
              <motion.img
                src={tool.icon}
                alt={`${tool.name} logo`}
                className={`w-full h-full object-contain transition-all duration-300 ${
                  loadedImages[tool.name] ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: loadedImages[tool.name] ? 1 : 0 }}
                onLoad={() => handleImageLoad(tool.name)}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                  handleImageLoad(tool.name);
                }}
              />
            </div>
            <span className="text-sm font-medium text-dark dark:text-light text-center group-hover:text-primary transition-colors duration-300">
              {tool.name}
            </span>
          </motion.a>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          className="bg-background/95 backdrop-blur-sm border-accent/20"
          role="tooltip"
        >
          <p>{tool.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

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
          renderItem={renderTool}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Tools;
