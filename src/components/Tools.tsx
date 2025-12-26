
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import MasonryGrid from "./MasonryGrid";
import ToolItem from "./tool/ToolItem";
import { tools as allTools } from "@/data/ToolsData";
import { useToast } from "@/hooks/use-toast";

const ITEMS_PER_PAGE = 6; // Load 6 tools at a time

const Tools = () => {
  const [displayedTools, setDisplayedTools] = useState(allTools.slice(0, ITEMS_PER_PAGE));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(allTools.length > ITEMS_PER_PAGE);
  const [page, setPage] = useState(1);
  const { toast } = useToast();

  const loadMoreTools = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate network delay for demonstration
    setTimeout(() => {
      const nextPage = page + 1;
      const nextItems = allTools.slice(0, nextPage * ITEMS_PER_PAGE);
      
      setDisplayedTools(nextItems);
      setPage(nextPage);
      setHasMore(nextItems.length < allTools.length);
      setLoading(false);

      if (nextItems.length >= allTools.length) {
        toast({
          title: "All tools loaded",
          description: "You've reached the end of the tools list",
          duration: 3000,
        });
      }
    }, 800); // Simulate loading delay
  }, [page, loading, hasMore, toast]);

  // Reset tools when component mounts or unmounts
  useEffect(() => {
    setDisplayedTools(allTools.slice(0, ITEMS_PER_PAGE));
    setPage(1);
    setHasMore(allTools.length > ITEMS_PER_PAGE);
    
    return () => {
      setDisplayedTools([]);
      setPage(1);
    };
  }, []);

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
          items={displayedTools}
          renderItem={(tool, index) => <ToolItem tool={tool} index={index} />}
          className="w-full"
          loadMoreItems={loadMoreTools}
          hasMore={hasMore}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default Tools;
