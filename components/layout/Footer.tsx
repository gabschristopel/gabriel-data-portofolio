"use client";

import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-[#060612] border-t border-gray-200/50 dark:border-white/[0.06]">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3">
              {"<Gabriel />"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Building data-driven solutions and transforming information into meaningful insights.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-10 h-10 rounded-xl flex items-center justify-center
                      bg-gray-100 dark:bg-white/10
                      hover:bg-primary/10 dark:hover:bg-primary/20
                      text-gray-500 dark:text-gray-400
                      hover:text-primary dark:hover:text-blue-400
                      transition-all duration-300
                    "
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-gray-200/50 dark:border-white/[0.06] text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Gabriel Christopel Manariangkuba. Made with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
