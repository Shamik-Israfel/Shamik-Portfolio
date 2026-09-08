"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import {
  Download,
  FolderGit2,
  Cpu,
  Radio,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const { personal } = portfolioData;
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#07090e] bg-grid-pattern"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-medium bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                {personal.headline}
              </p>
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personal.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* View Projects */}
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume */}
              <a
                href={personal.resumePdfUrl}
                download="Shamik_Mondal_Resume.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stat Counters Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Profile & IoT/AI Circuit Visualization */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* The Connected IoT / AI Architecture Visual Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c101a] border border-white/10 p-4 shadow-2xl shadow-black/80 flex flex-col items-center justify-between overflow-hidden group">
              {/* Subtle background SVG circuit matrix */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="circuit-grid"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="30" cy="30" r="1.5" fill="#06B6D4" opacity="0.6" />
                    <path
                      d="M30 0 v60 M0 30 h60"
                      stroke="#1e293b"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-grid)" />
              </svg>

              {/* Dynamic Signal Flow Overlay (Simulating real-time IoT packet routing) */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className={`absolute w-3 h-3 rounded-full bg-cyan-400 blur-[2px] transition-all duration-1000 ${
                    pulseIndex === 0
                      ? "top-10 left-12 opacity-90 scale-125 shadow-cyan-400 shadow-md"
                      : pulseIndex === 1
                      ? "top-20 right-14 opacity-90 scale-125"
                      : pulseIndex === 2
                      ? "bottom-24 left-16 opacity-90 scale-125"
                      : pulseIndex === 3
                      ? "bottom-14 right-16 opacity-90 scale-125"
                      : pulseIndex === 4
                      ? "top-1/2 right-8 opacity-90 scale-125"
                      : "top-1/2 left-8 opacity-90 scale-125"
                  }`}
                />
              </div>

              {/* Profile Card Header with System Node Tags */}
              <div className="w-full flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-cyan-400">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  <span>EDGE_NODE_01</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>ONLINE · 128 Hz</span>
                </div>
              </div>

              {/* Portrait Photo Container */}
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 my-auto rounded-xl overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors shadow-xl shadow-cyan-950/40">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
              </div>

              {/* Real-Time Telemetry / System Subcard */}
              <div className="w-full z-10 bg-slate-950/80 rounded-xl p-3 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pb-1.5 border-b border-white/5">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    Interdisciplinary Synthesis
                  </span>
                  <span className="text-slate-400">Dhaka, BD</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="p-1 rounded bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] text-slate-400 font-mono">Vision</div>
                    <div className="text-xs font-semibold text-violet-400">YOLO/CNN</div>
                  </div>
                  <div className="p-1 rounded bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] text-slate-400 font-mono">Robotics</div>
                    <div className="text-xs font-semibold text-emerald-400">Sensors/ROS</div>
                  </div>
                  <div className="p-1 rounded bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] text-slate-400 font-mono">Web</div>
                    <div className="text-xs font-semibold text-cyan-400">Next.js/API</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
