import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, Clock, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Commercial Ad',
    budget: '$500 - $1,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger pre-filled mailto
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Husnain,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:husnaincreator6@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Inquiries</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            Have A Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">In Mind?</span>
          </h2>
          <p className="mt-3 text-white/60 text-xs sm:text-sm max-w-xl font-light">
            Let's turn your idea into something people remember.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Quick WhatsApp CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Contact Details Card */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 glow-card">
              <h3 className="text-xl font-light italic text-white font-display mb-6">Contact Details</h3>

              <div className="space-y-6">
                
                {/* Name */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Creative Lead</div>
                    <div className="text-sm font-semibold text-white">Husnain Raza</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Email Direct</div>
                    <a
                      href="mailto:husnaincreator6@gmail.com"
                      className="text-sm font-medium text-white/90 hover:text-white transition-colors break-all"
                    >
                      husnaincreator6@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">WhatsApp / Phone</div>
                    <a
                      href="https://wa.me/923717028832"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                    >
                      +92 371 7028832
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Location</div>
                    <div className="text-sm font-medium text-white/90">Okara, Pakistan</div>
                  </div>
                </div>

                {/* Experience Summary */}
                <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Experience</div>
                    <div className="text-xs font-light text-white/80">
                      2 Years Digital Marketing &bull; 6 Months AI Video
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="bg-white/5 p-6 rounded-xl border border-emerald-500/30 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Need Quick Answers?</h4>
                <p className="text-xs text-white/60 font-light">Message directly on WhatsApp for rapid response.</p>
              </div>

              <a
                href="https://wa.me/923717028832"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[10px] uppercase tracking-widest shadow-lg transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 p-8 sm:p-10 rounded-xl border border-white/10 glow-card relative">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-light italic text-white font-display mb-2">Inquiry Initiated!</h3>
                  <p className="text-white/70 text-xs max-w-md mb-6 font-light">
                    Thank you, {formData.name}. Your email client was opened to send your inquiry to <strong className="text-white font-medium">husnaincreator6@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white text-[10px] uppercase tracking-widest font-bold hover:bg-white/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-light italic text-white font-display mb-1">Send Project Inquiry</h3>
                  <p className="text-[11px] uppercase tracking-widest text-white/40 mb-6">Fill out the form below for a 24h response.</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-white/40 transition-colors"
                      >
                        <option value="AI Commercial Ad">AI Commercial Ad</option>
                        <option value="AI Product Ad">AI Product Ad</option>
                        <option value="AI Cinematic Video">AI Cinematic Video</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Graphic Designing">Graphic Designing</option>
                        <option value="Full Campaign Strategy">Full Campaign Strategy</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-white/40 transition-colors"
                      >
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000+">$3,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your brand, video objectives, timeline, or target audience..."
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-xl"
                  >
                    <Send className="w-3.5 h-3.5 fill-black" />
                    <span>Send Project Inquiry</span>
                  </button>

                  <p className="text-[10px] uppercase tracking-widest text-center text-white/30 font-mono">
                    Direct Email: husnaincreator6@gmail.com
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
