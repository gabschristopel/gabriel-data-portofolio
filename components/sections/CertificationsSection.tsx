"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent dark:via-accent/[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and credentials"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
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
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <Award className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Issued by {cert.issuer}
                </p>

                {/* View Certificate button */}
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                    bg-gradient-to-r from-primary to-accent
                    text-white
                    shadow-lg shadow-primary/20
                    hover:shadow-xl hover:shadow-primary/30
                    transition-shadow duration-300
                  "
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
