import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, MessageCircle, MapPin, Bone, Leaf, TreePine, ShieldCheck } from 'lucide-react';

export const FamilyHeritagSection = ({ onOpenContact }) => {

  // Sons of Muhammad Shareef (Late) — nursery owners/operators
  const nurserySons = [
    {
      name: 'Muhammad Saleem',
      role: 'Co-Owner & Senior Horticulturist',
      urdu: 'محمد سلیم',
      note: 'Son of Muhammad Shareef (Late). With over 30 years of deep botanical knowledge, Muhammad Saleem manages the farm\'s plant cultivation, quality control, and senior horticulture operations at Chak Hassan Arain.',
      icon: '🌿',
    },
    {
      name: 'Muhammad Rafiq',
      role: 'Co-Owner & Farm Operations Manager',
      urdu: 'محمد رفیق',
      note: 'Son of Muhammad Shareef (Late). Muhammad Rafiq oversees the day-to-day nursery operations — from plant growing cycles, soil preparation, and stock management to regional supply across Arifwala, Sahiwal, and Pakpattan.',
      icon: '🌿',
    },
    {
      name: 'Abdul Hameed',
      role: 'Son of Muhammad Shareef (Late) — Not in Nursery',
      urdu: 'عبدالحمید',
      note: "Son of Muhammad Shareef (Late). Abdul Hameed continues his father's blessed skill as a <strong>Haddi Jorne Wala (ہڈی جوڑنے والا)</strong> — a traditional bone-setter. Just as Baba Shareef helped people in the community heal broken bones without surgery, Abdul Hameed carries this rare and respected gift forward today.",
      icon: '🦴',
      special: true,
    },
  ];

  // Next generation — currently running operations
  const nextGen = [
    {
      name: 'Bashart Saleem',
      role: 'Nursery Manager — Arifwala & Sahiwal Region',
      urdu: 'بشارت سلیم',
      phone: '0344-5155160',
      icon: '🌳',
    },
    {
      name: 'Kashir Saleem',
      role: 'Nursery Operations — Plant Supply & Dispatch',
      urdu: 'کاشر سلیم',
      phone: '0304-1001600',
      icon: '🌳',
    },
    {
      name: 'Ansar Hussain',
      role: 'Online Sales & Nationwide Delivery Manager',
      urdu: 'انصر حسین',
      phone: '03040450065',
      icon: '📱',
      highlight: true,
    },
  ];

  return (
    <section className="relative z-10 pointer-events-auto py-16 px-4 md:px-12 bg-white border-t border-cream-200">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-extrabold text-gold-600 uppercase tracking-widest mb-2">
            <Heart className="w-4 h-4 fill-gold-500" />
            <span>OUR FAMILY & FARM HERITAGE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sage-900 mb-3">
            Three Generations of Nature's Legacy
          </h2>
          <p className="text-sm text-sage-700 max-w-2xl mx-auto font-semibold leading-relaxed">
            Rooted in the soil of{' '}
            <span className="text-emerald-700 font-extrabold">Chak Hassan Arain</span> — 
            our family has dedicated over 30 years to growing Pakistan's finest plants,
            nurturing trees, and building green landscapes across the nation.
          </p>
        </motion.div>

        {/* ─── FOUNDER HERO CARD ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-lg border border-emerald-200"
        >
          {/* Gold top bar */}
          <div className="bg-gradient-to-r from-gold-600 to-gold-500 px-6 py-3 flex items-center gap-3">
            <span className="text-xl">🌱</span>
            <span className="text-sm font-extrabold text-sage-900 uppercase tracking-widest">
              Founder & Original Owner — Muhammad Shareef (Late)
            </span>
            <span className="ml-auto px-3 py-1 rounded-full bg-sage-900/20 text-sage-900 text-xs font-black">
              محمد شریف (مرحوم) — Baba Shareef
            </span>
          </div>

          {/* Body */}
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Biography column */}
              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-sage-900 mb-1">
                  Muhammad Shareef <span className="text-sage-500 font-normal text-lg">(Late)</span>
                </h3>
                <p className="text-xs font-extrabold text-gold-600 uppercase tracking-widest mb-4">
                  Founder, Main Owner & Community Healer — Chak Hassan Arain
                </p>

                <p className="text-sm text-sage-800 leading-relaxed font-semibold mb-4">
                  Muhammad Shareef, lovingly known as <strong>Baba Shareef</strong> throughout
                  the community, was the original founder and main owner of what is today
                  Rahman Nursery Farm. He established this nursery from the blessed soil of
                  <strong> Chak Hassan Arain</strong> with a vision to bring greenery,
                  agriculture, and plant life to the people of South Punjab.
                </p>

                <p className="text-sm text-sage-800 leading-relaxed font-semibold mb-4">
                  Beyond the nursery, Baba Shareef was uniquely gifted with a rare traditional
                  skill — he was a revered{' '}
                  <strong>Haddi Jorne Wala (ہڈی جوڑنے والا)</strong>, a traditional
                  bone-setter deeply respected across the community. Whenever someone suffered
                  an accidental fracture or broken bone, they would come to Baba Shareef.
                  With steady hands, deep knowledge, and Allah's blessing, he would carefully
                  set, splint, and heal broken bones — without a hospital or surgery.
                  This rare gift made him one of the most beloved and trusted figures in
                  Chak Hassan Arain.
                </p>

                <p className="text-sm text-sage-800 leading-relaxed font-semibold">
                  He was also generous with <strong>gifts and charitable giving (Hadia)</strong>
                  — regularly sharing plants, saplings, and provisions with those in need around
                  Chak Hassan Arain. His legacy of generosity, craftsmanship, and love for nature
                  lives on through his sons and grandchildren who continue this work today.
                </p>
              </div>

              {/* Legacy badges column */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-emerald-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                  <span className="text-xl flex-shrink-0">🌱</span>
                  <div>
                    <p className="text-xs font-extrabold text-emerald-800 uppercase tracking-wide mb-0.5">Nursery Founder</p>
                    <p className="text-xs text-sage-700 font-semibold">
                      Established Rahman Nursery Farm in Chak Hassan Arain — the original main owner who started it all.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-amber-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                  <span className="text-xl flex-shrink-0">🦴</span>
                  <div>
                    <p className="text-xs font-extrabold text-amber-800 uppercase tracking-wide mb-0.5">Haddi Jorne Wala — ہڈی جوڑنے والا</p>
                    <p className="text-xs text-sage-700 font-semibold">
                      Traditional bone-setter revered across Chak Hassan Arain — people with fractures and broken bones came to him for healing.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gold-400/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                  <span className="text-xl flex-shrink-0">🎁</span>
                  <div>
                    <p className="text-xs font-extrabold text-gold-700 uppercase tracking-wide mb-0.5">Charitable & Generous (Hadia)</p>
                    <p className="text-xs text-sage-700 font-semibold">
                      Known for regularly giving plants, saplings, and provisions as gifts to neighbours and the community.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-cream-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                  <MapPin className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-extrabold text-emerald-800 uppercase tracking-wide mb-0.5">Farm Location</p>
                    <p className="text-xs text-sage-700 font-semibold">
                      Chak Hassan Arain, Arifwala, District Pakpattan, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ─── SONS SECTION ─── */}
        <div className="mb-10">
          <h3 className="font-serif text-lg font-bold text-sage-700 mb-5 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-gold-500 rounded-full inline-block" />
            Sons of Muhammad Shareef (Late)
            <span className="w-8 h-0.5 bg-gold-500 rounded-full inline-block" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {nurserySons.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-5 border flex flex-col gap-3 ${
                  member.special
                    ? 'bg-amber-50 border-amber-200 shadow-sm'
                    : 'bg-white border-cream-200 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{member.icon}</span>
                  <div>
                    <h4 className="font-serif font-bold text-sage-900 text-base leading-tight">{member.name}</h4>
                    <p className={`text-[11px] font-bold uppercase tracking-wide mt-0.5 ${member.special ? 'text-amber-700' : 'text-emerald-700'}`}>
                      {member.role}
                    </p>
                    <p className="text-[11px] text-sage-400 font-semibold">{member.urdu}</p>
                  </div>
                </div>
                <p className="text-xs text-sage-700 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: member.note }} />
                {member.special && (
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-700 font-bold bg-amber-100 rounded-xl px-3 py-2">
                    <span>🦴</span>
                    Continuing Baba Shareef's tradition — Haddi Jorne Wala (ہڈی جوڑنے والا)
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── NEXT GENERATION ─── */}
        <div>
          <h3 className="font-serif text-lg font-bold text-sage-700 mb-5 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-emerald-500 rounded-full inline-block" />
            Next Generation — Currently Running Nursery Operations
            <span className="w-8 h-0.5 bg-emerald-500 rounded-full inline-block" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {nextGen.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className={`rounded-2xl p-5 border flex flex-col gap-3 ${
                  member.highlight
                    ? 'bg-gradient-to-br from-emerald-700 to-emerald-900 border-emerald-600 shadow-xl text-white'
                    : 'bg-white border-cream-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{member.icon}</span>
                  <div>
                    <h4 className={`font-serif font-bold text-base leading-tight ${member.highlight ? 'text-white' : 'text-sage-900'}`}>
                      {member.name}
                    </h4>
                    <p className={`text-[11px] font-bold uppercase tracking-wide mt-0.5 ${member.highlight ? 'text-emerald-200' : 'text-emerald-700'}`}>
                      {member.role}
                    </p>
                    <p className={`text-[11px] font-semibold ${member.highlight ? 'text-emerald-300' : 'text-sage-400'}`}>
                      {member.urdu}
                    </p>
                  </div>
                </div>
                {member.phone && (
                  <a
                    href={`https://wa.me/92${member.phone.replace(/^0/, '').replace(/-/g, '')}?text=${encodeURIComponent('Assalam o Alaikum, I am contacting from Rahman Nursery Farm website.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                      member.highlight
                        ? 'bg-white text-emerald-800 hover:bg-cream-50'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp: {member.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── BOTTOM CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-gradient-to-r from-sage-900 to-emerald-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl"
        >
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-1">
              30+ Years of Botanical Excellence
            </h3>
            <p className="text-sm text-emerald-200 font-semibold">
              Main Farm: <strong className="text-white">Chak Hassan Arain</strong> —
              Serving Lahore, Arifwala, Sahiwal, Pakpattan & All Pakistan
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/923040450065?text=Assalam%20o%20Alaikum%2C%20I%20visited%20Rahman%20Nursery%20Farm%20website%20and%20want%20to%20place%20a%20plant%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-gold px-6 py-3 rounded-2xl text-sm font-extrabold flex items-center gap-2 text-sage-900"
            >
              <MessageCircle className="w-4 h-4" />
              Ansar Hussain: 03040450065
            </a>
            <button
              onClick={onOpenContact}
              className="glass-panel px-6 py-3 rounded-2xl text-sm font-extrabold text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              View All Contacts
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
