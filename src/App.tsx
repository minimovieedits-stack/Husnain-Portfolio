import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ToolsExpertise } from './components/ToolsExpertise';
import { WhyHireMe } from './components/WhyHireMe';
import { WorkProcess } from './components/WorkProcess';
import { Experience } from './components/Experience';
import { TrustSection } from './components/TrustSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ToolsExpertise />
        <WhyHireMe />
        <WorkProcess />
        <Experience />
        <TrustSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
