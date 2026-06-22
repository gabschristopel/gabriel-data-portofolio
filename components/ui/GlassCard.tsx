"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 dark:bg-white/[0.03]
        backdrop-blur-xl
        border border-white/10 dark:border-white/[0.06]
        shadow-lg shadow-black/5 dark:shadow-black/20
        ${hover ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
