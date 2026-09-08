"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Loader2,
  CircleCheckBig,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "361f45ec-db58-456f-a5ec-82bc79ebb7a1",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact from " + formData.name,
          message: formData.message,
          from_name: "Shamik Mondal Portfolio",
          botcheck: "",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset to idle after 6 seconds
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        throw new Error(data.message || "Submission failed. Please try again.");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please email directly."
      );
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Have an idea, research collaboration, or project?
          </h2>
          <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Let's build something useful.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-Click Copy */}
            <div className="bg-slate-900/60 rounded-2xl border border-white/10 p-6 backdrop-blur-md hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-400 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
              >
                {personal.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/60 rounded-2xl border border-white/10 p-5 backdrop-blur-md hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LinkedIn</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {personal.linkedinUsername}
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/60 rounded-2xl border border-white/10 p-5 backdrop-blur-md hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon className="w-5 h-5 text-violet-400" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GitHub</div>
                  <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {personal.githubUsername}
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Phone */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/5 p-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Based in {personal.location} (UTC+6)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personal.phone}</span>
              </div>
            </div>
          </div>

          {/* Right: Web3Forms Message Form */}
          <div className="lg:col-span-7 bg-slate-900/60 rounded-2xl border border-white/10 p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Whether you want to discuss research, explore an IoT/AI project, or hire for engineering opportunities — messages are delivered directly to Shamik.
            </p>

            {/* Success State */}
            {status === "success" && (
              <div className="flex flex-col items-center justify-center py-14 gap-4 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CircleCheckBig className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Message Sent!</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Shamik will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {/* Error State */}
            {status === "error" && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-5 animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-300">Delivery failed</p>
                  <p className="text-xs text-slate-400 mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Form */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot for bot protection */}
                <input type="checkbox" name="botcheck" className="hidden" readOnly />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      disabled={status === "sending"}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-sm text-white placeholder-slate-500 outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      disabled={status === "sending"}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-sm text-white placeholder-slate-500 outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Collaboration on IoT / AI Research"
                    disabled={status === "sending"}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-sm text-white placeholder-slate-500 outline-none transition-all disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Shamik, I'd like to discuss..."
                    disabled={status === "sending"}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-slate-500 pt-1">
                  Powered by{" "}
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500/70 hover:text-cyan-400 transition-colors"
                  >
                    Web3Forms
                  </a>{" "}
                  · No spam, messages go straight to Shamik
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
