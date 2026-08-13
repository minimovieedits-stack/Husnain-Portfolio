import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryLightboxProps {
  project: Project | null;
  initialIndex?: number;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ project, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project || !project.images) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, currentIndex, onClose]);

  if (!project || !project.images || project.images.length === 0) return null;

  const images = project.images;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#0c0e17] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08090d]/80">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </span>
              <h3 className="text-lg font-bold text-white font-display truncate">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-mono">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Display Stage */}
          <div className="relative flex-1 min-h-[380px] sm:min-h-[500px] max-h-[65vh] bg-[#050609] overflow-hidden flex items-center justify-center p-4">
            
            {/* Prev Arrow */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-amber-400 hover:text-black text-white border border-white/20 transition-all shadow-xl"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Current Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                {!imageErrors[currentIndex] ? (
                  <img
                    src={images[currentIndex]}
                    alt={`${project.title} - Image ${currentIndex + 1}`}
                    className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
                    onError={() => handleImageError(currentIndex)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center max-w-md bg-white/5 rounded-2xl border border-white/10">
                    <Sparkles className="w-12 h-12 text-amber-400 mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-xs text-slate-400 mb-4">
                      Creative Specimen #{currentIndex + 1}
                    </p>
                    <a
                      href={images[currentIndex]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-black text-xs font-semibold"
                    >
                      <span>View Source Asset</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Next Arrow */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-amber-400 hover:text-black text-white border border-white/20 transition-all shadow-xl"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Thumbnail Ribbon & Footer */}
          <div className="p-4 sm:p-6 bg-[#08090d] border-t border-white/10 flex flex-col gap-4">
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      currentIndex === idx
                        ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/20'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="text-sm text-slate-300 font-light max-w-3xl">
                {project.description}
              </p>
              <a
                href="https://wa.me/923717028832"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
              >
                <span>Inquire About Similar Creatives</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
