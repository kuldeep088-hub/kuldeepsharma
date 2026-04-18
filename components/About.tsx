"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar, GraduationCap, Briefcase, Heart } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const highlights = [
  { icon: MapPin, label: "Location", value: portfolioData.location },
  {
    icon: Briefcase,
    label: "Status",
    value: "Open to Opportunities",
    accent: true,
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: portfolioData.education[0]?.degree ?? "B.Tech CS",
  },
  {
    icon: Calendar,
    label: "Experience",
    value: portfolioData.stats[3]?.value + " years",
  },
];

export default function About() {
  const { about, name, education } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const paragraphs = about
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      <div className="container-custom">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-accent-violet text-sm">01.</span>
          <span className="text-text-muted text-sm uppercase tracking-widest">About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-purple/30 to-transparent max-w-[200px]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">
          {/* Left — visual card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="relative"
          >
            {/* Main glass card */}
            <div className="glass gradient-border rounded-3xl p-8 relative overflow-hidden">
              {/* Background blur circles */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-purple/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent-blue/10 blur-3xl" />

              <div className="relative z-10">
                {/* Profile photo */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 shadow-glow ring-2 ring-accent-purple/40">
                  <Image
                    src="/profile.jpg"
                    alt={name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                <p className="text-accent-violet text-sm font-mono mb-6">
                  Digital Marketing & Creative Specialist
                </p>

                {/* Info rows */}
                <div className="space-y-3">
                  {highlights.map(({ icon: Icon, label, value, accent }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          accent
                            ? "bg-green-500/20"
                            : "bg-white/5"
                        }`}
                      >
                        <Icon
                          size={14}
                          className={accent ? "text-green-400" : "text-text-secondary"}
                        />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">{label}</div>
                        <div
                          className={`text-sm font-medium ${
                            accent ? "text-green-400" : "text-text-primary"
                          }`}
                        >
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo gallery */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1.5}
              className="grid grid-cols-2 gap-3 mt-4"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] ring-1 ring-white/10 hover:ring-accent-purple/40 transition-all duration-300">
                <Image
                  src="/about-1.jpeg"
                  alt="Kuldeep Sharma"
                  width={200}
                  height={267}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] ring-1 ring-white/10 hover:ring-accent-purple/40 transition-all duration-300 mt-6">
                <Image
                  src="/about-2.jpeg"
                  alt="Kuldeep Sharma"
                  width={200}
                  height={267}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Education card */}
            {education[0] && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2}
                className="glass rounded-2xl p-5 mt-4 border border-white/5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={16} className="text-accent-violet" />
                  <span className="text-xs text-text-muted uppercase tracking-wider">Education</span>
                </div>
                <p className="font-semibold text-white text-sm">{education[0].degree}</p>
                <p className="text-accent-violet text-xs font-mono mt-0.5">
                  {education[0].field}
                </p>
                <p className="text-text-secondary text-xs mt-1">{education[0].school}</p>
                <p className="text-text-muted text-xs mt-0.5">
                  {education[0].startDate} – {education[0].endDate}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right — text */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.5}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              About{" "}
              <span className="gradient-text">Me</span>
            </motion.h2>

            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={1.5 + i * 0.2}
                  className="text-text-secondary leading-relaxed text-[15px]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2.5}
              className="mt-8"
            >
              <div className="flex items-center gap-2 mb-3">
                <Heart size={14} className="text-accent-violet" />
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  Interests
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Meta Advertising",
                  "Creative Design",
                  "Brand Strategy",
                  "Content Marketing",
                  "Video Production",
                  "Business Growth",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 glass rounded-full text-xs text-text-secondary border border-white/5 hover:border-accent-purple/30 hover:text-white transition-all duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Download resume */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={3}
              className="mt-8"
            >
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex"
              >
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
