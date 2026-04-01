"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionReveal from "@/components/ui/SectionReveal";
import { experience } from "@/lib/data";

const TimelineItem = ({
  item,
  index,
  isLast,
}: {
  item: typeof experience[0];
  index: number;
  isLast: boolean;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex gap-4 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
        className="w-full md:w-[calc(50%-2rem)] group"
      >
        <div
          className={`relative p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/5 ${
            isEven ? "md:mr-8" : "md:ml-8"
          }`}
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge */}
          {item.current && (
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Current Role
            </motion.span>
          )}

          <article
            itemScope
            itemType="https://schema.org/OrganizationRole"
            className="relative"
          >
            <h3
              className="text-white font-bold text-xl mb-1 group-hover:text-violet-300 transition-colors"
              itemProp="roleName"
            >
              {item.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                itemProp="memberOf"
              >
                {item.company}
              </span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span className="text-white/40 text-sm">{item.location}</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span className="text-white/40 text-sm font-mono text-xs">
                <time dateTime={item.startDate} itemProp="startDate">
                  {item.period.split("–")[0].trim()}
                </time>
                {" – "}
                {item.current ? (
                  <span>Present</span>
                ) : (
                  <time dateTime={item.endDate ?? ""} itemProp="endDate">
                    {item.period.split("–")[1]?.trim()}
                  </time>
                )}
              </span>
            </div>

            <ul className="space-y-2.5">
              {item.description.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2.5 text-white/50 text-sm leading-relaxed group-hover:text-white/65 transition-colors"
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mt-1.5 shrink-0`} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </article>
        </div>
      </motion.div>

      {/* Center timeline node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center" style={{ top: "1.5rem" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10`}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-px h-full bg-gradient-to-b from-violet-500/40 to-transparent origin-top mt-2"
            style={{ minHeight: "100px" }}
          />
        )}
      </div>

      {/* Mobile left dot */}
      <div className="md:hidden flex flex-col items-center mt-1.5 mr-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.color} shrink-0`}
        />
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-violet-500/40 to-transparent mt-2" />}
      </div>
    </div>
  );
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineScaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="experience" ref={containerRef} className="relative py-32 overflow-hidden bg-[#050505]" aria-labelledby="experience-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(99,102,241,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionReveal direction="up" className="text-center mb-20">
          <span className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            My Journey
          </span>
          <h2 id="experience-heading" className="text-5xl md:text-6xl font-black text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Professional experience building high-quality digital products
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="w-full h-full bg-gradient-to-b from-violet-500/60 via-purple-500/40 to-transparent origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, i) => (
              <TimelineItem
                key={item.company}
                item={item}
                index={i}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Summary card */}
        <SectionReveal direction="up" delay={0.3} className="mt-20">
          <div className="relative p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-purple-950/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Ready for new challenges</h3>
                <p className="text-white/50 text-sm max-w-md">
                  3+ years of crafting exceptional web experiences. Currently open to exciting frontend roles.
                </p>
              </div>
              <motion.a
                href="mailto:ajay.sahuchitrakoot@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
