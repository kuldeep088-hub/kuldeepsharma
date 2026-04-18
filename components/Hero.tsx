"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { name, roles, linkedin, github, email, stats } = portfolioData;

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  const subtitle =
    "Helping businesses grow through creative design, content systems, and performance-driven marketing.";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[70px]"
    >
      {/* Background orbs */}
      <div
        className="orb w-[600px] h-[600px] opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent)",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="orb w-[500px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(circle, #2563eb, transparent)",
          bottom: "5%",
          right: "-5%",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb w-[300px] h-[300px] opacity-10"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent)",
          top: "30%",
          right: "20%",
          animationDelay: "6s",
        }}
      />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-text-secondary mb-6 border border-accent-purple/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text block">{name}</span>
            </motion.h1>

            {/* Animated roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-2xl md:text-3xl font-semibold text-text-secondary mb-6 h-[40px]"
            >
              <TypeAnimation
                sequence={roles.flatMap((r) => [r, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text-purple"
              />
            </motion.div>

            {/* About snippet */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-text-secondary text-lg leading-relaxed max-w-xl mb-8"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
                }}
                className="btn-primary"
              >
                <span>View Projects</span>
                <ExternalLink size={16} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
                }}
                className="btn-outline"
              >
                <span>Get In Touch</span>
                <Mail size={16} />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              {[
                { href: github, icon: Github, label: "GitHub" },
                { href: linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-purple/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="h-px w-12 bg-gradient-to-r from-accent-purple/50 to-transparent" />
              <span className="text-text-muted text-sm font-mono">kuldeep.dev</span>
            </motion.div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-30 blur-2xl scale-110 animate-pulse-slow" />

              {/* Gradient border */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-[2px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-2">
                  <Image
                    src="/profile.jpg"
                    alt={name}
                    width={288}
                    height={288}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-semibold border border-accent-purple/30"
              >
                🎨 Creative & Marketing
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-semibold border border-accent-blue/30"
              >
                🚀 Open to Work
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 gap-3 w-full max-w-sm"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="glass glass-hover rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-text-muted text-xs font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
