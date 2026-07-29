import React from 'react';
import { Sparkles, ArrowRight, Eye, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const StorySections = ({ onOpenCatalog, onSelectPlantById, onOpenLandscaping }) => {
  return (
    <div className="relative z-10 pointer-events-none space-y-16 py-12 px-4 md:px-12">
      {/* Zone 1: Greenhouse & Indoor Collection */}
      <section className="min-h-[55vh] flex items-center justify-start max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel-bright p-6 md:p-8 rounded-3xl max-w-lg pointer-events-auto border border-cream-200 shadow-xl bg-white/95"
        >
          <span className="text-[11px] font-extrabold tracking-widest text-emerald-800 uppercase mb-1 block">
            ZONE 01 • BOTANICAL GREENHOUSE
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-sage-900 leading-tight mb-3">
            Air-Purifying Indoor Sanctuary
          </h2>
          <p className="text-xs md:text-sm text-sage-800 leading-relaxed mb-5 font-semibold">
            Nurtured under micro-controlled temperature & organic humidity, our Monstera, Ficus Lyrata, and Sansevieria collections cleanse indoor air while making architectural design statements.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectPlantById('monstera-deliciosa')}
              className="btn-luxury-primary px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Inspect Monstera 3D
            </button>
            <button
              onClick={() => onSelectPlantById('snake-plant-laurentii')}
              className="glass-card px-4 py-2 rounded-full text-xs font-extrabold text-sage-900 flex items-center gap-1.5 hover:bg-cream-100 bg-white"
            >
              Inspect Snake Plant 3D
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>
            <button
              onClick={onOpenCatalog}
              className="glass-card px-4 py-2 rounded-full text-xs font-extrabold text-sage-900 flex items-center gap-1.5 hover:bg-cream-100 bg-white"
            >
              Browse Indoor Collection
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Zone 2: Tropical Palms & Fruit Orchard */}
      <section className="min-h-[55vh] flex items-center justify-end max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel-bright p-6 md:p-8 rounded-3xl max-w-lg pointer-events-auto border border-cream-200 shadow-xl bg-white/95"
        >
          <span className="text-[11px] font-extrabold tracking-widest text-emerald-800 uppercase mb-1 block">
            ZONE 02 • PALM AVENUE & ORCHARD
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-sage-900 leading-tight mb-3">
            Royal Palms & Pakistani Fruit Orchard
          </h2>
          <p className="text-xs md:text-sm text-sage-800 leading-relaxed mb-5 font-semibold">
            From 25-foot Royal Date Palms for grand estate entrances to sweet Multani Chaunsa Mangoes and Kinnu Orange trees acclimatized for Punjab & Sindh climates.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectPlantById('mature-royal-date-palm')}
              className="btn-luxury-primary px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Inspect Royal Palm 3D
            </button>
            <button
              onClick={() => onSelectPlantById('mango-chaunsa-tree')}
              className="glass-card px-4 py-2 rounded-full text-xs font-extrabold text-sage-900 flex items-center gap-1.5 hover:bg-cream-100 bg-white"
            >
              Inspect Chaunsa Mango
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>
            <button
              onClick={onOpenCatalog}
              className="glass-card px-4 py-2 rounded-full text-xs font-extrabold text-sage-900 flex items-center gap-1.5 hover:bg-cream-100 bg-white"
            >
              View Fruit Orchard
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Zone 3: Exotic Bonsai & Heritage Pavilion */}
      <section className="min-h-[55vh] flex items-center justify-start max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel-bright p-6 md:p-8 rounded-3xl max-w-lg pointer-events-auto border border-cream-200 shadow-xl bg-white/95"
        >
          <span className="text-[11px] font-extrabold tracking-widest text-emerald-800 uppercase mb-1 block">
            ZONE 03 • EXOTIC BONSAI PAVILION
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-sage-900 leading-tight mb-3">
            Living Sculpture & Heritage Motia
          </h2>
          <p className="text-xs md:text-sm text-sage-800 leading-relaxed mb-5 font-semibold">
            Hand-shaped 15-year-old Juniper Bonsai masterworks, fragrant Pakistani Motia Jasmine, and fiery magenta Bougainvillea climbers that turn verandas into floral tapestries.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectPlantById('master-japanese-bonsai-juniper')}
              className="btn-luxury-gold px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-sage-900" />
              Inspect Bonsai Masterpiece
            </button>
            <button
              onClick={() => onSelectPlantById('ancient-italian-olive')}
              className="glass-card px-4 py-2 rounded-full text-xs font-extrabold text-sage-900 flex items-center gap-1.5 hover:bg-cream-100 bg-white"
            >
              PKR 45,000 Olive Tree
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Zone 4: Villa Landscaping & Architecture */}
      <section className="min-h-[55vh] flex items-center justify-end max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel-bright p-6 md:p-8 rounded-3xl max-w-lg pointer-events-auto border border-cream-200 shadow-xl bg-white/95"
        >
          <span className="text-[11px] font-extrabold tracking-widest text-emerald-800 uppercase mb-1 block">
            ZONE 04 • LANDSCAPE ARCHITECTURE
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-sage-900 leading-tight mb-3">
            Luxury Villa & Farmhouse Architecture
          </h2>
          <p className="text-xs md:text-sm text-sage-800 leading-relaxed mb-5 font-semibold">
            Complete turn-key 3D landscape design, automated drip irrigation, stone waterfalls, and living lawn installations across DHA Lahore, Bahria Town Islamabad & Emaar Karachi.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenLandscaping}
              className="btn-luxury-primary px-5 py-2.5 rounded-full text-xs md:text-sm font-extrabold flex items-center gap-2 shadow-lg"
            >
              <span>Explore Landscaping Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
