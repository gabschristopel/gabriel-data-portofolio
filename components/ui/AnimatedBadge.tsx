"use client";

import { motion } from "framer-motion";

interface AnimatedBadgeProps {
  text: string;
  index?: number;
}

export default function AnimatedBadge({ text, index = 0 }: AnimatedBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="
        inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
        bg-gradient-to-r from-primary/10 to-accent/10
        dark:from-primary/20 dark:to-accent/20
        text-primary dark:text-blue-300
        border border-primary/20 dark:border-primary/30
        hover:border-primary/50 dark:hover:border-primary/50
        hover:shadow-lg hover:shadow-primary/10
        transition-all duration-300
      "
    >
      {text}
    </motion.span>
  );
}
