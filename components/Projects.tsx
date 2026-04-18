"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const categories = ["All", ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

export default function Projects() {
  const { projects } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      {/* Background orb */}
      <div
        className="absolute left-0 top-1/2 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)", filter: "blur(80px)" }}
      />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-accent-violet text-sm">04.</span>
          <span className="text-text-muted text-sm uppercase tracking-widest">Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-purple/30 to-transparent max-w-[200px]" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Featured{" "}
          <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-text-secondary max-w-xl mb-10"
        >
          A selection of projects I&apos;ve built, ranging from full-stack applications to
          UI/UX experiments.
        </motion.p>

        {/* Category filter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1.5}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-accent-purple text-white border-accent-purple shadow-glow-sm"
                  : "glass text-text-secondary border-white/5 hover:border-accent-purple/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass gradient-border rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              >
                {/* Card top accent line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 bg-accent-purple/15 text-accent-violet rounded-full border border-accent-purple/20">
                          <Star size={10} fill="currentColor" />
                          Featured
                        </span>
                      )}
                      <span className="text-xs px-2 py-0.5 glass rounded-full text-text-muted border border-white/5">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                          className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-muted hover:text-white hover:border-accent-purple/40 transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={14} />
                        </motion.a>
                      )}
                      {project.liveUrl !== "#" && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-muted hover:text-white hover:border-accent-blue/40 transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={14} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-white/5 text-text-secondary rounded-md text-xs font-mono border border-white/5 group-hover:border-accent-purple/20 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all on GitHub */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="text-center mt-12"
        >
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            <span>View All on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
