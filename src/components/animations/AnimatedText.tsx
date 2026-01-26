import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const AnimatedText = ({
  children,
  className,
  delay = 0,
  as = "p",
}: AnimatedTextProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
};

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedLetters = ({
  text,
  className,
  delay = 0,
}: AnimatedLettersProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
