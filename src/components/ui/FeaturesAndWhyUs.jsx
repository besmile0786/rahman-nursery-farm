import React, { useState } from 'react';
import { ShieldCheck, Truck, UserCheck, Sparkles, Sprout, Award, ChevronDown, ChevronUp, BookOpen, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BOTANICAL_CARE_GUIDES, FREQUENTLY_ASKED_QUESTIONS } from '../../data/plantCatalog';

export const FeaturesAndWhyUs = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const features = [
    {
      icon: ShieldCheck,
      title: 'Acclimatized Plants',
      description: 'Grown and conditioned specifically for Pakistani weather variations in Lahore, Islamabad, Karachi, and Peshawar.'
    },
    {
      icon: UserCheck,
      title: 'Expert Horticulturists',
      description: 'Over 30 years of continuous agricultural experience crafting healthy root systems and leaf foliage.'
    },
    {
      icon: Truck,
      title: 'Nationwide Express Delivery',
      description: 'Specialized protective wooden crate packaging ensuring zero damage during transport across all major PK cities.'
    },
    {
      icon: Sprout,
      title: 'Organic Soil Formulations',
      description: 'Enriched with natural leaf mold, neem cake, and micronutrients for vigorous root growth.'
    },
    {
      icon: Award,
      title: '1-Year Landscape Guarantee',
      description: 'All villa & farmhouse landscaping projects include free quarterly maintenance checkups & plant replacement warranty.'
    },
    {
      icon: Sparkles,
      title: 'Direct WhatsApp Service',
      description: 'No complicated registration required. Order via WhatsApp (0304-0450065) directly with real plant photos sent before dispatch.'
    }
  ];

  return (
    <div className="relative z-10 pointer-events-auto space-y-12 py-12 px-4 md:px-12 max-w-7xl mx-auto">
      {/* 1. VIP Features Grid */}
      <section>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
            THE RAHMAN NURSERY DIFFERENCE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sage-900 leading-tight">
            Why Luxury Homeowners Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-3xl flex flex-col justify-between group hover:border-gold-500/50 bg-white"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-cream-50 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-sage-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-sage-800 leading-relaxed font-medium">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. Seasonal Botanical Care Masterclass */}
      <section className="glass-panel-bright p-6 md:p-10 rounded-3xl border border-cream-200 shadow-xl bg-white/95">
        <div className="flex items-center gap-3 text-gold-600 font-bold text-xs uppercase tracking-widest mb-1">
          <BookOpen className="w-4 h-4" />
          <span>HORTICULTURAL CARE MASTERCLASS</span>
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-sage-900 mb-6">
          Pakistani Seasonal Botanical Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOTANICAL_CARE_GUIDES.map((guide, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl bg-cream-50/50 border border-cream-200">
              <div className="text-2xl mb-2">{guide.icon}</div>
              <div className="text-[10px] font-extrabold text-emerald-800 uppercase mb-1">{guide.season}</div>
              <h3 className="font-serif font-bold text-sage-900 text-base mb-3">{guide.title}</h3>
              <ul className="space-y-2 text-xs text-sage-800 font-medium">
                {guide.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) Accordion */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-gold-600 font-bold text-xs uppercase tracking-widest mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>EXPERT ANSWERS</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-sage-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FREQUENTLY_ASKED_QUESTIONS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-cream-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 text-left font-serif font-bold text-sage-900 text-sm md:text-base flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 pt-0 text-xs md:text-sm text-sage-800 font-semibold leading-relaxed border-t border-cream-100 bg-cream-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
