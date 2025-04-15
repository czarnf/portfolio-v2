
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  TooltipProvider, 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent 
} from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";
import { Tool } from "@/data/ToolsData";

interface ToolItemProps {
  tool: Tool;
  index: number;
}

const ToolItem = ({ tool, index }: ToolItemProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Reset state when tool changes
  useEffect(() => {
    setIsImageLoaded(false);
    setImageError(false);
  }, [tool.icon]);

  return (
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
              {!isImageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-accent" />
                </div>
              )}
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{tool.name[0]}</span>
                </div>
              ) : (
                <motion.img
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isImageLoaded ? 1 : 0 }}
                  onLoad={() => {
                    setIsImageLoaded(true);
                    setImageError(false);
                    console.log(`Loaded image for ${tool.name}: ${tool.icon}`);
                  }}
                  onError={(e) => {
                    console.error(`Failed to load image for ${tool.name}: ${tool.icon}`);
                    setImageError(true);
                    setIsImageLoaded(true);
                  }}
                />
              )}
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
};

export default ToolItem;
