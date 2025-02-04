import { Card } from "@/components/ui/card";

const tools = [
  {
    name: "Figma",
    icon: "/figma-logo.svg",
    description: "UI/UX Design",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-purple-100 to-pink-100",
    link: "https://figma.com"
  },
  {
    name: "VS Code",
    icon: "/vscode-logo.svg",
    description: "Code Editor",
    className: "md:col-span-1 row-span-2",
    bgColor: "from-blue-100 to-cyan-100",
    link: "https://code.visualstudio.com"
  },
  {
    name: "Adobe XD",
    icon: "/xd-logo.svg",
    description: "Prototyping",
    className: "md:col-span-1 row-span-1",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://adobe.com/xd"
  },
  {
    name: "Photoshop",
    icon: "/photoshop-logo.svg",
    description: "Image Editing",
    className: "md:col-span-2 row-span-1",
    bgColor: "from-blue-100 to-indigo-100",
    link: "https://adobe.com/photoshop"
  },
];

const Tools = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12">Development Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
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
                {tool.icon && (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
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