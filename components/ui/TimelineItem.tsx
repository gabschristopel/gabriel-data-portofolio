"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";

interface TimelineItemProps {
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
  type: "teaching" | "mentoring";
  index: number;
  isLast?: boolean;
}

const typeIcons = {
  teaching: GraduationCap,
  mentoring: Users,
};

export default function TimelineItem({
  role,
  organization,
  period,
  responsibilities,
  type,
  index,
  isLast = false,
}: TimelineItemProps) {
  const Icon = typeIcons[type] || Briefcase;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex items-start gap-6 md:gap-10"
    >
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          viewport={{ once: true }}
          className="
            w-12 h-12 rounded-full flex items-center justify-center
            bg-gradient-to-br from-primary to-accent
            shadow-lg shadow-primary/30
            z-10
          "
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[80px] bg-gradient-to-b from-primary/40 to-accent/20" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="
          p-6 rounded-2xl
          bg-white/60 dark:bg-white/[0.03]
          backdrop-blur-lg
          border border-gray-200/50 dark:border-white/[0.06]
          shadow-lg shadow-black/5 dark:shadow-black/20
          hover:border-primary/30 dark:hover:border-primary/30
          transition-all duration-300
          group
        ">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="
              text-xs font-semibold px-3 py-1 rounded-full
              bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300
            ">
              {period}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
            {role}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{organization}</p>
          <ul className="space-y-2">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
