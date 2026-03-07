import React from 'react';
import { Shield, Target, Share2, Award, FileText, X, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

const FederalSection = () => {
  const [showCapabilityStatement, setShowCapabilityStatement] = React.useState(false);
  const [capabilityContent, setCapabilityContent] = React.useState('');

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (showCapabilityStatement) {
      document.body.style.overflow = 'hidden';
      if (!capabilityContent) {
        fetch('/Capability-Statement.md')
          .then(res => res.text())
          .then(text => setCapabilityContent(text))
          .catch(err => console.error("Failed to load capability statement", err));
      }
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showCapabilityStatement, capabilityContent]);

  return (
    <section id="federal" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background Subtle Grid for "Tactical" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left: Capability Matrix */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Defense & Intelligence</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Open Vision Technology provides the "Connective Tissue" for the future of
                <strong> JADC2 </strong>. Our architecture enables hardware to be
                "Agent-Ready," facilitating seamless human-machine teaming across the tactical edge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "MOSA Compliant", desc: "Modular Open Systems Approach for vendor-neutral scaling.", icon: <Share2 size={20} /> },
                { title: "Zero Trust Ready", desc: "Built for secure data exportation in contested environments.", icon: <Shield size={20} /> },
                { title: "Edge Deployment", desc: "Optimized for low-SWaP (Size, Weight, and Power) hardware.", icon: <Target size={20} /> },
                { title: "Awardable Status", desc: "Streamlined procurement for DoD agencies.", icon: <Award size={20} /> }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-gray-200 hover:border-secondary/30 transition shadow-sm">
                  <div className="text-secondary mb-2">{item.icon}</div>
                  <h4 className="text-primary font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Procurement Data Card */}
          <div className="w-full md:w-80">
            <div className="bg-gradient-to-b from-gray-100 to-white p-1 rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-primary font-mono text-sm mb-6 border-b border-gray-200 pb-2">PROCUREMENT_DATA</h3>

                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">CAGE Code</label>
                    <p className="text-xl font-mono text-secondary font-bold tracking-wider">
                      18NH2
                    </p>
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">UEI Number</label>
                    <p className="text-sm font-mono text-primary uppercase">
                      U6GJVDKFSYG1
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Primary NAICS</label>
                    <p className="text-sm text-gray-600">541511, 541715, 334511</p>
                  </div>
                  <button
                    onClick={() => setShowCapabilityStatement(true)}
                    className="w-full py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-primary text-xs font-bold rounded-lg transition uppercase tracking-tighter flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <FileText size={16} /> View Capability Statement
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {showCapabilityStatement && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 md:p-8" onClick={() => setShowCapabilityStatement(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 shrink-0">
              <div className="flex items-center gap-2 text-primary">
                <FileText size={20} className="text-secondary" />
                <h3 className="text-lg font-bold">Capability Statement</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/Capability-Statement.pdf"
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

export default FederalSection;