import React from 'react';
import { Shield, Target, Share2, Award, FileText, X } from 'lucide-react';
import { motion } from 'framer-motion';

const FederalSection = () => {
  const [showPdf, setShowPdf] = React.useState(false);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (showPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPdf]);

  return (
    <section id="federal" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Grid for "Tactical" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left: Capability Matrix */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Defense & Intelligence</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
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
                <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-white/10 hover:border-blue-500/30 transition">
                  <div className="text-blue-400 mb-2">{item.icon}</div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Procurement Data Card */}
          <div className="w-full md:w-80">
            <div className="bg-gradient-to-b from-slate-800 to-slate-950 p-1 rounded-2xl shadow-2xl">
              <div className="bg-slate-950 rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-mono text-sm mb-6 border-b border-white/10 pb-2">PROCUREMENT_DATA</h3>

                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">CAGE Code</label>
                    <p className="text-xl font-mono text-blue-400 font-bold tracking-wider">
                      18NH2
                    </p>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">UEI Number</label>
                    <p className="text-sm font-mono text-slate-200 uppercase">
                      U6GJVDKFSYG1
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Primary NAICS</label>
                    <p className="text-sm text-slate-300">541511, 541715, 334511</p>
                  </div>
                  <button
                    onClick={() => setShowPdf(true)}
                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-lg transition uppercase tracking-tighter flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText size={16} /> View Capability Statement
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {showPdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 md:p-8" onClick={() => setShowPdf(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-slate-950">
              <div className="flex items-center gap-2 text-white">
                <FileText size={20} className="text-blue-400" />
                <h3 className="text-lg font-bold">Capability Statement</h3>
              </div>
              <button
                onClick={() => setShowPdf(false)}
                className="text-slate-400 hover:text-white transition p-2 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 w-full bg-slate-800 relative">
              <iframe
                src="/Capability_Statement.pdf"
                className="absolute inset-0 w-full h-full border-none"
                title="Capability Statement"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FederalSection;