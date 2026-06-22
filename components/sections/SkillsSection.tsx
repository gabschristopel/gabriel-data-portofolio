"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Brain, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedBadge from "@/components/ui/AnimatedBadge";
import { skillCategories } from "@/lib/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Database,
  Layers,
  Brain,
  Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent dark:via-secondary/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.icon] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`
                  relative p-6 sm:p-8 rounded-2xl
                  bg-white/60 dark:bg-white/[0.03]
                  backdrop-blur-xl
                  border border-gray-200/50 dark:border-white/[0.06]
                  shadow-lg shadow-black/5 dark:shadow-black/20
                  group overflow-hidden
                  ${i === 3 ? "sm:col-span-2 lg:col-span-1" : ""}
                `}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <AnimatedBadge key={skill} text={skill} index={j} />
                    ))}
                  </div>

                  {/* Animated progress bar */}
                  <div className="mt-5">
                    <motion.div
                      className="h-1 rounded-full bg-gray-200/50 dark:bg-white/10 overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + i * 5}%` }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
