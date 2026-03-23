"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/lib/data";

const SkillBar = ({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-white/40 text-xs font-mono"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        >
          <motion.div
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
            className="absolute inset-0 bg-white/20 rounded-full"
            style={{ width: "30%" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const techStack = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Redux", color: "#764ABC" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Git", color: "#F05032" },
  { name: "Vite", color: "#646CFF" },
  { name: "SCSS", color: "#CC6699" },
  { name: "Bootstrap", color: "#7952B3" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-[#050505]" aria-labelledby="skills-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,rgba(99,102,241,0.07),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionReveal direction="up" className="text-center mb-20">
          <span className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            What I Work With
          </span>
          <h2 id="skills-heading" className="text-5xl md:text-6xl font-black text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            A curated set of technologies I&apos;ve mastered through years of hands-on development
          </p>
        </SectionReveal>

        {/* Category tabs */}
        <SectionReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((category, i) => (
              <motion.button
                key={category.category}
                onClick={() => setActiveCategory(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === i
                    ? "text-white shadow-lg"
                    : "text-white/50 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                {activeCategory === i && (
                  <motion.span
                    layoutId="skill-tab"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.category}
                </span>
              </motion.button>
            ))}
          </div>
        </SectionReveal>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-2"
            >
              <GlassCard className="p-8" tilt={false}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{skills[activeCategory].icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-xl">{skills[activeCategory].category}</h3>
                    <p className="text-white/40 text-sm">{skills[activeCategory].items.length} skills</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills[activeCategory].items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.15}
                      color={skills[activeCategory].color}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All categories overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {skills.map((category, catIdx) => (
            <SectionReveal key={category.category} direction="up" delay={catIdx * 0.1}>
              <motion.button
                onClick={() => setActiveCategory(catIdx)}
                whileHover={{ y: -4 }}
                className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 group ${
                  activeCategory === catIdx
                    ? "border-violet-500/50 bg-violet-500/10"
                    : "border-white/10 bg-white/3 hover:border-white/20"
                }`}
              >
                <span className="text-2xl block mb-3">{category.icon}</span>
                <h4 className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors">
                  {category.category}
                </h4>
                <div className="flex gap-1 mt-3 flex-wrap">
                  {category.items.map((skill) => (
                    <span key={skill.name} className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`block h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </span>
                  ))}
                </div>
              </motion.button>
            </SectionReveal>
          ))}
        </div>

        {/* Tech stack marquee */}
        <SectionReveal direction="up" delay={0.2}>
          <h3 className="text-white/30 text-xs uppercase tracking-widest text-center mb-8">
            Technologies I&apos;ve worked with
          </h3>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -50 * techStack.length] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-4"
              style={{ width: "max-content" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <motion.div
                  key={`${tech.name}-${i}`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 shrink-0 hover:border-violet-400/40 transition-all cursor-default"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-white/60 text-sm font-medium whitespace-nowrap">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
