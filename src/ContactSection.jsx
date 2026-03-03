import React, { useState } from 'react';
import { Shield, Send, Lock, Cpu } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState('idle');
  const [requestSdk, setRequestSdk] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent("OVT Contact Form Submission from " + data.fullName);
    let bodyText = `Name: ${data.fullName}\nEmail: ${data.email}\nEntity Type: ${data.entityType}\n`;
    if (requestSdk && data.github) {
      bodyText += `GitHub: ${data.github}\n`;
    }
    bodyText += `\nMessage:\n${data.message}`;

    window.location.href = `mailto:genshianglin@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left: Branding & Intent */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Partner with <br />Open Vision Technology</h2>
            <p className="text-gray-600 max-w-md leading-relaxed">
              From federal JADC2 initiatives to commercial edge-AI, we provide the
              middleware that turns hardware into intelligence.
              (email: genshianglin@gmail.com)
            </p>
          </div>
        </div>

        {/* Right: Integrated Smart Form */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-2xl">
          {formState === 'success' ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Request Received</h3>
              <p className="text-gray-600">Our technical team will review your details and be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input name="fullName" required className="bg-white border border-gray-300 p-3 rounded-lg text-primary outline-none focus:border-secondary transition shadow-sm" placeholder="Full Name" />
                <input name="email" required type="email" className="bg-white border border-gray-300 p-3 rounded-lg text-primary outline-none focus:border-secondary transition shadow-sm" placeholder="Org Email" />
              </div>

              <select name="entityType" className="w-full bg-white border border-gray-300 p-3 rounded-lg text-primary outline-none focus:border-secondary transition shadow-sm">
                <option>Federal / Defense Entity</option>
                <option>Commercial Partner</option>
                <option>Research Institution</option>
              </select>

              {/* Smart SDK Toggle */}
              <div
                onClick={() => setRequestSdk(!requestSdk)}
                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer border transition ${requestSdk ? 'bg-secondary/10 border-secondary' : 'bg-white border-gray-300'}`}
              >
                <div className="flex items-center gap-3">
                  <Cpu size={20} className={requestSdk ? 'text-secondary' : 'text-gray-400'} />
                  <div>
                    <p className="text-sm font-bold text-primary">Request SDK Source Access</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Controlled Access (Vetting Required)</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded border flex items-center justify-center ${requestSdk ? 'bg-secondary border-secondary' : 'border-gray-300'}`}>
                  {requestSdk && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

              {requestSdk && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <input name="github" required className="w-full bg-white border border-secondary p-3 rounded-lg text-primary outline-none shadow-sm focus:ring-2 focus:ring-secondary/20" placeholder="GitHub Username / Organization Handle" />
                  <p className="text-[10px] text-gray-500 mt-2 ml-1">Access is granted via GitHub invitation following verification.</p>
                </div>
              )}

              <textarea name="message" required className="w-full bg-white border border-gray-300 p-3 rounded-lg text-primary outline-none focus:border-secondary transition shadow-sm" rows="3" placeholder="Primary use case or mission requirements..."></textarea>

              <button className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:opacity-90 transition cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(242,148,98,0.4)]">
                {requestSdk ? 'Submit Access Application' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;