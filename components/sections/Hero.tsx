"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo } from "@/lib/data";

const FloatingOrb = ({ className }: { className: string }) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
  />
);

// Stable particle data — generated once at module load, never recreated
const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: (i * 2.5) % 100,
  y: (i * 2.5 + 17) % 100,
  size: (i % 3) + 1,
  duration: 3 + (i % 5),
  delay: (i * 0.37) % 5,
}));

const ParticleField = () => {
  const particles = PARTICLES;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-violet-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0, 1, 0], y: [0, -40, -80] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const [showScrollHint, setShowScrollHint] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const timer = setTimeout(() => setShowScrollHint(false), 5000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
      aria-label="Introduction"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,40,200,0.3),rgba(255,255,255,0))]" />

      {/* Floating orbs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-violet-600 -top-40 -left-40" />
      <FloatingOrb className="w-[400px] h-[400px] bg-cyan-500 top-1/2 -right-40" />
      <FloatingOrb className="w-[300px] h-[300px] bg-purple-600 bottom-20 left-1/4" />

      {/* Particles — client-only to avoid hydration mismatch from Math.random() */}
      {mounted && <ParticleField />}

      {/* Main Content */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mt-20 xl:mt-10 mb-8 backdrop-blur-sm"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-violet-400"
          />
          Available for new opportunities
        </motion.div>

        {/* Name — h1 is the single page-level heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
            <span className="block text-white" itemProp="name">Ajay</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Sahu
            </span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/60 font-light mb-8 min-h-[2rem]"
        >
          <span className="text-white/40">I&apos;m a </span>
          <TypeAnimation
            sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-violet-300 font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting pixel-perfect, performance-optimized web experiences with React & Next.js.
          2+ years of turning complex ideas into elegant digital products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            onClick={scrollToAbout}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-base overflow-hidden hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-shadow duration-300"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="relative flex items-center gap-2">
              Explore My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </MagneticButton>

          <MagneticButton
            href="mailto:ajay.sahuchitrakoot@gmail.com"
            className="group px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 hover:border-violet-400/50 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </MagneticButton>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium hover:text-white hover:border-violet-400/50 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2 }}
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 rounded-full bg-current" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Social links - left side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute left-6 bottom-1/3 hidden xl:flex flex-col items-center gap-4"
      >
        {[
          { label: "GitHub", href: "https://github.com/Ajaysahu001" },
          { label: "LinkedIn", href: "https://linkedin.com/in/ajaysahu001" },
        ].map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4, color: "#a78bfa" }}
            className="text-white/30 text-xs font-medium tracking-widest uppercase writing-mode-vertical transition-colors"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {item.label}
          </motion.a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
