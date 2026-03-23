"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { projects } from "@/lib/data";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <SectionReveal direction="up" delay={index * 0.15}>
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0f] hover:border-violet-500/30 transition-all duration-500"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        {/* Moving glow spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${glowX} ${glowY}, rgba(139,92,246,0.08), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Top gradient bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} aria-hidden="true" />

        <div className="p-8" style={{ transform: "translateZ(20px)" }}>
          {/* Card header */}
          <header className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                aria-hidden="true"
              >
                {project.icon}
              </motion.div>
              <div>
                <h3
                  className="text-white font-bold text-xl group-hover:text-violet-300 transition-colors"
                  itemProp="name"
                >
                  {project.title}
                </h3>
                <div className="flex gap-1 mt-1" aria-hidden="true">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1, type: "spring" }}
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action links */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors text-sm"
                aria-label={`View source code for ${project.title} on GitHub`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true">⌥</span>
              </motion.a>
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors text-sm"
                aria-label={`Live demo of ${project.title}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true">↗</span>
              </motion.a>
            </div>
          </header>

          {/* Description */}
          <p
            className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors"
            itemProp="description"
          >
            {project.description}
          </p>

          {/* Highlights */}
          <ul
            className="grid grid-cols-2 gap-2 mb-6"
            aria-label={`${project.title} highlights`}
          >
            {project.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.08 }}
                className="flex items-center gap-2 text-xs text-white/40 group-hover:text-white/60 transition-colors"
              >
                <span
                  className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color} shrink-0`}
                  aria-hidden="true"
                />
                {h}
              </motion.li>
            ))}
          </ul>

          {/* Tech stack */}
          <ul
            className="flex flex-wrap gap-2 mb-5"
            aria-label={`Technologies used in ${project.title}`}
          >
            {project.tech.map((tech) => (
              <motion.li
                key={tech}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-white/70 border border-white/10 hover:border-violet-400/40 transition-all`}
                itemProp="keywords"
              >
                {tech}
              </motion.li>
            ))}
          </ul>

          {/* Detail page link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-violet-400/70 text-xs font-medium hover:text-violet-300 transition-colors group-hover:gap-2"
            aria-label={`Read more about ${project.title}`}
            itemProp="url"
          >
            <span>View case study</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Bottom shimmer on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${project.color} origin-left`}
          aria-hidden="true"
        />
      </motion.article>
    </SectionReveal>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-[#060608]"
      aria-labelledby="projects-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(99,102,241,0.05),transparent)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <SectionReveal direction="up" className="text-center mb-20">
          <p className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            What I&apos;ve Built
          </p>
          <h2
            id="projects-heading"
            className="text-5xl md:text-6xl font-black text-white"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            A selection of projects I&apos;ve built that showcase my skills and passion for great UX
          </p>
        </SectionReveal>

        {/* Projects grid — semantic list */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={i} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <SectionReveal direction="up" delay={0.3} className="text-center mt-16">
          <motion.a
            href="https://github.com/Ajaysahu001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/70 font-medium hover:text-white hover:border-violet-400/50 hover:bg-violet-500/5 transition-all duration-300"
            aria-label="View all projects on GitHub (opens in new tab)"
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </SectionReveal>
      </div>
    </section>
  );
}
