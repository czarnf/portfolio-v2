
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";
import { Loader2 } from "lucide-react";

interface MasonryGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  loadMoreItems?: () => void;
  hasMore?: boolean;
  loading?: boolean;
}

const MasonryGrid = <T extends unknown>({ 
  items, 
  renderItem, 
  className = "",
  loadMoreItems,
  hasMore = false,
  loading = false
}: MasonryGridProps<T>) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrollHeight, setScrollHeight] = useState(600); // Default height
  const loaderRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(1);
  
  // Determine optimal column count based on screen width
  useEffect(() => {
    const calculateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) return 2; // mobile
      if (width < 768) return 3; // small tablets
      if (width < 1024) return 4; // tablets/small laptops
      return 6; // desktops
    };
    
    const handleResize = () => {
      setColumns(calculateColumns());
    };
    
    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust grid height based on viewport
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      setScrollHeight(Math.min(vh * 0.7, 600)); // 70% of viewport height, max 600px
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    if (loadMoreItems && hasMore) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !loading) {
            loadMoreItems();
          }
        },
        { threshold: 0.1 }
      );

      if (loaderRef.current) {
        observerRef.current.observe(loaderRef.current);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMoreItems, hasMore, loading]);

  // Split items into column arrays
  const getItemsInColumns = () => {
    const columnArrays: T[][] = Array.from({ length: columns }, () => []);
    
    items.forEach((item, index) => {
      // Distribute items evenly across columns using modulo
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(item);
    });
    
    return columnArrays;
  };

  const columnArrays = getItemsInColumns();

  return (
    <ScrollArea className={`h-[${scrollHeight}px] w-full rounded-md`}>
      <motion.div
        ref={gridRef}
        className={`flex gap-4 md:gap-6 lg:gap-8 p-4 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {columnArrays.map((column, columnIndex) => (
          <div 
            key={`column-${columnIndex}`} 
            className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1"
          >
            {column.map((item, itemIndex) => {
              const originalIndex = itemIndex * columns + columnIndex;
              return (
                <motion.div
                  key={originalIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(originalIndex * 0.05, 1) }} // Cap delay to avoid excessive waits
                >
                  {renderItem(item, originalIndex)}
                </motion.div>
              );
            })}
          </div>
        ))}
      </motion.div>
      
      {(hasMore || loading) && (
        <div 
          ref={loaderRef} 
          className="w-full flex justify-center py-4"
        >
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin text-accent" />
          ) : (
            <div className="h-10" /> // Spacer for observer
          )}
        </div>
      )}
    </ScrollArea>
  );
};

export default MasonryGrid;
