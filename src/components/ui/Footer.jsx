import React from 'react';
import { Sparkles, MessageCircle, Phone, MapPin, Heart, Users } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const Footer = ({ onOpenCatalog, onOpenAIPlanner, onOpenContact }) => {
  return (
    <footer className="relative z-10 bg-sage-900 text-cream-50 pt-16 pb-10 px-4 md:px-12 border-t border-sage-700 pointer-events-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        {/* Brand & Family Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-sage-900 flex items-center justify-center font-serif font-bold text-xl">
              R
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight text-cream-50 block leading-tight">
                RAHMAN <span className="text-gold-400">NURSERY</span>
              </span>
              <span className="text-[10px] tracking-widest text-sage-300 uppercase block">
                FARM — EST. 1994 • PAKISTAN
              </span>
            </div>
          </div>

          <p className="text-xs text-sage-300 leading-relaxed mb-2">
            Founded by{' '}
            <span className="text-gold-400 font-bold">Muhammad Shareef (Late) — Baba Shareef</span> — 
            from{' '}
            <span className="text-white font-bold">Chak Hassan Arain</span>.
            Now proudly continued by Muhammad Saleem, Muhammad Rafiq, Abdul Hameed, Bashart Saleem, Kashir Saleem & Ansar Hussain.
          </p>

          <div className="space-y-2 mt-4">
            <a href="https://wa.me/923040450065"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-cream-50 text-xs font-bold hover:bg-emerald-500 transition-colors w-full justify-center">
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>📱 Ansar Hussain: 03040450065</span>
            </a>
            <a href="tel:+923445155160"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-700 text-cream-50 text-xs font-bold hover:bg-sage-600 transition-colors w-full justify-center">
              <Phone className="w-4 h-4" />
              <span>Bashart Saleem: 0344-5155160</span>
            </a>
            <a href="tel:+923041001600"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-700 text-cream-50 text-xs font-bold hover:bg-sage-600 transition-colors w-full justify-center">
              <Phone className="w-4 h-4" />
              <span>Kashir Saleem: 0304-1001600</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest mb-4">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-sage-300">
            <li>
              <button onClick={onOpenCatalog} className="hover:text-gold-300 transition-colors text-left">
                🌿 A-Z Plant Catalog (50+ Varieties)
              </button>
            </li>
            <li>
              <button onClick={onOpenAIPlanner} className="hover:text-gold-300 transition-colors text-left">
                🤖 AI Garden & Budget Planner
              </button>
            </li>
            <li>
              <button onClick={onOpenContact} className="hover:text-gold-300 transition-colors text-left">
                📍 Farm Locations & Directions
              </button>
            </li>
            <li>
              <a href="#family" className="hover:text-gold-300 transition-colors">
                👨‍👩‍👧 Our Family Heritage Story
              </a>
            </li>
          </ul>
        </div>

        {/* Key Plant Collections */}
        <div>
          <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest mb-4">
            Our Specialties
          </h4>
          <ul className="space-y-2 text-xs text-sage-300">
            <li>🌴 Royal Date Palms & Estate Palms</li>
            <li>🍊 Mango, Kinnu, Amrood, Pomegranate</li>
            <li>🪴 Indoor Air Purifier Plants</li>
            <li>🌲 Teak, Sheesham, Neem, Moringa Timber</li>
            <li>🌸 Roses, Motia, Bougainvillea, Champa</li>
            <li>🌾 Zoysia & Bermuda Lawn Grass</li>
            <li>🏡 Turn-Key Villa Landscape Projects</li>
          </ul>
        </div>

        {/* Delivery Cities */}
        <div>
          <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest mb-4">
            Primary Hubs & Delivery
          </h4>
          <div className="mb-3">
            <p className="text-[10px] uppercase tracking-widest text-sage-400 mb-1 font-bold">Main Farm Address</p>
            <div className="flex items-start gap-1.5 text-xs text-white font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
              <span>Chak Hassan Arain, Arifwala, Punjab, Pakistan</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-sage-400 mb-1 font-bold">Primary Hub Cities</p>
            <p className="text-xs font-extrabold text-gold-400 mb-1">
              Lahore • Arifwala • Sahiwal • Pakpattan
            </p>
            <p className="text-xs text-sage-300 font-semibold">
              Okara • Kasur • Multan • Faisalabad • Islamabad • Rawalpindi • Karachi • Peshawar
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-sage-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sage-400">
        <div>
          © {new Date().getFullYear()} Rahman Nursery Farm — Chak Hassan Arain. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          Founded with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Muhammad Shareef (Late) | Pakistan's 3D Botanical World
        </div>
      </div>
    </footer>
  );
};
