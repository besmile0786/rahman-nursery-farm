import React from 'react';
import { ShoppingCart, Leaf, MessageCircle, Sun, MapPin, Heart } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const Navbar = ({
  weatherMode,
  onWeatherChange,
  onOpenCatalog,
  onOpenContact,
  cartCount = 0,
  onOpenCart,
}) => {
  const nextWeatherMode = () => {
    const modes = ['sunrise', 'afternoon', 'golden', 'rain', 'night'];
    const nextIdx = (modes.indexOf(weatherMode) + 1) % modes.length;
    onWeatherChange(modes[nextIdx]);
  };

  const weatherLabels = {
    sunrise: '🌤️ Morning',
    afternoon: '☀️ Afternoon',
    golden: '🌅 Golden',
    rain: '🌧️ Monsoon',
    night: '🌙 Moonlit',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 py-2.5 md:px-8 md:py-3 pointer-events-auto">
      <nav className="max-w-7xl mx-auto glass-panel rounded-full px-4 py-2 md:px-6 md:py-2.5 flex items-center justify-between border border-cream-200 shadow-lg bg-white/95">

        {/* Brand Logo & Name */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-serif font-bold text-lg shadow-md border border-emerald-500/40">
            R
          </div>
          <div>
            <span className="font-serif text-base md:text-lg font-bold tracking-tight text-sage-900 block leading-tight">
              RAHMAN <span className="text-emerald-700">NURSERY</span>
            </span>
            <span className="text-[10px] tracking-widest text-emerald-800 uppercase font-extrabold block">
              50+ YEARS • PAKISTAN
            </span>
          </div>
        </div>

        {/* Main Product Navigation Headings */}
        <div className="hidden md:flex items-center gap-5 text-xs font-bold text-sage-900">
          <button
            onClick={onOpenCatalog}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors border border-emerald-200/80 font-extrabold"
          >
            <Leaf className="w-3.5 h-3.5" />
            🌿 A-Z Plant Catalog
          </button>

          <a
            href="#orchard"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-emerald-700 transition-colors font-extrabold"
          >
            🏡 Bagh Lagwao
          </a>

          <button
            onClick={onOpenContact}
            className="hover:text-emerald-700 transition-colors font-semibold flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Farm Location
          </button>
        </div>

        {/* Right Tools: Prominent Shopping Cart + Simple Weather Cycle + WhatsApp */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Prominent Cart Button with Count Badge */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-all font-extrabold text-xs shadow-md hover:scale-105"
            title="Open Shopping Cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 ? (
              <span className="w-5 h-5 rounded-full bg-amber-400 text-sage-900 font-black text-[11px] flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            ) : (
              <span className="w-5 h-5 rounded-full bg-emerald-800 text-emerald-200 font-bold text-[10px] flex items-center justify-center">
                0
              </span>
            )}
          </button>

          {/* Single Compact Weather Cycle Pill (No clutter) */}
          <button
            onClick={nextWeatherMode}
            className="px-2.5 py-1.5 rounded-full bg-cream-100 border border-cream-200 text-sage-800 hover:bg-cream-200 transition-colors text-xs font-bold flex items-center gap-1"
            title="Click to change 3D lighting"
          >
            <span>{weatherLabels[weatherMode] || '☀️ Lighting'}</span>
          </button>

          {/* WhatsApp Direct Order */}
          <a
            href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065), I am visiting Rahman Nursery Farm website and would like to order plants!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 hover:bg-emerald-200 transition-colors text-xs font-extrabold"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-800/20" />
            <span>03040450065</span>
          </a>

        </div>

      </nav>
    </header>
  );
};
