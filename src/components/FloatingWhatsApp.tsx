import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-[#0d0d0d] px-4 py-2.5 rounded-xl border border-white/15 shadow-2xl flex items-center gap-2 max-w-xs backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-white/90 font-light">
              Chat on WhatsApp for instant inquiries!
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/40 hover:text-white p-0.5 ml-1 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href="https://wa.me/923717028832"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6 fill-black" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border-2 border-emerald-500"></span>
        </span>
      </a>
    </div>
  );
};
