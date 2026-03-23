"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: "ajay.sahuchitrakoot@gmail.com",
    href: "mailto:ajay.sahuchitrakoot@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
  },
  {
    label: "Phone",
    value: "+91-8840418726",
    href: "tel:+918840418726",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "LinkedIn",
    value: "@ajaysahu001",
    href: "https://linkedin.com/in/ajaysahu001",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "from-blue-600 to-blue-700",
  },
  {
    label: "GitHub",
    value: "@Ajaysahu001",
    href: "https://github.com/Ajaysahu001",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "from-gray-600 to-gray-700",
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: string) => `
    w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white placeholder-white/25
    outline-none transition-all duration-300 text-sm resize-none
    ${focused === field
      ? "border-violet-500/70 bg-violet-500/5 shadow-[0_0_20px_rgba(139,92,246,0.1)]"
      : "border-white/10 hover:border-white/20"
    }
  `;

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-[#060608]" aria-labelledby="contact-heading">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_80%,rgba(120,40,200,0.1),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionReveal direction="up" className="text-center mb-20">
          <span className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Let&apos;s Talk
          </span>
          <h2 id="contact-heading" className="text-5xl md:text-6xl font-black text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Left — Info */}
          <div className="space-y-6">
            <SectionReveal direction="left">
              <div className="space-y-4">
                <h3 className="text-white font-bold text-2xl">Let&apos;s build something amazing together</h3>
                <p className="text-white/50 leading-relaxed">
                  I&apos;m currently open to frontend developer opportunities. Whether you have a project,
                  a question, or just want to connect — feel free to reach out!
                </p>
              </div>
            </SectionReveal>

            {/* Contact cards — wrapped in <address> for semantic meaning */}
            <address className="space-y-3 not-italic">
              {contactLinks.map((link, i) => (
                <SectionReveal key={link.label} direction="left" delay={0.1 + i * 0.08}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-white/30 text-xs uppercase tracking-widest">{link.label}</div>
                      <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors truncate">
                        {link.value}
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-white/20 group-hover:text-violet-400 ml-auto shrink-0 group-hover:translate-x-1 transition-all"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </SectionReveal>
              ))}
            </address>

            {/* Location */}
            <SectionReveal direction="left" delay={0.4}>
              <div className="p-4 rounded-xl bg-white/3 border border-white/8 flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-widest">Location</div>
                  <div className="text-white/70 text-sm font-medium">{personalInfo.location}</div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right — Form */}
          <SectionReveal direction="right">
            <GlassCard className="p-8" tilt={false}>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl mb-4"
                    >
                      ✓
                    </motion.div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-white/50 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Ajay Sahu"
                          className={inputClass("name")}
                        />
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="hello@example.com"
                          className={inputClass("email")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        placeholder="Project collaboration..."
                        className={inputClass("subject")}
                      />
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell me about your project..."
                        className={inputClass("message")}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={!sending ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!sending ? { scale: 0.98 } : {}}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-base hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </motion.button>

                    {error && (
                      <p className="text-red-400 text-sm text-center">{error}</p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
