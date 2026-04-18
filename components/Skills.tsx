"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <span className="text-xs font-mono text-accent-violet">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full skill-bar rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="skills"
      className="section-padding relative"
      ref={ref}
      style={{
        background:
          "radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.06) 0%, transparent 60%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-indigo/30 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-accent-violet text-sm">03.</span>
          <span className="text-text-muted text-sm uppercase tracking-widest">Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-indigo/30 to-transparent max-w-[200px]" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Technical{" "}
          <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-text-secondary max-w-xl mb-16"
        >
          Technologies and tools I work with to build modern, scalable web applications.
        </motion.p>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1.5 + gi * 0.2}
              className="glass glass-hover gradient-border rounded-2xl p-6"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-bold gradient-text">{group.category}</h3>
              </div>

              {/* Skill bars */}
              <div>
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.2 + si * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack pills (flat list at bottom) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="mt-16"
        >
          <p className="text-center text-text-muted text-sm mb-6 font-mono">
            all skills &amp; tools I work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills
              .flatMap((g) => g.items)
              .map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="px-3 py-1.5 glass rounded-full text-sm text-text-secondary border border-white/5 hover:border-accent-purple/30 hover:text-white transition-all duration-200 cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
