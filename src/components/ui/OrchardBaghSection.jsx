import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, ChevronDown, ChevronUp, MapPin, Leaf, TrendingUp } from 'lucide-react';
import { ORCHARD_SERVICES } from '../../data/plantCatalog';

const WHATSAPP_NUMBER = '923040450065';

export const OrchardBaghSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  const buildWhatsApp = (orchard) => {
    const text = `Assalam o Alaikum Ansar Bhai (03040450065),

Main aapki website se contact kar raha hun.

*Bagh Inquiry:* ${orchard.title}
*Price:* PKR ${orchard.pricePerAcre.toLocaleString()} per acre

Mujhe is bagh ke baare mein detail chahiye.

Shukriya — Rahman Nursery Farm website`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative z-10 pointer-events-auto py-16 px-4 md:px-12 bg-gradient-to-b from-emerald-50 to-white border-t border-emerald-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-700 uppercase tracking-widest mb-2">
            <Leaf className="w-4 h-4" />
            <span>BAGH LAGWAO — FULL ORCHARD PLANTING SERVICE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sage-900 mb-3">
            Complete Orchard / Bagh Planting
          </h2>
          <p className="text-sm text-sage-700 max-w-2xl mx-auto font-semibold leading-relaxed">
            From a single kanal to 100+ acres —{' '}
            <span className="text-emerald-700 font-extrabold">Rahman Nursery Farm</span> provides
            full turn-key Amrood, Mango, Kinnu, Anar, Ber & all Pakistani fruit orchard planting
            services across Lahore, Arifwala, Sahiwal, Pakpattan & all Punjab.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {[
              { label: 'Orchards Planted', value: '500+ Acres', icon: '🌳' },
              { label: 'Varieties Available', value: '20+ Fruit Types', icon: '🍊' },
              { label: 'Districts Covered', value: 'All Punjab', icon: '📍' },
              { label: 'WhatsApp Order', value: '03040450065', icon: '📱' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-emerald-200 rounded-2xl px-4 py-2.5 shadow-sm">
                <span className="text-xl">{stat.icon}</span>
                <div className="text-left">
                  <div className="text-[10px] text-sage-500 font-bold uppercase tracking-wide">{stat.label}</div>
                  <div className="text-sm font-extrabold text-sage-900">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Orchard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ORCHARD_SERVICES.map((orchard, idx) => {
            const isOpen = expanded === orchard.id;
            return (
              <motion.div
                key={orchard.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white rounded-3xl border border-cream-200 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Card top strip */}
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${orchard.color}dd, ${orchard.color})` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{orchard.emoji}</span>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/70 font-bold">
                        {orchard.urdu}
                      </div>
                      <h3 className="font-serif font-bold text-white text-base leading-tight">
                        {orchard.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className="text-[10px] text-white/70 font-bold">Starting From</div>
                    <div className="font-serif text-xl font-black text-white">
                      PKR {orchard.pricePerAcre.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-white/80 font-bold">per acre</div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <p className="text-xs text-sage-700 leading-relaxed font-semibold mb-4">
                    {orchard.description}
                  </p>

                  {/* Quick info row */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-[11px]">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">
                      <span className="font-extrabold text-emerald-800 block">🌱 Saplings</span>
                      <span className="text-sage-700 font-semibold">{orchard.saplingCount}</span>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">
                      <span className="font-extrabold text-emerald-800 block">📏 Spacing</span>
                      <span className="text-sage-700 font-semibold">{orchard.spacing}</span>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                      <span className="font-extrabold text-amber-800 block">🍊 First Fruit</span>
                      <span className="text-sage-700 font-semibold">{orchard.firstFruit}</span>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                      <span className="font-extrabold text-amber-800 block">📊 Yield/Acre</span>
                      <span className="text-sage-700 font-semibold">{orchard.yieldPerAcre}</span>
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="flex items-start gap-2 mb-4 text-[11px] bg-cream-50 border border-cream-200 rounded-xl px-3 py-2.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-emerald-800">Best For: </span>
                      <span className="text-sage-700 font-semibold">{orchard.bestFor}</span>
                    </div>
                  </div>

                  {/* Expandable includes list */}
                  <button
                    onClick={() => toggle(orchard.id)}
                    className="w-full flex items-center justify-between text-xs font-bold text-sage-700 hover:text-emerald-700 transition-colors mb-2"
                  >
                    <span>📦 What's Included in Service</span>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-1.5 mb-4 overflow-hidden"
                    >
                      {orchard.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-sage-700 font-semibold">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                      {/* Varieties */}
                      <li className="pt-2 flex flex-wrap gap-1">
                        {orchard.varieties.map((v, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                            {v}
                          </span>
                        ))}
                      </li>
                    </motion.ul>
                  )}

                  {/* CTA */}
                  <a
                    href={buildWhatsApp(orchard)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 text-white transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${orchard.color}cc, ${orchard.color})` }}
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    Order This Bagh — WhatsApp 03040450065
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-gradient-to-r from-emerald-100 via-amber-50 to-emerald-100 border border-emerald-300 rounded-3xl p-6 md:p-8 text-sage-900 text-center shadow-md"
        >
          <div className="text-3xl mb-3">🌳🍊🥭🍐❤️</div>
          <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-sage-900">
            Custom Bagh / Mixed Orchard Planning Available
          </h3>
          <p className="text-sm text-sage-700 font-semibold max-w-xl mx-auto mb-5">
            Want a mix of China Guava + Mango + Kinnu on your land? We design{' '}
            <strong className="text-emerald-800 font-extrabold">custom mixed orchards</strong> tailored to your soil,
            water, and budget. Free site visit for orders above 2 acres.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065), mujhe apni zameen par bagh lagwana hai. Kripya detail aur quotation bhejein. Rahman Nursery Farm website se contact kar raha hun.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-luxury-gold px-8 py-3.5 rounded-2xl text-sm font-extrabold text-sage-900"
          >
            <MessageCircle className="w-4 h-4" />
            Get Free Bagh Quotation — 03040450065
          </a>
        </motion.div>

      </div>
    </section>
  );
};
