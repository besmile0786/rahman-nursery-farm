import React from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Truck, Sparkles, Award, Star, Compass, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroOverlay = ({ onExploreClick, onOpenCatalog, onOpenAIPlanner }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-10 px-4 md:px-12 pointer-events-none bg-transparent">
      
      {/* Top Main Hero Title */}
      <div className="max-w-5xl mx-auto text-center mt-4 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-extrabold text-emerald-900 border border-emerald-300 shadow-sm bg-white/95 mb-4"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>PAKISTAN'S PREMIER 3D BOTANICAL NURSERY • 50+ YEARS HERITAGE</span>
        </motion.div>

        {/* High-Contrast Bold Vibrant Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-[1.05] tracking-tight mb-5 drop-shadow-sm"
        >
          BRING NATURE <br className="hidden sm:inline" />
          <span className="text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2">HOME IN LUXURY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-sage-900 max-w-3xl mx-auto font-bold leading-relaxed mb-8 bg-white/95 p-5 rounded-2xl border border-cream-200 shadow-md text-center"
        >
          Explore 50+ acclimatized plant varieties, Cassia Nodosa trees of all sizes, Chain & China Guava orchards, Date Palms, and turn-key villa landscaping by <strong className="text-emerald-800">Rahman Nursery Farm (Chak Hassan Arain)</strong>.
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-8"
        >
          <button
            onClick={onOpenCatalog}
            className="btn-luxury-primary px-7 py-3.5 rounded-full text-sm md:text-base font-extrabold flex items-center gap-2.5 shadow-lg hover:scale-105 transition-all"
          >
            <Leaf className="w-5 h-5" />
            <span>Explore 3D Plant Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onOpenAIPlanner}
            className="btn-luxury-gold px-7 py-3.5 rounded-full text-sm md:text-base font-extrabold flex items-center gap-2.5 shadow-lg hover:scale-105 transition-all text-sage-900"
          >
            <Compass className="w-5 h-5 text-sage-900" />
            <span>AI Garden & Budget Planner</span>
          </button>

          <button
            onClick={onExploreClick}
            className="px-6 py-3.5 rounded-full text-xs md:text-sm font-extrabold text-sage-900 bg-white border border-emerald-300 shadow-md hover:bg-emerald-50 transition-all"
          >
            Take 3D Walkthrough
          </button>
        </motion.div>

        {/* Live Farm Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/95 p-4 md:p-5 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-4 border border-cream-200 max-w-4xl mx-auto shadow-lg"
        >
          <div className="text-center border-r border-cream-200/80 last:border-0">
            <div className="font-serif text-2xl md:text-3xl font-black text-emerald-900">500,000+</div>
            <div className="text-[10px] md:text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Plants Cultivated</div>
          </div>
          <div className="text-center border-r border-cream-200/80 last:border-0">
            <div className="font-serif text-2xl md:text-3xl font-black text-amber-600">50+ Years</div>
            <div className="text-[10px] md:text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Botanical Heritage</div>
          </div>
          <div className="text-center border-r border-cream-200/80 last:border-0">
            <div className="font-serif text-2xl md:text-3xl font-black text-emerald-900">50+ Cities</div>
            <div className="text-[10px] md:text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Express Delivery PK</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl md:text-3xl font-black text-emerald-800 flex items-center justify-center gap-1">
              4.9 <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="text-[10px] md:text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Verified Reviews</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Feature Badges & Scroll Prompter */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto mt-6">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <div className="px-4 py-2 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-sage-900 bg-white/95 border border-emerald-200 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
            </div>
            <span>100% Acclimatized Plants</span>
          </div>

          <div className="px-4 py-2 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-sage-900 bg-white/95 border border-emerald-200 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
              <Truck className="w-3.5 h-3.5 text-amber-700" />
            </div>
            <span>Safe Wooden Crate Express Delivery</span>
          </div>
        </div>

        {/* Scroll Prompt Button */}
        <div
          onClick={onExploreClick}
          className="cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold text-sage-900 border border-emerald-300 hover:scale-105 transition-transform shadow-sm bg-white/95"
        >
          <span>SCROLL TO EXPLORE 3D FARMS</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-700" />
        </div>
      </div>
    </section>
  );
};
