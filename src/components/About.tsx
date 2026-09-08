"use client";

import { portfolioData } from "@/data/portfolio";
import {
  Cpu,
  Bot,
  Globe,
  HeartHandshake,
  GraduationCap,
  Award,
  Sparkles,
  BookOpen,
  Mail,
} from "lucide-react";

export default function About() {
  const { personal, academicReferences } = portfolioData;

  const pillars = [
    {
      icon: Cpu,
      title: "IoT & Embedded Robotics",
      description:
        "Architecting resilient hardware-software synergies, sensor integration, autonomous navigation logic, and low-cost embedded systems.",
      color: "cyan",
      border: "hover:border-cyan-500/40",
      iconColor: "text-cyan-400",
    },
    {
      icon: Bot,
      title: "AI & Image Processing",
      description:
        "Training computer vision models, YOLO object and victim detection pipelines, and hybrid CNN-LSTM neural architectures.",
      color: "violet",
      border: "hover:border-violet-500/40",
      iconColor: "text-violet-400",
    },
    {
      icon: Globe,
      title: "Full-Stack Web Engineering",
      description:
        "Building responsive, high-performance web applications, role-based dashboards, and REST API microservices with Next.js, Laravel, and modern databases.",
      color: "emerald",
      border: "hover:border-emerald-500/40",
      iconColor: "text-emerald-400",
    },
    {
      icon: HeartHandshake,
      title: "Technology for Social Good",
      description:
        "Designing accessible innovations like $70 Braille tutoring robots, life-saving autonomous watercraft, and smallholder direct-trade agricultural systems.",
      color: "amber",
      border: "hover:border-amber-500/40",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Systems That Bridge Digital & Physical Realities
          </h2>
          <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Computer Science & Engineering graduate specializing in intelligent cyber-physical systems,
            autonomous hardware, computer vision algorithms, and real-world engineering solutions.
          </p>
        </div>

        {/* Top Split: Bio Narrative & Academic Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Narrative */}
          <div className="lg:col-span-7 bg-slate-900/60 rounded-2xl border border-white/10 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a Computer Science & Engineering graduate with a profound passion for
                interdisciplinary problem-solving. My work thrives at the convergence of
                <strong className="text-cyan-400 font-medium"> software development</strong>,
                <strong className="text-emerald-400 font-medium"> IoT & robotics</strong>, and
                <strong className="text-violet-400 font-medium"> AI-driven automation</strong>.
              </p>
              <p>
                Throughout my academic journey, I have prioritized research that directly impacts
                society—authoring and co-authoring peer-reviewed conference papers in international
                venues including <span className="text-white font-medium">IEEE IE2C</span>,
                <span className="text-white font-medium"> CCE</span>, and
                <span className="text-white font-medium"> ICACT</span>. From engineering autonomous rescue
                watercraft for disaster zones to developing dynamic Braille tutoring robots for visually
                impaired children, I build systems engineered for human impact.
              </p>
              <p>
                Beyond individual engineering, I bring extensive collaborative leadership experience
                through my tenure as Former Joint Secretary & Head of Logistics at the
                <strong className="text-slate-100 font-medium"> IEEE Computer Society IUB Student Branch</strong>,
                competitive robotics with <span className="text-slate-100 font-medium">Bengal Legions</span>,
                and community engagement with <span className="text-slate-100 font-medium">Kashful Foundation</span>.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Autonomous Systems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span>Computer Vision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Full-Stack Web</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Human-Centered AI</span>
              </div>
            </div>
          </div>

          {/* Education & Academic Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Primary Degree */}
            <div className="bg-gradient-to-br from-slate-900/90 to-[#0d1322] rounded-2xl border border-white/10 p-6 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-24 h-24 text-cyan-400" />
              </div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>FORMAL EDUCATION</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {personal.education.degree}
              </h3>
              <p className="text-cyan-300 text-sm font-medium mb-3">
                {personal.education.institution}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                  CGPA: {personal.education.cgpa} / 4.00
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {personal.education.period}
                </div>
              </div>

              {/* Secondary Education Badges */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                {personal.education.pastEducation.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs text-slate-300"
                  >
                    <span className="font-medium text-slate-300">{item.exam}</span>
                    <span className="text-slate-400 font-mono">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Professional References Card */}
            <div className="bg-slate-900/60 rounded-2xl border border-white/10 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-3">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>ACADEMIC & INDUSTRY REFERENCES</span>
              </div>
              <div className="space-y-3">
                {academicReferences.map((ref, idx) => (
                  <div key={idx} className="text-xs border-l-2 border-slate-700 pl-3 py-0.5">
                    <div className="font-semibold text-slate-200">{ref.name}</div>
                    <div className="text-slate-400">
                      {ref.title} · {ref.institution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-900/40 rounded-xl border border-white/10 p-6 backdrop-blur-sm transition-all duration-300 ${pillar.border} hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`w-10 h-10 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center mb-4 ${pillar.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
