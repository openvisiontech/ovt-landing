import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import C2Section from './components/C2Section';
import Features from './components/Features';
import UliKayaSection from './UliKayaSection';
import FederalSection from './FederalSection';
import ContactSection from './ContactSection';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen bg-bg-light font-sans selection:bg-secondary/30 text-primary">
    <Navbar />
    <Hero />
    <C2Section />
    <Features />
    <UliKayaSection />
    <FederalSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
