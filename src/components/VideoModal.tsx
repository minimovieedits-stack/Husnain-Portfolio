import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Play, Film, Sparkles, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#0d0f17] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col glow-card"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08090d]/80">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <Film className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </span>
              <h3 className="text-lg font-bold text-white font-display truncate max-w-xs sm:max-w-md">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Video Area */}
          <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
            {project.embedUrl ? (
              <iframe
                src={`${project.embedUrl}?autoplay=1&nocookie=true`}
                title={project.title}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="text-center p-8">
                <Play className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <p className="text-white">Video stream loading...</p>
              </div>
            )}
          </div>

          {/* Footer Details Bar */}
          <div className="p-6 bg-[#090b12] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold text-white font-display mb-1">{project.title}</h4>
              <p className="text-sm text-slate-300 max-w-2xl font-light">{project.description}</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-colors shadow-lg shadow-amber-500/20"
                >
                  <span>Watch on Streamable</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
