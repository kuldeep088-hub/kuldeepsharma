"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, MapPin, ExternalLink, CheckCircle2, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Experience() {
  const { experience } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-accent-violet text-sm">02.</span>
          <span className="text-text-muted text-sm uppercase tracking-widest">Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-blue/30 to-transparent max-w-[200px]" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Work{" "}
          <span className="gradient-text">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              className="w-full h-full timeline-line"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-12">
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={1 + idx * 0.3}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-10 h-10 -translate-x-[5px] md:-translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center shadow-glow">
                      <Briefcase size={14} className="text-white" />
                    </div>
                  </div>

                  {/* Date tag (visible on desktop, opposite side) */}
                  <div
                    className={`hidden md:flex w-1/2 items-start ${
                      isEven ? "justify-end pr-12 pt-5" : "justify-start pl-12 pt-5"
                    }`}
                  >
                    <div className="glass rounded-full px-4 py-1.5 text-xs font-mono text-text-secondary border border-white/5">
                      <Calendar size={10} className="inline mr-1.5 -mt-0.5" />
                      {exp.startDate} — {exp.endDate}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div className="glass glass-hover gradient-border rounded-2xl p-6 transition-all duration-300 hover:shadow-glow-sm">
                      {/* Mobile date */}
                      <div className="md:hidden mb-3">
                        <span className="text-xs font-mono text-text-muted">
                          <Calendar size={10} className="inline mr-1.5 -mt-0.5" />
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>

                      {/* Role + company */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        {exp.companyUrl !== "#" && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent-violet transition-colors flex-shrink-0 mt-0.5"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="gradient-text font-semibold text-sm">
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-text-muted text-xs">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 bg-accent-purple/10 text-accent-violet rounded-full text-xs font-mono border border-accent-purple/20">
                          {exp.type}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-2.5 text-sm text-text-secondary">
                            <CheckCircle2
                              size={14}
                              className="text-accent-violet flex-shrink-0 mt-0.5"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-white/5 text-text-secondary rounded-md text-xs font-mono border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
