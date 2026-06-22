"use client";

import { motion } from "framer-motion";
import { ClipboardList, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { organizationExperiences } from "@/lib/data";

const orgIcons = [ClipboardList, BookOpen];

export default function OrganizationSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Organizational Experience"
          subtitle="Leadership and contributions in student organizations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {organizationExperiences.map((org, i) => {
            const Icon = orgIcons[i % orgIcons.length];
            return (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="
                  relative p-8 rounded-2xl
                  bg-white/60 dark:bg-white/[0.03]
                  backdrop-blur-xl
                  border border-gray-200/50 dark:border-white/[0.06]
                  shadow-lg shadow-black/5 dark:shadow-black/20
                  group overflow-hidden
                "
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {org.organization}
                  </h3>
                  <p className="text-sm font-medium text-primary dark:text-blue-400 mb-4">
                    {org.position}
                  </p>

                  <ul className="space-y-2">
                    {org.responsibilities.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
