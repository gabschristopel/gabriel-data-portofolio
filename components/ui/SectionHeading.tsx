"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="h-1 w-8 rounded-full bg-primary" />
        <span className="h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        <span className="h-1 w-8 rounded-full bg-accent" />
      </div>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
