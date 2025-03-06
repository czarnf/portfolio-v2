
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";

interface MasonryGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

const MasonryGrid = <T extends unknown>({ 
  items, 
  renderItem, 
  className = "" 
}: MasonryGridProps<T>) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (gridRef.current) {
        const children = Array.from(gridRef.current.children);
        let minHeight = Infinity;
        let column = 0;
        
        children.forEach((child, i) => {
          const height = (child as HTMLElement).offsetHeight;
          if (height < minHeight) {
            minHeight = height;
            column = i;
          }
        });
      }
    });

    if (gridRef.current) {
      resizeObserver.observe(gridRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [items]);

  return (
    <ScrollArea className="h-[600px] w-full rounded-md">
      <motion.div
        ref={gridRef}
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 p-4 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </motion.div>
    </ScrollArea>
  );
};

export default MasonryGrid;
