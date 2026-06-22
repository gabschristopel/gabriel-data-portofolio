"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  User,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Instagram: InstagramIcon,
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Invalid email format";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent dark:via-primary/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact"
          subtitle="Get in touch with me for collaborations, opportunities, or just a chat"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Info cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-lg border border-gray-200/50 dark:border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {personalInfo.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-lg border border-gray-200/50 dark:border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">University</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {personalInfo.university}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Find me on
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link, i) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="
                      flex items-center gap-3 p-4 rounded-xl
                      bg-white/60 dark:bg-white/[0.03]
                      backdrop-blur-lg
                      border border-gray-200/50 dark:border-white/[0.06]
                      hover:border-primary/30 dark:hover:border-primary/30
                      transition-all duration-300
                      group
                    "
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon className="w-4 h-4 text-primary" />}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      {link.platform}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="
                p-8 rounded-2xl
                bg-white/60 dark:bg-white/[0.03]
                backdrop-blur-xl
                border border-gray-200/50 dark:border-white/[0.06]
                shadow-lg shadow-black/5 dark:shadow-black/20
              "
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`
                      w-full px-4 py-3 rounded-xl text-sm
                      bg-gray-100/60 dark:bg-white/5
                      border ${errors.name ? "border-red-400" : "border-gray-200/50 dark:border-white/10"}
                      text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-primary/50
                      transition-all duration-300
                    `}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`
                      w-full px-4 py-3 rounded-xl text-sm
                      bg-gray-100/60 dark:bg-white/5
                      border ${errors.email ? "border-red-400" : "border-gray-200/50 dark:border-white/10"}
                      text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-primary/50
                      transition-all duration-300
                    `}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`
                      w-full px-4 py-3 rounded-xl text-sm resize-none
                      bg-gray-100/60 dark:bg-white/5
                      border ${errors.message ? "border-red-400" : "border-gray-200/50 dark:border-white/10"}
                      text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-primary/50
                      transition-all duration-300
                    `}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className={`
                    w-full py-3.5 rounded-xl text-sm font-semibold
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    ${submitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                    }
                  `}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
