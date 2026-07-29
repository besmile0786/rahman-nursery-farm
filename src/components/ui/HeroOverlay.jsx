import React from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Truck, Sparkles, Sprout, Award, Star, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroOverlay = ({ onExploreClick, onOpenCatalog, onOpenAIPlanner }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 md:px-12 pointer-events-none bg-transparent">
      {/* Top Main Hero Title */}
      <div className="max-w-5xl mx-auto text-center mt-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs md:text-sm font-bold text-sage-900 border border-gold-500/40 mb-6 shadow-md bg-white/90"
        >
          <Sparkles className="w-4 h-4 text-gold-600" />
          <span>AWARD-WINNING 3D BOTANICAL WORLD • PAKISTAN</span>
        </motion.div>

        {/* High-Contrast Bold Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1E3A2B] leading-[1.05] tracking-tight mb-6"
        >
          BRING NATURE <br className="hidden sm:inline" />
          <span className="text-shimmer drop-shadow-sm">HOME IN LUXURY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-[#2D5A3F] max-w-3xl mx-auto font-bold leading-relaxed mb-8 bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm"
        >
          Walk through Pakistan’s premier 3D nursery farm. Explore 100% acclimatized indoor air purifiers, royal date palms, fruit orchards, & turn-key villa landscape architecture delivered nationwide.
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={onOpenCatalog}
            className="btn-luxury-primary px-8 py-4 rounded-full text-base font-extrabold flex items-center gap-3 shadow-xl"
          >
            <span>Explore 3D Plant Collection</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={onOpenAIPlanner}
            className="btn-luxury-gold px-8 py-4 rounded-full text-base font-extrabold flex items-center gap-3 shadow-xl"
          >
            <Compass className="w-5 h-5 text-sage-900" />
            <span>AI Garden & Budget Planner</span>
          </button>

          <button
            onClick={onExploreClick}
            className="glass-panel px-6 py-4 rounded-full text-sm font-extrabold text-sage-900 hover:bg-cream-100 transition-all border border-cream-200 shadow-md bg-white/90"
          >
            Take 3D Walkthrough
          </button>
        </motion.div>

        {/* Live Farm Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-panel p-4 md:p-6 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-4 border border-cream-200 max-w-4xl mx-auto shadow-xl bg-white/95"
        >
          <div className="text-center border-r border-cream-200/80 last:border-0">
            <div className="font-serif text-2xl md:text-3xl font-black text-[#1E3A2B]">500,000+</div>
            <div className="text-[11px] font-extrabold text-sage-700 uppercase tracking-wider">Plants Cultivated</div>
          </div>
          <div className="text-center border-r border-cream-200/80 last:border-0">
            <div className="font-serif text-2xl md:text-3xl font-black text-gold-600">30+ Years</div>
            <div className="text-[11px] font-extrabold text-sage-700 uppercase tracking-wider">Botanical Heritage</div>
          </div>
          <div className="text-center border-r border-cream-200/80 last:border-0">
            <div className="font-serif text-2xl md:text-3xl font-black text-[#1E3A2B]">50+ Cities</div>
            <div className="text-[11px] font-extrabold text-sage-700 uppercase tracking-wider">Express Delivery PK</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl md:text-3xl font-black text-emerald-700 flex items-center justify-center gap-1">
              4.9 <Star className="w-4 h-4 fill-gold-500 text-gold-500 inline" />
            </div>
            <div className="text-[11px] font-extrabold text-sage-700 uppercase tracking-wider">Verified Reviews</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Feature Badges & Scroll Prompter */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto mt-8">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 text-xs md:text-sm font-bold text-sage-900 bg-white/90">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-800" />
            </div>
            <span>100% Acclimatized Plants</span>
          </div>

          <div className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 text-xs md:text-sm font-bold text-sage-900 bg-white/90">
            <div className="w-8 h-8 rounded-full bg-gold-300/40 flex items-center justify-center text-gold-700">
              <Truck className="w-4 h-4 text-gold-700" />
            </div>
            <span>Safe Wooden Crate Express Delivery</span>
          </div>
        </div>

        {/* Scroll Prompt Button */}
        <div
          onClick={onExploreClick}
          className="cursor-pointer flex items-center gap-3 glass-panel px-5 py-2.5 rounded-full text-xs font-extrabold text-sage-900 border border-gold-500/40 hover:scale-105 transition-transform shadow-md bg-white/90"
        >
          <span>SCROLL TO EXPLORE 3D FARMS</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-600" />
        </div>
      </div>
    </section>
  );
};
