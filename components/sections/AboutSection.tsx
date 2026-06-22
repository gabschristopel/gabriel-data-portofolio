"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  GraduationCap,
  FolderKanban,
  Users,
  TrendingUp,
  Database,
  Brain,
  Code2,
  Workflow,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  FolderKanban,
  Users,
  TrendingUp,
};

const interestIcons = [Database, Brain, Cpu, Code2, Workflow];

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Check if value is a number (possibly with +)
    const numericPart = value.replace(/[^0-9]/g, "");
    if (!numericPart || value === "∞") {
      setDisplay(value);
      return;
    }

    const target = parseInt(numericPart);
    const hasSuffix = value.includes("+") ? "+" : "";
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 30));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplay(current + hasSuffix);
    }, 40);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent dark:via-primary/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me, my interests, and what drives me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Profile Image + Interests */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <Image
                  src={personalInfo.profilePath || "/profile-placeholder.svg"}
                  alt="Gabriel Christopel Manariangkuba"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-2 border-accent/20 rounded-2xl -z-10" />
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                My Interests
              </h3>
              <div className="space-y-3">
                {personalInfo.interests.map((interest, i) => {
                  const Icon = interestIcons[i % interestIcons.length];
                  return (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{interest}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: About text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {personalInfo.aboutMe}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              {personalInfo.aboutMeExtra}
            </p>
          </motion.div>
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, i) => {
            const Icon = statIcons[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="
                  relative p-6 rounded-2xl text-center
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
                  {Icon && (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
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
