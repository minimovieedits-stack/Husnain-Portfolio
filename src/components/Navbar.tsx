import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Why Hire Me', href: '#why-hire-me' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple intersection tracker for active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <a href="#home" onClick={() => handleNavClick('#home')} className="focus:outline-none">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors rounded-full ${
                    isActive ? 'text-white font-bold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-white/15 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/30 rounded-full text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black transition-all shadow-lg"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="sm:inline-flex hidden items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white text-black"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-3 border-b border-white/5 text-xs font-medium text-white/80 uppercase tracking-[0.2em] hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-white/40 font-mono">0{idx + 1}</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full border border-white/30 bg-white text-black font-bold text-xs uppercase tracking-widest text-center shadow-lg"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/923717028832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-white/5 border border-white/15 text-emerald-400 text-xs font-bold uppercase tracking-widest text-center hover:bg-white/10 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
