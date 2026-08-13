import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050609] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <a href="#home" onClick={() => handleScrollTo('home')}>
              <Logo size="lg" />
            </a>
            
            <p className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
              AI Video Creator & Digital Marketing Specialist from Okara, Pakistan. Creating cinematic AI commercials, product reveals, and digital growth strategies for global brands.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923717028832"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:husnaincreator6@gmail.com"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Services', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-amber-400 transition-colors">AI Video Creation</button></li>
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-amber-400 transition-colors">AI Commercial Ads</button></li>
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-amber-400 transition-colors">AI Product Ads</button></li>
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-amber-400 transition-colors">AI Cinematic Video</button></li>
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-amber-400 transition-colors">Social Media Management</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Okara, Pakistan</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:husnaincreator6@gmail.com" className="hover:text-amber-400 transition-colors break-all">
                  husnaincreator6@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="https://wa.me/923717028832" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  +92 371 7028832
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Husnain Raza. All Rights Reserved.</p>
          <p className="text-slate-400">AI Video Creator & Digital Marketing Specialist</p>
        </div>
      </div>
    </footer>
  );
};
