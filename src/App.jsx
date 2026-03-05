import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Search, Zap, ChevronRight, Mail, FileText, X, Download, Network } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import UliKayaSection from './UliKayaSection';
import FederalSection from './FederalSection';
import ContactSection from './ContactSection';

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <img src="/ovt-logo-icon.PNG" alt="OVT Logo" className="w-10 h-16 object-cover rounded-full" />
      <span className="text-xl font-bold tracking-tight text-primary">Open Vision Technology, LLC.</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      <a href="#hero" className="hover:text-secondary transition">^</a>
      <a href="#solutions" className="hover:text-secondary transition">Solutions</a>
      <a href="#uli-kaya" className="hover:text-secondary transition">Uli Kaya</a>
    </div>
    <a
      href="https://www.ulisdk.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-accent hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_4px_15px_rgba(242,148,98,0.4)]"
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
    <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-primary">
      {/* Animated Background Pulse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold mb-6"
        >
          <Zap size={14} /> AGENT SKILLS
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          Make Robotic Assets <br /><span className="text-secondary">Agentic AI Ready</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Bridge the gap between physical hardware and the Language Models.
          Seamlessly export the capabilities and telemetry of the assets to the Agentic AI ecosystem.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.ulisdk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition shadow-[0_4px_15px_rgba(242,148,98,0.4)]"
          >
            Explore Uli SDK <ChevronRight size={18} />
          </a>
          <button
            onClick={() => setShowWhitepaper(true)}
            className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition cursor-pointer">
            <FileText size={18} /> View Technical Whitepaper
          </button>
        </div>
      </div>

      {showWhitepaper && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 md:p-8" onClick={() => setShowWhitepaper(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 shrink-0">
              <div className="flex items-center gap-2 text-primary">
                <FileText size={20} className="text-secondary" />
                <h3 className="text-lg font-bold">Technical Whitepaper</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/technical_whitepaper.pdf"
                  download
                  className="flex items-center gap-2 text-sm font-semibold bg-secondary hover:opacity-90 text-white px-4 py-2 rounded-lg transition"
                >
                  <Download size={16} /> Download PDF
                </a>
                <button
                  onClick={() => setShowWhitepaper(false)}
                  className="text-gray-500 hover:text-primary transition p-2 hover:bg-gray-200 rounded-full ml-2"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-white relative overflow-y-auto p-6 md:p-12">
              <div className="prose prose-blue max-w-4xl mx-auto text-primary">
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
  <section id="solutions" className="py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Agentic AI Skills", desc: "Empower AI Agents with 'Skills-Based' tool calling. Assets export markdown-formatted context via the Uli SDK services, enabling autonomous reasoning over hardware capabilities, telemetry, and access privileges.", icon: <Bot className="text-secondary" /> },
        { title: "A2UI Framework", desc: "Native Dart-FFI integration for the Flutter ecosystem. AI Agents dynamically drive real-time interfaces, providing human operators with low-latency situational awareness and command-and-control.", icon: <Cpu className="text-secondary" /> },
        { title: "Dynamic Infrastructure", desc: "Assets and their functional modules can be added or removed as the mission changes, eliminating the needs for static reconfigurations. Assets and the functional modules will be discovered via Uli SDK services.", icon: <Search className="text-secondary" /> },
        { title: "Interoperability", desc: "The infrastructure of the Uli SDK enables the connection of disparate assets. Via the Unified Link Interface Uli SDK implements, the assets and their capabilities and telemetry can be discovered.", icon: <Network className="text-secondary" /> }
      ].map((f, i) => (
        <div key={i} className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-gray-100 hover:border-secondary/30 transition duration-300">
          <div className="mb-4 text-3xl">{f.icon}</div>
          <h3 className="text-xl font-bold text-primary mb-2">{f.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-primary border-t border-white/5 text-center text-gray-400 text-sm">
    <p>© {new Date().getFullYear()} Open Vision Technology, LLC. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="min-h-screen bg-bg-light font-sans selection:bg-secondary/30 text-primary">
    <Navbar />
    <Hero />
    <Features />
    <UliKayaSection />
    <FederalSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
