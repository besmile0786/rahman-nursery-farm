import React, { useState } from 'react';
import { X, Sparkles, MapPin, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { LANDSCAPING_PROJECTS } from '../../data/landscapingProjects';
import { generateLandscapeInquiryLink } from '../../utils/whatsappHelper';

export const LandscapingShowcase = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(LANDSCAPING_PROJECTS[0]);
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-sage-900/60 backdrop-blur-md pointer-events-auto">
      <div className="glass-panel w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/80 animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="p-6 border-b border-cream-200 flex items-center justify-between bg-white/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-sage-900">
                Landscape Architecture Showcases
              </h2>
              <p className="text-xs text-sage-600">Interactive Before & After Villa Transformations</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-cream-100 text-sage-700 hover:bg-cream-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 bg-cream-50/30">
          {/* Project Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {LANDSCAPING_PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedProject.id === proj.id
                    ? 'bg-sage-900 text-cream-50 shadow-md scale-105'
                    : 'bg-white text-sage-700 hover:bg-cream-100 border border-cream-200'
                }`}
              >
                {proj.title} ({proj.location})
              </button>
            ))}
          </div>

          {/* Before & After Interactive Comparison Slider */}
          <div className="relative w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-cream-200 select-none">
            {/* After Image (Background) */}
            <img
              src={selectedProject.afterImage}
              alt="After Landscaping"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-sage-900/80 text-cream-50 text-xs font-extrabold shadow-lg z-10">
              AFTER (RAHMAN NURSERY ARCHITECTURE)
            </span>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={selectedProject.beforeImage}
                alt="Before Landscaping"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 text-cream-50 text-xs font-extrabold shadow-lg">
                BEFORE (INITIAL PLOT)
              </span>
            </div>

            {/* Slider Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold-500 cursor-ew-resize flex items-center justify-center z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-gold-500 text-sage-900 font-black text-xs flex items-center justify-center shadow-xl border-2 border-white">
                ↔
              </div>
            </div>

            {/* Hidden Input Range for Drag Interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/70 p-6 rounded-3xl border border-cream-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-gold-600 uppercase mb-1">
                <MapPin className="w-4 h-4" />
                <span>{selectedProject.location}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-sage-900 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-sage-700 leading-relaxed mb-4">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-sage-800">
                <div>📐 Area: <span className="font-bold text-sage-900">{selectedProject.areaSqFt} sq ft</span></div>
                <div>⏱️ Timeline: <span className="font-bold text-sage-900">{selectedProject.completionDays} Days</span></div>
                <div>💰 Budget: <span className="font-bold text-gold-600">{selectedProject.budgetRange}</span></div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider mb-3">
                Key Architectural Deliverables:
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-sage-800 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={generateLandscapeInquiryLink({
                  projectType: selectedProject.type,
                  city: selectedProject.location
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary w-full py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-cream-50/20" />
                Book Similar Project Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
