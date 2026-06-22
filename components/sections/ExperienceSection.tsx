"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent dark:via-accent/[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My journey in teaching, mentoring, and academic leadership"
        />

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              role={exp.role}
              organization={exp.organization}
              period={exp.period}
              responsibilities={exp.responsibilities}
              type={exp.type}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
