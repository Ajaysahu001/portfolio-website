"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Ajay Sahu
          </span>
          <p className="text-white/40 text-sm mt-1">Front-end Developer</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/30 text-sm text-center"
        >
          © {new Date().getFullYear()} Ajay Sahu. Crafted with ❤️ using Next.js & Framer Motion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          {[
            { label: "GitHub", href: "https://github.com/Ajaysahu001", icon: "⌥" },
            { label: "LinkedIn", href: "https://linkedin.com/in/ajaysahu001", icon: "in" },
            { label: "Email", href: "mailto:ajay.sahuchitrakoot@gmail.com", icon: "@" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200 text-xs font-bold"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
