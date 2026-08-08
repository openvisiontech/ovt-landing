import React, { useState } from 'react';
import { FileText, Download, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showCapabilityStatement, setShowCapabilityStatement] = useState(false);
  const [capabilityContent, setCapabilityContent] = useState('');

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
    <footer className="py-12 bg-primary border-t border-white/10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">Open Vision Technology, LLC.</p>
          <p className="text-xs text-gray-400 mt-1">
            CAGE: <span className="font-mono text-secondary font-bold">18NH2</span> | UEI: <span className="font-mono text-white">U6GJVDKFSYG1</span> | EDWOSB & WOSB Certified
          </p>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
          <p>© {new Date().getFullYear()} Open Vision Technology, LLC. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleOpenCapability}
            className="flex items-center gap-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition border border-white/20 cursor-pointer"
          >
            <FileText size={14} /> Capability Statement
          </button>
          <a
            href="/capability_statement.pdf"
            download
            className="flex items-center gap-2 text-xs font-semibold bg-secondary hover:opacity-90 text-white px-4 py-2 rounded-lg transition"
          >
            <Download size={14} /> Capability Statement (PDF)
          </a>
        </div>
      </div>

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
    </footer>
  );
};

export default Footer;
