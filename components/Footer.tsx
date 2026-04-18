"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { name, linkedin, github, email } = portfolioData;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 70, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-2">KS</div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Building modern web experiences with a focus on performance, accessibility, and
              beautiful design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-text-secondary hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Connect</p>
            <div className="flex gap-3">
              {[
                { href: linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: github, icon: Github, label: "GitHub" },
                { href: `mailto:${email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-purple/40 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            Designed &amp; Built by{" "}
            <span className="gradient-text font-semibold">{name}</span>
            <span className="mx-1 text-text-muted">·</span>
            Made with{" "}
            <Heart size={13} className="text-red-400 inline mx-0.5" fill="currentColor" />
            <span className="mx-1 text-text-muted">·</span>
            © {new Date().getFullYear()}
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-purple/40 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
