import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Search, Zap, ChevronRight, Mail, FileText, X, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import UliKayaSection from './UliKayaSection';
import FederalSection from './FederalSection';
import ContactSection from './ContactSection';

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 bg-slate-950/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <img src="/ovt-logo-icon.PNG" alt="OVT Logo" className="w-10 h-16 object-cover rounded-full" />
      <span className="text-xl font-bold tracking-tight text-white">Open Vision Technology, LLC.</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      <a href="#hero" className="hover:text-blue-400 transition">^</a>
      <a href="#solutions" className="hover:text-blue-400 transition">Solutions</a>
      <a href="#uli-kaya" className="hover:text-blue-400 transition">Uli Kaya</a>
      <a href="#federal" className="hover:text-blue-400 transition">Federal</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </div>
    <a
      href="https://www.ulisdk.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
    >
      Explore Uli SDK
    </a>
  </nav>
);

const Hero = () => {
  const [showWhitepaper, setShowWhitepaper] = React.useState(false);
  const [whitepaperContent, setWhitepaperContent] = React.useState('');

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (showWhitepaper) {
      document.body.style.overflow = 'hidden';
      if (!whitepaperContent) {
        fetch('/technical_whitepaper.md')
          .then(res => res.text())
          .then(text => setWhitepaperContent(text))
          .catch(err => console.error("Failed to load whitepaper", err));
      }
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showWhitepaper, whitepaperContent]);

  return (
    <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-slate-950">
      {/* Animated Background Pulse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6"
        >
          <Zap size={14} /> AGENT SKILLS
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          Make Robotics Assets <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Agentic AI Ready</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Bridge the gap between physical hardware and Language Models.
          Seamlessly export the capabilities and telemetry of the robotic assets to the Agentic AI ecosystem.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.ulisdk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition"
          >
            Explore Uli SDK <ChevronRight size={18} />
          </a>
          <button
            onClick={() => setShowWhitepaper(true)}
            className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold border border-white/10 hover:bg-slate-700 transition cursor-pointer">
            <FileText size={18} /> View Technical Whitepaper
          </button>
        </div>
      </div>

      {showWhitepaper && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 md:p-8" onClick={() => setShowWhitepaper(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-slate-950 shrink-0">
              <div className="flex items-center gap-2 text-white">
                <FileText size={20} className="text-blue-400" />
                <h3 className="text-lg font-bold">Technical Whitepaper</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/technical_whitepaper.pdf"
                  download
                  className="flex items-center gap-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
                >
                  <Download size={16} /> Download PDF
                </a>
                <button
                  onClick={() => setShowWhitepaper(false)}
                  className="text-slate-400 hover:text-white transition p-2 hover:bg-white/10 rounded-full ml-2"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-800 relative overflow-y-auto p-6 md:p-12">
              <div className="prose prose-invert prose-blue max-w-4xl mx-auto">
                <ReactMarkdown>{whitepaperContent}</ReactMarkdown>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Features = () => (
  <section id="solutions" className="py-24 bg-slate-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
      {[
        { title: "Agentic AI Skills", desc: "Empower AI Agents with 'Skills-Based' tool calling. Assets export markdown-formatted context via the Uli SDK services, enabling autonomous reasoning over hardware capabilities, telemetry, and access privileges.", icon: <Bot className="text-blue-400" /> },
        { title: "A2UI Framework", desc: "Native Dart-FFI integration for the Flutter ecosystem. AI Agents dynamically drive real-time interfaces, providing human operators with low-latency situational awareness and command-and-control.", icon: <Cpu className="text-cyan-400" /> },
        { title: "Dynamic Infrastructure", desc: "Eliminate static configurations. Our Discovery Service allows Agents to query asset URIs and identify executable skills, physical poses, and data access tiers on the fly.", icon: <Search className="text-purple-400" /> }
      ].map((f, i) => (
        <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition">
          <div className="mb-4">{f.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
          <p className="text-slate-400 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const App = () => (
  <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
    <Navbar />
    <Hero />
    <Features />
    <UliKayaSection />
    <FederalSection />
    <ContactSection />
  </div>
);

export default App;
