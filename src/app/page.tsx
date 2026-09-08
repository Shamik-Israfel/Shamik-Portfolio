import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Sections Flow */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Polished Footer */}
      <Footer />
    </div>
  );
}
