"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { personalInfo, stats, education } from "@/lib/data";

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => (
  <SectionReveal delay={index * 0.1} direction="up">
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center group cursor-default overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
          className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {stat.value}{stat.suffix}
        </motion.div>
        <div className="text-white/50 text-sm mt-1 font-medium">{stat.label}</div>
      </div>
    </motion.div>
  </SectionReveal>
);

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden bg-[#060608]" aria-labelledby="about-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <SectionReveal direction="up" className="text-center mb-20">
          <span className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get To Know Me
          </span>
          <h2 id="about-heading" className="text-5xl md:text-6xl font-black text-white">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar + decoration */}
          <SectionReveal direction="left">
            <motion.div style={{ y }} className="relative">
              {/* Avatar container */}
              <div className="relative mx-auto w-72 h-72 lg:w-80 lg:h-80">
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-dotted border-cyan-500/20"
                />

                {/* Profile card */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-600/20 to-purple-600/20 border border-violet-500/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <span className="text-8xl select-none">👨‍💻</span>
                </div>

                {/* Floating badges */}
                {[
                  { label: "React.js", pos: "top-0 -right-4", color: "from-blue-500 to-cyan-500" },
                  { label: "Next.js", pos: "bottom-8 -left-4", color: "from-violet-500 to-purple-500" },
                  { label: "2+ Years", pos: "-bottom-4 right-8", color: "from-emerald-500 to-teal-500" },
                ].map((badge) => (
                  <motion.div
                    key={badge.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${badge.pos} px-3 py-1.5 rounded-full bg-gradient-to-r ${badge.color} text-white text-xs font-bold shadow-lg`}
                  >
                    {badge.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </SectionReveal>

          {/* Right — Content */}
          <div className="space-y-8">
            <SectionReveal direction="right" delay={0.1}>
              <h3 className="text-3xl font-bold text-white leading-tight">
                Passionate about building{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  exceptional
                </span>{" "}
                web experiences
              </h3>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.2}>
              <p className="text-white/60 text-lg leading-relaxed">
                {personalInfo.summary}
              </p>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.3}>
              <p className="text-white/50 leading-relaxed">
                Currently working at{" "}
                <span className="text-violet-400 font-semibold">Lucent Innovation</span>, Ahmedabad,
                where I design and build dynamic user interfaces. I love turning complex problems
                into simple, beautiful, and intuitive solutions.
              </p>
            </SectionReveal>

            {/* Info grid */}
            <SectionReveal direction="right" delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Ajay Sahu" },
                  { label: "Location", value: "Chitrakoot, M.P." },
                  { label: "Email", value: "ajay.sahuchitrakoot@gmail.com", small: true },
                  { label: "Status", value: "Open to Work", highlight: true },
                ].map((item) => (
                  <div key={item.label} className="group">
                    <span className="text-white/30 text-xs uppercase tracking-widest">{item.label}</span>
                    <p className={`text-sm font-medium mt-0.5 ${item.highlight ? "text-emerald-400" : "text-white/80"} ${item.small ? "text-xs" : ""}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Education */}
            <SectionReveal direction="right" delay={0.5}>
              <div className="space-y-3">
                <h3 className="text-white/40 text-xs uppercase tracking-widest">Education</h3>
                <ul className="space-y-3">
                  {education.map((edu) => (
                    <li key={edu.degree} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-violet-500/20 transition-colors">
                      <span className="text-2xl shrink-0" aria-hidden="true">{edu.icon}</span>
                      <div>
                        <p className="text-white/80 text-sm font-medium">{edu.degree}</p>
                        <p className="text-white/40 text-xs">
                          {edu.institution} ·{" "}
                          <time dateTime={edu.startDate}>{edu.period.split("–")[0].trim()}</time>
                          {" "}–{" "}
                          <time dateTime={edu.endDate ?? ""}>{edu.period.split("–")[1]?.trim()}</time>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
