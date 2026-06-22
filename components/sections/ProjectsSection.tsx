"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ShoppingCart, Database, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedBadge from "@/components/ui/AnimatedBadge";
import { projects } from "@/lib/data";

const projectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  ShoppingCart,
  Database,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent dark:via-primary/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Showcasing my work in data engineering, analytics, and software development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => {
            const Icon = projectIcons[project.icon] || Database;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  relative group rounded-2xl overflow-hidden
                  bg-white/60 dark:bg-white/[0.03]
                  backdrop-blur-xl
                  border border-gray-200/50 dark:border-white/[0.06]
                  shadow-lg shadow-black/5 dark:shadow-black/20
                  hover:shadow-2xl hover:shadow-primary/10
                  transition-all duration-500
                  flex flex-col justify-between
                "
              >
                <div>
                  {/* Top gradient bar */}
                  <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-48 overflow-hidden bg-gray-900/5 dark:bg-gray-900/40 border-b border-gray-200/50 dark:border-white/[0.06]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    </div>
                  )}

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className={`relative z-10 p-6 sm:p-8 ${project.image ? "pt-10 sm:pt-10" : ""}`}>
                    {/* Icon */}
                    <div className={
                      project.image
                        ? "absolute left-6 sm:left-8 top-0 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow z-20"
                        : "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow"
                    }>
                      <Icon className={project.image ? "w-5 h-5 sm:w-6 sm:h-6 text-white" : "w-6 h-6 text-white"} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <ul className="space-y-2 mb-5">
                      {project.description.map((desc, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, j) => (
                        <AnimatedBadge key={tech} text={tech} index={j} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer / Actions */}
                <div className="relative z-10 px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  {project.url ? (
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-blue-400 hover:text-accent dark:hover:text-cyan-300 transition-colors"
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  ) : (
                    <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                      Academic / Research Project
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
