import { motion, Variants, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const AnimatedList = ({
  children,
  className,
  itemClassName,
  staggerDelay = 0.1,
  once = true,
}: AnimatedListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={cn(itemClassName)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedList;
