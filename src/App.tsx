import React from "react";
import profileImg from "./assets/image.png";
import { motion } from "framer-motion";
import { Sun, Moon, Zap, Mail, ArrowUpRight, Code } from "lucide-react";

// Project Type Definition
interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  isFinished: boolean;
  link: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "NeuroLab",
    description:
      "An interactive, browser-based simulator for visualising classical neural network learning rules — Hebbian, Perceptron, and Delta — with a live network canvas, real-time loss curves, and step-by-step math logs.",
    problem:
      "Neural network theory is dense and abstract; students struggle to connect the math on paper to what actually happens inside a network during training.",
    solution:
      "Built a fully client-side React + TypeScript simulator where users configure architecture, learning rule, and hyperparameters, then watch every forward pass, weight update, and error propagation unfold frame-by-frame.",
    impact:
      "Makes three foundational learning algorithms tangible and explorable without any backend or installation, bridging the gap between theory and intuition.",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Chart.js",
      "mathjs",
      "CSS Modules",
    ],
    isFinished: true,
    link: "https://neuroailab.netlify.app/",
    githubUrl: "https://github.com/MuhaymenRaed/neuro-lab",
  },
  {
    title: "Sinaa Link",
    description:
      "A scalable store-of-stores platform allowing vendors to create and manage their own shops while buyers explore and purchase from multiple dealers in one place.",
    problem:
      "Small and medium dealers lacked an easy way to launch online stores, while buyers needed a unified platform to discover trusted sellers.",
    solution:
      "Built a multi-vendor marketplace where users can register as buyers or dealers, create individual stores with a consistent layout, and manage transactions through role-based dashboards.",
    impact:
      "Enabled multiple vendors to launch stores on a single platform and centralized buyer–seller interactions with advanced search and filtering.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Edge Functions",
      "Motion",
    ],
    isFinished: true,
    link: "https://www.sinaal.ink",
    githubUrl: "https://github.com/MuhaymenRaed/Multi-Vendor-Store.git",
  },
  {
    title: "Orphanage Management System",
    description:
      "A secure, real-time ecosystem designed to streamline orphan care operations and sensitive data management of Sponsorships.",
    problem:
      "Inefficient manual tracking of resident data, leading to fragmented records and delayed administrative responses.",
    solution:
      "Architected a centralized dashboard using TypeScript and Supabase, featuring real-time synchronization and secure role-based access control.",
    impact:
      "Drastic reduction in administrative overhead and improved data integrity for 100% of resident records.",
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React Query",
      "Framer Motion",
    ],
    isFinished: false,
    link: "#works",
    githubUrl: "https://github.com/MuhaymenRaed/Orphan-Management-System.git",
  },
];

const navLinks = [
  { name: "Works", href: "#works", external: false },
  {
    name: "About",
    href: "https://muhaymen-raed-portfolio.vercel.app",
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhaymenraed",
    external: true,
  },
];

export default function App() {
  const [lightMode, setLightMode] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.className = lightMode ? "light" : "dark";
  }, [lightMode]);

  return (
    <div className="min-h-screen bg-bg text-text font-sans transition-colors duration-500">
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-8 bg-bg/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border">
        <div
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-black font-black text-xs transition-transform group-hover:rotate-12">
            MR
          </div>
          <span className="text-xs font-black tracking-[0.3em] uppercase">
            Muhaymen
          </span>
        </div>

        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noreferrer" : ""}
              className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-accent transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => setLightMode(!lightMode)}
            className="p-2 rounded-full border border-border hover:bg-accent hover:text-black transition-all"
          >
            {lightMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="mailto:moheamin852@gmail.com"
            target="_blank"
            className="text-[10px] font-black tracking-[0.2em] uppercase border-b-2 border-accent pb-1"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center px-6 md:px-20 py-12 gap-16">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 border-l-2 border-accent pl-4">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-text2">
              Based in Iraq — Available for Global Roles
            </span>
          </div>
          <h1 className="text-7xl md:text-[110px] font-black leading-[0.8] tracking-tighter">
            Mohayman <br /> <span className="text-accent">Raed</span>
          </h1>
          <p className="text-xl text-text2 max-w-lg leading-relaxed font-medium">
            Building the next generation of digital excellence with{" "}
            <span className="text-text">React, Next.js, and TypeScript.</span>
          </p>
          <a
            href="#works"
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest pt-4"
          >
            View My Works{" "}
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] group">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-all"></div>
            <img
              src={profileImg}
              alt="Muhaymen"
              className="relative w-full aspect-[4/5] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-black p-6 rounded-2xl shadow-2xl flex items-center gap-5">
              <Zap fill="black" size={24} />
              <div>
                <p className="text-sm font-black uppercase">Front-End Lead</p>
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-tighter">
                  Next.js · Supabase · UI/UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="works" className="px-6 md:px-20 py-32 space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">
              Featured Works
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              Selected Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 p-8 md:p-16 rounded-[3rem] border border-border hover:border-accent/50 bg-bg-secondary transition-all"
            >
              <div className="space-y-10">
                <header className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-accent font-mono font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {proj.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-bg text-[10px] font-black uppercase tracking-widest border border-border group-hover:border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-lg text-text font-medium leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <span className="text-accent font-black text-[10px] uppercase tracking-widest mt-1">
                          Problem:
                        </span>
                        <p className="text-sm text-text2 leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-accent font-black text-[10px] uppercase tracking-widest mt-1">
                          Impact:
                        </span>
                        <p className="text-sm text-text2 leading-relaxed">
                          {proj.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bg/50 p-8 rounded-2xl border border-border">
                    <span className="text-accent font-black text-[10px] uppercase tracking-widest mb-4 block">
                      The Solution
                    </span>
                    <p className="text-sm text-text2 leading-relaxed italic">
                      "{proj.solution}"
                    </p>
                  </div>
                </div>
              </div>

              {/* ELEGANT VISIT BUTTON */}
              <div className="flex flex-col justify-between items-end gap-8">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-24 h-24 rounded-full border-2 border-accent flex items-center justify-center transition-all duration-500 hover:bg-accent group/btn overflow-hidden"
                >
                  <motion.div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  <ArrowUpRight
                    size={32}
                    className="relative z-10 text-accent group-hover/btn:text-black group-hover/btn:rotate-45 transition-all duration-500"
                  />
                </a>

                <div className="flex flex-col items-end gap-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border ${proj.isFinished ? "border-green-500/30 text-green-500" : "border-yellow-500/30 text-yellow-500"}`}
                  >
                    {proj.isFinished ? "● Live Project" : "○ In Development"}
                  </span>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-text2 hover:text-white transition-colors"
                  >
                    <Code size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Source Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 pb-32">
        <div className="bg-accent rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row justify-between items-center text-black gap-12 overflow-hidden relative">
          <div className="space-y-6 relative z-10">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Let's build <br /> your vision.
            </h2>
          </div>
          <a
            href="mailto:moheamin852@gmail.com"
            target="_blank"
            className="relative z-10 bg-black text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-4"
          >
            <Mail size={20} /> Start a Conversation
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-12 flex justify-between border-t border-border text-[10px] font-black tracking-[0.4em] uppercase text-text2">
        <span>© 2026 Muhaymen Raed — Iraq</span>
        <span>Crafted with Next.js & Framer Motion</span>
      </footer>
    </div>
  );
}
