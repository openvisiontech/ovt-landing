import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Download, X, Network, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Hero = () => {
  const [showWhitepaper, setShowWhitepaper] = useState(false);
  const [whitepaperContent, setWhitepaperContent] = useState('');

  const [showCapabilityStatement, setShowCapabilityStatement] = useState(false);
  const [capabilityContent, setCapabilityContent] = useState('');

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showWhitepaper || showCapabilityStatement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showWhitepaper, showCapabilityStatement]);

  const handleOpenWhitepaper = () => {
    setShowWhitepaper(true);
    if (!whitepaperContent) {
      fetch('/technical_whitepaper.md')
        .then((res) => res.text())
        .then((text) => setWhitepaperContent(text))
        .catch((err) => console.error('Failed to load whitepaper', err));
    }
  };

  const handleOpenCapability = () => {
    setShowCapabilityStatement(true);
    if (!capabilityContent) {
      fetch('/capability_statement.md')
        .then((res) => res.text())
        .then((text) => setCapabilityContent(text))
        .catch((err) => console.error('Failed to load capability statement', err));
    }
  };

  return (
    <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-primary text-white">
      {/* Animated Background Pulse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-semibold tracking-wide uppercase mb-6"
        >
          <ShieldCheck size={16} className="text-cyan-400" /> Adaptability & Interoperability
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-5xl mx-auto"
        >
          The Adaptive Infrastructure for <br />
          <span className="text-secondary">Next-Gen C2, </span> Situation Sharing, and <span className="text-secondary">Multi-Domain Operations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Open Vision Technology's Uli SDK deliver dynamic edge adaptability and seamless multi-domain interoperability.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleOpenWhitepaper}
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition shadow-[0_4px_15px_rgba(242,148,98,0.4)] cursor-pointer"
          >
            <FileText size={18} /> Read Technical Whitepaper
          </button>

          <button
            onClick={handleOpenCapability}
            className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition flex items-center gap-2 cursor-pointer"
          >
            <FileText size={18} /> Read Capability Statement
          </button>
        </div>
      </div>

      {/* Whitepaper Modal */}
      {showWhitepaper && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setShowWhitepaper(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white text-gray-900 rounded-2xl overflow-hidden border border-gray-200 flex flex-col shadow-2xl"
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
                  className="text-gray-500 hover:text-primary transition p-2 hover:bg-gray-200 rounded-full ml-2 cursor-pointer"
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

      {/* Capability Statement Modal */}
      {showCapabilityStatement && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setShowCapabilityStatement(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white text-gray-900 rounded-2xl overflow-hidden border border-gray-200 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 shrink-0">
              <div className="flex items-center gap-2 text-primary">
                <FileText size={20} className="text-secondary" />
                <h3 className="text-lg font-bold">Capability Statement</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/capability_statement.pdf"
                  download
                  className="flex items-center gap-2 text-sm font-semibold bg-secondary hover:opacity-90 text-white px-4 py-2 rounded-lg transition"
                >
                  <Download size={16} /> Download PDF
                </a>
                <button
                  onClick={() => setShowCapabilityStatement(false)}
                  className="text-gray-500 hover:text-primary transition p-2 hover:bg-gray-200 rounded-full cursor-pointer ml-2"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-white relative overflow-y-auto p-6 md:p-12">
              <div className="prose prose-blue max-w-4xl mx-auto text-primary">
                <ReactMarkdown>{capabilityContent}</ReactMarkdown>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
