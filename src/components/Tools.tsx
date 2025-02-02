import { Card } from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle";

const tools = [
  {
    name: "Figma",
    icon: "/figma-logo.svg",
    description: "UI/UX Design",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
  },
  {
    name: "VS Code",
    icon: "/vscode-logo.svg",
    description: "Code Editor",
    className: "md:col-span-1 row-span-2",
    bgColor: "from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
  },
  {
    name: "Adobe XD",
    icon: "/xd-logo.svg",
    description: "Prototyping",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20",
  },
  {
    name: "Photoshop",
    icon: "/photoshop-logo.svg",
    description: "Image Editing",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
  },
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-white">Tools I Use</h2>
          <ModeToggle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className={`${tool.className} p-6 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br ${tool.bgColor} backdrop-blur-sm flex flex-col items-center justify-center group cursor-pointer animate-fadeIn overflow-hidden relative border dark:border-white/10`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">{tool.name}</h3>
              <p className="text-secondary dark:text-gray-300 text-sm">{tool.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;