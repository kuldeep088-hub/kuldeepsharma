"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { email, linkedin, github, location, name } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate sending (replace with real EmailJS or API call)
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      {/* Background orbs */}
      <div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)", filter: "blur(80px)" }}
      />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-accent-violet text-sm">05.</span>
          <span className="text-text-muted text-sm uppercase tracking-widest">Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent max-w-[200px]" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get In{" "}
          <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-text-secondary max-w-xl mb-16"
        >
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat
          about tech. Feel free to reach out!
        </motion.p>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
          {/* Left: Info */}
          <div className="space-y-6">
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1.5 + i * 0.2}
              >
                {href ? (
                  <a
                    href={href}
                    className="flex items-center gap-4 glass glass-hover rounded-2xl p-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:from-accent-purple/30 group-hover:to-accent-blue/30 transition-all duration-300">
                      <Icon size={18} className="text-accent-violet" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-text-primary group-hover:gradient-text transition-all duration-300">
                        {value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 glass rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                      <Icon size={18} className="text-accent-violet" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-text-primary">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2.5}
              className="glass rounded-2xl p-5"
            >
              <p className="text-xs text-text-muted mb-4 uppercase tracking-wider">
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  { href: linkedin, icon: Linkedin, label: "LinkedIn", color: "#0077b5" },
                  { href: github, icon: Github, label: "GitHub", color: "#6e5494" },
                  { href: `mailto:${email}`, icon: Mail, label: "Email", color: "#7c3aed" },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 glass glass-hover rounded-xl p-3 flex flex-col items-center gap-1.5 text-text-muted hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    <span className="text-xs">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
          >
            <div className="glass gradient-border rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-accent-violet" />
                <h3 className="font-semibold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-text-muted mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={`Hey ${name.split(" ")[0]}...`}
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-text-muted mb-1.5 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-text-muted mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/60 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Status message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm"
                  >
                    <CheckCircle2 size={16} />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
