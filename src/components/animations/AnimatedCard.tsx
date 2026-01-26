import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
  delay?: number;
}

export const AnimatedCard = ({
  children,
  className,
  hoverScale = 1.02,
  hoverY = -8,
  delay = 0,
}: AnimatedCardProps) => {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={cn(
        "transition-shadow duration-300",
        "hover:shadow-xl hover:shadow-accent/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
