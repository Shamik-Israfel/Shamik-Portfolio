"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail, Heart, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const { personal } = portfolioData;
  const [dhakaTime, setDhakaTime] = useState<string>("");

  useEffect(() => {
    const updateDhakaTime = () => {
      const now = new Date();
      // Format time in Dhaka (Asia/Dhaka - UTC+6)
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDhakaTime(formatted);
    };

    updateDhakaTime();
    const interval = setInterval(updateDhakaTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070b] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 font-mono font-bold text-xs text-cyan-400">
                SM
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {personal.headline}
            </p>
            <p className="text-xs text-slate-500">
              Interdisciplinary engineering, autonomous robotics, AI research, and scalable web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-2">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              <a href="#research" className="hover:text-cyan-400 transition-colors">Research & Papers</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Stack</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Local Status & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-2">
              Status & Time
            </h4>
            {dhakaTime && (
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-slate-900/80 px-3 py-2 rounded-xl border border-white/5">
                <Clock className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Dhaka (UTC+6): {dhakaTime}</span>
              </div>
            )}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shamik Mondal. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-400 hover:text-white transition-colors text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
