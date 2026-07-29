import React, { useState } from 'react';
import { Volume2, VolumeX, Sun, CloudRain, Moon, Sparkles, MessageCircle, ShoppingBag, Compass, MapPin } from 'lucide-react';
import { audioEngine } from '../../utils/audioEngine';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const Navbar = ({
  weatherMode,
  onWeatherChange,
  onOpenCatalog,
  onOpenAIPlanner,
  onOpenContact
}) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    const playing = audioEngine.toggle();
    setIsMuted(!playing);
  };

  const weatherOptions = [
    { id: 'sunrise', label: 'Sunrise', icon: Sun },
    { id: 'afternoon', label: 'Daylight', icon: Sun },
    { id: 'golden', label: 'Golden Hour', icon: Sparkles },
    { id: 'rain', label: 'Monsoon', icon: CloudRain },
    { id: 'night', label: 'Night', icon: Moon },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 md:px-8 md:py-4 pointer-events-auto">
      <nav className="max-w-7xl mx-auto glass-panel rounded-full px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-between border border-cream-200 shadow-xl bg-white/95">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-emerald-700 to-emerald-500 flex items-center justify-center shadow-md text-white font-serif font-bold text-lg border border-gold-500/40">
            R
          </div>
          <div>
            <span className="font-serif text-base md:text-xl font-bold tracking-tight text-sage-900 block leading-tight">
              RAHMAN <span className="text-gold-600 font-normal">NURSERY</span>
            </span>
            <span className="text-[10px] md:text-xs tracking-widest text-emerald-800 uppercase font-bold block">
              EST. 1994 • PAKISTAN
            </span>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="hidden lg:flex items-center gap-6 text-xs md:text-sm font-bold text-sage-900">
          <button onClick={onOpenCatalog} className="flex items-center gap-2 hover:text-gold-600 transition-colors">
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            3D Plant Catalog
          </button>
          <button onClick={onOpenAIPlanner} className="flex items-center gap-2 hover:text-gold-600 transition-colors">
            <Compass className="w-4 h-4 text-amber-500" />
            AI Garden Planner
          </button>
          <button onClick={onOpenContact} className="flex items-center gap-2 hover:text-gold-600 transition-colors">
            <MapPin className="w-4 h-4 text-emerald-600" />
            Farm Locations
          </button>
        </div>

        {/* Right Tools: Weather Selector + Audio Toggle + WhatsApp CTA */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Weather Selector Cycle Button */}
          <div className="flex items-center bg-cream-100/90 rounded-full p-1 border border-cream-200">
            {weatherOptions.map((opt) => {
              const IconComp = opt.icon;
              const isActive = weatherMode === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => onWeatherChange(opt.id)}
                  title={`Switch to ${opt.label}`}
                  className={`p-1.5 md:p-2 rounded-full transition-all text-xs font-bold flex items-center gap-1 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-md scale-105'
                      : 'text-sage-700 hover:text-sage-900'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Soundscape Toggle */}
          <button
            onClick={toggleAudio}
            className={`p-2.5 rounded-full border transition-all ${
              !isMuted
                ? 'bg-amber-400 text-sage-900 border-amber-500 shadow-md'
                : 'bg-white text-sage-700 border-cream-200 hover:bg-cream-100'
            }`}
            title={isMuted ? 'Turn on nature soundscape' : 'Mute soundscape'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
          </button>

          {/* Direct WhatsApp Order CTA */}
          <a
            href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Rahman Nursery Farm (0304-0450065), I am visiting your website and would like to inquire about plants & landscaping!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-primary px-3.5 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-extrabold flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span className="hidden sm:inline">0304-0450065</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
